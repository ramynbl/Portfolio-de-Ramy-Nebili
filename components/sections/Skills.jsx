'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillsData } from '../../data/skillsData';
import styles from './Skills.module.css';

export default function Skills() {
    // État du filtre
    // État du filtre
    const [selectedCategory, setSelectedCategory] = useState("Tout");

    // État de la catégorie affichée (pour le sous-titre dynamique)
    const [activeCategory, setActiveCategory] = useState("Tout");

    // Refs pour accéder aux cartes et au conteneur
    const containerRef = useRef(null);
    const cardsRef = useRef([]);

    // Catégories définies (ordre spécifique)
    const categories = ["Tout", "Design System & UI", "Frontend Engineering", "Backend & Automation", "Data & Infrastructure"];

    // Messages par catégorie
    const categoryMessages = {
        "Tout": "Des outils que j’explore, maîtrise et combine pour créer des expériences complètes.",
        "Design System & UI": "Je conçois des interfaces avec une rigueur de graphiste.",
        "Frontend Engineering": "Je développe des expériences fluides et performantes.",
        "Backend & Automation": "Je construis des APIs et des outils d'automatisation intelligents.",
        "Data & Infrastructure": "Je gère la persistance des données et le déploiement."
    };

    // 1. Obtenir la liste de base (unique) selon le filtre
    const baseList = selectedCategory === "Tout"
        ? skillsData
        : skillsData.filter(skill => skill.category === selectedCategory);

    // 2. Décider si on doit scroller (plus de 6 éléments)
    // Pour "Tout", c'est toujours vrai car > 20 éléments.
    // Si filtré et > 6 éléments, on active le scroll infini.
    const shouldScroll = baseList.length > 6;

    // 3. Préparer la liste finale (dupliquée x3 pour le scroll infini, ou unique pour statique)
    const displaySkills = shouldScroll
        ? [...baseList, ...baseList, ...baseList]
        : baseList;

    // Détection de la catégorie visible au centre
    useEffect(() => {
        // En mode filtre, on force la catégorie active à celle sélectionnée
        if (selectedCategory !== "Tout") {
            setActiveCategory(selectedCategory);
            return;
        }

        let animationFrameId;

        const checkCenterCategory = () => {
            if (!containerRef.current) return;

            // Centre du conteneur (viewport)
            const containerRect = containerRef.current.getBoundingClientRect();
            const centerX = containerRect.left + containerRect.width / 2;

            let closestCard = null;
            let minDistance = Infinity;

            // On cherche la carte la plus proche du centre
            // On itère sur toutes les références de cartes
            cardsRef.current.forEach((card) => {
                if (!card) return;
                const rect = card.getBoundingClientRect();

                // Optimisation : ignorer les cartes loin
                if (rect.right < 0 || rect.left > window.innerWidth) return;

                const cardCenterX = rect.left + rect.width / 2;
                const distance = Math.abs(cardCenterX - centerX);

                if (distance < minDistance) {
                    minDistance = distance;
                    closestCard = card;
                }
            });

            if (closestCard) {
                const category = closestCard.getAttribute('data-category');
                // On met à jour seulement si la catégorie détectée est différente et valide
                if (category && category !== activeCategory) {
                    setActiveCategory(category);
                }
            }

            animationFrameId = requestAnimationFrame(checkCenterCategory);
        };

        // Démarrer la boucle de détection seulement si "Tout"
        if (selectedCategory === "Tout") {
            animationFrameId = requestAnimationFrame(checkCenterCategory);
        }

        return () => cancelAnimationFrame(animationFrameId);
    }, [activeCategory, selectedCategory]);

    // Cleanup des refs quand la liste change
    useEffect(() => {
        cardsRef.current = [];
    }, [displaySkills]);

    return (
        <section id="skills" className={styles.section}>

            <div className={styles.headerContainer}>
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
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`${styles.chip} ${selectedCategory === cat ? styles.chipActive : ''}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            <div className={styles.perspectiveContainer} ref={containerRef}>
                <div
                    className={styles.track}
                    style={!shouldScroll ? {
                        animation: 'none',
                        justifyContent: 'center',
                        width: '100%', // Centrer dans le viewport
                        padding: '100px 40px', // Uniforme
                        gap: '40px'
                    } : {
                        // Si scroll, on laisse l'animation CSS par défaut mais on force le padding et la largeur
                        width: 'max-content',
                        padding: '100px 40px'
                    }}
                >
                    {displaySkills.map((skill, index) => {
                        const Icon = skill.icon;
                        return (
                            <div
                                key={`${skill.name}-${index}`}
                                className={styles.cardWrapper}
                                style={{ '--card-color': skill.color }}
                                data-category={skill.category}
                                ref={el => cardsRef.current[index] = el}
                            >
                                <div className={styles.card}>
                                    {/* Lueur d'arrière-plan */}
                                    <div className={styles.cardGlow} />

                                    {/* Icône principale */}
                                    <div className={styles.iconContainer} style={{ color: skill.color }}>
                                        <Icon />
                                    </div>

                                    {/* Contenu au survol */}
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
            </div>
        </section>
    );
}
