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
      images: [{ url: s.fotoPerfil, width: 1000, height: 1250, alt: s.nomeCompleto }],
      locale: "pt_BR",
    },
  };
}

export default async function PerfilSocio({ params }: PageProps<"/sobre/[slug]">) {
  const { slug } = await params;
  const s = socioPorSlug(slug);
  if (!s) notFound();

  const areas = areasDe(s.areas);
  const artigos = todosOsArtigos().filter((a) => autorDe(a).slug === s.slug);
  const socia = s.profissao === "Advogada";

  return (
    <div className="mx-auto max-w-[1200px] px-5 md:px-8">
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

      <div className="pt-8">
        <Breadcrumb trilha={[
          { nome: "Início", href: "/" },
          { nome: "Sobre", href: "/sobre" },
          { nome: s.nome },
        ]} />
      </div>

      <div className="grid gap-10 py-14 md:grid-cols-[1fr_minmax(0,26rem)] md:items-center md:gap-16 md:py-20">
        <div>
          <Rotulo>{s.profissao} · {ESCRITORIO.marca}</Rotulo>
          <h1 className="text-h1 md:text-display mb-4">{s.nome}</h1>
          <p className="text-medio text-texto mb-1">{s.nomeCompleto}</p>
          <p className="text-mini text-texto-suave mb-8">{s.oab}</p>
          <p className="text-medio text-texto-suave mb-10 max-w-[56ch]">
            {s.nomeCompleto} é {s.profissao.toLowerCase()} {socia ? "inscrita" : "inscrito"} na{" "}
            {s.oab.replace(/ [\d.]+$/, "")} sob o nº {s.oab.match(/[\d.]+$/)![0]} e{" "}
            {socia ? "sócia" : "sócio"} do {ESCRITORIO.nome}, em {ESCRITORIO.endereco.cidade}.
            Atua em {listaEmTexto(areas.map((a) => a.nome.toLowerCase()))}.
          </p>
          <div className="flex flex-wrap gap-4">
            <Botao href="/contato">Fale com o escritório</Botao>
            <Botao href={s.instagram} variante="secundario">Instagram</Botao>
          </div>
        </div>
        <Image
          src={s.fotoPerfil}
          alt={`${s.nomeCompleto}, ${s.profissao.toLowerCase()} do ${ESCRITORIO.marca}`}
          width={1000}
          height={1250}
          priority
          sizes="(max-width: 768px) 100vw, 416px"
          className="foto aspect-[4/5] w-full rounded-ssb object-cover"
        />
      </div>

      <Secao rotulo="Atuação" titulo="Onde atua e como.">
        <div className="grid gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] md:gap-16">
          <div className="flex max-w-[62ch] flex-col gap-5 text-texto-suave">
            {s.atuacao.map((p) => <p key={p}>{p}</p>)}
          </div>
          <div>
            <h3 className="text-micro uppercase tracking-[0.2em] text-texto-suave mb-3">Áreas</h3>
            <ul className="flex flex-col gap-1">
              {areas.map((a) => (
                <li key={a.slug}>
                  <Link href={`/areas-de-atuacao/${a.slug}`} className="inline-flex min-h-11 items-center text-texto underline underline-offset-4 hover:text-acento">
                    {a.nome}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-micro uppercase tracking-[0.2em] text-texto-suave mt-8 mb-3">Frentes</h3>
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
      </Secao>

      <Image
        src={s.fotoTrabalho}
        alt={`${s.nome} no escritório`}
        width={1600}
        height={1000}
        sizes="(max-width: 1200px) 100vw, 1136px"
        className="foto w-full rounded-ssb object-cover"
      />

      <Secao rotulo="Trajetória" titulo="De onde vem a experiência.">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <p className="max-w-[62ch] text-texto-suave">{s.trajetoria}</p>
          <div>
            <h3 className="text-micro uppercase tracking-[0.2em] text-texto-suave mb-3">Formação</h3>
            <ul className="flex flex-col gap-3">
              {s.formacao.map((f) => (
                <li key={f} className="flex gap-2 text-texto-suave">
                  <span aria-hidden className="text-acento">—</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Secao>

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
  );
}
