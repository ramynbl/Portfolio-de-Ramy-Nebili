#!/usr/bin/env node
/**
 * Capture un projet en ligne : captures fixes et clips vidéo.
 *
 *   pnpm capture <scénario> [--only etape1,etape2]
 *
 * Un scénario (scripts/capture/scenarios/<nom>.mjs) exporte `meta`
 * ({ slug, url, width, height }) et une fonction par défaut qui reçoit le
 * navigateur piloté. Les fichiers bruts vont dans assets-src/<slug>/ (ignoré
 * par git). On les optimise ensuite avec : pnpm media assets-src/<slug> <slug>
 */
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { launch } from './browser.mjs';

const [name, ...rest] = process.argv.slice(2);
if (!name) {
    console.error('usage : pnpm capture <scénario> [--only etape1,etape2]');
    process.exit(1);
}
const onlyIdx = rest.indexOf('--only');
const only = onlyIdx > -1 ? new Set(rest[onlyIdx + 1].split(',')) : null;

const here = dirname(fileURLToPath(import.meta.url));
const scenario = await import(join(here, 'scenarios', `${name}.mjs`));
const { meta } = scenario;
const outDir = resolve('assets-src', meta.slug);

console.log(`Capture de ${meta.url}`);
const b = await launch({ width: meta.width, height: meta.height, outDir });
const t0 = Date.now();
try {
    await scenario.default(b, { want: (step) => !only || only.has(step), only });
    console.log(`\n✓ Terminé en ${Math.round((Date.now() - t0) / 1000)} s, fichiers bruts dans assets-src/${meta.slug}/`);
    console.log(`  Étape suivante : pnpm media assets-src/${meta.slug} ${meta.slug}`);
} catch (err) {
    console.error(`\n✗ ${err.message}`);
    process.exitCode = 1;
} finally {
    await b.close();
}
