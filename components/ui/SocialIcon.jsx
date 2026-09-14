'use client';

import styles from './SocialIcon.module.css';

/**
 * Lien rond iconifié (réseaux, téléchargement).
 * - Liens externes : nouvel onglet.
 * - `download` : téléchargement direct dans le même onglet.
 */
export default function SocialIcon({ href, icon, ariaLabel, networkType, download, title, className = '' }) {
    const networkClass = styles[networkType] || '';
    const isExternal = /^https?:\/\//.test(href);
    const externalProps = isExternal && !download ? { target: '_blank', rel: 'noopener noreferrer' } : {};

    return (
        <a
            href={href}
            aria-label={ariaLabel}
            title={title || ariaLabel}
            className={`${styles.socialLink} ${networkClass} ${className}`}
            {...externalProps}
            {...(download ? { download: typeof download === 'string' ? download : true } : {})}
        >
            <span className={styles.iconWrapper}>
                {icon}
            </span>
        </a>
    );
}
