import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Botao, Rotulo } from "@/components/ui";
import { TopoEscuro } from "@/components/TopoEscuro";
import { ChamadaFinal, Secao } from "@/components/blocos";
import { autorDe, dataPorExtenso, todosOsArtigos } from "@/lib/blog";
import { AREAS, ESCRITORIO, SOCIOS, nomeExibicao, socioPorSlug } from "@/lib/escritorio";
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

/** No `npm run dev` o perfil ainda não publicado aparece, para o sócio
 *  conferir a página antes de ir ao ar. No build de produção, não. */
const emPrevia = process.env.NODE_ENV === "development";

export function generateStaticParams() {
  return SOCIOS.filter((s) => s.perfilPublicado || emPrevia).map((s) => ({ slug: s.slug }));
}

const areasDe = (slugs: string[]) =>
  slugs.map((slug) => AREAS.find((a) => a.slug === slug)!);

const listaEmTexto = (itens: string[]) =>
  itens.length > 1 ? `${itens.slice(0, -1).join(", ")} e ${itens.at(-1)}` : itens[0];

export async function generateMetadata({ params }: PageProps<"/sobre/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const s = socioPorSlug(slug);
  if (!s) return {};
  const areas = listaEmTexto(areasDe(s.foco?.areas ?? s.areas).map((a) => a.prosa));
  const socio = s.profissao === "Advogada" ? "sócia" : "sócio";
  const cargo = s.foco?.cargo ?? s.profissao.toLowerCase();
  return {
    title: `${s.nomeCompleto}, ${cargo} em ${ESCRITORIO.endereco.cidade}`,
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
  if (!s || !(s.perfilPublicado || emPrevia)) notFound();

  // Com foco (Vitor: só bancário), o perfil mostra apenas aquela frente,
  // inclusive nos artigos listados.
  const areas = areasDe(s.foco?.areas ?? s.areas);
  const atuacao = s.foco?.atuacao ?? s.atuacao;
  const destaques = s.foco?.destaques ?? s.destaques;
  const artigos = todosOsArtigos().filter(
    (a) => autorDe(a).slug === s.slug && areas.some((x) => x.slug === a.categoria),
  );
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

      <TopoEscuro
        foto={s.fotosPerfil.topo}
        alt={`${s.nomeCompleto}, ${(s.foco?.titulo ?? s.profissao).toLowerCase()}`}
        trilha={[{ nome: "Início", href: "/" }, { nome: "Sobre", href: "/sobre" }, { nome: s.nome }]}
      >
        <Rotulo>{s.profissao} · {ESCRITORIO.marca}</Rotulo>
        <h1 className="text-h1 md:text-display mb-4 leading-[1.02]">{nomeExibicao(s)}</h1>
        {s.foco && (
          <p className="font-display text-h2 leading-tight text-acento mb-5">{s.foco.titulo}</p>
        )}
        <p className="text-texto mb-1">{s.nomeCompleto}</p>
        <p className="text-mini text-texto-suave mb-8">{s.oab}</p>
        <p className="text-texto-suave mb-10 max-w-[48ch]">
          {s.nomeCompleto} é {s.profissao.toLowerCase()} {fem ? "inscrita" : "inscrito"} na{" "}
          {seccional} sob o nº {numeroOab} e {fem ? "sócia" : "sócio"} do {ESCRITORIO.nome},
          em {ESCRITORIO.endereco.cidade}. Atua em{" "}
          {listaEmTexto(areas.map((a) => a.prosa))}.
        </p>
        <div className="flex flex-wrap gap-4">
          {s.foco ? (
            <Botao href={s.foco.pagina.href}>{s.foco.pagina.nome}</Botao>
          ) : (
            <Botao href="/contato">Fale com o escritório</Botao>
          )}
          <Botao href={s.instagram} variante="secundario">Instagram</Botao>
        </div>
      </TopoEscuro>

      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <section className="py-20 md:py-28">
          <div>
            <Rotulo>Atuação</Rotulo>
            <h2 className="text-h2 mb-8 max-w-[18ch]">Onde atua e como.</h2>
            <div className="mb-12 flex max-w-[60ch] flex-col gap-5 text-texto-suave">
              {atuacao.map((p) => <p key={p}>{p}</p>)}
            </div>
            <div className="grid gap-10 sm:grid-cols-2 lg:max-w-[52rem]">
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
                  {destaques.map((d) => (
                    <li key={d} className="flex gap-2 text-mini text-texto-suave">
                      <span aria-hidden className="text-acento">—</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className={`grid gap-16 border-t border-borda py-20 md:items-center md:gap-24 md:py-28 ${s.fotosPerfil.retrato ? "md:grid-cols-[minmax(0,26rem)_minmax(0,1fr)]" : ""}`}>
          {s.fotosPerfil.retrato && (
            <Image
              src={s.fotosPerfil.retrato}
              alt={`Retrato de ${s.nomeCompleto}`}
              width={1000}
              height={1250}
              sizes="(max-width: 768px) 100vw, 416px"
              className="foto aspect-[4/5] w-full rounded-ssb object-cover"
            />
          )}
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

        <ChamadaFinal titulo={`Fale com ${nomeExibicao(s)}.`} refArea={`perfil-${s.slug}`} />
      </div>
    </>
  );
}
