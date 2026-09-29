import type { NextConfig } from "next";

/**
 * Exportação estática. O site é HTML gerado no build, sem servidor.
 *
 * Isso existe porque a hospedagem passou da Netlify para o GitHub Pages em
 * 29/09/2026: o plano gratuito da Netlify cobra 15 créditos por publicação,
 * dá 20 publicações por mês, e ao zerar o site sai do ar. O GitHub Pages não
 * cobra por publicação.
 *
 * `images.unoptimized` é exigência do export. Não há perda real: as fotos já
 * são WebP tratadas em scripts/recortar-retratos.py.
 *
 * `trailingSlash` faz cada página virar uma pasta com index.html, que é como
 * o GitHub Pages serve conteúdo.
 */
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
