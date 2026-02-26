import { Lexend } from "next/font/google";
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
};

export default function RootLayout({ children }) {
    return (
        <html lang="fr" className={`${lexend.variable}`}>
            <body>
                {children}
            </body>
        </html>
    );
}