// Réglages globaux du site. Futur document CMS « siteSettings ».
export const site = {
    name: 'Ramy Nebili',
    url: 'https://ramynebili.fr',
    title: 'Ramy Nebili — Design, web & communication',
    description:
        'Refonte visuelle, création et refonte de sites web, communication digitale. Freelance à Paris, à la recherche d\'une alternance.',
    keywords: [
        'Ramy Nebili', 'freelance', 'refonte site web', 'identité visuelle', 'graphiste',
        'communication digitale', 'marketing digital', 'chef de projet digital', 'Paris',
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
