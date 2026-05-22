import { ImageResponse } from '@vercel/og';

export const config = { runtime: 'edge' };

export default function handler() {
  return new ImageResponse(
    <div
      style={{
        width: '1200px',
        height: '630px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '72px 80px',
        background: '#FAFAF7',
        position: 'relative',
        fontFamily: 'Arial Black, sans-serif',
      }}
    >
      {/* Gradientes de fundo */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        background: 'radial-gradient(circle at 15% 25%, #F5ECD8 0%, transparent 45%), radial-gradient(circle at 85% 75%, #D8EAF5 0%, transparent 40%)',
      }} />

      {/* Barra laranja esquerda */}
      <div style={{
        position: 'absolute', top: 0, left: 0, width: '8px', height: '630px',
        background: '#E8571E',
      }} />

      {/* Badge */}
      <div style={{
        position: 'absolute', top: '60px', left: '80px',
        background: '#E8571E', borderRadius: '6px',
        padding: '8px 20px',
        fontSize: '14px', fontWeight: '900', color: 'white', letterSpacing: '2px',
      }}>
        TECHSTARS · 14–16 AGO 2026
      </div>

      {/* Headline */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '32px' }}>
        <div style={{ fontSize: '80px', fontWeight: '900', color: '#1A1A1A', lineHeight: 1 }}>
          54 horas para
        </div>
        <div style={{ fontSize: '80px', fontWeight: '900', color: '#E8571E', lineHeight: 1 }}>
          tirar uma ideia
        </div>
        <div style={{ fontSize: '80px', fontWeight: '900', color: '#1A1A1A', lineHeight: 1 }}>
          do papel.
        </div>
      </div>

      {/* Subinfo */}
      <div style={{
        fontSize: '26px', color: '#6B6B6B',
        fontFamily: 'Arial, sans-serif', fontWeight: '400',
        marginBottom: '24px',
      }}>
        CETISA · Timbó, SC · Vale do Itajaí
      </div>

      {/* Linha + URL */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <div style={{ width: '48px', height: '3px', background: '#E8571E' }} />
        <div style={{ fontSize: '20px', color: '#3D3D3D', fontWeight: '700', fontFamily: 'Arial, sans-serif' }}>
          swtimbo.com.br
        </div>
      </div>

      {/* SW mark direita */}
      <div style={{
        position: 'absolute', right: '80px', top: '50%',
        transform: 'translateY(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
      }}>
        <div style={{ fontSize: '120px', fontWeight: '900', color: '#E8571E', opacity: 0.12, lineHeight: 1 }}>SW</div>
        <div style={{ fontSize: '48px', fontWeight: '900', color: '#2BA8E0', opacity: 0.18, marginTop: '-16px' }}>Timbó</div>
      </div>
    </div>,
    { width: 1200, height: 630 }
  );
}
