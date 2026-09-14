'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedin, FaGithub, FaBars, FaTimes, FaDownload } from 'react-icons/fa';
import SocialIcon from '../ui/SocialIcon';
import ThemeToggle from '../ui/ThemeToggle';
import styles from './Header.module.css';

export default function HeaderClient({ nav, anchors, socials, cv }) {
    const pathname = usePathname();
    const isHome = pathname === '/';
    const [isOpen, setIsOpen] = useState(false);
    const [isSidebar, setIsSidebar] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    const toggleMenu = () => setIsOpen((v) => !v);

    // Capsule → sidebar à points après un écran de scroll (desktop uniquement)
    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (ticking) return;
            ticking = true;
            window.requestAnimationFrame(() => {
                const desktop = window.innerWidth > 768;
                const sidebar = desktop && window.scrollY > window.innerHeight * 0.9;
                setIsSidebar(sidebar);
                if (sidebar) setIsOpen(false); // le menu mobile n'a pas de sens en mode sidebar
                ticking = false;
            });
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleScroll, { passive: true });
        handleScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    // Section active (home uniquement, où vivent les ancres)
    useEffect(() => {
        if (!isHome) return;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActiveSection(entry.target.id);
                });
            },
            { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
        );
        anchors.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, [anchors, isHome]);

    const socialLinks = (cls) => (
        <>
            <SocialIcon href={socials.linkedin} icon={<FaLinkedin />} ariaLabel="LinkedIn" networkType="linkedin" className={cls} />
            <SocialIcon href={socials.github} icon={<FaGithub />} ariaLabel="GitHub" networkType="github" className={cls} />
            {cv && (
                <SocialIcon href={cv.file} icon={<FaDownload />} ariaLabel="Télécharger mon CV" networkType="download" download className={cls} />
            )}
        </>
    );

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
                        <Link href="/" className={styles.logo} aria-label="Accueil">RN.</Link>

                        <nav className={styles.desktopNav} aria-label="Navigation principale">
                            <ul className={styles.navList}>
                                {nav.map((item) => (
                                    <li key={item.href}>
                                        <Link
                                            href={item.href}
                                            className={`${styles.navLink} ${pathname === item.href ? styles.navLinkActive : ''}`}
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <div className={styles.rightSection}>
                            <div className={styles.socials}>
                                {socialLinks(styles.headerSocialIcon)}
                            </div>
                            <ThemeToggle className={styles.themeToggle} />
                            <button
                                className={styles.burgerBtn}
                                onClick={toggleMenu}
                                aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
                                aria-expanded={isOpen}
                            >
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
                        <nav className={styles.sidebarNav} aria-label="Sections">
                            {anchors.map(({ id, label, href }) => (
                                <Link
                                    key={id}
                                    href={href}
                                    className={`${styles.navDot} ${activeSection === id ? styles.active : ''}`}
                                    aria-label={label}
                                    title={label}
                                />
                            ))}
                        </nav>

                        <div className={styles.sidebarSocials}>
                            {socialLinks(styles.headerSocialIcon)}
                            <ThemeToggle className={styles.themeToggle} />
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
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        className={styles.mobileMenu}
                        aria-label="Menu mobile"
                    >
                        <ul className={styles.mobileNavList}>
                            {nav.map((item) => (
                                <li key={item.href}>
                                    <Link href={item.href} className={styles.mobileNavLink} onClick={toggleMenu}>
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className={styles.mobileSocials}>
                            {socialLinks(styles.headerSocialIcon)}
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
}
