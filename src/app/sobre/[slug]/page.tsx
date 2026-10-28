import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Botao, Breadcrumb, Rotulo } from "@/components/ui";
import { ChamadaFinal, Secao } from "@/components/blocos";
import { autorDe, dataPorExtenso, todosOsArtigos } from "@/lib/blog";
import { AREAS, ESCRITORIO, SOCIOS, socioPorSlug } from "@/lib/escritorio";
import { JsonLd, breadcrumb, legalService, perfil, pessoa } from "@/lib/schema";

/**
 * Página de perfil de cada sócio.
 *
 * Existe para a busca pelo nome, curto ou completo, cair numa página do
 * escritório. Por isso o nome civil aparece no título, na descrição, no texto
 * e no alt da foto, e não só no schema.
 *
 * O topo é sempre escuro (.faixa-escura), com o retrato sério sangrando até a
 * borda direita: foi o padrão de foto que o Vitor aprovou como referência.
 */

export const dynamicParams = false;

export function generateStaticParams() {
  return SOCIOS.map((s) => ({ slug: s.slug }));
}

const areasDe = (slugs: string[]) =>
  slugs.map((slug) => AREAS.find((a) => a.slug === slug)!);

const listaEmTexto = (itens: string[]) =>
  itens.length > 1 ? `${itens.slice(0, -1).join(", ")} e ${itens.at(-1)}` : itens[0];

export async function generateMetadata({ params }: PageProps<"/sobre/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const s = socioPorSlug(slug);
  if (!s) return {};
  const areas = listaEmTexto(areasDe(s.areas).map((a) => a.nome.toLowerCase()));
  const socio = s.profissao === "Advogada" ? "sócia" : "sócio";
  return {
    title: `${s.nomeCompleto}, ${s.profissao.toLowerCase()} em ${ESCRITORIO.endereco.cidade}`,
    description: `${s.nomeCompleto} (${s.nome}), ${s.oab}, ${socio} do ${ESCRITORIO.marca} em ${ESCRITORIO.endereco.cidade}. Atuação em ${areas}.`,
    alternates: { canonical: `/sobre/${s.slug}` },
    openGraph: {
      type: "profile",
      title: `${s.nome} | ${ESCRITORIO.marca}`,
      description: `${s.nomeCompleto}, ${s.oab}. Atuação em ${areas}.`,
      images: [{ url: s.fotosPerfil.topo, width: 1500, height: 1875, alt: s.nomeCompleto }],
      locale: "pt_BR",
    },
  };
}

const subtitulo = "text-micro uppercase tracking-[0.2em] text-texto-suave";

export default async function PerfilSocio({ params }: PageProps<"/sobre/[slug]">) {
  const { slug } = await params;
  const s = socioPorSlug(slug);
  if (!s) notFound();

  const areas = areasDe(s.areas);
  const artigos = todosOsArtigos().filter((a) => autorDe(a).slug === s.slug);
  const fem = s.profissao === "Advogada";
  const numeroOab = s.oab.match(/[\d.]+$/)![0];
  const seccional = s.oab.replace(/ [\d.]+$/, "");

  return (
    <>
      <JsonLd dados={[
        perfil(s),
        pessoa(s),
        legalService(),
        breadcrumb([
          { nome: "Início", href: "/" },
          { nome: "Sobre", href: "/sobre" },
          { nome: s.nome, href: `/sobre/${s.slug}` },
        ]),
      ]} />

      {/* Topo escuro. No celular a foto vem primeiro e escurece para baixo;
          a partir do md ela ocupa a metade direita e escurece para a esquerda. */}
      <section className="faixa-escura relative isolate overflow-hidden">
        <div className="relative aspect-[4/5] w-full md:absolute md:inset-y-0 md:right-0 md:aspect-auto md:w-[56%]">
          <Image
            src={s.fotosPerfil.topo}
            alt={`${s.nomeCompleto}, ${s.profissao.toLowerCase()} do ${ESCRITORIO.marca}`}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 56vw"
            className="foto object-cover object-[60%_20%]"
          />
          <div aria-hidden className="absolute inset-x-0 -bottom-px top-0 bg-gradient-to-t from-fundo-profundo via-transparent to-transparent md:hidden" />
          <div aria-hidden className="absolute -left-px inset-y-0 hidden w-1/2 bg-gradient-to-r from-fundo-profundo via-fundo-profundo/70 to-transparent md:block" />
        </div>

        <div className="relative mx-auto max-w-[1200px] px-5 md:px-8">
          <div className="-mt-24 pb-16 md:mt-0 md:flex md:min-h-[46rem] md:w-[44%] md:flex-col md:justify-center md:py-24">
            <div className="mb-10 hidden md:block">
              <Breadcrumb trilha={[
                { nome: "Início", href: "/" },
                { nome: "Sobre", href: "/sobre" },
                { nome: s.nome },
              ]} />
            </div>
            <Rotulo>{s.profissao} · {ESCRITORIO.marca}</Rotulo>
            <h1 className="text-h1 md:text-display mb-5 leading-[1.02]">{s.nome}</h1>
            <p className="font-display text-h3 italic text-acento mb-2">{s.nomeCompleto}</p>
            <p className="text-mini tracking-[0.12em] text-texto-suave mb-8">{s.oab}</p>
            <p className="text-texto-suave mb-10 max-w-[48ch]">
              {s.nomeCompleto} é {s.profissao.toLowerCase()} {fem ? "inscrita" : "inscrito"} na{" "}
              {seccional} sob o nº {numeroOab} e {fem ? "sócia" : "sócio"} do {ESCRITORIO.nome},
              em {ESCRITORIO.endereco.cidade}. Atua em{" "}
              {listaEmTexto(areas.map((a) => a.nome.toLowerCase()))}.
            </p>
            <div className="flex flex-wrap gap-4">
              <Botao href="/contato">Fale com o escritório</Botao>
              <Botao href={s.instagram} variante="secundario">Instagram</Botao>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <section className="grid gap-12 py-20 md:grid-cols-[minmax(0,1fr)_minmax(0,24rem)] md:items-center md:gap-20 md:py-28">
          <div>
            <Rotulo>Atuação</Rotulo>
            <h2 className="text-h2 mb-8 max-w-[18ch]">Onde atua e como.</h2>
            <div className="mb-12 flex max-w-[60ch] flex-col gap-5 text-texto-suave">
              {s.atuacao.map((p) => <p key={p}>{p}</p>)}
            </div>
            <div className="grid gap-10 sm:grid-cols-2">
              <div>
                <h3 className={`${subtitulo} mb-3`}>Áreas</h3>
                <ul className="flex flex-col gap-1">
                  {areas.map((a) => (
                    <li key={a.slug}>
                      <Link href={`/areas-de-atuacao/${a.slug}`} className="inline-flex min-h-11 items-center text-texto underline underline-offset-4 hover:text-acento">
                        {a.nome}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className={`${subtitulo} mb-3`}>Frentes</h3>
                <ul className="flex flex-col gap-2">
                  {s.destaques.map((d) => (
                    <li key={d} className="flex gap-2 text-mini text-texto-suave">
                      <span aria-hidden className="text-acento">—</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <Image
            src={s.fotosPerfil.ambiente}
            alt={`${s.nome} no escritório`}
            width={1000}
            height={1500}
            sizes="(max-width: 768px) 100vw, 384px"
            className="foto aspect-[2/3] w-full rounded-ssb object-cover"
          />
        </section>

        <section className="grid gap-16 border-t border-borda py-20 md:grid-cols-[minmax(0,26rem)_minmax(0,1fr)] md:items-center md:gap-24 md:py-28">
          <div className="relative mr-10 md:mr-0">
            <Image
              src={s.fotosPerfil.retrato}
              alt={`Retrato de ${s.nomeCompleto}`}
              width={1000}
              height={1500}
              sizes="(max-width: 768px) 85vw, 416px"
              className="foto aspect-[2/3] w-full rounded-ssb object-cover"
            />
            <Image
              src={s.fotosPerfil.detalhe}
              alt=""
              width={600}
              height={750}
              sizes="160px"
              className="foto absolute -bottom-8 -right-10 aspect-[4/5] w-32 rounded-ssb border-4 border-fundo object-cover shadow-xl md:-right-14 md:w-40"
            />
          </div>
          <div>
            <Rotulo>Trajetória</Rotulo>
            <h2 className="text-h2 mb-8 max-w-[18ch]">De onde vem a experiência.</h2>
            <p className="mb-10 max-w-[60ch] text-texto-suave">{s.trajetoria}</p>
            <h3 className={`${subtitulo} mb-3`}>Formação</h3>
            <ul className="mb-10 flex flex-col gap-3">
              {s.formacao.map((f) => (
                <li key={f} className="flex gap-2 text-texto-suave">
                  <span aria-hidden className="text-acento">—</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <p className="border-l-2 border-acento bg-fundo-profundo px-5 py-4 text-mini text-texto-suave">
              Atendimento presencial em {ESCRITORIO.endereco.cidade} e remoto para todo o Brasil.
            </p>
          </div>
        </section>

        {artigos.length > 0 && (
          <Secao rotulo="Conteúdo" titulo={`Artigos de ${s.nome}.`}>
            <ul className="flex flex-col divide-y divide-borda border-y border-borda">
              {artigos.map((a) => (
                <li key={a.slug}>
                  <Link href={`/blog/${a.slug}`} className="flex flex-col gap-1 py-5 hover:text-acento">
                    <span className="text-h3">{a.titulo}</span>
                    <span className="text-mini text-texto-suave">{dataPorExtenso(a.publicadoEm)}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </Secao>
        )}

        <ChamadaFinal titulo={`Fale com ${s.nome}.`} refArea={`perfil-${s.slug}`} />
      </div>
    </>
  );
}
