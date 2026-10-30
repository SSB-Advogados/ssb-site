import type { MetadataRoute } from "next";
import { categoriasComArtigo, todosOsArtigos } from "@/lib/blog";
import { PAGINAS_LOCAIS, PAGINAS_TEMA, hrefTema } from "@/lib/bancario";
import { PAGINAS_LOCAIS_FAMILIA, PAGINAS_TEMA_FAMILIA, hrefTemaFamilia } from "@/lib/familia";
import { AREAS, ESCRITORIO, SOCIOS } from "@/lib/escritorio";

// Gerado no build: o site é exportado estático.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${ESCRITORIO.dominio}`;
  const agora = new Date();

  const fixas = ["", "/areas-de-atuacao", "/sobre", "/contato", "/blog", "/politica-de-privacidade", "/aviso-legal"];

  return [
    ...fixas.map((p) => ({
      url: `${base}${p}`,
      lastModified: agora,
      changeFrequency: "monthly" as const,
      priority: p === "" ? 1 : 0.8,
    })),
    ...SOCIOS.filter((s) => s.perfilPublicado).map((s) => ({
      url: `${base}/sobre/${s.slug}/`,
      lastModified: agora,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...PAGINAS_LOCAIS.map((l) => ({
      url: `${base}/advogado-bancario/${l.slug}/`,
      lastModified: agora,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...PAGINAS_TEMA.map((t) => ({
      url: `${base}${hrefTema(t.slug)}/`,
      lastModified: agora,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...PAGINAS_LOCAIS_FAMILIA.map((l) => ({
      url: `${base}/advogada-de-familia/${l.slug}/`,
      lastModified: agora,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...PAGINAS_TEMA_FAMILIA.map((t) => ({
      url: `${base}${hrefTemaFamilia(t.slug)}/`,
      lastModified: agora,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...AREAS.map((a) => ({
      url: `${base}/areas-de-atuacao/${a.slug}`,
      lastModified: agora,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...categoriasComArtigo().map((c) => ({
      url: `${base}/blog/categoria/${c.slug}`,
      lastModified: agora,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })),
    ...todosOsArtigos().map((a) => ({
      url: `${base}/blog/${a.slug}`,
      lastModified: new Date(`${a.atualizadoEm}T12:00:00`),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
