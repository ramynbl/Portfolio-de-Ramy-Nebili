import Image from 'next/image';
import RichText from '../ui/RichText';
import styles from './Project.module.css';

function GalleryItem({ item, title }) {
    const spanClass = item.span === 'half' ? styles.half : styles.full;
    return (
        <figure className={`${styles.galleryItem} ${spanClass}`}>
            <div className={styles.galleryMedia}>
                {item.type === 'video' ? (
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        poster={item.poster || undefined}
                        aria-label={item.alt || title}
                    >
                        <source src={item.src} type="video/mp4" />
                    </video>
                ) : (
                    <Image
                        src={item.src}
                        alt={item.alt || title}
                        width={item.width || 1600}
                        height={item.height || 1000}
                        sizes={item.span === 'half' ? '(max-width: 768px) 100vw, 600px' : '(max-width: 1200px) 100vw, 1200px'}
                    />
                )}
            </div>
            {item.caption && <figcaption className={styles.caption}>{item.caption}</figcaption>}
        </figure>
    );
}

/**
 * Corps d'une page projet : blocs courts (contexte / réalisation / résultat)
 * entrelacés avec la galerie média. Peu de texte, beaucoup de visuels.
 */
export default function ProjectGallery({ project }) {
    const sections = project.sections || [];
    const gallery = project.gallery || [];

    if (!sections.length && !gallery.length) return null;

    return (
        <section className={`container ${styles.body}`}>
            {sections.length > 0 && (
                <div className={styles.sections}>
                    {sections.map((s) => (
                        <div key={s.heading} className={styles.sectionBlock}>
                            <h2 className={styles.sectionHeading}>{s.heading}</h2>
                            <RichText text={s.body} className={styles.sectionBody} />
                        </div>
                    ))}
                </div>
            )}

            {gallery.length > 0 && (
                <div className={styles.gallery}>
                    {gallery.map((item, i) => (
                        <GalleryItem key={`${item.src}-${i}`} item={item} title={project.title} />
                    ))}
                </div>
            )}
        </section>
    );
}
