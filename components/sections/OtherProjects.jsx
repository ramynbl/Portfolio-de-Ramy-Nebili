'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import { plainText } from '../ui/RichText';
import styles from './OtherProjects.module.css';

/**
 * Carrousel des projets non mis en avant.
 *
 * Le test « liste vide » vit ici, avant tout hook : le carrousel mesure le
 * scroll sur un ref, et un composant qui rend null n'attache jamais son ref,
 * ce qui fait planter useScroll (« target ref is defined but not hydrated »).
 */
export default function OtherProjects({ projects }) {
    if (!projects?.length) return null;
    return <OtherProjectsCarousel projects={projects} />;
}

function OtherProjectsCarousel({ projects }) {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const yHeader = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const yCards = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <section id="other-projects" className={styles.section} ref={sectionRef}>
            <div className={styles.backgroundLayer}>
                <div className={styles.blob1}></div>
                <div className={styles.blob2}></div>
                <div className={styles.blob3}></div>
            </div>

            <motion.div style={{ y: yHeader }} className={styles.container}>
                <div className={styles.titleSection}>
                    <h2 className={styles.titleMain}>Autres projets</h2>
                </div>
            </motion.div>

            <motion.div style={{ y: yCards }} className={styles.carouselWrapper}>
                <div className={styles.carouselContainer}>
                    {projects.map((project) => {
                        const thumb = project.thumbnail || (project.cover?.type === 'image' ? project.cover : null);
                        const excerpt = plainText(project.tagline || project.summary);
                        return (
                            <article key={project.slug} className={styles.projectCard}>
                                <Link href={`/projects/${project.slug}`} className={styles.imageContainer} aria-label={`Découvrir ${project.title}`}>
                                    {thumb ? (
                                        <Image
                                            src={thumb.src}
                                            alt={thumb.alt || project.title}
                                            fill
                                            sizes="(max-width: 768px) 85vw, 400px"
                                            className={styles.projectImage}
                                        />
                                    ) : project.cover?.type === 'video' ? (
                                        <video src={project.cover.src} autoPlay loop muted playsInline className={styles.projectImage} />
                                    ) : (
                                        <div className={styles.placeholderImage}></div>
                                    )}
                                </Link>
                                <div className={styles.cardContent}>
                                    <span className={styles.category}>{project.category}</span>
                                    <h3 className={styles.projectTitle}>{project.title}</h3>
                                    <p className={styles.description}>{excerpt}</p>

                                    <div className={styles.cardActions}>
                                        <Link href={`/projects/${project.slug}`} className={styles.cardLinkLive}>
                                            Découvrir <FaArrowRight className={styles.ctaIcon} />
                                        </Link>
                                        {project.links?.live && (
                                            <a href={project.links.live} target="_blank" rel="noopener noreferrer" className={styles.cardLinkSecondary}>
                                                Voir le site
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>

                <div className={styles.ctaContainer}>
                    <Link href="/projects" className={styles.ctaButton}>
                        Voir tous les projets <FaArrowRight className={styles.ctaIcon} />
                    </Link>
                </div>
            </motion.div>
        </section>
    );
}
