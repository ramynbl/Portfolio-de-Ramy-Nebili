# Portfolio de Ramy Nebili

Portfolio personnel orienté **recherche d'alternance en marketing digital**.

Ramy prépare le **Bachelor Webmarketing & UX** à HETIC (titre RNCP 39602, chef de
projet digital) et recherche une alternance de 2 ans dès octobre 2026, au rythme
d'une semaine d'école pour trois semaines en entreprise.

## Stack

- **Framework** : [Next.js 16](https://nextjs.org/) (App Router), React 19
- **Animations** : [Framer Motion](https://www.framer.com/motion/)
- **Icônes** : [React Icons](https://react-icons.github.io/react-icons/)
- **Styles** : CSS Modules et variables CSS (thème sombre)
- **Mesure** : Vercel Analytics et Speed Insights

## Structure

```
app/          pages (accueil, à propos, projets, sitemap, robots, image OG)
components/   sections, layout, UI et blocs de page projet
data/         contenu éditorial : site, profil, projets, compétences
lib/          content.js (accès aux contenus) et icons.js (icônes par clé)
public/       médias, CV, visuels de projets
scripts/      optimize-media.mjs (images en WebP, vidéos en MP4 web)
```

## Conventions

**Tout le contenu éditorial vit dans `data/`.** Les composants reçoivent leurs
données en props et n'importent jamais `data/` directement : ils passent par
`lib/content.js`, qui est le point d'accès unique. Le jour où un CMS remplacera
les fichiers statiques, seul le corps de ces fonctions change.

**Aucune couleur en dur dans les CSS Modules.** Tout passe par les variables
définies dans `app/globals.css`.

**Aucun tiret cadratin** dans les contenus. On utilise deux-points, virgules,
parenthèses ou points.

Les projets portant `archived: true` disparaissent de l'accueil, de `/projects`
et du sitemap, mais leur page reste accessible par lien direct.

## Lancer le projet

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # build de production
pnpm lint       # ESLint
```

## Optimiser des médias

```bash
pnpm media <dossier-source> <slug>
```

Convertit les images en WebP (1600 px max) et les vidéos en MP4 web avec poster,
dans `public/projects/<slug>/`. Nécessite ffmpeg pour les vidéos.

## Licence

Projet personnel, non destiné à un usage commercial sans autorisation préalable.
