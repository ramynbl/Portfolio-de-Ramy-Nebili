'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { projectsData } from '../../data/projectsData';
import styles from './OtherProjects.module.css';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';

export default function OtherProjects() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // Parallax effects to match Skills section
    const yHeader = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const yCards = useTransform(scrollYProgress, [0, 1], [100, -100]);

    // For the home page, we want to display all projects starting from the 4th project
    // since the first 3 are already showcased above.
    const otherProjects = projectsData.slice(3);

    return (
        <section id="other-projects" className={styles.section} ref={sectionRef}>
            {/* Dynamic Background matching Skills */}
            <div className={styles.backgroundLayer}>
                <div className={styles.blob1}></div>
                <div className={styles.blob2}></div>
                <div className={styles.blob3}></div>
            </div>

            <motion.div style={{ y: yHeader }} className={styles.container}>
                <div className={styles.titleSection}>
                    <h2 className={styles.titleMain}>Autres Projets</h2>
                </div>
            </motion.div>

            {/* Carousel Container with Parallax */}
            <motion.div style={{ y: yCards }} className={styles.carouselWrapper}>
                <div className={styles.carouselContainer}>
                    {otherProjects.map((project) => (
                        <div key={project.id} className={styles.projectCard}>
                            <div className={styles.imageContainer}>
                                {project.thumbnail || project.image ? (
                                    <Image
                                        src={project.thumbnail || project.image}
                                        alt={project.title}
                                        fill
                                        className={styles.projectImage}
                                    />
                                ) : project.video ? (
                                    <video
                                        src={project.video}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className={styles.projectImage}
                                    />
                                ) : (
                                    <div className={styles.placeholderImage}></div>
                                )}
                            </div>
                            <div className={styles.cardContent}>
                                <span className={styles.category}>{project.category}</span>
                                <h3 className={styles.projectTitle}>{project.title}</h3>
                                <p className={styles.description}>
                                    {/* Remove strong tags for plain text preview */}
                                    {project.description.replace(/<[^>]+>/g, '').substring(0, 100)}...
                                    {project.links?.details && (
                                        <Link href={project.links.details} className={styles.readMoreLink} onClick={(e) => e.stopPropagation()}>
                                            En savoir plus...
                                        </Link>
                                    )}
                                </p>

                                {/* New Interaction Buttons */}
                                {project.links?.live && (
                                    <div className={styles.cardActions}>
                                        <a
                                            href={project.links.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.cardLinkLive}
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            Live demo
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
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
