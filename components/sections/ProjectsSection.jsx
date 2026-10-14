import ProjectCard from '../ui/ProjectCard';
import styles from './ProjectsSection.module.css';

/** Empilement sticky de cartes projet plein écran. Reçoit les projets en props. */
export default function ProjectsSection({ projects }) {
    return (
        <section className={styles.projectsSection} aria-label="Projets">
            <div className={styles.cardsWrapper}>
                {projects.map((project, index) => (
                    <ProjectCard key={project.slug} index={index} project={project} />
                ))}
            </div>
        </section>
    );
}
