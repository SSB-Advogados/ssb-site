import type { MetadataRoute } from "next";
import { categoriasComArtigo, todosOsArtigos } from "@/lib/blog";
import { AREAS, ESCRITORIO } from "@/lib/escritorio";

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
