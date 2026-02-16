"use client";
import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import styles from './ProjectsIntro.module.css';

const ProjectsIntro = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

    // Text animations - split effect or parallax
    const yText = useTransform(smoothProgress, [0, 0.5, 1], [100, 0, -100]);
    const opacityText = useTransform(smoothProgress, [0.2, 0.5, 0.8], [0, 1, 0]);
    const scaleText = useTransform(smoothProgress, [0, 0.5, 1], [0.8, 1, 1.2]);
    const blurText = useTransform(smoothProgress, [0.2, 0.5, 0.8], ["10px", "0px", "10px"]);

    // Background animations
    const backgroundY = useTransform(smoothProgress, [0, 1], ["0%", "20%"]);
    const gradientRotate = useTransform(smoothProgress, [0, 1], [0, 45]);

    return (
        <section className={styles.projectsIntro} ref={containerRef}>
            {/* Dynamic Background */}
            <motion.div
                className={styles.backgroundLayer}
                style={{ y: backgroundY, rotate: gradientRotate }}
            >
                <div className={styles.blob1}></div>
                <div className={styles.blob2}></div>
                <div className={styles.blob3}></div>
            </motion.div>

            <div className={styles.noiseOverlay}></div>

            <motion.div
                className={styles.titleWrapper}
                style={{
                    y: yText,
                    opacity: opacityText,
                    scale: scaleText,
                    filter: `blur(${blurText})` // This might need a custom wrapper or useTransform string interpolation check
                }}
            >
                {/* Using CSS filter with motion value needs proper handling or style prop directly if compatible */}
                <motion.h2
                    className={styles.title}
                    style={{ filter: useTransform(smoothProgress, [0.2, 0.5, 0.8], ["blur(10px)", "blur(0px)", "blur(10px)"]) }}
                >
                    PROJETS
                </motion.h2>
            </motion.div>

            <motion.div
                className={styles.scrollIndicator}
                style={{ opacity: useTransform(scrollYProgress, [0, 0.3], [1, 0]) }}
            >
                <span className={styles.scrollText}>Scroll</span>
                <div className={styles.line}></div>
            </motion.div>
        </section>
    );
};

export default ProjectsIntro;
