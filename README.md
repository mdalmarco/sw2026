# Startup Weekend Timbó 2026

**🔗 [swtimbo.com.br](https://www.swtimbo.com.br)**

Site oficial do Techstars Startup Weekend Timbó — 2ª edição.
54 horas para tirar uma ideia do papel e descobrir do que você é capaz.

📅 **14 a 16 de agosto de 2026**
📍 **CETISA Unidade Centro** · Av. Getúlio Vargas, 222 · Timbó, SC
🎟️ **[Inscreva-se via Sympla](https://www.sympla.com.br/evento/techstars-startup-weekend-timbo-2026/3403386)**

---

## Stack

- **React 18** + TypeScript
- **Vite 5** (build + dev)
- **Tailwind CSS 3** (design system customizado)
- **React Router 6** (rotas SPA — home + blog)
- **Vercel** (deploy, edge functions, domínio)
- **@vercel/og** (imagem OG server-side para WhatsApp/Telegram)

## Estrutura

```
sw2026/
├── api/
│   └── og.tsx                  # Edge Function — gera imagem OG 1200×630
├── public/
│   ├── images/                 # Logos, mentores, fotos, blog
│   │   └── sponsors/           # Logos de patrocinadores (global/estadual/local)
│   ├── robots.txt
│   ├── sitemap.xml
│   └── google564f...html       # Google Search Console verification
├── src/
│   ├── main.tsx                # Entry point + BrowserRouter
│   ├── App.tsx                 # Routes: / (Home) + /blog/:slug
│   ├── data/
│   │   └── content.ts          # Todo o conteúdo centralizado
│   ├── components/
│   │   ├── Nav.tsx             # Navbar com logo oficial SW Timbó
│   │   ├── Hero.tsx            # Hero com headline + contador dinâmico
│   │   ├── AureaGlow.tsx       # Efeito gradiente que segue o cursor
│   │   ├── SectionHeader.tsx   # Header reutilizável de seções
│   │   ├── Sections1.tsx       # ActivityStrip, WhatIs, HowItWorks
│   │   ├── Sections2.tsx       # QuoteBreak, ForWho, Vibe
│   │   ├── Sections3.tsx       # Blog, Takeaways, Mentors
│   │   ├── Sections4.tsx       # Venue, Past, Pricing
│   │   └── Sections5.tsx       # Sponsors, FAQ, FinalCTA, Footer
│   └── pages/
│       └── BlogPost.tsx        # Página de post individual (/blog/:slug)
├── index.html                  # Meta tags, OG, Schema.org, canonical
├── tailwind.config.js          # Paleta customizada (orange, blue, paper, ink)
├── vercel.json                 # Rewrites SPA + headers
└── package.json
```

## Design System

| Token | Valor | Uso |
|-------|-------|-----|
| `orange` | `#E8571E` | CTAs, destaques, ação |
| `orange-dark` | `#C8430F` | Hover dos botões |
| `blue` | `#2BA8E0` | Badges, acentos secundários |
| `ink` | `#1A1A1A` | Texto principal |
| `ink-soft` | `#3D3D3D` | Texto secundário |
| `ink-muted` | `#6B6B6B` | Texto de suporte |
| `paper` | `#FAFAF7` | Fundo base (branco quente) |
| `paper-warm` | `#F4EEE8` | Seções alternadas (bege) |
| **Display** | Archivo | Headlines, labels, CTAs |
| **Body** | Source Serif 4 | Textos corridos |

## SEO & Discoverability

- **Schema.org**: Event (com offers, performers, image), FAQPage (12 perguntas), Article (3 posts)
- **Open Graph**: Imagem server-side via `/api/og` (Edge Function @vercel/og)
- **Sitemap**: 4 URLs (home + 3 posts de blog)
- **Canonical**: `https://www.swtimbo.com.br/`
- **Blog indexável**: Rotas `/blog/:slug` com breadcrumb, interlinkagem e CTA
- **Google Search Console**: Verificado e sitemap enviado

## Blog

| Slug | Título |
|------|--------|
| `/blog/o-que-levar-na-mochila` | O que levar (e o que não levar) na sua mochila |
| `/blog/cheguei-sem-ideia` | "Cheguei sem ideia": 3 histórias reais |
| `/blog/pitch-60-segundos` | Como funciona o pitch de 60 segundos |

## Patrocinadores

**Globais**: Google for Startups, Deel, Mercury, HSBC Innovation Banking, Brex
**Estaduais**: FAPESC, ACATE, Startup SC, Senior, Magazord, Dati, Questum, KLAB, Notion, Investidores.vc
**Locais**: Conecta AMVE Timbó, CIB · Gene Conecta, ACATE Blusoft · Vale Europeu, CETISA

## Dev

```bash
npm install
npm run dev      # localhost:5173
npm run build    # tsc + vite build → dist/
```

## Deploy

Push para `main` → Vercel build automático → `swtimbo.com.br`

---

Organização: **Techstars Startup Weekend Timbó**
Contato: swtimbo@gmail.com
