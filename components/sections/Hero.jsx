'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut', delay: 0.1 + i * 0.1 },
    }),
};

/**
 * Hero éditorial de la home : une accroche, la disponibilité, deux CTA
 * et le portrait. Un seul <h1>, lisible d'un coup d'œil par un recruteur.
 */
export default function Hero({ hero, photo, name }) {
    return (
        <section className={styles.hero}>
            <div className={styles.backgroundLayer} aria-hidden="true">
                <div className={styles.blob1}></div>
                <div className={styles.blob2}></div>
                <div className={styles.blob3}></div>
            </div>

            <div className={styles.inner}>
                <div className={styles.content}>
                    <motion.span
                        className={styles.eyebrow}
                        variants={fadeUp} initial="hidden" animate="visible" custom={0}
                    >
                        {hero.eyebrow}
                    </motion.span>

                    <motion.h1
                        className={styles.title}
                        variants={fadeUp} initial="hidden" animate="visible" custom={1}
                    >
                        {hero.title.map((line) => (
                            <span key={line} className={styles.titleLine}>{line}</span>
                        ))}
                    </motion.h1>

                    <motion.p
                        className={styles.subtitle}
                        variants={fadeUp} initial="hidden" animate="visible" custom={2}
                    >
                        {hero.subtitle}
                    </motion.p>

                    <motion.p
                        className={styles.badge}
                        variants={fadeUp} initial="hidden" animate="visible" custom={3}
                    >
                        <span className={styles.dot} aria-hidden="true"></span>
                        {hero.badge}
                    </motion.p>

                    <motion.div
                        className={styles.ctas}
                        variants={fadeUp} initial="hidden" animate="visible" custom={4}
                    >
                        {hero.ctas.map((cta) => (
                            <Link
                                key={cta.href}
                                href={cta.href}
                                className={`${styles.btn} ${cta.variant === 'primary' ? styles.btnPrimary : styles.btnSecondary}`}
                            >
                                {cta.label}
                            </Link>
                        ))}
                    </motion.div>
                </div>

                <motion.div
                    className={styles.photoWrap}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                >
                    <Image
                        src={photo}
                        alt={`Portrait de ${name}`}
                        fill
                        sizes="(max-width: 900px) 70vw, 460px"
                        className={styles.photo}
                        priority
                    />
                </motion.div>
            </div>
        </section>
    );
}
