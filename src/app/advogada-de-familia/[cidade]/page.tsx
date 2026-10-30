import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Acordeao, Botao, Rotulo } from "@/components/ui";
import { ChamadaFinal, Secao } from "@/components/blocos";
import { CardsTemas, ComoFunciona, PASSOS_FAMILIA, QuemConduzBancario } from "@/components/bancario";
import { TopoEscuro } from "@/components/TopoEscuro";
import {
  ABERTURA_FAMILIA as ABERTURA_LOCAL, CREDENCIAL_FAMILIA as CREDENCIAL_LOCAL,
  PAGINAS_LOCAIS_FAMILIA as PAGINAS_LOCAIS, TEMAS_FAMILIA, hrefTemaFamilia,
  localFamiliaPorSlug as localPorSlug,
} from "@/lib/familia";
import { ESCRITORIO, enderecoEmLinha, nomeExibicao, socioPorSlug } from "@/lib/escritorio";
import { JsonLd, breadcrumb, faqPage } from "@/lib/schema";

/** Página local de família da Thayane: "Advogada de Família em <cidade>".
 *  Mesmo formato da página bancária do Vitor. As páginas da Thayane
 *  ficam no ramo thayane-familia até ela aprovar. */

export const dynamicParams = false;

export function generateStaticParams() {
  return PAGINAS_LOCAIS.map((l) => ({ cidade: l.slug }));
}

export async function generateMetadata({ params }: PageProps<"/advogada-de-familia/[cidade]">): Promise<Metadata> {
  const { cidade } = await params;
  const l = localPorSlug(cidade);
  if (!l) return {};
  return {
    title: l.title,
    description: l.description,
    alternates: { canonical: `/advogada-de-familia/${l.slug}` },
  };
}

export default async function AdvogadaFamiliaLocal({ params }: PageProps<"/advogada-de-familia/[cidade]">) {
  const { cidade } = await params;
  const l = localPorSlug(cidade);
  if (!l) notFound();
  const socia = socioPorSlug("thayane-barbosa")!;
  const url = `https://${ESCRITORIO.dominio}/advogada-de-familia/${l.slug}/`;
  const trilha = [
    { nome: "Início", href: "/" },
    { nome: "Família e sucessões", href: "/areas-de-atuacao/familia-e-sucessoes" },
    { nome: l.cidade, href: `/advogada-de-familia/${l.slug}` },
  ];

  return (
    <>
      <JsonLd dados={[
        {
          "@context": "https://schema.org",
          "@type": "Service",
          name: l.h1,
          serviceType: "Advocacia em direito de família",
          description: l.description,
          url,
          provider: { "@id": `https://${ESCRITORIO.dominio}/#escritorio` },
          areaServed: { "@type": "City", name: l.cidade },
        },
        faqPage(l.faq),
        breadcrumb(trilha),
      ]} />

      <TopoEscuro
        foto={l.foto ?? socia.fotosPerfil.topo}
        alt={`${socia.nomeCompleto}, advogada de família em ${l.cidade}`}
        trilha={[trilha[0], trilha[1], { nome: l.cidade }]}
      >
        <Rotulo>{nomeExibicao(socia)} · {socia.oab}</Rotulo>
        <h1 className="text-h1 md:text-display mb-6 leading-[1.02]">{l.h1}</h1>
        <p className="text-texto mb-5 max-w-[46ch] border-l-2 border-acento pl-4">{CREDENCIAL_LOCAL}</p>
        <p className="text-texto-suave mb-10 max-w-[46ch]">{ABERTURA_LOCAL}</p>
        <div className="flex flex-wrap gap-4">
          <Botao href={`${ESCRITORIO.whatsapp}?text=${encodeURIComponent(`Olá, vim pelo site do SSB Advogados e quero agendar uma consulta com advogada de família em ${l.cidade}. (ref: familia-${l.slug})`)}`}>
            Agendar consulta
          </Botao>
          <Botao href="/contato" variante="secundario">Todos os canais</Botao>
        </div>
      </TopoEscuro>

      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <Secao rotulo="Situações que o escritório atende" titulo="Qual é o seu caso?">
          <CardsTemas temas={TEMAS_FAMILIA} href={hrefTemaFamilia} outro="Outra questão de família" />
        </Secao>
      </div>

      <ComoFunciona passos={PASSOS_FAMILIA} />

      <div className="mx-auto max-w-[1200px] px-5 pt-20 md:px-8 md:pt-28">
        <Image
          src="/fotos/socios-sofa-2640-recorte.webp"
          alt="Thayane Barbosa e Vitor Silvino, sócios do SSB Advogados"
          width={1350}
          height={950}
          sizes="(max-width: 1200px) 100vw, 1136px"
          className="foto w-full rounded-ssb object-cover"
        />
        <p className="mt-4 text-mini text-texto-suave">
          Thayane Barbosa e Vitor Silvino, sócios do {ESCRITORIO.marca}.
        </p>
      </div>

      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <QuemConduzBancario slug="thayane-barbosa" />

        <Secao rotulo={l.cidade} titulo={l.local.titulo}>
          <div className="flex max-w-[62ch] flex-col gap-5 text-texto-suave">
            {l.local.paragrafos.map((p) => <p key={p}>{p}</p>)}
            <p className="border-l-2 border-acento bg-fundo-profundo px-5 py-4 text-mini">
              {enderecoEmLinha()}
            </p>
            {PAGINAS_LOCAIS.filter((o) => o.slug !== l.slug).map((o) => (
              <Link key={o.slug} href={`/advogada-de-familia/${o.slug}`} className="inline-flex min-h-11 items-center text-mini text-acento underline underline-offset-4">
                {o.h1}
              </Link>
            ))}
          </div>
        </Secao>

        <Secao rotulo="Perguntas frequentes" titulo="As dúvidas que mais chegam.">
          <div className="max-w-[70ch]">
            {l.faq.map((f) => (
              <Acordeao key={f.p} pergunta={f.p}>{f.r}</Acordeao>
            ))}
          </div>
        </Secao>

        <ChamadaFinal titulo="Conte o que está acontecendo." refArea={`familia-${l.slug}`} area="direito de família" />
      </div>
    </>
  );
}
