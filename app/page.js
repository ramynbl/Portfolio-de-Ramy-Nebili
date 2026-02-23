import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import ProjectsIntro from "../components/sections/ProjectsIntro";
import ProjectsSection from "../components/sections/ProjectsSection";
import ScrollReveal from "../components/ui/ScrollReveal";
import Header from "../components/layout/Header";

export default function Home() {
    return (
        <>
            <div id="home">
                <ScrollReveal>
                    <Hero />
                </ScrollReveal>
            </div>

            <ScrollReveal>
                <About />
            </ScrollReveal>

            <ScrollReveal>
                <ProjectsIntro />
            </ScrollReveal>
            <div id="projects">
                <ScrollReveal>
                    <ProjectsSection />
                </ScrollReveal>
            </div>

            <ScrollReveal>
                <Skills />
            </ScrollReveal>

        </>
    );
}