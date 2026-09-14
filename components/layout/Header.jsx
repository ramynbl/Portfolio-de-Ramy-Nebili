import { getSiteSettings, getProfile } from '@/lib/content';
import HeaderClient from './HeaderClient';

// Enveloppe serveur : récupère les données puis délègue au composant client.
export default async function Header() {
    const [site, profile] = await Promise.all([getSiteSettings(), getProfile()]);
    return (
        <HeaderClient
            nav={site.nav}
            anchors={site.sidebarAnchors}
            socials={profile.socials}
            cv={profile.cvs[0]}
        />
    );
}
