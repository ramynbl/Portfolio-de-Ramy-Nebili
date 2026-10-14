'use client';

import { motion } from 'framer-motion';

// Apparition au scroll. Pas d'overflow:hidden ici : il casserait le
// position:sticky des cartes projet à l'intérieur.
export default function ScrollReveal({ children, width = "100%", delay = 0, yOffset = 40 }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: yOffset }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay }}
            style={{ width, position: 'relative' }}
        >
            {children}
        </motion.div>
    );
}
