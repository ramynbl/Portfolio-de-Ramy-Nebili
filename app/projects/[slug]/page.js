import { notFound } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProjectHero from '@/components/project/ProjectHero';
import ProjectGallery from '@/components/project/ProjectGallery';
import ProjectNav from '@/components/project/ProjectNav';
import { getProjectBySlug, getProjectSlugs, getAdjacentProjects, getSiteSettings, isListed } from '@/lib/content';
import { plainText } from '@/components/ui/RichText';

export async function generateStaticParams() {
    const slugs = await getProjectSlugs();
    return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const [project, site] = await Promise.all([getProjectBySlug(slug), getSiteSettings()]);
    if (!project) return { title: 'Projet introuvable' };

    const description = plainText(project.tagline || project.summary);
    const image = project.thumbnail?.src || (project.cover?.type === 'image' ? project.cover.src : project.cover?.poster);

    return {
        title: project.title,
        description,
        // Archive ou brouillon : page consultable par son URL, mais pas indexée.
        // Clé omise pour un projet listé, sinon elle écraserait celle du layout.
        ...(isListed(project) ? {} : { robots: { index: false, follow: false } }),
        alternates: { canonical: `${site.url}/projects/${project.slug}` },
        openGraph: {
            title: `${project.title} | ${site.name}`,
            description,
            url: `${site.url}/projects/${project.slug}`,
            type: 'article',
            images: image ? [{ url: image }] : undefined,
        },
    };
}

export default async function ProjectPage({ params }) {
    const { slug } = await params;
    const project = await getProjectBySlug(slug);
    if (!project) notFound();

    const { prev, next } = await getAdjacentProjects(slug);

    return (
        <>
            <Header />
            <main>
                <ProjectHero project={project} />
                <ProjectGallery project={project} />
                <ProjectNav prev={prev} next={next} />
            </main>
            <Footer />
        </>
    );
}
