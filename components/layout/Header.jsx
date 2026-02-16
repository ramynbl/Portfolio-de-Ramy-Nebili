'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Header.module.css';
import { FaLinkedin, FaGithub, FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className={styles.header}>
            <div className={`container ${styles.navContainer}`}>

                {/* Logo */}
                <div className={styles.logo}>
                    Ramy NEBILI
                </div>

                {/* Desktop Navigation */}
                <nav className={styles.desktopNav}>
                    <ul className={styles.navList}>
                        <li><Link href="#about" className={styles.navLink}>À propos</Link></li>
                        <li><Link href="#skills" className={styles.navLink}>Compétences</Link></li>
                        <li><Link href="#projects" className={styles.navLink}>Projets</Link></li>
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
                                <li><Link href="#skills" className={styles.mobileNavLink} onClick={toggleMenu}>Compétences</Link></li>
                                <li><Link href="#projects" className={styles.mobileNavLink} onClick={toggleMenu}>Projets</Link></li>
                                <li><Link href="#contact" className={styles.mobileNavLink} onClick={toggleMenu}>Contact</Link></li>
                            </ul>
                        </motion.nav>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}