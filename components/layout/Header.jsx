import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={`container ${styles.navContainer}`}>

                {/* Logo */}
                <div className={styles.logo}>
                    Ramy NEBILI
                </div>

                {/* Navigation */}
                <nav>
                    <ul className={styles.navList}>
                        <li><Link href="#about" className={styles.navLink}>À propos</Link></li>
                        <li><Link href="#skills" className={styles.navLink}>Compétences</Link></li>
                        <li><Link href="#projects" className={styles.navLink}>Projets</Link></li>
                        <li><Link href="#contact" className={styles.navLink}>Contact</Link></li>
                    </ul>
                </nav>

                {/* Placeholder Socials (On ajoutera les icones après) */}
                <div className={styles.socials}>
                    {/* GitHub & LinkedIn ici plus tard */}
                </div>
            </div>
        </header>
    );
}