import type { Metadata } from "next";
import { Acordeao, Botao, Breadcrumb, Campo, Card, Rotulo } from "@/components/ui";

export const metadata: Metadata = { title: "Amostra das direções visuais" };

/** Mesma amostra, renderizada duas vezes. A única diferença entre
 *  as duas é o atributo data-direcao, que troca os tokens de cor. */
function Amostra({ escura = false }: { escura?: boolean }) {
  return (
    <div
      data-direcao={escura ? "escura" : undefined}
      className="bg-fundo text-texto"
    >
      <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-8">
        <Breadcrumb
          trilha={[
            { nome: "Início", href: "/" },
            { nome: "Áreas de atuação", href: "/areas-de-atuacao" },
            { nome: "Societário e acordo de sócios" },
          ]}
        />

        <div className="mt-10 mb-14">
          <Rotulo>Societário e acordo de sócios</Rotulo>
          <h2 className="text-h1 md:text-display mb-6 max-w-[20ch]">
            Sociedade sem acordo entre os sócios é conflito adiado.
          </h2>
          <p className="text-medio text-texto-suave mb-8">
            O contrato social diz quanto cada um tem. Ele não diz quem decide,
            como alguém sai, o que acontece com a carteira de clientes nem o que
            vale quando os dois discordam. É esse vazio que vira disputa.
          </p>
          <div className="flex flex-wrap gap-4">
            <Botao href="/contato">Fale com o escritório</Botao>
            <Botao href="/areas-de-atuacao" variante="secundario">Todas as áreas</Botao>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-16">
          <Card titulo="Acordo de sócios" href="#" rotulo="Vitor Silvino">
            Regras de decisão, entrada e saída de sócio, não concorrência e
            destino da carteira de clientes.
          </Card>
          <Card titulo="Família e sucessões" href="#" rotulo="Thayane Barbosa">
            Divórcio, guarda, alimentos, inventário e partilha, inclusive com
            empresa no meio.
          </Card>
          <Card titulo="Previdenciário" href="#">
            BPC e LOAS negados, tempo especial e benefícios por incapacidade.
            Card sem sócio, para mostrar que ele não fica menor.
          </Card>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <section>
            <h3 className="font-display text-h2 mb-6">Perguntas frequentes</h3>
            <Acordeao pergunta="Acordo de sócios tem validade jurídica?">
              Tem. O acordo de sócios é contrato entre os sócios e vincula quem
              assina. Ele convive com o contrato social e trata do que o contrato
              social não trata.
            </Acordeao>
            <Acordeao pergunta="Acordo de sócios precisa ser registrado?">
              Não é obrigatório registrar para valer entre os sócios. O registro
              na junta comercial serve para dar publicidade e alcançar terceiros.
            </Acordeao>
            <Acordeao pergunta="Acordo de sócios ou contrato social?">
              Os dois. O contrato social constitui a sociedade. O acordo define
              como as decisões são tomadas e como alguém entra e sai.
            </Acordeao>
          </section>

          <section>
            <h3 className="font-display text-h2 mb-6">Formulário</h3>
            <form className="flex flex-col gap-5">
              <Campo id={`nome-${escura ? "b" : "a"}`} rotulo="Seu nome" />
              <Campo
                id={`email-${escura ? "b" : "a"}`}
                rotulo="E-mail"
                tipo="email"
                ajuda="Usado só para responder o seu contato."
              />
              <div><Botao>Enviar</Botao></div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}

export default function PaginaAmostra() {
  return (
    <>
      <div className="mx-auto max-w-[1200px] px-5 pt-14 md:px-8">
        <h1 className="text-h1 mb-4">Duas direções visuais</h1>
        <p className="text-medio text-texto-suave mb-4">
          O mesmo conteúdo, os mesmos componentes, duas paletas. Escolha uma.
          O texto é rascunho, serve só para você ver tipografia e ritmo.
        </p>
        <p className="text-mini text-texto-suave">
          Veja no celular também. E navegue só com Tab, para conferir o foco.
        </p>
      </div>

      <section aria-labelledby="dir-a" className="mt-12">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8">
          <h2 id="dir-a" className="text-micro uppercase tracking-[0.22em] text-acento border-t border-borda pt-6">
            Direção A · clara · base Linho Branco
          </h2>
        </div>
        <Amostra />
      </section>

      <section aria-labelledby="dir-b">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8">
          <h2 id="dir-b" className="text-micro uppercase tracking-[0.22em] text-acento border-t border-borda pt-6">
            Direção B · escura · base Noite Marinha
          </h2>
        </div>
        <Amostra escura />
      </section>
    </>
  );
}
