import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import ProjectsIntro from "@/components/sections/ProjectsIntro";
import ProjectsSection from "@/components/sections/ProjectsSection";
import OtherProjects from "@/components/sections/OtherProjects";
import Contact from "@/components/sections/Contact";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getProfile, getProjects, getSkills } from "@/lib/content";

export default async function Home() {
    const [profile, featured, others, skillsData] = await Promise.all([
        getProfile(),
        getProjects({ featured: true }),
        getProjects({ featured: false }),
        getSkills(),
    ]);

    return (
        <>
            <Header />
            <main>
                <div id="home">
                    <Hero
                        headline={profile.headline}
                        avatar={profile.images.avatar}
                        left={profile.hero.left}
                        right={profile.hero.right}
                    />
                </div>

                <ScrollReveal>
                    <About about={profile.about} socials={profile.socials} cv={profile.cvs[0]} />
                </ScrollReveal>

                <ScrollReveal>
                    <ProjectsIntro />
                </ScrollReveal>

                {/* Pas de ScrollReveal ici : les cartes sont en position:sticky */}
                <div id="projects">
                    <ProjectsSection projects={featured} />
                </div>

                <ScrollReveal>
                    <OtherProjects projects={others} />
                    <Skills skills={skillsData.skills} categories={skillsData.categories} messages={skillsData.messages} />
                </ScrollReveal>

                <ScrollReveal>
                    <Contact contact={profile.contact} profile={profile} />
                </ScrollReveal>
            </main>
            <Footer />
        </>
    );
}
