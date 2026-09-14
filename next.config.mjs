import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Un package-lock.json traîne dans le dossier home : on fixe la racine explicitement.
    turbopack: { root },
    images: {
        formats: ['image/avif', 'image/webp'],
        // Quand le CMS arrivera, ajouter ici son CDN (ex: cdn.sanity.io)
        remotePatterns: [],
    },
};

export default nextConfig;
