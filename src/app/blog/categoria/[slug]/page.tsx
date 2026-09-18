import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Breadcrumb, Rotulo } from "@/components/ui";
import { ChamadaFinal } from "@/components/blocos";
import { ListagemBlog, type CardArtigo } from "@/components/blog";
import {
  areaDe, artigosDaCategoria, autorDe, categoriasComArtigo, dataPorExtenso,
} from "@/lib/blog";
import { AREAS } from "@/lib/escritorio";
import { JsonLd, breadcrumb } from "@/lib/schema";

export const dynamicParams = false;

export function generateStaticParams() {
  return categoriasComArtigo().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/categoria/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const area = AREAS.find((a) => a.slug === slug);
  if (!area) return {};
  return {
    title: area.nome,
    description: `Artigos do SSB Advogados sobre ${area.nome.toLowerCase()}, assinados pelo advogado que responde pela área.`.slice(0, 155),
    alternates: { canonical: `/blog/categoria/${slug}` },
  };
}

export default async function Categoria({ params }: PageProps<"/blog/categoria/[slug]">) {
  const { slug } = await params;
  const area = AREAS.find((a) => a.slug === slug);
  if (!area) notFound();

  const artigos: CardArtigo[] = artigosDaCategoria(slug).map((a) => ({
    slug: a.slug,
    titulo: a.titulo,
    resumo: a.resumo,
    categoria: a.categoria,
    categoriaNome: areaDe(a).nome,
    autorNome: autorDe(a).nome,
    autorFoto: autorDe(a).fotoQuadrada,
    data: a.publicadoEm,
    dataLegivel: dataPorExtenso(a.publicadoEm),
    minutos: a.minutos,
  }));

  return (
    <div className="mx-auto max-w-[1200px] px-5 md:px-8">
      <JsonLd dados={breadcrumb([
        { nome: "Início", href: "/" },
        { nome: "Conteúdo", href: "/blog" },
        { nome: area.nome, href: `/blog/categoria/${slug}` },
      ])} />
      <div className="pt-8">
        <Breadcrumb trilha={[
          { nome: "Início", href: "/" },
          { nome: "Conteúdo", href: "/blog" },
          { nome: area.nome },
        ]} />
      </div>

      <div className="py-14 md:py-20">
        <Rotulo>Conteúdo · {area.nome}</Rotulo>
        <h1 className="text-h1 md:text-display mb-6 max-w-[20ch]">{area.nome}</h1>
        <p className="text-medio text-texto-suave max-w-[58ch]">
          Textos desta área.{" "}
          <Link href={`/areas-de-atuacao/${slug}`} className="text-acento underline underline-offset-4">
            Ver a página de {area.nome.toLowerCase()}
          </Link>
          .
        </p>
      </div>

      <ListagemBlog
        artigos={artigos}
        categorias={categoriasComArtigo().map((c) => ({ slug: c.slug, nome: c.nome }))}
        categoriaAtiva={slug}
      />

      <ChamadaFinal titulo="Sua dúvida não está aqui?" refArea={slug} area={area.nome} />
    </div>
  );
}
