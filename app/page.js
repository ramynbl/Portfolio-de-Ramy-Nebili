import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import ProjectsIntro from "../components/sections/ProjectsIntro";
import ProjectsSection from "../components/sections/ProjectsSection";
import OtherProjects from "../components/sections/OtherProjects";
import Contact from "../components/sections/Contact";
import ScrollReveal from "../components/ui/ScrollReveal";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function Home() {
    return (
        <>
            <Header />
            <main>
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
                        <ProjectsSection limit={3} />
                    </ScrollReveal>
                </div>

                <ScrollReveal>
                    <div style={{ backgroundColor: '#000' }}>
                        <OtherProjects />
                        <Skills />
                    </div>
                </ScrollReveal>

                <ScrollReveal>
                    <Contact />
                </ScrollReveal>
            </main>
            <Footer />
        </>
    );
}