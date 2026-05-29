import type { VercelRequest, VercelResponse } from '@vercel/node';

const POSTS: Record<string, { title: string; excerpt: string; meta: string; body: string[] }> = {
  'o-que-levar-na-mochila': {
    title: 'O que levar (e o que n\u00e3o levar) na sua mochila para o Startup Weekend',
    excerpt: 'Checklist pr\u00e1tico para o Startup Weekend Timb\u00f3 2026.',
    meta: 'Como se preparar \u00b7 6 min',
    body: [
      'O Startup Weekend dura 54 horas \u2014 da sexta \u00e0 noite at\u00e9 o domingo \u00e0 noite.',
      'Carregador de celular e cabo, fones de ouvido, bloco de notas, roupa confort\u00e1vel.',
      'Todas as refei\u00e7\u00f5es dos tr\u00eas dias est\u00e3o inclu\u00eddas na inscri\u00e7\u00e3o.',
    ],
  },
  'cheguei-sem-ideia': {
    title: '"Cheguei sem ideia": 3 hist\u00f3rias de quem participou sem saber o que esperar',
    excerpt: 'Participantes da edi\u00e7\u00e3o 2025 que vieram sem ideia e sa\u00edram com um produto.',
    meta: 'Hist\u00f3rias \u00b7 8 min',
    body: [
      'Sexta-feira, 19h30, CETISA. Quarenta e poucos desconhecidos sentados em cadeiras.',
      'A maioria n\u00e3o se conhece. A maioria n\u00e3o trouxe ideia nenhuma.',
      'As tr\u00eas hist\u00f3rias t\u00eam algo em comum: disposi\u00e7\u00e3o foi suficiente.',
    ],
  },
  'pitch-60-segundos': {
    title: 'Como funciona o pitch de 60 segundos da sexta-feira',
    excerpt: 'A regra mais importante do Startup Weekend explicada com exemplos reais.',
    meta: 'Sobre o evento \u00b7 5 min',
    body: [
      'Sexta-feira, 20h15. O facilitador pede que quem tiver uma ideia levante a m\u00e3o.',
      'Cada um vai at\u00e9 a frente, pega o microfone e tem 60 segundos.',
      'Os pitches que recebem mais votos seguem uma estrutura: problema, solu\u00e7\u00e3o, convite.',
    ],
  },
  'preciso-ter-uma-ideia-startup-weekend': {
    title: 'Preciso ter uma ideia pronta para participar do Startup Weekend?',
    excerpt: 'N\u00e3o. E talvez seja melhor chegar sem uma. Entenda por qu\u00ea.',
    meta: 'Mitos \u00b7 5 min',
    body: [
      'A resposta curta: n\u00e3o. A resposta longa: chegar sem ideia pode ser uma vantagem.',
      'As melhores equipes costumam ser formadas por pessoas que escolheram uma ideia que n\u00e3o era delas.',
      'Ter ideia \u00e9 f\u00e1cil. Executar \u00e9 o que importa.',
    ],
  },
  'como-nasce-uma-startup-em-54-horas': {
    title: 'Como nasce uma startup em 54 horas',
    excerpt: 'O di\u00e1rio hora a hora de um time no Startup Weekend.',
    meta: 'Experi\u00eancia \u00b7 7 min',
    body: [
      'Sexta, 19h \u2014 Check-in. Crach\u00e1, camiseta, nervosismo.',
      'S\u00e1bado, 09h \u2014 O time se re\u00fane. Post-its na parede. Primeira discuss\u00e3o s\u00e9ria.',
      'Domingo, 16h \u2014 Pitch final. Tr\u00eas minutos pra contar tudo que constru\u00edram.',
    ],
  },
  'coisas-que-ninguem-te-conta-startup-weekend': {
    title: '5 coisas que ningu\u00e9m te conta sobre o Startup Weekend',
    excerpt: 'O que acontece nos bastidores de 54 horas de press\u00e3o criativa.',
    meta: 'Bastidores \u00b7 6 min',
    body: [
      'Voc\u00ea vai dormir pouco. E vai adorar.',
      'O time que vence nem sempre \u00e9 o que tem a melhor ideia.',
      'O melhor momento \u00e9 a madrugada de s\u00e1bado.',
    ],
  },
  'ecossistema-startups-vale-do-itajai': {
    title: 'O ecossistema de startups do Vale do Itaja\u00ed',
    excerpt: 'Santa Catarina \u00e9 o segundo estado com mais startups no Brasil. O Vale do Itaja\u00ed \u00e9 parte disso.',
    meta: 'Ecossistema \u00b7 7 min',
    body: [
      'Santa Catarina tem o segundo maior n\u00famero de startups do Brasil.',
      'O Vale do Itaja\u00ed concentra empresas de tecnologia que faturam milh\u00f5es.',
      'O Startup Weekend \u00e9 a fa\u00edsca que conecta quem quer empreender ao ecossistema.',
    ],
  },
  'o-que-acontece-depois-startup-weekend': {
    title: 'O que acontece depois do Startup Weekend',
    excerpt: 'O evento termina domingo. O que vem depois depende de voc\u00ea.',
    meta: 'P\u00f3s-evento \u00b7 6 min',
    body: [
      'O Startup Weekend termina no domingo \u00e0 noite. Mas o efeito dura mais.',
      'Esse inc\u00f4modo leva gente a voltar na edi\u00e7\u00e3o seguinte, procurar o ecossistema local, come\u00e7ar projetos.',
      'A segunda edi\u00e7\u00e3o do Startup Weekend Timb\u00f3 acontece de 14 a 16 de agosto de 2026, na CETISA.',
    ],
  },
  'por-que-ir-se-nunca-empreendeu': {
    title: 'Por que ir ao Startup Weekend se voc\u00ea nunca empreendeu',
    excerpt: 'Voc\u00ea n\u00e3o precisa de ideia, experi\u00eancia ou saber programar. Precisa de 54 horas livres e vontade de construir.',
    meta: 'Pra quem \u00e9 \u00b7 7 min',
    body: [
      'Tem uma frase que aparece em quase todo Startup Weekend do mundo: "eu vim sem ideia nenhuma e sa\u00ed com um time e um produto."',
      'O Startup Weekend n\u00e3o \u00e9 um evento pra quem j\u00e1 empreende. \u00c9 um evento que cria empreendedores.',
      'Na sexta \u00e0 noite, qualquer pessoa sobe no palco e apresenta uma ideia em 60 segundos. O grupo vota. Os times se formam ali, na hora.',
      'Quem participa sai com um pitch treinado, uma rede de contatos, a experi\u00eancia de ter constru\u00eddo algo do zero sob press\u00e3o.',
      'Na edi\u00e7\u00e3o de 2025 em Timb\u00f3, 34 pessoas participaram. Surgiram 28 ideias, 7 chegaram ao pitch final.',
      'Startup Weekend n\u00e3o \u00e9 hackathon. Os times precisam de gente que saiba conversar com clientes, organizar tarefas, desenhar telas.',
      '54 horas pra tirar uma ideia do papel e descobrir do que voc\u00ea \u00e9 capaz.',
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

  const bodyHtml = post.body.map(p => '<p>' + p + '</p>').join('\n    ');

  const allLinks = Object.entries(POSTS)
    .filter(([s]) => s !== slug)
    .map(([s, p]) => `<li><a href="https://www.swtimbo.com.br/blog/${s}">${p.title}</a></li>`)
    .join('\n      ');

  const html = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>${post.title} \u00b7 Startup Weekend Timb\u00f3 2026</title>
  <meta name="description" content="${post.excerpt}"/>
  <link rel="canonical" href="https://www.swtimbo.com.br/blog/${slug}"/>
  <meta property="og:type" content="article"/>
  <meta property="og:title" content="${post.title} \u00b7 Startup Weekend Timb\u00f3"/>
  <meta property="og:description" content="${post.excerpt}"/>
  <meta property="og:image" content="https://www.swtimbo.com.br/api/og?slug=${slug}"/>
  <meta property="og:url" content="https://www.swtimbo.com.br/blog/${slug}"/>
  <meta property="og:locale" content="pt_BR"/>
  <meta name="twitter:card" content="summary_large_image"/>
  <meta name="twitter:title" content="${post.title}"/>
  <meta name="twitter:image" content="https://www.swtimbo.com.br/api/og?slug=${slug}"/>
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "${post.title}",
    "description": "${post.excerpt}",
    "url": "https://www.swtimbo.com.br/blog/${slug}",
    "author": { "@type": "Organization", "name": "Startup Weekend Timb\u00f3" },
    "publisher": { "@type": "Organization", "name": "Techstars" }
  }
  </script>
</head>
<body>
  <header>
    <h1><a href="https://www.swtimbo.com.br/">Startup Weekend Timb\u00f3 2026</a></h1>
    <p>14\u00b715\u00b716 de agosto \u00b7 CETISA \u00b7 Timb\u00f3 SC</p>
  </header>
  <article>
    <p>${post.meta}</p>
    <h2>${post.title}</h2>
    <p><em>${post.excerpt}</em></p>
    ${bodyHtml}
  </article>
  <nav>
    <h3>Mais artigos</h3>
    <ul>
      ${allLinks}
    </ul>
  </nav>
  <footer>
    <p><a href="https://www.swtimbo.com.br/">swtimbo.com.br</a> \u00b7 54 horas pra tirar uma ideia do papel e descobrir do que voc\u00ea \u00e9 capaz.</p>
  </footer>
</body>
</html>`;

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Cache-Control', 'public, max-age=3600');
  res.status(200).send(html);
}
