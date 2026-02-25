export const projectsData = [

    {
        id: 'anime-finder',
        title: 'Anime Finder',
        category: 'Projet Data & Dev',
        description: 'Une plateforme de recommandation intelligente qui dépasse la simple moyenne. Notre algorithme calcule un <strong>Score Éditorial</strong> basé sur la régularité et la stabilité des notes d\'épisodes, pour identifier les véritables pépites du catalogue.',
        techStack: ['Python', 'Pandas', 'NumPy', 'FastAPI', 'Jupyter Notebook', 'Streamlit', 'JavaScript', 'HTML', 'CSS'],
        image: null,
        video: '/image/anime.mp4',
        links: {
            github: 'https://github.com/ramynbl/projet-anime-data',
            live: 'https://projet-anime-data.vercel.app/',
            details: '/projects/anime-finder'
        },
        theme: {
            gradient: 'linear-gradient(180deg, #fff, rgba(255, 255, 255, 0.5))',
            accent: '#4facfe'
        },
        orientation: 'right' // Content on the right
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
            accent: '#fff' // White accent
        },
        orientation: 'left' // Content on the left
    },
    {
        id: 'arktic',
        title: 'Arktic Website',
        category: 'Projet Associatif',
        description: 'Création de la plateforme web d\'Arktic, une association étudiante mêlant tech et escalade. Le site propose une vitrine moderne (\"Code, Climb, Chill\") couplée à un système d\'inscription en temps réel pour gérer les événements sportifs.',
        techStack: ['Node.js', 'React', 'Vite', 'Tailwind CSS', 'Express', 'MySQL', 'Drizzle ORM', 'ManusAI'],
        image: '/image/arktic.png',
        video: null,
        links: {
            github: 'https://github.com/ramynbl/arktic',
            live: 'https://arktic.up.railway.app/',
            details: '/projects/arktic'
        },
        theme: {
            gradient: 'linear-gradient(180deg, #fff, rgba(255, 255, 255, 0.5))',
            accent: '#fff' // White accent
        },
        orientation: 'right' // Content on the left
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
            live: 'https://kevin-ai.onrender.com/',
            details: '/projects/kevin-ai'
        },
        theme: {
            gradient: 'linear-gradient(180deg, #fff, rgba(255, 255, 255, 0.5))',
            accent: '#fff' // White accent
        },
        orientation: 'left' // Content on the left
    }
];
