# Portfolio — Ramy Nebili

Site vitrine : design, création et refonte de sites web, communication digitale.
Next.js 16 (App Router) · React 19 · CSS Modules · Framer Motion · next-themes.

## Lancer

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # build de production
pnpm lint       # ESLint
```

## Où vit quoi

| Dossier | Rôle |
|---|---|
| `data/` | **Tout le contenu** (projets, profil, compétences, réglages). Futur remplacé par un CMS. |
| `lib/content.js` | Point d'accès unique aux données. Les composants n'importent jamais `data/` directement. |
| `lib/icons.js` | Résolution des icônes par clé texte (`'figma'` → composant). |
| `app/` | Pages : `/`, `/about`, `/projects`, `/projects/[slug]`, 404, sitemap, robots, image OG. |
| `components/layout/` | Header (capsule → sidebar), Footer. |
| `components/sections/` | Sections de la home. |
| `components/project/` | Page détail projet (en-tête, galerie, navigation). |
| `components/ui/` | Briques : boutons sociaux, chips, toggle de thème, texte riche… |
| `public/image/` | Médias optimisés servis (WebP, MP4 compressé). |
| `public/projects/<slug>/` | Médias des pages projet. |
| `public/cv/` | CV téléchargeables (liste dans `data/profile.js`). |
| `assets-src/` | Sources brutes (PNG, .glb, .mov) — gitignoré, jamais servi. |
| `scripts/optimize-media.mjs` | `pnpm media <dossier> <slug>` : images → WebP, vidéos → MP4 H.264 + poster. |

## Thème

Design tokens dans `app/globals.css` (`--bg`, `--surface`, `--text`, `--accent`…).
Deux thèmes : `[data-theme="dark"]` et `[data-theme="light"]`, pilotés par `next-themes`
(préférence système par défaut, toggle dans le header). **Aucune couleur en dur dans les
composants** : toujours une variable.

## Ajouter un projet

1. Déposer les visuels bruts dans un dossier, puis `pnpm media ./mon-dossier mon-slug`.
2. Ajouter une entrée dans `data/projects.js` (voir le schéma commenté en tête de fichier).
3. `pnpm build` : la page `/projects/mon-slug` et le sitemap sont générés.

## CMS (à venir)

Le site est prêt à brancher un CMS (Sanity, Payload, Strapi…) : seules les fonctions de
`lib/content.js` changent, plus le rendu de `components/ui/RichText.jsx` si le texte riche
devient structuré. Voir `docs/CMS.md`.
