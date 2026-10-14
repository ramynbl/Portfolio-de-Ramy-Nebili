/**
 * Projets. Chaque entrée reflète le futur document CMS « project ».
 *
 * Champs :
 *  slug        identifiant d'URL (kebab-case) : /projects/<slug>
 *  kind        'client' | 'product' | 'school' | 'personal'
 *  category    libellé affiché sur les cartes
 *  tagline     une phrase d'accroche
 *  summary     2 à 3 phrases, **gras** autorisé (rendu par <RichText/>)
 *  sections    0 à 3 blocs courts { heading, body } pour la page détail
 *  cover       média principal { type: 'video'|'image', src, poster?, alt }
 *  coverMobile média alternatif affiché sous 768 px (optionnel)
 *  thumbnail   image pour les petites cartes (carrousel « Autres projets »)
 *  gallery     [{ type, src, poster?, alt, caption?, span: 'full'|'half' }]
 *  featured    affiché dans les grandes cartes de la home
 *  archived    retiré de la home, de /projects et du sitemap.
 *              La page /projects/<slug> reste accessible par lien direct.
 *  order       tri croissant
 */
export const projects = [
    {
        slug: 'focus-defense',
        title: 'Focus Defence',
        client: 'Focus Defence, cabinet d\'executive search',
        year: '2026',
        kind: 'client',
        category: 'Mission freelance',
        tagline: 'Refonte complète d\'un site d\'executive search, de l\'audit à la mise en ligne.',
        summary:
            'Audit de l\'existant, refonte graphique et **design system** sur Figma, prototype validé par le client, puis intégration du nouveau site avec un **CMS** pour qu\'il publie ses contenus sans développeur. Site **bilingue** allemand et anglais, 24 pages.',
        role: 'Audit UX/UI, direction artistique, intégration, relation client',
        services: ['Audit UX/UI', 'Refonte graphique', 'Design system', 'Prototypage', 'Intégration', 'CMS'],
        sections: [
            {
                heading: 'Le contexte',
                body: 'Un cabinet de recrutement de dirigeants pour les secteurs de la défense et des infrastructures critiques. Le site en place, 24 pages statiques, ne pouvait plus être modifié sans développeur et ne reflétait pas le positionnement haut de gamme du cabinet.',
            },
            {
                heading: 'Ce que j\'ai fait',
                body: 'Audit de l\'existant page par page et recommandations UX. Refonte graphique sur Figma avec un **design system complet** (couleurs, typographies, composants). **Prototype interactif** validé par le client avant la moindre ligne de code, puis intégration et connexion à un CMS.',
            },
            {
                heading: 'Le résultat',
                body: 'Un site **bilingue** de 24 pages que le client administre lui-même, guides d\'utilisation à l\'appui. La migration a été vérifiée écran par écran, aux trois tailles d\'affichage, pour qu\'aucune page ne perde en qualité au passage.',
            },
        ],
        tools: ['Figma', 'Design system', 'Audit UX', 'Next.js', 'Sanity', 'CSS Modules', 'Docker'],
        cover: { type: 'image', src: '/projects/focus-defense/cover.webp', alt: 'Page d\'accueil du site Focus Defence' },
        coverMobile: null,
        thumbnail: { src: '/projects/focus-defense/cover.webp', alt: 'Focus Defence' },
        gallery: [
            {
                type: 'video',
                src: '/projects/focus-defense/demo.mp4',
                poster: '/projects/focus-defense/demo-poster.jpg',
                alt: 'Parcours dans le prototype interactif',
                caption: 'Prototype interactif présenté au client avant développement.',
                span: 'full',
            },
            {
                type: 'image',
                src: '/projects/focus-defense/gallery-services.webp',
                width: 1440, height: 860,
                alt: 'Page des services du site Focus Defence',
                caption: 'Page offre : une image pleine largeur et une accroche par service.',
                span: 'half',
            },
            {
                type: 'image',
                src: '/projects/focus-defense/gallery-equipe.webp',
                width: 1440, height: 860,
                alt: 'Page de présentation de l\'équipe',
                caption: 'Page équipe : portraits et parcours des consultants.',
                span: 'half',
            },
            {
                type: 'image',
                src: '/projects/focus-defense/gallery-actualites.webp',
                width: 1440, height: 1120,
                alt: 'Page actualités du site',
                caption: 'Espace actualités, alimenté par le client depuis le CMS.',
                span: 'half',
            },
            {
                type: 'image',
                src: '/projects/focus-defense/gallery-contact.webp',
                width: 1440, height: 1120,
                alt: 'Page de contact du site',
                caption: 'Page contact et prise de rendez-vous.',
                span: 'half',
            },
            {
                type: 'image',
                src: '/projects/focus-defense/gallery-mobile.webp',
                width: 390, height: 1500,
                alt: 'Version mobile de la page d\'accueil',
                caption: 'Chaque page a été reprise et vérifiée en version mobile.',
                span: 'half',
            },
        ],
        links: { live: 'https://focus-defence.de/', github: null },
        featured: true,
        archived: false,
        order: 5,
        theme: { accent: '#7B2D5E' },
        orientation: 'left',
    },

    {
        slug: 'wiki-learn',
        title: 'Wiki.Learn',
        client: null,
        year: '2026',
        kind: 'school',
        category: 'Projet école',
        tagline: 'Rendre Wikipédia aussi addictif qu\'un jeu.',
        summary:
            'Comment donner envie de lire une encyclopédie ? En empruntant les codes du jeu vidéo. **Direction artistique**, **gamification** et **sound design** pour transformer une navigation documentaire en parcours qu\'on a envie de finir.',
        role: 'Direction artistique, UI design, intégration',
        services: ['Direction artistique', 'UI design', 'Gamification', 'Intégration'],
        sections: [],
        tools: ['Figma', 'Illustrator', 'Next.js', 'React', 'CSS Modules', 'Zustand', 'Framer Motion'],
        cover: { type: 'video', src: '/image/wiki-learn.mp4', poster: null, alt: 'Aperçu animé de Wiki.Learn' },
        coverMobile: { type: 'image', src: '/image/wiki-learn-mobile.webp', alt: 'Wiki.Learn sur mobile' },
        thumbnail: { src: '/image/wiki-learn-mobile.webp', alt: 'Wiki.Learn' },
        gallery: [],
        links: { live: 'https://wiki-learn.vercel.app/', github: 'https://github.com/ramynbl/wiki-learn' },
        featured: true,
        archived: false,
        order: 10,
        theme: { accent: '#4facfe' },
        orientation: 'right',
    },

    {
        slug: 'arktic',
        title: 'Arktic',
        client: 'Arktic, association étudiante',
        year: '2026',
        kind: 'client',
        category: 'Projet associatif',
        tagline: 'Une vitrine et un outil d\'inscription pour une association sportive.',
        summary:
            'Site vitrine et **système d\'inscription en temps réel** pour une association mêlant tech et escalade. L\'enjeu n\'était pas la vitrine mais la **conversion** : remplir les créneaux d\'événements sans gérer les inscriptions à la main.',
        role: 'Design, intégration, mise en ligne',
        services: ['Site vitrine', 'UI design', 'Conversion', 'Mise en ligne'],
        sections: [],
        tools: ['Figma', 'React', 'Tailwind CSS', 'Node.js', 'MySQL', 'Railway'],
        cover: { type: 'image', src: '/image/arktic.webp', alt: 'Page d\'accueil du site Arktic' },
        coverMobile: { type: 'image', src: '/image/arktic-mobile.jpg', alt: 'Site Arktic sur mobile' },
        thumbnail: { src: '/image/arktic.webp', alt: 'Arktic' },
        gallery: [],
        links: { live: 'https://arktic.up.railway.app/', github: 'https://github.com/ramynbl/arktic' },
        featured: true,
        archived: false,
        order: 20,
        theme: { accent: '#ffffff' },
        orientation: 'right',
    },

    {
        slug: 'study-ping',
        title: 'Study Ping',
        client: null,
        year: '2025',
        kind: 'personal',
        category: 'Projet personnel',
        tagline: 'Un bot qui fait gagner du temps à toute une promo.',
        summary:
            'Un bot Discord qui lit l\'emploi du temps de l\'école et envoie automatiquement rappels et résumés quotidiens. Utilisé au quotidien par les étudiants : une **automatisation** simple qui supprime une corvée répétitive.',
        role: 'Conception, développement, déploiement',
        services: ['Automatisation', 'Intégration d\'API', 'Déploiement'],
        sections: [],
        tools: ['Node.js', 'Discord.js', 'Node-Cron', 'iCal', 'Railway'],
        cover: { type: 'image', src: '/image/bot.webp', alt: 'Interface du bot Study Ping' },
        coverMobile: null,
        thumbnail: { src: '/image/bot.webp', alt: 'Study Ping' },
        gallery: [],
        links: { live: null, github: 'https://github.com/ramynbl/hetic-bot' },
        featured: false,
        archived: false,
        order: 30,
        theme: { accent: '#5865F2' },
        orientation: 'left',
    },

    // ------------------------------------------------------------------
    // ARCHIVES : retirés de la home, de /projects et du sitemap.
    // Leur page reste accessible par lien direct. Repasser `archived` à
    // false suffit à les réafficher.
    // ------------------------------------------------------------------

    {
        slug: 'anime-finder',
        title: 'Anime Finder',
        client: null,
        year: '2026',
        kind: 'school',
        category: 'Projet école',
        tagline: 'Un score éditorial pour dénicher les vraies pépites.',
        summary:
            'Une plateforme de recommandation qui dépasse la simple moyenne. L\'algorithme calcule un **score éditorial** basé sur la régularité et la stabilité des notes d\'épisodes, pour identifier les véritables pépites du catalogue.',
        role: 'Analyse de données, interface, restitution',
        services: ['Data', 'Interface web'],
        sections: [],
        tools: ['Python', 'Pandas', 'NumPy', 'FastAPI', 'Jupyter', 'Streamlit', 'JavaScript'],
        cover: { type: 'video', src: '/image/anime.mp4', poster: '/image/anime-thumbnail.webp', alt: 'Aperçu animé d\'Anime Finder' },
        coverMobile: { type: 'image', src: '/image/anime-mobile.jpg', alt: 'Anime Finder sur mobile' },
        thumbnail: { src: '/image/anime-thumbnail.webp', alt: 'Anime Finder' },
        gallery: [],
        links: { live: 'https://projet-anime-data.vercel.app/', github: 'https://github.com/ramynbl/projet-anime-data' },
        featured: false,
        archived: true,
        order: 40,
        theme: { accent: '#4facfe' },
        orientation: 'right',
    },

    {
        slug: 'kevin-ai',
        title: 'Kevin AI',
        client: null,
        year: '2025',
        kind: 'personal',
        category: 'Projet personnel',
        tagline: 'Une IA sarcastique et dépressive, en glassmorphism.',
        summary:
            'Une application web mettant en scène une intelligence artificielle à la personnalité atypique. Interface de chat immersive, prompt engineering via l\'API Google Gemini, mémoire contextuelle, effet machine à écrire et synthèse vocale.',
        role: 'Concept, UI, développement',
        services: ['Concept', 'UI design', 'Développement'],
        sections: [],
        tools: ['Node.js', 'Express', 'JavaScript', 'Tailwind CSS', 'Google Gemini API'],
        cover: { type: 'video', src: '/image/kevin.mp4', poster: '/image/kevin.webp', alt: 'Aperçu animé de Kevin AI' },
        coverMobile: null,
        thumbnail: { src: '/image/kevin.webp', alt: 'Kevin AI' },
        gallery: [],
        links: { live: 'https://kevin-ai.up.railway.app/', github: 'https://github.com/ramynbl/kevin-ai' },
        featured: false,
        archived: true,
        order: 50,
        theme: { accent: '#ffffff' },
        orientation: 'left',
    },

    {
        slug: 'fitviz',
        title: 'FitViz',
        client: null,
        year: '2026',
        kind: 'product',
        category: 'Projet IA',
        tagline: 'Un SaaS d\'essayage virtuel entièrement généré par l\'IA.',
        summary:
            'Une plateforme SaaS de virtual try-on entièrement générée par l\'IA : de l\'architecture logicielle aux assets visuels en passant par le contenu. Une application interactive connectée aux APIs d\'IA les plus avancées.',
        role: 'Direction de projet, prompt design, intégration',
        services: ['Pilotage de projet', 'IA générative', 'Produit'],
        sections: [],
        tools: ['Antigravity', 'Claude Code', 'Next.js', 'Nano Banana', 'VEO', 'Replicate API'],
        cover: { type: 'image', src: '/image/fitviz.webp', alt: 'Interface de FitViz' },
        coverMobile: null,
        thumbnail: { src: '/image/fitviz.webp', alt: 'FitViz' },
        gallery: [],
        links: { live: 'https://fit-viz.vercel.app/', github: 'https://github.com/ramynbl/FitViz' },
        featured: false,
        archived: true,
        order: 60,
        theme: { accent: '#ffffff' },
        orientation: 'right',
    },
];
