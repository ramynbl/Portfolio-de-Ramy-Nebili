import { Lexend, Outfit } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/Header";

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
    title: "Portfolio de Ramy NEBILI",
    description: "Développeur Web & Designer UI/UX",
};

export default function RootLayout({ children }) {
    return (
        <html lang="fr" className={`${lexend.variable} ${outfit.variable}`}>
            <body>
                <Header />  {/* <-- C'est ici que la magie opère */}
                <main>{children}</main>
                {/* Le Footer viendra ici plus tard */}
            </body>
        </html>
    );
}