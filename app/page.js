import Hero from "../components/sections/Hero";
import Skills from "../components/sections/Skills";
import ProjectsIntro from "../components/sections/ProjectsIntro";

export default function Home() {
    return (
        <>
            <Hero />
            <Skills />
            <ProjectsIntro />

            {/* On ajoutera les autres sections ici plus tard :
          <About />
          <Projects /> 
      */}

        </>
    );
}