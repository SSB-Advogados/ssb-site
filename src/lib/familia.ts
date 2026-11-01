/**
 * Conteúdo das páginas de família da Thayane: as páginas locais (advogada de
 * família por cidade) e as páginas por tema, no mesmo formato das bancárias
 * do Vitor (pedido dele em 30/10/2026).
 *
 * Citação de lei só com o texto conferido na fonte oficial: CPC arts. 53, 528
 * § 7º, 610, 733; CC arts. 1.584 § 2º, 1.639 § 2º, 1.653, 1.699, 1.725.
 * Divórcio e inventário em cartório com filho ou herdeiro menor dependem de
 * regra do CNJ ainda não conferida aqui: o texto não afirma nem nega.
 */

import type { PaginaLocal, PaginaTema, Tema } from "@/lib/bancario";

export const CREDENCIAL_FAMILIA =
  "A Dra. Thayane Barbosa é pós-graduada em Direito de Família e Sucessões e conduz casos de família dentro e fora do Brasil.";
export const ABERTURA_FAMILIA =
  "Separação que ninguém sabe por onde começar. Pensão que não é paga, ou que não cabe mais no bolso. Filho que você não consegue ver. Inventário parado há anos. Família e bens em outro país. Nós podemos te ajudar.";

export const TEMAS_FAMILIA: Tema[] = [
  { slug: "divorcio", nome: "Divórcio e partilha", dor: "“Quero me separar e não sei por onde começar.”", resumo: "Divórcio em cartório ou na Justiça, partilha dos bens, guarda e pensão definidos de uma vez.", temPagina: true },
  { slug: "pensao-alimenticia", nome: "Pensão alimentícia", dor: "“Ele não paga a pensão.” “Não consigo mais pagar a pensão.”", resumo: "Pedido, cobrança, revisão e exoneração de pensão, de quem recebe e de quem paga.", temPagina: true },
  { slug: "guarda-e-convivencia", nome: "Guarda e convivência", dor: "“Não me deixam ver o meu filho.”", resumo: "Guarda compartilhada ou unilateral, calendário de convivência e mudança de cidade.", temPagina: true },
  { slug: "inventario", nome: "Inventário e partilha de herança", dor: "“Meu pai faleceu e ninguém sabe o que fazer com os bens.”", resumo: "Inventário em cartório ou na Justiça, imóvel travado, herdeiro que não assina.", temPagina: true },
  { slug: "uniao-estavel", nome: "União estável", dor: "“Moramos juntos há anos. Tenho direito a quê?”", resumo: "Reconhecimento, contrato, dissolução e partilha da união estável.", temPagina: true },
  { slug: "pacto-antenupcial", nome: "Pacto antenupcial e regime de bens", dor: "“Vamos casar e quero deixar tudo claro antes.”", resumo: "Escolha do regime de bens, pacto antenupcial e mudança de regime depois do casamento.", temPagina: true },
  { slug: "familia-no-exterior", nome: "Família e bens fora do Brasil", dor: "“Meu ex mora fora.” “Temos bens em outro país.”", resumo: "Divórcio, pensão, guarda e partilha quando uma das partes ou dos bens está no exterior.", temPagina: true },
];

export const hrefTemaFamilia = (slug: string) => `/direito-de-familia/${slug}`;

export const PAGINAS_TEMA_FAMILIA: PaginaTema[] = [
  {
    slug: "divorcio",
    title: "Divórcio e partilha de bens | Advogada de família em BH",
    description:
      "Divórcio consensual ou litigioso, em cartório ou na Justiça, com partilha de bens, guarda e pensão. Dra. Thayane Barbosa, advogada de família em Belo Horizonte.",
    rotulo: "Direito de família · Divórcio",
    h1: "“Quero me separar e não sei por onde começar.”",
    abertura:
      "A decisão já foi tomada, ou está quase. O que falta é saber o caminho: o que precisa ser resolvido, quanto tempo leva, o que acontece com a casa, com os filhos, com as contas. O divórcio fica mais simples quando cada uma dessas perguntas tem resposta antes de começar.",
    tipos: {
      titulo: "Os caminhos do divórcio.",
      intro: "O caminho depende de haver acordo, filhos e bens.",
      blocos: [
        { titulo: "Consensual, em cartório", texto: "Com acordo e sem filhos menores ou incapazes, o divórcio pode ser feito por escritura pública, sem processo, com advogado (art. 733 do CPC)." },
        { titulo: "Consensual, na Justiça", texto: "Com acordo e filhos menores, o acordo sobre guarda, convivência e pensão é levado ao juiz para homologação." },
        { titulo: "Litigioso", texto: "Sem acordo, o divórcio é pedido na Justiça. O divórcio em si não depende da vontade do outro; o que se discute são partilha, guarda e pensão." },
        { titulo: "Com bens a dividir", texto: "Imóvel, carro, empresa, investimentos e dívidas entram na partilha conforme o regime de bens do casamento." },
      ],
    },
    identificar: {
      titulo: "Por onde começar.",
      passos: [
        "Separe a certidão de casamento e, se houver, o pacto antenupcial.",
        "Faça uma lista dos bens e das dívidas do casal, com documento de cada um.",
        "Se houver filhos, pense na rotina deles: com quem moram, como fica a convivência, quanto custa o dia a dia.",
        "Evite sair de casa ou mexer em bens comuns sem orientação.",
      ],
    },
    pedidos: {
      titulo: "O que fica resolvido no divórcio.",
      intro: "Num mesmo processo ou escritura, costumam ser definidos:",
      itens: [
        "O próprio divórcio, com a volta ao nome de solteiro, se for o caso.",
        "A partilha dos bens e das dívidas, conforme o regime de bens.",
        "A guarda dos filhos e o calendário de convivência.",
        "A pensão dos filhos e, quando cabível, entre os ex-cônjuges.",
      ],
    },
    documentos: [
      "Documento de identidade e CPF",
      "Certidão de casamento atualizada",
      "Pacto antenupcial, se houver",
      "Certidão de nascimento dos filhos",
      "Documentos dos bens: matrícula de imóvel, documento de veículo, extratos",
      "Comprovantes de renda e das despesas dos filhos",
    ],
    faq: [
      { p: "Preciso da concordância do outro para me divorciar?", r: "Não. O divórcio é um direito de cada um. Sem acordo, ele é pedido na Justiça, e o que se discute são os efeitos: partilha, guarda e pensão." },
      { p: "Dá para fazer em cartório?", r: "Dá, quando há acordo e não há filhos menores ou incapazes, por escritura pública e com advogado (art. 733 do CPC). Com filhos menores, a via depende de como a guarda e a pensão serão resolvidas, e a análise mostra o caminho." },
      { p: "Quanto tempo leva?", r: "No cartório, com os documentos prontos, costuma ser rápido. Na Justiça, depende de haver acordo: o consensual anda bem mais rápido que o litigioso." },
      { p: "Quem sai de casa perde direito ao imóvel?", r: "Não perde a parte que lhe cabe na partilha. Mas a saída deve ser combinada ou orientada, porque mexe com guarda, uso do imóvel e despesas." },
      { p: "Um advogado pode atender os dois?", r: "No divórcio consensual, sim: o casal pode ter um advogado comum. No litigioso, cada parte tem o seu." },
    ],
    relacionados: ["pensao-alimenticia", "guarda-e-convivencia", "uniao-estavel"],
  },
  {
    slug: "pensao-alimenticia",
    title: "Pensão alimentícia: pedir, cobrar, revisar ou exonerar | Advogada de família em BH",
    description:
      "Pensão que não é paga, valor que não cabe mais no bolso, filho que já é maior. Pedido, cobrança, revisão e exoneração de alimentos. Atendimento em BH e remoto.",
    rotulo: "Direito de família · Pensão alimentícia",
    h1: "“Ele não paga a pensão.”",
    abertura:
      "A pensão aparece dos dois lados. Quem recebe não consegue cobrar o que está atrasado. Quem paga não consegue mais pagar o que foi fixado, ou continua pagando para um filho que já se formou e trabalha. Os dois lados têm caminho na lei, e nenhum deles é parar de pagar ou parar de cobrar por conta própria.",
    tipos: {
      titulo: "As situações mais comuns.",
      intro: "Quem procura o escritório costuma estar em uma destas.",
      blocos: [
        { titulo: "Pedir a pensão", texto: "Ainda não há valor fixado, ou ele só foi combinado de boca. Sem decisão ou acordo homologado, não há o que cobrar." },
        { titulo: "Cobrar a pensão atrasada", texto: "Há valor fixado e ele não é pago. As três últimas parcelas e as que vencerem durante o processo podem ser cobradas com pedido de prisão civil (art. 528, § 7º, do CPC)." },
        { titulo: "Revisar o valor", texto: "A renda de quem paga caiu, ou a necessidade de quem recebe aumentou. O valor pode ser revisto (art. 1.699 do Código Civil)." },
        { titulo: "Exonerar", texto: "O filho atingiu a maioridade, concluiu os estudos ou passou a se sustentar. O fim da pensão é pedido ao juiz, não decidido por quem paga." },
      ],
    },
    identificar: {
      titulo: "O que fazer agora.",
      passos: [
        "Localize a decisão, a sentença ou o acordo que fixou a pensão.",
        "Reúna os comprovantes do que foi pago, ou a lista do que não foi.",
        "Se o pedido é revisão, separe os documentos que mostram a mudança: contracheque, carteira de trabalho, despesas novas.",
        "Não deixe de pagar nem reduza o valor por conta própria enquanto discute.",
      ],
    },
    pedidos: {
      titulo: "O que pode ser pedido.",
      intro: "Conforme o lado em que você está:",
      itens: [
        "Fixação da pensão, inclusive provisória, logo no início do processo.",
        "Cobrança das parcelas atrasadas, com pedido de prisão civil ou penhora de bens e salário.",
        "Revisão do valor, para mais ou para menos.",
        "Exoneração, quando o motivo da pensão deixou de existir.",
      ],
    },
    documentos: [
      "Documento de identidade e CPF",
      "Certidão de nascimento do filho",
      "Decisão, sentença ou acordo que fixou a pensão, se houver",
      "Comprovantes de pagamento ou relação das parcelas em atraso",
      "Comprovantes de renda e das despesas do filho",
    ],
    faq: [
      { p: "Quantos meses de atraso dão direito a pedir prisão?", r: "A prisão civil pode ser pedida pelas até três parcelas anteriores ao início da cobrança e pelas que vencerem durante o processo (art. 528, § 7º, do CPC). Parcelas mais antigas são cobradas por penhora." },
      { p: "Combinamos a pensão de boca. Posso cobrar?", r: "Sem acordo homologado ou decisão, não há título para cobrar. O primeiro passo é formalizar o valor na Justiça." },
      { p: "Perdi o emprego. Posso parar de pagar?", r: "Não. O caminho é pedir a revisão do valor. Enquanto não houver nova decisão, o valor antigo continua devido." },
      { p: "A pensão acaba aos 18 anos?", r: "Não automaticamente. A maioridade permite pedir a exoneração, e o juiz avalia se o filho ainda precisa, por exemplo enquanto estuda." },
      { p: "Onde corre a ação de alimentos?", r: "No domicílio de quem recebe a pensão (art. 53, II, do CPC)." },
    ],
    relacionados: ["divorcio", "guarda-e-convivencia", "familia-no-exterior"],
  },
  {
    slug: "guarda-e-convivencia",
    title: "Guarda e convivência dos filhos | Advogada de família em BH",
    description:
      "Guarda compartilhada ou unilateral, calendário de convivência, mudança de cidade e descumprimento de visitas. Atendimento em Belo Horizonte e remoto.",
    rotulo: "Direito de família · Guarda",
    h1: "“Não me deixam ver o meu filho.”",
    abertura:
      "Guarda não é prêmio para um dos pais. É a forma de organizar quem decide e como a criança convive com cada um. Quando a rotina não está escrita, cada desentendimento vira uma disputa, e quem sente primeiro é a criança.",
    tipos: {
      titulo: "O que costuma estar em jogo.",
      intro: "Algumas situações que chegam ao escritório:",
      blocos: [
        { titulo: "Definir a guarda", texto: "Sem acordo entre pais aptos, a regra da lei é a guarda compartilhada (art. 1.584, § 2º, do Código Civil), salvo exceções previstas." },
        { titulo: "Organizar a convivência", texto: "Fins de semana, férias, datas especiais e rotina escolar escritos num calendário claro." },
        { titulo: "Convivência descumprida", texto: "Um dos pais impede o contato ou não cumpre o combinado. O cumprimento pode ser exigido na Justiça." },
        { titulo: "Mudança de cidade ou de país", texto: "Mudança de quem tem a criança consigo afeta a convivência e precisa ser tratada antes." },
      ],
    },
    identificar: {
      titulo: "Antes de tudo.",
      passos: [
        "Escreva como é a rotina da criança hoje: escola, saúde, atividades, quem leva e quem busca.",
        "Guarde mensagens e registros de combinados e de descumprimentos.",
        "Separe a decisão ou o acordo que já existe, se houver.",
        "Evite discutir o caso na frente da criança ou usá-la como mensageira.",
      ],
    },
    pedidos: {
      titulo: "O que pode ser pedido.",
      intro: "Conforme a situação:",
      itens: [
        "Fixação da guarda, compartilhada ou unilateral.",
        "Regulamentação da convivência, com calendário detalhado.",
        "Cumprimento do que já foi decidido, quando há descumprimento.",
        "Revisão da guarda ou da convivência quando a situação muda.",
      ],
    },
    documentos: [
      "Documento de identidade e CPF",
      "Certidão de nascimento da criança",
      "Decisão ou acordo de guarda, se houver",
      "Mensagens e registros do que aconteceu",
      "Comprovante de residência e rotina escolar da criança",
    ],
    faq: [
      { p: "Guarda compartilhada é dividir o tempo pela metade?", r: "Não. Guarda compartilhada é dividir as decisões sobre a vida da criança. O tempo de convivência é definido à parte e não precisa ser igual." },
      { p: "Quem tem a guarda pode impedir as visitas?", r: "Não. A convivência é direito da criança. Se houver risco, o caminho é levar a questão ao juiz, não suspender por conta própria." },
      { p: "A criança pode escolher com quem morar?", r: "A opinião dela é ouvida conforme a idade e a maturidade, mas a decisão é do juiz, pensando no melhor interesse da criança." },
      { p: "Posso mudar de cidade com meu filho?", r: "Mudança que afeta a convivência deve ser combinada com o outro genitor ou autorizada pelo juiz." },
      { p: "A guarda pode ser revista depois?", r: "Pode, quando a situação muda e a mudança atende ao interesse da criança." },
    ],
    relacionados: ["divorcio", "pensao-alimenticia", "familia-no-exterior"],
  },
  {
    slug: "inventario",
    title: "Inventário e partilha de herança | Advogada de família em BH",
    description:
      "Inventário em cartório ou na Justiça, imóvel travado, herdeiro que não assina, prazo e imposto. Dra. Thayane Barbosa, advogada de família em Belo Horizonte.",
    rotulo: "Família e sucessões · Inventário",
    h1: "“Meu pai faleceu e ninguém sabe o que fazer com os bens.”",
    abertura:
      "Depois da perda, vem a parte que ninguém quer encarar: imóvel que não pode ser vendido, conta bloqueada, carro sem transferência, herdeiro que não responde. O inventário é o caminho para tudo isso voltar a andar, e quanto antes começa, menor o custo.",
    tipos: {
      titulo: "As situações mais comuns.",
      intro: "Cada uma muda o caminho e o tempo do inventário.",
      blocos: [
        { titulo: "Herdeiros de acordo", texto: "Com herdeiros capazes, em acordo e sem testamento, o inventário pode ser feito em cartório, por escritura e com advogado." },
        { titulo: "Herdeiro que não assina", texto: "Um herdeiro discorda ou não aparece. O inventário segue na Justiça, sem depender da vontade dele." },
        { titulo: "Inventário parado há anos", texto: "O imóvel ficou no nome de quem faleceu. O inventário pode ser aberto a qualquer tempo, mas o atraso costuma gerar multa sobre o imposto." },
        { titulo: "Testamento ou herdeiro menor", texto: "Situações que exigem cuidados próprios e, em regra, passam pelo Judiciário." },
      ],
    },
    identificar: {
      titulo: "Os primeiros passos.",
      passos: [
        "Separe a certidão de óbito e os documentos de quem faleceu.",
        "Liste os bens e as dívidas: imóveis, veículos, contas, investimentos, empresas.",
        "Liste os herdeiros: cônjuge ou companheiro, filhos, e quem mais houver.",
        "Converse com os herdeiros sobre fazer em acordo: é o caminho mais rápido.",
      ],
    },
    pedidos: {
      titulo: "O que o inventário resolve.",
      intro: "Ao final, o inventário define e formaliza:",
      itens: [
        "Quem são os herdeiros e a parte de cada um.",
        "A partilha dos bens, com a transferência para o nome de cada herdeiro.",
        "O pagamento das dívidas deixadas e do imposto de transmissão (ITCMD).",
        "A liberação de valores em banco, venda de imóvel e outros atos do espólio.",
      ],
    },
    documentos: [
      "Certidão de óbito",
      "Documentos pessoais de quem faleceu e dos herdeiros",
      "Certidão de casamento ou prova da união estável",
      "Matrículas dos imóveis e documentos dos veículos",
      "Extratos de contas e investimentos",
      "Testamento, se houver",
    ],
    faq: [
      { p: "Qual o prazo para abrir o inventário?", r: "O Código de Processo Civil fixa dois meses da data do falecimento. O atraso não impede o inventário, mas a lei estadual costuma prever multa sobre o ITCMD." },
      { p: "Dá para fazer em cartório?", r: "Dá, quando os herdeiros são capazes, estão de acordo e não há testamento, por escritura pública e com advogado. É o caminho mais rápido." },
      { p: "Um herdeiro não quer assinar. E agora?", r: "O inventário segue na Justiça. A recusa de um herdeiro atrasa, mas não impede a partilha." },
      { p: "Preciso de advogado no inventário em cartório?", r: "Sim. A escritura de inventário só é lavrada com a presença de advogado." },
      { p: "Posso vender o imóvel antes de terminar o inventário?", r: "Em regra, a venda depende do inventário ou de autorização no processo. Há caminhos para casos urgentes, analisados um a um." },
    ],
    relacionados: ["pacto-antenupcial", "uniao-estavel", "familia-no-exterior"],
  },
  {
    slug: "uniao-estavel",
    title: "União estável: direitos, contrato e dissolução | Advogada de família em BH",
    description:
      "Reconhecimento, contrato, dissolução e partilha da união estável. O que muda sem contrato escrito. Atendimento em Belo Horizonte e remoto.",
    rotulo: "Direito de família · União estável",
    h1: "“Moramos juntos há anos. Tenho direito a quê?”",
    abertura:
      "Muita gente vive em união estável sem nunca ter assinado nada. Os direitos existem mesmo assim, mas aparecem quando é mais difícil prová-los: na separação ou no falecimento de um dos dois. Formalizar antes evita discussão depois.",
    tipos: {
      titulo: "Quando o assunto aparece.",
      intro: "As situações mais comuns:",
      blocos: [
        { titulo: "Formalizar a união", texto: "Escritura ou contrato que registra a data de início e, se o casal quiser, um regime de bens diferente." },
        { titulo: "A união acabou", texto: "Dissolução da união, com partilha, guarda e pensão, em cartório ou na Justiça." },
        { titulo: "O companheiro faleceu", texto: "Reconhecimento da união para garantir direitos na herança e na pensão por morte." },
        { titulo: "Sem contrato escrito", texto: "Sem contrato, vale a comunhão parcial de bens (art. 1.725 do Código Civil): divide-se o que foi adquirido durante a união." },
      ],
    },
    identificar: {
      titulo: "O que reunir.",
      passos: [
        "Provas da vida em comum: comprovantes de endereço, contas conjuntas, fotos, declaração de dependente.",
        "Datas aproximadas de início e, se for o caso, de fim da união.",
        "Lista dos bens adquiridos durante a união.",
        "Documentos dos filhos, se houver.",
      ],
    },
    pedidos: {
      titulo: "O que pode ser feito.",
      intro: "Conforme o momento:",
      itens: [
        "Escritura ou contrato de união estável, com escolha do regime de bens.",
        "Reconhecimento da união na Justiça, quando não há documento.",
        "Dissolução, com partilha dos bens, guarda e pensão.",
        "Reconhecimento após o falecimento, para fins de herança e benefícios.",
      ],
    },
    documentos: [
      "Documento de identidade e CPF dos dois",
      "Comprovantes de endereço em comum",
      "Documentos dos bens adquiridos",
      "Certidão de nascimento dos filhos, se houver",
      "Certidão de óbito, se for o caso",
    ],
    faq: [
      { p: "Quanto tempo de convivência caracteriza união estável?", r: "A lei não fixa tempo mínimo. O que importa é a convivência pública, contínua e duradoura, com objetivo de constituir família." },
      { p: "Sem contrato, como fica a divisão dos bens?", r: "Vale a comunhão parcial: divide-se o que foi adquirido durante a união, salvo exceções da lei (art. 1.725 do Código Civil)." },
      { p: "Namoro longo é união estável?", r: "Não necessariamente. A diferença está no objetivo de constituir família, e cada caso é analisado pelas provas." },
      { p: "Companheiro tem direito à herança?", r: "Tem, nos termos da lei. Por isso é importante que a união esteja reconhecida." },
      { p: "Dá para registrar a união em cartório?", r: "Dá, por escritura pública, com ou sem escolha de regime de bens diferente da comunhão parcial." },
    ],
    relacionados: ["pacto-antenupcial", "divorcio", "inventario"],
  },
  {
    slug: "pacto-antenupcial",
    title: "Pacto antenupcial e regime de bens | Advogada de família em BH",
    description:
      "Escolha do regime de bens, pacto antenupcial e mudança de regime depois do casamento. Planejamento antes do casamento. Atendimento em BH e remoto.",
    rotulo: "Direito de família · Regime de bens",
    h1: "“Vamos casar e quero deixar tudo claro antes.”",
    abertura:
      "O regime de bens define o que é de cada um e o que é dos dois, durante o casamento, num eventual divórcio e na herança. Escolher sem entender é comum, e mudar depois é bem mais difícil do que escolher antes.",
    tipos: {
      titulo: "As decisões envolvidas.",
      intro: "Os pontos que costumam ser tratados:",
      blocos: [
        { titulo: "Escolher o regime", texto: "Comunhão parcial, separação total, comunhão universal ou participação final nos aquestos, cada um com efeito próprio." },
        { titulo: "Fazer o pacto", texto: "Para regime diferente da comunhão parcial, o pacto precisa ser feito por escritura pública antes do casamento (art. 1.653 do Código Civil)." },
        { titulo: "Proteger empresa ou patrimônio", texto: "Quotas de empresa, imóvel herdado e patrimônio anterior podem ter tratamento definido no pacto." },
        { titulo: "Mudar o regime depois", texto: "É possível, mas exige pedido conjunto e autorização judicial (art. 1.639, § 2º, do Código Civil)." },
      ],
    },
    identificar: {
      titulo: "Antes do cartório.",
      passos: [
        "Liste o que cada um já tem: imóveis, empresa, investimentos, dívidas.",
        "Conversem sobre o que deve ficar separado e o que será comum.",
        "Agende o pacto antes da habilitação do casamento no cartório.",
        "Se já são casados e querem mudar, separe a certidão de casamento e a lista de bens.",
      ],
    },
    pedidos: {
      titulo: "O que o escritório faz.",
      intro: "Conforme o momento do casal:",
      itens: [
        "Orientação sobre os regimes e o efeito de cada um no caso concreto.",
        "Redação do pacto antenupcial para lavratura em cartório.",
        "Pedido judicial de mudança de regime, quando já casados.",
        "Contrato de união estável com regime de bens próprio.",
      ],
    },
    documentos: [
      "Documento de identidade e CPF dos dois",
      "Lista e documentos dos bens de cada um",
      "Contrato social, se algum dos dois tiver empresa",
      "Certidão de casamento, se já forem casados",
    ],
    faq: [
      { p: "Sem pacto, qual é o regime?", r: "A comunhão parcial de bens: o que cada um tinha antes continua de cada um, e o que for adquirido durante o casamento é dos dois, com exceções da lei." },
      { p: "O pacto pode ser feito depois do casamento?", r: "Não. O pacto é feito antes. Depois do casamento, o regime só muda com autorização judicial." },
      { p: "Pacto antenupcial é sinal de desconfiança?", r: "Não. É uma forma de organizar o patrimônio com clareza, e evita discussões que costumam ser muito mais desgastantes depois." },
      { p: "O pacto vale para a herança?", r: "O regime escolhido influencia a herança, mas não afasta todas as regras de sucessão. A orientação considera os dois efeitos." },
      { p: "Quem tem empresa precisa de pacto?", r: "Não é obrigatório, mas é recomendável tratar das quotas para evitar que a empresa entre numa partilha sem planejamento." },
    ],
    relacionados: ["uniao-estavel", "divorcio", "inventario"],
  },
  {
    slug: "familia-no-exterior",
    title: "Família e bens fora do Brasil | Advogada de família em BH",
    description:
      "Divórcio, pensão, guarda e partilha quando uma das partes mora no exterior ou há bens em outro país. Dra. Thayane Barbosa, advogada de família em Belo Horizonte.",
    rotulo: "Direito de família · Internacional",
    h1: "“Meu ex mora fora. Temos bens em outro país.”",
    abertura:
      "Quando a família ou o patrimônio atravessam fronteiras, cada passo fica mais complicado: em que país correr o processo, como citar quem mora fora, como fazer valer aqui uma decisão de lá. São casos que a Dra. Thayane Barbosa conduz.",
    tipos: {
      titulo: "Os casos mais comuns.",
      intro: "Algumas situações com elemento estrangeiro:",
      blocos: [
        { titulo: "Divórcio com um dos dois no exterior", texto: "Divórcio no Brasil com o outro morando fora, ou divórcio feito lá que precisa valer aqui." },
        { titulo: "Pensão com quem paga fora do país", texto: "Fixação e cobrança de pensão quando o devedor mora no exterior." },
        { titulo: "Guarda e mudança de país", texto: "Viagem e mudança de país com filhos, e retorno de criança levada sem autorização." },
        { titulo: "Bens em mais de um país", texto: "Partilha e herança com imóveis, contas ou empresas fora do Brasil." },
      ],
    },
    identificar: {
      titulo: "O que reunir.",
      passos: [
        "Endereço e país de residência de cada parte e dos filhos.",
        "Documentos do casamento e dos filhos, inclusive registros feitos no exterior.",
        "Lista dos bens em cada país, com documentos.",
        "Decisões estrangeiras que já existam, com tradução, se houver.",
      ],
    },
    pedidos: {
      titulo: "O que pode ser feito.",
      intro: "Conforme o caso:",
      itens: [
        "Divórcio, guarda e pensão no Brasil, com citação de quem mora fora.",
        "Validação no Brasil de divórcio ou decisão estrangeira.",
        "Cobrança de pensão com devedor no exterior.",
        "Partilha e inventário com bens em mais de um país.",
      ],
    },
    documentos: [
      "Documentos pessoais das partes",
      "Certidão de casamento e certidões de nascimento dos filhos",
      "Comprovantes de endereço no Brasil e no exterior",
      "Documentos dos bens em cada país",
      "Decisões estrangeiras, se houver",
    ],
    faq: [
      { p: "Posso me divorciar no Brasil se meu ex mora fora?", r: "Pode. O processo corre no Brasil, e quem mora no exterior é citado pelos meios próprios, o que costuma levar mais tempo." },
      { p: "Divórcio feito no exterior vale no Brasil?", r: "Pode valer, mas em regra precisa ser reconhecido no Brasil para produzir efeitos aqui, como a averbação na certidão." },
      { p: "Dá para cobrar pensão de quem mora em outro país?", r: "Dá. Existem caminhos de cooperação internacional para a cobrança, que variam conforme o país." },
      { p: "Posso viajar para fora com meu filho sem autorização do outro?", r: "Em regra, viagem internacional de criança exige autorização de ambos os pais ou do juiz." },
      { p: "Os bens no exterior entram na partilha?", r: "Entram na discussão, mas a forma de dividir depende das regras do país onde estão. A análise considera os dois sistemas." },
    ],
    relacionados: ["divorcio", "pensao-alimenticia", "inventario"],
  },
];

export const PAGINAS_LOCAIS_FAMILIA: PaginaLocal[] = [
  {
    slug: "belo-horizonte",
    cidade: "Belo Horizonte",
    title: "Advogada de Família em Belo Horizonte",
    description:
      "Advogada de família em Belo Horizonte: divórcio, pensão, guarda, inventário, união estável, pacto antenupcial e casos com bens ou família no exterior. Dra. Thayane Barbosa, OAB/MG 194.089.",
    h1: "Advogada de Família em Belo Horizonte",
    local: {
      titulo: "Atendimento em Belo Horizonte.",
      paragrafos: [
        "O escritório atende presencialmente com hora marcada, no endereço abaixo, em conversa reservada. Quem preferir pode fazer tudo à distância: a conversa por WhatsApp ou vídeo, os documentos por mensagem e a assinatura eletrônica.",
        "Nas ações de família, o processo costuma correr na cidade de quem tem a guarda dos filhos ou de quem pede a pensão (art. 53 do Código de Processo Civil). Para quem mora em Belo Horizonte, o caso tramita na comarca da capital.",
      ],
    },
    faq: [
      { p: "O primeiro atendimento é sigiloso?", r: "Sim. Tudo o que é contado ao advogado é protegido pelo sigilo profissional." },
      { p: "Preciso ir ao escritório?", r: "Não. O atendimento pode ser todo remoto, por WhatsApp e videochamada, com assinatura eletrônica. Quem preferir é atendido no escritório, com hora marcada." },
      { p: "Quais documentos levar para a primeira conversa?", r: "Documento de identidade, certidão de casamento ou de nascimento dos filhos e o que houver sobre bens e decisões anteriores. O que faltar o escritório ajuda a reunir." },
      { p: "Dá para resolver sem processo?", r: "Muitas vezes. Divórcio, união estável e inventário com acordo podem ser feitos em cartório, e acordos de guarda e pensão podem ser homologados com rapidez." },
      { p: "Quanto tempo leva?", r: "Depende do caminho. Com acordo, costuma ser bem mais rápido. Pedido urgente, como pensão provisória, pode ser analisado no início do processo." },
    ],
  },
  {
    slug: "nova-lima",
    cidade: "Nova Lima",
    title: "Advogada de Família em Nova Lima",
    description:
      "Advogada de família para quem mora em Nova Lima: divórcio, pensão, guarda, inventário, união estável e pacto antenupcial. Dra. Thayane Barbosa, OAB/MG 194.089.",
    h1: "Advogada de Família em Nova Lima",
    foto: "/fotos/thayane-barbosa-topo-4439.webp",
    local: {
      titulo: "Atendimento para Nova Lima.",
      paragrafos: [
        "Quem mora no Centro, no Vila da Serra, no Jardim Canadá, no Alphaville ou em qualquer bairro de Nova Lima é atendido pelo escritório em Belo Horizonte, com hora marcada, ou inteiramente à distância, por WhatsApp e videochamada.",
        "Nas ações de família, o processo costuma correr na cidade de quem tem a guarda dos filhos ou de quem pede a pensão (art. 53 do Código de Processo Civil). Para quem mora em Nova Lima, isso significa que o caso pode correr na comarca de Nova Lima.",
      ],
    },
    faq: [
      { p: "O escritório tem sede em Nova Lima?", r: "Não. O escritório fica em Belo Horizonte e atende quem mora em Nova Lima presencialmente, com hora marcada, ou à distância. O processo pode correr na comarca de Nova Lima." },
      { p: "Preciso ir até Belo Horizonte?", r: "Não é necessário. A conversa, o envio dos documentos e a assinatura podem ser feitos à distância. Audiências, quando houver, costumam ser no fórum da comarca ou por vídeo." },
      { p: "O divórcio pode ser feito em cartório de Nova Lima?", r: "O divórcio em cartório pode ser feito em qualquer cartório de notas, quando cabível. A escolha leva em conta onde fica mais prático para o casal." },
      { p: "Tenho imóvel em Nova Lima e moro em outra cidade. O inventário corre onde?", r: "Depende de onde a pessoa falecida tinha o último domicílio e de haver acordo para o inventário em cartório. A análise define o caminho." },
      { p: "O primeiro atendimento é sigiloso?", r: "Sim. Tudo o que é contado ao advogado é protegido pelo sigilo profissional." },
    ],
  },
];

export const temaFamiliaPorSlug = (slug: string) => PAGINAS_TEMA_FAMILIA.find((t) => t.slug === slug);
export const localFamiliaPorSlug = (slug: string) => PAGINAS_LOCAIS_FAMILIA.find((l) => l.slug === slug);
