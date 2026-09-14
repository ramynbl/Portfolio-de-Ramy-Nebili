import Link from 'next/link';
import Image from 'next/image';
import { FiArrowLeft, FiExternalLink } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
import GlassChip from '../ui/GlassChip';
import RichText from '../ui/RichText';
import styles from './Project.module.css';

const KIND_LABEL = {
    client: 'Projet client',
    product: 'Produit',
    school: 'Projet d\'école',
    personal: 'Projet personnel',
};

function CoverMedia({ media, title }) {
    if (!media) return null;
    if (media.type === 'video') {
        return (
            <video
                className={styles.coverMedia}
                autoPlay
                loop
                muted
                playsInline
                poster={media.poster || undefined}
                aria-label={media.alt || `Aperçu de ${title}`}
            >
                <source src={media.src} type="video/mp4" />
            </video>
        );
    }
    return (
        <Image
            src={media.src}
            alt={media.alt || title}
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            className={styles.coverMedia}
            priority
        />
    );
}

/** En-tête d'une page projet : méta, accroche, CTAs et média principal. */
export default function ProjectHero({ project }) {
    const meta = [
        project.client && { label: 'Client', value: project.client },
        project.year && { label: 'Année', value: project.year },
        project.role && { label: 'Rôle', value: project.role },
        project.services?.length && { label: 'Services', value: project.services.join(' · ') },
    ].filter(Boolean);

    return (
        <section className={styles.hero}>
            <div className={styles.bgLayer} aria-hidden="true">
                <div className={styles.blob1} />
                <div className={styles.blob2} />
            </div>

            <div className={`container ${styles.heroInner}`}>
                <Link href="/projects" className={styles.backLink}>
                    <FiArrowLeft /> Tous les projets
                </Link>

                <span className={styles.overline}>{project.category || KIND_LABEL[project.kind]}</span>
                <h1 className={styles.title}>{project.title}</h1>
                {project.tagline && <p className={styles.tagline}>{project.tagline}</p>}

                <div className={styles.ctaRow}>
                    {project.links?.live && (
                        <a href={project.links.live} target="_blank" rel="noopener noreferrer" className={`${styles.cta} ${styles.ctaPrimary}`}>
                            Voir le site <FiExternalLink />
                        </a>
                    )}
                    {project.links?.github && (
                        <a href={project.links.github} target="_blank" rel="noopener noreferrer" className={styles.cta}>
                            <FaGithub /> Code source
                        </a>
                    )}
                </div>

                {meta.length > 0 && (
                    <dl className={styles.metaGrid}>
                        {meta.map((m) => (
                            <div key={m.label} className={styles.metaItem}>
                                <dt>{m.label}</dt>
                                <dd>{m.value}</dd>
                            </div>
                        ))}
                    </dl>
                )}
            </div>

            {project.cover && (
                <div className={`container ${styles.coverWrapper}`}>
                    <div className={styles.cover}>
                        <CoverMedia media={project.cover} title={project.title} />
                    </div>
                </div>
            )}

            <div className={`container ${styles.summaryRow}`}>
                <RichText text={project.summary} className={styles.summary} />
                {project.tools?.length > 0 && (
                    <div className={styles.tools}>
                        <span className={styles.toolsLabel}>Outils</span>
                        <div className={styles.toolsList}>
                            {project.tools.map((t) => <GlassChip key={t}>{t}</GlassChip>)}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
