// ════════════════════════════════════════════
// DADOS CENTRAIS — SW Timbó 2026 · v3.4
// Editar conteúdo aqui sem mexer nos componentes
// ════════════════════════════════════════════

export const EVENT = {
  edition: 'SW Timbó · 2ª Edição',
  daysUntil: Math.max(
    0,
    Math.ceil(
      (new Date('2026-08-14T00:00:00-03:00').getTime() - Date.now()) /
        (1000 * 60 * 60 * 24)
    )
  ),
  dateLabel: '14 — 16 ago 2026',
  dateRange: '14 a 16 de agosto',
  venueShort: 'CETISA · Timbó · SC',
  duration: '54 horas',
  venue: {
    name: 'CETISA — Unidade Centro',
    address: 'Av. Getúlio Vargas, 222 — Centro',
    city: 'Timbó · SC · CEP 89090-040',
  },
  contact: {
    email: 'tswtimbo@gmail.com',
    people: [
      { name: 'Cíntia', phone: '(47) 99726-1174' },
      { name: 'Junior', phone: '(47) 99849-6064' },
    ],
  },
};

// ─── Estatísticas da última edição ───
export const ACTIVITY_STATS = [
  { value: '34', label: 'participantes' },
  { value: '28', label: 'ideias na sexta' },
  { value: '7', label: 'times finalistas' },
  { value: '3', label: 'projetos seguem ativos' },
];

// ─── Stats da rede global ───
export const GLOBAL_STATS = [
  { number: '150+', label: 'países onde o Startup Weekend já aconteceu' },
  { number: '+1M', label: 'pessoas já participaram globalmente' },
  { number: '70%', label: 'dos participantes nunca empreenderam antes' },
];

// ─── Timeline do hero (3 passos) ───
export const TIMELINE_STEPS = [
  {
    day: 'Sexta',
    title: 'Ideias e times',
    desc: 'Apresente sua ideia, vote nas melhores e forme seu time ao redor de uma delas.',
  },
  {
    day: 'Sábado',
    title: 'Construção e mentoria',
    desc: 'Desenvolva o produto com seu time. Mentores experientes acompanham você o dia inteiro.',
  },
  {
    day: 'Domingo',
    title: 'Pitch e jurados',
    desc: 'Apresente o produto para uma banca de jurados e receba feedback real de quem entende do mercado.',
  },
  {
    meta: 'Pra quem \u00e9 \u00b7 7 min',
    title: 'Por que ir ao Startup Weekend se voc\u00ea nunca empreendeu',
    excerpt: 'Voc\u00ea n\u00e3o precisa de ideia, experi\u00eancia ou saber programar. Precisa de 54 horas livres e vontade de construir.',
    image: '/images/blog_porque_ir.svg',
    slug: 'por-que-ir-se-nunca-empreendeu',
    related: ['cheguei-sem-ideia', 'preciso-ter-uma-ideia-startup-weekend'],
    body: [
      'Tem uma frase que aparece em quase todo Startup Weekend do mundo: "eu vim sem ideia nenhuma e sa\u00ed com um time e um produto."',
      'Parece exagero. N\u00e3o \u00e9.',
      'O Startup Weekend n\u00e3o \u00e9 um evento pra quem j\u00e1 empreende. \u00c9 um evento que cria empreendedores. A maioria dos participantes chega sem experi\u00eancia com startups, sem ideia pronta, e muitas vezes sem saber o que vai acontecer nas pr\u00f3ximas 54 horas.',
      '## O formato resolve a inseguran\u00e7a',
      'Na sexta \u00e0 noite, qualquer pessoa sobe no palco e apresenta uma ideia em 60 segundos. O grupo vota. Os times se formam ali, na hora, em torno das ideias mais votadas.',
      'Voc\u00ea pode chegar com uma ideia ou chegar sem nenhuma e se juntar a um time que te interessou. As duas op\u00e7\u00f5es funcionam igual.',
      'No s\u00e1bado, os times trabalham juntos: pesquisam, entrevistam gente, prototipam, testam. Mentores com experi\u00eancia em neg\u00f3cios, design e tecnologia circulam o tempo todo, provocando e ajudando.',
      'No domingo, cada time apresenta o que construiu para uma banca. N\u00e3o precisa ser perfeito. Precisa mostrar que o time validou um problema real e come\u00e7ou a resolver.',
      '## O que voc\u00ea leva embora mesmo sem vencer',
      'Quem participa sai com coisas que nenhum curso entrega em 54 horas. Um pitch treinado na pr\u00e1tica, uma rede de contatos com gente que pensa parecido, a experi\u00eancia de ter constru\u00eddo algo do zero sob press\u00e3o, e a clareza de saber se empreender faz sentido pra voc\u00ea.',
      'Na edi\u00e7\u00e3o de 2025 em Timb\u00f3, 34 pessoas participaram. Surgiram 28 ideias, 7 chegaram ao pitch final. O time vencedor, Ponto Seguro, construiu uma solu\u00e7\u00e3o de seguran\u00e7a p\u00fablica em menos de 3 dias.',
      'Nenhum precisou ser programador, designer ou empres\u00e1rio pra entrar. Precisaram estar l\u00e1.',
      '## Mas eu n\u00e3o sei programar',
      'Startup Weekend n\u00e3o \u00e9 hackathon. Os times precisam de gente que saiba conversar com clientes, organizar tarefas, desenhar telas, pensar em modelo de neg\u00f3cio, apresentar ideias. Se voc\u00ea faz qualquer uma dessas coisas \u2014 ou quer aprender fazendo \u2014 voc\u00ea \u00e9 o perfil.',
      '## Mas eu n\u00e3o tenho ideia',
      'Melhor ainda. As melhores equipes costumam ser formadas por pessoas que escolheram uma ideia que n\u00e3o era delas e se dedicaram a constru\u00ed-la. Ter ideia \u00e9 f\u00e1cil. Executar \u00e9 o que importa.',
      '## Mas Timb\u00f3 \u00e9 pequeno demais pra isso',
      'Santa Catarina \u00e9 o segundo estado com mais startups no Brasil. O Vale do Itaja\u00ed tem empresas de tecnologia que faturam milh\u00f5es. O ecossistema existe. O Startup Weekend \u00e9 a fa\u00edsca que ativa.',
      '## Como participar',
      'A 2\u00aa edi\u00e7\u00e3o do Startup Weekend Timb\u00f3 acontece nos dias 14, 15 e 16 de agosto de 2026, no CETISA (Av. Get\u00falio Vargas, 222, Centro, Timb\u00f3 SC). A inscri\u00e7\u00e3o inclui todas as refei\u00e7\u00f5es durante o evento, acesso a mentores, certificado Techstars e a experi\u00eancia completa de 54 horas.',
      '54 horas pra tirar uma ideia do papel e descobrir do que voc\u00ea \u00e9 capaz.',
    ],
  },
];

// ─── Programação completa dos 3 dias ───
// keyMoment: destaca visualmente os momentos decisivos
export const SCHEDULE_DAYS = [
  {
    label: 'Sexta',
    date: '14/08',
    note: 'O dia em que as ideias viram times.',
    items: [
      { time: '18h00', title: 'Credenciamento', keyMoment: false },
      { time: '19h00', title: 'Apresentação do evento e metodologia', keyMoment: false },
      { time: '19h20', title: 'Boas-vindas e oradores', keyMoment: false },
      { time: '20h00', title: 'Início dos pitches', chip: 'Você decide se sobe', keyMoment: true },
      { time: '21h30', title: 'Votação dos pitches', keyMoment: false },
      { time: '21h45', title: 'Formação dos times', chip: 'Onde o time nasce', keyMoment: true },
      { time: '22h00', title: 'Formalização das equipes', keyMoment: false },
    ],
  },
  {
    label: 'Sábado',
    date: '15/08',
    note: 'O dia de construir, validar e ajustar.',
    items: [
      { time: '08h00', title: 'Check-in e café da manhã', keyMoment: false },
      { time: '09h00', title: 'Apresentação dos mentores', keyMoment: false },
      { time: '09h30', title: 'Talk: Validação', keyMoment: false },
      { time: '10h00', title: 'Mentorias + Work', chip: 'Mão na massa', keyMoment: true },
      { time: '12h00', title: 'Almoço', keyMoment: false },
      { time: '13h00', title: 'Mentorias + Work', keyMoment: false },
      { time: '16h30', title: 'Café da tarde', keyMoment: false },
      { time: '17h00', title: 'Talk: MVP', keyMoment: false },
      { time: '19h00', title: 'Jantar', keyMoment: false },
      { time: '20h00', title: 'Encerramento do dia', keyMoment: false },
    ],
  },
  {
    label: 'Domingo',
    date: '16/08',
    note: 'O dia do pitch final diante dos jurados.',
    items: [
      { time: '09h00', title: 'Check-in e café da manhã', keyMoment: false },
      { time: '09h45', title: 'Abertura', keyMoment: false },
      { time: '10h00', title: 'Talk: Pitch', keyMoment: false },
      { time: '10h30', title: 'Mentorias + Work', keyMoment: false },
      { time: '11h30', title: 'Pré-pitch', chip: 'Último ensaio', keyMoment: true },
      { time: '12h00', title: 'Almoço', keyMoment: false },
      { time: '16h00', title: 'Entrega dos pitches', keyMoment: false },
      { time: '16h30', title: 'Café da tarde', keyMoment: false },
      { time: '17h00', title: 'Início dos pitches', chip: 'A hora da verdade', keyMoment: true },
      { time: '19h30', title: 'Encerramento e premiação', keyMoment: false },
    ],
  },
];

// ─── Perfis (Para quem é) ───
export const PROFILES = [
  'Universitário ou recém-formado curioso sobre empreender',
  'Profissional CLT pensando em uma transição',
  'Tem uma ideia que quer validar rápido',
  'Quer fazer parte da rede empreendedora do Vale',
];

// ─── Barreiras mentais ───
export const BARRIERS = [
  {
    question: '"Não tenho uma ideia pronta."',
    answer: 'Não tem problema. Na sexta, todo mundo apresenta ideias e o grupo vota nas melhores. Você escolhe em <strong>qual time entrar</strong>.',
  },
  {
    question: '"Não sou da área de tecnologia ou negócios."',
    answer: 'Os melhores times são mistos. <strong>Designer, dev, marketing, RH, vendas, obra</strong> — todos somam.',
  },
  {
    question: '"Nunca empreendi na vida."',
    answer: '<strong>70% dos participantes</strong> também nunca empreenderam. É exatamente para isso que o evento serve.',
  },
  {
    question: '"E se a ideia que eu trouxer for ruim?"',
    answer: 'Melhor descobrir em <strong>54 horas</strong> do que em 5 anos. O SW é o lugar mais barato e rápido de errar — e aprender.',
  },
];

// ─── Bloco intraempreendedor ───
export const INTRA = {
  eyebrow: 'E também para quem quer crescer onde já está',
  title: 'Empreender também serve para quem não quer abrir empresa.',
  intro: 'Se você quer:',
  items: [
    'Transformar ideias em projetos reais',
    'Tomar decisões com mais autonomia',
    'Trabalhar melhor em equipe',
    'Desenvolver visão de negócio',
  ],
  closer: 'Empreender é <em>aprender a construir.</em>',
};

// ─── Mosaico "Como é estar lá" ───
export const VIBE_PHOTOS: { src: string; alt: string; caption: string; placeholder?: string }[] = [
  { src: '/images/Foto_Geral.jpeg', alt: 'Foto geral da edição 2025 - todos os participantes', caption: 'Domingo · 21h · turma da edição 2025' },
  { src: '/images/Foto_pitches.jpg', alt: 'Apresentação de pitches na sexta-feira', caption: 'Sexta · 60s pitches' },
  { src: '/images/Equipe_Participante.jpg', alt: 'Equipe de participantes da edição 2025', caption: 'Time · construindo juntos' },
  { src: '/images/Mentores.jpg', alt: 'Time de mentores no palco', caption: 'Mentores · acompanhamento' },
  { src: '/images/Grupo_Trabalhando.jpg', alt: 'Grupo trabalhando ao redor das mesas', caption: 'Sábado · validação e construção' },
  { src: '/images/Plateia_Sabado.jpg', alt: 'Plateia acompanhando uma talk durante o evento', caption: 'Sábado · talks e aprendizado' },
  { src: '/images/Premiacao.jpg', alt: 'Time premiado no palco ao fim da edição 2025', caption: 'Domingo · premiação dos finalistas' },
];

// ─── Blog ───
export const BLOG_POSTS = [
  {
    meta: 'Como se preparar · 6 min',
    title: 'O que levar (e o que não levar) na sua mochila para o Startup Weekend',
    excerpt: 'Checklist prático para o Startup Weekend Timbó 2026. O que levar, o que não levar, e o que o evento já fornece.',
    image: '/images/blog_mochila.svg',
    slug: 'o-que-levar-na-mochila',
    related: ['pitch-60-segundos', 'coisas-que-ninguem-te-conta-startup-weekend'],
    body: [
      'O Startup Weekend dura 54 horas. Da sexta à noite até o domingo à noite. Não parece muito, mas o tempo some rápido quando você está construindo um produto com gente que conheceu há poucas horas.',
      'Na edição de 2025 no Centro Empresarial de Timbó, quem chegou com o básico resolvido conseguiu focar no que importava. Quem ficou procurando carregador ou agasalho perdeu tempo que não volta.',
      '## O essencial',
      'Carregador de celular e cabo. Seu notebook vai estar plugado, mas o celular é ferramenta de pesquisa, comunicação com o time e apresentação de protótipos. Leve um carregador portátil se tiver.',
      'Fones de ouvido. O ambiente fica barulhento, especialmente no sábado quando todos os times estão trabalhando ao mesmo tempo. Fones ajudam quando você precisa se concentrar por 15 minutos.',
      'Bloco de notas. Anotar à mão durante os pitches de sexta-feira é mais rápido do que digitar, e suas melhores observações vão aparecer nesse momento.',
      'Roupa confortável. Você vai ficar sentado, em pé, apresentando, e provavelmente vai dormir pouco. Traga agasalho, porque agosto no Vale do Itajaí é frio e espaços com ar-condicionado são piores ainda.',
      '## O que não precisa trazer',
      'Slides prontos. Ninguém sabe qual ideia vai ser escolhida na sexta. O pitch de domingo nasce do que o time construiu no sábado. Material pronto pode te travar numa direção que o time não vai seguir.',
      'A ideia perfeita. As melhores ideias do evento costumam nascer da combinação de perfis diferentes ao redor de um problema concreto.',
      'Ansiedade sobre não saber programar. Times precisam de gente de negócios, design, vendas e visão de cliente tanto quanto de desenvolvedores. Na edição de 2025, os 7 projetos tinham perfis variados.',
      '## O que o evento já fornece',
      'Todas as refeições dos três dias estão incluídas na inscrição: janta na sexta, café, almoço e lanche no sábado e no domingo. Mentores disponíveis ao longo do sábado para feedback direto com cada time.',
      'Leve o básico e apareça. O evento fornece o resto.',
    ],
  },
  {
    meta: 'Histórias · 8 min',
    title: '"Cheguei sem ideia": como funciona para quem não tem projeto',
    excerpt: 'A maioria dos participantes chega sem ideia. Na edição de 2025, 34 pessoas participaram e 7 projetos nasceram de combinações que ninguém previu.',
    image: '/images/blog_historias.svg',
    slug: 'cheguei-sem-ideia',
    related: ['preciso-ter-uma-ideia-startup-weekend', 'por-que-ir-se-nunca-empreendeu'],
    body: [
      'A pergunta mais comum antes de um Startup Weekend é "preciso ter uma ideia?" A resposta é não. Na edição de 2025 em Timbó, 34 participantes se inscreveram. 28 ideias foram pitchadas na sexta à noite. Mas os 7 projetos que nasceram foram construídos por times mistos, incluindo muita gente que não pitchou nada.',
      '## O que acontece se você não tem ideia',
      'Sexta à noite, no Centro Empresarial de Timbó, depois dos pitches de 60 segundos, o grupo vota. As ideias mais votadas viram projetos. A partir daí, cada pessoa escolhe em qual time quer entrar. Quem não pitchou entra num time e contribui com o que sabe: design, vendas, análise, código, pesquisa, visão de cliente.',
      'Na prática, os times precisam de perfis diferentes. Um projeto de desastre natural (Ponto Seguro) precisa de gente que entende logística. Um projeto de saúde (Bridegtor) precisa de quem conhece a rotina clínica. Um de alimentação (Nutrifit) precisa de quem entende a dor do consumidor. A diversidade do time importa mais do que ter pitchado a ideia.',
      '## As ideias mudam',
      'O Ponto Seguro passou por dois pivôs durante o fim de semana. A versão apresentada no domingo era diferente da sexta. Isso é normal. O evento é desenhado para testar rápido. Se a ideia não funciona, o time muda e segue. Por isso chegar sem ideia pode ser vantagem: você entra com a cabeça limpa, sem apego.',
      '## Os 7 projetos de 2025',
      'Ponto Seguro (gestão de abrigos em desastres), Bridegtor (mentorias clínicas), Cota Aí (cotação de componentes eletrônicos), Conecta PCD (acessibilidade), GranCiclo (economia circular), Viva+ (cuidado de idosos), Nutrifit (alimentação saudável). Nenhum desses projetos existia 54 horas antes. Foram construídos por grupos de pessoas que se conheceram naquela sexta-feira.',
      'A segunda edição acontece de 14 a 16 de agosto de 2026, na CETISA, em Timbó.',
    ],
  },
  {
    meta: 'Sobre o evento · 5 min',
    title: 'Como funciona o pitch de 60 segundos da sexta-feira',
    excerpt: 'A regra mais simples do Startup Weekend: qualquer pessoa pode subir e apresentar uma ideia em 60 segundos. Como funciona na prática.',
    image: '/images/blog_pitch.svg',
    slug: 'pitch-60-segundos',
    related: ['como-nasce-uma-startup-em-54-horas', 'preciso-ter-uma-ideia-startup-weekend'],
    body: [
      'Na abertura do Startup Weekend, a facilitadora pede que quem tiver uma ideia levante a mão e suba ao palco. Na edição de 2025, no Centro Empresarial de Timbó, 28 pessoas subiram. Cada uma teve 60 segundos e um cronômetro projetado na parede.',
      'Sem slides. Sem pré-requisito. Você levanta a mão e fala.',
      '## Por que 60 segundos',
      'Se você não consegue explicar um problema e uma proposta de solução em um minuto, provavelmente ainda não tem clareza suficiente. O tempo curto força isso. Também nivela: quem tem experiência com apresentação e quem nunca falou em público têm o mesmo espaço.',
      '## O que funciona',
      'Os pitches que recebem mais votos costumam seguir uma estrutura parecida, mesmo sem ninguém combinar. Primeiro, um problema concreto que as pessoas na sala reconhecem. Depois, uma proposta de solução em uma frase. Por fim, um convite: "quem quer construir isso comigo?"',
      'Problemas específicos funcionam melhor do que genéricos. "Não consigo achar fisioterapeuta em Timbó" gera mais identificação do que "existe uma lacuna no mercado de saúde regional." Quanto mais a plateia reconhece o problema, mais votos.',
      '## Depois dos pitches',
      'O grupo vota nas ideias que mais quer desenvolver. As mais votadas viram projetos e os times se formam ao redor delas. Na edição de 2025, das 28 ideias pitchadas, 7 foram selecionadas. Quem apresentou uma ideia que não passou entrou em outro time.',
      'Cada time costuma ter entre 4 e 7 pessoas com perfis diferentes: alguém técnico, alguém de negócios, alguém de design, alguém que conhece o mercado.',
      '## A ideia de sexta muda',
      'O Ponto Seguro, vencedor de 2025, apresentou uma versão na sexta que era diferente do que entregou no domingo. Pivotou duas vezes no sábado. O pitch de sexta é ponto de partida, não destino. O time reconfigura, os mentores questionam, o mercado responde, e a ideia vai se transformando.',
      'A segunda edição do Startup Weekend Timbó acontece de 14 a 16 de agosto de 2026, na CETISA.',
    ],
  },
  {
    meta: 'D\u00favidas frequentes \u00b7 5 min',
    title: 'Eu preciso ter uma ideia pronta para participar do Startup Weekend?',
    excerpt: 'N\u00e3o. A maioria chega sem ideia. Funciona assim mesmo.',
    image: '/images/blog_mochila.svg',
    slug: 'preciso-ter-uma-ideia-startup-weekend',
    related: ['por-que-ir-se-nunca-empreendeu', 'cheguei-sem-ideia'],
    body: [
      'N\u00e3o. E a maioria das pessoas que participa tamb\u00e9m n\u00e3o tem.',
      'Na primeira edi\u00e7\u00e3o do Startup Weekend Timb\u00f3, em maio de 2025, 34 pessoas participaram. Foram 28 ideias pitchadas na sexta \u00e0 noite, mas boa parte da sala n\u00e3o pitchou nada e entrou num time mesmo assim.',
      '## Como os times se formam',
      'O formato \u00e9 direto: sexta \u00e0 noite, no Centro Empresarial de Timb\u00f3, quem quiser sobe ao palco e tem 60 segundos para apresentar uma ideia. Sem slide, sem pr\u00e9-requisito. Depois todo mundo vota. As mais votadas viram projetos e cada pessoa escolhe em qual quer trabalhar.',
      'Das 28 ideias pitchadas, 7 viraram projetos. As outras foram absorvidas ou ficaram pelo caminho. Quem pitchou e n\u00e3o passou? Entrou em outro time.',
      '## A ideia de sexta quase nunca sobrevive at\u00e9 domingo',
      'A Ponto Seguro, que venceu a edi\u00e7\u00e3o de 2025 com uma plataforma para gest\u00e3o de abrigos em desastres naturais, passou por dois piv\u00f4s durante o fim de semana. A vers\u00e3o que ganhou era diferente do que foi apresentado na sexta.',
      'Isso acontece com frequ\u00eancia. O evento \u00e9 desenhado para voc\u00ea testar r\u00e1pido e mudar quando n\u00e3o funciona. Chegar com ideia pronta pode at\u00e9 atrapalhar, porque o time fica preso nela em vez de ouvir o que os mentores e o mercado est\u00e3o dizendo.',
      '## E quem n\u00e3o \u00e9 de tecnologia?',
      'Os times que s\u00f3 t\u00eam programador costumam construir algo que ningu\u00e9m quer comprar. Os que s\u00f3 t\u00eam gente de neg\u00f3cios montam um slide bonito sem nada funcionando. O que ganha \u00e9 o equil\u00edbrio. Olha os 7 projetos de 2025: Ponto Seguro (desastres), Bridegtor (mentorias cl\u00ednicas), Cota A\u00ed (cota\u00e7\u00e3o de componentes eletr\u00f4nicos), Conecta PCD (acessibilidade), GranCiclo (economia circular), Viva+ (cuidado de idosos), Nutrifit (alimenta\u00e7\u00e3o saud\u00e1vel). N\u00e3o sai de um grupo homog\u00eaneo.',
      '## O que voc\u00ea precisa levar',
      'Disposi\u00e7\u00e3o para passar um fim de semana trabalhando com gente que voc\u00ea n\u00e3o conhece num problema que provavelmente vai mudar. Se voc\u00ea consegue lidar com isso, vai se dar bem. Ningu\u00e9m chega pronto. A segunda edi\u00e7\u00e3o acontece de 14 a 16 de agosto de 2026, na CETISA, em Timb\u00f3.',
    ],
  },
  {
    meta: 'Sobre o evento \u00b7 7 min',
    title: 'Como nasce uma startup em 54 horas',
    excerpt: 'O que acontece por dentro de um Startup Weekend. Spoiler: \u00e9 mais bagun\u00e7ado do que parece.',
    image: '/images/blog_historias.svg',
    slug: 'como-nasce-uma-startup-em-54-horas',
    related: ['coisas-que-ninguem-te-conta-startup-weekend', 'o-que-acontece-depois-startup-weekend'],
    body: [
      'Criar uma startup em um fim de semana parece absurdo. Na pr\u00e1tica \u00e9 absurdo mesmo, mas por motivos que voc\u00ea n\u00e3o espera. N\u00e3o \u00e9 a falta de tempo que pega. \u00c9 a quantidade de decis\u00f5es erradas que voc\u00ea precisa tomar r\u00e1pido para chegar nas certas. Na edi\u00e7\u00e3o de 2025 em Timb\u00f3, 7 startups nasceram assim.',
      '## Sexta-feira \u00e0 noite',
      'As pessoas chegam no Centro Empresarial de Timb\u00f3, pegam caf\u00e9, colocam crach\u00e1. A facilitadora explica as regras e pede que quem tiver uma ideia levante a m\u00e3o. 28 ideias foram pitchadas, cada uma em 60 segundos.',
      'Depois, vota\u00e7\u00e3o. As mais votadas viram projetos e os 34 participantes se distribuem entre 7 times. Gente que n\u00e3o se conhecia naquela noite j\u00e1 estava debatendo modelo de neg\u00f3cio minutos depois.',
      '## S\u00e1bado',
      'O s\u00e1bado \u00e9 longo. Os times precisam descobrir se o problema que escolheram existe de verdade. A \u00fanica forma \u00e9 conversando com gente de fora: ligando, mandando mensagem, perguntando. Os 7 mentores circulam fazendo perguntas inc\u00f4modas tipo "voc\u00eas falaram com quantas pessoas?" e "quem vai pagar por isso?"',
      'A Ponto Seguro, por exemplo, passou por dois piv\u00f4s ao longo do fim de semana. Redesenharam a ideia a partir do feedback dos mentores. A Cristine Nasato, integrante do time, descreveu a experi\u00eancia como intensa e desafiadora, onde cada feedback e cada ajuste fez o grupo crescer como equipe.',
      'Jogar fora o que foi feito de manh\u00e3 e recome\u00e7ar \u00e0 tarde d\u00f3i. Mas \u00e9 melhor do que apresentar algo morto no domingo.',
      '## Domingo',
      'O pitch final se aproxima e ainda falta montar apresenta\u00e7\u00e3o, ensaiar, fechar o produto, decidir quem vai falar. Slides sendo refeitos, demos sendo ajustadas, gente ensaiando no corredor.',
      'Quando o primeiro time sobe ao palco, tem 54 horas de trabalho comprimidas em poucos minutos. Jurados de frente, sem segunda chance.',
      '## O que fica',
      'O resultado oficial: 4 finalistas, um vencedor. O resultado real: 7 startups que n\u00e3o existiam 54 horas antes. Da Ponto Seguro (resposta a desastres) \u00e0 Nutrifit (alimenta\u00e7\u00e3o saud\u00e1vel), cada uma constru\u00edda por um grupo de desconhecidos que se encontrou naquela sexta-feira no Centro Empresarial de Timb\u00f3.',
      'A segunda edi\u00e7\u00e3o acontece de 14 a 16 de agosto de 2026, na CETISA.',
    ],
  },
  {
    meta: 'Bastidores \u00b7 6 min',
    title: '5 coisas que ningu\u00e9m te conta sobre participar de um Startup Weekend',
    excerpt: 'O evento \u00e9 mais intenso do que qualquer site faz parecer. Cinco coisas que voc\u00ea s\u00f3 descobre participando.',
    image: '/images/blog_pitch.svg',
    slug: 'coisas-que-ninguem-te-conta-startup-weekend',
    related: ['como-nasce-uma-startup-em-54-horas', 'o-que-acontece-depois-startup-weekend'],
    body: [
      'O site do Startup Weekend mostra times sorridentes, pitch no palco, pr\u00eamio no final. Tudo verdade. Mas tem outras verdades que n\u00e3o cabem em foto de divulga\u00e7\u00e3o.',
      '## 1. O cansa\u00e7o \u00e9 real',
      '54 horas \u00e9 bastante tempo fazendo a mesma coisa com as mesmas pessoas. Tem um ponto em que o caf\u00e9 para de funcionar e as decis\u00f5es come\u00e7am a ficar ruins. Na edi\u00e7\u00e3o de 2025, isso aconteceu com a maioria dos times no s\u00e1bado \u00e0 noite. E curiosamente, foi quando as conversas mais honestas apareceram. Quando todo mundo est\u00e1 exausto, ningu\u00e9m tem energia para fingir.',
      '## 2. Sua ideia vai mudar',
      'Na edi\u00e7\u00e3o de 2025, 28 ideias foram pitchadas e 7 projetos nasceram. Mas nenhum dos 7 saiu igual ao que entrou. A Ponto Seguro pivotou duas vezes. Quando o time resiste a mudar, geralmente \u00e9 porque se apaixonou pela ideia em vez de se apaixonar pelo problema.',
      '## 3. As conex\u00f5es s\u00e3o diferentes',
      'Num evento normal voc\u00ea troca cart\u00e3o e esquece. No Startup Weekend voc\u00ea passa 54 horas resolvendo problemas com aquelas pessoas. Validando hip\u00f3teses por telefone juntos, discutindo modelo de neg\u00f3cio \u00e0 noite, ensaiando pitch de manh\u00e3. Depois disso o contato tem outro peso.',
      '## 4. O pitch mete medo',
      'Sala cheia, jurados de frente, poucos minutos, sem segunda chance. Tem gente que ensaiou v\u00e1rias vezes e trava na hora. Tem gente que improvisou e acertou. A press\u00e3o real muda tudo. Quem nunca apresentou sob esse tipo de condi\u00e7\u00e3o sai do palco com uma confian\u00e7a que n\u00e3o existia antes.',
      '## 5. Voc\u00ea aprende r\u00e1pido demais',
      'Valida\u00e7\u00e3o de mercado, prototipa\u00e7\u00e3o, pitch, din\u00e2mica de equipe, prioriza\u00e7\u00e3o sob press\u00e3o. Tudo num fim de semana. N\u00e3o numa palestra sobre o assunto. Fazendo. Com 7 mentores dispon\u00edveis, 34 participantes trocando experi\u00eancia e um deadline de domingo \u00e0 noite que n\u00e3o espera.',
    ],
  },
  {
    meta: 'Ecossistema \u00b7 5 min',
    title: 'Como est\u00e1 o ecossistema de startups no Vale do Itaja\u00ed',
    excerpt: 'SC \u00e9 o 2\u00ba estado em startups no Brasil. O Vale do Itaja\u00ed, de Blumenau a Timb\u00f3, constr\u00f3i seu pr\u00f3prio polo com DNA industrial.',
    image: '/images/blog_historias.svg',
    slug: 'ecossistema-startups-vale-do-itajai',
    related: ['como-nasce-uma-startup-em-54-horas', 'cheguei-sem-ideia'],
    body: [
      'Santa Catarina \u00e9 o segundo estado com mais startups no Brasil, atr\u00e1s de S\u00e3o Paulo. Cresceu 17,8% entre 2024 e 2025 segundo o Sebrae Startups Report. S\u00e3o mais de 27 mil empresas de tecnologia no estado, com faturamento anual acima de R$ 28 bilh\u00f5es, algo como 7,5% do PIB estadual.',
      'No Global Startup Ecosystem Index 2025 da StartupBlink, o estado \u00e9 o \u00fanico ao lado de S\u00e3o Paulo a colocar duas cidades no top 10 brasileiro: Florian\u00f3polis (278\u00aa no ranking global) e Joinville (423\u00aa, com salto de 108 posi\u00e7\u00f5es em um ano). Blumenau aparece na 612\u00aa posi\u00e7\u00e3o e cresceu em SaaS, com 75% das startups locais nesse modelo. Oito cidades catarinenses entraram no ranking mundial.',
      '## O que o Vale do Itaja\u00ed tem',
      'A regi\u00e3o cresceu com t\u00eaxtil, metal-mec\u00e2nica e alimentos. Essa base industrial est\u00e1 virando base tecnol\u00f3gica. No Vale Europeu ficam a Unifique (Timb\u00f3) e a Senior Sistemas (Blumenau), duas das maiores empresas de tecnologia do Sul do Brasil. Em 2025, a blumenauense Paytrack captou R$ 240 milh\u00f5es com o fundo americano Riverwood Capital.',
      'A Blusoft, polo regional da ACATE, atua h\u00e1 mais de 30 anos. Cresceu de 67 para 164 empresas associadas entre 2021 e 2024 e promoveu 42 eventos s\u00f3 em 2024. Blumenau gera 15 mil empregos diretos e indiretos em tecnologia. O CIB, o Instituto Gene, a Conecta AMVE em Timb\u00f3 e o programa +Devs2Blu (que capacitou gratuitamente mais de 220 desenvolvedores desde 2021) fazem parte dessa infraestrutura.',
      '## Eventos presenciais ainda fazem diferen\u00e7a',
      'A maioria das conex\u00f5es que viram projetos reais nasce presencialmente. Em maio de 2025, o primeiro Startup Weekend de Timb\u00f3 reuniu 34 participantes no Centro Empresarial de Timb\u00f3. 28 ideias pitchadas, 7 startups criadas em 54 horas, com apoio do Instituto Gene, Conecta AMVE e CIB, e patroc\u00ednio de empresas locais como Racezone, ValeSoft, Rudolph e Usitim.',
      '## Proximidade como vantagem',
      'Um mentor de Blumenau chega a Timb\u00f3 em 20 minutos. A regi\u00e3o \u00e9 compacta o suficiente para as pessoas se conhecerem e grande o suficiente para ter massa cr\u00edtica. Combinada com cultura de trabalho herdada da ind\u00fastria, produz um tipo de ecossistema que funciona diferente dos grandes centros.',
      'Falta capital de risco, falta cultura de investimento-anjo, falta conex\u00e3o mais forte com mercados maiores. Mas gente, infraestrutura e vontade existem. A segunda edi\u00e7\u00e3o do Startup Weekend Timb\u00f3 acontece de 14 a 16 de agosto de 2026, na CETISA.',
    ],
  },
  {
    meta: 'P\u00f3s-evento \u00b7 4 min',
    title: 'O que acontece depois do Startup Weekend?',
    excerpt: 'O evento termina domingo. Para muita gente, alguma coisa continua depois.',
    image: '/images/blog_mochila.svg',
    slug: 'o-que-acontece-depois-startup-weekend',
    related: ['ecossistema-startups-vale-do-itajai', 'preciso-ter-uma-ideia-startup-weekend'],
    body: [
      'Domingo \u00e0 noite. Fotos, aplausos, cansa\u00e7o. Segunda-feira de manh\u00e3, alarme, rotina, e-mail. E a\u00ed?',
      '## Projetos',
      'Das 7 startups criadas na edi\u00e7\u00e3o de 2025 no Centro Empresarial de Timb\u00f3 (Ponto Seguro, Bridegtor, Cota A\u00ed, Conecta PCD, GranCiclo, Viva+ e Nutrifit), algumas continuaram e outras n\u00e3o. A Ponto Seguro, que prop\u00f5e uma plataforma para gest\u00e3o de abrigos em desastres naturais, seguiu ativa.',
      'Manter o ritmo sem a estrutura do evento \u00e9 dif\u00edcil. O trabalho volta, as outras prioridades voltam. Os projetos que continuam geralmente t\u00eam pelo menos uma pessoa que n\u00e3o consegue parar de pensar no problema e algum sinal de que algu\u00e9m pagaria pela solu\u00e7\u00e3o.',
      '## Conex\u00f5es',
      '34 participantes, 7 mentores, 5 organizadores, 1 facilitadora. Esse grupo n\u00e3o se dissolve no domingo. As conex\u00f5es do Startup Weekend funcionam diferente porque foram constru\u00eddas sob press\u00e3o real, resolvendo problemas juntos durante 54 horas. Isso cria confian\u00e7a de um jeito que troca de cart\u00e3o num coffee break n\u00e3o cria.',
      '## Mudan\u00e7as menos \u00f3bvias',
      'Nem todo mundo sai com startup. Mas quase todo mundo sai diferente de como entrou. Gente que descobriu que sabe vender. Gente que percebeu que lidera bem sob press\u00e3o. Gente que entendeu pela primeira vez a diferen\u00e7a entre planejar e validar.',
      'Na edi\u00e7\u00e3o de 2025, pelo menos dois participantes mudaram de \u00e1rea profissional nos meses seguintes.',
      '## O que fica',
      'O efeito mais comum n\u00e3o \u00e9 inspira\u00e7\u00e3o. \u00c9 um inc\u00f4modo. Aquele de segunda-feira de manh\u00e3: "eu passei um fim de semana construindo algo do zero com desconhecidos e deu certo. Por que meu dia a dia n\u00e3o funciona assim?"',
      'Esse inc\u00f4modo leva gente a voltar na edi\u00e7\u00e3o seguinte, procurar o ecossistema local, come\u00e7ar projetos. O evento termina domingo. Essa inquieta\u00e7\u00e3o demora mais.',
      'A segunda edi\u00e7\u00e3o do Startup Weekend Timb\u00f3 acontece de 14 a 16 de agosto de 2026, na CETISA.',
    ],
  },
];

// ─── O que você leva ───
export const TAKEAWAYS = [
  { num: '01', title: 'Experiência de empreender na prática', desc: 'Ciclo completo vivido: ideia, validação, construção, pitch. Em um fim de semana, você condensa meses de aprendizado.' },
  { num: '02', title: 'Uma rede regional real', desc: 'Você sai conhecendo dezenas de pessoas do Vale do Itajaí que querem construir coisas — futuros sócios, clientes, mentores.' },
  { num: '03', title: 'Clareza sobre seu próximo passo', desc: 'Você descobre, na prática, se empreender é pra você. E qual papel mais combina com seu jeito.' },
  { num: '04', title: 'Feedback real de mentores e jurados', desc: 'Empreendedores experientes, investidores e profissionais do mercado dão feedback direto sobre o que você construiu.' },
  { num: '05', title: 'Certificado oficial Techstars', desc: 'Comprovante reconhecido internacionalmente — válido para currículo, LinkedIn, portfólio.' },
  { num: '06', title: 'Premiações para os melhores', desc: 'Os times campeões recebem prêmios dos patrocinadores — créditos em serviços, mentorias, espaço de coworking.' },
];

// ─── Mentores ───
export const MENTORS = [
  {
    name: 'André Luiz Paza',
    role: 'Coord. de Inovação · Grupo Christal',
    spec: 'Engenheiro de P&D focado em inovação, patentes e novos produtos.',
    photo: '/images/Andre_Paza.jpg',
    linkedin: 'https://www.linkedin.com/in/andr%C3%A9-luiz-paza-58798727/',
  },
  {
    name: 'Camila Gessner',
    role: 'CEO · iFlorestal',
    spec: 'Lidera soluções tecnológicas para o setor florestal e já atuou em projetos com FAO/ONU.',
    photo: '/images/Camila_Gessner.jpg',
    linkedin: 'https://www.linkedin.com/in/camilagessner/',
  },
  {
    name: 'Esdras Holderbaum',
    role: 'CEO · Last Rocket',
    spec: 'Mais de 25 anos liderando projetos em tecnologia, inovação e transformação digital.',
    photo: '/images/Esdras_F.jpg',
    linkedin: 'https://www.linkedin.com/in/esdras-floriani-holderbaum/',
  },
  {
    name: 'Jéssica Bartosewiz',
    role: 'Diretora de Produtos · Senior Sistemas',
    spec: 'Especialista em gestão de produtos e inovação em soluções de RH.',
    photo: '/images/Jessica_Bartosewiz.png',
    linkedin: 'https://www.linkedin.com/in/j%C3%A9ssica-ariane-bartosewiz-22592a82/',
  },
];

// ─── Depoimentos ───
export const TESTIMONIALS = [
  {
    quote: 'Mudamos a ideia duas vezes. No domingo, tínhamos algo melhor do que qualquer um imaginou na sexta.',
    name: 'Cristine Nasato',
    role: 'Equipe Ponto Seguro · Edição 2025',
    photo: '/images/Cristine.png',
    result: 'Plataforma para conectar vítimas de catástrofes a serviços municipais',
  },
  {
    quote: 'Saímos com uma ideia totalmente estruturada. Em 54 horas, conseguimos fazer mais do que eu imaginava.',
    name: 'Arthur Henrique Hinsching',
    role: '17 anos · Equipe Viva+ · Edição 2025',
    photo: '/images/Arthur.jpg',
    result: 'Saiu contratado por um patrocinador no fim do pitch',
  },
  {
    quote: 'Desafios reais, espírito de equipe, troca de conhecimentos. Saí transformando ideias em soluções.',
    name: 'Cleidir Salvato da Silva',
    role: 'Equipe Cota Aí · Edição 2025',
    photo: '/images/Cleidir.jpg',
    result: 'Engajamento e aprendizado intensos em 3 dias',
  },
  {
    quote: 'Fui sem saber o que esperar e saí transformada. Aprendi como uma ideia vira um negócio.',
    name: 'Siene Pacher',
    role: 'Equipe Ponto Seguro · Edição 2025',
    photo: '/images/Siene_Pacher.webp',
    result: 'Reconectou-se com criatividade e coragem para seguir projetos',
  },
];

// ─── Infraestrutura do local ───
export const VENUE_FEATURES = [
  'Sala principal para abertura e pitches finais',
  'Wi-Fi de alta velocidade durante todo o evento',
  'Refeições inclusas: coffee break de boas-vindas na sexta; coffee breaks, almoço e jantar no sábado; coffee breaks e almoço no domingo',
  'Acessibilidade para pessoas com deficiência',
];

// ─── Inscrições ───
export const PRICING = {
  vagasPreenchidas: 32,
  vagasTotais: 50,
  loteEncerra: 15, // dias até encerrar pré-venda (09/06)
  tag: 'Pré-venda',
  valor: '89',
  centavos: '90',
  meta: 'À vista ou em até 3x sem juros · 1º lote R$ 119,90 · 2º lote R$ 149,90',
  symplaUrl: 'https://www.sympla.com.br/evento/techstars-startup-weekend-timbo-2026/3403386',
  includes: [
    'Acesso completo aos 3 dias de evento',
    'Refeições inclusas (4 refeições principais + lanches)',
    'Mentoria com profissionais do mercado',
    'Material de apoio e kit do participante',
    'Certificado oficial Techstars',
    'Concorrer aos prêmios dos patrocinadores',
  ],
};

// ─── Edição anterior — números ───
export const PAST_STATS = [
  { num: '34', label: 'Participantes' },
  { num: '28', label: 'Ideias apresentadas' },
  { num: '7', label: 'Protótipos finais' },
  { num: '4', label: 'Times finalistas' },
];

// ─── Patrocinadores ───
// Locais e Estaduais: logos reais. Globais: aguardando.
export const SPONSORS: Record<'global'|'estadual'|'local', { name: string; logo: string; dark: boolean | 'warm' }[]> = {
  global: [
    { name: 'Google for Startups', logo: '/images/sponsors/google_startups.webp', dark: 'warm' },
    { name: 'Deel',                logo: '/images/sponsors/deel.webp',            dark: 'warm' },
    { name: 'Mercury',             logo: '/images/sponsors/mercury.webp',         dark: 'warm' },
    { name: 'HSBC Innovation Banking', logo: '/images/sponsors/hsbc.webp',        dark: 'warm' },
    { name: 'Brex',                logo: '/images/sponsors/brex.webp',            dark: 'warm' },
  ],
  estadual: [
    { name: 'Sebrae Startups', logo: '/images/sponsors/sebrae_startups.jpg', dark: 'warm' },
    { name: '49 Educação', logo: '/images/sponsors/49_educacao.png', dark: 'warm' },
    { name: 'ACATE', logo: '/images/sponsors/acate.png', dark: 'warm' },
    { name: 'AWS', logo: '/images/sponsors/aws.png', dark: 'warm' },
    { name: 'Dati', logo: '/images/sponsors/dati.png', dark: 'warm' },
    { name: 'FAPESC', logo: '/images/sponsors/fapesc.png', dark: 'warm' },
    { name: 'Hostinger', logo: '/images/sponsors/hostinger.png', dark: 'warm' },
    { name: 'Inova Startups', logo: '/images/sponsors/inova_startups.jpg', dark: 'warm' },
    { name: 'Investidores.vc', logo: '/images/sponsors/investidores.png', dark: 'warm' },
    { name: 'KLAB', logo: '/images/sponsors/klab.png', dark: 'warm' },
    { name: 'Nexpon', logo: '/images/sponsors/nexpon.jpg', dark: 'warm' },
    { name: 'Magazord', logo: '/images/sponsors/magazord.png', dark: 'warm' },
    { name: 'Midihub', logo: '/images/sponsors/midihub.png', dark: 'warm' },
    { name: 'nd+', logo: '/images/sponsors/nd_plus.jpg', dark: 'warm' },
    { name: 'Notion', logo: '/images/sponsors/notion.png', dark: 'warm' },
    { name: 'Questum', logo: '/images/sponsors/questum.png', dark: 'warm' },
    { name: 'WOW Aceleradora', logo: '/images/sponsors/wow.jpg', dark: 'warm' },
    { name: 'Startup SC', logo: '/images/sponsors/startup_sc.png', dark: 'warm' },
  ],
  local: [
    { name: 'Conecta AMVE Timbó',         logo: '/images/sponsors/conecta_amve.webp',  dark: 'warm' },
    { name: 'CIB · Gene Conecta',          logo: '/images/sponsors/cib_gene.webp',      dark: 'warm' },
    { name: 'ACATE Blusoft · Vale Europeu',logo: '/images/sponsors/acate_blusoft.webp', dark: 'warm' },
    { name: 'CETISA',                      logo: '/images/sponsors/cetisa.webp',        dark: 'warm' },
  ],
};


// ─── Na Mídia ───
export const PRESS = [
  {
    source: 'Economia SC',
    title: 'Ponto Seguro vence o primeiro Startup Weekend de Timbó',
    url: 'https://economiasc.com/2025/05/29/ponto-seguro-vence-o-primeiro-startup-weekend-de-timbo/',
    type: 'matéria',
  },
  {
    source: 'Instituto Gene',
    title: '1º Techstars Startup Weekend Timbó supera expectativas e cria sete startups',
    url: 'https://institutogene.org.br/index.php/2025/05/28/1o-techstars-startup-weekend-timbo-supera-expectativas-e-cria-sete-startups-durante-uma-imersao-de-54-horas/',
    type: 'matéria',
  },
  {
    source: 'Jornal do Médio Vale',
    title: 'Timbó se prepara para o Startup Weekend: impulsione sua ideia e crie sua startup',
    url: 'https://jornaldomediovale.com.br/geral/timbo-se-prepara-para-o-startup-weekend-impulsione-sua-ideia-e-crie-sua-startup/',
    type: 'matéria',
  },
  {
    source: 'Trentina FM',
    title: 'Ponto Seguro inova e vence o Startup Weekend',
    url: 'https://trentinafm.com.br/ponto-seguro-inova-e-vence-o-startup-weekend/',
    type: 'matéria',
  },
  {
    source: 'Instituto Gene',
    title: 'Em maio, Timbó vai sediar um dos maiores eventos de empreendedorismo do mundo',
    url: 'https://institutogene.org.br/index.php/2025/03/24/em-maio-timbo-vai-sediar-um-dos-maiores-eventos-de-empreendedorismo-do-mundo/',
    type: 'matéria',
  },
  {
    source: 'Jornal do Médio Vale',
    title: 'Startup Weekend Timbó se prepara para receber o maior evento de empreendedorismo',
    url: 'https://jornaldomediovale.com.br/geral/startup-weekend-timbo-se-prepara-para-receber-o-maior-evento-de-empreendedorismo/',
    type: 'matéria',
  },
  {
    source: 'Techstars',
    title: '1st Techstars Startup Weekend Timbó',
    url: 'https://www.startmybusiness.com/events/1st-techstars-startup-weekend-timb',
    type: 'página oficial',
  },
  {
    source: 'YouTube',
    title: 'Startup Weekend Timbó 2025 — Recap',
    url: 'https://www.youtube.com/watch?v=udobr4J4Z9U',
    type: 'vídeo',
  },
];

// ─── FAQ ───
export const FAQ = [
  {
    q: 'Preciso ter uma ideia para participar?',
    a: 'Não. Na sexta-feira, quem tem uma ideia pode apresentá-la em 60 segundos. Depois, o grupo vota nas melhores e os times se formam ao redor delas. Você pode entrar em qualquer time, mesmo sem ter pitchado nada. Mas se vier com algo na cabeça, é uma vantagem.',
  },
  {
    q: 'Preciso ser da área de tecnologia ou ter conhecimento de programação?',
    a: 'De jeito nenhum. Os times mais fortes são mistos: design, marketing, vendas, finanças, operações. Cada perfil agrega algo essencial à construção do produto.',
  },
  {
    q: 'Quanto tempo eu preciso ficar no evento?',
    a: 'A experiência completa exige presença nos 3 dias — sexta à noite, sábado o dia todo e domingo até 21h. É imersão, e o valor está em viver o ciclo inteiro.',
  },
  {
    q: 'Onde eu durmo? O evento dorme no local?',
    a: 'Não, você dorme em casa ou em hospedagem própria. O evento começa cedo no sábado e domingo. Para quem vem de fora, indicamos algumas opções de hospedagem nos arredores.',
  },
  {
    q: 'Quanto custa? O que está incluso na inscrição?',
    a: 'A inscrição inclui acesso aos 3 dias, todas as refeições principais, lanches, mentoria, kit do participante e certificado Techstars. Confira o valor atual na seção de inscrições.',
  },
  {
    q: 'Vou sair do evento com uma empresa montada?',
    a: 'Não necessariamente — e nem é esse o objetivo. Você sai com um produto validado, uma rede de contatos e clareza sobre como construir um negócio. Alguns times decidem continuar depois do evento. Outros aprendem que aquela ideia não era viável. Ambos os caminhos são vitória.',
  },
  {
    q: 'Posso ir com amigos e formar um time só com eles?',
    a: 'Pode ir com amigos, mas a regra é que os times só se formam após a votação. A ideia é justamente quebrar bolhas e conectar pessoas que normalmente não trabalhariam juntas.',
  },
  {
    q: 'Estudante ou universitário tem desconto?',
    a: 'Sim, oferecemos lote estudante com valor reduzido. É necessário apresentar comprovante de matrícula no momento da inscrição.',
  },
  {
    q: 'Tenho mais de 50 anos. Sou velho demais para isso?',
    a: 'De jeito nenhum. Já tivemos participantes de 17 a 67 anos. Experiência de vida é um diferencial enorme em times de Startup Weekend.',
  },
  {
    q: 'Em quais condições posso pedir reembolso?',
    a: 'Reembolsos integrais são possíveis até 7 dias antes do evento. Após esse prazo, podemos transferir sua inscrição para outra pessoa. Detalhes nas políticas da plataforma.',
  },
  {
    q: 'O que acontece nas 54 horas do Startup Weekend?',
    a: 'Sexta à noite: pitches de 60 segundos e formação de times. Sábado inteiro: desenvolvimento do produto com apoio de mentores. Domingo: finalização e apresentação para jurados. Tudo presencial, na CETISA, em Timbó.',
  },
  {
    q: 'O Startup Weekend Timbó tem certificado?',
    a: 'Sim. Todos os participantes recebem certificado oficial Techstars ao final do evento, válido como experiência em empreendedorismo e inovação.',
  },
];
