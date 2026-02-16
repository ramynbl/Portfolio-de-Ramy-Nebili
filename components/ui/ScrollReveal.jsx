'use client';

import { motion } from 'framer-motion';

export default function ScrollReveal({ children, width = "100%", delay = 0, yOffset = 40 }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: yOffset }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay }}
            style={{ width, overflow: "hidden" }}
        >
            {children}
        </motion.div>
    );
}

