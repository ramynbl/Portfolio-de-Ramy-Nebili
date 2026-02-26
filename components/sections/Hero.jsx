'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import TextSlider from '../ui/TextSlider';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.backgroundLayer}>
                <div className={styles.blob1}></div>
                <div className={styles.blob2}></div>
                <div className={styles.blob3}></div>
            </div>

            <motion.div
                className={`${styles.split} ${styles.left}`}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
                <h1 className={styles.title}>
                    <TextSlider words={["Front-end", "Interface", "Visuel", "Intégrer"]} />
                </h1>
                <p className={styles.subtitle}>Expériences Utilisateurs & Interfaces Modernes</p>
                <Link href="/about" className={`${styles.btnHero} ${styles.btnLeft}`}>En savoir plus</Link>
            </motion.div>

            <motion.div
                className={`${styles.split} ${styles.right}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
                <h1 className={styles.title}>
                    <TextSlider words={["< Coder >", "Innover", "Construire", "Automatiser"]} />
                </h1>
                <p className={styles.subtitle}>Développement Front-end & Back-end</p>
                <div className={styles.buttonsGroup}>
                    <Link href="/about" className={`${styles.btnHero} ${styles.btnLeft} ${styles.mobileOnlyBtn}`}>En savoir plus</Link>
                    <Link href="/projects" className={`${styles.btnHero} ${styles.btnRight}`}>Mes Projets</Link>
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
                        src="/image/avatar-2.png"
                        alt="Ramy Nebili Avatar"
                        fill
                        className={styles.avatarImage}
                        priority
                    />
                </motion.div>
            </div>

        </section>
    );
}
