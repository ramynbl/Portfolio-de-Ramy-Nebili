import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight, FiGithub, FiLinkedin, FiMail, FiTarget, FiUsers, FiFilm, FiSmile } from 'react-icons/fi';
import SocialIcon from '../../components/ui/SocialIcon';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from './AboutPage.module.css';

export const metadata = {
    title: 'À propos | Ramy Nebili',
    description: "Découvrez mon parcours, mes compétences et ma vision du développement web.",
};

export default function AboutPage() {
    return (
        <>
            <Header />
            <main className={styles.main}>
                {/* Global Animated Background Blobs */}
                <div className={styles.blob1}></div>
                <div className={styles.blob2}></div>
                <div className={styles.blob3}></div>

                {/* Header Hero Section */}
                <section className={styles.heroSection}>
                    <div className={styles.container}>
                        <div className={styles.heroGrid}>
                            <div className={styles.heroContent}>
                                <span className={`${styles.overline} ${styles.gradientLight}`}>À Propos</span>
                                <h1 className={`${styles.title} ${styles.gradientTitle}`}>La technique<br />au service du sens.</h1>

                                <div className={styles.heroText}>
                                    <p>
                                        Ce qui m’anime dans le développement web, ce n’est pas seulement le code. C’est <strong>l’impact</strong>.
                                    </p>
                                    <p>
                                        Concevoir une <strong>solution à un besoin réel.</strong>
                                        Optimiser chaque détail pour qu’un utilisateur puisse dire :
                                        <strong>“Ton produit m’a vraiment aidé.”</strong>
                                    </p>
                                    <p>
                                        Ancien <strong>graphiste</strong> et <strong>commercial</strong>, je combine <strong>vision produit</strong>, <strong>sens du design</strong> et <strong>rigueur technique</strong> pour construire des expériences <strong>utiles</strong>, <strong>performantes</strong> et <strong>cohérentes</strong> de A à Z.
                                    </p>
                                </div>

                                <div className={styles.ctaGroup}>
                                    <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className={styles.emailBtn}>
                                        Télécharger le CV
                                    </a>
                                    <div className={styles.socialLinks}>
                                        <SocialIcon
                                            href="https://github.com/RamyNbl"
                                            icon={<FiGithub />}
                                            ariaLabel="GitHub"
                                            networkType="github"
                                            className={styles.aboutSocialIcon}
                                        />
                                        <SocialIcon
                                            href="https://www.linkedin.com/in/ramynebili/"
                                            icon={<FiLinkedin />}
                                            ariaLabel="LinkedIn"
                                            networkType="linkedin"
                                            className={styles.aboutSocialIcon}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className={styles.heroImageContainer}>
                                <Image
                                    src="/image/ramy-carre.png"
                                    alt="Portrait de Ramy Nebili"
                                    fill
                                    className={styles.profileImage}
                                    priority
                                />
                            </div>
                        </div>

                        {/* Objective Block */}
                        <div className={`${styles.objectiveBlock} ${styles.glassCard}`}>
                            <div className={styles.objectiveHeader}>
                                <FiTarget className={styles.objectiveIcon} />
                                <h3 className={`${styles.objectiveTitle} ${styles.gradientLight}`}>Objectif Actuel</h3>
                            </div>
                            <p>
                                Apprendre en continu. Je cherche activement une <strong>alternance</strong>, un <strong>stage</strong> ou des missions <strong>freelances</strong> pour monter en compétences sur React et Next.js.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Resume / Experience & Education Section */}
                <section className={styles.resumeSection}>
                    <div className={styles.container}>
                        <span className={`${styles.overline} ${styles.gradientLight}`}>EXPERIENCE & EDUCATION</span>
                        <h2 className={`${styles.sectionTitle} ${styles.gradientTitle}`}>Mon Parcours</h2>

                        <div className={styles.resumeGrid}>
                            {/* Experience Column */}
                            <div className={styles.resumeColumn}>
                                <h3 className={styles.columnTitle}>Expérience</h3>

                                <div className={styles.resumeList}>
                                    <div className={`${styles.resumeItem} ${styles.glassCard}`}>
                                        <div className={styles.itemHeader}>
                                            <h4>Développeur Full Stack</h4>
                                            <span className={styles.date}>2025 - Présent</span>
                                        </div>
                                        <p className={styles.itemCompany}>Projets : Anime Finder, Bot Discord, Kevin AI...</p>
                                    </div>

                                    <div className={`${styles.resumeItem} ${styles.glassCard}`}>
                                        <div className={styles.itemHeader}>
                                            <h4>Commercial & Manager</h4>
                                            <span className={styles.date}>2021 - 2024</span>
                                        </div>
                                        <p className={styles.itemCompany}>COPYTOP</p>
                                    </div>

                                    <div className={`${styles.resumeItem} ${styles.glassCard}`}>
                                        <div className={styles.itemHeader}>
                                            <h4>Responsable Adjoint des stocks</h4>
                                            <span className={styles.date}>2018 - 2021</span>
                                        </div>
                                        <p className={styles.itemCompany}>ZARA</p>
                                    </div>

                                    <div className={`${styles.resumeItem} ${styles.glassCard}`}>
                                        <div className={styles.itemHeader}>
                                            <h4>Graphiste Alternant</h4>
                                            <span className={styles.date}>2013 - 2016</span>
                                        </div>
                                        <p className={styles.itemCompany}>De l'autre côté du Périph</p>
                                    </div>
                                </div>
                            </div>

                            {/* Education Column */}
                            <div className={styles.resumeColumn}>
                                <h3 className={styles.columnTitle}>Formation</h3>

                                <div className={styles.resumeList}>
                                    <div className={`${styles.resumeItem} ${styles.glassCard}`}>
                                        <div className={styles.itemHeader}>
                                            <h4>Bachelor Développement Web</h4>
                                            <span className={styles.date}>2025 - En cours</span>
                                        </div>
                                        <p className={styles.itemCompany}>HETIC (Paris)</p>
                                    </div>

                                    <div className={`${styles.resumeItem} ${styles.glassCard}`}>
                                        <div className={styles.itemHeader}>
                                            <h4>Bac Pro Production Graphique</h4>
                                            <span className={styles.date}>2013 - 2016</span>
                                        </div>
                                        <p className={styles.itemCompany}>Gobelins, l'école de l'image (Paris)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Vision & Skills Section */}
                <section className={styles.visionSection}>
                    <div className={styles.container}>
                        <span className={`${styles.overline} ${styles.gradientLight}`}>MY TOP</span>
                        <h2 className={`${styles.sectionTitle} ${styles.gradientTitle}`}>Ma Vision.</h2>

                        <div className={styles.visionGrid}>
                            <div className={styles.visionText}>
                                <p>
                                    Un produit numérique n’est pas réussi parce qu’il est beau.
                                    Il est réussi parce qu’il est <strong>utilisé</strong>.
                                </p>
                                <p>
                                    Je crois à la <strong>technique au service du sens</strong>.
                                    Chaque ligne de code doit répondre à un <strong>besoin réel</strong>.
                                    Chaque choix d’interface doit <strong>simplifier une action</strong>.
                                    Chaque optimisation doit <strong>améliorer l’expérience</strong>. <br></br>
                                    Peu importe la stack.
                                    Ce qui compte, c’est la <strong>valeur créée</strong>.
                                </p>
                                <p>
                                    Mon parcours en <strong>management</strong> (organisation, gestion de projet et soft skills) me permet d’aborder sereinement la conduite d’un projet technique de <strong>A à Z</strong>, avec vision, méthode et exigence.
                                </p>
                                <p>
                                    Ma plus grande fierté : le <strong>bot Discord de mon école</strong>.
                                    Son automatisation aide quotidiennement les étudiants, et leurs retours de satisfaction donnent du sens à mon travail. <br></br>
                                    Aujourd’hui, mon défi est de le <strong>refactoriser</strong> pour le rendre plus <strong>modulable</strong> et <strong>scalable</strong>, avec l’ambition de toucher une audience bien plus large.
                                </p>
                            </div>

                            <div className={`${styles.skillsContainer}`}>
                                <div className={`${styles.skillCategoryBlock} ${styles.glassCard}`}>
                                    <h3 className={styles.skillCategoryTitle}>Stack actuelle</h3>
                                    <div className={styles.chipContainer}>
                                        <span className={styles.chip}>React / Next.js</span>
                                        <span className={styles.chip}>Node.js / Express</span>
                                        <span className={styles.chip}>JavaScript</span>
                                        <span className={styles.chip}>Architecture REST</span>
                                        <span className={styles.chip}>Gestion d’état</span>
                                        <span className={styles.chip}>Optimisation performance</span>
                                    </div>
                                </div>

                                <div className={`${styles.skillCategoryBlock} ${styles.glassCard}`}>
                                    <h3 className={styles.skillCategoryTitle}>Focus 2026</h3>
                                    <div className={styles.chipContainer}>
                                        <span className={`${styles.chip} ${styles.chipFocus}`}>Maîtriser React/Next.js à fond</span>
                                        <span className={`${styles.chip} ${styles.chipFocus}`}>TypeScript</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Soft Skills & Hobbies Grid */}
                <section className={styles.hobbiesSection}>
                    <div className={styles.container}>
                        <div className={styles.hobbiesGrid}>
                            {/* Objectif actuel has been fully moved up to the Hero section */}
                            <div className={`${styles.hobbyBlock} ${styles.glassCard}`}>
                                <div className={styles.hobbyIcon}><FiUsers /></div>
                                <h3>Vie Associative</h3>
                                <p>Membre actif et responsable événementiel au BDE d'HETIC, membre Magn'hetic et Hetic Alumni.</p>
                            </div>
                            <div className={`${styles.hobbyBlock} ${styles.glassCard}`}>
                                <div className={styles.hobbyIcon}><FiFilm /></div>
                                <h3>Passions</h3>
                                <p>Cinéma, grand consommateur de séries, lecteur assidu de mangas... et je dessinais beaucoup !</p>
                            </div>
                            <div className={`${styles.hobbyBlock} ${styles.glassCard}`}>
                                <div className={styles.hobbyIcon}><FiSmile /></div>
                                <h3>Fun Fact</h3>
                                <p>Malgré toute cette organisation, je ne sais pas faire mes lacets.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer / Quote Section */}
                <section className={styles.quoteSection}>
                    <div className={styles.container}>
                        <div className={styles.quoteGrid}>
                            <div className={styles.quoteCTA}>
                                <h2>Besoin d'aide sur un projet ou recrutement ? Travaillons ensemble.</h2>
                                <Link href="/#contact" className={styles.emailBtnLight}>
                                    Être recontacté
                                </Link>
                            </div>
                            <div className={`${styles.quoteBlock} ${styles.glassCard}`}>
                                <span className={`${styles.overline} ${styles.gradientLight}`}>MA PHILOSOPHIE</span>
                                <blockquote className={styles.quoteText}>
                                    "Remember why you started."
                                </blockquote>
                                <div className={styles.quoteAuthor}>
                                    <div className={styles.authorAvatar}>
                                        <Image src="/image/ramy-miniature.jpeg" alt="Ramy Nebili" fill className={styles.avatarImg} />
                                    </div>
                                    <div className={styles.authorInfo}>
                                        <strong>Ramy Nebili</strong>
                                        <span>Développeur Full Stack</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
