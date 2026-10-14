import { ImageResponse } from 'next/og';
import { getSiteSettings, getProfile } from '@/lib/content';

// Image de partage (LinkedIn, Slack, iMessage), générée au build.
export const alt = 'Ramy Nebili, alternance en marketing digital';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpenGraphImage() {
    const [site, profile] = await Promise.all([getSiteSettings(), getProfile()]);
    const { formation } = profile;

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

                <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
                    <div
                        style={{
                            display: 'flex',
                            alignSelf: 'flex-start',
                            padding: '10px 22px',
                            borderRadius: 999,
                            border: '1px solid rgba(255,255,255,0.25)',
                            background: 'rgba(255,255,255,0.06)',
                            fontSize: 26,
                            color: 'rgba(255,255,255,0.9)',
                        }}
                    >
                        {`Alternance · ${formation.start} · ${formation.duration}`}
                    </div>
                    <div style={{ fontSize: 68, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2, maxWidth: 1000 }}>
                        Le marketing digital avec un œil de graphiste.
                    </div>
                    <div style={{ fontSize: 29, color: 'rgba(255,255,255,0.7)', lineHeight: 1.4, maxWidth: 980 }}>
                        {`${formation.diploma} à ${formation.school} · ${formation.rncp}`}
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
