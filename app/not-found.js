import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import styles from './not-found.module.css';

export const metadata = {
    title: 'Page introuvable',
};

export default function NotFound() {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <div className={styles.bgLayer} aria-hidden="true">
                    <div className={styles.blob1} />
                    <div className={styles.blob2} />
                    <div className={styles.blob3} />
                </div>
                <div className={styles.bigNumber} aria-hidden="true">404</div>

                <div className={styles.content}>
                    <h1 className={styles.title}>Cette page n'existe pas</h1>
                    <p className={styles.text}>Le lien est peut-être ancien, ou la page a déménagé.</p>
                    <div className={styles.actions}>
                        <Link href="/" className={`${styles.btn} ${styles.btnPrimary}`}>
                            <FiArrowLeft /> Retour à l'accueil
                        </Link>
                        <Link href="/projects" className={styles.btn}>
                            Voir les projets
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
