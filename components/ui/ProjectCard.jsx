'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import GlassChip from './GlassChip';
import RichText from './RichText';
import styles from './ProjectCard.module.css';

/** Rend un média { type, src, poster, alt } en fond de carte. */
function Media({ media, className, priority, mobile = false }) {
    if (!media) return null;
    // Le média mobile est masqué en CSS sur desktop : on évite de lui réserver 100vw.
    const sizes = mobile ? '(max-width: 768px) 100vw, 1px' : '(min-width: 769px) 100vw, 1px';
    if (media.type === 'video') {
        return (
            <video
                className={`${styles.bgAsset} ${className}`}
                autoPlay
                loop
                muted
                playsInline
                preload={priority ? 'auto' : 'metadata'}
                poster={media.poster || undefined}
                aria-label={media.alt}
            >
                <source src={media.src} type="video/mp4" />
            </video>
        );
    }
    return (
        <div className={`${styles.bgAsset} ${className}`}>
            <Image
                src={media.src}
                alt={media.alt || ''}
                fill
                sizes={sizes}
                style={{ objectFit: 'cover' }}
                priority={priority}
            />
        </div>
    );
}

const ProjectCard = ({ project, index = 0 }) => {
    const isRight = project.orientation === 'right';
    const orientationClass = isRight ? styles.right : styles.left;
    const hasMobile = Boolean(project.coverMobile);
    const priority = index === 0;

    return (
        <article className={`${styles.cardContainer} ${orientationClass}`}>
            <Media media={project.cover} className={hasMobile ? styles.desktopOnly : ''} priority={priority} />
            {hasMobile && <Media media={project.coverMobile} className={styles.mobileOnly} priority={priority} mobile />}

            <div className={styles.overlay}></div>

            <div className={styles.content}>
                <div className={styles.textContent}>
                    <span className={styles.projectLabel}>{project.category}</span>
                    <h2 className={styles.title}>{project.title}</h2>
                    <RichText text={project.summary} className={styles.description} />

                    <div className={styles.techStack}>
                        {project.tools.map((tech) => (
                            <GlassChip key={tech}>{tech}</GlassChip>
                        ))}
                    </div>

                    <div className={styles.links}>
                        {project.links.github && (
                            <a
                                href={project.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialLink}
                                aria-label={`Voir le code de ${project.title} sur GitHub`}
                            >
                                <FaGithub className={styles.socialIcon} />
                            </a>
                        )}

                        {project.links.live && (
                            <a href={project.links.live} target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
                                Voir le site
                            </a>
                        )}

                        <Link href={`/projects/${project.slug}`} className={`${styles.ctaButton} ${styles.ctaPrimary}`}>
                            Découvrir
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default ProjectCard;
