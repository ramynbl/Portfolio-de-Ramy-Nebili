import Link from 'next/link';
import { FaLinkedin, FaGithub, FaDownload } from 'react-icons/fa';
import styles from './Footer.module.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            {/* Effets d'arrière-plan : Blobs */}
            <div className={styles.blob1}></div>
            <div className={styles.blob2}></div>


            <div className={`container ${styles.content}`}>
                {/* Section 1 - Bio & CV */}
                <div className={styles.section}>
                    <h3>Ramy NEBILI</h3>
                    <p className={styles.bioText}>
                        Développeur Full Stack JavaScript passionné par la création d'interfaces utilisateur modernes et performantes. Alliant une expertise technique à une sensibilité design, je conçois des solutions numériques complètes et intuitives.
                    </p>
                    <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className={styles.downloadBtn} download aria-label="Télécharger mon CV">
                        <FaDownload /> Télécharger mon CV
                    </a>
                </div>

                {/* Section 2 - Liens */}
                <div className={styles.section}>
                    <h3>Navigation</h3>
                    <div className={styles.navLinks}>
                        <Link href="/" className={styles.link}>Accueil</Link>
                        <Link href="/about" className={styles.link}>À propos</Link>
                        <Link href="/projects" className={styles.link}>Projets</Link>
                        <Link href="/#skills" className={styles.link}>Compétences</Link>
                        <Link href="/#contact" className={styles.link}>Contact</Link>
                    </div>
                </div>

                {/* Section 3 - Socials */}
                <div className={styles.section}>
                    <h3>Réseaux</h3>
                    <div className={styles.socials}>
                        <a href="https://linkedin.com/in/ramy-nebili" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={styles.socialLink}>
                            <FaLinkedin className={styles.socialIcon} />
                        </a>
                        <a href="https://github.com/ramynbl" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={styles.socialLink}>
                            <FaGithub className={styles.socialIcon} />
                        </a>
                    </div>
                </div>
            </div>

            <div className={`container ${styles.bottom}`}>
                <span>© {currentYear} Ramy NEBILI. Tous droits réservés.</span>
            </div>
        </footer>
    );
}
