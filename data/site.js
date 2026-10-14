// Réglages globaux du site. Futur document CMS « siteSettings ».
export const site = {
    name: 'Ramy Nebili',
    url: 'https://ramynebili.fr',
    title: 'Ramy Nebili, futur chef de projet digital',
    description:
        'Étudiant en Bachelor Webmarketing & UX à HETIC, titre RNCP Chef de projet digital. Je recherche une alternance en marketing digital à Paris dès octobre 2026 : acquisition, analytics, UX et création.',
    keywords: [
        'Ramy Nebili',
        'alternance marketing digital',
        'alternant marketing digital Paris',
        'chef de projet digital',
        'webmarketing',
        'SEO', 'SEA', 'Google Analytics', 'Google Tag Manager',
        'growth marketing', 'traffic manager',
        'UX design', 'design system', 'audit de site', 'benchmark concurrentiel',
        'Webflow', 'no-code',
        'HETIC', 'Bachelor Webmarketing & UX',
        'Paris', 'octobre 2026',
    ],
    nav: [
        { label: 'Accueil', href: '/' },
        { label: 'À propos', href: '/about' },
        { label: 'Projets', href: '/projects' },
        { label: 'Compétences', href: '/#skills' },
        { label: 'Contact', href: '/#contact' },
    ],
    // Ancres observées sur la home pour la sidebar à points (id de section → lien)
    sidebarAnchors: [
        { id: 'home', label: 'Accueil', href: '/#home' },
        { id: 'about', label: 'À propos', href: '/#about' },
        { id: 'projects', label: 'Projets', href: '/#projects' },
        { id: 'skills', label: 'Compétences', href: '/#skills' },
        { id: 'contact', label: 'Contact', href: '/#contact' },
    ],
};
