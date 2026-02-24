'use client';

import styles from './GlassChip.module.css';

export default function GlassChip({ children, active, onClick, className = '' }) {
    const Component = onClick ? 'button' : 'span';

    return (
        <Component
            className={`${styles.glassChip} ${active ? styles.active : ''} ${className}`}
            onClick={onClick}
        >
            {children}
        </Component>
    );
}
