import { Lexend, Outfit } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

// Configuration des fonts
const lexend = Lexend({
    subsets: ["latin"],
    variable: "--font-lexend",
    display: "swap",
});

const outfit = Outfit({
    subsets: ["latin"],
    variable: "--font-outfit",
    display: "swap",
});

export const metadata = {
    title: "Portfolio - Ramy Nebili",
    description: "Développeur Full Stack",
};

export default function RootLayout({ children }) {
    return (
        <html lang="fr" className={`${lexend.variable} ${outfit.variable}`}>
            <body>
                <Header />  {/* <-- C'est ici que la magie opère */}
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}