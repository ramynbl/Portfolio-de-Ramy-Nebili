/*
 * Curseur simulé pour les vidéos de capture.
 *
 * Un navigateur headless n'affiche aucun pointeur : on le dessine dans la
 * page. Ce script est injecté avant le chargement de chaque document
 * (Page.addScriptToEvaluateOnNewDocument). Il suit les événements souris
 * envoyés par browser.mjs et marque chaque clic d'un cercle discret.
 */
(() => {
    if (window.__captureCursor) return;

    // Flèche classique, pointe en (5, 3) : c'est le point qui suit la souris.
    const ARROW = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">'
        + '<path d="M5 3 L5 19.5 L9.4 15.4 L12.3 21.6 L15.1 20.4 L12.2 14.3 L18.2 14.3 Z" '
        + 'fill="#111" stroke="#fff" stroke-width="1.6" stroke-linejoin="round"/></svg>';

    let arrow = null;
    let ring = null;
    let visible = true;
    let last = null;

    function place(x, y) {
        if (arrow) arrow.style.transform = `translate(${x - 5}px, ${y - 3}px)`;
    }

    function install() {
        arrow = document.createElement('div');
        arrow.innerHTML = ARROW;
        Object.assign(arrow.style, {
            position: 'fixed', left: '0', top: '0', zIndex: '2147483647', pointerEvents: 'none',
            transform: 'translate(-200px, -200px)', filter: 'drop-shadow(0 2px 3px rgba(0, 0, 0, 0.35))',
        });

        ring = document.createElement('div');
        Object.assign(ring.style, {
            position: 'fixed', left: '0', top: '0', width: '36px', height: '36px',
            marginLeft: '-18px', marginTop: '-18px', borderRadius: '50%',
            border: '2px solid rgba(17, 17, 17, 0.55)', background: 'rgba(17, 17, 17, 0.08)',
            zIndex: '2147483646', pointerEvents: 'none', opacity: '0',
        });

        document.documentElement.append(ring, arrow);
        if (last) place(last.x, last.y);
        if (!visible) arrow.style.visibility = 'hidden';
    }

    // Phase de capture : l'application ne peut pas intercepter ces événements avant nous.
    window.addEventListener('mousemove', (e) => {
        last = { x: e.clientX, y: e.clientY };
        place(e.clientX, e.clientY);
    }, true);

    window.addEventListener('mousedown', (e) => {
        if (!ring || !visible) return;
        ring.style.left = `${e.clientX}px`;
        ring.style.top = `${e.clientY}px`;
        ring.animate(
            [{ opacity: 1, transform: 'scale(0.4)' }, { opacity: 0, transform: 'scale(1.4)' }],
            { duration: 450, easing: 'ease-out' },
        );
    }, true);

    window.__captureCursor = {
        hide() { visible = false; if (arrow) arrow.style.visibility = 'hidden'; },
        show() { visible = true; if (arrow) arrow.style.visibility = 'visible'; },
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', install, { once: true });
    } else {
        install();
    }
})();
