/**
 * Pilote Chrome headless via le DevTools Protocol (CDP) pour capturer un site :
 * captures fixes, et clips vidéo avec un curseur simulé visible.
 *
 * Utilisé par run.mjs et les scénarios de scripts/capture/scenarios/.
 * Chrome : /Applications/Google Chrome.app, ou la variable CHROME_PATH.
 * ffmpeg doit être dans le PATH pour assembler les clips.
 */
import { spawn, execFileSync } from 'node:child_process';
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const CHROME = process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const CURSOR_SCRIPT = readFileSync(join(dirname(fileURLToPath(import.meta.url)), 'cursor.js'), 'utf8');

export const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const easeInOut = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const T0 = Date.now();
const log = (msg) => console.log(`  [${((Date.now() - T0) / 1000).toFixed(1).padStart(5)} s] ${msg}`);

/** Expression JS qui renvoie l'élément `tag` dont le texte vaut exactement `text`. */
export const byText = (text, tag = 'button') =>
    `[...document.querySelectorAll(${JSON.stringify(tag)})].find((el) => el.textContent.trim() === ${JSON.stringify(text)})`;

export async function launch({ width = 1920, height = 1080, outDir }) {
    mkdirSync(outDir, { recursive: true });
    const profile = mkdtempSync(join(tmpdir(), 'capture-chrome-'));

    const chrome = spawn(CHROME, [
        '--headless=new', '--hide-scrollbars', '--mute-audio', '--no-first-run',
        '--no-default-browser-check', '--autoplay-policy=no-user-gesture-required',
        '--remote-debugging-port=0', `--user-data-dir=${profile}`,
        `--window-size=${width},${height}`, 'about:blank',
    ], { stdio: ['ignore', 'ignore', 'pipe'] });

    // Port libre choisi par Chrome : on lit l'adresse qu'il annonce sur stderr.
    const wsUrl = await new Promise((resolve, reject) => {
        let buf = '';
        const timer = setTimeout(() => reject(new Error('Chrome ne répond pas')), 20000);
        chrome.stderr.on('data', (d) => {
            buf += d;
            const m = buf.match(/DevTools listening on (ws:\/\/\S+)/);
            if (m) { clearTimeout(timer); resolve(m[1]); }
        });
        chrome.on('exit', (code) => reject(new Error(`Chrome s'est arrêté (code ${code})`)));
    });

    const ws = new WebSocket(wsUrl);
    await new Promise((resolve, reject) => { ws.onopen = resolve; ws.onerror = reject; });

    let seq = 0;
    const pending = new Map();
    const listeners = new Map();
    ws.onmessage = (e) => {
        const msg = JSON.parse(e.data);
        if (msg.id && pending.has(msg.id)) {
            const { resolve, reject } = pending.get(msg.id);
            pending.delete(msg.id);
            if (msg.error) reject(new Error(msg.error.message));
            else resolve(msg.result);
        } else if (msg.method) {
            listeners.get(msg.method)?.forEach((fn) => fn(msg.params));
        }
    };
    const rawSend = (method, params = {}, sessionId) => new Promise((resolve, reject) => {
        const id = ++seq;
        pending.set(id, { resolve, reject });
        ws.send(JSON.stringify({ id, method, params, sessionId }));
    });
    const on = (method, fn) => {
        if (!listeners.has(method)) listeners.set(method, new Set());
        listeners.get(method).add(fn);
        return () => listeners.get(method).delete(fn);
    };
    const once = (method, timeout = 30000) => new Promise((resolve, reject) => {
        const timer = setTimeout(() => { off(); reject(new Error(`Délai dépassé : ${method}`)); }, timeout);
        const off = on(method, (params) => { clearTimeout(timer); off(); resolve(params); });
    });

    const { targetId } = await rawSend('Target.createTarget', { url: 'about:blank' });
    const { sessionId } = await rawSend('Target.attachToTarget', { targetId, flatten: true });
    const send = (method, params) => rawSend(method, params, sessionId);

    await send('Page.enable');
    await send('Runtime.enable');
    await send('Page.bringToFront');
    await send('Emulation.setFocusEmulationEnabled', { enabled: true });
    await send('Page.addScriptToEvaluateOnNewDocument', { source: CURSOR_SCRIPT });

    let vp = { width, height, mobile: false };
    const applyViewport = (dpr) => send('Emulation.setDeviceMetricsOverride', {
        width: vp.width, height: vp.height, deviceScaleFactor: dpr, mobile: vp.mobile,
    });
    await applyViewport(1);

    // ---------------------------------------------------------------- page

    async function evaluate(expression) {
        const res = await send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true });
        if (res.exceptionDetails) {
            throw new Error(`Erreur dans la page : ${res.exceptionDetails.exception?.description || res.exceptionDetails.text}`);
        }
        return res.result.value;
    }

    async function waitFor(expression, { timeout = 15000, label } = {}) {
        const start = Date.now();
        while (Date.now() - start < timeout) {
            if (await evaluate(`Boolean(${expression})`)) return;
            await sleep(100);
        }
        throw new Error(`Délai dépassé en attendant : ${label || expression}`);
    }

    async function goto(url) {
        log(`→ ${url}`);
        const loaded = once('Page.domContentEventFired');
        await send('Page.navigate', { url });
        await loaded;
        await waitFor('document.readyState !== "loading"', { timeout: 30000, label: `chargement de ${url}` });
        // Nouveau document, nouveau curseur : on le replace là où était la souris.
        if (mouse.x >= 0) await nudge();
    }

    async function viewport({ width: w, height: h, mobile = false }) {
        vp = { width: w, height: h, mobile };
        await applyViewport(1);
    }

    // --------------------------------------------------------------- souris

    let mouse = { x: -100, y: -100 };
    const move = (x, y) => send('Input.dispatchMouseEvent', { type: 'mouseMoved', x, y, button: 'none', buttons: 0 });

    async function nudge() {
        await move(mouse.x + 1, mouse.y);
        await move(mouse.x, mouse.y);
    }

    /** Déplace la souris en douceur, sur une légère courbe comme un vrai geste. */
    async function moveTo(x, y, { duration } = {}) {
        const from = { ...mouse };
        const dx = x - from.x;
        const dy = y - from.y;
        const dist = Math.hypot(dx, dy);
        const ms = duration ?? Math.min(900, Math.max(380, 300 + dist * 0.35));

        if (ms <= 0 || from.x < 0) {
            mouse = { x, y };
            await move(x, y);
            return;
        }

        const bend = Math.min(60, dist * 0.08);
        const nx = -dy / (dist || 1);
        const ny = dx / (dist || 1);
        const steps = Math.max(8, Math.round(ms / 16));
        for (let i = 1; i <= steps; i++) {
            const t = easeInOut(i / steps);
            const arc = Math.sin(Math.PI * t) * bend;
            await move(from.x + dx * t + nx * arc, from.y + dy * t + ny * arc);
            await sleep(ms / steps);
        }
        mouse = { x, y };
    }

    const measure = (finder) => evaluate(`(() => {
        const el = ${finder};
        if (!el) return null;
        el.scrollIntoView({ block: 'nearest', inline: 'nearest' });
        const r = el.getBoundingClientRect();
        return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
    })()`);
    const moved = (a, b) => Math.hypot(a.x - b.x, a.y - b.y) > 2;

    /**
     * Clique au centre de l'élément renvoyé par `finder` (une expression JS).
     *
     * Un élément qui vient d'apparaître peut encore bouger : animation d'entrée,
     * ou bloc voisin en train de disparaître qui fait remonter la mise en page.
     * On attend donc qu'il soit immobile avant de viser, et on corrige la
     * trajectoire s'il s'est déplacé pendant le geste.
     */
    async function click(finder, { move: animate = true, duration, label } = {}) {
        await waitFor(finder, { label: label || finder });
        let pt = await measure(finder);
        for (let i = 0; i < 15 && pt; i++) {
            await sleep(80);
            const next = await measure(finder);
            if (!next || !moved(pt, next)) break;
            pt = next;
        }
        if (!pt) throw new Error(`Élément introuvable : ${label || finder}`);

        await moveTo(pt.x, pt.y, { duration: animate ? duration : 0 });
        for (let i = 0; i < 3; i++) {
            const now = await measure(finder);
            if (!now || !moved(pt, now)) break;
            pt = now;
            await moveTo(pt.x, pt.y, { duration: animate ? 260 : 0 });
        }
        if (animate) await sleep(110);
        await send('Input.dispatchMouseEvent', { type: 'mousePressed', x: pt.x, y: pt.y, button: 'left', buttons: 1, clickCount: 1 });
        await sleep(animate ? 80 : 20);
        await send('Input.dispatchMouseEvent', { type: 'mouseReleased', x: pt.x, y: pt.y, button: 'left', buttons: 0, clickCount: 1 });
    }

    /**
     * Clique, puis vérifie que `condition` devient vraie. Si le clic s'est perdu
     * (envoyé pendant une transition, ou juste après le chargement), on le renvoie.
     * On ne réessaie que si rien n'a changé : pas de risque de double action.
     */
    async function clickUntil(finder, condition, { tries = 3, timeout = 4000, label, ...opts } = {}) {
        for (let i = 1; i <= tries; i++) {
            await click(finder, { ...opts, label, move: i === 1 ? opts.move : false });
            try {
                await waitFor(condition, { timeout, label });
                return;
            } catch (err) {
                if (i === tries) throw err;
                log(`↻ clic sans effet sur « ${label || finder} », nouvel essai`);
            }
        }
    }

    async function key(k, { shift = false } = {}) {
        const code = /^[a-z]$/i.test(k) ? `Key${k.toUpperCase()}` : k;
        const vk = k.length === 1 ? k.toUpperCase().charCodeAt(0) : undefined;
        const base = { key: k, code, modifiers: shift ? 8 : 0, windowsVirtualKeyCode: vk, nativeVirtualKeyCode: vk };
        await send('Input.dispatchKeyEvent', { type: 'keyDown', ...base });
        await send('Input.dispatchKeyEvent', { type: 'keyUp', ...base });
    }

    const cursor = (visible) =>
        evaluate(`window.__captureCursor && window.__captureCursor.${visible ? 'show' : 'hide'}()`);

    // ------------------------------------------------------------- captures

    /** Capture fixe, sans curseur, en haute densité (DPR 2 par défaut). */
    async function screenshot(name, { dpr = 2 } = {}) {
        await cursor(false);
        if (dpr !== 1) { await applyViewport(dpr); await sleep(600); }
        const { data } = await send('Page.captureScreenshot', { format: 'png' });
        if (dpr !== 1) { await applyViewport(1); await sleep(250); }
        await cursor(true);
        writeFileSync(join(outDir, `${name}.png`), Buffer.from(data, 'base64'));
        log(`📸 ${name}.png`);
    }

    // ---------------------------------------------------------------- clips

    // Le screencast n'envoie une image que quand l'écran change : chaque image
    // est horodatée et ffmpeg lui redonne sa durée réelle à l'assemblage.
    let clip = null;
    on('Page.screencastFrame', (p) => {
        send('Page.screencastFrameAck', { sessionId: p.sessionId }).catch(() => {});
        if (!clip) return;
        const file = join(clip.dir, `f${String(clip.frames.length).padStart(5, '0')}.jpg`);
        writeFileSync(file, Buffer.from(p.data, 'base64'));
        clip.frames.push({ file, t: p.metadata.timestamp });
    });

    async function startClip(name) {
        clip = { name, dir: mkdtempSync(join(tmpdir(), `clip-${name}-`)), frames: [] };
        await send('Page.startScreencast', {
            format: 'jpeg', quality: 92, maxWidth: vp.width, maxHeight: vp.height, everyNthFrame: 1,
        });
        // Force une première image même si la page est immobile.
        if (mouse.x >= 0) await nudge();
        log(`🎬 ${name} : enregistrement…`);
    }

    async function stopClip() {
        await sleep(150);
        await send('Page.stopScreencast');
        const end = Date.now() / 1000;
        const c = clip;
        clip = null;
        if (c.frames.length < 2) throw new Error(`Clip ${c.name} : trop peu d'images (${c.frames.length})`);

        const lines = [];
        c.frames.forEach((f, i) => {
            const next = c.frames[i + 1]?.t ?? end;
            lines.push(`file '${f.file}'`, `duration ${Math.max(0.001, next - f.t).toFixed(4)}`);
        });
        // Le démuxeur concat ignore la durée de la dernière entrée : on la répète.
        lines.push(`file '${c.frames.at(-1).file}'`);
        const list = join(c.dir, 'list.txt');
        writeFileSync(list, lines.join('\n'));

        // Les images du screencast sont des JPEG, donc en pleine plage (BT.601).
        // On convertit en plage limitée BT.709 et on le déclare : sinon Chrome lit
        // la vidéo comme limitée et sature les clairs (un fond beige devient blanc).
        const out = join(outDir, `${c.name}.mp4`);
        execFileSync('ffmpeg', [
            '-y', '-loglevel', 'error', '-f', 'concat', '-safe', '0', '-i', list,
            '-vf', 'scale=trunc(iw/2)*2:trunc(ih/2)*2:out_color_matrix=bt709:out_range=limited,format=yuv420p',
            '-fps_mode', 'cfr', '-r', '30', '-c:v', 'libx264', '-crf', '18', '-preset', 'slow',
            '-color_range', 'tv', '-colorspace', 'bt709', '-color_primaries', 'bt709', '-color_trc', 'bt709',
            '-movflags', '+faststart', '-an', out,
        ]);
        rmSync(c.dir, { recursive: true, force: true });

        const seconds = end - c.frames[0].t;
        log(`✓ ${c.name}.mp4 · ${seconds.toFixed(1)} s · ${c.frames.length} images captées (~${Math.round(c.frames.length / seconds)}/s)`);
    }

    async function close() {
        try { ws.close(); } catch { /* déjà fermé */ }
        chrome.kill('SIGKILL');
        await sleep(300);
        rmSync(profile, { recursive: true, force: true });
    }

    return {
        evaluate, waitFor, goto, viewport, moveTo, click, clickUntil, key, cursor,
        screenshot, startClip, stopClip, close, log, wait: sleep,
    };
}
