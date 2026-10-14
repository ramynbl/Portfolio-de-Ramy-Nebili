'use client';

import { MotionConfig } from 'framer-motion';

// Fournisseurs côté client. Respect de prefers-reduced-motion pour toutes
// les animations Framer Motion.
export default function Providers({ children }) {
    return (
        <MotionConfig reducedMotion="user">
            {children}
        </MotionConfig>
    );
}
