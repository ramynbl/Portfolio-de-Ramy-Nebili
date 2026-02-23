import ScrollReveal from "../../components/ui/ScrollReveal";
import ProjectsIntro from "../../components/sections/ProjectsIntro";
import ProjectsSection from "../../components/sections/ProjectsSection";

export default function Projects() {
    return (
        <main>
            <ScrollReveal>
                <ProjectsIntro />
            </ScrollReveal>

            <ScrollReveal>
                <ProjectsSection />
            </ScrollReveal>
        </main>
    );
}