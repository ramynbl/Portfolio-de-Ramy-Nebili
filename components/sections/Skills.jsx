'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { skillsData } from '../../data/skillsData';
import GlassChip from '../ui/GlassChip';
import styles from './Skills.module.css';

export default function Skills() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const yHeader = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const yCards = useTransform(scrollYProgress, [0, 1], [100, -100]);

    const [selectedCategory, setSelectedCategory] = useState("Tout");
    const [activeCategory, setActiveCategory] = useState("Tout");

    const containerRef = useRef(null);
    const cardsRef = useRef([]);

    const categories = ["Tout", "Design System & UI", "Frontend Engineering", "Backend & Automation", "Data & Infrastructure"];

    const categoryMessages = {
        "Tout": "Des outils que j’explore, maîtrise et combine pour créer des expériences complètes.",
        "Design System & UI": "Je conçois des interfaces avec une rigueur de graphiste.",
        "Frontend Engineering": "Je développe des expériences fluides et performantes.",
        "Backend & Automation": "Je construis des APIs et des outils d'automatisation intelligents.",
        "Data & Infrastructure": "Je gère la persistance des données et le déploiement."
    };

    const getSafeColor = (hex) => {
        const darkColors = ['#000000', '#0B0D0E', '#150458', '#013243'];
        if (darkColors.includes(hex)) return '#FFFFFF';
        return hex;
    };

    const baseList = selectedCategory === "Tout"
        ? skillsData
        : skillsData.filter(skill => skill.category === selectedCategory);

    const shouldScroll = baseList.length > 6;

    const displaySkills = shouldScroll
        ? [...baseList, ...baseList, ...baseList]
        : baseList;

    useEffect(() => {
        if (selectedCategory !== "Tout") {
            setActiveCategory(selectedCategory);
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const category = entry.target.getAttribute('data-category');
                        if (category && category !== activeCategory) {
                            setActiveCategory(category);
                        }
                    }
                });
            },
            {
                root: null,
                rootMargin: "0px -45% 0px -45%",
                threshold: 0
            }
        );

        cardsRef.current.forEach((card) => {
            if (card) observer.observe(card);
        });

        return () => observer.disconnect();
    }, [activeCategory, selectedCategory]);

    useEffect(() => {
        cardsRef.current = [];
    }, [displaySkills]);

    return (
        <section id="skills" className={styles.section} ref={sectionRef}>
            <div className={styles.backgroundLayer}>
                <div className={styles.blob1}></div>
                <div className={styles.blob2}></div>
                <div className={styles.blob3}></div>
            </div>

            <motion.div style={{ y: yHeader }} className={styles.headerContainer}>
                <h2 className={styles.sectionTitle}>Mes Compétences</h2>

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
                                {activeCategory === "Tout" ? "Expertise Globale" : activeCategory}
                            </h3>
                            <p className={styles.categoryMessage}>
                                {categoryMessages[activeCategory]}
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className={styles.filterContainer}>
                    {categories.map((cat) => (
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

            <motion.div className={styles.perspectiveContainer} ref={containerRef} style={{ y: yCards }}>
                <div
                    className={styles.track}
                    style={!shouldScroll ? {
                        animation: 'none',
                        justifyContent: 'flex-start', // Permet le scroll
                        width: 'max-content', // Essentiel pour que l'overflow marche sur trackpad
                        padding: '100px 40px',
                        gap: '40px'
                    } : {
                        width: 'max-content',
                        padding: '100px 40px'
                    }}
                >
                    {displaySkills.map((skill, index) => {
                        const Icon = skill.icon;
                        const safeColor = getSafeColor(skill.color);

                        return (
                            <div
                                key={`${skill.name}-${index}`}
                                className={styles.cardWrapper}
                                style={{ '--card-color': safeColor }}
                                data-category={skill.category}
                                ref={el => cardsRef.current[index] = el}
                            >
                                <div className={styles.card}>
                                    <div className={styles.cardGlow} />

                                    <div className={styles.iconContainer}>
                                        <Icon />
                                    </div>

                                    <div className={styles.content}>
                                        <h3 className={styles.title}>{skill.name}</h3>
                                        <p className={styles.description}>{skill.desc}</p>
                                        <div className={styles.status}>{skill.status}</div>
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
