import Image from "next/image";
import Link from "next/link";
import { Botao, Card, Rotulo } from "@/components/ui";
import { BlocosNumerados, ChamadaFinal, Secao } from "@/components/blocos";
import { CONTEUDO } from "@/lib/areas-conteudo";
import { AREAS, ESCRITORIO, SOCIOS } from "@/lib/escritorio";
import { JsonLd, attorneys, legalService, website } from "@/lib/schema";

const ETAPAS = [
  {
    titulo: "Primeiro contato",
    texto:
      `Pelo WhatsApp, pelo telefone ou por e-mail. O escritório responde ${ESCRITORIO.prazoRetorno}.`,
  },
  {
    titulo: "Conversa de diagnóstico",
    texto:
      "Uma conversa longa, no detalhe, com leitura dos documentos que existirem. É onde a situação é entendida por inteiro: o que já aconteceu, o que está correndo e o que ainda pode ser feito. Ao final dela você sabe quais são os caminhos, o que cada um exige e em que ordem.",
  },
  {
    titulo: "Escopo por escrito",
    texto:
      "O que será feito, em que prazo e o que está fora fica definido por escrito antes de a contratação acontecer.",
  },
  {
    titulo: "Condução pelo sócio responsável",
    texto:
      "A partir da contratação, você fala diretamente com o sócio que responde pela área. É a mesma pessoa que leu os documentos, desenhou a estratégia e assina as peças, e é ela quem informa o andamento.",
  },
];

const METODO = [
  {
    titulo: "Um caso, mais de uma área",
    texto:
      "Divórcio com empresa no meio é família e societário ao mesmo tempo. Execução que alcança imóvel é bancário e patrimonial. Saída de sócio que envolve marca é societário e propriedade intelectual.",
  },
  {
    titulo: "O instrumento no detalhe",
    texto:
      "Um acordo de sócios que funciona precisa de critério de apuração de haveres, prazo e forma de pagamento, regra de desempate, não concorrência com prazo e território definidos e destino da carteira de clientes.",
  },
  {
    titulo: "O mecanismo explicado",
    texto:
      "Antes de propor caminho, o escritório explica como a regra funciona, sem jargão, e quais são as alternativas com o custo de tempo de cada uma.",
  },
  {
    titulo: "Consultivo e contencioso",
    texto:
      "Boa parte do trabalho é escrever o acordo, o contrato ou o planejamento que evita a disputa. A outra parte é defender quem já está dentro de uma. Quem redige o instrumento conhece os pontos em que ele costuma ser atacado.",
  },
];

export const metadata = { alternates: { canonical: "/" } };

export default function Home() {
  return (
    <>
      <JsonLd dados={[legalService(), website(), ...attorneys()]} />

      <section className="relative overflow-hidden">
        {/* Foto em sangria: cobre a metade direita, altura cheia, e some
            no fundo por máscara de gradiente. Em telas estreitas ela vai
            para trás do texto, bem apagada, para não competir com a leitura. */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-full lg:w-[58%]">
          <Image
            src="/fotos/hero-sofa-2655i.webp"
            alt="Andreza Santos, Vitor Silvino e Thayane Barbosa no escritório do SSB Advogados"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 58vw"
            className="object-cover object-[30%_28%] opacity-20 lg:opacity-100"
            style={{
              maskImage:
                "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.55) 10%, #000 26%)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.55) 10%, #000 26%)",
            }}
          />
          <div aria-hidden className="hero-veu absolute inset-0" />
        </div>

        <div className="relative mx-auto max-w-[1200px] px-5 md:px-8">
          <div className="max-w-[34rem] py-28 lg:py-44">
            <Rotulo>Belo Horizonte · MG</Rotulo>
            <h1 className="text-h1 md:text-display mb-8 max-w-[12ch]">
              Advocacia para pessoas, <span className="enfase">famílias</span> e empresas.
            </h1>
            <p className="text-medio text-texto-suave mb-12 max-w-[38ch]">
              O SSB Advogados atende com escuta afetiva e atenção estratégica em
              direito empresarial, patrimonial, bancário, criminal e
              previdenciário. O foco é o problema concreto de quem procura o
              escritório, e o trabalho é orientado a resolvê-lo.
            </p>
            <div className="flex flex-wrap gap-4">
              <Botao href={`${ESCRITORIO.whatsapp}?text=${encodeURIComponent("Olá, vim pelo site do SSB Advogados. Gostaria de falar com o escritório. (ref: geral)")}`}>
                Falar no WhatsApp
              </Botao>
              <Botao href="/areas-de-atuacao" variante="secundario">Áreas de atuação</Botao>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
      <Secao rotulo="Como podemos te ajudar">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {AREAS.map((area) => {
            const c = CONTEUDO.find((x) => x.slug === area.slug)!;
            return (
              <Card key={area.slug} titulo={area.nome} href={`/areas-de-atuacao/${area.slug}`}>
                {c.h1}
              </Card>
            );
          })}
        </div>
      </Secao>

      <Secao rotulo="Como o escritório trabalha" titulo="Nove áreas que conversam entre si.">
        <BlocosNumerados blocos={METODO} />
      </Secao>

      <Secao rotulo="Atendimento" titulo="Do primeiro contato à condução.">
        <BlocosNumerados blocos={ETAPAS} />

      </Secao>

      </div>

      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
      </div>

      <section className="relative border-y border-borda">
        <Image
          src="/fotos/escritorio-movimento-3367.webp"
          alt="Os sócios do SSB Advogados em movimento no escritório"
          width={2000}
          height={1120}
          sizes="100vw"
          className="h-[42vh] min-h-[300px] w-full object-cover md:h-[62vh]"
        />
      </section>

      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
      <Secao rotulo="Os sócios" titulo="Quem conduz cada frente.">
        <div className="grid gap-6 md:grid-cols-3 md:items-stretch">
          {SOCIOS.map((s) => (
            <div key={s.slug} className="flex h-full flex-col border border-borda rounded-ssb overflow-hidden bg-fundo-elevado">
              <Image
                src={s.foto}
                alt={`Retrato de ${s.nome}`}
                width={1000}
                height={1250}
                priority
                sizes="(max-width: 768px) 100vw, 360px"
                className="foto aspect-[4/5] w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-6">
              <h3 className="text-h3">{s.nome}</h3>
              <p className="text-mini text-texto-suave mt-1">{s.oab} · Belo Horizonte</p>
              <ul className="mt-4 flex flex-col gap-2 md:min-h-[9.25rem]">
                {s.areas.map((slug) => {
                  const a = AREAS.find((x) => x.slug === slug)!;
                  return (
                    <li key={slug}>
                      <Link href={`/areas-de-atuacao/${slug}`} className="inline-flex min-h-10 items-center text-mini text-texto hover:text-acento">
                        {a.nome}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <p className="mt-6 text-micro uppercase tracking-[0.2em] text-texto-suave">
                Frentes
              </p>
              <ul className="mt-3 flex flex-1 flex-col gap-2">
                {s.destaques.map((d) => (
                  <li key={d} className="flex gap-2 text-mini text-texto-suave">
                    <span aria-hidden className="text-acento">—</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
                <a
                  href={s.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center text-micro uppercase tracking-[0.18em] text-texto-suave hover:text-acento"
                >
                  Instagram
                </a>
                {s.linkedin && (
                  <a
                    href={s.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center text-micro uppercase tracking-[0.18em] text-texto-suave hover:text-acento"
                  >
                    LinkedIn
                  </a>
                )}
              </p>
              </div>
            </div>
          ))}
        </div>
      </Secao>

      <ChamadaFinal titulo="Fale com o escritório." />
      </div>
    </>
  );
}
