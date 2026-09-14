'use client';

import { useSyncExternalStore } from 'react';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';
import styles from './ThemeToggle.module.css';

const subscribeNoop = () => () => {};

export default function ThemeToggle({ className = '' }) {
    const { resolvedTheme, setTheme } = useTheme();
    // Le thème n'est connu qu'après hydratation : false côté serveur, true côté client.
    const mounted = useSyncExternalStore(subscribeNoop, () => true, () => false);

    const isDark = mounted ? resolvedTheme === 'dark' : true;
    const label = isDark ? 'Passer en mode clair' : 'Passer en mode sombre';

    return (
        <button
            type="button"
            className={`${styles.toggle} ${className}`}
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            aria-label={label}
            title={label}
            aria-pressed={!isDark}
        >
            <AnimatePresence mode="wait" initial={false}>
                <motion.span
                    key={isDark ? 'moon' : 'sun'}
                    className={styles.icon}
                    initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                >
                    {isDark ? <FiMoon /> : <FiSun />}
                </motion.span>
            </AnimatePresence>
        </button>
    );
}
