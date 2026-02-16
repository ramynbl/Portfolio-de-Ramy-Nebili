'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import styles from './TextSlider.module.css';

export default function TextSlider({ words }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const sliderRef = useRef(null);

    // On clone le premier mot à la fin pour le loop infini
    const allWords = [...words, words[0]];
    const totalSlides = allWords.length;

    const goToNext = useCallback(() => {
        setIsTransitioning(true);
        setCurrentIndex((prev) => prev + 1);
    }, []);

    useEffect(() => {
        const interval = setInterval(goToNext, 3500); // 3.5s entre chaque slide
        return () => clearInterval(interval);
    }, [goToNext]);

    // Quand on atteint le clone (dernier), on reset sans transition
    useEffect(() => {
        if (currentIndex >= totalSlides - 1) {
            const timeout = setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(0);
            }, 1000); // Attend la fin de la transition (1000ms)
            return () => clearTimeout(timeout);
        }
    }, [currentIndex, totalSlides]);

    return (
        <div className={styles.wrapper}>
            <div
                ref={sliderRef}
                className={styles.slides}
                style={{
                    transition: isTransitioning
                        ? 'transform 1000ms ease-in-out'
                        : 'none',
                    transform: `translateX(-${currentIndex * 100}%)`,
                }}
            >
                {allWords.map((word, i) => (
                    <span key={i} className={styles.slide}>
                        {word}
                    </span>
                ))}
            </div>
        </div>
    );
}
