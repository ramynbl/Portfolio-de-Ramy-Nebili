'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import Link from 'next/link';
import styles from './BreakoutGame.module.css';

// ============================================================
// MATRICE 2D — Motif "404" pour les briques
// Chaque ligne = une rangée de briques
// 1 = brique présente, 0 = case vide
// Dimensions : 17 colonnes × 7 lignes
// Structure: "4" (5 cols) | gap (1) | "0" (5 cols) | gap (1) | "4" (5 cols)
// ============================================================
const BRICK_PATTERN = [
    [1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0],
    [1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0],
    [1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0],
    [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0],
];

// Palette de couleurs par ligne pour un effet dégradé visuel
const ROW_COLORS = [
    '#a78bfa', // violet clair
    '#818cf8', // indigo
    '#60a5fa', // bleu
    '#38bdf8', // bleu clair
    '#34d399', // vert menthe
    '#60a5fa', // bleu
    '#a78bfa', // violet clair
];

// ============================================================
// COMPOSANT PRINCIPAL
// Props optionnelles pour s'adapter au design system
// ============================================================
export default function BreakoutGame({
    paddleColor = null,    // si null, lit var(--primary)
    ballColor = null,      // si null, lit var(--foreground)
    brickColors = null,    // si null, utilise ROW_COLORS
}) {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);

    // --- État du jeu ---
    // 'idle'     : écran d'accueil
    // 'playing'  : jeu en cours
    // 'gameover' : défaite (balle tombée)
    // 'victory'  : victoire (toutes les briques détruites)
    const [gameState, setGameState] = useState('idle');
    const [score, setScore] = useState(0);
    const [lives, setLives] = useState(3);

    // Refs pour les variables de jeu (évite les stale closures dans requestAnimationFrame)
    const gameStateRef = useRef('idle');
    const scoreRef = useRef(0);
    const livesRef = useRef(3);
    const animFrameRef = useRef(null);
    const bricksRef = useRef([]);
    const ballRef = useRef({ x: 0, y: 0, vx: 0, vy: 0, r: 8 });
    const paddleRef = useRef({ x: 0, y: 0, w: 100, h: 12 });
    const keysRef = useRef({ left: false, right: false });

    // ============================================================
    // UTILITAIRE : Lire une variable CSS depuis le document root
    // ============================================================
    const getCSSVar = useCallback((varName, fallback) => {
        if (typeof window === 'undefined') return fallback;
        const value = getComputedStyle(document.documentElement)
            .getPropertyValue(varName)
            .trim();
        return value || fallback;
    }, []);

    // ============================================================
    // INITIALISATION DU JEU
    // Positionne la balle, la raquette, et génère les briques
    // à partir de la matrice BRICK_PATTERN
    // ============================================================
    const initGame = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const W = canvas.width;
        const H = canvas.height;

        // --- Raquette ---
        const pw = Math.min(120, W * 0.2);
        paddleRef.current = {
            x: W / 2 - pw / 2,
            y: H - 40,
            w: pw,
            h: 12,
        };

        // --- Balle ---
        ballRef.current = {
            x: W / 2,
            y: H - 60,
            vx: (Math.random() > 0.5 ? 1 : -1) * (W * 0.004),
            vy: -(H * 0.006),
            r: Math.max(6, W * 0.012),
        };

        // --- Génération des briques depuis la matrice ---
        const cols = BRICK_PATTERN[0].length;
        const rows = BRICK_PATTERN.length;
        const brickAreaW = W * 0.92;
        const brickAreaOffsetX = (W - brickAreaW) / 2;
        const brickW = (brickAreaW / cols) * 0.88;
        const brickH = Math.max(18, H * 0.04);
        const brickGapX = (brickAreaW / cols) * 0.12;
        const brickGapY = Math.max(6, H * 0.012);
        const brickStartY = H * 0.08;

        const bricks = [];
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (BRICK_PATTERN[r][c] === 1) {
                    bricks.push({
                        x: brickAreaOffsetX + c * (brickW + brickGapX),
                        y: brickStartY + r * (brickH + brickGapY),
                        w: brickW,
                        h: brickH,
                        alive: true,
                        color: (brickColors?.[r]) ?? ROW_COLORS[r % ROW_COLORS.length],
                    });
                }
            }
        }
        bricksRef.current = bricks;
        scoreRef.current = 0;
        livesRef.current = 3;
        setScore(0);
        setLives(3);
    }, [brickColors]);

    // ============================================================
    // DÉTECTION DE COLLISION : Balle ↔ Rectangle (AABB)
    // Retourne le côté touché : 'top' | 'bottom' | 'left' | 'right' | null
    // Principe : on projette le centre de la balle sur les axes X et Y,
    // et on vérifie si la balle pénètre dans la boîte englobante.
    // On privilégie l'axe de collision le plus "profond" pour rebondir.
    // ============================================================
    const checkCollisionRect = useCallback((ball, rect) => {
        // Distance entre le centre de la balle et le centre du rectangle
        const ballCx = ball.x;
        const ballCy = ball.y;
        const rectCx = rect.x + rect.w / 2;
        const rectCy = rect.y + rect.h / 2;
        const dx = ballCx - rectCx;
        const dy = ballCy - rectCy;

        // Demi-dimensions combinées balle + rectangle
        const halfW = rect.w / 2 + ball.r;
        const halfH = rect.h / 2 + ball.r;

        // Pas de collision si le centre est trop loin
        if (Math.abs(dx) >= halfW || Math.abs(dy) >= halfH) return null;

        // Profondeur de pénétration sur chaque axe
        const overlapX = halfW - Math.abs(dx);
        const overlapY = halfH - Math.abs(dy);

        // On rebondit sur l'axe avec la pénétration la plus faible
        if (overlapX < overlapY) {
            return dx < 0 ? 'right' : 'left';
        } else {
            return dy < 0 ? 'bottom' : 'top';
        }
    }, []);

    // ============================================================
    // BOUCLE D'ANIMATION PRINCIPALE — appelée via requestAnimationFrame
    // ============================================================
    const gameLoop = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const W = canvas.width;
        const H = canvas.height;

        // --- Lecture des couleurs CSS ---
        const bg = getCSSVar('--background', '#0a0a0a');
        const fg = getCSSVar('--foreground', '#ffffff');
        const primary = getCSSVar('--primary', '#0071e3');
        const resolvedPaddleColor = paddleColor ?? fg;
        const resolvedBallColor = ballColor ?? fg;

        // --- Effacement du canvas ---
        ctx.fillStyle = bg;
        ctx.fillRect(0, 0, W, H);

        const ball = ballRef.current;
        const paddle = paddleRef.current;
        const PADDLE_SPEED = W * 0.012;

        // --- Déplacement de la raquette via les touches clavier ---
        if (keysRef.current.left) {
            paddle.x = Math.max(0, paddle.x - PADDLE_SPEED);
        }
        if (keysRef.current.right) {
            paddle.x = Math.min(W - paddle.w, paddle.x + PADDLE_SPEED);
        }

        // --- Déplacement de la balle ---
        ball.x += ball.vx;
        ball.y += ball.vy;

        // --- Collision balle ↔ Murs gauche/droite ---
        if (ball.x - ball.r <= 0) {
            ball.x = ball.r;
            ball.vx *= -1;
        }
        if (ball.x + ball.r >= W) {
            ball.x = W - ball.r;
            ball.vx *= -1;
        }

        // --- Collision balle ↔ Plafond ---
        if (ball.y - ball.r <= 0) {
            ball.y = ball.r;
            ball.vy *= -1;
        }

        // --- Balle tombée sous la raquette → perte d'une vie ---
        if (ball.y - ball.r > H) {
            livesRef.current -= 1;
            setLives(livesRef.current);
            if (livesRef.current <= 0) {
                gameStateRef.current = 'gameover';
                setGameState('gameover');
                return; // On arrête la boucle
            }
            // Réinitialiser la position de la balle
            ball.x = W / 2;
            ball.y = H - 60;
            ball.vx = (Math.random() > 0.5 ? 1 : -1) * (W * 0.004);
            ball.vy = -(H * 0.006);
        }

        // --- Collision balle ↔ Raquette ---
        const paddleSide = checkCollisionRect(ball, paddle);
        if (paddleSide === 'top' || paddleSide === 'bottom') {
            // On ajuste l'angle de rebond selon la position de l'impact sur la raquette
            const hitX = (ball.x - (paddle.x + paddle.w / 2)) / (paddle.w / 2);
            const angle = hitX * (Math.PI / 3); // Angle max 60°
            const speed = Math.sqrt(ball.vx ** 2 + ball.vy ** 2);
            ball.vx = speed * Math.sin(angle);
            ball.vy = -Math.abs(speed * Math.cos(angle));
            ball.y = paddle.y - ball.r - 1;
        } else if (paddleSide === 'left' || paddleSide === 'right') {
            ball.vx *= -1;
        }

        // --- Collision balle ↔ Briques ---
        let allGone = true;
        for (const brick of bricksRef.current) {
            if (!brick.alive) continue;
            allGone = false;

            const side = checkCollisionRect(ball, brick);
            if (side) {
                brick.alive = false;
                scoreRef.current += 10;
                setScore(scoreRef.current);

                // Rebond selon le côté touché
                if (side === 'top' || side === 'bottom') {
                    ball.vy *= -1;
                } else {
                    ball.vx *= -1;
                }
                break; // Une seule brique touchée par frame pour éviter les bugs
            }
        }

        // --- Victoire : toutes les briques sont détruites ---
        if (allGone) {
            gameStateRef.current = 'victory';
            setGameState('victory');
            // On dessine une dernière frame avant d'arrêter
        }

        // ============================================================
        // RENDU : Dessin des éléments du jeu
        // ============================================================

        // Dessin des briques (seulement les vivantes)
        for (const brick of bricksRef.current) {
            if (!brick.alive) continue;
            ctx.fillStyle = brick.color;
            ctx.beginPath();
            ctx.roundRect(brick.x, brick.y, brick.w, brick.h, 4);
            ctx.fill();
            // Légère brillance sur le dessus
            ctx.fillStyle = 'rgba(255,255,255,0.15)';
            ctx.beginPath();
            ctx.roundRect(brick.x + 2, brick.y + 2, brick.w - 4, 4, 2);
            ctx.fill();
        }

        // Dessin de la raquette
        ctx.fillStyle = resolvedPaddleColor;
        ctx.beginPath();
        ctx.roundRect(paddle.x, paddle.y, paddle.w, paddle.h, 6);
        ctx.fill();
        // Reflet sur la raquette
        ctx.fillStyle = 'rgba(255,255,255,0.3)';
        ctx.beginPath();
        ctx.roundRect(paddle.x + 4, paddle.y + 2, paddle.w - 8, 4, 3);
        ctx.fill();

        // Dessin de la balle avec glow
        ctx.shadowColor = resolvedBallColor;
        ctx.shadowBlur = 15;
        ctx.fillStyle = resolvedBallColor;
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0; // Réinitialiser le shadow

        // Score
        ctx.fillStyle = 'rgba(255,255,255,0.5)';
        ctx.font = `${Math.max(12, W * 0.025)}px 'Inter', sans-serif`;
        ctx.fillText(`Score: ${scoreRef.current}`, 10, H - 10);

        // Vies (affichage en balles)
        for (let i = 0; i < livesRef.current; i++) {
            ctx.fillStyle = primary;
            ctx.beginPath();
            ctx.arc(W - 20 - i * 22, H - 14, 7, 0, Math.PI * 2);
            ctx.fill();
        }

        // --- Planifier la prochaine frame ---
        if (gameStateRef.current === 'playing') {
            animFrameRef.current = requestAnimationFrame(gameLoop);
        }
    }, [getCSSVar, paddleColor, ballColor, checkCollisionRect]);

    // ============================================================
    // DÉMARRER LE JEU
    // ============================================================
    const startGame = useCallback(() => {
        initGame();
        gameStateRef.current = 'playing';
        setGameState('playing');
        // Lancement de la boucle au prochain rendu
        requestAnimationFrame(gameLoop);
    }, [initGame, gameLoop]);

    // ============================================================
    // EFFET : Gestion du canvas et des event listeners
    // ============================================================
    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        // --- Fonction pour redimensionner le canvas au conteneur parent ---
        const resizeCanvas = () => {
            const { width } = container.getBoundingClientRect();
            canvas.width = width;
            canvas.height = Math.min(width * 0.8, 700);

            // Re-dessiner l'état initial si le jeu n'est pas en cours
            if (gameStateRef.current !== 'playing') {
                const ctx = canvas.getContext('2d');
                const bg = getComputedStyle(document.documentElement)
                    .getPropertyValue('--background').trim() || '#0a0a0a';
                ctx.fillStyle = bg;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
            }
        };

        resizeCanvas();

        // ResizeObserver pour réagir aux changements de taille du conteneur parent
        const observer = new ResizeObserver(resizeCanvas);
        observer.observe(container);

        // --- Gestion clavier ---
        const onKeyDown = (e) => {
            if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') keysRef.current.left = true;
            if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') keysRef.current.right = true;
        };
        const onKeyUp = (e) => {
            if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') keysRef.current.left = false;
            if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') keysRef.current.right = false;
        };

        // --- Gestion souris : déplace la raquette à la position du curseur ---
        const onMouseMove = (e) => {
            if (gameStateRef.current !== 'playing') return;
            const rect = canvas.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const paddle = paddleRef.current;
            // Centrer la raquette sous la souris
            paddle.x = Math.max(0, Math.min(canvas.width - paddle.w, mouseX - paddle.w / 2));
        };

        // --- Gestion touch (mobile) ---
        const onTouchMove = (e) => {
            if (gameStateRef.current !== 'playing') return;
            e.preventDefault();
            const rect = canvas.getBoundingClientRect();
            const touchX = e.touches[0].clientX - rect.left;
            const paddle = paddleRef.current;
            paddle.x = Math.max(0, Math.min(canvas.width - paddle.w, touchX - paddle.w / 2));
        };

        window.addEventListener('keydown', onKeyDown);
        window.addEventListener('keyup', onKeyUp);
        canvas.addEventListener('mousemove', onMouseMove);
        canvas.addEventListener('touchmove', onTouchMove, { passive: false });

        // --- Nettoyage : détacher tous les listeners à la destruction du composant ---
        return () => {
            observer.disconnect();
            window.removeEventListener('keydown', onKeyDown);
            window.removeEventListener('keyup', onKeyUp);
            canvas.removeEventListener('mousemove', onMouseMove);
            canvas.removeEventListener('touchmove', onTouchMove);
            if (animFrameRef.current) {
                cancelAnimationFrame(animFrameRef.current);
            }
        };
    }, []);

    // Stopper l'animation quand le jeu s'arrête
    useEffect(() => {
        if (gameState === 'playing') {
            animFrameRef.current = requestAnimationFrame(gameLoop);
        } else {
            if (animFrameRef.current) {
                cancelAnimationFrame(animFrameRef.current);
            }
        }
        return () => {
            if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
        };
    }, [gameState, gameLoop]);

    return (
        <div className={styles.wrapper} ref={containerRef}>
            {/* Canvas : le terrain de jeu */}
            <canvas
                ref={canvasRef}
                className={styles.canvas}
                aria-label="Jeu Casse-briques"
            />

            {/* Écran d'accueil (idle) */}
            {gameState === 'idle' && (
                <div className={styles.overlay}>
                    <p className={styles.overlayEmoji}>🎮</p>
                    <h2 className={styles.overlayTitle}>Casse les briques !</h2>
                    <p className={styles.overlayText}>
                        Détruisez le "404" pour passer le temps pendant la construction.
                        <br />
                        <span className={styles.overlayHint}>← → ou Souris pour déplacer la raquette</span>
                    </p>
                    <button className={styles.overlayBtn} onClick={startGame}>
                        Lancer la partie
                    </button>
                </div>
            )}

            {/* Écran game over */}
            {gameState === 'gameover' && (
                <div className={styles.overlay}>
                    <p className={styles.overlayEmoji}>💀</p>
                    <h2 className={styles.overlayTitle}>Game Over</h2>
                    <p className={styles.overlayText}>Score final : <strong>{score}</strong></p>
                    <button className={styles.overlayBtn} onClick={startGame}>
                        Réessayer
                    </button>
                </div>
            )}

            {/* Écran victoire */}
            {gameState === 'victory' && (
                <div className={styles.overlay}>
                    <p className={styles.overlayEmoji}>🏆</p>
                    <h2 className={styles.overlayTitle}>Victoire !</h2>
                    <p className={styles.overlayText}>Tu as détruit le 404 ! Score : <strong>{score}</strong></p>
                    <button className={styles.overlayBtn} onClick={startGame}>
                        Rejouer
                    </button>
                </div>
            )}
        </div>
    );
}
