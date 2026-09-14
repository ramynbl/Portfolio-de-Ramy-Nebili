// Identité, réseaux, CV. Futur document CMS « profile ».
// ⚠️ Un seul endroit pour LinkedIn / GitHub / email : tout le site lit ici.
export const profile = {
    firstName: 'Ramy',
    lastName: 'Nebili',
    fullName: 'Ramy Nebili',
    location: 'Paris',
    email: 'ramynebili@gmail.com',
    headline: 'Développeur Full Stack', // ← réécrit à l'étape 2
    availability: 'À l\'écoute d\'opportunités (freelance, alternance).',
    socials: {
        linkedin: 'https://www.linkedin.com/in/ramy-nebili/',
        github: 'https://github.com/ramynbl',
    },
    // Lien de prise de rendez-vous (Cal.com / Calendly) — null tant qu'il n'existe pas
    booking: null,
    // Liste des CV téléchargeables. Le sélecteur de CV (étape 5) lit cette liste.
    cvs: [
        {
            id: 'general',
            label: 'CV',
            target: 'Version générale',
            file: '/cv/ramy-nebili-cv.pdf',
        },
    ],
    // Hero de la home (sliders décoratifs + sous-titres). Réécrit à l'étape 2.
    hero: {
        left: { words: ['Front-end', 'Interface', 'Visuel', 'Intégrer'], subtitle: 'Expériences utilisateurs & interfaces modernes' },
        right: { words: ['< Coder >', 'Innover', 'Construire', 'Automatiser'], subtitle: 'Développement front-end & back-end' },
    },
    // Teaser « À propos » de la home. Réécrit à l'étape 2.
    about: {
        greeting: 'Hello World ! Je suis Ramy',
        paragraphs: [
            'Développeur **Full Stack JavaScript** en reconversion, je combine une double culture technique et design.',
            'Actuellement en Bachelor Développement Web à HETIC, je recherche une **alternance** ou **un stage** pour mettre à profit ma passion pour Node.js, React et la conception d\'interfaces soignées.',
            'Je suis également à l\'écoute d\'opportunités pour des missions **freelance**.',
        ],
        highlights: [
            { icon: 'code', title: 'Développeur Full Stack (HETIC)', text: 'App de recommandation d\'animés (Python/JS) • 2026' },
            { icon: 'briefcase', title: 'Commercial & Manager (COPYTOP / ZARA)', text: '7 ans d\'expérience en gestion client et management • 2018-2024' },
            { icon: 'award', title: 'Graphiste (Alternance)', text: 'Communication visuelle et webdesign • 2013-2016' },
        ],
    },
    // Section contact. Réécrit à l'étape 2.
    contact: {
        intro: 'Vous portez un projet ambitieux, avez un besoin en développement freelance, ou proposez une opportunité (stage/alternance) ? N\'hésitez pas à me contacter, je serais ravi d\'en discuter.',
        features: [
            'Profil polyvalent & Full Stack',
            'Force de proposition & Autonomie',
            'Apprentissage rapide & Curiosité',
        ],
    },
    images: {
        avatar: '/image/avatar-2.webp',
        portrait: '/image/ramy-carre.webp',
        miniature: '/image/ramy-miniature.jpeg',
    },
};
