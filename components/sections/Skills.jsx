'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { getIcon } from '@/lib/icons';
import GlassChip from '../ui/GlassChip';
import styles from './Skills.module.css';

const ALL = 'Tout';
// Couleurs de marque trop sombres pour le dark mode → on force le texte courant
const DARK_BRAND_COLORS = ['#000000', '#0B0D0E', '#150458', '#013243', '#2D3748', '#003B57'];

/** Carrousel 3D d'outils filtrable par catégorie. Reçoit { skills, categories, messages } en props. */
export default function Skills({ skills, categories, messages }) {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const yHeader = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const yCards = useTransform(scrollYProgress, [0, 1], [100, -100]);

    const [selectedCategory, setSelectedCategory] = useState(ALL);
    const [observedCategory, setObservedCategory] = useState(ALL);
    // Filtre actif → son libellé ; sinon la catégorie de la carte au centre de l'écran
    const activeCategory = selectedCategory === ALL ? observedCategory : selectedCategory;
    const cardsRef = useRef([]);

    const allCategories = [ALL, ...categories];

    const baseList = selectedCategory === ALL
        ? skills
        : skills.filter((skill) => skill.category === selectedCategory);

    const shouldScroll = baseList.length > 6;
    const displaySkills = shouldScroll ? [...baseList, ...baseList, ...baseList] : baseList;

    // Met à jour le sous-titre selon la catégorie de la carte au centre de l'écran
    useEffect(() => {
        if (selectedCategory !== ALL) return;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const category = entry.target.getAttribute('data-category');
                        if (category) setObservedCategory(category);
                    }
                });
            },
            { root: null, rootMargin: "0px -45% 0px -45%", threshold: 0 }
        );
        cardsRef.current.forEach((card) => card && observer.observe(card));
        return () => observer.disconnect();
    }, [selectedCategory, displaySkills.length]);

    return (
        <section id="skills" className={styles.section} ref={sectionRef}>
            <div className={styles.backgroundLayer}>
                <div className={styles.blob1}></div>
                <div className={styles.blob2}></div>
                <div className={styles.blob3}></div>
            </div>

            <motion.div style={{ y: yHeader }} className={styles.headerContainer}>
                <h2 className={styles.sectionTitle}>Mes compétences</h2>

                <div className={styles.dynamicSubtitleWrapper}>
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={activeCategory}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className={styles.dynamicContent}
                        >
                            <h3 className={styles.categoryTitle}>
                                {activeCategory === ALL ? "Expertise globale" : activeCategory}
                            </h3>
                            <p className={styles.categoryMessage}>{messages[activeCategory]}</p>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className={styles.filterContainer} role="tablist" aria-label="Filtrer par catégorie">
                    {allCategories.map((cat) => (
                        <GlassChip
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            active={selectedCategory === cat}
                        >
                            {cat}
                        </GlassChip>
                    ))}
                </div>
            </motion.div>

            <motion.div className={styles.perspectiveContainer} style={{ y: yCards }}>
                <div
                    className={`${styles.track} ${shouldScroll ? '' : styles.trackStatic}`}
                >
                    {displaySkills.map((skill, index) => {
                        const Icon = getIcon(skill.icon);
                        const cardColor = DARK_BRAND_COLORS.includes(skill.color) ? 'var(--text)' : skill.color;

                        return (
                            <div
                                key={`${skill.name}-${index}`}
                                className={styles.cardWrapper}
                                style={{ '--card-color': cardColor }}
                                data-category={skill.category}
                                ref={(el) => { cardsRef.current[index] = el; }}
                            >
                                <div className={styles.card}>
                                    <div className={styles.cardGlow} />
                                    <div className={styles.iconContainer} aria-hidden="true">
                                        {Icon ? <Icon /> : <span className={styles.iconFallback}>{skill.name[0]}</span>}
                                    </div>
                                    <div className={styles.content}>
                                        <h3 className={styles.title}>{skill.name}</h3>
                                        <p className={styles.description}>{skill.desc}</p>
                                        {skill.status && <div className={styles.status}>{skill.status}</div>}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </motion.div>
        </section>
    );
}
