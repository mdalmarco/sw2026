import { ImageResponse } from '@vercel/og';

export const config = { runtime: 'edge' };

const POSTS: Record<string, { title: string; meta: string; highlight: string }> = {
  'por-que-ir-se-nunca-empreendeu': {
    title: 'Por que ir ao\nStartup Weekend\nse voc\u00ea nunca\nempreendeu',
    meta: 'PRA QUEM \u00c9 \u00b7 7 MIN',
    highlight: 'nunca empreendeu',
  },
  'o-que-levar-na-mochila': {
    title: 'O que levar na\nmochila para o\nStartup Weekend',
    meta: 'COMO SE PREPARAR · 6 MIN',
    highlight: 'mochila',
  },
  'cheguei-sem-ideia': {
    title: 'Cheguei sem ideia:\n3 histórias de\nquem participou',
    meta: 'HISTÓRIAS · 8 MIN',
    highlight: 'sem ideia',
  },
  'pitch-60-segundos': {
    title: 'Como funciona o\npitch de 60\nsegundos',
    meta: 'SOBRE O EVENTO · 5 MIN',
    highlight: '60 segundos',
  },
};

export default function handler(req: Request) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get('slug');
  const post = slug ? POSTS[slug] : null;

  // Se tem slug, gera imagem do post. Senão, imagem da home.
  const badge = post ? post.meta : 'TECHSTARS · 14–16 AGO 2026';
  const lines = post
    ? post.title.split('\n')
    : ['54 horas para', 'tirar uma ideia', 'do papel.'];
  const accentLine = post ? 1 : 1; // segunda linha em laranja
  const footer = post
    ? 'swtimbo.com.br/blog'
    : 'swtimbo.com.br';
  const subinfo = post
    ? 'Startup Weekend Timbó 2026'
    : '14 — 16 ago 2026  ·  CETISA · Timbó, SC';

  return new ImageResponse(
    <div
      style={{
        width: '1200px',
        height: '630px',
        display: 'flex',
        background: '#F4EEE8',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(circle at 18% 28%, rgba(245,220,180,0.7) 0%, transparent 42%), radial-gradient(circle at 82% 72%, rgba(195,225,245,0.55) 0%, transparent 38%)',
        display: 'flex',
      }} />
      <div style={{
        position: 'absolute', top: 0, left: 0,
        width: '7px', height: '630px',
        background: '#E8571E', display: 'flex',
      }} />

      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        display: 'flex', flexDirection: 'column',
        justifyContent: 'center', padding: '0 80px 0 88px',
      }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '36px',
        }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#E8571E', display: 'flex' }} />
          <div style={{
            fontFamily: 'Arial, sans-serif', fontSize: '15px', fontWeight: '700',
            color: '#3D3D3D', letterSpacing: '3px', display: 'flex',
          }}>
            {badge}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', marginBottom: '40px' }}>
          {lines.map((line, i) => (
            <div key={i} style={{
              fontFamily: 'Arial Black, sans-serif',
              fontSize: post ? '76px' : '88px',
              fontWeight: '900',
              color: i === accentLine ? '#E8571E' : '#1A1A1A',
              lineHeight: '1.0', display: 'flex',
            }}>
              {line}
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <div style={{
            fontFamily: 'Arial, sans-serif', fontSize: '22px',
            color: '#6B6B6B', display: 'flex',
          }}>
            {subinfo}
          </div>
          <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#C0B4A4', display: 'flex' }} />
          <div style={{
            fontFamily: 'Arial, sans-serif', fontSize: '22px',
            fontWeight: '700', color: '#E8571E', display: 'flex',
          }}>
            {footer}
          </div>
        </div>
      </div>

      <div style={{
        position: 'absolute', right: '-20px', top: '50%',
        transform: 'translateY(-50%)',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        width: '320px', height: '320px',
      }}>
        <div style={{
          position: 'absolute', width: '300px', height: '300px',
          borderRadius: '50%', border: '2px solid rgba(232,87,30,0.12)', display: 'flex',
        }} />
        <div style={{
          position: 'absolute', width: '220px', height: '220px',
          borderRadius: '50%', border: '2px solid rgba(232,87,30,0.10)', display: 'flex',
        }} />
        <div style={{
          position: 'absolute', width: '130px', height: '130px',
          borderRadius: '50%', background: 'rgba(232,87,30,0.07)', display: 'flex',
        }} />
        <div style={{
          fontFamily: 'Arial Black, sans-serif', fontSize: '64px',
          fontWeight: '900', color: '#E8571E', opacity: 0.18,
          lineHeight: 1, display: 'flex',
        }}>SW</div>
        <div style={{
          fontFamily: 'Arial Black, sans-serif', fontSize: '28px',
          fontWeight: '900', color: '#2BA8E0', opacity: 0.22,
          marginTop: '-8px', display: 'flex',
        }}>Timbó</div>
      </div>
    </div>,
    { width: 1200, height: 630 }
  );
}
