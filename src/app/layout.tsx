import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BotaoWhatsApp } from "@/components/BotaoWhatsApp";
import { scriptDoTema } from "@/components/Tema";
import { ESCRITORIO } from "@/lib/escritorio";
import "./globals.css";

/* Display em serifada de alto contraste. É o que dá o acabamento
   editorial que a referência tem e que nenhuma sans entrega.
   Ver a nota sobre o manual de marca em docs/design-system.md. */
const display = Cormorant_Garamond({
  variable: "--fonte-display",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const texto = Montserrat({
  variable: "--fonte-texto",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${ESCRITORIO.dominio}`),
  title: {
    default: `Advocacia em Belo Horizonte | ${ESCRITORIO.marca}`,
    template: `%s | ${ESCRITORIO.marca}`,
  },
  description:
    "Escritório em Belo Horizonte com atuação em direito empresarial, patrimonial, bancário, criminal e previdenciário. Atendimento remoto em todo o Brasil.",
  alternates: { types: { "application/rss+xml": "/feed.xml" } },
  // Preview e ambiente local nunca são indexados. Ver docs/decisoes-tecnicas.md.
  robots:
    process.env.NEXT_PUBLIC_AMBIENTE === "producao"
      ? undefined
      : { index: false, follow: false },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${texto.variable} h-full`} suppressHydrationWarning>
      <head>
        {/* Aplica o tema antes da primeira pintura, senão quem escolheu
            claro vê o escuro piscar a cada carregamento. */}
        <script dangerouslySetInnerHTML={{ __html: scriptDoTema }} />
      </head>
      <body className="min-h-full flex flex-col">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50
                     focus:bg-texto focus:text-fundo focus:px-4 focus:py-3 focus:rounded-ssb"
        >
          Pular para o conteúdo
        </a>
        <Header />
        <main id="conteudo" className="flex-1">{children}</main>
        <Footer />
        <BotaoWhatsApp />
      </body>
    </html>
  );
}
