import type { VercelRequest, VercelResponse } from '@vercel/node';

const POSTS: Record<string, { title: string; excerpt: string; meta: string; body: string[] }> = {
  'o-que-levar-na-mochila': {
    title: 'O que levar (e o que não levar) na sua mochila para o Startup Weekend',
    excerpt: 'Checklist prático para o Startup Weekend Timbó 2026.',
    meta: 'Como se preparar · 6 min',
    body: [
      'O Startup Weekend dura 54 horas — da sexta à noite até o domingo à noite.',
      'Carregador de celular e cabo, fones de ouvido, bloco de notas, roupa confortável.',
      'Todas as refeições dos três dias estão incluídas na inscrição.',
    ],
  },
  'cheguei-sem-ideia': {
    title: '"Cheguei sem ideia": 3 histórias de quem participou sem saber o que esperar',
    excerpt: 'Participantes da edição 2025 que vieram sem ideia e saíram com um produto.',
    meta: 'Histórias · 8 min',
    body: [
      'Sexta-feira, 19h30, CETISA. Quarenta e poucos desconhecidos sentados em cadeiras.',
      'A maioria não se conhece. A maioria não trouxe ideia nenhuma.',
      'As três histórias têm algo em comum: disposição foi suficiente.',
    ],
  },
  'pitch-60-segundos': {
    title: 'Como funciona o pitch de 60 segundos da sexta-feira',
    excerpt: 'A regra mais importante do Startup Weekend explicada com exemplos reais.',
    meta: 'Sobre o evento · 5 min',
    body: [
      'Sexta-feira, 20h15. O facilitador pede que quem tiver uma ideia levante a mão.',
      'Cada um vai até a frente, pega o microfone e tem 60 segundos.',
      'Os pitches que recebem mais votos seguem uma estrutura: problema, solução, convite.',
    ],
  },
};

export default function handler(req: VercelRequest, res: VercelResponse) {
  const slug = req.query.slug as string;
  const post = POSTS[slug];

  if (!post) {
    res.status(404).send('Not found');
    return;
  }

  const html = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8"/>
  <title>${post.title} · Startup Weekend Timbó 2026</title>
  <meta name="description" content="${post.excerpt}"/>
  <link rel="canonical" href="https://www.swtimbo.com.br/blog/${slug}"/>
  <meta property="og:type" content="article"/>
  <meta property="og:title" content="${post.title} · Startup Weekend Timbó"/>
  <meta property="og:description" content="${post.excerpt}"/>
  <meta property="og:image" content="https://www.swtimbo.com.br/api/og?slug=${slug}"/>
  <meta property="og:url" content="https://www.swtimbo.com.br/blog/${slug}"/>
  <meta property="og:locale" content="pt_BR"/>
  <meta name="twitter:card" content="summary_large_image"/>
  <meta name="twitter:title" content="${post.title}"/>
  <meta name="twitter:image" content="https://www.swtimbo.com.br/api/og?slug=${slug}"/>
</head>
<body>
  <article>
    <p>${post.meta}</p>
    <h1>${post.title}</h1>
    ${post.body.map(p => '<p>' + p + '</p>').join('\n    ')}
    <p><a href="https://www.swtimbo.com.br/blog/${slug}">Ler artigo completo</a></p>
  </article>
  <nav>
    <a href="https://www.swtimbo.com.br/">Startup Weekend Timbó 2026</a>
    <a href="https://www.swtimbo.com.br/blog/o-que-levar-na-mochila">O que levar na mochila</a>
    <a href="https://www.swtimbo.com.br/blog/cheguei-sem-ideia">Cheguei sem ideia</a>
    <a href="https://www.swtimbo.com.br/blog/pitch-60-segundos">Pitch de 60 segundos</a>
  </nav>
</body>
</html>`;

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Cache-Control', 'public, max-age=3600');
  res.status(200).send(html);
}
