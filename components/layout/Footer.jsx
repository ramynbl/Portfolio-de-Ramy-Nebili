import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.content}`}>

                {/* Section 1 */}
                <div className={styles.section}>
                    <h3>Ramy NEBILI</h3>
                    <p>Développer des solutions numériques innovantes et efficaces.</p>
                </div>

                {/* Section 2 - Liens */}
                <div className={styles.section}>
                    <h3>Navigation</h3>
                    <Link href="#about" className={styles.link}>À propos</Link>
                    <Link href="#projects" className={styles.link}>Projets</Link>
                    <Link href="#contact" className={styles.link}>Contact</Link>
                </div>

                {/* Section 3 - Socials */}
                <div className={styles.section}>
                    <h3>Réseaux</h3>
                    <a href="https://linkedin.com/in/ramy-nebili" target="_blank" rel="noopener noreferrer" className={styles.link}>
                        LinkedIn
                    </a>
                    <a href="https://github.com/ramynbl" target="_blank" rel="noopener noreferrer" className={styles.link}>
                        GitHub
                    </a>
                </div>
            </div>

            <div className={`container ${styles.bottom}`}>
                © {currentYear} Ramy NEBILI. Tous droits réservés.
            </div>
        </footer>
    );
}