'use client';

import styles from './SocialIcon.module.css';

export default function SocialIcon({ href, icon, ariaLabel, networkType, download, title, className = '' }) {
    const networkClass = styles[networkType] || '';

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={ariaLabel}
            className={`${styles.socialLink} ${networkClass} ${className}`}
            {...(download ? { download, title } : {})}
        >
            <span className={styles.iconWrapper}>
                {icon}
            </span>
        </a>
    );
}
