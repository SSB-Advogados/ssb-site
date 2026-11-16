import Image from "next/image";
import Link from "next/link";
import { Botao, Rotulo } from "@/components/ui";
import { BlocosNumerados, ChamadaFinal, Secao } from "@/components/blocos";
import { AREAS, ESCRITORIO, SOCIOS } from "@/lib/escritorio";
import { FRENTES, POSICIONAMENTO_SOCIO } from "@/lib/posicionamento";
import { JsonLd, attorneys, legalService, website } from "@/lib/schema";

const ETAPAS = [
  {
    titulo: "Primeiro contato",
    texto:
      `Pelo WhatsApp, pelo telefone ou por e-mail. O escritório responde ${ESCRITORIO.prazoRetorno}.`,
  },
  {
    titulo: "Consultoria",
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
        <div className="pointer-events-none absolute inset-y-0 right-0 w-full lg:-right-[12%] xl:-right-[15%] 2xl:-right-[18%] lg:w-[58%]">
          <Image
            src="/fotos/hero-sofa-2655i.webp"
            alt="Thayane Barbosa e Vitor Silvino, sócios do SSB Advogados"
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
              Advocacia <span className="enfase">patrimonial</span> e empresarial.
            </h1>
            <p className="text-medio text-texto-suave mb-12 max-w-[38ch]">
              O SSB Advogados atua com atenção estratégica na proteção de
              patrimônio de pessoas e empresas.
            </p>
            <div className="flex flex-wrap gap-4">
              <Botao href={`${ESCRITORIO.whatsapp}?text=${encodeURIComponent("Olá, vim pelo site do SSB Advogados. Gostaria de falar com o escritório. (ref: geral)")}`}>
                Falar no WhatsApp
              </Botao>
              <Botao href="#atuacao" variante="secundario">Áreas de atuação</Botao>
            </div>
          </div>
        </div>
      </section>

      {/* Faixa de compromissos: só o que o escritório já cumpre e está em
          escritorio.ts. Nada de "anos de atuação" (fundado em 2026). */}
      <div className="border-y border-borda bg-fundo-profundo">
        <ul className="mx-auto grid max-w-[1200px] gap-px px-5 sm:grid-cols-3 md:px-8">
          {[
            ["Resposta", ESCRITORIO.prazoRetorno ?? ""],
            ["Presencial", "em Belo Horizonte"],
            ["Remoto", "em todo o Brasil e no exterior"],
          ].map(([a, b]) => (
            <li key={a} className="py-6 text-center sm:py-8">
              <p className="text-micro uppercase tracking-[0.2em] text-texto-suave mb-2">{a}</p>
              <p className="font-display text-h3 enfase">{b}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
      <section id="atuacao" className="scroll-mt-24 py-20 md:py-28">
        <Rotulo>Atuação</Rotulo>
        <h2 className="text-h2 mb-16 max-w-[20ch]">Duas frentes de atuação.</h2>

        <div className="flex flex-col gap-20">
          {FRENTES.map((f, i) => (
            <div key={f.slug}>
              <div className="mb-8 grid gap-4 border-t border-borda-forte pt-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] md:items-end md:gap-12">
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-mini text-acento tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-h1">{f.nome}</h3>
                </div>
                <p className="text-medio text-texto-suave max-w-[46ch]">{f.resumo}</p>
              </div>

              <ul className={`grid gap-px overflow-hidden rounded-ssb border border-borda bg-borda sm:grid-cols-2 ${f.itens.length % 4 === 0 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
                {f.itens.map((it) => {
                  const corpo = (
                    <>
                      <h4 className="text-h3 mb-3" style={{ fontFamily: "var(--font-display)", fontWeight: 400, lineHeight: 1.14 }}>{it.titulo}</h4>
                      <p className="text-mini text-texto-suave flex-1">{it.texto}</p>
                      {it.href && (
                        <p className="mt-6 text-micro uppercase tracking-[0.18em] text-acento">
                          Saiba mais <span aria-hidden className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
                        </p>
                      )}
                    </>
                  );
                  return (
                    <li key={it.titulo} className="flex bg-fundo">
                      {it.href ? (
                        <Link href={it.href} className="group flex w-full flex-col p-7 transition-colors duration-200 hover:bg-fundo-elevado">
                          {corpo}
                        </Link>
                      ) : (
                        <div className="flex w-full flex-col p-7">{corpo}</div>
                      )}
                    </li>
                  );
                })}
                {/* Fecha a grade sem buraco quando os itens não completam a linha. */}
                {f.itens.length % 4 !== 0 && f.itens.length % 3 !== 0 && (
                  <li className="flex bg-fundo-elevado">
                    <a
                      href={`${ESCRITORIO.whatsapp}?text=${encodeURIComponent("Olá, vim pelo site do SSB Advogados. Gostaria de falar sobre a minha empresa. (ref: empresarial)")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex w-full flex-col p-7 transition-colors duration-200 hover:bg-fundo"
                    >
                      <h4 className="text-h3 mb-3" style={{ fontFamily: "var(--font-display)", fontWeight: 400, lineHeight: 1.14 }}>Fale com o escritório</h4>
                      <p className="text-mini text-texto-suave flex-1">Conte o que a empresa precisa. O escritório responde {ESCRITORIO.prazoRetorno}.</p>
                      <p className="mt-6 text-micro uppercase tracking-[0.18em] text-acento">
                        WhatsApp <span aria-hidden className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
                      </p>
                    </a>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <Secao rotulo="Como o escritório trabalha" titulo="Áreas que conversam entre si.">
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
        <div className="grid gap-6 md:grid-cols-2 md:items-stretch lg:max-w-[52rem]">
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
              {POSICIONAMENTO_SOCIO[s.slug] && (
                <p className="text-mini text-acento mt-1">{POSICIONAMENTO_SOCIO[s.slug]}</p>
              )}
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
