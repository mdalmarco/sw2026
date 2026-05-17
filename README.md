# Startup Weekend Timbó 2026 — Site

Site oficial do **Startup Weekend Timbó 2026** (14–16 de agosto, CETISA Unidade Centro, Timbó/SC).

Tagline: *"54 horas para tirar uma ideia do papel e descobrir do que você é capaz."*

## Stack

- **React 18** + **TypeScript** — UI e tipagem estática
- **Vite 5** — build tool e dev server
- **Tailwind CSS 3** — estilização por utilitários
- **Vercel** — deploy contínuo (auto-deploy em push para `main`)

## Rodar localmente

```bash
npm install
npm run dev      # servidor de desenvolvimento (http://localhost:5173)
npm run build    # build de produção (gera /dist)
npm run preview  # preview do build de produção
```

## Estrutura

```
sw-timbo-site/
├── index.html              # HTML raiz: SEO, OG tags, schema.org Event
├── public/
│   ├── favicon.svg
│   └── images/             # fotos da edição 2025, mentores, logos
├── src/
│   ├── main.tsx            # entry point
│   ├── App.tsx             # monta todas as seções
│   ├── index.css           # Tailwind + estilos globais + efeito áurea
│   ├── data/
│   │   └── content.ts      # ⭐ TODO o conteúdo do site centralizado aqui
│   └── components/
│       ├── AureaGlow.tsx   # brilho que segue o cursor
│       ├── Nav.tsx
│       ├── Hero.tsx
│       ├── SectionHeader.tsx
│       └── Sections1–5.tsx # seções agrupadas por proximidade
├── tailwind.config.js      # design tokens (cores, fontes, animações)
└── vercel.json             # config de deploy
```

## Editar conteúdo

**Quase tudo é editável em `src/data/content.ts`** sem tocar nos componentes:
mentores, depoimentos, cronograma, FAQ, patrocinadores, preços, datas.

## Pendências de conteúdo

- [ ] Foto da **Siene Pacher** (card de depoimento usa placeholder de iniciais)
- [ ] Logos dos patrocinadores **Globais** e **Estaduais** (slots "Em breve")
- [ ] Contador de dias (`EVENT.daysUntil`) — hoje fixo, pode virar cálculo dinâmico
- [ ] Imagens dos posts do blog
- [ ] Cronograma de sábado e domingo (hoje só sexta está completa)
- [ ] Link real de inscrição (Sympla)

## Design

- **Cores:** laranja `#E8571E` + azul `#2BA8E0` sobre fundo claro `#FAFAF7`
- **Tipografia:** Archivo (display) + Source Serif 4 (corpo)
- **Acessibilidade:** respeita `prefers-reduced-motion`, navegação por tab, ARIA labels
