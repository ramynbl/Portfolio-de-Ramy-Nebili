// Identité, formation, réseaux, CV et textes du site.
// Futur document CMS « profile ».
//
// ⚠️ Un seul endroit pour LinkedIn / GitHub / email : tout le site lit ici.
// ⚠️ Règle de rédaction : aucun tiret cadratin. Deux-points, virgules ou parenthèses.
export const profile = {
    firstName: 'Ramy',
    lastName: 'Nebili',
    fullName: 'Ramy Nebili',
    location: 'Paris',
    email: 'ramynebili@gmail.com',

    headline: 'Futur chef de projet digital',
    availability: 'Alternance de 2 ans dès octobre 2026, rythme 1 semaine école et 3 semaines entreprise.',

    socials: {
        linkedin: 'https://www.linkedin.com/in/ramy-nebili/',
        github: 'https://github.com/ramynbl',
    },

    // Lien de prise de rendez-vous (Cal.com / Calendly), null tant qu'il n'existe pas
    booking: null,

    // Formation en cours. Source : calendrier officiel HETIC WM2-3 2026-2027.
    formation: {
        diploma: 'Bachelor Webmarketing & UX',
        school: 'HETIC',
        schoolCity: 'Paris',
        rncp: 'Titre RNCP 39602, Chef de projet digital (niveau 6, Bac+3)',
        rhythm: '1 semaine école, 3 semaines entreprise',
        start: 'Octobre 2026',
        duration: '2 ans (2026 à 2028)',
        searching: 'Alternance en marketing digital',
        // Ce que couvre le programme, affiché en chips sur la page À propos
        program: [
            'SEO', 'SEA', 'Social Ads', 'Growth marketing', 'Lead acquisition',
            'Digital analytics', 'Plan de mesure', 'CRO', 'Data visualisation',
            'Branding', 'Content marketing', 'Copywriting',
            'Design system', 'Prototypage', 'Test utilisateur',
            'CRM', 'Marketing automation', 'No-code', 'Gestion de projet agile', 'RGPD',
        ],
    },

    // CV téléchargeables. Le composant de téléchargement lit cette liste.
    cvs: [
        {
            id: 'marketing',
            label: 'CV Marketing',
            target: 'Alternance marketing digital',
            file: '/cv/ramy-nebili-cv-marketing.pdf',
        },
    ],

    // Hero éditorial de la home.
    hero: {
        eyebrow: 'Alternance · Octobre 2026',
        title: ['Le marketing digital', 'avec un œil de graphiste.'],
        subtitle:
            'Je conçois et pilote des projets web de bout en bout : audit, acquisition, design d\'interface et mise en ligne. Formé au graphisme aux Gobelins, huit ans en relation client, aujourd\'hui en Bachelor Webmarketing & UX à HETIC.',
        badge: 'Disponible pour 2 ans, rythme 1 semaine école et 3 semaines entreprise',
        ctas: [
            { label: 'Voir mes projets', href: '/projects', variant: 'primary' },
            { label: 'Me contacter', href: '/#contact', variant: 'secondary' },
        ],
    },

    // Teaser « À propos » de la home.
    about: {
        greeting: 'Enchanté, je suis Ramy',
        paragraphs: [
            'Je travaille à la croisée du **marketing digital**, de l\'**UX** et de la **création**. Concrètement : j\'audite un site, je comprends ce qui bloque, je repense l\'interface et je mesure ce que ça change.',
            'Mon parcours est hybride. **Graphiste de formation** aux Gobelins, puis huit ans en **relation client et gestion** chez Copytop, Zara et Attijariwafa Bank. Je sais autant tenir un budget que défendre une maquette.',
            'Je prépare le **Bachelor Webmarketing & UX** à HETIC, titre de **chef de projet digital**, et je cherche une **alternance en marketing digital dès octobre 2026**.',
        ],
        highlights: [
            {
                icon: 'project',
                title: 'Chargé de projet UX/UI, freelance',
                text: 'Audit, refonte graphique et design system pour un client du secteur défense · depuis 2026',
            },
            {
                icon: 'client',
                title: 'Commercial et relation client',
                text: 'Copytop, Zara, Attijariwafa Bank : portefeuille client, CRM, management · 2016 à 2024',
            },
            {
                icon: 'design',
                title: 'Graphiste en alternance',
                text: 'Communication interne et externe, refonte de site · Gobelins et De l\'autre côté du Périph · 2013 à 2016',
            },
        ],
    },

    // Chiffres du bloc « En bref » de la page À propos.
    // ⚠️ À confirmer avec Ramy : valeurs déduites du CV.
    facts: [
        { value: '2 ans', label: 'd\'alternance à pourvoir', detail: 'dès octobre 2026' },
        { value: '8 ans', label: 'en entreprise', detail: 'relation client, gestion, management' },
        { value: '10 ans', label: 'de culture graphique', detail: 'depuis les Gobelins' },
        { value: 'Paris', label: 'et Île-de-France', detail: 'mobile sur site' },
    ],

    // Ce que Ramy apporte, 3 blocs sur la page À propos.
    strengths: [
        {
            icon: 'design',
            title: 'Un œil graphique',
            text: 'Formé à la production graphique aux Gobelins. Je sais lire une maquette, tenir une charte et produire moi-même les visuels d\'une campagne.',
        },
        {
            icon: 'client',
            title: 'Le sens du client',
            text: 'Huit ans de terrain commercial et de management. Je cadre un besoin, je défends une recommandation et je tiens un délai sans qu\'on me relance.',
        },
        {
            icon: 'data',
            title: 'La culture web et data',
            text: 'J\'intègre, je déploie et je mesure. Analytics, plan de mesure et CRO pour que les décisions reposent sur des chiffres, pas sur des intuitions.',
        },
    ],

    // Section contact.
    contact: {
        intro:
            'Vous recrutez un alternant en marketing digital pour octobre 2026, ou vous avez un projet web à cadrer ? Écrivez-moi, je réponds rapidement.',
        features: [
            'Disponible 2 ans, 3 semaines sur 4 en entreprise',
            'Profil hybride : marketing, UX et intégration web',
            'Déjà autonome sur un projet client en freelance',
        ],
    },

    // Parcours : expériences et formations mêlées, du plus récent au plus ancien.
    // `kind` pilote la puce de la timeline, `tags` les libellés colorés.
    timeline: [
        {
            period: 'Oct. 2026 à 2028',
            title: 'Bachelor Webmarketing & UX',
            org: 'HETIC, Paris',
            kind: 'formation',
            tags: ['Marketing', 'UX'],
            text: 'Titre RNCP Chef de projet digital. Acquisition, analytics, branding, design system et gestion de projet, en alternance.',
            current: true,
        },
        {
            period: 'Depuis 2026',
            title: 'Chargé de projet UX/UI',
            org: 'Freelance, client du secteur défense',
            kind: 'experience',
            tags: ['UX', 'Design', 'Web'],
            text: 'Audit de l\'existant, refonte graphique, design system sur Figma, prototypage et intégration front. Relation client gérée en autonomie, du cadrage aux livrables.',
            current: true,
        },
        {
            period: '2025 à 2026',
            title: 'Première année à HETIC',
            org: 'HETIC, Paris',
            kind: 'formation',
            tags: ['Web', 'Design'],
            text: 'Tronc commun : intégration web, design d\'interface, gestion de projet et premiers pas en data.',
        },
        {
            period: '2021 à 2024',
            title: 'Commercial',
            org: 'Copytop',
            kind: 'experience',
            tags: ['Commercial'],
            text: 'Prospection, suivi et fidélisation d\'un portefeuille client. Optimisation du suivi via le CRM Cegid. Coordination d\'événements internes.',
        },
        {
            period: '2018 à 2021',
            title: 'Responsable adjoint des stocks',
            org: 'Zara',
            kind: 'experience',
            tags: ['Gestion', 'Commercial'],
            text: 'Encadrement et formation d\'équipe, supervision des stocks, analyse des ventes et optimisation du merchandising.',
        },
        {
            period: '2016 à 2018',
            title: 'Contrôle de gestion',
            org: 'Attijariwafa Bank',
            kind: 'experience',
            tags: ['Gestion'],
            text: 'Suivi budgétaire, reporting, conformité des dossiers clients et suivi via CRM.',
        },
        {
            period: '2013 à 2016',
            title: 'Graphiste en alternance',
            org: 'De l\'autre côté du Périph',
            kind: 'experience',
            tags: ['Design'],
            text: 'Communication interne et externe, conception de la maquette du site dacp.fr, projets culturels et refonte du site.',
        },
        {
            period: '2013 à 2016',
            title: 'Bac Pro Production Graphique',
            org: 'Gobelins, l\'école de l\'image',
            kind: 'formation',
            tags: ['Design'],
            text: 'Chaîne graphique, mise en page et production print et web.',
        },
    ],

    // Côté perso, page À propos.
    personal: [
        {
            icon: 'users',
            title: 'Vie associative',
            text: 'Responsable événementiel au BDE d\'HETIC, membre de Magn\'hetic et d\'HETIC Alumni.',
        },
        {
            icon: 'film',
            title: 'Passions',
            text: 'Cinéma, séries, mangas. Et je dessinais beaucoup avant de passer au pixel.',
        },
        {
            icon: 'smile',
            title: 'Fun fact',
            text: 'Malgré toute cette organisation, je ne sais toujours pas faire mes lacets.',
        },
    ],

    images: {
        avatar: '/image/avatar-2.webp',
        portrait: '/image/photo-1.webp',
        miniature: '/image/ramy-miniature.jpeg',
    },
};
