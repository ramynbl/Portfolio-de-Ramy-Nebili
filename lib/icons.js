// Résolution des icônes par clé texte : les données (et demain le CMS)
// stockent une chaîne, jamais un composant React.
import {
    SiReact, SiNextdotjs, SiTailwindcss, SiJavascript, SiHtml5, SiCss3, SiNodedotjs,
    SiSqlite, SiMysql, SiDocker, SiGit, SiGithub, SiSanity, SiVercel, SiNetlify, SiRender,
    SiRailway, SiThreedotjs, SiBlender, SiFigma, SiAdobeindesign, SiAdobeillustrator,
    SiAdobephotoshop, SiAdobeaftereffects, SiFramer, SiCanva,
    SiGoogleanalytics, SiGoogletagmanager, SiGooglesearchconsole, SiLooker, SiGoogleads,
    SiGooglesheets, SiMeta, SiSemrush, SiHotjar,
    SiWebflow, SiWordpress, SiShopify, SiBrevo, SiSalesforce, SiHubspot,
    SiN8N, SiMake, SiNotion, SiTrello, SiOpenai, SiClaude, SiLinkedin,
} from 'react-icons/si';

import {
    FiSearch, FiBarChart2, FiTarget, FiUsers, FiLayers, FiTrello, FiEdit3, FiTrendingUp,
    FiCode, FiBriefcase, FiAward, FiPenTool, FiFilm, FiSmile, FiCompass, FiActivity,
} from 'react-icons/fi';

const ICONS = {
    // Marques et outils
    react: SiReact, nextjs: SiNextdotjs, tailwind: SiTailwindcss, javascript: SiJavascript,
    html: SiHtml5, css: SiCss3, nodejs: SiNodedotjs, threejs: SiThreedotjs,
    sqlite: SiSqlite, mysql: SiMysql, docker: SiDocker, git: SiGit, github: SiGithub,
    sanity: SiSanity, vercel: SiVercel, netlify: SiNetlify, render: SiRender, railway: SiRailway,
    blender: SiBlender, figma: SiFigma, indesign: SiAdobeindesign, illustrator: SiAdobeillustrator,
    photoshop: SiAdobephotoshop, aftereffects: SiAdobeaftereffects, framer: SiFramer, canva: SiCanva,
    googleanalytics: SiGoogleanalytics, googletagmanager: SiGoogletagmanager,
    searchconsole: SiGooglesearchconsole, looker: SiLooker, googleads: SiGoogleads,
    googlesheets: SiGooglesheets, meta: SiMeta, semrush: SiSemrush, hotjar: SiHotjar,
    webflow: SiWebflow, wordpress: SiWordpress, shopify: SiShopify, brevo: SiBrevo,
    salesforce: SiSalesforce, hubspot: SiHubspot, n8n: SiN8N, make: SiMake,
    notion: SiNotion, trello: SiTrello, openai: SiOpenai, claude: SiClaude, linkedin: SiLinkedin,

    // Compétences-méthodes, sans logo de marque
    seo: FiTrendingUp,
    audit: FiSearch,
    benchmark: FiBarChart2,
    measure: FiTarget,
    usertest: FiUsers,
    designsystem: FiLayers,
    agile: FiTrello,
    copywriting: FiEdit3,
    strategy: FiCompass,
    cro: FiActivity,

    // Icônes de section (cartes « À propos », parcours, perso)
    code: FiCode,
    project: FiCompass,
    client: FiBriefcase,
    design: FiPenTool,
    data: FiBarChart2,
    briefcase: FiBriefcase,
    award: FiAward,
    users: FiUsers,
    film: FiFilm,
    smile: FiSmile,
};

export function getIcon(key) {
    return ICONS[key] || null;
}
