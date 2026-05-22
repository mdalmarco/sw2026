import { NextRequest, NextResponse } from 'next/server';

const BOT_AGENTS = [
  'whatsapp', 'telegrambot', 'twitterbot', 'facebookexternalhit',
  'linkedinbot', 'slackbot', 'discordbot', 'googlebot', 'bingbot',
  'applebot', 'pinterest', 'vkshare', 'w3c_validator',
];

const OG_HTML = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Startup Weekend Timbó 2026 · 54 horas para tirar uma ideia do papel</title>
  <meta name="description" content="14 a 16 de agosto · Tire uma ideia do papel em um fim de semana. Empreender na prática, no Vale do Itajaí." />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Startup Weekend Timbó" />
  <meta property="og:title" content="Startup Weekend Timbó 2026 · 54 horas para tirar uma ideia do papel" />
  <meta property="og:description" content="14 a 16 de agosto · CETISA · Timbó, SC · Empreendedorismo na prática no Vale do Itajaí." />
  <meta property="og:image" content="https://sw2026-seven.vercel.app/images/og_image.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:type" content="image/png" />
  <meta property="og:url" content="https://sw2026-seven.vercel.app/" />
  <meta property="og:locale" content="pt_BR" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Startup Weekend Timbó 2026" />
  <meta name="twitter:description" content="54 horas para tirar uma ideia do papel · 14 a 16 de agosto · Timbó, SC" />
  <meta name="twitter:image" content="https://sw2026-seven.vercel.app/images/og_image.png" />
</head>
<body>
  <h1>Startup Weekend Timbó 2026</h1>
  <p>54 horas para tirar uma ideia do papel e descobrir do que você é capaz.</p>
  <p>14 a 16 de agosto · CETISA · Timbó, SC</p>
  <a href="https://sw2026-seven.vercel.app/">Acessar o site</a>
</body>
</html>`;

export function middleware(request: NextRequest) {
  const ua = (request.headers.get('user-agent') || '').toLowerCase();
  const isBot = BOT_AGENTS.some((bot) => ua.includes(bot));

  if (isBot) {
    return new NextResponse(OG_HTML, {
      status: 200,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/:path*'],
};
