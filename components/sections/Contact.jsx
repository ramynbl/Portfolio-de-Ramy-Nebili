'use client';

import { FaLinkedin, FaGithub, FaCheck, FaDownload } from 'react-icons/fa';
import { FiMail, FiCalendar, FiMapPin } from 'react-icons/fi';
import SocialIcon from '../ui/SocialIcon';
import styles from './Contact.module.css';

/**
 * Section contact. Le formulaire passe par une route API + Resend à l'étape 5 ;
 * en attendant, FormSubmit reste en place mais sans redirection hors site.
 */
export default function Contact({ contact, profile }) {
    const cv = profile.cvs[0];

    return (
        <section id="contact" className={styles.section}>
            <div className={styles.blob1}></div>
            <div className={styles.blob2}></div>

            <div className={styles.container}>
                <div className={styles.upperRow}>
                    <div className={styles.leftCol}>
                        <div className={styles.titleSection}>
                            <h2 className={styles.titleMain}>
                                Travaillons<br />ensemble <span className={styles.arrow} aria-hidden="true">➔</span>
                            </h2>
                            <p className={styles.subText}>{contact.intro}</p>
                        </div>

                        <ul className={styles.featuresList}>
                            {contact.features.map((f) => (
                                <li key={f} className={styles.featureItem}>
                                    <div className={styles.featureIcon}><FaCheck /></div>
                                    {f}
                                </li>
                            ))}
                        </ul>

                        <div className={styles.socialsContainer}>
                            <SocialIcon href={profile.socials.linkedin} icon={<FaLinkedin />} ariaLabel="LinkedIn" networkType="linkedin" className={styles.contactSocialIcon} />
                            <SocialIcon href={profile.socials.github} icon={<FaGithub />} ariaLabel="GitHub" networkType="github" className={styles.contactSocialIcon} />
                            {cv && (
                                <SocialIcon href={cv.file} icon={<FaDownload />} ariaLabel="Télécharger mon CV" networkType="download" download className={styles.contactSocialIcon} />
                            )}
                        </div>
                    </div>

                    <div className={styles.rightCol}>
                        <div className={styles.formContainer}>
                            <form action={`https://formsubmit.co/${profile.email}`} method="POST">
                                <input type="hidden" name="_subject" value="Nouveau message depuis ton portfolio" />
                                <input type="text" name="_honey" className={styles.honey} tabIndex={-1} autoComplete="off" />
                                <input type="hidden" name="_captcha" value="true" />
                                <input type="hidden" name="_template" value="table" />

                                <div className={styles.formGrid}>
                                    <div className={styles.inputGroup}>
                                        <label htmlFor="contact-nom" className="visually-hidden">Nom</label>
                                        <input id="contact-nom" type="text" name="nom" placeholder="Nom" required className={styles.inputField} autoComplete="name" />
                                    </div>
                                    <div className={styles.inputGroup}>
                                        <label htmlFor="contact-email" className="visually-hidden">Email</label>
                                        <input id="contact-email" type="email" name="email" placeholder="Email" required className={styles.inputField} autoComplete="email" />
                                    </div>
                                    <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                                        <label htmlFor="contact-message" className="visually-hidden">Message</label>
                                        <textarea id="contact-message" name="message" placeholder="Message" required className={styles.textareaField}></textarea>
                                    </div>
                                </div>
                                <button type="submit" className={styles.submitBtn}>
                                    Envoyer le message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className={styles.bottomCards}>
                    <a href={`mailto:${profile.email}`} className={styles.infoCard}>
                        <div className={styles.cardIcon}><FiMail /></div>
                        <div className={styles.cardContent}>
                            <h4>Email direct</h4>
                            <p>{profile.email}</p>
                        </div>
                    </a>

                    <div className={styles.infoCard}>
                        <div className={styles.cardIcon}><FiMapPin /></div>
                        <div className={styles.cardContent}>
                            <h4>Localisation</h4>
                            <p>{profile.location} · télétravail possible</p>
                        </div>
                    </div>

                    <div className={styles.infoCard}>
                        <div className={styles.cardIcon}><FiCalendar /></div>
                        <div className={styles.cardContent}>
                            <h4>Disponibilité</h4>
                            <p>{profile.availability}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
