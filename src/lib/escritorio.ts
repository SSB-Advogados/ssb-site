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
  nome: string;
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
};

export const SOCIOS: Socio[] = [
  {
    slug: "vitor-silvino",
    nome: "Vitor Silvino",
    oab: "OAB/MG 230.955",

    instagram: "https://www.instagram.com/vitorsilvino.adv/",
    linkedin: "https://www.linkedin.com/in/vitorsilvino/",
    foto: "/fotos/vitor-silvino-1993b.webp",
    fotoQuadrada: "/fotos/vitor-silvino-1993b-q.webp",
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
    oab: "OAB/MG 194.089",

    instagram: "https://www.instagram.com/thayanebarbosa.adv/",
    linkedin: "https://www.linkedin.com/in/thayane-barbosa-8aba79162/",
    foto: "/fotos/thayane-barbosa-1630b.webp",
    fotoQuadrada: "/fotos/thayane-barbosa-1630b-q.webp",
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
  {
    slug: "andreza-santos",
    nome: "Andreza Santos",
    oab: "OAB/MG 210.754",

    instagram: "https://www.instagram.com/andrezapsantos.adv/",
    foto: "/fotos/andreza-santos-2410b.webp",
    fotoQuadrada: "/fotos/andreza-santos-2410b-q.webp",
    areas: ["direito-criminal"],
    destaques: [
      "Prisão em flagrante e audiência de custódia",
      "Tráfico de drogas",
      "Tribunal do júri",
      "Violência doméstica e Lei Maria da Penha",
      "Execução criminal, progressão e livramento",
      "Habeas corpus e recursos",
    ],
  },
];

export type Area = {
  slug: string;
  nome: string;
  /** null quando a área não tem sócio titular. O bloco "Quem conduz"
   *  não é renderizado nesse caso, e não se inventa responsável. */
  socios: string[] | null;
};

export const AREAS: Area[] = [
  { slug: "direito-societario", nome: "Societário e acordo de sócios", socios: ["vitor-silvino"] },
  { slug: "contratos-empresariais", nome: "Contratos empresariais", socios: ["vitor-silvino"] },
  { slug: "direito-bancario", nome: "Bancário e defesa em execução", socios: ["vitor-silvino", "thayane-barbosa"] },
  { slug: "marcas-e-propriedade-intelectual", nome: "Marcas, patentes e propriedade intelectual", socios: ["vitor-silvino"] },
  { slug: "familia-e-sucessoes", nome: "Família e sucessões", socios: ["thayane-barbosa"] },
  { slug: "direito-imobiliario", nome: "Imobiliário e patrimônio", socios: ["thayane-barbosa"] },
  { slug: "direito-criminal", nome: "Criminal", socios: ["andreza-santos"] },
  // Previdenciário é conduzido por advogada associada. Nome e OAB pendentes,
  // e falta decidir se ela aparece no site. Até lá, sem "Quem conduz".
  { slug: "direito-previdenciario", nome: "Previdenciário", socios: null },
  { slug: "concursos-publicos", nome: "Concursos públicos", socios: null },
];

export const socioPorSlug = (slug: string) =>
  SOCIOS.find((s) => s.slug === slug);

/**
 * Quem pode assinar artigo no blog. Hoje são exatamente os três sócios.
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
