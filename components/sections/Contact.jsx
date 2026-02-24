'use client';

import { FaLinkedin, FaGithub, FaCheck, FaDownload } from 'react-icons/fa';
import { FiMail, FiPhone, FiCalendar } from 'react-icons/fi';
import styles from './Contact.module.css';

export default function Contact() {
    return (
        <section id="contact" className={styles.section}>
            {/* Background Blobs for consistency */}
            <div className={styles.blob1}></div>
            <div className={styles.blob2}></div>

            <div className={styles.container}>
                {/* Upper Row: Text & Form */}
                <div className={styles.upperRow}>
                    {/* Left Column: Text & Socials */}
                    <div className={styles.leftCol}>
                        <div className={styles.titleSection}>
                            <h2 className={styles.titleMain}>Travaillons<br />ensemble <span style={{ display: 'inline-block', transform: 'rotate(-45deg)' }}>➔</span></h2>
                            <p className={styles.subText}>
                                Vous portez un projet ambitieux, avez un besoin en développement freelance, ou proposez une opportunité (stage/alternance) ? N'hésitez pas à me contacter, je serais ravi d'en discuter.
                            </p>
                        </div>

                        <ul className={styles.featuresList}>
                            <li className={styles.featureItem}>
                                <div className={styles.featureIcon}><FaCheck /></div>
                                Profil polyvalent & Full Stack
                            </li>
                            <li className={styles.featureItem}>
                                <div className={styles.featureIcon}><FaCheck /></div>
                                Force de proposition & Autonomie
                            </li>
                            <li className={styles.featureItem}>
                                <div className={styles.featureIcon}><FaCheck /></div>
                                Apprentissage rapide & Curiosité
                            </li>
                        </ul>

                        <div className={styles.socialsContainer}>
                            <a href="https://linkedin.com/in/ramy-nebili" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={styles.socialLink}>
                                <FaLinkedin />
                            </a>
                            <a href="https://github.com/ramynbl" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={styles.socialLink}>
                                <FaGithub />
                            </a>
                            <a href="/CV.pdf" target="_blank" rel="noopener noreferrer" aria-label="Télécharger mon CV" download title="Télécharger le CV" className={styles.socialLink}>
                                <FaDownload />
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className={styles.rightCol}>
                        <div className={styles.formContainer}>
                            <form action="#" method="POST" onSubmit={(e) => e.preventDefault()}>
                                <div className={styles.formGrid}>
                                    <div className={styles.inputGroup}>
                                        <input type="text" placeholder="Nom" required className={styles.inputField} />
                                    </div>
                                    <div className={styles.inputGroup}>
                                        <input type="email" placeholder="Email" required className={styles.inputField} />
                                    </div>
                                    <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                                        <textarea placeholder="Message" required className={styles.textareaField}></textarea>
                                    </div>
                                </div>
                                <button type="submit" className={styles.submitBtn}>
                                    Envoyer le message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Bottom Row: Info Cards */}
                <div className={styles.bottomCards}>
                    <div className={styles.infoCard}>
                        <div className={styles.cardIcon}>
                            <FiMail />
                        </div>
                        <div className={styles.cardContent}>
                            <h4>Email direct</h4>
                            <p>ramynebili@gmail.com</p>
                        </div>
                    </div>

                    <div className={styles.infoCard}>
                        <div className={styles.cardIcon}>
                            <FiPhone />
                        </div>
                        <div className={styles.cardContent}>
                            <h4>Téléphone</h4>
                            <p>06 51 10 63 97</p>
                        </div>
                    </div>

                    <div className={styles.infoCard}>
                        <div className={styles.cardIcon}>
                            <FiCalendar />
                        </div>
                        <div className={styles.cardContent}>
                            <h4>Disponibilité</h4>
                            <p>À l'écoute d'opportunités (Freelance, Stage, Alternance).</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
