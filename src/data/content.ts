// Conteúdo do portfólio de Daniela Batiston.
// Edite os textos aqui — os componentes só consomem esses dados.

import { asset } from "../lib/asset";

export const profile = {
  name: "Daniela Batiston",
  fullName: "Daniela Batiston Noronha",
  role: "Social Media Strategist",
  tagline: "Posicionamento de marca, storytelling e estratégia de conteúdo com resultado real.",
  location: "São Paulo, SP",
  phone: "(11) 97134-0222",
  whatsapp: "5511971340222",
  email: "danibatiston@icloud.com",
  linkedin: "https://www.linkedin.com/in/danibatiston/",
  instagram: "https://instagram.com/danibatiston",
  instagramHandle: "@danibatiston",
  availability: "Disponível para projetos freelance e trabalho remoto",
};

export const summary =
  "Social media com atuação em rebranding, posicionamento de marca, estratégia de conteúdo e gestão de redes sociais — em entretenimento, e-commerce e mercado internacional. Reverti o engajamento orgânico negativo de uma marca em 3 meses sem investimento em tráfego pago, elevando sua média mensal de reservas recorrentes em mais de 57%; em outro projeto, levei um e-commerce de zero a R$10 mil de faturamento em 3 meses. Premiada em storytelling na FAAP. Graduanda em Publicidade e Propaganda, disponível para projetos freelance e trabalho remoto.";

export const philosophy = {
  quote: "As pessoas esquecerão o que você disse, mas nunca esquecerão como você as fez sentir.",
  author: "Maya Angelou",
  text:
    "Humanizar uma marca não é colocar um rosto humano num anúncio — é dar características humanas à marca em si. Na era em que a atenção é a moeda mais cara, o que diferencia um negócio não é mais só a qualidade do produto, e sim como o público se lembra dele. É esse o fio condutor de cada estratégia que construo: entender a narrativa que a marca já tem antes de pensar em qualquer post.",
};

export const stats = [
  { value: "+57%", label: "em reservas recorrentes mensais, sem tráfego pago" },
  { value: "R$10 mil", label: "de faturamento gerado em 3 meses, 100% orgânico" },
  { value: "48 mil+", label: "visualizações em vídeo orgânico no TikTok" },
  { value: "Forbes", label: "case de rebranding destacado na mídia" },
];

export type Experience = {
  role: string;
  company: string;
  companyDetail?: string;
  location: string;
  period: string;
  context?: string;
  bullets: string[];
  current?: boolean;
};

export const experiences: Experience[] = [
  {
    role: "Social Media",
    company: "Programa do João (SBT)",
    companyDetail: "Universo Criativo",
    location: "São Paulo, SP",
    period: "jul/2026 — atual",
    current: true,
    context:
      "Programa de auditório e entretenimento do SBT, apresentado por João Silva e exibido em rede nacional de TV aberta.",
    bullets: [
      "Curadoria e busca de referências de conteúdo, transformando tendências em pautas para o programa.",
      "Pesquisa de influenciadores e elaboração de roteiros de entrevistas para as pautas do programa.",
      "Edição de vídeos em formatos nativos para Instagram, TikTok e YouTube, adaptando linguagem e corte a cada plataforma.",
      "Elaboração de calendários editoriais e acompanhamento de métricas para orientar próximas pautas e formatos.",
      "Cobertura de eventos e festivais, capturando imagens, vídeos e quadros para as redes sociais do Portal do João Silva.",
    ],
  },
  {
    role: "Social Media & Customer Service",
    company: "Vacation Homes 4U",
    companyDetail: "Orlando, EUA (remoto)",
    location: "Orlando, EUA · remoto",
    period: "ago/2025 — jul/2026",
    context:
      "Marca sem posicionamento definido frente à concorrência, engajamento orgânico negativo e histórico de investimento em tráfego pago sem retorno.",
    bullets: [
      "Conduziu 100% da estratégia de rebranding, reposicionando a marca nas redes com manual de marca e diretrizes de comunicação próprias.",
      "Reverteu o engajamento orgânico negativo em 3 meses sem nenhum investimento em tráfego pago, com calendário editorial de carrosséis, vídeos e artes — incluindo imagens geradas com IA.",
      "Aumentou a média mensal de reservas recorrentes em mais de 50% em 6 meses (de 200 para 315) e contribuiu para uma alta de ~85% na taxa de reservas anual.",
      "Humanizou a marca fortalecendo a marca pessoal do proprietário, mostrando bastidores — diferencial que nenhum concorrente explorava — e gerou leads convertidos via social listening, prospecção por Direct e permutas com influenciadores.",
      "Atuou no atendimento a hóspedes via Airbnb, em inglês e português, apoiando a gestão das propriedades no padrão “Super Host”.",
    ],
  },
  {
    role: "Social Media & Marketing",
    company: "Bats Acessórios",
    companyDetail: "e-commerce de semijoias",
    location: "São Paulo, SP",
    period: "set/2024 — mar/2025",
    bullets: [
      "Levou o e-commerce de zero a R$10 mil de faturamento em 3 meses, de forma 100% orgânica.",
      "Produziu vídeos que superaram 40 mil visualizações no TikTok, sem impulsionamento pago.",
      "Responsável pelo calendário editorial, planejamento de lançamento de coleções e storytelling das campanhas.",
      "Gerenciou as redes sociais (TikTok e Instagram), com edição de vídeos e criação de artes.",
    ],
  },
];

export type CaseStudy = {
  tag: string;
  title: string;
  client: string;
  challenge: string;
  approach: string[];
  results: { value: string; label: string }[];
  color: "coral" | "violet" | "gold";
  testimonials?: { quote: string; source: string }[];
  proof?: { src: string; alt: string; caption: string }[];
  background?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    tag: "Rebranding & Growth Orgânico",
    title: "De marca travada a case destaque na Forbes",
    client: "Vacation Homes 4U — mercado imobiliário, EUA",
    challenge:
      "Empresa já respeitada no nicho (10+ anos, Super Host no Airbnb) mas com engajamento travado, sem posicionamento de marca definido e com histórico de tráfego pago sem retorno.",
    approach: [
      "Diagnóstico completo de negócio, público e mercado antes de qualquer post.",
      "Rebranding 100% conduzido por Daniela: manual de marca, diretrizes de comunicação e identidade.",
      "Calendário editorial com carrosséis, vídeos e artes — incluindo criação de imagens com IA.",
      "Humanização da marca através dos bastidores e da marca pessoal do proprietário.",
      "Geração de leads via social listening, prospecção por Direct e permutas com influenciadores.",
    ],
    results: [
      { value: "+57%", label: "reservas recorrentes mensais em 6 meses" },
      { value: "~85%", label: "alta na taxa de reservas anual" },
      { value: "0", label: "reais investidos em tráfego pago" },
      { value: "Forbes", label: "case citado como destaque de mercado" },
    ],
    color: "coral",
    testimonials: [
      {
        quote: "Eu nem reconheço mais a empresa, tamanha a transformação.",
        source: "Proprietário — Vacation Homes 4U",
      },
      {
        quote: "Reservei com vocês vendo os bastidores pelo Insta. Ansiosa pela chegada da viagem!",
        source: "Hóspede, via Instagram Direct",
      },
    ],
    proof: [
      {
        src: asset("/images/proof-forbes-vh4u.png"),
        alt: "Artigo da Forbes Business Council sobre o mercado de vacation rentals",
        caption: "Case citado em artigo da Forbes Business Council",
      },
    ],
  },
  {
    tag: "E-commerce & Conteúdo Orgânico",
    title: "De zero a R$10 mil em 3 meses, sem anúncio",
    client: "Bats Acessórios — e-commerce de semijoias",
    challenge:
      "Marca nova, sem faturamento e sem audiência construída, precisando validar o produto e gerar as primeiras vendas de forma enxuta.",
    approach: [
      "Estratégia de conteúdo 100% orgânica para TikTok e Instagram.",
      "Calendário editorial alinhado ao planejamento de lançamento de coleções.",
      "Storytelling de campanhas para criar conexão com a marca desde o primeiro post.",
      "Edição de vídeo e criação de artes internas, sem depender de agência externa.",
    ],
    results: [
      { value: "R$10 mil", label: "faturamento em 3 meses" },
      { value: "48,4 mil", label: "views no melhor vídeo do TikTok" },
      { value: "100%", label: "orgânico, sem impulsionamento pago" },
    ],
    color: "violet",
    proof: [
      {
        src: asset("/images/proof-bats-views.png"),
        alt: "Dois vídeos no TikTok com 48,4 mil e 37,8 mil visualizações",
        caption: "48,4 mil e 37,8 mil views — dois vídeos, zero impulsionamento",
      },
      {
        src: asset("/images/proof-bats-comments.png"),
        alt: "Comentários entusiasmados em post da Bats Acessórios",
        caption: "Comentários orgânicos de audiência qualificada",
      },
    ],
  },
  {
    tag: "Entretenimento & TV Aberta",
    title: "Conteúdo nativo para um programa de entretenimento em rede nacional",
    client: "Programa do João (SBT) — via Universo Criativo",
    challenge:
      "Sustentar um fluxo constante de conteúdo relevante para um programa de auditório, adaptado à linguagem de cada rede social.",
    approach: [
      "Curadoria de tendências e transformação em pautas para o programa.",
      "Pesquisa de influenciadores e roteiro de entrevistas.",
      "Edição nativa para Instagram, TikTok e YouTube — corte e linguagem específicos por plataforma.",
      "Calendário editorial orientado por análise de métricas.",
      "Cobertura de eventos e festivais, com captação de imagens, vídeos e quadros para o Portal do João Silva.",
    ],
    results: [
      { value: "3", label: "plataformas com conteúdo nativo simultâneo" },
      { value: "Rede nacional", label: "de TV aberta como vitrine do trabalho" },
      { value: "3,27 pts", label: "de audiência às 0h26 — vice-liderança em SP (16/08/2026)" },
    ],
    color: "gold",
    proof: [
      {
        src: asset("/images/case-sbt-estudio.png"),
        alt: "Bastidores do estúdio do Programa do João, na SBT",
        caption: "Bastidores do estúdio",
      },
      {
        src: asset("/images/case-sbt-mic.png"),
        alt: "Microfone do Programa do João em mãos, no estúdio da SBT",
        caption: "Em gravação do Programa do João",
      },
      {
        src: asset("/images/case-sbt-entrevista.png"),
        alt: "Entrevista com Leão Lobo no estúdio do SBT",
        caption: "Entrevista com Leão Lobo",
      },
      {
        src: asset("/images/proof-sbt-audiencia.png"),
        alt: "Print de audiência mostrando o Programa do João no SBT com 3,27 pontos às 0h26",
        caption: "Vice-liderança na madrugada de sábado (16/08/2026) em SP — 3,27 pts às 0h26",
      },
    ],
    background: asset("/images/case-sbt-bg.png"),
  },
];

export const skillGroups = [
  {
    title: "Estratégia & Conteúdo",
    items: [
      "Gestão de redes sociais",
      "Calendário editorial",
      "Planejamento e curadoria de conteúdo",
      "Copywriting",
      "Roteiro",
      "Storytelling",
      "Briefing de conteúdo",
    ],
  },
  {
    title: "Marca & Posicionamento",
    items: [
      "Rebranding",
      "Posicionamento de marca",
      "Manual de marca",
      "Diretrizes de comunicação e identidade",
      "Benchmark de concorrentes",
      "Marca pessoal",
    ],
  },
  {
    title: "Produção",
    items: [
      "Edição de vídeo",
      "Criação de artes e carrosséis",
      "Design gráfico",
      "Geração de imagens com IA",
    ],
  },
  {
    title: "Growth & Dados",
    items: [
      "Crescimento orgânico",
      "Meta Ads · TikTok Ads",
      "Social listening",
      "Geração de leads via Direct",
      "Marketing de influência e permutas",
      "Métricas e KPIs",
      "E-commerce",
    ],
  },
];

export const tools = [
  "Instagram",
  "TikTok",
  "YouTube",
  "LinkedIn",
  "Spotify",
  "Meta Ads",
  "TikTok Ads",
  "Canva",
  "CapCut",
  "Claude AI / Claude Code",
  "Airbnb",
];

export const softSkills = [
  "Atendimento ao cliente",
  "Negociação de parcerias e permutas",
  "Comunicação com o público",
  "Organização e cumprimento de prazos",
  "Rotinas de produção para TV",
];

export const education = [
  {
    degree: "Bacharelado em Publicidade e Propaganda",
    school: "FAAP",
    period: "fev/2026 — dez/2029 (em curso)",
    details: [
      "Prêmio de Melhor Storytelling do período (jun/2026) — campanha desenvolvida para a marca Pentel.",
      "Participação no Projeto VigIA — pesquisa da agência LUPA em parceria com alunos da FAAP, mapeando conteúdos gerados com IA e deepfakes nas redes sociais e seu impacto no período eleitoral.",
    ],
  },
  {
    degree: "Direito",
    school: "Universidade Presbiteriana Mackenzie",
    period: "fev/2022 — dez/2025",
  },
];

export const certifications = [
  { name: "Programa Executivo em Social Media", school: "Blank School" },
  { name: "Certificação Social Media Storyteller", school: "Academia Brasileira de Social Media" },
  { name: "Marca Pessoal", school: "Tay Dantas / Vincy Society" },
  { name: "Rebranding de Marca · Funil de Vendas · Marketing e Branding", school: "G4 Educação" },
];

export const languages = [
  { name: "Português", level: "Nativo" },
  { name: "Inglês", level: "Fluente" },
  { name: "Italiano", level: "Básico" },
];
