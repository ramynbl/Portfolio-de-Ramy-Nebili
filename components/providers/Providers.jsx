'use client';

import { ThemeProvider } from 'next-themes';
import { MotionConfig } from 'framer-motion';

// Fournisseurs côté client : thème (dark / light / système) et
// respect de prefers-reduced-motion pour toutes les animations Framer Motion.
export default function Providers({ children }) {
    return (
        <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
            <MotionConfig reducedMotion="user">
                {children}
            </MotionConfig>
        </ThemeProvider>
    );
}
