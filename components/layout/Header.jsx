'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Header.module.css';
import { FaLinkedin, FaGithub, FaBars, FaTimes, FaDownload } from 'react-icons/fa';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSidebar, setIsSidebar] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const viewportHeight = window.innerHeight;

            // Transform into sidebar when passing the hero section
            setIsSidebar(scrollY > viewportHeight * 0.9);
        };

        window.addEventListener('scroll', handleScroll);
        // Initial check
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu if sidebar activates (scrolling down)
    useEffect(() => {
        if (isSidebar && isOpen) {
            setIsOpen(false);
        }
    }, [isSidebar, isOpen]);

    return (
        <header className={`${styles.header} ${isSidebar ? styles.sidebar : ''}`}>
            <AnimatePresence mode="wait">
                {!isSidebar ? (
                    <motion.div
                        key="navbar"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className={`container ${styles.navContainer}`}
                    >
                        {/* Logo */}
                        <div className={styles.logo}>
                            RN.
                        </div>

                        {/* Desktop Navigation */}
                        <nav className={styles.desktopNav}>
                            <ul className={styles.navList}>
                                <li><Link href="#about" className={styles.navLink}>À propos</Link></li>
                                <li><Link href="#projects-intro" className={styles.navLink}>Projets</Link></li>
                                <li><Link href="#skills" className={styles.navLink}>Compétences</Link></li>
                                <li><Link href="#contact" className={styles.navLink}>Contact</Link></li>
                            </ul>
                        </nav>

                        {/* Socials & Burger */}
                        <div className={styles.rightSection}>
                            <div className={styles.socials}>
                                <a href="https://www.linkedin.com/in/ramy-nebili/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                    <FaLinkedin className={styles.socialIcon} />
                                </a>
                                <a href="https://github.com/ramynbl" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                    <FaGithub className={styles.socialIcon} />
                                </a>
                            </div>

                            {/* Burger Icon */}
                            <button className={styles.burgerBtn} onClick={toggleMenu} aria-label="Toggle menu">
                                {isOpen ? <FaTimes /> : <FaBars />}
                            </button>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="sidebar"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className={styles.sidebarContainer}
                    >
                        {/* Sidebar Navigation */}
                        <nav className={styles.sidebarNav}>
                            <Link href="#about" className={styles.navDot} aria-label="À propos" title="À propos"></Link>
                            <Link href="#projects-intro" className={styles.navDot} aria-label="Projets" title="Projets"></Link>
                            <Link href="#skills" className={styles.navDot} aria-label="Compétences" title="Compétences"></Link>
                            <Link href="#contact" className={styles.navDot} aria-label="Contact" title="Contact"></Link>
                        </nav>

                        {/* Sidebar Socials & CV */}
                        <div className={styles.sidebarSocials}>
                            <a href="https://www.linkedin.com/in/ramy-nebili/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <FaLinkedin className={styles.socialIcon} />
                            </a>
                            <a href="https://github.com/ramynbl" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <FaGithub className={styles.socialIcon} />
                            </a>
                            <a href="/CV.pdf" target="_blank" rel="noopener noreferrer" aria-label="Télécharger mon CV" download title="Télécharger le CV">
                                <FaDownload className={styles.socialIcon} />
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.nav
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className={styles.mobileMenu}
                    >
                        <ul className={styles.mobileNavList}>
                            <li><Link href="#about" className={styles.mobileNavLink} onClick={toggleMenu}>À propos</Link></li>
                            <li><Link href="#projects-intro" className={styles.mobileNavLink} onClick={toggleMenu}>Projets</Link></li>
                            <li><Link href="#skills" className={styles.mobileNavLink} onClick={toggleMenu}>Compétences</Link></li>
                            <li><Link href="#contact" className={styles.mobileNavLink} onClick={toggleMenu}>Contact</Link></li>
                        </ul>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
}