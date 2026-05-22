import { ImageResponse } from '@vercel/og';

export const config = { runtime: 'edge' };

export default function handler() {
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
      {/* Gradiente atmosférico — igual ao Hero */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(circle at 18% 28%, rgba(245,220,180,0.7) 0%, transparent 42%), radial-gradient(circle at 82% 72%, rgba(195,225,245,0.55) 0%, transparent 38%)',
        display: 'flex',
      }} />

      {/* Barra laranja esquerda */}
      <div style={{
        position: 'absolute', top: 0, left: 0,
        width: '7px', height: '630px',
        background: '#E8571E',
        display: 'flex',
      }} />

      {/* Conteúdo principal */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 80px 0 88px',
      }}>

        {/* Badge topo */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '36px',
        }}>
          <div style={{
            width: '8px', height: '8px', borderRadius: '50%',
            background: '#E8571E',
            display: 'flex',
          }} />
          <div style={{
            fontFamily: 'Arial Narrow, Arial, sans-serif',
            fontSize: '15px',
            fontWeight: '700',
            color: '#3D3D3D',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            display: 'flex',
          }}>
            TECHSTARS STARTUP WEEKEND
          </div>
          <div style={{
            background: '#ECE3D8',
            borderRadius: '4px',
            padding: '4px 12px',
            fontFamily: 'Arial, sans-serif',
            fontSize: '13px',
            fontWeight: '700',
            color: '#6B6B6B',
            letterSpacing: '1px',
            display: 'flex',
          }}>
            SW TIMBÓ · 2ª EDIÇÃO
          </div>
        </div>

        {/* Headline — 3 linhas igual ao Hero */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', marginBottom: '40px' }}>
          <div style={{
            fontFamily: 'Arial Black, Arial, sans-serif',
            fontSize: '88px',
            fontWeight: '900',
            color: '#1A1A1A',
            lineHeight: '1.0',
            display: 'flex',
          }}>
            54 horas para
          </div>
          <div style={{
            fontFamily: 'Arial Black, Arial, sans-serif',
            fontSize: '88px',
            fontWeight: '900',
            color: '#E8571E',
            lineHeight: '1.0',
            display: 'flex',
          }}>
            tirar uma ideia
          </div>
          <div style={{
            fontFamily: 'Arial Black, Arial, sans-serif',
            fontSize: '88px',
            fontWeight: '900',
            color: '#1A1A1A',
            lineHeight: '1.0',
            display: 'flex',
          }}>
            do papel.
          </div>
        </div>

        {/* Rodapé — data + local + URL */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <div style={{
            fontFamily: 'Arial, sans-serif',
            fontSize: '22px',
            fontWeight: '700',
            color: '#3D3D3D',
            display: 'flex',
          }}>
            14 — 16 ago 2026
          </div>
          <div style={{
            width: '4px', height: '4px', borderRadius: '50%',
            background: '#E8571E', display: 'flex',
          }} />
          <div style={{
            fontFamily: 'Arial, sans-serif',
            fontSize: '22px',
            color: '#6B6B6B',
            display: 'flex',
          }}>
            CETISA · Timbó, SC
          </div>
          <div style={{
            width: '4px', height: '4px', borderRadius: '50%',
            background: '#C0B4A4', display: 'flex',
          }} />
          <div style={{
            fontFamily: 'Arial, sans-serif',
            fontSize: '22px',
            fontWeight: '700',
            color: '#E8571E',
            display: 'flex',
          }}>
            swtimbo.com.br
          </div>
        </div>
      </div>

      {/* Elemento decorativo direito — círculos SW/Timbó */}
      <div style={{
        position: 'absolute',
        right: '-20px',
        top: '50%',
        transform: 'translateY(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '320px',
        height: '320px',
      }}>
        <div style={{
          position: 'absolute',
          width: '300px', height: '300px',
          borderRadius: '50%',
          border: '2px solid rgba(232,87,30,0.12)',
          display: 'flex',
        }} />
        <div style={{
          position: 'absolute',
          width: '220px', height: '220px',
          borderRadius: '50%',
          border: '2px solid rgba(232,87,30,0.10)',
          display: 'flex',
        }} />
        <div style={{
          position: 'absolute',
          width: '130px', height: '130px',
          borderRadius: '50%',
          background: 'rgba(232,87,30,0.07)',
          display: 'flex',
        }} />
        <div style={{
          fontFamily: 'Arial Black, sans-serif',
          fontSize: '64px',
          fontWeight: '900',
          color: '#E8571E',
          opacity: 0.18,
          lineHeight: 1,
          display: 'flex',
        }}>SW</div>
        <div style={{
          fontFamily: 'Arial Black, sans-serif',
          fontSize: '28px',
          fontWeight: '900',
          color: '#2BA8E0',
          opacity: 0.22,
          marginTop: '-8px',
          display: 'flex',
        }}>Timbó</div>
      </div>
    </div>,
    { width: 1200, height: 630 }
  );
}
