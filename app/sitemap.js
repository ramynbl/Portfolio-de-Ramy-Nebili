import { getSiteSettings, getProjectSlugs } from '@/lib/content';

export default async function sitemap() {
    const [site, slugs] = await Promise.all([getSiteSettings(), getProjectSlugs()]);
    const now = new Date();

    return [
        { url: site.url, lastModified: now, changeFrequency: 'monthly', priority: 1 },
        { url: `${site.url}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
        { url: `${site.url}/projects`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
        ...slugs.map((slug) => ({
            url: `${site.url}/projects/${slug}`,
            lastModified: now,
            changeFrequency: 'yearly',
            priority: 0.7,
        })),
    ];
}
