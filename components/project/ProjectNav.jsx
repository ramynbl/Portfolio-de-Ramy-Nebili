import Link from 'next/link';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import styles from './Project.module.css';

/** Navigation projet précédent / suivant en bas de page. */
export default function ProjectNav({ prev, next }) {
    if (!prev && !next) return null;
    return (
        <nav className={`container ${styles.projectNav}`} aria-label="Autres projets">
            {prev && (
                <Link href={`/projects/${prev.slug}`} className={styles.navCard}>
                    <span className={styles.navLabel}><FiArrowLeft /> Précédent</span>
                    <span className={styles.navTitle}>{prev.title}</span>
                </Link>
            )}
            {next && (
                <Link href={`/projects/${next.slug}`} className={`${styles.navCard} ${styles.navNext}`}>
                    <span className={styles.navLabel}>Suivant <FiArrowRight /></span>
                    <span className={styles.navTitle}>{next.title}</span>
                </Link>
            )}
        </nav>
    );
}
