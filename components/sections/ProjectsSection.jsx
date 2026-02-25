'use client';

import { projectsData } from '../../data/projectsData';
import ProjectCard from '../ui/ProjectCard';
import styles from './ProjectsSection.module.css';

export default function ProjectsSection({ limit }) {
    const displayedProjects = limit ? projectsData.slice(0, limit) : projectsData;

    return (
        <section className={styles.projectsSection}>
            <div className={styles.cardsWrapper}>
                {displayedProjects.map((project, index) => {
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
