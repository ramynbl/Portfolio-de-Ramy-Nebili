// Résolution des icônes par clé texte : les données (et demain le CMS)
// stockent une chaîne, jamais un composant React.
import {
    SiReact, SiNextdotjs, SiTailwindcss, SiJavascript, SiTypescript, SiVite, SiHtml5, SiCss3,
    SiNodedotjs, SiExpress, SiFastapi, SiPython, SiDiscord, SiJupyter, SiPandas, SiNumpy, SiSqlite,
    SiMysql, SiDocker, SiGit, SiPrisma, SiSanity, SiVercel, SiNetlify, SiRender, SiRailway, SiFigma,
    SiAdobeindesign, SiAdobeillustrator, SiAdobephotoshop, SiAdobeaftereffects, SiBlender, SiAdobexd,
    SiFramer, SiThreedotjs, SiGoogleanalytics, SiGoogleads, SiMeta, SiCanva, SiNotion, SiWordpress,
    SiWebflow, SiHubspot, SiMailchimp, SiGithub, SiLinkedin,
} from 'react-icons/si';

const ICONS = {
    react: SiReact, nextjs: SiNextdotjs, tailwind: SiTailwindcss, javascript: SiJavascript,
    typescript: SiTypescript, vite: SiVite, html: SiHtml5, css: SiCss3, nodejs: SiNodedotjs,
    express: SiExpress, fastapi: SiFastapi, python: SiPython, discord: SiDiscord, jupyter: SiJupyter,
    pandas: SiPandas, numpy: SiNumpy, sqlite: SiSqlite, mysql: SiMysql, docker: SiDocker, git: SiGit,
    prisma: SiPrisma, sanity: SiSanity, vercel: SiVercel, netlify: SiNetlify, render: SiRender,
    railway: SiRailway, figma: SiFigma, indesign: SiAdobeindesign, illustrator: SiAdobeillustrator,
    photoshop: SiAdobephotoshop, aftereffects: SiAdobeaftereffects, blender: SiBlender, xd: SiAdobexd,
    framer: SiFramer, threejs: SiThreedotjs, googleanalytics: SiGoogleanalytics, googleads: SiGoogleads,
    meta: SiMeta, canva: SiCanva, notion: SiNotion, wordpress: SiWordpress, webflow: SiWebflow,
    hubspot: SiHubspot, mailchimp: SiMailchimp, github: SiGithub, linkedin: SiLinkedin,
};

export function getIcon(key) {
    return ICONS[key] || null;
}
