/**
 * Conteúdo das páginas de área.
 *
 * Toda frase aqui passou pela checagem de docs/compliance-oab.md:
 * sem promessa de resultado, sem caso concreto, sem valor de honorário,
 * sem "especialista", sem superlativo e sem menção a tamanho do escritório.
 */

export type Bloco = { titulo: string; texto: string };
export type Pergunta = { p: string; r: string };

export type ConteudoArea = {
  slug: string;
  rotulo: string;
  h1: string;
  title: string;
  description: string;
  abertura: string;
  problema: { titulo: string; blocos: Bloco[] };
  atuacao: { titulo: string; blocos: Bloco[] };
  incluso: { entrega: string[] };
  erros: { titulo: string; intro: string; blocos: Bloco[] };
  faq: Pergunta[];
  /** slugs de outras áreas para o bloco de links internos */
  relacionadas: string[];
};

export const CONTEUDO: ConteudoArea[] = [
  {
    slug: "direito-societario",
    rotulo: "Societário e acordo de sócios",
    h1: "Sociedade sem acordo entre os sócios é conflito adiado.",
    title: "Acordo de sócios e societário",
    description:
      "Elaboração de acordo de sócios, contrato social, governança e entrada e saída de sócio. Atuação consultiva para sociedades empresárias.",
    abertura:
      "O contrato social diz quanto cada um tem. Ele não diz quem decide quando os sócios discordam, como alguém sai, o que acontece com a carteira de clientes e o que vale se um deles montar um negócio parecido. É esse vazio que vira disputa, e ele quase sempre é preenchido tarde.",
    problema: {
      titulo: "Quando o assunto aparece, costuma ser assim.",
      blocos: [
        { titulo: "Um sócio quer sair e ninguém combinou como", texto: "Não há critério de apuração de haveres, prazo de pagamento nem regra sobre o que ele leva. A conversa começa do zero, com as duas partes já em atrito." },
        { titulo: "A empresa cresceu e o contrato social continua o mesmo", texto: "O instrumento que abriu a empresa foi feito para registrar na junta comercial, não para governar uma sociedade com faturamento, funcionários e decisão relevante." },
        { titulo: "Os dois têm 50% e discordam", texto: "Sem cláusula de desempate, a sociedade trava. Nenhum dos dois consegue decidir e nenhum dos dois consegue sair." },
        { titulo: "Um sócio quer entrar", texto: "Entra como? Com que direito de voto, que participação no lucro e que obrigação de aporte? Sem isso escrito, a promessa combinada em conversa não se sustenta depois." },
      ],
    },
    atuacao: {
      titulo: "Como o escritório atua",
      blocos: [
        { titulo: "Diagnóstico da sociedade", texto: "Leitura do contrato social vigente, do quadro societário e de como as decisões vêm sendo tomadas na prática. O que já está escrito e o que só existe no combinado." },
        { titulo: "Elaboração do acordo de sócios", texto: "Regras de decisão e desempate, entrada e saída de sócio, apuração de haveres, distribuição de lucros, não concorrência, confidencialidade e destino da carteira de clientes." },
        { titulo: "Ajuste do contrato social", texto: "Alteração contratual quando o instrumento vigente conflita com o que a sociedade precisa, incluindo objeto social, administração e regime de quotas." },
        { titulo: "Acompanhamento recorrente", texto: "Revisão dos instrumentos conforme a sociedade muda: entrada de sócio, mudança de porte, novo sócio investidor, reorganização de participação." },
      ],
    },
    incluso: {
      entrega: [
        "Reunião de diagnóstico com os sócios",
        "Minuta do acordo de sócios, discutida e ajustada",
        "Alteração do contrato social, quando necessária",
        "Orientação sobre registro na junta comercial",
        "Explicação de cada cláusula, em português claro",
      ],
    },
    erros: {
      titulo: "O que costuma dar errado",
      intro:
        "Os casos abaixo se repetem e têm a mesma origem: a sociedade tratada como formalidade de abertura, não como estrutura que precisa de regra para funcionar.",
      blocos: [
        { titulo: "O contrato social feito pelo contador", texto: "Ele foi escrito para a empresa existir perante a junta comercial e a Receita, e cumpre bem essa função. Ele não foi escrito para resolver desacordo entre sócios, e não resolve. Descobrir isso no meio da briga significa negociar sem regra nenhuma." },
        { titulo: "O sócio que sai e leva a carteira", texto: "Sem cláusula de não concorrência e de não aliciamento, com prazo, território e objeto definidos, não há o que impedir. A empresa perde o cliente, perde a receita e não tem base para reclamar." },
        { titulo: "Distribuição de lucro combinada de boca", texto: "Enquanto o negócio vai bem, funciona. No primeiro ano ruim, cada um lembra de um combinado diferente, e o que vale é o que está escrito, que é a divisão proporcional às quotas." },
        { titulo: "Sociedade de dois com 50% cada", texto: "É o desenho mais comum e o que mais trava. Sem cláusula de desempate, de compra e venda forçada ou de mediação prévia, um desacordo simples paralisa decisão de caixa, de contratação e de investimento." },
        { titulo: "O acordo escrito e nunca revisado", texto: "Um acordo de 2018 governa a empresa de 2018. Se entrou sócio, mudou o porte ou o modelo de receita, o instrumento passa a regular uma empresa que não existe mais." },
      ],
    },
    faq: [
      { p: "Acordo de sócios tem validade jurídica?", r: "Tem. O acordo de sócios é contrato entre os sócios e vincula quem assina. Ele convive com o contrato social e trata justamente do que o contrato social não trata, como regra de decisão, saída de sócio e não concorrência." },
      { p: "Acordo de sócios precisa ser registrado?", r: "Não é obrigatório registrar para valer entre os sócios que assinaram. O arquivamento na junta comercial serve para dar publicidade e tornar o acordo oponível a terceiros, o que é recomendável quando ele trata de transferência de quotas." },
      { p: "Acordo de sócios ou contrato social, qual dos dois?", r: "Os dois, e eles têm funções diferentes. O contrato social constitui a sociedade e define quotas e administração. O acordo define como as decisões são tomadas, como alguém entra e sai, e o que cada um pode e não pode fazer fora da empresa." },
      { p: "Como funciona a saída de um sócio da empresa?", r: "Depende do que está escrito. Havendo acordo de sócios, valem o critério de apuração de haveres, o prazo e a forma de pagamento ali definidos. Sem acordo, aplica-se o Código Civil, que fixa apuração pelo valor patrimonial em balanço especial, e é justamente esse cálculo que costuma virar disputa." },
      { p: "E se o sócio que sai tiver deixado dívida na empresa?", r: "A responsabilidade do sócio que se retira não termina na saída. O Código Civil mantém a responsabilidade por obrigações anteriores por até dois anos após a averbação da retirada. Por isso o instrumento de saída precisa tratar de dívida, garantia e prazo, e não só do valor a receber." },
      { p: "Dá para fazer acordo de sócios depois da empresa aberta?", r: "Dá, e é o caso mais comum. O acordo pode ser feito a qualquer tempo, com a sociedade já em funcionamento. O que muda é que as regras passam a valer dali para frente, e situações já criadas exigem tratamento próprio." },
      { p: "Sociedade unipessoal precisa de acordo de sócios?", r: "Não, porque não há outro sócio com quem acordar. O que faz sentido nesse caso é revisar o contrato social e tratar de sucessão, ou seja, o que acontece com a sociedade em caso de morte ou incapacidade do titular." },
    ],
    relacionadas: ["contratos-empresariais", "familia-e-sucessoes", "direito-bancario"],
  },
  {
    slug: "contratos-empresariais",
    rotulo: "Contratos empresariais",
    h1: "O contrato só vira assunto quando já custou caro.",
    title: "Contratos empresariais",
    description:
      "Elaboração e revisão de contratos de prestação de serviços, parceria, fornecimento, NDA e licenciamento de marca, inclusive para economia criativa.",
    abertura:
      "A maioria das empresas só olha para o contrato no momento do conflito. Até lá, o instrumento que deveria proteger a operação é o mesmo que a expõe, porque foi copiado, baixado ou nunca existiu.",
    problema: {
      titulo: "Quando o assunto aparece, costuma ser assim.",
      blocos: [
        { titulo: "O serviço acabou e as partes discordam do que era devido", texto: "Não há descrição de escopo, marco de entrega nem critério de aceite. Cada lado lembra de uma combinação diferente." },
        { titulo: "O cliente quer rescindir e não há regra de saída", texto: "Sem cláusula de rescisão, prazo de aviso e consequência, a saída vira negociação no calor do conflito." },
        { titulo: "O contrato veio pronto do outro lado", texto: "Assinar o instrumento redigido pela contraparte significa aceitar o desenho de risco que ela escolheu." },
        { titulo: "O lançamento está marcado e não há contrato", texto: "Coprodução, mentoria, curso e parceria de infoproduto costumam começar por mensagem, e a divisão de receita e de direitos fica para depois." },
      ],
    },
    atuacao: {
      titulo: "Como o escritório atua",
      blocos: [
        { titulo: "Elaboração", texto: "Contrato redigido a partir do modelo real de operação do cliente: prestação de serviços, parceria, fornecimento, representação comercial, compra e venda, confidencialidade, cessão e licenciamento de marca." },
        { titulo: "Revisão", texto: "Leitura do instrumento que a contraparte enviou, com identificação de lacuna, ambiguidade, cláusula conflitante e ponto de risco, e proposta de redação alternativa." },
        { titulo: "Cláusulas de estrutura", texto: "Rescisão, não concorrência, não aliciamento, exclusividade, confidencialidade, propriedade intelectual do que for criado, nível de serviço e forma de resolver conflito." },
        { titulo: "Padronização", texto: "Criação dos modelos que a empresa passa a usar de forma recorrente, para que a operação pare de improvisar contrato a cada negócio novo." },
      ],
    },
    incluso: {
      entrega: [
        "Reunião para entender a operação e o risco real do negócio",
        "Minuta redigida ou instrumento revisado, com comentários",
        "Uma rodada de ajuste após a leitura da contraparte",
        "Explicação de cada cláusula sensível",
        "Modelos padronizados, quando a demanda é recorrente",
      ],
    },
    erros: {
      titulo: "O que costuma dar errado",
      intro:
        "Os casos abaixo se repetem com frequência, e todos têm a mesma origem: contrato tratado como formalidade, não como parte da estrutura do negócio.",
      blocos: [
        { titulo: "Modelo genérico, consequência específica", texto: "Contrato baixado da internet ou copiado de outra operação não cobre o risco real. Ele parece resolver até o ponto em que a situação concreta não estava prevista, e o custo do que faltou aparece depois." },
        { titulo: "Cláusulas que não se sustentam", texto: "Não concorrência, confidencialidade e exclusividade são as que mais aparecem e as que mais falham. Sem prazo, território, objeto e contrapartida definidos, o que deveria proteger fica inaplicável, e a empresa descobre isso no momento em que precisa da cláusula." },
        { titulo: "Rescisão sem regra", texto: "Consultoria e mentoria encerradas sem cláusula de saída geram disputa sobre o que foi entregue, o que é devido e o que pode ser cobrado. A ausência de regra transfere a decisão para a negociação, quando a posição já está mais fraca." },
        { titulo: "Relação relevante sustentada por mensagem", texto: "Acordo por aplicativo não sustenta a relação quando a confiança acaba. Sem instrumento escrito, não existe regra definida para a saída, para a divisão nem para o desacordo." },
        { titulo: "Contrato gerado por inteligência artificial, sem revisão", texto: "O texto sai em minutos e parece pronto. Sem revisão de quem domina a matéria, cláusula que soa correta pode estar incompleta ou desalinhada do caso concreto." },
        { titulo: "Coprodução sem definição de direitos", texto: "Em lançamento de infoproduto, o material criado, a lista de contatos e a marca usada precisam ter titularidade definida antes. Depois do lançamento, a discussão é sobre um ativo que já existe e já gera receita." },
      ],
    },
    faq: [
      { p: "Preciso de contrato escrito para prestar serviço?", r: "A lei não exige forma escrita para a maioria dos contratos de serviço, então o acordo verbal existe juridicamente. O problema é prova: sem instrumento, o que foi combinado sobre escopo, prazo, pagamento e rescisão depende da palavra de cada lado." },
      { p: "Posso usar um modelo de contrato da internet?", r: "Pode, e ele funciona enquanto nada sai do previsto. O modelo é escrito para um caso médio, e o risco de um negócio específico não é médio. A revisão técnica sobre o modelo costuma resolver a maior parte disso." },
      { p: "O que é um NDA e quando ele é necessário?", r: "NDA é o contrato de confidencialidade, que define qual informação é sigilosa, por quanto tempo e qual a consequência do vazamento. Ele é necessário antes de abrir informação sensível a parceiro, investidor ou prestador, e não depois." },
      { p: "Cláusula de não concorrência é válida?", r: "É válida quando tem limite. A jurisprudência exige prazo determinado, delimitação de território e de atividade, e contrapartida quando a restrição recai sobre quem deixa de exercer atividade econômica. Cláusula genérica e sem prazo costuma ser afastada." },
      { p: "Quem fica com a marca em uma parceria?", r: "Quem tiver o registro no INPI, salvo o que o contrato dispuser sobre licenciamento ou cessão. Por isso a titularidade precisa estar escrita antes de a parceria começar a usar a marca em material e em anúncio." },
      { p: "O contrato precisa ser registrado em cartório?", r: "Na maioria dos casos não. O registro em cartório de títulos e documentos serve para dar data certa e efeito perante terceiros, o que é útil em cessão de direitos e em confidencialidade, e dispensável em contrato comum entre as partes." },
      { p: "Contrato assinado eletronicamente vale?", r: "Vale. A assinatura eletrônica é admitida, e a assinatura com certificado digital ICP-Brasil tem presunção de autenticidade. Assinatura em plataforma sem certificado também é aceita, e a validade se apoia no conjunto de evidências que a plataforma registra." },
    ],
    relacionadas: ["direito-societario", "marcas-e-propriedade-intelectual", "direito-bancario"],
  },
  {
    slug: "direito-bancario",
    rotulo: "Bancário e defesa em execução",
    h1: "A conta da empresa amanheceu bloqueada.",
    title: "Direito bancário e execução",
    description:
      "Defesa em execução, desbloqueio de conta, impenhorabilidade, embargos, contratos bancários, fraudes e negociação de dívida empresarial.",
    abertura:
      "O bloqueio não avisa. Ele aparece quando a folha vai ser paga, quando o fornecedor vai ser quitado, quando o cartão é recusado. E o prazo para reagir começa a correr antes de a empresa entender o que aconteceu.",
    problema: {
      titulo: "Quando o assunto aparece, costuma ser assim.",
      blocos: [
        { titulo: "A conta foi bloqueada por ordem judicial", texto: "O valor sai da movimentação sem aviso prévio, por um processo que às vezes a empresa nem sabia que existia." },
        { titulo: "A penhora alcançou o que não podia", texto: "Salário, verba alimentar, valor de conta poupança até o limite legal e recurso essencial ao funcionamento da empresa têm proteção, e o bloqueio automático não distingue." },
        { titulo: "A execução se apoia em documento frágil", texto: "Contrato sem assinatura, planilha de evolução da dívida sem memória de cálculo, cessão de crédito sem comprovação da cadeia." },
        { titulo: "A dívida cresceu e não há plano", texto: "Várias operações, encargos diferentes, e nenhuma visão de quanto realmente se deve e em que ordem pagar." },
      ],
    },
    atuacao: {
      titulo: "Como o escritório atua",
      blocos: [
        { titulo: "Resposta ao bloqueio", texto: "Análise imediata do processo, identificação da origem do bloqueio e adoção da medida cabível: pedido de desbloqueio, exceção de impenhorabilidade ou impugnação à penhora, conforme o caso." },
        { titulo: "Defesa em execução", texto: "Exceção de pré-executividade quando o vício é de plano, embargos à execução quando a discussão exige prova, e impugnação ao cumprimento de sentença." },
        { titulo: "Revisão do contrato bancário", texto: "Leitura da operação contratada contra a que foi oferecida, com verificação de encargo, taxa efetiva, capitalização, tarifa e garantia." },
        { titulo: "Fraude e gestão de passivo", texto: "Atuação em fraude bancária e golpe com uso de conta, e organização do passivo empresarial em plano de negociação com os credores." },
      ],
    },
    incluso: {
      entrega: [
        "Leitura do processo e identificação da origem do bloqueio",
        "Medida judicial cabível, redigida e protocolada",
        "Acompanhamento até a decisão sobre o bloqueio",
        "Análise do contrato que originou a dívida",
        "Interlocução com o credor, quando a via for a negociação",
      ],
    },
    erros: {
      titulo: "O que costuma dar errado",
      intro:
        "Em execução, quase todo erro é de tempo. A defesa existe, mas tem prazo, e o prazo corre a partir de um ato que muitas vezes passa despercebido.",
      blocos: [
        { titulo: "Esperar para ver se resolve sozinho", texto: "Bloqueio não se desfaz por conta própria. Enquanto se espera, o prazo de defesa corre, e a medida que seria simples no início passa a exigir recurso." },
        { titulo: "Ignorar a citação", texto: "Muita execução chega por carta e é tratada como cobrança comum. A ausência de defesa no prazo transforma discussão possível em dívida consolidada." },
        { titulo: "Não separar o que é impenhorável", texto: "A proteção de salário e de verba alimentar não é aplicada de ofício em todo caso. Se ninguém demonstra a natureza do valor bloqueado, ele permanece bloqueado." },
        { titulo: "Negociar sem saber quanto se deve", texto: "Aceitar o saldo apresentado pelo credor sem conferir encargo, capitalização e tarifa significa negociar sobre um valor não verificado." },
        { titulo: "Misturar o patrimônio pessoal e o da empresa", texto: "Quando a conta da empresa e a da pessoa física funcionam como uma só, o argumento de separação patrimonial perde força justamente no momento em que seria necessário." },
      ],
    },
    faq: [
      { p: "Quanto tempo demora o desbloqueio de conta judicial?", r: "Não há prazo fixo em lei. O tempo depende do juízo, da medida adotada e de quanto o pedido está instruído com documento que comprove a origem do valor. Pedido bem instruído tende a ser decidido mais rápido do que pedido genérico." },
      { p: "Preciso de advogado para desbloquear a conta?", r: "Na prática, sim. O desbloqueio se faz por petição dentro do processo que determinou a constrição, e a atuação em processo judicial exige advogado, salvo nas exceções legais como juizado especial de menor valor." },
      { p: "O que é exceção de pré-executividade?", r: "É a defesa apresentada dentro da própria execução, sem garantia do juízo, para alegar matéria que o juiz poderia reconhecer de ofício e que se prova de plano, como prescrição, ausência de título executivo ou ilegitimidade." },
      { p: "Qual o prazo dos embargos à execução?", r: "Quinze dias, conforme o art. 915 do Código de Processo Civil, contados, em regra, da juntada aos autos do comprovante da citação. Diferente da exceção de pré-executividade, os embargos admitem produção de prova." },
      { p: "Embargos à execução têm custas?", r: "Os embargos são autuados como ação e sujeitam-se ao recolhimento de custas conforme a tabela do tribunal, salvo deferimento de gratuidade de justiça a quem comprovar insuficiência de recursos." },
      { p: "Salário pode ser penhorado?", r: "Como regra, não. O art. 833 do Código de Processo Civil declara impenhoráveis salários e verbas de natureza alimentar. Há exceções previstas em lei, como dívida de alimentos e valores que excedem cinquenta salários mínimos mensais." },
      { p: "Bloquearam valor de poupança, é possível?", r: "Há proteção legal para a quantia depositada em caderneta de poupança até o limite de quarenta salários mínimos, prevista no mesmo art. 833. A proteção precisa ser demonstrada no processo, com extrato que comprove a natureza do depósito." },
      { p: "A empresa pode discutir cláusula do contrato bancário?", r: "Pode. A discussão sobre encargo, capitalização, tarifa e taxa efetiva é cabível também em contrato empresarial, embora o Código de Defesa do Consumidor nem sempre se aplique. A análise começa pelo contrato assinado, não pela planilha de saldo." },
    ],
    relacionadas: ["direito-imobiliario", "direito-societario", "contratos-empresariais"],
  },
  {
    slug: "marcas-e-propriedade-intelectual",
    rotulo: "Marcas e propriedade intelectual",
    h1: "A marca que você usa há anos pode não ser sua.",
    title: "Marcas e propriedade intelectual",
    description:
      "Registro e defesa de marca no INPI, patente, desenho industrial e cessão de direitos. Atuação consultiva em propriedade intelectual.",
    abertura:
      "No Brasil, a marca pertence a quem registra, não a quem usou primeiro. Enquanto o registro não existe, o nome do negócio é um ativo sem dono formal, e ele pode ser reivindicado por outra pessoa.",
    problema: {
      titulo: "Quando o assunto aparece, costuma ser assim.",
      blocos: [
        { titulo: "Chegou notificação para parar de usar o próprio nome", texto: "Alguém registrou antes, e a exigência vem depois de anos de uso, de material impresso e de clientela construída sobre aquele nome." },
        { titulo: "O pedido no INPI foi indeferido", texto: "Colidência com marca anterior, classe escolhida errada ou sinal considerado irregistrável." },
        { titulo: "A marca é usada por terceiro", texto: "Concorrente, ex-parceiro ou franqueado continua usando o sinal, e sem registro a reação fica limitada." },
        { titulo: "A criação foi feita por terceiro e ninguém formalizou", texto: "Logotipo, software e material desenvolvidos por prestador continuam sendo dele, salvo cessão escrita." },
      ],
    },
    atuacao: {
      titulo: "Como o escritório atua",
      blocos: [
        { titulo: "Busca de anterioridade", texto: "Pesquisa na base do INPI antes do depósito, para identificar marca anterior colidente e avaliar o risco do pedido nas classes pretendidas." },
        { titulo: "Depósito e acompanhamento", texto: "Definição de classe pela Classificação de Nice, depósito do pedido e acompanhamento das publicações na Revista da Propriedade Industrial até a decisão." },
        { titulo: "Defesa do registro", texto: "Oposição a pedido de terceiro, manifestação contra oposição recebida, recurso administrativo e processo de nulidade." },
        { titulo: "Contratos de propriedade intelectual", texto: "Cessão de direitos, licenciamento de marca, e cláusula de titularidade sobre o que for criado dentro de contrato de prestação de serviço ou de parceria." },
      ],
    },
    incluso: {
      entrega: [
        "Busca de anterioridade e parecer sobre o risco do pedido",
        "Definição de classe e redação da especificação",
        "Depósito no INPI e acompanhamento das publicações",
        "Manifestações e recursos no processo administrativo",
        "Contratos de cessão e licenciamento",
      ],
    },
    erros: {
      titulo: "O que costuma dar errado",
      intro:
        "O ativo já existe e já gera valor. O que falta é ele estar protegido, e a proteção tem uma ordem que não dá para inverter.",
      blocos: [
        { titulo: "Usar por anos e nunca registrar", texto: "O tempo de uso não cria direito de marca no sistema brasileiro, que é atributivo. Quem registra primeiro adquire a propriedade, e o usuário anterior fica dependendo de exceção estreita para se defender." },
        { titulo: "Registrar na classe errada", texto: "A classe define o alcance da proteção. Marca registrada na classe do produto não protege o serviço prestado sob o mesmo nome, e o registro passa a existir sem cobrir a atividade que realmente se exerce." },
        { titulo: "Confundir registro de empresa com registro de marca", texto: "O nome empresarial na junta comercial e o domínio na internet não são marca. São três registros diferentes, com órgãos e efeitos diferentes, e ter um não garante os outros." },
        { titulo: "Criação sem cessão formal", texto: "O logotipo feito pelo designer e o software feito pelo desenvolvedor pertencem a quem criou, salvo cessão escrita. A empresa paga, usa, e não é titular." },
        { titulo: "Perder o prazo de oposição", texto: "Quando terceiro deposita marca colidente, há prazo para se opor a partir da publicação. Passado o prazo, resta a via mais longa da nulidade." },
      ],
    },
    faq: [
      { p: "Quanto custa registrar uma marca no INPI?", r: "O INPI cobra retribuição própria, definida em tabela pública publicada pelo instituto, com valor reduzido para microempresa, empresa de pequeno porte, microempreendedor individual e pessoa física. Essa é uma taxa estatal, e a tabela vigente está no site do INPI." },
      { p: "Dá para registrar marca sozinho?", r: "Dá. O depósito pode ser feito diretamente pelo titular no sistema do INPI, sem representante. O que a atuação técnica acrescenta é a busca de anterioridade antes do depósito e a escolha da classe, que são as duas decisões que mais determinam o destino do pedido." },
      { p: "Quanto tempo demora o registro de marca?", r: "O prazo varia conforme a fila do INPI e conforme o pedido receber ou não oposição. O instituto publica indicadores de tempo médio de exame no próprio site, e um pedido sem oposição segue um caminho mais curto do que um pedido contestado." },
      { p: "Por quanto tempo vale o registro?", r: "Dez anos contados da concessão, prorrogáveis por períodos iguais e sucessivos, conforme o art. 133 da Lei 9.279/96. A prorrogação precisa ser pedida dentro do último ano de vigência." },
      { p: "Alguém registrou a minha marca antes. O que fazer?", r: "Há caminhos, e eles dependem do estágio. Se o pedido ainda está em oposição, cabe se opor. Se já foi concedido, cabe processo administrativo de nulidade no prazo legal, ou ação judicial. Quem usava o sinal de boa-fé antes do depósito pode invocar o direito de precedência do art. 129, § 1º da Lei 9.279/96, desde que comprove uso há pelo menos seis meses." },
      { p: "Registrar o nome na junta comercial já protege a marca?", r: "Não. O nome empresarial é protegido no âmbito do estado do registro e cumpre função diferente. A marca é registrada no INPI e tem alcance nacional dentro da classe." },
      { p: "Preciso registrar em todas as classes?", r: "Não, e normalmente não é recomendável. Registra-se nas classes que correspondem à atividade efetivamente exercida ou que se pretende exercer, porque a marca não usada pode ser alvo de caducidade após cinco anos da concessão." },
    ],
    relacionadas: ["contratos-empresariais", "direito-societario"],
  },
  {
    slug: "familia-e-sucessoes",
    rotulo: "Família e sucessões",
    h1: "Divórcio, inventário e o que ninguém quer discutir antes.",
    title: "Família e sucessões",
    description:
      "Divórcio, guarda, alimentos, inventário, partilha e planejamento sucessório, inclusive quando há empresa ou patrimônio familiar envolvido.",
    abertura:
      "São as decisões que a família adia porque doem, e que ficam mais caras exatamente por causa do adiamento. Quando chegam ao escritório, quase sempre já existe um prazo correndo ou um bem parado.",
    problema: {
      titulo: "Quando o assunto aparece, costuma ser assim.",
      blocos: [
        { titulo: "O divórcio esbarra na empresa", texto: "Quotas de sociedade, faturamento e patrimônio misturado transformam a partilha em discussão societária, não só familiar." },
        { titulo: "O inventário está parado", texto: "Um herdeiro não assina, outro não aparece, e o imóvel fica sem poder ser vendido, alugado com segurança ou financiado." },
        { titulo: "A guarda e os alimentos precisam ser definidos", texto: "Convivência, decisões sobre a criança e valor de contribuição, com a rotina de duas casas já em curso." },
        { titulo: "A empresa familiar não tem sucessão pensada", texto: "Se algo acontece com quem administra, a sociedade e a família passam a discutir ao mesmo tempo." },
      ],
    },
    atuacao: {
      titulo: "Como o escritório atua",
      blocos: [
        { titulo: "Diagnóstico e escolha da via", texto: "Avaliação do que pode ser resolvido em cartório, por acordo, e do que precisa de processo judicial, com o custo de tempo de cada caminho." },
        { titulo: "Divórcio e dissolução de união estável", texto: "Partilha de bens, definição de guarda e convivência, alimentos, e tratamento do patrimônio empresarial quando ele existe." },
        { titulo: "Inventário e partilha", texto: "Inventário extrajudicial quando os requisitos estão presentes, e judicial quando há menor, incapaz, testamento ou desacordo entre herdeiros." },
        { titulo: "Planejamento sucessório", texto: "Testamento, doação com reserva de usufruto, pacto antenupcial e organização da sucessão em empresa familiar, feitos antes do conflito." },
      ],
    },
    incluso: {
      entrega: [
        "Reunião reservada de diagnóstico",
        "Escolha entre via extrajudicial e judicial, com o motivo explicado",
        "Petição, acordo ou escritura, conforme o caminho",
        "Acompanhamento do processo até a decisão",
        "Orientação sobre documentos e certidões necessários",
      ],
    },
    erros: {
      titulo: "O que costuma dar errado",
      intro:
        "Em família e sucessões, o custo do adiamento é quase sempre maior que o custo da decisão. Os casos abaixo se repetem.",
      blocos: [
        { titulo: "Deixar o inventário para depois", texto: "Além do imóvel travado, existe prazo. O Código de Processo Civil fixa dois meses da abertura da sucessão para instaurar o inventário, e a legislação estadual costuma prever multa sobre o imposto de transmissão pelo atraso." },
        { titulo: "Partilhar quota de empresa sem olhar o contrato social", texto: "O contrato pode restringir o ingresso de terceiro na sociedade. Partilhar a quota sem tratar disso cria um herdeiro que tem direito ao valor mas não consegue entrar na empresa." },
        { titulo: "Acordo verbal de alimentos", texto: "O valor combinado e pago por transferência não tem título executivo. Quando o pagamento cessa, não há o que executar sem antes discutir tudo de novo." },
        { titulo: "Escolher o regime de bens sem entender o efeito", texto: "O regime define o que se comunica e o que não se comunica, e o pacto antenupcial é o momento próprio para tratar disso. Depois de casado, mudar de regime exige autorização judicial." },
        { titulo: "Doar tudo em vida sem reserva", texto: "A doação que ultrapassa a parte disponível invade a legítima dos herdeiros necessários e pode ser reduzida. E doar sem reserva de usufruto retira do doador o controle sobre o próprio bem." },
      ],
    },
    faq: [
      { p: "Dá para fazer inventário em cartório?", r: "Dá, quando todos os herdeiros são maiores, capazes e concordes, e não há testamento, conforme o art. 610 do Código de Processo Civil. É a via mais rápida. Havendo menor, incapaz, testamento ou desacordo, o inventário é judicial." },
      { p: "Qual o prazo para abrir o inventário?", r: "O art. 611 do Código de Processo Civil fixa dois meses contados da abertura da sucessão para instaurar o processo. O descumprimento não impede o inventário, mas a legislação estadual costuma prever multa sobre o ITCMD." },
      { p: "Preciso de advogado para o inventário?", r: "Sim, inclusive no extrajudicial. A Lei 11.441/2007 exige a presença de advogado na lavratura da escritura pública de inventário e partilha." },
      { p: "Como funciona o divórcio quando existe empresa?", r: "A partilha alcança as quotas conforme o regime de bens, e não a administração da empresa. Isso significa avaliar a participação, verificar o que o contrato social e o acordo de sócios dizem sobre ingresso de terceiro, e definir se a divisão se dá em quotas ou em valor." },
      { p: "Guarda compartilhada significa dividir o tempo pela metade?", r: "Não. Guarda compartilhada trata da divisão das decisões sobre a vida da criança, e é a regra do art. 1.584 do Código Civil. O tempo de convivência é definido separadamente e não precisa ser igual." },
      { p: "Alimentos podem ser revistos?", r: "Podem, a qualquer tempo, quando muda a necessidade de quem recebe ou a possibilidade de quem paga, conforme o art. 1.699 do Código Civil. A revisão se pede por ação própria, e não por simples redução unilateral do pagamento." },
      { p: "O que é planejamento sucessório?", r: "É organizar em vida como o patrimônio será transmitido, usando instrumentos como testamento, doação com reserva de usufruto e regras societárias. O objetivo é reduzir conflito e paralisia de bens depois, dentro dos limites que a lei impõe à parte legítima dos herdeiros necessários." },
    ],
    relacionadas: ["direito-imobiliario", "direito-societario", "direito-bancario"],
  },
  {
    slug: "direito-imobiliario",
    rotulo: "Imobiliário e patrimônio",
    h1: "Comprar imóvel com documentação irregular sai caro depois.",
    title: "Direito imobiliário em BH",
    description:
      "Compra e venda, contratos imobiliários, regularização, disputa de posse e proteção do patrimônio pessoal frente a dívida da empresa.",
    abertura:
      "O problema de um imóvel raramente aparece na compra. Ele aparece na hora de vender, de financiar ou de inventariar, quando as certidões são examinadas.",
    problema: {
      titulo: "Quando o assunto aparece, costuma ser assim.",
      blocos: [
        { titulo: "O imóvel não está regularizado", texto: "Construção sem averbação, escritura que nunca foi registrada, ou matrícula que não corresponde ao que existe no terreno." },
        { titulo: "A compra na planta atrasou ou mudou", texto: "Prazo estourado, metragem diferente da prometida, ou custo adicional que não estava no contrato." },
        { titulo: "A posse é disputada", texto: "Ocupação, divisa contestada ou terceiro que se recusa a desocupar." },
        { titulo: "A dívida da empresa ameaça o patrimônio pessoal", texto: "Execução contra a sociedade que avança sobre bem particular do sócio." },
      ],
    },
    atuacao: {
      titulo: "Como o escritório atua",
      blocos: [
        { titulo: "Due diligence antes da compra", texto: "Conferência de matrícula, certidões do imóvel e do vendedor, ônus, penhora e ação em curso, antes de assinar e antes de pagar." },
        { titulo: "Contratos imobiliários", texto: "Compra e venda, promessa, permuta, locação, distrato de imóvel na planta, com cláusula de garantia, prazo e consequência definidas." },
        { titulo: "Regularização e registro", texto: "Averbação de construção, retificação de área, adjudicação compulsória quando o vendedor não outorga escritura, e usucapião." },
        { titulo: "Posse e proteção patrimonial", texto: "Ações possessórias, defesa em despejo, e organização do patrimônio pessoal frente a passivo empresarial." },
      ],
    },
    incluso: {
      entrega: [
        "Análise de matrícula e certidões, com parecer escrito",
        "Contrato redigido ou revisado",
        "Petição e acompanhamento do processo, quando judicial",
        "Interlocução com cartório de registro de imóveis",
        "Orientação sobre a documentação exigida em cada etapa",
      ],
    },
    erros: {
      titulo: "O que costuma dar errado",
      intro:
        "Em imóvel, o custo do erro costuma aparecer anos depois, quando é preciso vender, financiar ou partilhar.",
      blocos: [
        { titulo: "Pagar antes de conferir a matrícula", texto: "A certidão atualizada mostra ônus, penhora, hipoteca e ação em curso. Conferir depois do sinal significa negociar a saída de um contrato já assinado." },
        { titulo: "Comprar com contrato de gaveta", texto: "Sem escritura registrada, a propriedade não se transfere. O comprador paga, ocupa, e continua sem ser dono perante o registro, o que aparece na revenda e no inventário." },
        { titulo: "Não averbar a construção", texto: "A casa existe no terreno e não existe na matrícula. Isso impede financiamento, dificulta a venda e cria divergência na partilha." },
        { titulo: "Aceitar cláusula de tolerância sem limite", texto: "Atraso em imóvel na planta tem tratamento contratual, e a cláusula precisa ter prazo definido e consequência para o descumprimento, não só para o comprador." },
        { titulo: "Deixar o patrimônio pessoal exposto", texto: "Quando a conta da empresa e a da pessoa física se confundem, o argumento de separação patrimonial perde força justamente no momento em que ele seria necessário." },
      ],
    },
    faq: [
      { p: "O que é preciso conferir antes de comprar um imóvel?", r: "A matrícula atualizada do imóvel, que mostra a cadeia de propriedade e os ônus, e as certidões pessoais do vendedor, que revelam ação e execução capazes de atingir o bem. É a checagem que evita a maioria dos problemas posteriores." },
      { p: "Contrato de gaveta vale alguma coisa?", r: "Vale entre as partes como obrigação contratual, mas não transfere a propriedade. A transferência só ocorre com o registro do título no cartório de registro de imóveis, conforme o art. 1.245 do Código Civil." },
      { p: "O vendedor não quer passar a escritura. O que fazer?", r: "Cabe ação de adjudicação compulsória, em que o Judiciário supre a declaração de vontade do vendedor, desde que o contrato esteja quitado e presentes os requisitos legais. Desde 2022 também existe a via extrajudicial, feita diretamente no cartório." },
      { p: "Quanto tempo de posse dá direito a usucapião?", r: "Depende da modalidade. O Código Civil prevê prazos que variam, entre outras, de cinco anos na usucapião especial urbana até quinze anos na extraordinária, com requisitos próprios de posse mansa, pacífica e com ânimo de dono." },
      { p: "Posso perder minha casa por dívida da empresa?", r: "A regra é a separação entre o patrimônio da sociedade e o do sócio. Ela é afastada quando se reconhece desvio de finalidade ou confusão patrimonial, hipóteses do art. 50 do Código Civil. Além disso, o bem de família tem proteção própria na Lei 8.009/90, com exceções previstas na própria lei." },
      { p: "O que é bem de família?", r: "É o imóvel residencial próprio do casal ou da entidade familiar, que a Lei 8.009/90 declara impenhorável por dívida civil, comercial, fiscal ou de outra natureza, salvo nas hipóteses que a própria lei excetua, como a dívida do próprio imóvel." },
      { p: "Atraso na entrega de imóvel na planta dá direito a quê?", r: "Depende do contrato e do prazo de tolerância pactuado. Superado o prazo, a discussão envolve rescisão com devolução, ou manutenção do contrato com indenização pelo período de atraso, conforme o que ficou contratado e o que a legislação de incorporação prevê." },
    ],
    relacionadas: ["familia-e-sucessoes", "direito-bancario", "direito-societario"],
  },
  {
    slug: "restituicao-ir-doenca-grave",
    rotulo: "Restituição de IR por doença grave",
    h1: "Doença grave pode isentar a aposentadoria do imposto de renda.",
    title: "Isenção e restituição de IR por doença grave",
    description:
      "Isenção do imposto de renda sobre aposentadoria, reforma e pensão de quem tem doença grave e restituição do que foi retido nos últimos cinco anos. Pedido administrativo e ação judicial.",
    abertura:
      "A lei isenta do imposto de renda a aposentadoria, a reforma e a pensão de quem tem uma das doenças graves que ela relaciona. Muita gente com esse direito continua com o imposto descontado todo mês, porque não sabe da isenção ou porque o pedido foi negado por um motivo que não se sustenta. O que foi retido nos últimos cinco anos pode ser restituído.",
    problema: {
      titulo: "Quando o assunto aparece, costuma ser assim.",
      blocos: [
        { titulo: "O imposto continua descontado do benefício", texto: "O diagnóstico existe, mas a fonte pagadora nunca foi informada, e o desconto segue no contracheque ou no extrato do benefício." },
        { titulo: "O pedido foi negado porque a doença está controlada", texto: "O Superior Tribunal de Justiça entende que a isenção não depende de sintomas atuais nem de a doença ter voltado (Súmula 627)." },
        { titulo: "O laudo apresentado não foi aceito", texto: "No pedido administrativo, a lei exige laudo de serviço médico oficial. Na Justiça, a doença pode ser comprovada por outros meios de prova (Súmula 598 do STJ)." },
        { titulo: "A doença apareceu depois da aposentadoria", texto: "A lei garante a isenção mesmo quando a doença foi diagnosticada depois de a pessoa se aposentar." },
      ],
    },
    atuacao: {
      titulo: "Como o escritório atua",
      blocos: [
        { titulo: "Leitura do caso", texto: "Conferência do diagnóstico com a relação da lei, do tipo de rendimento e do imposto retido nos últimos cinco anos, a partir dos informes de rendimentos e das declarações." },
        { titulo: "Pedido administrativo", texto: "Pedido de isenção à fonte pagadora, com o laudo exigido, e orientação para recuperar o que foi retido nos anos anteriores." },
        { titulo: "Ação judicial", texto: "Quando o pedido é negado ou a via administrativa não resolve, ação para reconhecer a isenção e restituir o imposto retido nos últimos cinco anos, corrigido pela taxa Selic." },
        { titulo: "Acompanhamento", texto: "Acompanhamento até o desconto deixar de ser feito no benefício e até a restituição ser paga." },
      ],
    },
    incluso: {
      entrega: [
        "Conferência do diagnóstico e dos rendimentos",
        "Levantamento do imposto retido nos últimos cinco anos",
        "Pedido de isenção à fonte pagadora",
        "Ação judicial, quando necessária",
        "Explicação de cada etapa, em português claro",
      ],
    },
    erros: {
      titulo: "O que costuma dar errado",
      intro:
        "A isenção é antiga e está na lei, mas os casos abaixo se repetem e custam meses de imposto pago sem necessidade.",
      blocos: [
        { titulo: "Esperar para pedir", texto: "A restituição alcança os últimos cinco anos, contados de cada desconto. Cada mês sem pedido é um mês que deixa de entrar na conta." },
        { titulo: "Parar na primeira negativa", texto: "A negativa administrativa não encerra a discussão. Na Justiça, a prova da doença não depende só do laudo oficial, e a exigência de sintomas atuais não se aplica." },
        { titulo: "Contar com a isenção para o salário", texto: "A isenção alcança aposentadoria, reforma e pensão. A remuneração de quem continua trabalhando segue tributada, mesmo com doença grave, conforme o STJ (Tema 1.037)." },
      ],
    },
    faq: [
      { p: "Quais doenças dão direito à isenção?", r: "A Lei 7.713/1988 relaciona, entre outras, neoplasia maligna (câncer), cardiopatia grave, doença de Parkinson, esclerose múltipla, cegueira, nefropatia grave, hepatopatia grave, alienação mental, paralisia irreversível e incapacitante, tuberculose ativa, hanseníase, espondiloartrose anquilosante, doença de Paget em estado avançado, contaminação por radiação, moléstia profissional e AIDS." },
      { p: "Quem já terminou o tratamento do câncer tem direito?", r: "O STJ entende que sim. A Súmula 627 afirma que a isenção não exige sintomas atuais nem que a doença tenha voltado." },
      { p: "Preciso de laudo de médico do SUS ou de serviço oficial?", r: "No pedido administrativo, a lei pede laudo de serviço médico oficial da União, do estado ou do município. Na ação judicial, o juiz pode reconhecer a doença com base em outros documentos médicos (Súmula 598 do STJ)." },
      { p: "De quantos anos posso pedir a restituição?", r: "Dos últimos cinco anos, contados de cada desconto. O valor é corrigido pela taxa Selic." },
      { p: "Pensão também é isenta?", r: "É. A lei estende a isenção à pensão recebida por quem tem uma das doenças graves que ela relaciona." },
      { p: "Quem ainda trabalha tem direito à isenção?", r: "Não sobre o salário. O STJ fixou, no Tema 1.037, que a isenção alcança só os rendimentos de aposentadoria, reforma e pensão." },
    ],
    relacionadas: ["familia-e-sucessoes", "direito-tributario", "direito-bancario"],
  },
  {
    slug: "direito-tributario",
    rotulo: "Tributário e transação tributária",
    h1: "A dívida com o Fisco cresce enquanto ninguém olha para ela.",
    title: "Tributário e transação tributária",
    description:
      "Regularização de débitos tributários da empresa e do sócio, transação tributária com a Receita Federal e a Procuradoria da Fazenda Nacional, parcelamento e defesa em execução fiscal.",
    abertura:
      "Débito tributário em aberto impede a certidão, trava financiamento e, inscrito em dívida ativa, vira execução fiscal contra a empresa e, em alguns casos, contra o sócio. A lei oferece caminhos de negociação, como a transação tributária e o parcelamento, mas cada um tem requisito, prazo e custo próprios, e a escolha errada pode sair mais cara.",
    problema: {
      titulo: "Quando o assunto aparece, costuma ser assim.",
      blocos: [
        { titulo: "A empresa precisa da certidão e não consegue", texto: "Licitação, financiamento ou venda de imóvel parados porque há débito em aberto ou inscrito em dívida ativa." },
        { titulo: "O débito foi inscrito em dívida ativa", texto: "Com a inscrição, entram encargos, e a cobrança passa à Procuradoria, que pode protestar o débito e ajuizar a execução fiscal." },
        { titulo: "A execução fiscal chegou ao sócio", texto: "A cobrança foi redirecionada ao sócio ou administrador, com bloqueio de conta e de bens pessoais." },
        { titulo: "O parcelamento anterior caiu", texto: "Parcelas em atraso levaram à rescisão, e o saldo voltou a ser cobrado com os acréscimos." },
      ],
    },
    atuacao: {
      titulo: "Como o escritório atua",
      blocos: [
        { titulo: "Diagnóstico do passivo", texto: "Levantamento dos débitos na Receita Federal, na Procuradoria da Fazenda Nacional, no estado e no município, com a situação de cada um: em aberto, parcelado, inscrito ou executado." },
        { titulo: "Transação tributária", texto: "Adesão às modalidades abertas em edital ou proposta individual, quando cabível, nas condições da Lei 13.988/2020 e da regulamentação de cada órgão." },
        { titulo: "Parcelamento e regularização", texto: "Parcelamento ordinário ou especial, quando é o caminho mais adequado, e acompanhamento até a emissão da certidão." },
        { titulo: "Defesa na execução fiscal", texto: "Exceção de pré-executividade e embargos à execução fiscal, inclusive contra o redirecionamento ao sócio sem os requisitos legais." },
      ],
    },
    incluso: {
      entrega: [
        "Levantamento do passivo tributário em cada esfera",
        "Comparação entre transação, parcelamento e defesa",
        "Adesão ou proposta de transação",
        "Defesa na execução fiscal, quando houver",
        "Orientação para a emissão da certidão",
      ],
    },
    erros: {
      titulo: "O que costuma dar errado",
      intro:
        "Os casos abaixo se repetem quando o débito tributário só recebe atenção na hora em que a cobrança aperta.",
      blocos: [
        { titulo: "Aderir ao primeiro parcelamento disponível", texto: "Um parcelamento mal escolhido pode custar mais do que a transação aberta no mesmo período, e a adesão costuma implicar confissão do débito." },
        { titulo: "Deixar a execução fiscal sem resposta", texto: "Sem defesa, a execução avança para a penhora de conta, de faturamento e de bens." },
        { titulo: "Supor que o sócio nunca responde, ou que sempre responde", texto: "O redirecionamento ao sócio depende de hipóteses previstas em lei. Quando elas não estão presentes, ele pode ser contestado." },
      ],
    },
    faq: [
      { p: "O que é transação tributária?", r: "É o acordo entre o contribuinte e a Fazenda Pública para encerrar a discussão sobre débitos, previsto na Lei 13.988/2020. Conforme a modalidade, pode envolver redução de multa, juros e encargos, prazo longo de pagamento e uso de prejuízo fiscal." },
      { p: "Pessoa física pode fazer transação tributária?", r: "Pode. Há modalidades para pessoa física, microempresa e empresa de pequeno porte, com condições próprias em cada edital." },
      { p: "Transação ou parcelamento: qual escolher?", r: "Depende do débito, da capacidade de pagamento e das modalidades abertas no momento. A comparação é feita caso a caso, a partir do valor e da situação de cada débito." },
      { p: "A proposta de transação suspende a cobrança?", r: "A simples apresentação da proposta não suspende. Depois de celebrada e enquanto é cumprida, a transação com parcelamento suspende a cobrança, e o descumprimento leva à rescisão e à retomada da execução." },
      { p: "O sócio responde pela dívida tributária da empresa?", r: "Em regra, não. A responsabilidade pessoal depende de hipóteses previstas em lei, como a dissolução irregular da empresa (Súmula 435 do STJ) ou o ato praticado com excesso de poderes ou infração de lei (art. 135 do Código Tributário Nacional)." },
    ],
    relacionadas: ["direito-societario", "contratos-empresariais", "restituicao-ir-doenca-grave"],
  },
];
