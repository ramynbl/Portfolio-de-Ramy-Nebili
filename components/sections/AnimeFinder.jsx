'use client';

import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Link from 'next/link';
import styles from './AnimeFinder.module.css';

export default function AnimeFinder() {
    return (
        <section className={styles.animeFinder}>
            {/* Background Video */}
            <video
                className={styles.bgVideo}
                src="/image/anime.mp4"
                autoPlay
                loop
                muted
                playsInline
            />

            {/* Gradient Overlay */}
            <div className={styles.overlay}></div>

            {/* Content */}
            <div className={styles.content}>
                <div className={styles.projectLabel}>Projet Data & Dev</div>
                <h2 className={styles.title}>Anime Finder</h2>
                <p className={styles.description}>
                    Une plateforme de recommandation intelligente qui dépasse la simple moyenne.
                    Notre algorithme calcule un <strong>Score Éditorial</strong> basé sur la régularité et la stabilité des notes d'épisodes,
                    pour identifier les véritables pépites du catalogue.
                </p>

                {/* Tech Stack Tags */}
                <div className={styles.techStack}>
                    <span className={styles.techBadge}>Python</span>
                    <span className={styles.techBadge}>FastAPI</span>
                    <span className={styles.techBadge}>Data Science</span>
                    <span className={styles.techBadge}>Streamlit</span>
                    <span className={styles.techBadge}>JavaScript</span>
                    <span className={styles.techBadge}>HTML</span>
                    <span className={styles.techBadge}>CSS</span>
                </div>

                {/* CTAs */}
                <div className={styles.links}>
                    <a
                        href="https://github.com/ramynbl/projet-anime-data"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.iconLink}
                        aria-label="Voir le code sur GitHub"
                    >
                        <FaGithub size={30} />
                    </a>

                    <a
                        href="https://projet-anime-data.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.iconLink}
                        aria-label="Voir l'application en ligne"
                    >
                        <FaExternalLinkAlt size={25} />
                    </a>

                    <Link href="/anime-finder-details" className={styles.ctaButton}>
                        En savoir plus
                    </Link>
                </div>
            </div>
        </section>
    );
}
