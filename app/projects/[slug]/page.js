import Link from 'next/link';
import { LuConstruction } from 'react-icons/lu';
import { FiArrowLeft } from 'react-icons/fi';
import { projectsData } from '../../../data/projectsData';
import styles from './Construction.module.css';

export function generateMetadata({ params }) {
    const project = projectsData.find(p => p.id === params.slug);

    if (!project) {
        return { title: 'Projet introuvable' };
    }

    return {
        title: `${project.title} - En construction`,
        description: `Page en construction pour le projet ${project.title}.`,
    };
}

export default function ProjectPage({ params }) {
    const project = projectsData.find(p => p.id === params.slug);

    if (!project) {
        return (
            <main className={styles.main}>
                <div className={styles.container}>
                    <h1 className={styles.title}>Projet introuvable</h1>
                    <Link href="/projects" className={styles.backButton}>
                        <FiArrowLeft /> Retour aux projets
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className={styles.main}>
            {/* Background Blobs for consistency */}
            <div className={styles.blob1}></div>
            <div className={styles.blob2}></div>

            <div className={styles.container}>
                <Link href="/projects" className={styles.backButton}>
                    <FiArrowLeft /> Retour aux projets
                </Link>

                <div className={`${styles.constructionCard} ${styles.glassCard}`}>
                    <div className={styles.iconContainer}>
                        <LuConstruction className={styles.constructionIcon} />
                    </div>

                    <h1 className={styles.title}>
                        <span className={styles.projectTitle}>{project.title}</span><br />
                        <span className={styles.subtitle}>En construction</span>
                    </h1>

                    <p className={styles.description}>
                        Je travaille actuellement sur la mise en page détaillée de ce projet.
                        Revenez bientôt pour en découvrir plus sur mon processus de création,
                        les défis techniques surmontés et les résultats obtenus !
                    </p>

                    <div className={styles.actions}>
                        {project.links?.live && (
                            <a
                                href={project.links.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.primaryButton}
                            >
                                Voir le site en direct
                            </a>
                        )}
                        {project.links?.github && (
                            <a
                                href={project.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.secondaryButton}
                            >
                                Voir le code source
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}
