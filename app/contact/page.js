import Link from 'next/link';
import { FiMail, FiMapPin, FiCalendar, FiDownload, FiLinkedin, FiGithub, FiCheck } from 'react-icons/fi';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ContactForm from '@/components/contact/ContactForm';
import SocialIcon from '@/components/ui/SocialIcon';
import { getProfile } from '@/lib/content';
import styles from './ContactPage.module.css';

export const metadata = {
    title: 'Contact',
    description:
        'Écrivez-moi pour une alternance en marketing digital, un stage ou une mission. Réponse rapide, basé à Paris.',
};

export default async function ContactPage() {
    const profile = await getProfile();
    const { formation, contact } = profile;
    const cv = profile.cvs[0];

    return (
        <>
            <Header />
            <main className={styles.main}>
                <div className={styles.blob1} aria-hidden="true"></div>
                <div className={styles.blob2} aria-hidden="true"></div>

                <div className={styles.container}>
                    {/* ---------- En-tête ---------- */}
                    <header className={styles.head}>
                        <span className={styles.eyebrow}>Contact</span>
                        <h1 className={styles.title}>Parlons de votre besoin</h1>
                        <p className={styles.lead}>{contact.intro}</p>
                        <p className={styles.badge}>
                            <span className={styles.dot} aria-hidden="true"></span>
                            {profile.availability}
                        </p>
                    </header>

                    {/* ---------- Formulaire + coordonnées ---------- */}
                    <div className={styles.grid}>
                        <div className={styles.formCard}>
                            <h2 className={styles.formTitle}>M&apos;écrire</h2>
                            <ContactForm email={profile.email} subjects={contact.subjects} />
                        </div>

                        <aside className={styles.aside}>
                            <a href={`mailto:${profile.email}`} className={styles.infoCard}>
                                <div className={styles.infoIcon}><FiMail /></div>
                                <div>
                                    <h3>Email direct</h3>
                                    <p>{profile.email}</p>
                                </div>
                            </a>

                            <div className={styles.infoCard}>
                                <div className={styles.infoIcon}><FiMapPin /></div>
                                <div>
                                    <h3>Localisation</h3>
                                    <p>{profile.location} et Île-de-France, télétravail possible</p>
                                </div>
                            </div>

                            <div className={styles.infoCard}>
                                <div className={styles.infoIcon}><FiCalendar /></div>
                                <div>
                                    <h3>Disponibilité</h3>
                                    <p>{formation.start}, pour {formation.duration}</p>
                                </div>
                            </div>

                            <div className={styles.linksBlock}>
                                {cv && (
                                    <a href={cv.file} download className={styles.cvBtn}>
                                        <FiDownload /> {cv.label}
                                    </a>
                                )}
                                <div className={styles.socials}>
                                    <SocialIcon
                                        href={profile.socials.linkedin}
                                        icon={<FiLinkedin />}
                                        ariaLabel="LinkedIn"
                                        networkType="linkedin"
                                        className={styles.socialIcon}
                                    />
                                    <SocialIcon
                                        href={profile.socials.github}
                                        icon={<FiGithub />}
                                        ariaLabel="GitHub"
                                        networkType="github"
                                        className={styles.socialIcon}
                                    />
                                </div>
                            </div>
                        </aside>
                    </div>

                    {/* ---------- Rappel alternance, pour un recruteur qui arrive ici ---------- */}
                    <section className={styles.recruiter} aria-labelledby="recruteurs">
                        <div className={styles.recruiterHead}>
                            <span className={styles.eyebrow}>Pour les recruteurs</span>
                            <h2 id="recruteurs" className={styles.recruiterTitle}>L&apos;essentiel en un coup d&apos;œil</h2>
                        </div>

                        <dl className={styles.facts}>
                            <div>
                                <dt>Recherche</dt>
                                <dd>{formation.searching}</dd>
                            </div>
                            <div>
                                <dt>Formation</dt>
                                <dd>{formation.diploma}, {formation.school}</dd>
                            </div>
                            <div>
                                <dt>Diplôme visé</dt>
                                <dd>{formation.rncp}</dd>
                            </div>
                            <div>
                                <dt>Rythme</dt>
                                <dd>{formation.rhythm}</dd>
                            </div>
                        </dl>

                        <ul className={styles.features}>
                            {contact.features.map((f) => (
                                <li key={f}>
                                    <span className={styles.check} aria-hidden="true"><FiCheck /></span>
                                    {f}
                                </li>
                            ))}
                        </ul>

                        <p className={styles.recruiterFoot}>
                            Envie de voir ce que je sais faire avant d&apos;écrire ?{' '}
                            <Link href="/projects" className={styles.inlineLink}>Mes projets</Link>
                            {' '}ou{' '}
                            <Link href="/about" className={styles.inlineLink}>mon parcours</Link>.
                        </p>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    );
}
