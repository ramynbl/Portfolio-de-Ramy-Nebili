import { Lexend } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

// Configuration des fonts
const lexend = Lexend({
    subsets: ["latin"],
    variable: "--font-lexend",
    display: "swap",
});

export const metadata = {
    title: "Portfolio - Ramy Nebili",
    description: "Développeur Full Stack",
    icons: {
        icon: "/image/r-blanc.png",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="fr" className={`${lexend.variable}`}>
            <body>
                {children}
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}