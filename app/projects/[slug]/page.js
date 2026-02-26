'use client';

import { use } from 'react';
import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
import { MdConstruction } from 'react-icons/md';
import { GiBarrier } from 'react-icons/gi';
import { projectsData } from '../../../data/projectsData';
import styles from './Construction.module.css';

export default function ProjectPage({ params }) {
    const { slug } = use(params);
    const project = projectsData.find(p => p.id === slug);

    if (!project) {
        return (
            <div className={styles.main}>
                <div className={styles.bgLayer}>
                    <div className={styles.blob1} />
                    <div className={styles.blob2} />
                    <div className={styles.blob3} />
                </div>
                <div className={styles.container}>
                    <h1 className={styles.projectTitle}>Projet introuvable</h1>
                    <Link href="/projects" className={styles.backButton}>
                        <FiArrowLeft /> Retour aux projets
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.main}>
            {/* Background identique à ProjectsIntro */}
            <div className={styles.bgLayer}>
                <div className={styles.blob1} />
                <div className={styles.blob2} />
                <div className={styles.blob3} />
            </div>

            {/* 404 géant en arrière-plan */}
            <div className={styles.bigNumber} aria-hidden="true">404</div>

            {/* Contenu centré par-dessus */}
            <div className={styles.container}>

                {/* Titre + sous-titre */}
                <div className={styles.header}>
                    <h1 className={styles.projectTitle}>{project.title}</h1>
                    <div className={styles.subtitleRow}>
                        <GiBarrier className={styles.barrierIcon} />
                        <MdConstruction className={styles.constructionIcon} />
                        <span className={styles.subtitle}>Page en cours de construction</span>
                        <MdConstruction className={styles.constructionIcon} />
                        <GiBarrier className={styles.barrierIcon} />
                    </div>
                    <p className={styles.description}>
                        Revenez bientôt, ça vaut le coup d'œil !
                    </p>
                </div>

                {/* CTAs Live View + GitHub */}
                <div className={styles.ctaRow}>
                    {project.links?.github && (
                        <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.socialLink}
                            aria-label="Voir le code sur GitHub"
                        >
                            <FaGithub className={styles.socialIcon} />
                        </a>
                    )}
                    {project.links?.live && (
                        <a
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.ctaButton}
                        >
                            Live view
                        </a>
                    )}
                </div>

                {/* Bouton retour — en dessous des CTAs */}
                <Link href="/projects" className={styles.backButton}>
                    <FiArrowLeft /> Retour aux projets
                </Link>
            </div>
        </div>
    );
}
