'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { FiDownload, FiMail, FiBriefcase, FiAward, FiCode } from 'react-icons/fi';
import SocialIcon from '../ui/SocialIcon';
import RichText from '../ui/RichText';
import styles from './About.module.css';

const ICONS = { code: FiCode, briefcase: FiBriefcase, award: FiAward };

/**
 * Teaser « À propos » de la home. Contenu réécrit à l'étape 2.
 * @param {object} props.about  { greeting, paragraphs[], highlights[{ icon, title, text }] }
 */
export default function About({ about, socials, cv }) {
    return (
        <section id="about" className={styles.aboutSection}>
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
                    <div className={styles.leftColumn}>
                        <h3 className={styles.greeting}>{about.greeting}</h3>

                        <div className={styles.bio}>
                            {about.paragraphs.map((p, i) => (
                                <RichText key={i} text={p} />
                            ))}
                        </div>

                        <div className={styles.ctaContainer}>
                            <Link href="/about" className={styles.primaryBtn}>
                                En savoir plus &rarr;
                            </Link>
                        </div>
                    </div>

                    <div className={styles.rightColumn}>
                        <div className={styles.experienceList}>
                            {about.highlights.map((item) => {
                                const Icon = ICONS[item.icon] || FiAward;
                                return (
                                    <div key={item.title} className={styles.experienceItem}>
                                        <div className={styles.expIcon}><Icon /></div>
                                        <div className={styles.expContent}>
                                            <h4>{item.title}</h4>
                                            <p>{item.text}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className={styles.rightCtaContainer}>
                            {cv && (
                                <a href={cv.file} download className={styles.secondaryBtn}>
                                    <FiDownload /> Télécharger CV
                                </a>
                            )}
                            <a href="#contact" className={styles.secondaryBtn}>
                                <FiMail /> Me contacter
                            </a>
                            <SocialIcon href={socials.linkedin} icon={<SiLinkedin />} ariaLabel="LinkedIn" networkType="linkedin" className={styles.aboutSocialIcon} />
                            <SocialIcon href={socials.github} icon={<SiGithub />} ariaLabel="GitHub" networkType="github" className={styles.aboutSocialIcon} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
