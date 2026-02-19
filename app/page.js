import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import ProjectsIntro from "../components/sections/ProjectsIntro";
import ProjectsSection from "../components/sections/ProjectsSection";
import ScrollReveal from "../components/ui/ScrollReveal";

export default function Home() {
    return (
        <>
            <ScrollReveal>
                <Hero />
            </ScrollReveal>

            <ScrollReveal>
                <About />
            </ScrollReveal>

            <ScrollReveal>
                <Skills />
            </ScrollReveal>

            {/* Static anchor for reliable scroll navigation */}
            <div id="projects-intro" />
            <ScrollReveal>
                <ProjectsIntro />
                <ProjectsSection />
            </ScrollReveal>
        </>
    );
}