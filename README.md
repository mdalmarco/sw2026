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
- **@vercel/og** (imagem OG dinâmica server-side por página)
- **@vercel/analytics** (page views + web vitals)

## Estrutura

```
sw2026/
├── api/
│   ├── og.tsx                  # Edge Function — OG image dinâmica (/api/og?slug=xxx)
│   └── prerender.ts            # HTML estático para bots/crawlers
├── public/
│   ├── images/                 # Logos, mentores, fotos, blog (WebP)
│   │   └── sponsors/           # Logos de patrocinadores (global/estadual/local)
│   ├── robots.txt
│   ├── sitemap.xml             # 9 URLs indexáveis
│   └── google564f...html       # Google Search Console verification
├── src/
│   ├── main.tsx                # Entry point + BrowserRouter
│   ├── App.tsx                 # Routes: / (Home) + /blog/:slug + Analytics
│   ├── data/
│   │   └── content.ts          # Todo o conteúdo centralizado + related posts
│   ├── components/
│   │   ├── Nav.tsx             # Navbar com logo oficial SW Timbó (WebP)
│   │   ├── Hero.tsx            # Hero com headline + contador dinâmico
│   │   ├── AureaGlow.tsx       # Efeito gradiente que segue o cursor
│   │   ├── SectionHeader.tsx   # Header reutilizável de seções
│   │   ├── Sections1.tsx       # ActivityStrip, WhatIs, HowItWorks
│   │   ├── Sections2.tsx       # QuoteBreak, ForWho, Vibe
│   │   ├── Sections3.tsx       # Blog (cards com Link), Takeaways, Mentors
│   │   ├── Sections4.tsx       # Venue, Past, Pricing
│   │   └── Sections5.tsx       # Press, Sponsors, FAQ, FinalCTA, Footer
│   └── pages/
│       └── BlogPost.tsx        # Post individual com interlinkagem curada
├── .claude/
│   └── skills/
│       ├── humanizer/          # Skill: detecta e remove padrões de escrita IA
│       └── u-fe-validate/      # Skill: auditoria frontend (Siegard)
├── index.html                  # Meta tags, OG, Schema.org (Event+FAQ+Article), canonical
├── tailwind.config.js          # Paleta customizada (orange, blue, paper, ink)
├── vercel.json                 # Rewrites SPA + cache headers + CORS
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

- **Schema.org**: Event (offers, performers, image, capacity), FAQPage (12 perguntas), Article (8 posts)
- **Open Graph**: Imagem dinâmica por página via `/api/og?slug=xxx` (Edge Function)
- **Sitemap**: 9 URLs (home + 8 posts de blog)
- **Canonical**: Dinâmico por página (home = `/`, posts = `/blog/:slug`)
- **Blog indexável**: Rotas `/blog/:slug` com breadcrumb, interlinkagem curada e CTA
- **Interlinkagem**: 2 links curados por post ("Próximo passo" + "Leia também") baseados em jornada do leitor
- **Prerender API**: HTML estático para bots que não executam JavaScript
- **Noscript links**: 8 links no `<noscript>` para crawlers
- **Google Search Console**: Verificado (meta tag) + sitemap enviado
- **robots.txt**: Permite tudo + referência ao sitemap

## Performance

- **Async font loading**: Google Fonts não bloqueia renderização (media="print" + onload swap)
- **WebP**: Todas as logos e fotos convertidas (-538KB total, ~65% menor)
- **Cache headers**: Assets JS/CSS imutáveis 1 ano, imagens 1 semana
- **Lazy loading**: Todas as imagens abaixo da dobra
- **PageSpeed**: Desktop 99/97/100/100 · Mobile 88/97/100/100

## Blog (8 posts)

Todos os posts passaram pelo **Humanizer** (remoção de padrões de escrita IA).

| Slug | Título | Cluster |
|------|--------|---------|
| `/blog/o-que-levar-na-mochila` | O que levar na mochila para o Startup Weekend | Preparação |
| `/blog/cheguei-sem-ideia` | "Cheguei sem ideia": como funciona para quem não tem projeto | Objeções |
| `/blog/pitch-60-segundos` | Como funciona o pitch de 60 segundos | Dinâmica |
| `/blog/preciso-ter-uma-ideia-startup-weekend` | Preciso ter uma ideia pronta? | Objeções |
| `/blog/como-nasce-uma-startup-em-54-horas` | Como nasce uma startup em 54 horas | Dinâmica (hub) |
| `/blog/coisas-que-ninguem-te-conta-startup-weekend` | 5 coisas que ninguém te conta | Bastidores |
| `/blog/ecossistema-startups-vale-do-itajai` | Como está o ecossistema no Vale do Itajaí | Regional |
| `/blog/o-que-acontece-depois-startup-weekend` | O que acontece depois do Startup Weekend? | Pós-evento |

### Interlinkagem

Hub central: **"Como nasce uma startup em 54 horas"** (recebe 5 links de entrada).
Cada post tem 2 links curados: "Próximo passo" (continuação natural) e "Leia também" (aprofundamento).

## Na Mídia (8 links)

Cobertura da edição 2025: Economia SC, Instituto Gene (2x), Jornal do Médio Vale (2x), Trentina FM, Techstars, YouTube.

## Patrocinadores

**Globais**: Google for Startups, Deel, Mercury, HSBC Innovation Banking, Brex
**Estaduais**: FAPESC, ACATE, Startup SC, Senior, Magazord, Dati, Questum, KLAB, Notion, Investidores.vc
**Locais**: Conecta AMVE Timbó, CIB · Gene Conecta, ACATE Blusoft · Vale Europeu, CETISA

## Skills instaladas

| Skill | Função |
|-------|--------|
| **Humanizer** (`.claude/skills/humanizer/`) | Detecta e remove padrões de escrita IA (baseado em Wikipedia AI Cleanup) |
| **Siegard /u-fe-validate** (`.claude/skills/u-fe-validate/`) | Auditoria frontend: 25 regras, 72 checks de qualidade |

## Dev

```bash
npm install
npm run dev      # localhost:5173
npm run build    # tsc + vite build → dist/
```

## Deploy

Push para `main` → Vercel build automático → `swtimbo.com.br`

O Vercel roda 3 funções serverless além do site: `api/og.tsx` (imagem OG dinâmica), `api/prerender.ts` (HTML para crawlers) e o arquivo de verificação do Google Search Console.

---

Organização: **Techstars Startup Weekend Timbó**
Contato: swtimbo@gmail.com
