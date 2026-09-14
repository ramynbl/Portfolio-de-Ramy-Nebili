/**
 * lib/content.js — POINT D'ACCÈS UNIQUE AUX CONTENUS.
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

export async function getSiteSettings() {
    return site;
}

export async function getProfile() {
    return profile;
}

export async function getCVs() {
    return profile.cvs;
}

export async function getProjects({ featured } = {}) {
    const list = [...projects].sort(byOrder);
    return featured === undefined ? list : list.filter((p) => Boolean(p.featured) === featured);
}

export async function getProjectSlugs() {
    return projects.map((p) => p.slug);
}

export async function getProjectBySlug(slug) {
    return projects.find((p) => p.slug === slug) || null;
}

/** Projet précédent / suivant dans l'ordre d'affichage (pour la navigation en bas de page détail). */
export async function getAdjacentProjects(slug) {
    const list = [...projects].sort(byOrder);
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
