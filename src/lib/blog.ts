import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { ADVOGADOS, AREAS, type Autor } from "@/lib/escritorio";

const DIR = path.join(process.cwd(), "conteudo", "blog");

export type Artigo = {
  slug: string;
  titulo: string;
  /** aparece no card e na meta description. Até 155 caracteres. */
  resumo: string;
  /** slug de uma das nove áreas. Categoria e área são a mesma coisa. */
  categoria: string;
  /** slug do advogado que aprovou e assina. Nunca vazio, nunca "Equipe SSB". */
  autor: string;
  publicadoEm: string;
  atualizadoEm: string;
  corpo: string;
  minutos: number;
  sumario: { id: string; texto: string }[];
  rascunho: boolean;
};

/** Só é publicável o artigo que passou pelas quatro checagens do fluxo. */
export type Frontmatter = {
  titulo: string;
  resumo: string;
  categoria: string;
  autor: string;
  publicadoEm: string;
  atualizadoEm?: string;
  rascunho?: boolean;
};

export function idDoTitulo(texto: string): string {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function sumarioDe(corpo: string) {
  return [...corpo.matchAll(/^##\s+(.+)$/gm)].map((m) => ({
    texto: m[1].trim(),
    id: idDoTitulo(m[1].trim()),
  }));
}

function minutosDe(corpo: string) {
  const palavras = corpo.replace(/[#*_`>[\]()]/g, "").split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(palavras / 200));
}

function ler(arquivo: string): Artigo {
  const slug = arquivo.replace(/\.mdx?$/, "");
  const bruto = fs.readFileSync(path.join(DIR, arquivo), "utf8");
  const { data, content } = matter(bruto);
  const f = data as Frontmatter;

  // Falhar aqui é melhor que publicar errado. As três regras abaixo vêm
  // do fluxo editorial e do Provimento 205/2021.
  if (!f.autor) throw new Error(`${arquivo}: sem autor. Artigo precisa de advogado que assine.`);
  if (!ADVOGADOS.some((a) => a.slug === f.autor))
    throw new Error(
      `${arquivo}: autor "${f.autor}" não está cadastrado. Só publica artigo quem está em ADVOGADOS, em src/lib/escritorio.ts.`,
    );
  if (!AREAS.some((a) => a.slug === f.categoria))
    throw new Error(`${arquivo}: categoria "${f.categoria}" não é uma das nove áreas.`);

  return {
    slug,
    titulo: f.titulo,
    resumo: f.resumo,
    categoria: f.categoria,
    autor: f.autor,
    publicadoEm: f.publicadoEm,
    atualizadoEm: f.atualizadoEm ?? f.publicadoEm,
    corpo: content,
    minutos: minutosDe(content),
    sumario: sumarioDe(content),
    rascunho: f.rascunho ?? false,
  };
}

export function todosOsArtigos(): Artigo[] {
  if (!fs.existsSync(DIR)) return [];
  return fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .map(ler)
    .filter((a) => !a.rascunho)
    .sort((a, b) => b.publicadoEm.localeCompare(a.publicadoEm));
}

export function artigoPorSlug(slug: string) {
  return todosOsArtigos().find((a) => a.slug === slug);
}

export function artigosDaCategoria(categoria: string) {
  return todosOsArtigos().filter((a) => a.categoria === categoria);
}

export function categoriasComArtigo() {
  const usadas = new Set(todosOsArtigos().map((a) => a.categoria));
  return AREAS.filter((a) => usadas.has(a.slug));
}

export function autorDe(artigo: Artigo): Autor {
  return ADVOGADOS.find((a) => a.slug === artigo.autor)!;
}

export function areaDe(artigo: Artigo) {
  return AREAS.find((a) => a.slug === artigo.categoria)!;
}

export const dataPorExtenso = (iso: string) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
