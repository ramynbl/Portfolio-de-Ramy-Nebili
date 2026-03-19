export const projectsData = [

    {
        id: 'Wiki.Learn',
        title: 'Wiki.Learn',
        category: 'Projet de groupe',
        description: 'Une plateforme d\'<strong>apprentissage interactive</strong> et <strong>ludique</strong> qui transforme la navigation sur <strong>Wikipédia</strong> en une <strong>aventure immersive</strong>. En utilisant les dernières technologies <strong>React</strong>, <strong>WikiLearn</strong> propose une expérience <strong>haute-fidélité</strong> portée par des <strong>animations fluides</strong>, une <strong>gestion d\'état réactive</strong> et un <strong>sound design dynamique</strong>.',
        techStack: ['Figma', 'Illustrator', 'Next.js', 'React.js', 'CSS modules', 'JSON', 'JavaScript', 'use-sound', 'Zustand', 'Framer-motion'],
        image: null,
        video: '/image/wiki-learn.mp4',
        imageMobile: '/image/wiki-learn-mobile.png',
        links: {
            github: 'https://github.com/ramynbl/wiki-learn',
            live: 'https://wiki-learn.vercel.app/',
            details: '/projects/wiki-learn'
        },
        theme: {
            gradient: 'linear-gradient(180deg, #fff, rgba(255, 255, 255, 0.5))',
            accent: '#4facfe'
        },
        orientation: 'left'
    },

    {
        id: 'study-ping',
        title: 'Study Ping',
        category: 'Projet Personnel',
        description: 'Un bot Discord pensé pour améliorer ses études : rappels automatiques, commandes pratiques, et petites automatisations utiles. Développé en Node.js pour répondre à des besoins personnels d\'organisation.',
        techStack: ['Node.js', 'Discord.js', 'JavaScript', 'Node-Cron', 'Node-iCal', 'Day.js'],
        image: '/image/bot.png',
        video: null,
        links: {
            github: 'https://github.com/ramynbl/hetic-bot',
            live: null,
            details: '/projects/study-ping'
        },
        theme: {
            gradient: 'linear-gradient(180deg, #fff, rgba(255, 255, 255, 0.5))',
            accent: '#fff'
        },
        orientation: 'left'
    },
    {
        id: 'arktic',
        title: 'Arktic Website',
        category: 'Projet Associatif',
        description: 'Création de la plateforme web d\'Arktic, une association étudiante mêlant tech et escalade. Le site propose une vitrine moderne (\"Code, Climb, Chill\") couplée à un système d\'inscription en temps réel pour gérer les événements sportifs.',
        techStack: ['Node.js', 'React', 'Vite', 'Tailwind CSS', 'Express', 'MySQL', 'Drizzle ORM', 'ManusAI'],
        image: '/image/arktic.png',
        imageMobile: '/image/arktic-mobile.jpg',
        video: null,
        links: {
            github: 'https://github.com/ramynbl/arktic',
            live: 'https://arktic.up.railway.app/',
            details: '/projects/arktic'
        },
        theme: {
            gradient: 'linear-gradient(180deg, #fff, rgba(255, 255, 255, 0.5))',
            accent: '#fff'
        },
        orientation: 'right'
    },

    {
        id: 'anime-finder',
        title: 'Anime Finder',
        category: 'Projet Data & Dev',
        description: 'Une plateforme de recommandation intelligente qui dépasse la simple moyenne. Notre algorithme calcule un <strong>Score Éditorial</strong> basé sur la régularité et la stabilité des notes d\'épisodes, pour identifier les véritables pépites du catalogue.',
        techStack: ['Python', 'Pandas', 'NumPy', 'FastAPI', 'Jupyter Notebook', 'Streamlit', 'JavaScript', 'HTML', 'CSS'],
        thumbnail: '/image/anime-thumbnail.png',
        image: null,
        video: '/image/anime.mp4',
        imageMobile: '/image/anime-mobile.jpg',
        links: {
            github: 'https://github.com/ramynbl/projet-anime-data',
            live: 'https://projet-anime-data.vercel.app/',
            details: '/projects/anime-finder'
        },
        theme: {
            gradient: 'linear-gradient(180deg, #fff, rgba(255, 255, 255, 0.5))',
            accent: '#4facfe'
        },
        orientation: 'right'
    },

    {
        id: 'kevin-ai',
        title: 'Kevin AI',
        category: 'Projet Personnel',
        description: 'Création de Kevin.ai, une application web fullstack interactive mettant en scène une intelligence artificielle dotée d\'une personnalité atypique (sarcastique et dépressive). L\'application propose une interface de chat moderne et immersive aux tons sombres ("Glassmorphism"), couplée à un prompt engineering avancé via l\'API Google Gemini, intégrant mémoire contextuelle, effet "machine à écrire" et synthèse vocale.',
        techStack: ['Node.js', 'Express', 'JavaScript', 'Tailwind CSS', 'HTML', 'Google Gemini API'],
        thumbnail: '/image/kevin.png',
        image: null,
        video: '/image/kevin.mp4',
        links: {
            github: 'https://github.com/ramynbl/kevin-ai',
            live: 'https://kevin-ai.up.railway.app/',
            details: '/projects/kevin-ai'
        },
        theme: {
            gradient: 'linear-gradient(180deg, #fff, rgba(255, 255, 255, 0.5))',
            accent: '#fff'
        },
        orientation: 'left'
    }
];
