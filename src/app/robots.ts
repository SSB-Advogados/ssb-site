import type { MetadataRoute } from "next";
import { ESCRITORIO } from "@/lib/escritorio";

/**
 * Fora de produção o site inteiro fica fechado, para que preview
 * não concorra com o domínio real. Em produção, tudo liberado.
 *
 * Crawlers de IA (GPTBot, PerplexityBot, ClaudeBot e afins) NÃO são
 * bloqueados, por decisão da Fase 7: bloquear elimina a chance de o
 * escritório ser citado como fonte em resposta de IA.
 */
export default function robots(): MetadataRoute.Robots {
  const producao = process.env.NEXT_PUBLIC_AMBIENTE === "producao";
  const base = `https://${ESCRITORIO.dominio}`;

  if (!producao) {
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }

  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/admin/"] }],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
