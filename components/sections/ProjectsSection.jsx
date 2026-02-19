'use client';

import { projectsData } from '../../data/projectsData';
import ProjectCard from '../ui/ProjectCard';
import styles from './ProjectsSection.module.css';

export default function ProjectsSection() {
    return (
        <section className={styles.projectsSection}>
            <div className={styles.cardsWrapper}>
                {projectsData.map((project, index) => {
                    return (
                        <ProjectCard
                            key={project.id}
                            index={index}
                            project={project}
                        />
                    );
                })}
            </div>
        </section>
    );
}
