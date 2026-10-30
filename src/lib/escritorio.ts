/**
 * Dados canônicos do escritório.
 *
 * Fonte única. Nenhum telefone, endereço, OAB ou nome é escrito
 * direto em componente ou página: tudo sai daqui.
 * O espelho em prosa é docs/dados-do-escritorio.md.
 */

export const ESCRITORIO = {
  nome: "Santos Silvino & Barbosa Advogados",
  marca: "SSB Advogados",
  entidade: "Santos Silvino Sociedade Individual de Advocacia",
  cnpj: "68.162.083/0001-59",
  fundacao: "abril de 2026",
  dominio: "ssbadvogados.com.br",
  email: "contato@ssbadvogados.com.br",
  telefone: "(31) 98629-9703",
  whatsapp: "https://wa.me/5531986299703",
  endereco: {
    logradouro: "Av. Raja Gabaglia, 2000, Torre 01",
    bairro: "Estoril",
    cidade: "Belo Horizonte",
    uf: "MG",
    cep: "30494-170",
  },
  atendimento: "Belo Horizonte, Nova Lima e Região Metropolitana. Remoto para todo o Brasil e exterior.",
  horario: "Segunda a sexta, das 9h às 18h" as string | null,
  prazoRetorno: "em até 24 horas" as string | null, // confirmado por Vitor em 12/09/2026
  redes: {
    instagram: "https://www.instagram.com/ssb_advogados/",
    linkedin:
      "https://www.linkedin.com/company/santos-silvino-barbosa-advogados/",
  },
} as const;

export type Socio = {
  slug: string;
  /** nome de uso, o que aparece em título, card e assinatura de artigo */
  nome: string;
  /** nome civil completo. Aparece na página de perfil, para a busca pelo
   *  nome inteiro levar até ela. */
  nomeCompleto: string;
  /** "Advogado" ou "Advogada" */
  profissao: string;
  /** a página /sobre/<slug> só é gerada quando o sócio aprovou o texto.
   *  Sem ela, os links caem no bloco do sócio em /sobre. */
  perfilPublicado: boolean;
  /** tratamento exibido antes do nome nos títulos do site ("Dr."). Só no
   *  site: documento e assinatura usam o nome completo, sem tratamento. */
  tratamento?: string;
  oab: string;
  instagram: string;
  /** perfil pessoal no LinkedIn. Só é renderizado quando preenchido. */
  linkedin?: string;
  /** frentes específicas dentro das áreas. Texto, não link: existem para
   *  mostrar o recorte real de atuação, não para criar página nova. */
  destaques: string[];
  areas: string[];
  /** retrato vertical, 800x1000 */
  foto: string;
  /** recorte quadrado, 640x640 */
  fotoQuadrada: string;
  /** fotos da página de perfil, geradas por scripts/fotos-perfis.py.
   *  topo 1500x1875 e retrato 1000x1250. Sem retrato, a seção de trajetória
   *  fica só com texto. */
  fotosPerfil: { topo: string; retrato?: string };
  /** de onde vem a experiência. Usado em /sobre e na página de perfil. */
  trajetoria: string;
  /** recorte da página de perfil. Quando existe, o perfil mostra só esta
   *  frente (título de destaque, áreas, texto e frentes próprios), sem mexer
   *  em `areas`, que segue valendo para /sobre e para "Quem conduz". */
  foco?: {
    titulo: string;
    /** como aparece no title da página: "advogado bancário" */
    cargo: string;
    /** página de serviço para onde o perfil aponta */
    pagina: { href: string; nome: string };
    areas: string[];
    atuacao: string[];
    destaques: string[];
  };
  /** como atua em cada frente, um parágrafo por item */
  atuacao: string[];
  formacao: string[];
};

export const SOCIOS: Socio[] = [
  {
    slug: "vitor-silvino",
    nome: "Vitor Silvino",
    nomeCompleto: "Vitor Henrique Santos Silvino",
    profissao: "Advogado",
    perfilPublicado: true,
    tratamento: "Dr.", // pedido do Vitor em 28/10/2026
    oab: "OAB/MG 230.955",

    instagram: "https://www.instagram.com/vitorsilvino.adv/",
    linkedin: "https://www.linkedin.com/in/vitorsilvino/",
    foto: "/fotos/vitor-silvino-1993b.webp",
    fotoQuadrada: "/fotos/vitor-silvino-1993b-q.webp",
    fotosPerfil: {
      topo: "/fotos/vitor-silvino-topo-3836.webp",
      retrato: "/fotos/vitor-silvino-retrato-2806.webp",
    },
    trajetoria:
      "Atuou no Grupo BMG (Banco BMG) e na Serasa Experian, além de grupos empresariais e hubs de investimentos. Viu por dentro como o banco concede o crédito, averba o consignado, registra a dívida e cobra. É de onde vem a familiaridade com contrato, com desconto em folha e em benefício e com execução vista dos dois lados do balcão: quem cobra e quem é cobrado.",
    foco: {
      titulo: "Advogado Bancário em Belo Horizonte",
      cargo: "advogado bancário",
      pagina: { href: "/advogado-bancario/belo-horizonte", nome: "Advogado bancário em Belo Horizonte" },
      areas: ["direito-bancario"],
      atuacao: [
        "Atua do lado de quem é cobrado pelo banco: pessoa física com desconto que não reconhece no salário, na aposentadoria ou na conta, e empresa, sócio ou avalista executado por cédula de crédito bancário.",
        "No consignado, confere o que foi averbado contra o que foi contratado: cartão RMC ou RCC no lugar de empréstimo, margem tomada sem pedido, seguro e associação descontados sem autorização, portabilidade que ninguém pediu.",
        "Na execução e na dívida com o banco, cuida do desbloqueio de conta, da defesa em embargos e da negociação, sempre a partir dos documentos do próprio banco: contrato, extrato e demonstrativo.",
      ],
      destaques: [
        "Descontos indevidos no benefício e na conta",
        "Cartão consignado RMC e RCC",
        "Juros abusivos e revisão de contrato",
        "Golpe do Pix e fraude bancária",
        "Defesa em execução e desbloqueio de conta",
      ],
    },
    atuacao: [
      "No direito bancário, atua na defesa de empresas, sócios e avalistas em execução de cédula de crédito bancário, no desbloqueio de conta e na negociação de dívida com o banco antes e durante o processo.",
      "No empresarial, cuida de acordo de sócios, entrada e saída de sócio e dos contratos que sustentam a operação: prestação de serviço, confidencialidade, cessão e licenciamento.",
      "Em propriedade intelectual, conduz o registro de marca e de patente no INPI, da busca de anterioridade ao acompanhamento do pedido, e a estruturação jurídica de lançamentos da economia criativa.",
    ],
    formacao: [
      "Graduação em Direito pela Faculdade de Direito Milton Campos",
      "Pós-graduação em Direito Contratual e Responsabilidade Civil (EBRADI)",
      "Pós-graduação em Propriedade Intelectual, em curso",
    ],
    areas: [
      "direito-societario",
      "contratos-empresariais",
      "direito-bancario",
      "marcas-e-propriedade-intelectual",
    ],
    destaques: [
      "Acordo de sócios e entrada e saída de sócio",
      "NDA, cessão e licenciamento de marca",
      "Defesa em execução e desbloqueio de conta",
      "Registro de marca e patente no INPI",
      "Economia criativa e estruturação de lançamentos",
    ],
  },
  {
    slug: "thayane-barbosa",
    nome: "Thayane Barbosa",
    nomeCompleto: "Thayane Cristine Barbosa Teixeira",
    profissao: "Advogada",
    perfilPublicado: false, // Vitor, 28/10/2026: a Thayane precisa analisar antes
    tratamento: "Dra.", // mesma lógica do perfil do Vitor (30/10/2026)
    oab: "OAB/MG 194.089",

    instagram: "https://www.instagram.com/thayanebarbosa.adv/",
    linkedin: "https://www.linkedin.com/in/thayane-barbosa-8aba79162/",
    foto: "/fotos/thayane-barbosa-1630b.webp",
    fotoQuadrada: "/fotos/thayane-barbosa-1630b-q.webp",
    fotosPerfil: {
      topo: "/fotos/thayane-barbosa-topo-2919.webp",
      retrato: "/fotos/thayane-barbosa-retrato-4439.webp",
    },
    trajetoria:
      "Conduz demandas familiares e patrimoniais dentro e fora do Brasil, o que envolve partilha com bens em mais de um país, sucessão de patrimônio internacional e conflito familiar entre pessoas que vivem em jurisdições diferentes.",
    atuacao: [
      "Em família e sucessões, atua em divórcio, guarda e alimentos, inventário e partilha, e no planejamento que vem antes deles: pacto antenupcial e escolha do regime de bens.",
      "No imobiliário e patrimonial, cuida de usucapião, ações possessórias e da regularização do patrimônio da família.",
      "No direito bancário, divide com Vitor Silvino a defesa em execução e a revisão de contratos com instituições financeiras.",
    ],
    foco: {
      titulo: "Advogada de Família e Bancária em Belo Horizonte",
      cargo: "advogada de família e bancária",
      pagina: { href: "/advogada-de-familia/belo-horizonte", nome: "Advogada de família em Belo Horizonte" },
      areas: ["familia-e-sucessoes", "direito-bancario"],
      atuacao: [
        "Atua em família e sucessões: divórcio, guarda e alimentos, inventário e partilha, e no planejamento que vem antes deles, como o pacto antenupcial e a escolha do regime de bens.",
        "No inventário e na partilha, organiza o patrimônio da família e conduz o caminho em cartório, quando há acordo, ou na Justiça, quando não há.",
        "Conduz também casos familiares com elementos fora do Brasil: partilha com bens em mais de um país, sucessão de patrimônio no exterior e conflito entre pessoas que vivem em países diferentes.",
        "No direito bancário, atua ao lado do Dr. Vitor Silvino na defesa de quem é cobrado pelo banco, da revisão de contratos à defesa em execução.",
      ],
      destaques: [
        "Divórcio, guarda e alimentos",
        "Inventário e partilha",
        "Pacto antenupcial e regime de bens",
        "Conflitos familiares e patrimoniais no exterior",
        "Revisão de contrato e defesa em execução bancária",
      ],
    },
    formacao: [
      "Pós-graduação em Direito de Família e Sucessões",
      "Pós-graduação em Direito Processual Civil e Direito Civil",
    ],
    areas: [
      "familia-e-sucessoes",
      "direito-imobiliario",
      "direito-bancario",
    ],
    destaques: [
      "Inventário e partilha",
      "Divórcio, guarda e alimentos",
      "Pacto antenupcial e regime de bens",
      "Usucapião e ações possessórias",
      "Conflitos familiares e patrimoniais no exterior",
    ],
  },
];

export type Area = {
  slug: string;
  nome: string;
  /** como a área entra numa frase. O nome de título já tem "e" ("Imobiliário
   *  e patrimônio"), e listar vários deles virava "e ... e ... e". */
  prosa: string;
  /** null quando a área não tem sócio titular. O bloco "Quem conduz"
   *  não é renderizado nesse caso, e não se inventa responsável. */
  socios: string[] | null;
};

export const AREAS: Area[] = [
  { slug: "direito-societario", nome: "Societário e acordo de sócios", prosa: "direito societário", socios: ["vitor-silvino"] },
  { slug: "contratos-empresariais", nome: "Contratos empresariais", prosa: "contratos empresariais", socios: ["vitor-silvino"] },
  { slug: "direito-bancario", nome: "Bancário e defesa em execução", prosa: "direito bancário", socios: ["vitor-silvino", "thayane-barbosa"] },
  { slug: "marcas-e-propriedade-intelectual", nome: "Marcas, patentes e propriedade intelectual", prosa: "propriedade intelectual", socios: ["vitor-silvino"] },
  { slug: "familia-e-sucessoes", nome: "Família e sucessões", prosa: "família e sucessões", socios: ["thayane-barbosa"] },
  { slug: "direito-imobiliario", nome: "Imobiliário e patrimônio", prosa: "direito imobiliário", socios: ["thayane-barbosa"] },
  // Previdenciário é conduzido por advogada associada. Nome e OAB pendentes,
  // e falta decidir se ela aparece no site. Até lá, sem "Quem conduz".
  { slug: "direito-previdenciario", nome: "Previdenciário", prosa: "direito previdenciário", socios: null },
  { slug: "concursos-publicos", nome: "Concursos públicos", prosa: "concursos públicos", socios: null },
];

/** Link para o perfil do sócio: a página própria, ou o bloco dele em /sobre
 *  enquanto a página não está publicada. */
export const hrefPerfil = (slug: string) =>
  SOCIOS.find((s) => s.slug === slug)?.perfilPublicado ? `/sobre/${slug}` : `/sobre#${slug}`;

/** Nome como aparece em título: "Dr. Vitor Silvino". */
export const nomeExibicao = (s: Socio) => (s.tratamento ? `${s.tratamento} ${s.nome}` : s.nome);

export const socioPorSlug = (slug: string) =>
  SOCIOS.find((s) => s.slug === slug);

/**
 * Quem pode assinar artigo no blog. Hoje são exatamente os dois sócios.
 *
 * Existe separado de SOCIOS porque assinar artigo e ser sócio são coisas
 * diferentes: um advogado associado pode assinar o que escreve. Para incluir
 * alguém aqui é preciso nome, inscrição na OAB e uma foto quadrada, porque os
 * três aparecem publicamente na assinatura do artigo. Sem os três, não entra.
 */
export type Autor = {
  slug: string;
  nome: string;
  oab: string;
  fotoQuadrada: string;
  /** Sócio tem perfil em /sobre; associado ainda não teria. */
  temPerfil: boolean;
};

export const ADVOGADOS: Autor[] = [
  ...SOCIOS.map((s) => ({
    slug: s.slug,
    nome: s.nome,
    oab: s.oab,
    fotoQuadrada: s.fotoQuadrada,
    temPerfil: true,
  })),
  // Advogados associados entram aqui quando houver nome, OAB e foto.
];

export const autorPorSlug = (slug: string) =>
  ADVOGADOS.find((a) => a.slug === slug);

export const enderecoEmLinha = () => {
  const e = ESCRITORIO.endereco;
  return `${e.logradouro}, ${e.bairro}, ${e.cidade}/${e.uf}, CEP ${e.cep}`;
};
