export const projectsData = [

    {
        id: 'anime-finder',
        title: 'Anime Finder',
        category: 'Projet Data & Dev',
        description: 'Une plateforme de recommandation intelligente qui dépasse la simple moyenne. Notre algorithme calcule un <strong>Score Éditorial</strong> basé sur la régularité et la stabilité des notes d\'épisodes, pour identifier les véritables pépites du catalogue.',
        techStack: ['Python', 'Pandas', 'NumPy', 'FastAPI', 'Jupyter Notebook', 'Streamlit', 'JavaScript', 'HTML', 'CSS', 'Vercel', 'Railway'],
        image: null,
        video: '/image/anime.mp4',
        links: {
            github: 'https://github.com/ramynbl/projet-anime-data',
            live: 'https://projet-anime-data.vercel.app/',
            details: '/anime-finder-details'
        },
        theme: {
            gradient: 'linear-gradient(to right, #fff, #ccc)',
            accent: '#4facfe'
        },
        orientation: 'right' // Content on the right
    },
    {
        id: 'study-ping',
        title: 'Study Ping',
        category: 'Projet Personnel',
        description: 'Un bot Discord pensé pour améliorer ses études : rappels automatiques, commandes pratiques, et petites automatisations utiles. Développé en Node.js pour répondre à des besoins personnels d\'organisation.',
        techStack: ['Node.js', 'Discord.js', 'JavaScript', 'Node-Cron', 'Node-iCal', 'Day.js', 'Git/GitHub', 'Railway'],
        image: '/image/bot.png',
        video: null,
        links: {
            github: 'https://github.com/ramynbl/hetic-bot',
            live: null,
            details: '/hetic-bot-details'
        },
        theme: {
            gradient: 'linear-gradient(to right, #fff, #ccc)',
            accent: '#fff' // White accent
        },
        orientation: 'left' // Content on the left
    },
    {
        id: 'arktic',
        title: 'Arktic Website',
        category: 'Projet Associatif',
        description: 'Création de la plateforme web d\'Arktic, une association étudiante mêlant tech et escalade. Le site propose une vitrine moderne (\"Code, Climb, Chill\") couplée à un système d\'inscription en temps réel pour gérer les événements sportifs.',
        techStack: ['Node.js', 'React', 'Vite', 'Tailwind CSS', 'Express', 'MySQL', 'Drizzle ORM', 'ManusAI', 'Railway'],
        image: '/image/arktic.png',
        video: null,
        links: {
            github: 'https://github.com/ramynbl/arktic',
            live: 'https://arktic.up.railway.app/',
            details: '/arktic-details'
        },
        theme: {
            gradient: 'linear-gradient(to right, #fff, #ccc)',
            accent: '#fff' // White accent
        },
        orientation: 'right' // Content on the left
    }
];
