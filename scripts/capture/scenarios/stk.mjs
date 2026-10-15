/**
 * Scénario de capture : « Ligne organique », jeu de cartes sur le biomimétisme
 * conçu pour STK Architecture. https://stk-card-game.vercel.app/
 *
 * Le jeu n'a pas d'URL par écran : on le joue. Les paires se retrouvent sans le
 * code source, par le numéro des images : card-inspiration-NN va avec
 * card-innovation-NN.
 *
 * Étapes (filtrables avec --only) : intro, lien-reussi, lien-rate,
 * fin-de-sequence, stills. L'étape mobile ne tourne que si on la demande
 * (--only mobile) : la mise en page mobile du jeu n'est pas présentable.
 */
import { byText } from '../browser.mjs';

// 1600×900 : du 16/9 comme la couverture des pages projet, et une hauteur sous
// 950 px qui active la mise en page « portable » prévue par l'équipe (maquettes
// Figma en 1440 de large). En 1920×1080 le plateau n'occupe que le haut de l'écran.
export const meta = {
    slug: 'stk-ligne-organique',
    url: 'https://stk-card-game.vercel.app/',
    width: 1600,
    height: 900,
};

const CLIPS = ['intro', 'lien-reussi', 'lien-rate', 'fin-de-sequence'];

const pad = (n) => String(n).padStart(2, '0');
const card = (side, n) =>
    `document.querySelector('.grid-square img[src$="card-${side}-${pad(n)}.webp"]')?.closest('.grid-square')`;
const left = (n) => card('inspiration', n);
const right = (n) => card('innovation', n);

/** Numéros des paires encore à trouver dans la séquence affichée. */
const REMAINING = `[...document.querySelectorAll('.grid-square:not(.matched) img[src*="card-inspiration-"]')]
    .map((img) => Number(img.src.match(/-(\\d+)\\.webp$/)[1]))`;
const HAS_HINT_FAIL = `[...document.querySelectorAll('.explanation-text h2')].some((h) => h.textContent.includes('Piste'))`;
const GRID = `document.querySelector('.grid-square')`;
// 0 : indice côté nature, 1 : indice côté innovation. Le texte du bouton commence
// par une icône « ? », d'où la recherche par classe plutôt que par texte.
const hint = (i) => `document.querySelectorAll('.hint-toggle')[${i}]`;

const onPage = (text) => `document.body.innerText.includes(${JSON.stringify(text)})`;

/**
 * Accueil puis les trois écrans d'onboarding, jusqu'au plateau de jeu.
 * Chaque clic attend que l'écran suivant soit vraiment affiché : un clic
 * envoyé pendant une transition de diapositive peut se perdre.
 */
async function enterGame(b, { slow }) {
    await b.clickUntil(byText("Commencer l'exploration"), onPage('Le biomimétisme'), { move: slow, label: 'Commencer l\'exploration' });
    const steps = [
        ['Suivant', onPage('Comment faire le lien')],
        ['Suivant', onPage("Besoin d'aide")],
        ['Commencer', GRID],
    ];
    for (const [label, next] of steps) {
        await b.wait(slow ? 2300 : 700);
        await b.clickUntil(byText(label), next, { move: slow, label, timeout: 5000 });
    }
}

/** Associe la paire `n` : carte nature, carte innovation, puis « Lier ». */
async function link(b, n, { slow, withHint = false, hold = 0, next = true }) {
    await b.click(left(n), { move: slow, label: `carte nature ${n}` });
    await b.click(right(n), { move: slow, label: `carte innovation ${n}` });
    if (withHint) {
        await b.wait(450);
        await b.click(hint(0), { move: slow, label: 'indice nature' });
        await b.wait(2000);
    }
    await b.wait(slow ? 400 : 150);
    await b.clickUntil(byText('Lier'), byText('Suivant'), { move: slow, label: `Lier (paire ${n})` });
    if (hold) await b.wait(hold);
    if (next) {
        await b.click(byText('Suivant'), { move: slow });
        await b.wait(slow ? 600 : 300);
    }
}

/** Mauvaise association : la secousse, puis la « piste d'observation ». */
async function miss(b, a, c, { slow, hold = 0 }) {
    await b.click(left(a), { move: slow });
    await b.click(right(c), { move: slow });
    await b.wait(slow ? 400 : 150);
    await b.clickUntil(byText('Lier'), HAS_HINT_FAIL, { move: slow, label: 'Lier (mauvaise paire)', timeout: 6000 });
    if (hold) await b.wait(hold);
}

/** Résout la séquence en cours, sauf `keep` paires laissées pour la caméra. */
async function solveAllBut(b, keep) {
    const todo = await b.evaluate(REMAINING);
    const kept = todo.splice(todo.length - keep, keep);
    for (const n of todo) await link(b, n, { slow: false });
    return kept;
}

export default async function run(b, { want, only }) {
    const { url } = meta;

    // Enregistre fn sous forme de clip si l'étape est demandée, sinon la joue seulement.
    const rec = async (name, fn) => {
        if (!want(name)) return fn();
        await b.startClip(name);
        await fn();
        await b.stopClip();
    };

    // ---------------------------------------------------------------- clips
    if (CLIPS.some(want)) {
        // Préchauffage : un premier passage non filmé met en cache les images
        // et les vidéos de l'onboarding (dont une vidéo 4K de 14 Mo).
        b.log('Préchauffage du cache…');
        await b.goto(url);
        await b.wait(2000);
        await enterGame(b, { slow: false });

        await b.goto(url);
        await b.moveTo(meta.width * 0.86, meta.height * 0.88, { duration: 0 }); // en bas à droite, discret

        await rec('intro', async () => {
            await b.wait(6200); // les 48 cartes de l'accueil se posent
            await enterGame(b, { slow: true });
            await b.wait(1600);
        });

        await rec('lien-reussi', async () => {
            await b.wait(500);
            await link(b, 1, { slow: true, withHint: true, hold: 3400 });
            await b.wait(600);
        });

        await rec('lien-rate', async () => {
            await b.wait(400);
            await miss(b, 2, 6, { slow: true, hold: 2800 });
        });

        const [last] = await solveAllBut(b, 1);
        await rec('fin-de-sequence', async () => {
            await b.wait(400);
            await link(b, last, { slow: true, hold: 2000 });
            await b.clickUntil(byText('Séquence suivante'), `document.querySelector('.transition-title')`, { label: 'Séquence suivante' });
            await b.wait(2800);
        });
    }

    // ------------------------------------------------------- captures fixes
    if (want('stills')) {
        b.log('Captures fixes…');
        await b.goto(url);
        await b.wait(6800);
        await b.screenshot('accueil');

        const slides = ['Le biomimétisme', 'Comment faire le lien', "Besoin d'aide"];
        await b.clickUntil(byText("Commencer l'exploration"), onPage(slides[0]), { move: false });
        for (const [i, title] of slides.entries()) {
            await b.wait(1600);
            await b.screenshot(`onboarding-${i + 1}`);
            const last = i === slides.length - 1;
            await b.clickUntil(byText(last ? 'Commencer' : 'Suivant'), last ? GRID : onPage(slides[i + 1]), { move: false });
        }
        await b.waitFor(GRID);
        await b.wait(1400);
        await b.screenshot('jeu');

        // Une paire choisie, indice ouvert des deux côtés.
        await b.click(left(5), { move: false });
        await b.click(right(5), { move: false });
        await b.wait(500);
        await b.click(hint(0), { move: false, label: 'indice nature' });
        await b.wait(300);
        await b.click(hint(1), { move: false, label: 'indice innovation' });
        await b.wait(900);
        await b.screenshot('paire-indice');

        await b.click(byText('Lier'), { move: false });
        await b.waitFor(byText('Suivant'));
        await b.wait(1600);
        await b.screenshot('lien-reussi');
        await b.click(byText('Suivant'), { move: false });
        await b.wait(500);

        await miss(b, 3, 7, { slow: false });
        await b.wait(900);
        await b.screenshot('piste-observation');

        await solveAllBut(b, 0);
        await b.clickUntil(byText('Séquence suivante'), `document.querySelector('.transition-title')`, { move: false });
        await b.wait(1400);
        await b.screenshot('transition');

        // Raccourci de développement laissé en production : saut à l'écran de fin.
        await b.key('F', { shift: true });
        await b.waitFor(byText('Rejouer le parcours'), { label: 'écran de fin' });
        await b.wait(1500);
        await b.screenshot('fin');
    }

    // --------------------------------------------------------------- mobile
    if (only?.has('mobile')) {
        b.log('Captures mobiles…');
        await b.viewport({ width: 390, height: 844, mobile: true });
        await b.goto(url);
        await b.wait(6800);
        await b.screenshot('mobile-accueil', { dpr: 3 });
        await enterGame(b, { slow: false });
        await b.wait(1400);
        await b.screenshot('mobile-jeu', { dpr: 3 });
        await b.viewport({ width: meta.width, height: meta.height });
    }
}
