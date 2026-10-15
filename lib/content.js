/**
 * lib/content.js : POINT D'ACCÈS UNIQUE AUX CONTENUS.
 *
 * Aujourd'hui : lit les fichiers statiques de ./data.
 * Demain (CMS Sanity / Payload / Strapi…) : remplacer le corps de ces
 * fonctions par des requêtes ; leurs signatures (async) ne changent pas,
 * donc aucun composant n'est à toucher.
 *
 * Règle : les composants n'importent JAMAIS ./data directement.
 */
import { site } from '@/data/site';
import { profile } from '@/data/profile';
import { projects } from '@/data/projects';
import { skills, skillCategories, skillCategoryMessages } from '@/data/skills';

const byOrder = (a, b) => a.order - b.order;

/**
 * Un projet est listé s'il n'est ni archivé ni en brouillon. Un projet non
 * listé n'apparaît ni sur la home, ni sur /projects, ni au sitemap, mais sa
 * page reste accessible par son URL (et porte un noindex).
 */
export function isListed(project) {
    return !project.archived && !project.draft;
}

export async function getSiteSettings() {
    return site;
}

export async function getProfile() {
    return profile;
}

export async function getCVs() {
    return profile.cvs;
}

/**
 * Projets triés. Seuls les projets listés sont renvoyés par défaut ;
 * `includeUnlisted: true` ajoute les archives et les brouillons.
 */
export async function getProjects({ featured, includeUnlisted = false } = {}) {
    let list = [...projects].sort(byOrder);
    if (!includeUnlisted) list = list.filter(isListed);
    return featured === undefined ? list : list.filter((p) => Boolean(p.featured) === featured);
}

/**
 * Slugs à pré-rendre. Par défaut tous, archives et brouillons compris, pour
 * que leur page reste accessible par lien direct. Le sitemap passe
 * `includeUnlisted: false`.
 */
export async function getProjectSlugs({ includeUnlisted = true } = {}) {
    return projects.filter((p) => includeUnlisted || isListed(p)).map((p) => p.slug);
}

export async function getProjectBySlug(slug) {
    return projects.find((p) => p.slug === slug) || null;
}

/**
 * Projet précédent / suivant pour la navigation en bas de page détail.
 * Ne renvoie que des projets listés : on ne veut pas renvoyer un visiteur
 * vers une archive ou un brouillon depuis une page active.
 */
export async function getAdjacentProjects(slug) {
    const list = [...projects].filter(isListed).sort(byOrder);
    const i = list.findIndex((p) => p.slug === slug);
    if (i === -1) return { prev: null, next: null };
    return {
        prev: list[(i - 1 + list.length) % list.length],
        next: list[(i + 1) % list.length],
    };
}

export async function getSkills() {
    return { skills, categories: skillCategories, messages: skillCategoryMessages };
}
