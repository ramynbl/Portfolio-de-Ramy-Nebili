'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import GlassChip from './GlassChip';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ project, index }) => {
    const isRight = project.orientation === 'right';
    const orientationClass = isRight ? styles.right : styles.left;

    return (
        <div className={`${styles.cardContainer} ${orientationClass}`}>
            {/* Background Asset */}
            {project.video ? (
                <video
                    className={styles.bgAsset}
                    src={project.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                />
            ) : (
                <div className={styles.bgAsset}>
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        style={{ objectFit: 'cover' }}
                        priority
                    />
                </div>
            )}

            {/* Gradient Overlay */}
            <div className={styles.overlay}></div>

            {/* Content */}
            <div className={styles.content}>
                <div className={styles.textContent}>
                    <span className={styles.projectLabel}>{project.category}</span>
                    <h2
                        className={styles.title}
                        style={{ backgroundImage: project.theme.gradient }}
                    >
                        {project.title}
                    </h2>
                    <div
                        className={styles.description}
                        dangerouslySetInnerHTML={{ __html: project.description }}
                    />

                    {/* Tech Stack Tags */}
                    <div className={styles.techStack}>
                        {project.techStack.map((tech, i) => (
                            <GlassChip key={i}>{tech}</GlassChip>
                        ))}
                    </div>

                    {/* CTAs */}
                    <div className={styles.links}>
                        {project.links.github && (
                            <a
                                href={project.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialLink}
                                aria-label="Voir le code sur GitHub"
                                style={{ '--hover-color': project.theme.accent }}
                            >
                                <FaGithub className={styles.socialIcon} />
                            </a>
                        )}

                        {project.links.live && (
                            <a
                                href={project.links.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.ctaButton}
                            >
                                Live view
                            </a>
                        )}

                        {project.links.details && (
                            <Link href={project.links.details} className={styles.ctaButton}>
                                En savoir plus
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
