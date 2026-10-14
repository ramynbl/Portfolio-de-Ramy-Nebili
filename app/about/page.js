import Image from 'next/image';
import Link from 'next/link';
import { FiGithub, FiLinkedin, FiDownload, FiArrowRight } from 'react-icons/fi';
import SocialIcon from '@/components/ui/SocialIcon';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import GlassChip from '@/components/ui/GlassChip';
import { getIcon } from '@/lib/icons';
import { getProfile } from '@/lib/content';
import styles from './AboutPage.module.css';

export const metadata = {
    title: 'À propos',
    description:
        'Graphiste de formation, huit ans en relation client, aujourd\'hui en Bachelor Webmarketing & UX à HETIC. Je cherche une alternance en marketing digital dès octobre 2026.',
};

export default async function AboutPage() {
    const profile = await getProfile();
    const cv = profile.cvs[0];
    const { formation } = profile;

    return (
        <>
            <Header />
            <main className={styles.main}>
                <div className={styles.blob1} aria-hidden="true"></div>
                <div className={styles.blob2} aria-hidden="true"></div>

                {/* ---------- 1. HERO ---------- */}
                <section className={styles.hero}>
                    <div className={styles.container}>
                        <div className={styles.heroGrid}>
                            <div className={styles.heroContent}>
                                <span className={styles.eyebrow}>À propos</span>
                                <h1 className={styles.heroTitle}>
                                    Je fais parler le marketing et le design la même langue.
                                </h1>
                                <p className={styles.heroLead}>
                                    Graphiste de formation, huit ans passés au contact direct des clients,
                                    aujourd&apos;hui en Bachelor Webmarketing &amp; UX. Je sais concevoir une interface,
                                    écrire le message qui va avec et mesurer si ça fonctionne.
                                </p>

                                <div className={styles.heroCtas}>
                                    {cv && (
                                        <a href={cv.file} download className={styles.btnPrimary}>
                                            <FiDownload /> {cv.label}
                                        </a>
                                    )}
                                    <Link href="/#contact" className={styles.btnSecondary}>
                                        Me contacter
                                    </Link>
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
                            </div>

                            <div className={styles.portraitWrap}>
                                <Image
                                    src={profile.images.portrait}
                                    alt={`Portrait de ${profile.fullName}`}
                                    fill
                                    sizes="(max-width: 900px) 70vw, 480px"
                                    className={styles.portrait}
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* ---------- 2. OBJECTIF ALTERNANCE ---------- */}
                <section className={styles.objective} aria-labelledby="objectif">
                    <div className={styles.container}>
                        <div className={styles.objectiveCard}>
                            <div className={styles.objectiveMain}>
                                <span className={styles.objectiveTag}>Je recherche</span>
                                <h2 id="objectif" className={styles.objectiveTitle}>{formation.searching}</h2>
                                <p className={styles.objectiveText}>
                                    Pour accompagner mon {formation.diploma} à {formation.school}, qui prépare au{' '}
                                    <strong>{formation.rncp}</strong>.
                                </p>
                            </div>
                            <dl className={styles.objectiveFacts}>
                                <div>
                                    <dt>Début</dt>
                                    <dd>{formation.start}</dd>
                                </div>
                                <div>
                                    <dt>Durée</dt>
                                    <dd>{formation.duration}</dd>
                                </div>
                                <div>
                                    <dt>Rythme</dt>
                                    <dd>{formation.rhythm}</dd>
                                </div>
                                <div>
                                    <dt>Lieu</dt>
                                    <dd>{profile.location} et Île-de-France</dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </section>

                {/* ---------- 3. CE QUE J'APPORTE ---------- */}
                <section className={styles.strengths} aria-labelledby="apports">
                    <div className={styles.container}>
                        <span className={styles.eyebrow}>Mon profil</span>
                        <h2 id="apports" className={styles.sectionTitle}>Trois métiers dans un seul profil</h2>
                        <div className={styles.strengthGrid}>
                            {profile.strengths.map((item) => {
                                const Icon = getIcon(item.icon);
                                return (
                                    <article key={item.title} className={styles.strengthCard}>
                                        <div className={styles.strengthIcon}>{Icon && <Icon />}</div>
                                        <h3>{item.title}</h3>
                                        <p>{item.text}</p>
                                    </article>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* ---------- 4. PARCOURS ---------- */}
                <section className={styles.path} aria-labelledby="parcours">
                    <div className={styles.container}>
                        <span className={styles.eyebrow}>Parcours</span>
                        <h2 id="parcours" className={styles.sectionTitle}>Du print au pixel, puis à la performance</h2>

                        <ol className={styles.timeline}>
                            {profile.timeline.map((item) => (
                                <li
                                    key={`${item.period}-${item.title}`}
                                    className={`${styles.timelineItem} ${item.current ? styles.timelineCurrent : ''}`}
                                >
                                    <div className={styles.timelineMarker} aria-hidden="true">
                                        <span className={item.kind === 'formation' ? styles.dotFormation : styles.dotExperience}></span>
                                    </div>
                                    <div className={styles.timelineBody}>
                                        <div className={styles.timelineHead}>
                                            <span className={styles.timelinePeriod}>{item.period}</span>
                                            <div className={styles.timelineTags}>
                                                {item.tags.map((tag) => (
                                                    <span key={tag} className={styles.tag}>{tag}</span>
                                                ))}
                                            </div>
                                        </div>
                                        <h3 className={styles.timelineTitle}>{item.title}</h3>
                                        <p className={styles.timelineOrg}>{item.org}</p>
                                        <p className={styles.timelineText}>{item.text}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>
                </section>

                {/* ---------- 5. EN FORMATION ---------- */}
                <section className={styles.program} aria-labelledby="formation">
                    <div className={styles.container}>
                        <div className={styles.programGrid}>
                            <div>
                                <span className={styles.eyebrow}>En formation</span>
                                <h2 id="formation" className={styles.sectionTitle}>Ce que j&apos;apprends cette année</h2>
                                <p className={styles.programText}>
                                    Le {formation.diploma} de {formation.school} couvre toute la chaîne :
                                    attirer du trafic, le convertir, le mesurer et faire vivre une marque.
                                    Un alternant qui arrive déjà avec ces notions, c&apos;est autant de temps gagné.
                                </p>
                            </div>
                            <div className={styles.programChips}>
                                {formation.program.map((item) => (
                                    <GlassChip key={item}>{item}</GlassChip>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ---------- 6. CÔTÉ PERSO ---------- */}
                <section className={styles.personal} aria-labelledby="perso">
                    <div className={styles.container}>
                        <span className={styles.eyebrow}>Hors écran</span>
                        <h2 id="perso" className={styles.sectionTitle}>Côté perso</h2>
                        <div className={styles.personalGrid}>
                            {profile.personal.map((item) => {
                                const Icon = getIcon(item.icon);
                                return (
                                    <article key={item.title} className={styles.personalCard}>
                                        <div className={styles.personalIcon}>{Icon && <Icon />}</div>
                                        <h3>{item.title}</h3>
                                        <p>{item.text}</p>
                                    </article>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* ---------- 7. CTA FINAL ---------- */}
                <section className={styles.finalCta}>
                    <div className={styles.container}>
                        <div className={styles.ctaCard}>
                            <h2 className={styles.ctaTitle}>On se rencontre ?</h2>
                            <p className={styles.ctaText}>
                                Je suis disponible pour échanger sur une alternance, un stage ou une mission.
                                Réponse rapide, et je peux me déplacer.
                            </p>
                            <div className={styles.ctaActions}>
                                <Link href="/#contact" className={styles.btnPrimary}>
                                    Me contacter <FiArrowRight />
                                </Link>
                                <Link href="/projects" className={styles.btnSecondary}>
                                    Voir mes projets
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
