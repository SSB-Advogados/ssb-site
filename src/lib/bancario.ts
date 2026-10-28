/**
 * Conteúdo das páginas bancárias: as páginas locais (advogado bancário por
 * cidade) e as páginas por tema (descontos indevidos, RMC, juros...).
 *
 * Os temas seguem os produtos do curso da Escola de Direito Bancário, mas o
 * texto é do escritório: o material do curso é de uso exclusivo do comprador e
 * não é reproduzido aqui. Citação de lei ou súmula só com o número conferido
 * na fonte oficial (planalto.gov.br, stj.jus.br).
 */

import type { Bloco, Pergunta } from "@/lib/areas-conteudo";

export type Tema = {
  slug: string;
  nome: string;
  resumo: string;
  /** false enquanto a página do tema não existe: o card aparece sem link */
  temPagina: boolean;
};

export const TEMAS: Tema[] = [
  { slug: "descontos-indevidos", nome: "Descontos indevidos", resumo: "Associação, seguro, tarifa ou empréstimo descontado no benefício, no salário ou na conta sem você ter contratado.", temPagina: true },
  { slug: "cartao-consignado-rmc-rcc", nome: "Cartão consignado RMC e RCC", resumo: "Pediu empréstimo e recebeu um cartão com desconto mínimo que não termina nunca.", temPagina: false },
  { slug: "juros-abusivos", nome: "Juros abusivos e revisão de contrato", resumo: "Empréstimo ou financiamento com taxa muito acima da média de mercado para a mesma operação.", temPagina: false },
  { slug: "golpe-do-pix", nome: "Golpe do Pix e fraude bancária", resumo: "Falsa central, falso funcionário, conta aberta ou empréstimo feito em seu nome.", temPagina: false },
  { slug: "superendividamento", nome: "Superendividamento", resumo: "Descontos e parcelas que tomam a renda e não deixam o mínimo para viver.", temPagina: false },
  { slug: "defesa-em-execucao", nome: "Execução e conta bloqueada", resumo: "Empresa, sócio ou avalista executado pelo banco, com bloqueio de conta.", temPagina: false },
];

export type PaginaTema = {
  slug: string;
  title: string;
  description: string;
  rotulo: string;
  h1: string;
  abertura: string;
  tipos: { titulo: string; intro: string; blocos: Bloco[] };
  identificar: { titulo: string; passos: string[] };
  pedidos: { titulo: string; intro: string; itens: string[] };
  documentos: string[];
  faq: Pergunta[];
  relacionados: string[];
};

export const PAGINAS_TEMA: PaginaTema[] = [
  {
    slug: "descontos-indevidos",
    title: "Descontos indevidos no benefício e na conta | Advogado bancário em BH",
    description:
      "Desconto de associação, seguro, tarifa, cartão RMC ou empréstimo que você não contratou, no benefício do INSS, no salário ou na conta. Atendimento em Belo Horizonte e remoto.",
    rotulo: "Direito bancário · Descontos indevidos",
    h1: "Desconto que você não contratou, no benefício ou na conta.",
    abertura:
      "Ele costuma ser pequeno, e é por isso que passa. Vinte, quarenta, oitenta reais por mês, com um nome que ninguém reconhece no extrato. Somado ao longo de anos, o desconto que ninguém pediu vira um valor que faz falta, e o banco ou a entidade que recebeu precisa explicar de onde ele saiu.",
    tipos: {
      titulo: "Os descontos que mais aparecem.",
      intro: "Quase sempre o desconto tem um destes nomes. Um mesmo extrato pode ter mais de um.",
      blocos: [
        { titulo: "Associação ou sindicato no benefício", texto: "Mensalidade de entidade a que o aposentado ou pensionista nunca se filiou, descontada direto no benefício do INSS." },
        { titulo: "Seguro que não foi contratado", texto: "Seguro de vida, residencial, prestamista ou de proteção financeira cobrado na conta ou embutido no empréstimo, sem escolha de quem pagou." },
        { titulo: "Tarifa e cesta de serviços", texto: "Pacote de tarifas em conta que deveria ser gratuita, ou tarifa cobrada por serviço que não foi usado." },
        { titulo: "Cartão RMC ou RCC no lugar de empréstimo", texto: "A pessoa pede um empréstimo consignado e recebe um cartão de crédito consignado, com desconto mínimo mensal que não amortiza a dívida." },
        { titulo: "Empréstimo ou portabilidade que ninguém pediu", texto: "Consignado novo, refinanciamento ou troca de banco averbado no benefício sem contratação, às vezes com depósito na conta para parecer legítimo." },
      ],
    },
    identificar: {
      titulo: "Como conferir o que está sendo descontado.",
      passos: [
        "No aplicativo ou site Meu INSS, baixe o histórico de créditos do benefício: ele mostra mês a mês cada desconto e quem recebeu.",
        "No mesmo lugar, baixe o extrato de empréstimos consignados: ele lista cada contrato e cada cartão averbado, com banco, data e valor.",
        "Para desconto em conta, peça ao banco o extrato do período inteiro e procure os lançamentos com nome de seguro, tarifa, pacote ou cesta.",
        "Separe o que você reconhece do que não reconhece. O que não reconhece é o ponto de partida da análise.",
      ],
    },
    pedidos: {
      titulo: "O que pode ser pedido.",
      intro: "O caminho depende do tipo de desconto e do que os documentos mostram. Em geral, a discussão envolve:",
      itens: [
        "A suspensão do desconto, inclusive por decisão liminar quando a urgência estiver demonstrada.",
        "O cancelamento do contrato, da filiação ou do cartão que não foi pedido.",
        "A devolução do que foi descontado. O Código de Defesa do Consumidor prevê devolução em dobro do que foi cobrado indevidamente (art. 42, parágrafo único), e o cabimento é analisado em cada caso.",
        "Indenização por dano moral, quando o desconto alcança verba de sobrevivência ou se prolonga sem solução.",
      ],
    },
    documentos: [
      "Documento de identidade e CPF",
      "Comprovante de residência",
      "Histórico de créditos do benefício (Meu INSS)",
      "Extrato de empréstimos consignados (Meu INSS)",
      "Extratos bancários do período dos descontos",
      "Contrato, se tiver recebido algum",
      "Protocolo de reclamação no banco, no INSS ou no consumidor.gov.br, se já tiver feito",
    ],
    faq: [
      { p: "Como saber se o desconto é indevido?", r: "Desconto é indevido quando não há contratação válida por trás dele: você não pediu, não assinou ou contratou outra coisa. O primeiro passo é baixar o histórico de créditos e o extrato de consignados no Meu INSS, ou o extrato da conta, e separar o que você reconhece do que não reconhece." },
      { p: "O banco diz que tenho contrato assinado. Acabou?", r: "Não necessariamente. O contrato precisa corresponder ao que foi oferecido e aceito. Assinatura que não é sua, contratação por telefone sem gravação, cartão no lugar de empréstimo e seguro embutido sem opção são pontos que se discutem a partir do próprio documento que o banco apresentar." },
      { p: "Consigo receber de volta o que já foi descontado?", r: "Pode ser pedida a devolução do que foi descontado sem contratação válida. O Código de Defesa do Consumidor prevê a devolução em dobro do valor cobrado indevidamente, e a aplicação depende do caso e do período dos descontos." },
      { p: "Até quantos anos para trás dá para discutir?", r: "Há prazo, e ele é contado parcela por parcela. Por isso descontos muito antigos podem ficar de fora, e esperar reduz o que pode ser discutido. A análise do extrato mostra o que ainda está dentro do prazo." },
      { p: "Preciso reclamar no banco ou no INSS antes?", r: "Não é obrigatório para entrar com ação, mas costuma ajudar. O próprio INSS oferece canal para contestar desconto de associação, e o banco tem ouvidoria. O protocolo dessa reclamação vira documento do caso." },
      { p: "Moro fora de Belo Horizonte. Dá para ser atendido?", r: "Dá. O atendimento é presencial no escritório em Belo Horizonte e remoto para todo o Brasil, com envio dos documentos por WhatsApp ou e-mail." },
    ],
    relacionados: ["cartao-consignado-rmc-rcc", "golpe-do-pix", "superendividamento"],
  },
];

export type PaginaLocal = {
  slug: string;
  cidade: string;
  title: string;
  description: string;
  h1: string;
  abertura: string;
  /** parágrafos próprios da cidade: atendimento, foro, contexto */
  local: { titulo: string; paragrafos: string[] };
  faq: Pergunta[];
};

export const PAGINAS_LOCAIS: PaginaLocal[] = [
  {
    slug: "belo-horizonte",
    cidade: "Belo Horizonte",
    title: "Advogado Bancário em Belo Horizonte",
    description:
      "Advogado bancário em Belo Horizonte: descontos indevidos no INSS e na conta, cartão RMC, juros abusivos, golpe do Pix, superendividamento e defesa em execução. Vitor Silvino, OAB/MG 230.955.",
    h1: "Advogado Bancário em Belo Horizonte",
    abertura:
      "Desconto que você não reconhece, juros que não param de crescer, conta bloqueada, golpe pelo telefone. O escritório atua do lado de quem é cobrado pelo banco, a partir dos documentos do próprio banco.",
    local: {
      titulo: "Atendimento em Belo Horizonte.",
      paragrafos: [
        "O escritório atende presencialmente com hora marcada, no endereço abaixo. Quem preferir pode fazer tudo à distância: a conversa por WhatsApp ou vídeo, os documentos por mensagem e a assinatura eletrônica.",
        "Ações de consumidor contra banco podem ser propostas no foro do domicílio do consumidor. Para quem mora em Belo Horizonte, o caso tramita na comarca da capital, no Juizado Especial ou na Justiça Comum, conforme o valor e a complexidade.",
      ],
    },
    faq: [
      { p: "O que faz um advogado bancário?", r: "Atua nos conflitos com banco e financeira: desconto indevido, contrato com juros acima do mercado, cartão consignado, golpe e fraude, superendividamento, cobrança e execução. O trabalho começa pela leitura do contrato, do extrato e do histórico do benefício, para saber o que de fato foi contratado." },
      { p: "Preciso ir ao escritório?", r: "Não. O atendimento pode ser todo remoto, por WhatsApp e videochamada, com assinatura eletrônica. Quem preferir é atendido presencialmente no escritório, com hora marcada." },
      { p: "Quais documentos levar para a primeira conversa?", r: "Documento de identidade, extratos da conta do período do problema e, para aposentado ou pensionista, o histórico de créditos e o extrato de empréstimos consignados do Meu INSS. Contrato, se tiver. O que faltar o escritório ajuda a pedir." },
      { p: "Dá para resolver sem processo?", r: "Às vezes. Reclamação formal ao banco, à ouvidoria ou pelo consumidor.gov.br resolve parte dos casos, e o protocolo serve de prova se não resolver. Quando a via administrativa não funciona, a discussão vai para o Judiciário." },
      { p: "Quanto tempo demora uma ação contra o banco?", r: "Depende do juízo e do tipo de pedido. Pedido urgente, como a suspensão de um desconto, pode ser analisado no início do processo, antes da decisão final." },
    ],
  },
];

export const temaPorSlug = (slug: string) => PAGINAS_TEMA.find((t) => t.slug === slug);
export const localPorSlug = (slug: string) => PAGINAS_LOCAIS.find((l) => l.slug === slug);
export const hrefTema = (slug: string) => `/direito-bancario/${slug}`;
