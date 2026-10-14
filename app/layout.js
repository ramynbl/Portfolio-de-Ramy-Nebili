import { Lexend, DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Providers from "@/components/providers/Providers";
import { getSiteSettings } from "@/lib/content";
import "./globals.css";

// Titres : Lexend. Corps : DM Sans (géométrique, remplace l'ancien import
// non licencié de « Google Sans » depuis un CDN tiers).
const lexend = Lexend({
    subsets: ["latin"],
    variable: "--font-lexend",
    display: "swap",
});

const dmSans = DM_Sans({
    subsets: ["latin"],
    variable: "--font-dm-sans",
    display: "swap",
});

export async function generateMetadata() {
    const site = await getSiteSettings();
    return {
        metadataBase: new URL(site.url),
        title: {
            default: site.title,
            template: `%s | ${site.name}`,
        },
        description: site.description,
        keywords: site.keywords,
        authors: [{ name: site.name, url: site.url }],
        icons: { icon: "/image/r-blanc.png" },
        openGraph: {
            type: "website",
            locale: "fr_FR",
            url: site.url,
            siteName: site.name,
            title: site.title,
            description: site.description,
        },
        twitter: {
            card: "summary_large_image",
            title: site.title,
            description: site.description,
        },
        robots: { index: true, follow: true },
    };
}

export default function RootLayout({ children }) {
    return (
        <html lang="fr" className={`${lexend.variable} ${dmSans.variable}`}>
            <body>
                <Providers>
                    {children}
                </Providers>
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}
