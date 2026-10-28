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
  /** nome do tema, no rótulo */
  nome: string;
  /** a dor, nas palavras de quem procura */
  dor: string;
  resumo: string;
  /** false enquanto a página do tema não existe: o card aparece sem link */
  temPagina: boolean;
};

export const TEMAS: Tema[] = [
  { slug: "descontos-indevidos", nome: "Descontos indevidos", dor: "“Meu benefício veio menor e tem um desconto que eu não conheço.”", resumo: "Associação, seguro, tarifa, aplicativo ou empréstimo descontado no benefício, no salário ou na conta sem você ter contratado.", temPagina: true },
  { slug: "cartao-consignado-rmc-rcc", nome: "Cartão consignado RMC e RCC", dor: "“Pedi um empréstimo e o desconto não acaba nunca.”", resumo: "Você queria um consignado e recebeu um cartão. O desconto paga só o mínimo da fatura e a dívida não diminui.", temPagina: true },
  { slug: "fraude-bancaria", nome: "Fraude bancária e golpe do Pix", dor: "“Fizeram um empréstimo no meu nome.” “Caí num golpe e o banco não devolve.”", resumo: "Consignado que você não pediu, dinheiro depositado sem pedido, portabilidade não autorizada, golpe por Pix, boleto ou falsa central.", temPagina: true },
  { slug: "juros-abusivos", nome: "Juros abusivos e revisão de contrato", dor: "“Já paguei muito e a dívida continua quase a mesma.”", resumo: "Empréstimo ou financiamento com juros muito acima da média, acima do contratado, IOF cobrado duas vezes, seguro embutido.", temPagina: true },
  { slug: "busca-e-apreensao", nome: "Financiamento de veículo e busca e apreensão", dor: "“O banco quer tomar o meu carro.”", resumo: "Atraso no financiamento, notificação de busca e apreensão ou veículo já recolhido.", temPagina: true },
  { slug: "superendividamento", nome: "Superendividamento", dor: "“Os descontos comem quase todo o meu salário.”", resumo: "Parcelas e descontos que tomam a renda e não deixam o mínimo para viver.", temPagina: true },
  { slug: "defesa-em-execucao", nome: "Execução bancária e conta bloqueada", dor: "“O banco bloqueou a conta da minha empresa.”", resumo: "Empresa, sócio ou avalista executado por cédula de crédito bancário, com penhora e bloqueio de conta.", temPagina: true },
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
      "Desconto de associação, seguro, tarifa, aplicativo ou empréstimo que você não contratou, no benefício do INSS, no salário ou na conta. Atendimento em Belo Horizonte e remoto.",
    rotulo: "Direito bancário · Descontos indevidos",
    h1: "“Meu benefício veio menor e eu não sei por quê.”",
    abertura:
      "O desconto costuma ser pequeno, e é por isso que passa. Vinte, quarenta, oitenta reais por mês, com um nome que ninguém reconhece no extrato. Somado ao longo dos anos, vira um dinheiro que faz falta. Quem recebeu precisa provar que você autorizou. Se não provar, o desconto é indevido.",
    tipos: {
      titulo: "Os descontos que mais aparecem.",
      intro: "Quase sempre o desconto tem um destes nomes. Um mesmo extrato pode ter mais de um.",
      blocos: [
        { titulo: "“Contribuição” de associação ou sindicato", texto: "Mensalidade de entidade a que você nunca se filiou, descontada direto no benefício do INSS. O desconto no benefício só pode existir com autorização sua." },
        { titulo: "Seguro que você não pediu", texto: "Seguro de vida, residencial ou prestamista cobrado na conta ou embutido no empréstimo. Em conta de aposentado e pensionista, esse tipo de cobrança tem restrição própria nas regras do INSS." },
        { titulo: "Tarifa na conta que recebe o benefício ou o salário", texto: "Pacote de tarifas, cesta de serviços ou anuidade cobrados numa conta usada só para receber. Os serviços básicos dessa conta não podem ser cobrados." },
        { titulo: "Aplicativo, clube ou serviço que você não conhece", texto: "Débito de assinatura, aplicativo, título de capitalização ou “clube de vantagens” que aparece na conta sem você ter aderido." },
        { titulo: "Contrato assinado só com a digital", texto: "Para quem não sabe ler ou escrever, o contrato com a digital precisa de assinatura a rogo e de duas testemunhas. Sem essa forma, ele não vale." },
      ],
    },
    identificar: {
      titulo: "Como conferir o que está sendo descontado.",
      passos: [
        "No aplicativo ou site Meu INSS, baixe o histórico de créditos do benefício. Ele mostra, mês a mês, cada desconto e quem recebeu.",
        "No mesmo lugar, baixe o extrato de empréstimos consignados. Ele lista cada contrato e cada cartão averbado no seu benefício.",
        "Para desconto em conta, peça ao banco o extrato do período inteiro e marque os lançamentos com nome de seguro, tarifa, pacote, cesta ou serviço.",
        "Separe o que você reconhece do que não reconhece. O que você não reconhece é o ponto de partida.",
      ],
    },
    pedidos: {
      titulo: "O que pode ser pedido.",
      intro: "O caminho depende do tipo de desconto e do que os documentos mostram. Em geral, a discussão envolve:",
      itens: [
        "Parar o desconto, inclusive por decisão liminar quando a urgência estiver demonstrada.",
        "Cancelar a filiação, o seguro, o pacote ou o contrato que você não pediu.",
        "Receber de volta o que foi descontado. O Código de Defesa do Consumidor prevê devolução em dobro do que foi cobrado indevidamente (art. 42, parágrafo único), e o cabimento é analisado em cada caso.",
        "Indenização por dano moral, quando o desconto alcança dinheiro de sobrevivência ou se prolonga sem solução.",
      ],
    },
    documentos: [
      "Documento de identidade e CPF",
      "Comprovante de residência",
      "Histórico de créditos do benefício (Meu INSS)",
      "Extrato de empréstimos consignados (Meu INSS)",
      "Extratos bancários do período dos descontos",
      "Contrato ou proposta, se tiver recebido algum",
      "Protocolo de reclamação no banco, no INSS ou no consumidor.gov.br, se já tiver feito",
    ],
    faq: [
      { p: "Como saber se o desconto é indevido?", r: "Desconto é indevido quando não há contratação válida por trás dele: você não pediu, não assinou ou contratou outra coisa. Baixe o histórico de créditos e o extrato de consignados no Meu INSS, ou o extrato da conta, e separe o que você reconhece do que não reconhece." },
      { p: "O banco diz que tenho contrato assinado. Acabou?", r: "Não necessariamente. O contrato precisa corresponder ao que foi oferecido e aceito. Assinatura que não é sua, contratação por telefone sem gravação, contrato só com a digital e seguro embutido sem opção são pontos que se discutem a partir do próprio documento que o banco apresentar." },
      { p: "Consigo receber de volta o que já foi descontado?", r: "Pode ser pedida a devolução do que foi descontado sem contratação válida. O Código de Defesa do Consumidor prevê a devolução em dobro do valor cobrado indevidamente, e a aplicação depende do caso e do período dos descontos." },
      { p: "Até quantos anos para trás dá para discutir?", r: "Há prazo, e ele corre parcela por parcela. Descontos muito antigos podem ficar de fora, e esperar reduz o que pode ser discutido. A análise do extrato mostra o que ainda está dentro do prazo." },
      { p: "Preciso reclamar no banco ou no INSS antes?", r: "Não é obrigatório para entrar com ação, mas costuma ajudar. O INSS tem canal para contestar desconto de associação, e o banco tem ouvidoria. O protocolo dessa reclamação vira documento do caso." },
      { p: "Moro fora de Belo Horizonte. Dá para ser atendido?", r: "Dá. O atendimento é presencial no escritório em Belo Horizonte e remoto para todo o Brasil, com envio dos documentos por WhatsApp ou e-mail." },
    ],
    relacionados: ["cartao-consignado-rmc-rcc", "fraude-bancaria", "superendividamento"],
  },
  {
    slug: "cartao-consignado-rmc-rcc",
    title: "Cartão consignado RMC e RCC: o desconto que não acaba | Advogado bancário em BH",
    description:
      "Pediu empréstimo consignado e recebeu cartão RMC ou RCC? O desconto paga só o mínimo da fatura e a dívida não acaba. Entenda o que pode ser pedido. Atendimento em BH e remoto.",
    rotulo: "Direito bancário · Cartão consignado",
    h1: "“Pedi um empréstimo e o desconto não acaba nunca.”",
    abertura:
      "Você pediu um empréstimo consignado, recebeu o dinheiro e começou a pagar. Anos depois, o desconto continua igual e a dívida não diminui. É o sinal mais comum de que o banco averbou um cartão de crédito consignado (RMC ou RCC) no lugar do empréstimo: o desconto paga só o mínimo da fatura, e o resto vira dívida de cartão, com juros de cartão.",
    tipos: {
      titulo: "Como esse caso costuma aparecer.",
      intro: "Nem todo cartão consignado é irregular. Estas são as situações em que a discussão costuma caber.",
      blocos: [
        { titulo: "Você queria empréstimo e recebeu cartão", texto: "A oferta foi de empréstimo, o dinheiro caiu como saque do cartão, e ninguém explicou que o desconto mensal seria só o mínimo da fatura." },
        { titulo: "O cartão nunca foi usado em compras", texto: "O único uso foi o saque inicial. Na prática, foi um empréstimo, e ele pode ser tratado como empréstimo, com as regras de empréstimo." },
        { titulo: "O desconto passou de 60 meses", texto: "As regras do INSS limitam o tempo desse desconto. Cartão que segue descontando por anos a fio merece conferência." },
        { titulo: "Dois cartões no mesmo benefício", texto: "RMC e RCC ao mesmo tempo, somando desconto acima da parte da margem reservada ao cartão. No BPC/LOAS a situação tem regra própria." },
        { titulo: "Juros acima do teto", texto: "Os juros do cartão consignado de aposentado e pensionista têm limite fixado pelo INSS. Fatura com taxa acima disso é cobrança a mais." },
      ],
    },
    identificar: {
      titulo: "Como saber se o seu é cartão.",
      passos: [
        "No Meu INSS, abra o extrato de empréstimos consignados. Cartão aparece separado, como “RMC” ou “RCC”, com o nome do banco.",
        "No histórico de créditos, procure a rubrica do desconto. “Reserva de margem” ou “cartão” indica cartão, não empréstimo.",
        "Veja se o valor descontado é sempre o mesmo, mês após mês, sem prazo de término. Empréstimo tem número de parcelas; cartão não.",
        "Procure faturas do cartão em casa ou no aplicativo do banco. Muita gente nunca recebeu nenhuma.",
      ],
    },
    pedidos: {
      titulo: "O que pode ser pedido.",
      intro: "Depende de como o cartão foi usado e do que o contrato mostra. Os pedidos mais comuns são:",
      itens: [
        "Converter o cartão em empréstimo consignado comum, com os juros do empréstimo e número de parcelas definido.",
        "Reconhecer que a dívida já foi paga, quando o que foi descontado supera o que foi recebido, e parar o desconto.",
        "Cancelar o segundo cartão, quando há dois averbados no mesmo benefício.",
        "Devolver o que foi descontado a mais, em dobro quando cabível, e indenização por dano moral conforme o caso.",
      ],
    },
    documentos: [
      "Documento de identidade e CPF",
      "Comprovante de residência",
      "Extrato de empréstimos consignados (Meu INSS)",
      "Histórico de créditos do benefício desde o início do desconto",
      "Extrato da conta do mês em que o dinheiro caiu",
      "Faturas do cartão, se tiver",
      "Contrato ou proposta, se tiver",
    ],
    faq: [
      { p: "Qual a diferença entre RMC e RCC?", r: "As duas são reservas de margem para cartão de crédito consignado. A RMC é a do cartão consignado tradicional; a RCC é a do cartão consignado de benefício, criada depois. Nas duas, o desconto mensal paga o mínimo da fatura." },
      { p: "Se eu cancelar o cartão, o desconto para?", r: "Nem sempre. Com saldo em aberto, o banco costuma manter o desconto. Por isso o caminho passa por recalcular a dívida: muitas vezes o que já foi descontado paga o que foi recebido." },
      { p: "Assinei o contrato. Mesmo assim posso discutir?", r: "Pode. A discussão é se você foi informado de que estava contratando cartão e não empréstimo. Assinatura num contrato que não deixava isso claro não resolve a questão." },
      { p: "Vou ter que devolver o dinheiro que recebi?", r: "O valor recebido entra na conta. O que se discute é quanto você já pagou por ele e quanto ainda deve, se dever. Em muitos casos, o saldo é a seu favor." },
      { p: "Quanto tempo leva?", r: "Depende do juízo. O pedido para parar o desconto pode ser analisado no início do processo, antes da decisão final." },
    ],
    relacionados: ["descontos-indevidos", "superendividamento", "juros-abusivos"],
  },
  {
    slug: "fraude-bancaria",
    title: "Fraude bancária e golpe do Pix | Advogado bancário em BH",
    description:
      "Empréstimo feito no seu nome, dinheiro depositado sem pedido, portabilidade não autorizada, golpe por Pix, boleto ou falsa central. Responsabilidade do banco. Atendimento em BH e remoto.",
    rotulo: "Direito bancário · Fraude e golpe",
    h1: "“Fizeram um empréstimo no meu nome.”",
    abertura:
      "Um dia aparece um desconto novo, ou um dinheiro na conta que você não pediu, ou uma ligação do “banco” que termina com a conta vazia. Fraude não é culpa de quem foi enganado. O banco responde quando a fraude passa pelo sistema dele, e a lei e os tribunais tratam essa responsabilidade com rigor.",
    tipos: {
      titulo: "As fraudes que mais chegam ao escritório.",
      intro: "Cada uma tem um caminho diferente. O ponto comum é que o banco precisa provar que a operação foi feita por você.",
      blocos: [
        { titulo: "Consignado que você não contratou", texto: "Empréstimo averbado no benefício com assinatura que não é sua, selfie tirada sem você saber ou contratação por telefone que você não fez." },
        { titulo: "Dinheiro depositado sem você pedir", texto: "Cai um valor na conta e, no mês seguinte, começa o desconto. Não gaste esse dinheiro: ele é a prova de que a operação não partiu de você." },
        { titulo: "Portabilidade que ninguém autorizou", texto: "Seu consignado mudou de banco sem pedido, às vezes com um “troco” depositado, e as parcelas e o prazo ficaram piores." },
        { titulo: "Golpe por Pix, boleto ou TED", texto: "Falsa central, falso funcionário, falso atendente do consignado. As transferências saem da sua conta fora do seu padrão de uso, e o banco não bloqueia." },
        { titulo: "Conta aberta no seu nome", texto: "Conta, cartão ou crédito abertos com os seus dados, usados para receber dinheiro de golpe ou para gerar dívida." },
      ],
    },
    identificar: {
      titulo: "O que fazer assim que perceber.",
      passos: [
        "Avise o banco pelo canal oficial e anote o protocolo. Em golpe por Pix, peça a contestação da transação o quanto antes: existe um mecanismo de devolução, e ele tem prazo.",
        "Registre boletim de ocorrência, mesmo que pela internet.",
        "Se caiu dinheiro que você não pediu, não use. Guarde o extrato que mostra o depósito.",
        "Baixe o extrato de empréstimos consignados no Meu INSS e o extrato da conta do período. Guarde prints de conversas, ligações e mensagens.",
      ],
    },
    pedidos: {
      titulo: "O que pode ser pedido.",
      intro: "O Superior Tribunal de Justiça já firmou que o banco responde pelos danos de fraudes praticadas por terceiros nas operações bancárias (Súmula 479). A partir disso, os pedidos costumam ser:",
      itens: [
        "Declarar que o contrato não existe e parar os descontos, inclusive por liminar.",
        "Devolver o que foi descontado, em dobro quando cabível, com o acerto do valor depositado sem pedido.",
        "Desfazer a portabilidade não autorizada e restabelecer o contrato anterior.",
        "Ressarcir o que saiu da conta no golpe, quando houve falha de segurança do banco, e indenização por dano moral conforme o caso.",
      ],
    },
    documentos: [
      "Documento de identidade e CPF",
      "Boletim de ocorrência",
      "Protocolos de reclamação no banco",
      "Extrato da conta do período, mostrando depósito ou transferências",
      "Extrato de empréstimos consignados (Meu INSS), se o caso for de consignado",
      "Prints de conversas, mensagens, e-mails e registro de ligações",
    ],
    faq: [
      { p: "O banco diz que fui eu que fiz. E agora?", r: "Quem precisa provar que a contratação foi feita por você é o banco. Ele deve apresentar o contrato, a assinatura, a biometria ou a gravação. Assinatura diferente, selfie sem contexto e contratação fora do seu padrão são pontos de discussão." },
      { p: "Caiu um dinheiro na minha conta que eu não pedi. Posso usar?", r: "Não use. Guarde o valor e o extrato. Usar o dinheiro pode ser interpretado como aceitação do contrato. O acerto desse valor é feito no próprio processo." },
      { p: "Caí no golpe da falsa central. O banco tem que devolver?", r: "Depende do caso. Quando as transações fogem do seu padrão de uso e o banco não bloqueia, há falha de segurança, e o banco pode ser responsabilizado. Cada caso é analisado pelos extratos e pelo que aconteceu." },
      { p: "Quanto tempo tenho para agir?", r: "O mecanismo de devolução do Pix tem prazo curto, por isso o aviso ao banco deve ser imediato. Para a ação judicial o prazo é maior, mas quanto antes, mais fácil reunir a prova." },
      { p: "Preciso de boletim de ocorrência?", r: "Ajuda muito. Ele registra a data e a versão dos fatos e costuma ser pedido pelo banco e pelo juiz." },
    ],
    relacionados: ["descontos-indevidos", "cartao-consignado-rmc-rcc", "superendividamento"],
  },
  {
    slug: "juros-abusivos",
    title: "Juros abusivos e revisão de contrato bancário | Advogado bancário em BH",
    description:
      "Empréstimo, consignado ou financiamento com juros muito acima da média do Banco Central, acima do contratado, IOF em dobro ou seguro embutido. Revisão do contrato em BH e remoto.",
    rotulo: "Direito bancário · Juros e revisão",
    h1: "“Já paguei muito e a dívida continua quase a mesma.”",
    abertura:
      "Juros altos não são, por si sós, ilegais. O que se discute é taxa muito acima da média de mercado para a mesma operação, taxa cobrada acima da que foi contratada e encargos que não deveriam estar ali. A resposta está no contrato e nos números, e é por eles que a análise começa.",
    tipos: {
      titulo: "O que costuma estar errado no contrato.",
      intro: "Um mesmo contrato pode ter mais de um destes pontos.",
      blocos: [
        { titulo: "Juros muito acima da média", texto: "O Banco Central divulga a taxa média de cada tipo de operação, mês a mês. Taxa muito acima dessa média, sem justificativa, pode ser revista." },
        { titulo: "Juros acima do que foi contratado", texto: "O contrato diz uma taxa e a parcela foi calculada com outra, maior. No consignado de aposentado, há ainda o teto de juros fixado pelo INSS." },
        { titulo: "IOF cobrado duas vezes", texto: "O imposto aparece descontado no valor liberado e de novo embutido no financiamento." },
        { titulo: "Seguro prestamista empurrado junto", texto: "O seguro veio no pacote, sem você poder escolher outro ou não contratar. O STJ já decidiu que o consumidor não pode ser obrigado a contratar o seguro com o banco ou com a seguradora indicada por ele." },
        { titulo: "Financiamento de veículo ou imóvel", texto: "Tarifas, seguro, IOF e juros somados no financiamento, que encarecem a parcela durante anos." },
      ],
    },
    identificar: {
      titulo: "Como começar a conferir.",
      passos: [
        "Encontre o contrato. Se não tiver, o banco é obrigado a fornecer uma cópia, e o escritório pode fazer o pedido formal.",
        "Localize a taxa de juros mensal e anual e o Custo Efetivo Total (CET) no contrato.",
        "Compare o valor liberado com o valor financiado: a diferença mostra o que foi embutido.",
        "Separe os extratos ou boletos das parcelas pagas.",
      ],
    },
    pedidos: {
      titulo: "O que pode ser pedido.",
      intro: "Com o contrato e o cálculo em mãos, a revisão pode envolver:",
      itens: [
        "Aplicar a taxa média de mercado no lugar da taxa abusiva, ou a taxa contratada no lugar da cobrada a mais.",
        "Excluir o IOF duplicado, o seguro imposto e as tarifas indevidas.",
        "Recalcular o saldo devedor e as parcelas.",
        "Devolver o que foi pago a mais, de forma simples ou em dobro conforme o caso.",
      ],
    },
    documentos: [
      "Documento de identidade e CPF",
      "Contrato ou cédula de crédito",
      "Extratos ou boletos das parcelas pagas",
      "Extrato da conta do mês da liberação do dinheiro",
      "Para consignado: extrato de empréstimos do Meu INSS ou contracheque",
    ],
    faq: [
      { p: "Todo juro alto é abusivo?", r: "Não. A referência é a taxa média de mercado para a mesma operação, no mesmo período. O que se discute é a taxa muito acima dessa média, e isso se verifica com cálculo." },
      { p: "Não tenho o contrato. Dá para revisar?", r: "Dá para começar. O banco é obrigado a fornecer a cópia do contrato, e, se não fornecer, existe ação para exigir a exibição do documento." },
      { p: "Posso parar de pagar enquanto discuto?", r: "Não é recomendável parar por conta própria. Atraso gera mora e, no financiamento de veículo, abre caminho para a busca e apreensão. O que pode ser pedido ao juiz é outra coisa, conforme o caso." },
      { p: "Vale a pena revisar um contrato já quitado?", r: "Pode valer. O que foi pago a mais pode ser pedido de volta, dentro do prazo legal." },
      { p: "O seguro prestamista é obrigatório?", r: "Não pode ser imposto. O consumidor tem o direito de não contratar ou de escolher a seguradora. Quando o seguro vem embutido sem essa escolha, a cobrança pode ser discutida." },
    ],
    relacionados: ["busca-e-apreensao", "cartao-consignado-rmc-rcc", "superendividamento"],
  },
  {
    slug: "busca-e-apreensao",
    title: "Busca e apreensão de veículo: defesa e revisão | Advogado bancário em BH",
    description:
      "Atrasou o financiamento e o banco pediu a busca e apreensão do carro? Prazos, como reaver o veículo e o que pode ser discutido. Atendimento em Belo Horizonte e remoto.",
    rotulo: "Direito bancário · Veículo",
    h1: "“O banco quer tomar o meu carro.”",
    abertura:
      "No financiamento com alienação fiduciária, o carro fica em garantia do banco até a última parcela. Com o atraso, o banco pode pedir a busca e apreensão, e a liminar costuma sair rápido. Os prazos depois disso são curtos, e agir no começo faz diferença.",
    tipos: {
      titulo: "Em que ponto você está.",
      intro: "O que pode ser feito muda conforme o momento.",
      blocos: [
        { titulo: "Parcelas atrasadas, sem processo ainda", texto: "É o momento de conferir o contrato e negociar com base em números, antes da notificação virar ação." },
        { titulo: "Recebeu notificação ou citação", texto: "Há processo de busca e apreensão. O prazo para pagar e o prazo para se defender começam a partir da apreensão." },
        { titulo: "O carro já foi recolhido", texto: "A lei dá cinco dias para pagar a dívida apresentada pelo banco e reaver o veículo. Depois disso, o banco pode vendê-lo." },
        { titulo: "O devedor faleceu", texto: "Se havia seguro prestamista no financiamento, os herdeiros podem pedir que o seguro quite a dívida, em vez de perder o carro." },
      ],
    },
    identificar: {
      titulo: "O que fazer agora.",
      passos: [
        "Separe o contrato de financiamento e os comprovantes das parcelas pagas.",
        "Se recebeu carta ou citação, anote a data. Se o carro foi apreendido, anote a data da apreensão: os prazos contam a partir dela.",
        "Não esconda o veículo. Isso piora a situação no processo.",
        "Procure orientação antes de assinar qualquer acordo proposto pelo banco ou pela empresa de cobrança.",
      ],
    },
    pedidos: {
      titulo: "O que pode ser discutido.",
      intro: "A defesa na busca e apreensão e a revisão do contrato andam juntas:",
      itens: [
        "Pagar a dívida para reaver o veículo dentro do prazo, conferindo se o valor cobrado está correto.",
        "Discutir encargos abusivos do contrato, que podem afastar a própria mora que fundamenta a ação.",
        "Revisar tarifas, seguro, IOF e juros do financiamento.",
        "Indenização, quando o banco vende o carro de forma irregular ou por valor muito abaixo do mercado.",
      ],
    },
    documentos: [
      "Documento de identidade e CPF",
      "Contrato de financiamento",
      "Comprovantes das parcelas pagas",
      "Notificação, carta ou citação recebida",
      "Auto de apreensão, se o carro já foi recolhido",
      "Apólice do seguro prestamista, se houver",
    ],
    faq: [
      { p: "Quanto tempo tenho para reaver o carro?", r: "Depois da apreensão, a lei dá cinco dias para pagar a integralidade da dívida apresentada pelo banco e reaver o veículo livre de ônus. Para a defesa no processo, o prazo é de quinze dias." },
      { p: "Posso pagar só as parcelas atrasadas?", r: "Pela regra atual, para reaver o carro na busca e apreensão é preciso pagar a dívida inteira apresentada pelo banco, não só o atraso. Por isso a conferência desse valor importa." },
      { p: "O banco pode vender meu carro?", r: "Pode, depois do prazo legal. Mas o valor da venda tem de ser abatido da dívida, e você tem direito à prestação de contas e ao que sobrar." },
      { p: "Juros abusivos ajudam na defesa?", r: "Podem ajudar. Quando o contrato cobra encargo abusivo no período normal, os tribunais podem entender que não houve mora, e a busca e apreensão perde a base." },
      { p: "Meu pai faleceu e o carro era financiado. O que acontece?", r: "Se o financiamento tinha seguro prestamista, ele pode quitar a dívida. Os herdeiros devem acionar o seguro e, se houver recusa, a cobrança pode ser feita na Justiça." },
    ],
    relacionados: ["juros-abusivos", "superendividamento", "fraude-bancaria"],
  },
  {
    slug: "superendividamento",
    title: "Superendividamento e descontos acima da margem | Advogado bancário em BH",
    description:
      "Dívidas e descontos que tomam a renda e não deixam o mínimo para viver. Repactuação pela Lei do Superendividamento e limite da margem consignável. Atendimento em BH e remoto.",
    rotulo: "Direito bancário · Superendividamento",
    h1: "“Os descontos comem quase todo o meu salário.”",
    abertura:
      "Um empréstimo para pagar outro, o cartão no mínimo, o consignado tomando o contracheque. Chega um ponto em que a renda não cobre mais o básico. A lei reconhece essa situação como superendividamento e criou um caminho para reorganizar as dívidas sem abrir mão do mínimo para viver.",
    tipos: {
      titulo: "Quando o caso é de superendividamento.",
      intro: "Algumas situações que costumam caber aqui:",
      blocos: [
        { titulo: "As parcelas somadas passam da renda", texto: "Empréstimos, cartões e financiamentos de boa-fé que, juntos, não cabem mais no orçamento." },
        { titulo: "Consignado acima da margem", texto: "A lei limita quanto do salário ou do benefício pode ser descontado em consignado. Descontos que passam disso podem ser reduzidos." },
        { titulo: "Crédito que não deveria ter sido dado", texto: "O banco concedeu empréstimo atrás de empréstimo sem avaliar se você conseguiria pagar." },
        { titulo: "Dívida que só cresce", texto: "Cartão no mínimo e cheque especial rodando todo mês, com a dívida maior a cada fatura." },
      ],
    },
    identificar: {
      titulo: "Como organizar o quadro.",
      passos: [
        "Liste todas as dívidas: credor, valor da parcela, quantas faltam, se há atraso.",
        "Separe o contracheque ou o extrato do benefício, com todos os descontos.",
        "Anote as despesas básicas da casa: aluguel, água, luz, alimentação, remédios.",
        "Não faça novo empréstimo para pagar os antigos antes de ver o quadro inteiro.",
      ],
    },
    pedidos: {
      titulo: "O que a lei permite pedir.",
      intro: "A Lei 14.181/2021 incluiu o superendividamento no Código de Defesa do Consumidor. Com ela, é possível:",
      itens: [
        "Pedir uma audiência de conciliação com todos os credores ao mesmo tempo.",
        "Apresentar um plano de pagamento de até cinco anos, preservando o mínimo existencial.",
        "Limitar os descontos de consignado à margem permitida em lei.",
        "Revisar contratos com juros abusivos dentro do mesmo processo.",
      ],
    },
    documentos: [
      "Documento de identidade e CPF",
      "Contracheque ou extrato do benefício com os descontos",
      "Lista de dívidas, com contratos e extratos que tiver",
      "Comprovantes das despesas básicas",
      "Extrato de empréstimos consignados (Meu INSS), se for aposentado ou pensionista",
    ],
    faq: [
      { p: "Quem pode pedir a repactuação?", r: "A pessoa física de boa-fé que não consegue pagar as dívidas de consumo sem comprometer o mínimo para viver. Dívidas com garantia real, financiamento imobiliário e crédito rural ficam fora do plano." },
      { p: "Vou ficar com o nome sujo?", r: "O objetivo é o contrário: organizar as dívidas em um plano que caiba na renda. O que acontece com cada registro depende do acordo com os credores." },
      { p: "E se o credor não aceitar?", r: "Se não houver acordo na audiência, o juiz pode, a pedido, impor um plano judicial compulsório aos credores que não aceitaram." },
      { p: "Quanto pode ser descontado em consignado?", r: "A lei fixa um percentual máximo da renda para os consignados, com parte reservada a cartão. Desconto acima disso pode ser limitado judicialmente." },
      { p: "Preciso parar de pagar para entrar com o pedido?", r: "Não. O pedido pode ser feito com as parcelas em dia. Parar de pagar por conta própria pode piorar a situação." },
    ],
    relacionados: ["cartao-consignado-rmc-rcc", "juros-abusivos", "descontos-indevidos"],
  },
  {
    slug: "defesa-em-execucao",
    title: "Execução bancária e conta bloqueada: defesa da empresa e do avalista | Advogado bancário em BH",
    description:
      "Empresa, sócio ou avalista executado por cédula de crédito bancário, com penhora e conta bloqueada. Embargos, desbloqueio e negociação com o banco. Atendimento em BH e remoto.",
    rotulo: "Direito bancário · Execução",
    h1: "“O banco bloqueou a conta da minha empresa.”",
    abertura:
      "O bloqueio não avisa. Ele aparece quando a folha vai ser paga ou o fornecedor vai ser quitado. Por trás dele costuma haver uma execução de cédula de crédito bancário contra a empresa e contra quem assinou como avalista. O prazo para reagir começa a correr antes de você entender o que aconteceu.",
    tipos: {
      titulo: "O que costuma aparecer nos documentos do banco.",
      intro: "A defesa começa cruzando a cédula, o demonstrativo e o extrato. Os achados mais comuns:",
      blocos: [
        { titulo: "Números que não batem", texto: "O valor da cédula, o do demonstrativo da dívida e o do extrato não conversam entre si, e a diferença é cobrada." },
        { titulo: "Juros contados antes da hora", texto: "Encargos calculados desde antes da emissão da cédula ou da liberação do dinheiro." },
        { titulo: "Cobrança em dobro do mesmo período", texto: "O banco antecipa o saldo inteiro e, ao mesmo tempo, cobra as parcelas que ainda iam vencer." },
        { titulo: "Garantia de fundo esquecida", texto: "Operações com garantia de fundo, como FGO e FAMPE, em que a garantia não aparece na conta da execução." },
        { titulo: "Bloqueio do que não podia", texto: "Salário, verba alimentar e poupança até o limite legal têm proteção, e o bloqueio automático não faz distinção." },
      ],
    },
    identificar: {
      titulo: "O que fazer assim que souber.",
      passos: [
        "Descubra o número do processo pelo extrato do bloqueio ou pela citação.",
        "Anote a data da citação: o prazo dos embargos é de quinze dias e, em regra, corre a partir da juntada do comprovante da citação aos autos.",
        "Separe a cédula de crédito, os aditivos, os extratos da conta e qualquer renegociação feita.",
        "Não assine confissão de dívida antes de conferir os números.",
      ],
    },
    pedidos: {
      titulo: "Como a defesa atua.",
      intro: "Conforme o caso:",
      itens: [
        "Pedido de desbloqueio do valor impenhorável, com prova da origem do dinheiro.",
        "Embargos à execução, apontando o excesso e o valor que se entende correto, ou exceção de pré-executividade quando o vício é evidente.",
        "Defesa própria do avalista, inclusive quanto aos limites da garantia que ele prestou.",
        "Negociação com o banco a partir de um número conferido, e não do saldo apresentado por ele.",
      ],
    },
    documentos: [
      "Contrato social da empresa e documentos dos sócios",
      "Cédula de crédito bancário e aditivos",
      "Extratos da conta da operação",
      "Citação ou mandado recebido",
      "Comprovante do bloqueio",
      "Renegociações e acordos anteriores, se houver",
    ],
    faq: [
      { p: "Qual o prazo para me defender na execução?", r: "Os embargos à execução têm prazo de quinze dias (art. 915 do Código de Processo Civil), contados, em regra, da juntada aos autos do comprovante da citação." },
      { p: "O avalista responde por tudo?", r: "O avalista responde pela dívida que garantiu, mas tem defesas próprias e pode discutir o valor cobrado. Cada caso depende do que foi assinado." },
      { p: "Salário pode ser bloqueado?", r: "Como regra, não. O Código de Processo Civil protege salário, verba alimentar e poupança até quarenta salários mínimos, com exceções previstas em lei. A proteção precisa ser demonstrada no processo." },
      { p: "Quanto tempo demora o desbloqueio?", r: "Não há prazo fixo. Pedido bem instruído, com extrato que prove a origem do valor, tende a ser decidido mais rápido." },
      { p: "Vale mais negociar ou se defender?", r: "As duas coisas andam juntas. A defesa organiza os números e dá base para negociar sobre o valor real da dívida." },
    ],
    relacionados: ["juros-abusivos", "fraude-bancaria", "superendividamento"],
  },
];

/** Texto do topo das páginas locais. É o mesmo em toda cidade (Vitor,
 *  28/10/2026), escrito a partir das palavras dele. */
export const CREDENCIAL_LOCAL =
  "O Dr. Vitor Silvino atuou por anos dentro de instituição financeira, empresa de crédito e na Serasa Experian. Conhece por dentro como o banco funciona.";
export const ABERTURA_LOCAL =
  "Desconto que você não reconhece. Juros que não param de crescer. Empréstimo que você nunca pediu. Consignado que você nunca termina de pagar. Carro ameaçado de busca e apreensão. Conta bloqueada por execução bancária. Nós podemos te ajudar.";

export type PaginaLocal = {
  slug: string;
  cidade: string;
  /** foto do topo; sem ela, usa a do perfil do Vitor */
  foto?: string;
  title: string;
  description: string;
  h1: string;
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
  {
    slug: "nova-lima",
    cidade: "Nova Lima",
    foto: "/fotos/vitor-silvino-topo-3839.webp",
    title: "Advogado Bancário em Nova Lima",
    description:
      "Advogado bancário para quem mora em Nova Lima: descontos indevidos, cartão RMC, fraude, juros abusivos, busca e apreensão, superendividamento e execução. Dr. Vitor Silvino, OAB/MG 230.955.",
    h1: "Advogado Bancário em Nova Lima",
    local: {
      titulo: "Atendimento para Nova Lima.",
      paragrafos: [
        "Quem mora no Centro, no Vila da Serra, no Jardim Canadá, no Alphaville ou em qualquer bairro de Nova Lima é atendido pelo escritório em Belo Horizonte, com hora marcada, ou inteiramente à distância, por WhatsApp e videochamada.",
        "O Código de Defesa do Consumidor permite que a ação contra o banco seja proposta no foro do domicílio do consumidor (art. 101, I). Para quem mora em Nova Lima, isso significa que o processo pode correr na comarca de Nova Lima, sem precisar se deslocar para a capital.",
      ],
    },
    faq: [
      { p: "O escritório tem sede em Nova Lima?", r: "Não. O escritório fica em Belo Horizonte e atende quem mora em Nova Lima presencialmente, com hora marcada, ou à distância. O processo pode correr na comarca de Nova Lima." },
      { p: "Preciso ir até Belo Horizonte?", r: "Não é necessário. A conversa, o envio dos documentos e a assinatura do contrato podem ser feitos à distância. As audiências, quando houver, costumam ser no fórum da comarca do processo ou por vídeo." },
      { p: "Minha empresa fica em Nova Lima e teve a conta bloqueada. O escritório atende?", r: "Atende. A defesa em execução bancária é feita no processo em que a ordem de bloqueio foi dada, onde quer que ele esteja." },
      { p: "Sou aposentado e moro em Nova Lima. Como mando os documentos?", r: "Por WhatsApp ou e-mail. O histórico de créditos e o extrato de consignados podem ser baixados no Meu INSS, e o escritório orienta passo a passo quem tiver dificuldade." },
      { p: "Quanto tempo leva uma ação contra o banco?", r: "Depende do juízo e do tipo de pedido. Pedido urgente, como a suspensão de um desconto, pode ser analisado no início do processo." },
    ],
  },
];

export const temaPorSlug = (slug: string) => PAGINAS_TEMA.find((t) => t.slug === slug);
export const localPorSlug = (slug: string) => PAGINAS_LOCAIS.find((l) => l.slug === slug);
export const hrefTema = (slug: string) => `/direito-bancario/${slug}`;
