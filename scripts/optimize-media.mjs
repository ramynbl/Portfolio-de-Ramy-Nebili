#!/usr/bin/env node
/**
 * Optimise les médias d'un projet avant intégration.
 *
 *   pnpm media <dossier-source> <slug> [--max 1600]
 *
 * - Images (png/jpg/jpeg/webp/tiff) → WebP, largeur max 1600 px (qualité 82)
 * - Vidéos (mp4/mov/webm)           → MP4 H.264 1080p max, CRF 24, sans audio,
 *                                     faststart, + poster JPG de la 1re seconde
 *
 * Sortie : public/projects/<slug>/<nom>.webp | .mp4 | -poster.jpg
 * Nécessite ffmpeg dans le PATH pour les vidéos.
 */
import { readdirSync, mkdirSync, statSync } from 'node:fs';
import { join, parse, resolve } from 'node:path';
import { execFileSync } from 'node:child_process';
import sharp from 'sharp';

const args = process.argv.slice(2);
const [srcDir, slug] = args;
const maxIdx = args.indexOf('--max');
const MAX_WIDTH = maxIdx > -1 ? Number(args[maxIdx + 1]) : 1600;

if (!srcDir || !slug) {
    console.error('usage: pnpm media <dossier-source> <slug> [--max 1600]');
    process.exit(1);
}

const outDir = resolve('public/projects', slug);
mkdirSync(outDir, { recursive: true });

const IMAGE_EXT = new Set(['.png', '.jpg', '.jpeg', '.webp', '.tiff', '.tif']);
const VIDEO_EXT = new Set(['.mp4', '.mov', '.webm', '.m4v']);

const slugify = (name) => name.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const human = (bytes) => `${(bytes / 1024 / 1024).toFixed(2)} Mo`;

for (const file of readdirSync(srcDir)) {
    const src = join(srcDir, file);
    if (!statSync(src).isFile()) continue;
    const { name, ext } = parse(file);
    const base = slugify(name);
    const lower = ext.toLowerCase();

    if (IMAGE_EXT.has(lower)) {
        const out = join(outDir, `${base}.webp`);
        const info = await sharp(src).rotate().resize({ width: MAX_WIDTH, withoutEnlargement: true }).webp({ quality: 82 }).toFile(out);
        console.log(`🖼  ${file} → ${base}.webp  ${info.width}×${info.height}  ${human(statSync(src).size)} → ${human(info.size)}`);
    } else if (VIDEO_EXT.has(lower)) {
        const out = join(outDir, `${base}.mp4`);
        const poster = join(outDir, `${base}-poster.jpg`);
        // Sortie normalisée en plage limitée BT.709, déclarée dans le flux : une
        // source en pleine plage (capture d'écran, images JPEG) serait sinon
        // affichée trop claire par les navigateurs.
        execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-i', src,
            '-vf', "scale='min(1920,iw)':-2:out_color_matrix=bt709:out_range=limited,format=yuv420p",
            '-c:v', 'libx264', '-crf', '24', '-preset', 'slow',
            '-color_range', 'tv', '-colorspace', 'bt709', '-color_primaries', 'bt709', '-color_trc', 'bt709',
            '-movflags', '+faststart', '-an', out]);
        execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-ss', '1', '-i', out, '-frames:v', '1', '-q:v', '3', poster]);
        console.log(`🎬 ${file} → ${base}.mp4 + poster  ${human(statSync(src).size)} → ${human(statSync(out).size)}`);
    } else {
        console.log(`⏭  ${file} ignoré`);
    }
}
console.log(`\n✓ Fichiers écrits dans public/projects/${slug}/`);
