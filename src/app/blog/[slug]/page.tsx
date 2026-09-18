import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Botao, Breadcrumb, Rotulo } from "@/components/ui";
import { Secao } from "@/components/blocos";
import { BotaoCompartilhar } from "@/components/blog";
import {
  areaDe, artigoPorSlug, artigosDaCategoria, autorDe, dataPorExtenso,
  idDoTitulo, todosOsArtigos,
} from "@/lib/blog";
import { ESCRITORIO } from "@/lib/escritorio";
import { JsonLd, breadcrumb } from "@/lib/schema";

export const dynamicParams = false;

export function generateStaticParams() {
  return todosOsArtigos().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const a = artigoPorSlug(slug);
  if (!a) return {};
  return {
    title: a.titulo,
    description: a.resumo,
    alternates: { canonical: `/blog/${a.slug}` },
    openGraph: {
      type: "article",
      title: a.titulo,
      description: a.resumo,
      publishedTime: a.publicadoEm,
      modifiedTime: a.atualizadoEm,
      authors: [autorDe(a).nome],
    },
  };
}

/** H2 e H3 ganham id, para o sumário navegável e para link direto. */
const componentes = {
  h2: (p: React.ComponentProps<"h2">) => (
    <h2 id={idDoTitulo(String(p.children))} className="text-h2 mt-16 mb-5 scroll-mt-28">
      {p.children}
    </h2>
  ),
  h3: (p: React.ComponentProps<"h3">) => (
    <h3 id={idDoTitulo(String(p.children))} className="text-h3 mt-10 mb-4 scroll-mt-28">
      {p.children}
    </h3>
  ),
  p: (p: React.ComponentProps<"p">) => <p className="mb-5 text-texto-suave">{p.children}</p>,
  ul: (p: React.ComponentProps<"ul">) => (
    <ul className="mb-6 flex flex-col gap-3">{p.children}</ul>
  ),
  li: (p: React.ComponentProps<"li">) => (
    <li className="flex gap-3 text-texto-suave">
      <span aria-hidden className="text-acento">—</span>
      <span>{p.children}</span>
    </li>
  ),
  strong: (p: React.ComponentProps<"strong">) => (
    <strong className="font-medium text-texto">{p.children}</strong>
  ),
  a: (p: React.ComponentProps<"a">) => (
    <a {...p} className="text-acento underline underline-offset-4" />
  ),
};

export default async function Artigo({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const a = artigoPorSlug(slug);
  if (!a) notFound();

  const autor = autorDe(a);
  const area = areaDe(a);
  const relacionados = artigosDaCategoria(a.categoria).filter((x) => x.slug !== a.slug).slice(0, 3);
  const url = `https://${ESCRITORIO.dominio}/blog/${a.slug}`;

  return (
    <div className="mx-auto max-w-[1200px] px-5 md:px-8">
      <JsonLd dados={[
        {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: a.titulo,
          description: a.resumo,
          datePublished: a.publicadoEm,
          dateModified: a.atualizadoEm,
          inLanguage: "pt-BR",
          mainEntityOfPage: { "@type": "WebPage", "@id": url },
          author: {
            "@type": "Person",
            name: autor.nome,
            identifier: autor.oab,
            url: `https://${ESCRITORIO.dominio}/sobre#${autor.slug}`,
          },
          publisher: { "@id": `https://${ESCRITORIO.dominio}/#escritorio` },
          about: area.nome,
          wordCount: a.corpo.split(/\s+/).length,
        },
        breadcrumb([
          { nome: "Início", href: "/" },
          { nome: "Conteúdo", href: "/blog" },
          { nome: area.nome, href: `/blog/categoria/${area.slug}` },
          { nome: a.titulo, href: `/blog/${a.slug}` },
        ]),
      ]} />

      <div className="pt-8">
        <Breadcrumb trilha={[
          { nome: "Início", href: "/" },
          { nome: "Conteúdo", href: "/blog" },
          { nome: area.nome, href: `/blog/categoria/${area.slug}` },
          { nome: a.titulo },
        ]} />
      </div>

      <article className="py-14 md:py-20">
        <Rotulo>
          <Link href={`/blog/categoria/${area.slug}`} className="inline-flex min-h-10 items-center hover:text-texto">
            {area.nome}
          </Link>
        </Rotulo>
        <h1 className="text-h1 md:text-display mb-8 max-w-[20ch]">{a.titulo}</h1>

        <div className="mb-12 flex flex-wrap items-center gap-x-6 gap-y-3 border-y border-borda py-5 text-mini text-texto-suave">
          <span className="flex items-center gap-3">
            <Image
              src={autor.fotoQuadrada}
              alt=""
              width={80}
              height={80}
              className="foto h-10 w-10 shrink-0 rounded-full object-cover"
            />
            <span>
              Por{" "}
              {autor.temPerfil ? (
                <Link href={`/sobre#${autor.slug}`} className="text-texto hover:text-acento">
                  {autor.nome}
                </Link>
              ) : (
                <span className="text-texto">{autor.nome}</span>
              )}
              , {autor.oab}
            </span>
          </span>
          <span>
            Publicado em <time dateTime={a.publicadoEm}>{dataPorExtenso(a.publicadoEm)}</time>
          </span>
          {a.atualizadoEm !== a.publicadoEm && (
            <span>
              Atualizado em <time dateTime={a.atualizadoEm}>{dataPorExtenso(a.atualizadoEm)}</time>
            </span>
          )}
          <span>{a.minutos} min de leitura</span>
        </div>

        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_16rem] lg:gap-20">
          <div className="max-w-[68ch]">
            <MDXRemote source={a.corpo} components={componentes} />
          </div>

          {a.sumario.length > 1 && (
            <nav aria-label="Neste artigo" className="lg:sticky lg:top-28 lg:self-start lg:order-last">
              <h2 className="text-micro uppercase tracking-[0.2em] text-texto-suave mb-4">
                Neste artigo
              </h2>
              <ul className="flex flex-col gap-3 border-l border-borda pl-4">
                {a.sumario.map((s) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`} className="inline-flex min-h-10 items-center text-mini text-texto-suave hover:text-acento">
                      {s.texto}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>

        <div className="mt-14 flex flex-wrap items-center gap-4 border-t border-borda pt-8">
          <BotaoCompartilhar titulo={a.titulo} />
          <p className="text-mini text-texto-suave">
            Reprodução permitida com citação da fonte e do autor.
          </p>
        </div>
      </article>

      <Secao rotulo="Sobre esta área" titulo={`Como o escritório atua em ${area.nome.toLowerCase()}.`}>
        <Botao href={`/areas-de-atuacao/${area.slug}`}>Ver a página da área</Botao>
      </Secao>

      {relacionados.length > 0 && (
        <Secao rotulo="Continue lendo">
          <ul className="grid gap-5 md:grid-cols-3">
            {relacionados.map((r) => (
              <li key={r.slug}>
                <Link
                  href={`/blog/${r.slug}`}
                  className="group flex h-full flex-col border-t border-borda pt-6 hover:border-acento"
                >
                  <h3 className="text-h3 mb-3">{r.titulo}</h3>
                  <p className="text-mini text-texto-suave">{r.resumo}</p>
                </Link>
              </li>
            ))}
          </ul>
        </Secao>
      )}
    </div>
  );
}
