// Outils & compétences. Futur document CMS « skill ».
// `icon` est une clé résolue par lib/icons.js. Contenu réécrit à l'étape 2.
export const skillCategories = [
    'Design System & UI',
    'Frontend Engineering',
    'Backend & Automation',
    'Data & Infrastructure',
];

export const skillCategoryMessages = {
    'Tout': 'Des outils que j\'explore, maîtrise et combine pour créer des expériences complètes.',
    'Design System & UI': 'Je conçois des interfaces avec une rigueur de graphiste.',
    'Frontend Engineering': 'Je développe des expériences fluides et performantes.',
    'Backend & Automation': 'Je construis des APIs et des outils d\'automatisation intelligents.',
    'Data & Infrastructure': 'Je gère la persistance des données et le déploiement.',
};

export const skills = [
    // --- DESIGN SYSTEM & UI ---
    { name: 'Figma', icon: 'figma', color: '#F24E1E', desc: 'Prototypage et UI Design', status: 'Autonome', category: 'Design System & UI' },
    { name: 'InDesign', icon: 'indesign', color: '#FF3366', desc: 'Mise en page print/web', status: 'Maîtrise', category: 'Design System & UI' },
    { name: 'Illustrator', icon: 'illustrator', color: '#FF9A00', desc: 'Création vectorielle, illustration, logo et assets', status: 'Maîtrise', category: 'Design System & UI' },
    { name: 'Photoshop', icon: 'photoshop', color: '#31A8FF', desc: 'Retouche et composition d\'image', status: 'Maîtrise', category: 'Design System & UI' },
    { name: 'After Effects', icon: 'aftereffects', color: '#9999FF', desc: 'Animation d\'interfaces (motion)', status: 'Notions', category: 'Design System & UI' },
    { name: 'Blender', icon: 'blender', color: '#F5792A', desc: 'Design 3D pour le web', status: 'Notions', category: 'Design System & UI' },
    { name: 'Adobe XD', icon: 'xd', color: '#FF61F6', desc: 'Alternative à Figma pour le prototypage', status: 'Exploration', category: 'Design System & UI' },
    { name: 'Framer', icon: 'framer', color: '#0055FF', desc: 'Design interactif et prototypage haute fidélité', status: 'Exploration', category: 'Design System & UI' },

    // --- FRONTEND ENGINEERING ---
    { name: 'HTML5', icon: 'html', color: '#E34F26', desc: 'Structure sémantique du web', status: 'Solide', category: 'Frontend Engineering' },
    { name: 'CSS3', icon: 'css', color: '#1572B6', desc: 'Design responsive et animations', status: 'Avancé', category: 'Frontend Engineering' },
    { name: 'Tailwind', icon: 'tailwind', color: '#06B6D4', desc: 'Intégration rapide et optimisée', status: 'En progression', category: 'Frontend Engineering' },
    { name: 'JavaScript', icon: 'javascript', color: '#F7DF1E', desc: 'Logique et interactivité', status: 'En progression', category: 'Frontend Engineering' },
    { name: 'TypeScript', icon: 'typescript', color: '#3178C6', desc: 'JS typé pour la fiabilité', status: 'Utilisé en projet', category: 'Frontend Engineering' },
    { name: 'React', icon: 'react', color: '#61DAFB', desc: 'Composants et gestion d\'état', status: 'Apprentissage', category: 'Frontend Engineering' },
    { name: 'Next.js', icon: 'nextjs', color: '#000000', desc: 'React framework full-stack', status: 'Apprentissage', category: 'Frontend Engineering' },
    { name: 'Vite', icon: 'vite', color: '#646CFF', desc: 'Build tool ultra-rapide', status: 'Favori', category: 'Frontend Engineering' },
    { name: 'Three.js', icon: 'threejs', color: '#000000', desc: 'Création de scènes 3D', status: 'Utilisé en projet', category: 'Frontend Engineering' },

    // --- BACKEND & AUTOMATION ---
    { name: 'Node.js', icon: 'nodejs', color: '#339933', desc: 'Environnement serveur JS', status: 'Stack principale', category: 'Backend & Automation' },
    { name: 'Express', icon: 'express', color: '#000000', desc: 'Création de serveurs web', status: 'Bases', category: 'Backend & Automation' },
    { name: 'FastAPI', icon: 'fastapi', color: '#009688', desc: 'Création d\'APIs Python', status: 'Utilisé en projet', category: 'Backend & Automation' },
    { name: 'Python', icon: 'python', color: '#3776AB', desc: 'Scripting, automatisation, IA et données', status: 'En progression', category: 'Backend & Automation' },
    { name: 'discord.js', icon: 'discord', color: '#5865F2', desc: 'Création de bots Discord JS', status: 'En progression', category: 'Backend & Automation' },
    { name: 'SQLite', icon: 'sqlite', color: '#003B57', desc: 'Base de données légère', status: 'Notions', category: 'Backend & Automation' },
    { name: 'MySQL', icon: 'mysql', color: '#4479A1', desc: 'Base de données SQL', status: 'Notions', category: 'Backend & Automation' },
    { name: 'Prisma', icon: 'prisma', color: '#2D3748', desc: 'ORM pour Node.js et TypeScript', status: 'Utilisé en projet', category: 'Backend & Automation' },
    { name: 'Sanity', icon: 'sanity', color: '#F03E2F', desc: 'CMS moderne et flexible', status: 'Utilisé en projet', category: 'Backend & Automation' },

    // --- DATA & INFRASTRUCTURE ---
    { name: 'Jupyter', icon: 'jupyter', color: '#F37626', desc: 'Notebooks interactifs', status: 'Utilitaire', category: 'Data & Infrastructure' },
    { name: 'Pandas', icon: 'pandas', color: '#150458', desc: 'Analyse de données Python', status: 'Utilisé en projet', category: 'Data & Infrastructure' },
    { name: 'NumPy', icon: 'numpy', color: '#013243', desc: 'Calcul scientifique', status: 'Utilisé en projet', category: 'Data & Infrastructure' },
    { name: 'Vercel', icon: 'vercel', color: '#000000', desc: 'Déploiement frontend optimisé', status: 'Favori', category: 'Data & Infrastructure' },
    { name: 'Netlify', icon: 'netlify', color: '#00C7B7', desc: 'CI/CD et hosting', status: 'Utilisé souvent', category: 'Data & Infrastructure' },
    { name: 'Render', icon: 'render', color: '#46E3B7', desc: 'Cloud hosting unifié', status: 'Utilisé souvent', category: 'Data & Infrastructure' },
    { name: 'Railway', icon: 'railway', color: '#0B0D0E', desc: 'Infrastructure on rails', status: 'Favori', category: 'Data & Infrastructure' },
    { name: 'Docker', icon: 'docker', color: '#2496ED', desc: 'Environnements de développement isolés', status: 'Utilisé en projet', category: 'Data & Infrastructure' },
    { name: 'Git', icon: 'git', color: '#F05032', desc: 'Gestion de version', status: 'Utilisé en projet', category: 'Data & Infrastructure' },
];
