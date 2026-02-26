import ScrollReveal from "../../components/ui/ScrollReveal";
import ProjectsIntro from "../../components/sections/ProjectsIntro";
import ProjectsSection from "../../components/sections/ProjectsSection";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

export default function Projects() {
    return (
        <>
            <Header />
            <main>
                <ScrollReveal>
                    <ProjectsIntro />
                </ScrollReveal>

                <ScrollReveal>
                    <ProjectsSection />
                </ScrollReveal>
            </main>
            <Footer />
        </>
    );
}