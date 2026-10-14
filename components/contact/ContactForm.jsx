'use client';

import { useState } from 'react';
import styles from './ContactForm.module.css';

/**
 * Formulaire de contact, partagé par la section de la home et la page /contact.
 *
 * Point de bascule unique : quand la route API + Resend remplacera FormSubmit,
 * seul ce fichier change.
 */
export default function ContactForm({ email, subjects, className = '' }) {
    const [sent] = useState(false);

    return (
        <form
            action={`https://formsubmit.co/${email}`}
            method="POST"
            className={`${styles.form} ${className}`}
        >
            {/* Configuration FormSubmit */}
            <input type="hidden" name="_subject" value="Nouveau message depuis ton portfolio" />
            <input type="hidden" name="_captcha" value="true" />
            <input type="hidden" name="_template" value="table" />
            {/* Piège à robots : un humain ne remplit jamais ce champ */}
            <input type="text" name="_honey" className={styles.honey} tabIndex={-1} autoComplete="off" aria-hidden="true" />

            <div className={styles.grid}>
                <div className={styles.field}>
                    <label htmlFor="cf-nom">Nom</label>
                    <input id="cf-nom" type="text" name="nom" required autoComplete="name" placeholder="Votre nom" />
                </div>

                <div className={styles.field}>
                    <label htmlFor="cf-email">Email</label>
                    <input id="cf-email" type="email" name="email" required autoComplete="email" placeholder="vous@entreprise.fr" />
                </div>

                <div className={`${styles.field} ${styles.full}`}>
                    <label htmlFor="cf-sujet">Votre demande</label>
                    <select id="cf-sujet" name="sujet" defaultValue={subjects[0]} className={styles.select}>
                        {subjects.map((s) => (
                            <option key={s} value={s}>{s}</option>
                        ))}
                    </select>
                </div>

                <div className={`${styles.field} ${styles.full}`}>
                    <label htmlFor="cf-message">Message</label>
                    <textarea id="cf-message" name="message" required rows={6} placeholder="Quelques lignes sur le poste ou le projet." />
                </div>
            </div>

            <button type="submit" className={styles.submit} disabled={sent}>
                Envoyer le message
            </button>
        </form>
    );
}
