// ════════════════════════════════════════════
// DADOS CENTRAIS — SW Timbó 2026
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
    excerpt: 'Um checklist prático com tudo que você precisa para aproveitar o fim de semana sem perder tempo com logística.',
  },
  {
    meta: 'Histórias · 8 min',
    title: '"Cheguei sem ideia": 3 histórias de quem participou sem saber o que esperar',
    excerpt: 'Conversamos com participantes da edição anterior que vieram sem ideia e saíram com um produto, um time e um projeto em andamento.',
  },
  {
    meta: 'Sobre o evento · 5 min',
    title: 'Como funciona o pitch de 60 segundos da sexta-feira',
    excerpt: 'A regra mais importante (e mais simples) do Startup Weekend explicada com exemplos reais de pitches que funcionaram.',
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
    role: 'Edição 2025',
    photo: '/images/Siene_Pacher.png',
    result: 'Reconectou-se com criatividade e coragem para seguir projetos',
  },
];

// ─── Infraestrutura do local ───
export const VENUE_FEATURES = [
  'Sala principal para abertura e pitches finais',
  'Salas de trabalho separadas para cada time',
  'Wi-Fi de alta velocidade durante todo o evento',
  'Café, água e lanches o tempo todo',
  'Refeições inclusas (jantar de sexta, almoço e jantar de sábado, almoço de domingo)',
  'Estacionamento gratuito no local',
  'Acessibilidade para pessoas com deficiência',
];

// ─── Inscrições ───
export const PRICING = {
  vagasPreenchidas: 32,
  vagasTotais: 50,
  loteEncerra: 23, // dias
  tag: 'Pré-venda',
  valor: '70',
  meta: 'À vista ou em até 3x sem juros · Lotes seguintes a partir de R$ 119',
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
export const SPONSORS = {
  global: [], // aguardando
  estadual: [
    // Logos com dark:false ficam em slot claro; o conteúdo já é escuro/colorido
    { name: 'FAPESC', logo: '/images/sponsors/fapesc.png', dark: false },
    { name: 'ACATE', logo: '/images/sponsors/acate.png', dark: false },
    { name: 'Startup SC', logo: '/images/sponsors/startup_sc.png', dark: false },
    { name: 'Senior Sistemas', logo: '/images/sponsors/senior.png', dark: false },
    { name: 'Magazord', logo: '/images/sponsors/magazord.png', dark: false },
    { name: 'Dati', logo: '/images/sponsors/dati.png', dark: false },
    { name: 'Questum', logo: '/images/sponsors/questum.png', dark: false },
    { name: 'KLAB', logo: '/images/sponsors/klab.png', dark: false },
    { name: 'Notion', logo: '/images/sponsors/notion.png', dark: false },
    { name: 'Investidores.vc', logo: '/images/sponsors/investidores.png', dark: false },
    // TODO: reenviar (vieram corrompidos): AWS, Hostinger, Inova, Midihub, nd, Nexpon, WOW, Sebrae, 49 Educação
  ],
  local: [
    { name: 'CETISA', logo: '/images/cetisa.png', dark: false },
    { name: 'Conecta AMVE Timbó', logo: '/images/conecta_amve.png', dark: true },
    { name: 'Valesoft', logo: '/images/valesoft.png', dark: false },
    { name: 'Rudolph', logo: '/images/rudolph.png', dark: false },
    { name: 'USITIM', logo: '/images/usitim.png', dark: false },
    { name: 'Racezone', logo: '/images/racezone.png', dark: false },
  ],
};

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
];
