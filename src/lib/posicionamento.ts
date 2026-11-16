/**
 * Posicionamento do escritório: advocacia patrimonial e empresarial
 * (reunião dos sócios de 16/11/2026).
 *
 * A home agrupa a atuação em duas frentes. Os itens apontam para páginas
 * que já existem; item sem página fica com `href: null` e aparece sem link.
 * Fica separado de AREAS de propósito: AREAS alimenta /areas-de-atuacao,
 * rodapé, sitemap e schema, e todo slug ali precisa de entrada em CONTEUDO.
 */

export type ItemFrente = {
  titulo: string;
  texto: string;
  href: string | null;
};

export type Frente = {
  slug: string;
  nome: string;
  resumo: string;
  itens: ItemFrente[];
};

export const FRENTES: Frente[] = [
  {
    slug: "patrimonial",
    nome: "Patrimonial",
    resumo:
      "Organizar, transmitir e defender o patrimônio da pessoa e da família, do planejamento à defesa contra quem cobra.",
    itens: [
      {
        titulo: "Família e sucessões",
        texto: "Divórcio e partilha, guarda e alimentos, pacto antenupcial e regime de bens.",
        href: "/areas-de-atuacao/familia-e-sucessoes",
      },
      {
        titulo: "Inventário e partilha",
        texto: "Inventário em cartório ou na Justiça, imóvel travado e herdeiro que não assina.",
        href: "/direito-de-familia/inventario",
      },
      {
        titulo: "Imobiliário e usucapião",
        texto: "Usucapião, ações possessórias e regularização do imóvel e do patrimônio da família.",
        href: "/areas-de-atuacao/direito-imobiliario",
      },
      {
        titulo: "Fraudes bancárias",
        texto: "Empréstimo feito em seu nome, golpe do Pix, falsa central e portabilidade que você não pediu.",
        href: "/direito-bancario/fraude-bancaria",
      },
      {
        titulo: "Defesa em execução",
        texto: "Empresa, sócio ou avalista executado pelo banco, com penhora e conta bloqueada.",
        href: "/direito-bancario/defesa-em-execucao",
      },
      {
        titulo: "Busca e apreensão",
        texto: "Defesa de quem recebeu a notificação ou teve o veículo apreendido. O prazo para agir é curto.",
        href: "/direito-bancario/busca-e-apreensao",
      },
      {
        titulo: "Restituição de IR por doença grave",
        texto: "Isenção do imposto de renda sobre aposentadoria e pensão de quem tem doença grave, com restituição do que foi retido.",
        href: "/areas-de-atuacao/restituicao-ir-doenca-grave",
      },
      {
        titulo: "Transação tributária",
        texto: "Negociação de débitos com a Receita Federal e a Procuradoria da Fazenda Nacional, nas condições previstas em lei.",
        href: "/areas-de-atuacao/direito-tributario",
      },
    ],
  },
  {
    slug: "empresarial",
    nome: "Empresarial",
    resumo:
      "A estrutura jurídica que sustenta a empresa: sociedade, contratos, marca, tributos e o acompanhamento do dia a dia.",
    itens: [
      {
        titulo: "Societário e acordo de sócios",
        texto: "Acordo de sócios, entrada e saída de sócio e apuração de haveres.",
        href: "/areas-de-atuacao/direito-societario",
      },
      {
        titulo: "Contratos empresariais",
        texto: "Prestação de serviço, confidencialidade, cessão e licenciamento.",
        href: "/areas-de-atuacao/contratos-empresariais",
      },
      {
        titulo: "Marcas, patentes e propriedade intelectual",
        texto: "Registro de marca e patente no INPI, da busca de anterioridade ao acompanhamento do pedido.",
        href: "/areas-de-atuacao/marcas-e-propriedade-intelectual",
      },
      {
        titulo: "Tributário",
        texto: "Débitos tributários da empresa e do sócio: regularização, transação e defesa na execução fiscal.",
        href: "/areas-de-atuacao/direito-tributario",
      },
      {
        titulo: "Assessoria jurídica",
        texto: "Acompanhamento jurídico contínuo da empresa, com consulta, revisão de documentos e orientação nas decisões do dia a dia.",
        href: null,
      },
    ],
  },
];

/** Linha de posicionamento de cada sócio, exibida no card da home. */
export const POSICIONAMENTO_SOCIO: Record<string, string> = {
  "vitor-silvino": "Advogado Patrimonial e Empresarial",
  "thayane-barbosa": "Advogada Patrimonial",
};
