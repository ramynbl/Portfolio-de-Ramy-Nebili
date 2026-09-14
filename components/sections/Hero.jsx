'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import TextSlider from '../ui/TextSlider';
import styles from './Hero.module.css';

/**
 * Hero en deux volets + avatar central.
 * Un seul <h1> (l'accroche, masqué visuellement) ; les sliders sont décoratifs.
 * Contenu réécrit à l'étape 2 (positionnement design / web / communication).
 */
export default function Hero({ headline, avatar, left, right }) {
    return (
        <section className={styles.hero}>
            <div className={styles.backgroundLayer}>
                <div className={styles.blob1}></div>
                <div className={styles.blob2}></div>
                <div className={styles.blob3}></div>
            </div>

            <h1 className="visually-hidden">{headline}</h1>

            <motion.div
                className={`${styles.split} ${styles.left}`}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
                <p className={styles.title} aria-hidden="true">
                    <TextSlider words={left.words} />
                </p>
                <p className={styles.subtitle}>{left.subtitle}</p>
                <Link href="/about" className={`${styles.btnHero} ${styles.btnLeft}`}>En savoir plus</Link>
            </motion.div>

            <motion.div
                className={`${styles.split} ${styles.right}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
                <p className={styles.title} aria-hidden="true">
                    <TextSlider words={right.words} />
                </p>
                <p className={styles.subtitle}>{right.subtitle}</p>
                <div className={styles.buttonsGroup}>
                    <Link href="/about" className={`${styles.btnHero} ${styles.btnLeft} ${styles.mobileOnlyBtn}`}>En savoir plus</Link>
                    <Link href="/projects" className={`${styles.btnHero} ${styles.btnRight}`}>Mes projets</Link>
                </div>
            </motion.div>

            <div className={styles.avatarContainer}>
                <motion.div
                    style={{ position: 'relative', width: '100%', height: '100%' }}
                    initial={{ opacity: 0, scale: 0.8, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                >
                    <Image
                        src={avatar}
                        alt="Avatar de Ramy Nebili"
                        fill
                        sizes="(max-width: 768px) 380px, 60vh"
                        className={styles.avatarImage}
                        priority
                    />
                </motion.div>
            </div>
        </section>
    );
}
