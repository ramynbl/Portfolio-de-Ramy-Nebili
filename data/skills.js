// Outils et compétences. Futur document CMS « skill ».
// `icon` est une clé résolue par lib/icons.js.
//
// `status` dit comment la compétence est pratiquée, jamais un niveau qui
// dévalorise : Maîtrise · Autonome · Projet client · En formation (HETIC).
export const skillCategories = [
    'Marketing & Acquisition',
    'Data & Analytics',
    'UX & Design',
    'Web & No-code',
    'Pilotage, outils & déploiement',
];

export const skillCategoryMessages = {
    'Tout': 'Du premier audit à la mise en ligne, les outils que je combine pour faire décoller un site.',
    'Marketing & Acquisition': 'J\'attire le bon trafic et je le transforme en contacts.',
    'Data & Analytics': 'Je mesure ce qui compte et je décide sur des chiffres.',
    'UX & Design': 'Je conçois des interfaces claires, avec une rigueur de graphiste.',
    'Web & No-code': 'Je construis et je mets en ligne, du no-code au code.',
    'Pilotage, outils & déploiement': 'Je cadre, j\'automatise et je livre en production.',
};

export const skills = [
    // --- MARKETING & ACQUISITION ---
    { name: 'SEO', icon: 'seo', color: '#4ADE80', desc: 'Référencement naturel, structure et contenu', status: 'En formation (HETIC)', category: 'Marketing & Acquisition' },
    { name: 'Google Ads', icon: 'googleads', color: '#4285F4', desc: 'Campagnes SEA et recherche payante', status: 'En formation (HETIC)', category: 'Marketing & Acquisition' },
    { name: 'Meta Ads', icon: 'meta', color: '#0081FB', desc: 'Social Ads Facebook et Instagram', status: 'En formation (HETIC)', category: 'Marketing & Acquisition' },
    { name: 'Semrush', icon: 'semrush', color: '#FF642D', desc: 'Audit SEO et veille concurrentielle', status: 'Autonome', category: 'Marketing & Acquisition' },
    { name: 'Benchmark concurrentiel', icon: 'benchmark', color: '#F59E0B', desc: 'Analyse comparative et positionnement', status: 'Projet client', category: 'Marketing & Acquisition' },
    { name: 'Copywriting', icon: 'copywriting', color: '#A78BFA', desc: 'Messages, accroches et pages de vente', status: 'Autonome', category: 'Marketing & Acquisition' },
    { name: 'Content marketing', icon: 'strategy', color: '#38BDF8', desc: 'Ligne éditoriale et production de contenu', status: 'Projet client', category: 'Marketing & Acquisition' },
    { name: 'Brevo', icon: 'brevo', color: '#0B996E', desc: 'Emailing et marketing automation', status: 'Autonome', category: 'Marketing & Acquisition' },

    // --- DATA & ANALYTICS ---
    { name: 'Google Analytics 4', icon: 'googleanalytics', color: '#E8710A', desc: 'Suivi d\'audience et de conversions', status: 'En formation (HETIC)', category: 'Data & Analytics' },
    { name: 'Google Tag Manager', icon: 'googletagmanager', color: '#246FDB', desc: 'Pose et gestion des balises', status: 'En formation (HETIC)', category: 'Data & Analytics' },
    { name: 'Search Console', icon: 'searchconsole', color: '#4285F4', desc: 'Indexation et performance de recherche', status: 'Autonome', category: 'Data & Analytics' },
    { name: 'Looker Studio', icon: 'looker', color: '#4285F4', desc: 'Tableaux de bord et data visualisation', status: 'Autonome', category: 'Data & Analytics' },
    { name: 'Plan de mesure', icon: 'measure', color: '#22D3EE', desc: 'Objectifs, KPI et événements à suivre', status: 'En formation (HETIC)', category: 'Data & Analytics' },
    { name: 'CRO', icon: 'cro', color: '#F472B6', desc: 'Optimisation du taux de conversion et A/B tests', status: 'En formation (HETIC)', category: 'Data & Analytics' },
    { name: 'Hotjar', icon: 'hotjar', color: '#FF3C00', desc: 'Heatmaps et enregistrements de session', status: 'Autonome', category: 'Data & Analytics' },
    { name: 'SQL', icon: 'mysql', color: '#4479A1', desc: 'Interrogation de bases de données', status: 'Projet client', category: 'Data & Analytics' },
    { name: 'SQLite', icon: 'sqlite', color: '#003B57', desc: 'Base de données légère embarquée', status: 'Projet client', category: 'Data & Analytics' },
    { name: 'Google Sheets', icon: 'googlesheets', color: '#34A853', desc: 'Reporting, calculs et suivi de campagne', status: 'Maîtrise', category: 'Data & Analytics' },

    // --- UX & DESIGN ---
    { name: 'Figma', icon: 'figma', color: '#F24E1E', desc: 'Maquettes, prototypes et design system', status: 'Maîtrise', category: 'UX & Design' },
    { name: 'Audit UX', icon: 'audit', color: '#FBBF24', desc: 'Analyse de l\'existant et recommandations', status: 'Projet client', category: 'UX & Design' },
    { name: 'Design system', icon: 'designsystem', color: '#818CF8', desc: 'Composants, styles et cohérence d\'interface', status: 'Projet client', category: 'UX & Design' },
    { name: 'Test utilisateur', icon: 'usertest', color: '#2DD4BF', desc: 'Protocole, passation et restitution', status: 'En formation (HETIC)', category: 'UX & Design' },
    { name: 'Illustrator', icon: 'illustrator', color: '#FF9A00', desc: 'Logos, illustrations et assets vectoriels', status: 'Maîtrise', category: 'UX & Design' },
    { name: 'Photoshop', icon: 'photoshop', color: '#31A8FF', desc: 'Retouche et composition d\'image', status: 'Maîtrise', category: 'UX & Design' },
    { name: 'InDesign', icon: 'indesign', color: '#FF3366', desc: 'Mise en page print et web', status: 'Maîtrise', category: 'UX & Design' },
    { name: 'After Effects', icon: 'aftereffects', color: '#9999FF', desc: 'Motion design et animation d\'interface', status: 'Autonome', category: 'UX & Design' },
    { name: 'Blender', icon: 'blender', color: '#F5792A', desc: 'Visuels et scènes 3D pour le web', status: 'Autonome', category: 'UX & Design' },
    { name: 'Canva', icon: 'canva', color: '#00C4CC', desc: 'Déclinaisons rapides pour les réseaux', status: 'Maîtrise', category: 'UX & Design' },
    { name: 'Framer', icon: 'framer', color: '#0055FF', desc: 'Prototypage interactif haute fidélité', status: 'Autonome', category: 'UX & Design' },

    // --- WEB & NO-CODE ---
    { name: 'Webflow', icon: 'webflow', color: '#146EF5', desc: 'Sites sur mesure sans développement', status: 'Autonome', category: 'Web & No-code' },
    { name: 'WordPress', icon: 'wordpress', color: '#21759B', desc: 'CMS, thèmes et sites vitrines', status: 'Autonome', category: 'Web & No-code' },
    { name: 'Shopify', icon: 'shopify', color: '#7AB55C', desc: 'Boutiques en ligne et fiches produit', status: 'Autonome', category: 'Web & No-code' },
    { name: 'Sanity', icon: 'sanity', color: '#F03E2F', desc: 'CMS headless pour contenus éditoriaux', status: 'Projet client', category: 'Web & No-code' },
    { name: 'HTML5', icon: 'html', color: '#E34F26', desc: 'Structure sémantique et accessibilité', status: 'Maîtrise', category: 'Web & No-code' },
    { name: 'CSS3', icon: 'css', color: '#1572B6', desc: 'Responsive, animations et design tokens', status: 'Maîtrise', category: 'Web & No-code' },
    { name: 'JavaScript', icon: 'javascript', color: '#F7DF1E', desc: 'Interactivité et intégration d\'API', status: 'Autonome', category: 'Web & No-code' },
    { name: 'React', icon: 'react', color: '#61DAFB', desc: 'Interfaces à composants', status: 'Autonome', category: 'Web & No-code' },
    { name: 'Next.js', icon: 'nextjs', color: '#FFFFFF', desc: 'Sites rapides et optimisés pour le SEO', status: 'Projet client', category: 'Web & No-code' },
    { name: 'Tailwind', icon: 'tailwind', color: '#06B6D4', desc: 'Intégration rapide et cohérente', status: 'Autonome', category: 'Web & No-code' },
    { name: 'Three.js', icon: 'threejs', color: '#FFFFFF', desc: 'Scènes 3D interactives dans le navigateur', status: 'Projet client', category: 'Web & No-code' },
    { name: 'Node.js', icon: 'nodejs', color: '#339933', desc: 'Scripts, automatisations et petits services', status: 'Autonome', category: 'Web & No-code' },

    // --- PILOTAGE, OUTILS & DÉPLOIEMENT ---
    { name: 'Gestion de projet agile', icon: 'agile', color: '#FB923C', desc: 'Kanban, sprints et coordination multi-projets', status: 'Projet client', category: 'Pilotage, outils & déploiement' },
    { name: 'Salesforce', icon: 'salesforce', color: '#00A1E0', desc: 'CRM et suivi de portefeuille client', status: 'Maîtrise', category: 'Pilotage, outils & déploiement' },
    { name: 'HubSpot', icon: 'hubspot', color: '#FF7A59', desc: 'CRM marketing et tunnels de conversion', status: 'Autonome', category: 'Pilotage, outils & déploiement' },
    { name: 'n8n', icon: 'n8n', color: '#EA4B71', desc: 'Automatisation de workflows', status: 'Autonome', category: 'Pilotage, outils & déploiement' },
    { name: 'Make', icon: 'make', color: '#6D00CC', desc: 'Scénarios d\'automatisation sans code', status: 'Autonome', category: 'Pilotage, outils & déploiement' },
    { name: 'ChatGPT', icon: 'openai', color: '#FFFFFF', desc: 'Production de contenu et gain de temps', status: 'Maîtrise', category: 'Pilotage, outils & déploiement' },
    { name: 'Claude', icon: 'claude', color: '#D97757', desc: 'Analyse, rédaction et assistance au code', status: 'Maîtrise', category: 'Pilotage, outils & déploiement' },
    { name: 'Notion', icon: 'notion', color: '#FFFFFF', desc: 'Documentation et suivi de projet', status: 'Maîtrise', category: 'Pilotage, outils & déploiement' },
    { name: 'Trello', icon: 'trello', color: '#0052CC', desc: 'Tableaux Kanban et priorisation', status: 'Maîtrise', category: 'Pilotage, outils & déploiement' },
    { name: 'Git', icon: 'git', color: '#F05032', desc: 'Versionnage et travail en équipe', status: 'Autonome', category: 'Pilotage, outils & déploiement' },
    { name: 'Docker', icon: 'docker', color: '#2496ED', desc: 'Environnements isolés et reproductibles', status: 'Projet client', category: 'Pilotage, outils & déploiement' },
    { name: 'Vercel', icon: 'vercel', color: '#FFFFFF', desc: 'Mise en ligne et aperçus de déploiement', status: 'Maîtrise', category: 'Pilotage, outils & déploiement' },
    { name: 'Railway', icon: 'railway', color: '#FFFFFF', desc: 'Hébergement d\'applications et de services', status: 'Autonome', category: 'Pilotage, outils & déploiement' },
    { name: 'Netlify', icon: 'netlify', color: '#00C7B7', desc: 'Déploiement continu de sites statiques', status: 'Autonome', category: 'Pilotage, outils & déploiement' },
    { name: 'Render', icon: 'render', color: '#46E3B7', desc: 'Hébergement cloud unifié', status: 'Autonome', category: 'Pilotage, outils & déploiement' },
];
