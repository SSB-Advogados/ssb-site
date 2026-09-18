import type { Metadata } from "next";
import { Breadcrumb, Rotulo } from "@/components/ui";
import { ChamadaFinal } from "@/components/blocos";
import { ListagemBlog, type CardArtigo } from "@/components/blog";
import {
  areaDe, autorDe, categoriasComArtigo, dataPorExtenso, todosOsArtigos,
} from "@/lib/blog";
import { JsonLd, breadcrumb } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Conteúdo jurídico",
  description:
    "Artigos sobre acordo de sócios, contratos, conta bloqueada, registro de marca, inventário, BPC e concursos, assinados pelos advogados do SSB.",
  alternates: { canonical: "/blog" },
};

export function cardsDe(): CardArtigo[] {
  return todosOsArtigos().map((a) => ({
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
}

export default function Blog() {
  const artigos = cardsDe();
  const categorias = categoriasComArtigo().map((c) => ({ slug: c.slug, nome: c.nome }));

  return (
    <div className="mx-auto max-w-[1200px] px-5 md:px-8">
      <JsonLd dados={breadcrumb([
        { nome: "Início", href: "/" },
        { nome: "Conteúdo", href: "/blog" },
      ])} />
      <div className="pt-8">
        <Breadcrumb trilha={[{ nome: "Início", href: "/" }, { nome: "Conteúdo" }]} />
      </div>

      <div className="py-14 md:py-20">
        <Rotulo>Conteúdo</Rotulo>
        <h1 className="text-h1 md:text-display mb-6 max-w-[18ch]">
          O que explicamos com frequência, escrito.
        </h1>
        <p className="text-medio text-texto-suave max-w-[58ch]">
          Cada texto responde uma dúvida que chega ao escritório, e é assinado
          pelo advogado que responde pela área.
        </p>
      </div>

      <ListagemBlog artigos={artigos} categorias={categorias} />

      <ChamadaFinal titulo="Sua dúvida não está aqui?" refArea="conteudo" />
    </div>
  );
}
