'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { FiDownload, FiMail, FiBriefcase, FiAward, FiCode } from 'react-icons/fi';
import styles from './About.module.css';

export default function About() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // Parallax logic: Enhanced movement for clear visibility
    const yImage = useTransform(scrollYProgress, [0, 1], [150, -150]);
    const yText = useTransform(scrollYProgress, [0, 1], [50, -50]);

    return (
        <section id="about" className={styles.aboutSection} ref={sectionRef}>
            <div className={styles.container}>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className={styles.title}
                >
                    À propos
                </motion.h2>

                <div className={styles.contentWrapper}>
                    {/* Colonne Gauche - Texte & CTA */}
                    <motion.div
                        className={styles.leftColumn}
                    >
                        <h3 className={styles.greeting}>Hello World ! Je suis Ramy</h3>

                        <div className={styles.bio}>
                            <p>
                                Développeur <span className={styles.highlight}>Full Stack JavaScript</span> en reconversion, je combine une double culture technique et design.
                            </p>
                            <p>
                                Actuellement en Bachelor Développement Web à HETIC, je recherche une <span className={styles.highlight}>alternance</span> ou <span className={styles.highlight}>un stage</span>pour mettre à profit ma passion pour Node.js, React et la conception d'interfaces soignées.
                            </p>
                            <p>
                                Je suis également à l'écoute d'opportunités pour des missions <span className={styles.highlight}>freelance</span>.
                            </p>
                        </div>

                        <div className={styles.ctaContainer}>
                            <a href="/cv.pdf" download className={styles.primaryBtn}>
                                <FiDownload /> Télécharger CV
                            </a>
                            <a href="#contact" className={styles.secondaryBtn}>
                                <FiMail /> Me contacter
                            </a>

                            <a href="https://www.linkedin.com/in/ramynebili/" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
                                <SiLinkedin className={styles.socialIcon} />
                            </a>
                            <a href="https://github.com/ramynbl" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="GitHub">
                                <SiGithub className={styles.socialIcon} />
                            </a>
                        </div>
                    </motion.div>

                    {/* Colonne Droite - Expériences */}
                    <motion.div
                        className={styles.rightColumn}
                    >
                        <div className={styles.experienceList}>
                            <div className={styles.experienceItem}>
                                <div className={styles.expIcon}><FiCode /></div>
                                <div className={styles.expContent}>
                                    <h4>Développeur Full Stack (HETIC)</h4>
                                    <p>App de recommandation d'animés (Python/JS) • 2026</p>
                                </div>
                            </div>

                            <div className={styles.experienceItem}>
                                <div className={styles.expIcon}><FiBriefcase /></div>
                                <div className={styles.expContent}>
                                    <h4>Commercial & Manager (COPYTOP / ZARA)</h4>
                                    <p>7 ans d'expérience en gestion client et management • 2018-2024</p>
                                </div>
                            </div>

                            <div className={styles.experienceItem}>
                                <div className={styles.expIcon}><FiAward /></div>
                                <div className={styles.expContent}>
                                    <h4>Graphiste (Alternance)</h4>
                                    <p>Communication visuelle et webdesign • 2013-2016</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
