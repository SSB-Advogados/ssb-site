import { areaDe, autorDe, todosOsArtigos } from "@/lib/blog";
import { ESCRITORIO } from "@/lib/escritorio";

const base = `https://${ESCRITORIO.dominio}`;

const escapar = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
   .replace(/"/g, "&quot;").replace(/'/g, "&apos;");

export function GET() {
  const artigos = todosOsArtigos();
  const atualizado = artigos[0]?.atualizadoEm ?? new Date().toISOString().slice(0, 10);

  const itens = artigos
    .map((a) => {
      const autor = autorDe(a);
      return `    <item>
      <title>${escapar(a.titulo)}</title>
      <link>${base}/blog/${a.slug}</link>
      <guid isPermaLink="true">${base}/blog/${a.slug}</guid>
      <description>${escapar(a.resumo)}</description>
      <category>${escapar(areaDe(a).nome)}</category>
      <dc:creator>${escapar(`${autor.nome}, ${autor.oab}`)}</dc:creator>
      <pubDate>${new Date(`${a.publicadoEm}T12:00:00-03:00`).toUTCString()}</pubDate>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapar(ESCRITORIO.marca)} — Conteúdo jurídico</title>
    <link>${base}/blog</link>
    <description>Artigos assinados pelos advogados do ${escapar(ESCRITORIO.marca)}, em Belo Horizonte.</description>
    <language>pt-BR</language>
    <lastBuildDate>${new Date(`${atualizado}T12:00:00-03:00`).toUTCString()}</lastBuildDate>
    <atom:link href="${base}/feed.xml" rel="self" type="application/rss+xml" />
${itens}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
