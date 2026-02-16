import Hero from "../components/sections/Hero";
import Skills from "../components/sections/Skills";
import ProjectsIntro from "../components/sections/ProjectsIntro";
import AnimeFinder from "../components/sections/AnimeFinder";

export default function Home() {
    return (
        <>
            <Hero />
            <Skills />
            <ProjectsIntro />
            <AnimeFinder />

            {/* On ajoutera les autres sections ici plus tard :
          <About />
          <Projects /> 
      */}

        </>
    );
}