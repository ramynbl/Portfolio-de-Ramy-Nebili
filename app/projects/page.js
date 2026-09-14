import ProjectsIntro from "@/components/sections/ProjectsIntro";
import ProjectsSection from "@/components/sections/ProjectsSection";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getProjects } from "@/lib/content";

export const metadata = {
    title: 'Projets',
    description: 'Sélection de projets : identités visuelles, sites web, refontes et expériences interactives.',
};

export default async function Projects() {
    const projects = await getProjects();

    return (
        <>
            <Header />
            <main>
                <ProjectsIntro />
                <ProjectsSection projects={projects} />
            </main>
            <Footer />
        </>
    );
}
