import Image from 'next/image';
import Link from 'next/link';
import TextSlider from '../ui/TextSlider';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>

            {/* Côté Gauche : Designer */}
            <div className={`${styles.split} ${styles.left}`}>
                <h1 className={styles.title}>
                    <TextSlider words={["Designer", "Créateur", "Visuel"]} />
                </h1>
                <p className={styles.subtitle}>UI / UX & Conception visuelle</p>
                <Link href="#about" className={`${styles.btnHero} ${styles.btnLeft}`}>En savoir plus</Link>
            </div>

            {/* Côté Droit : Coder */}
            <div className={`${styles.split} ${styles.right}`}>
                <h1 className={styles.title}>
                    <TextSlider words={["< Coder >", "Innover", "Construire"]} />
                </h1>
                <p className={styles.subtitle}>Développement Front-end & Back-end</p>
                <Link href="#projects" className={`${styles.btnHero} ${styles.btnRight}`}>Mes Projets</Link>
            </div>

            {/* Avatar Central */}
            <div className={styles.avatarContainer}>
                {/* Utilisation de Image de Next.js pour la performance */}
                <Image
                    src="/image/avatar-2.png" // Assure-toi que l'image est bien dans le dossier public/image/
                    alt="Ramy Nebili Avatar"
                    fill // Remplit le conteneur parent
                    className={styles.avatarImage}
                    priority // Charge cette image en priorité (car au-dessus de la ligne de flottaison)
                />
            </div>

        </section>
    );
}