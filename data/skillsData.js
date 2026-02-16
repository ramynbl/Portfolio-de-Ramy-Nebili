import { SiReact, SiNextdotjs, SiTailwindcss, SiJavascript, SiTypescript, SiVite, SiHtml5, SiCss3, SiNodedotjs, SiExpress, SiFastapi, SiPython, SiDiscord, SiJupyter, SiPandas, SiNumpy, SiSqlite, SiVercel, SiNetlify, SiRender, SiRailway, SiFigma, SiAdobeindesign, SiAdobeillustrator, SiAdobephotoshop, SiAdobeaftereffects, SiBlender, SiAdobexd, SiFramer } from 'react-icons/si';

export const skillsData = [
    // --- DESIGN SYSTEM & UI ---
    { name: 'Figma', icon: SiFigma, color: '#F24E1E', desc: 'Prototypage et UI Design', status: 'Autonome', category: 'Design System & UI' },
    { name: 'InDesign', icon: SiAdobeindesign, color: '#FF3366', desc: 'Mise en page print/web', status: 'Maîtrise', category: 'Design System & UI' },
    { name: 'Illustrator', icon: SiAdobeillustrator, color: '#FF9A00', desc: 'Création vectorielle, Illustration, Logo et assets vectoriels', status: 'Maîtrise', category: 'Design System & UI' },
    { name: 'Photoshop', icon: SiAdobephotoshop, color: '#31A8FF', desc: 'Retouche et composition d\'image', status: 'Maîtrise', category: 'Design System & UI' },
    { name: 'After Effects', icon: SiAdobeaftereffects, color: '#9999FF', desc: 'Animation d’interfaces (Motion)', status: 'Notions', category: 'Design System & UI' },
    { name: 'Blender', icon: SiBlender, color: '#FF3366', desc: 'Design 3D pour le web', status: 'Notions', category: 'Design System & UI' },
    { name: 'Adobe XD', icon: SiAdobexd, color: '#FF61F6', desc: 'Alternative à Figma pour le prototypage', status: 'Exploration', category: 'Design System & UI' },
    { name: 'Framer', icon: SiFramer, color: '#0055FF', desc: 'Design interactif et prototypage haute fidélité', status: 'Exploration', category: 'Design System & UI' },


    // --- FRONTEND ENGINEERING ---
    { name: 'HTML5', icon: SiHtml5, color: '#E34F26', desc: 'Structure sémantique du web', status: 'Solide', category: 'Frontend Engineering' },
    { name: 'CSS3', icon: SiCss3, color: '#1572B6', desc: 'Design responsive et animations', status: 'Avancé', category: 'Frontend Engineering' },
    { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4', desc: 'Intégration rapide et optimisée', status: 'En progression', category: 'Frontend Engineering' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', desc: 'Logique et interactivité', status: 'En progression', category: 'Frontend Engineering' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', desc: 'JS typé pour la fiabilité', status: 'Utilisé en projet', category: 'Frontend Engineering' },
    { name: 'React', icon: SiReact, color: '#61DAFB', desc: 'Composants et gestion d\'état', status: 'Apprentissage', category: 'Frontend Engineering' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#000000', desc: 'React framework full-stack', status: 'Apprentissage', category: 'Frontend Engineering' },
    { name: 'Vite', icon: SiVite, color: '#646CFF', desc: 'Build tool ultra-rapide', status: 'Favori', category: 'Frontend Engineering' },

    // --- BACKEND & AUTOMATION ---
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933', desc: 'Environnement serveur JS', status: 'Stack principale', category: 'Backend & Automation' },
    { name: 'Express', icon: SiExpress, color: '#000000', desc: 'Création de serveurs web', status: 'Bases', category: 'Backend & Automation' },
    { name: 'FastAPI', icon: SiFastapi, color: '#009688', desc: 'Création d’APIs Python', status: 'Utilisé en projet', category: 'Backend & Automation' },
    { name: 'Python', icon: SiPython, color: '#3776AB', desc: 'Scripting, automatisation, AI, et manipulation de données', status: 'En progression', category: 'Backend & Automation' },
    { name: 'discord.js', icon: SiDiscord, color: '#5865F2', desc: 'Création de bots Discord JS', status: 'En progression', category: 'Backend & Automation' },
    { name: 'discord.py', icon: SiDiscord, color: '#FFD300', desc: 'Bots interactifs en Python', status: 'En progression', category: 'Backend & Automation' },

    // --- DATA & INFRASTRUCTURE ---
    { name: 'Jupyter', icon: SiJupyter, color: '#F37626', desc: 'Notebooks interactifs', status: 'Utilitaire', category: 'Data & Infrastructure' },
    { name: 'Pandas', icon: SiPandas, color: '#150458', desc: 'Analyse de données Python', status: 'Notions', category: 'Data & Infrastructure' },
    { name: 'NumPy', icon: SiNumpy, color: '#013243', desc: 'Calcul scientifique', status: 'Notions', category: 'Data & Infrastructure' },
    { name: 'SQLite', icon: SiSqlite, color: '#003B57', desc: 'Base de données légère', status: 'Notions', category: 'Data & Infrastructure' },
    { name: 'Vercel', icon: SiVercel, color: '#000000', desc: 'Déploiement frontend optimisé', status: 'Favori', category: 'Data & Infrastructure' },
    { name: 'Netlify', icon: SiNetlify, color: '#00C7B7', desc: 'CI/CD et hosting', status: 'Utilisé souvent', category: 'Data & Infrastructure' },
    { name: 'Render', icon: SiRender, color: '#46E3B7', desc: 'Cloud hosting unifié', status: 'Utilisé souvent', category: 'Data & Infrastructure' },
    { name: 'Railway', icon: SiRailway, color: '#0B0D0E', desc: 'Infrastructure on rails', status: 'Utilisé souvent', category: 'Data & Infrastructure' },
];
