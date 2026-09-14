import { ImageResponse } from 'next/og';
import { getSiteSettings, getProfile } from '@/lib/content';

// Image de partage (LinkedIn, Slack, iMessage…) générée au build.
export const alt = 'Ramy Nebili — Design, web & communication';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpenGraphImage() {
    const [site, profile] = await Promise.all([getSiteSettings(), getProfile()]);

    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: 72,
                    background: 'linear-gradient(135deg, #000 0%, #0b0b1a 55%, #1a0f2e 100%)',
                    color: '#fff',
                    fontFamily: 'sans-serif',
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: 20, fontSize: 36, fontWeight: 700 }}>
                    <div style={{ width: 56, height: 56, borderRadius: 28, background: '#fff', color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28 }}>R</div>
                    {profile.fullName}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                    <div style={{ fontSize: 72, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2 }}>
                        Design, web &amp; communication
                    </div>
                    <div style={{ fontSize: 30, color: 'rgba(255,255,255,0.7)', lineHeight: 1.4, maxWidth: 980 }}>
                        {site.description}
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 26, color: 'rgba(255,255,255,0.55)' }}>
                    <span>{site.url.replace(/^https?:\/\//, '')}</span>
                    <span>{profile.location}</span>
                </div>
            </div>
        ),
        { ...size }
    );
}
