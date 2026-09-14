import Link from 'next/link';
import { FaLinkedin, FaGithub, FaDownload } from 'react-icons/fa';
import SocialIcon from '../ui/SocialIcon';
import { getSiteSettings, getProfile } from '@/lib/content';
import styles from './Footer.module.css';

export default async function Footer() {
    const [site, profile] = await Promise.all([getSiteSettings(), getProfile()]);
    const currentYear = new Date().getFullYear();
    const cv = profile.cvs[0];

    return (
        <footer className={styles.footer}>
            <div className={styles.blob1}></div>
            <div className={styles.blob2}></div>

            <div className={`container ${styles.content}`}>
                <div className={styles.section}>
                    <h3>{profile.fullName}</h3>
                    <p className={styles.bioText}>{site.description}</p>
                    {cv && (
                        <a href={cv.file} className={styles.downloadBtn} download aria-label="Télécharger mon CV">
                            <FaDownload /> Télécharger mon CV
                        </a>
                    )}
                </div>

                <div className={styles.section}>
                    <h3>Navigation</h3>
                    <nav className={styles.navLinks} aria-label="Pied de page">
                        {site.nav.map((item) => (
                            <Link key={item.href} href={item.href} className={styles.link}>{item.label}</Link>
                        ))}
                    </nav>
                </div>

                <div className={styles.section}>
                    <h3>Réseaux</h3>
                    <div className={styles.socials}>
                        <SocialIcon href={profile.socials.linkedin} icon={<FaLinkedin />} ariaLabel="LinkedIn" networkType="linkedin" className={styles.footerSocialIcon} />
                        <SocialIcon href={profile.socials.github} icon={<FaGithub />} ariaLabel="GitHub" networkType="github" className={styles.footerSocialIcon} />
                    </div>
                </div>
            </div>

            <div className={`container ${styles.bottom}`}>
                <span>© {currentYear} {profile.fullName}. Tous droits réservés.</span>
            </div>
        </footer>
    );
}
