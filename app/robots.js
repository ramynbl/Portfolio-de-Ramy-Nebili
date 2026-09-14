import { getSiteSettings } from '@/lib/content';

export default async function robots() {
    const site = await getSiteSettings();
    return {
        rules: [{ userAgent: '*', allow: '/', disallow: ['/api/'] }],
        sitemap: `${site.url}/sitemap.xml`,
    };
}
