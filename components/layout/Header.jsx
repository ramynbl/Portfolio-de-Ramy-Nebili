'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Header.module.css';
import { FaLinkedin, FaGithub, FaBars, FaTimes, FaDownload } from 'react-icons/fa';
import SocialIcon from '../ui/SocialIcon';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSidebar, setIsSidebar] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const scrollY = window.scrollY;
                    const viewportHeight = window.innerHeight;

                    if (window.innerWidth > 768) {
                        setIsSidebar(scrollY > viewportHeight * 0.9);
                    } else {
                        setIsSidebar(false);
                    }
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleScroll, { passive: true });

        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    // Intersection Observer for highlighting active section
    useEffect(() => {
        // Observe home, about, projects-intro anchor, projects (cards), skills
        const ids = ['home', 'about', 'projects-intro', 'projects', 'skills'];

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Map 'projects' (cards section) back to 'projects-intro' dot
                        const sectionId = entry.target.id === 'projects' ? 'projects-intro' : entry.target.id;
                        setActiveSection(sectionId);
                    }
                });
            },
            { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
        );

        ids.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
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
                        <div className={styles.logo}>
                            RN.
                        </div>

                        <nav className={styles.desktopNav}>
                            <ul className={styles.navList}>
                                <li><Link href="/" className={styles.navLink}>Accueil</Link></li>
                                <li><Link href="/about" className={styles.navLink}>À propos</Link></li>
                                <li><Link href="/projects" className={styles.navLink}>Projets</Link></li>
                                <li><Link href="/#skills" className={styles.navLink}>Compétences</Link></li>
                                <li><Link href="/#contact" className={styles.navLink}>Contact</Link></li>
                            </ul>
                        </nav>

                        <div className={styles.rightSection}>
                            <div className={styles.socials}>
                                <SocialIcon
                                    href="https://www.linkedin.com/in/ramy-nebili/"
                                    icon={<FaLinkedin />}
                                    ariaLabel="LinkedIn"
                                    networkType="linkedin"
                                    className={styles.headerSocialIcon} // Class for sizes in header
                                />
                                <SocialIcon
                                    href="https://github.com/ramynbl"
                                    icon={<FaGithub />}
                                    ariaLabel="GitHub"
                                    networkType="github"
                                    className={styles.headerSocialIcon}
                                />
                                <SocialIcon
                                    href="/CV.pdf"
                                    icon={<FaDownload />}
                                    ariaLabel="Télécharger mon CV"
                                    networkType="download"
                                    download={true}
                                    title="Télécharger le CV"
                                    className={styles.headerSocialIcon}
                                />
                            </div>

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
                        <nav className={styles.sidebarNav}>
                            <Link href="/" className={`${styles.navDot} ${activeSection === 'home' ? styles.active : ''}`} aria-label="Accueil" title="Accueil"></Link>
                            <Link href="/about" className={`${styles.navDot} ${activeSection === 'about' ? styles.active : ''}`} aria-label="À propos" title="À propos"></Link>
                            <Link href="/projects" className={`${styles.navDot} ${activeSection === 'projects-intro' ? styles.active : ''}`} aria-label="Projets" title="Projets"></Link>
                            <Link href="/#skills" className={`${styles.navDot} ${activeSection === 'skills' ? styles.active : ''}`} aria-label="Compétences" title="Compétences"></Link>
                            <Link href="/#contact" className={`${styles.navDot} ${activeSection === 'contact' ? styles.active : ''}`} aria-label="Contact" title="Contact"></Link>
                        </nav>

                        <div className={styles.sidebarSocials}>
                            <SocialIcon
                                href="https://www.linkedin.com/in/ramy-nebili/"
                                icon={<FaLinkedin />}
                                ariaLabel="LinkedIn"
                                networkType="linkedin"
                                className={styles.headerSocialIcon}
                            />
                            <SocialIcon
                                href="https://github.com/ramynbl"
                                icon={<FaGithub />}
                                ariaLabel="GitHub"
                                networkType="github"
                                className={styles.headerSocialIcon}
                            />
                            <SocialIcon
                                href="/CV.pdf"
                                icon={<FaDownload />}
                                ariaLabel="Télécharger mon CV"
                                networkType="download"
                                download={true}
                                title="Télécharger le CV"
                                className={styles.headerSocialIcon}
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

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
                            <li><Link href="/" className={styles.mobileNavLink} onClick={toggleMenu}>Accueil</Link></li>
                            <li><Link href="/about" className={styles.mobileNavLink} onClick={toggleMenu}>À propos</Link></li>
                            <li><Link href="/projects" className={styles.mobileNavLink} onClick={toggleMenu}>Projets</Link></li>
                            <li><Link href="/#skills" className={styles.mobileNavLink} onClick={toggleMenu}>Compétences</Link></li>
                            <li><Link href="/#contact" className={styles.mobileNavLink} onClick={toggleMenu}>Contact</Link></li>
                        </ul>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
}