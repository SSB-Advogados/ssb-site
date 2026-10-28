import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Acordeao, Botao, Rotulo } from "@/components/ui";
import { ChamadaFinal, Secao } from "@/components/blocos";
import { CardsTemas, ComoFunciona, QuemConduzBancario } from "@/components/bancario";
import { TopoEscuro } from "@/components/TopoEscuro";
import { PAGINAS_LOCAIS, localPorSlug } from "@/lib/bancario";
import { ESCRITORIO, enderecoEmLinha, socioPorSlug } from "@/lib/escritorio";
import { JsonLd, breadcrumb, faqPage } from "@/lib/schema";

/** Página local do bancário: "Advogado Bancário em <cidade>". */

export const dynamicParams = false;

export function generateStaticParams() {
  return PAGINAS_LOCAIS.map((l) => ({ cidade: l.slug }));
}

export async function generateMetadata({ params }: PageProps<"/advogado-bancario/[cidade]">): Promise<Metadata> {
  const { cidade } = await params;
  const l = localPorSlug(cidade);
  if (!l) return {};
  return {
    title: l.title,
    description: l.description,
    alternates: { canonical: `/advogado-bancario/${l.slug}` },
  };
}

export default async function AdvogadoBancarioLocal({ params }: PageProps<"/advogado-bancario/[cidade]">) {
  const { cidade } = await params;
  const l = localPorSlug(cidade);
  if (!l) notFound();
  const vitor = socioPorSlug("vitor-silvino")!;
  const url = `https://${ESCRITORIO.dominio}/advogado-bancario/${l.slug}/`;
  const trilha = [
    { nome: "Início", href: "/" },
    { nome: "Direito bancário", href: "/areas-de-atuacao/direito-bancario" },
    { nome: l.cidade, href: `/advogado-bancario/${l.slug}` },
  ];

  return (
    <>
      <JsonLd dados={[
        {
          "@context": "https://schema.org",
          "@type": "Service",
          name: l.h1,
          serviceType: "Advocacia em direito bancário",
          description: l.description,
          url,
          provider: { "@id": `https://${ESCRITORIO.dominio}/#escritorio` },
          areaServed: { "@type": "City", name: l.cidade },
        },
        faqPage(l.faq),
        breadcrumb(trilha),
      ]} />

      <TopoEscuro
        foto={vitor.fotosPerfil.topo}
        alt={`${vitor.nomeCompleto}, advogado bancário em ${l.cidade}`}
        trilha={[trilha[0], trilha[1], { nome: l.cidade }]}
      >
        <Rotulo>{vitor.nome} · {vitor.oab}</Rotulo>
        <h1 className="text-h1 md:text-display mb-6 leading-[1.02]">{l.h1}</h1>
        <p className="text-texto-suave mb-10 max-w-[46ch]">{l.abertura}</p>
        <div className="flex flex-wrap gap-4">
          <Botao href={`${ESCRITORIO.whatsapp}?text=${encodeURIComponent(`Olá, vim pelo site do SSB Advogados. Preciso de um advogado bancário em ${l.cidade}. (ref: bancario-${l.slug})`)}`}>
            Falar no WhatsApp
          </Botao>
          <Botao href="/contato" variante="secundario">Todos os canais</Botao>
        </div>
      </TopoEscuro>

      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <Secao rotulo="Situações que o escritório atende" titulo="Qual é o seu caso?">
          <CardsTemas />
        </Secao>
      </div>

      <ComoFunciona />

      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <QuemConduzBancario />

        <Secao rotulo={l.cidade} titulo={l.local.titulo}>
          <div className="flex max-w-[62ch] flex-col gap-5 text-texto-suave">
            {l.local.paragrafos.map((p) => <p key={p}>{p}</p>)}
            <p className="border-l-2 border-acento bg-fundo-profundo px-5 py-4 text-mini">
              {enderecoEmLinha()}
            </p>
          </div>
        </Secao>

        <Secao rotulo="Perguntas frequentes" titulo="As dúvidas que mais chegam.">
          <div className="max-w-[70ch]">
            {l.faq.map((f) => (
              <Acordeao key={f.p} pergunta={f.p}>{f.r}</Acordeao>
            ))}
          </div>
        </Secao>

        <ChamadaFinal titulo="Conte o que está acontecendo." refArea={`bancario-${l.slug}`} area="direito bancário" />
      </div>
    </>
  );
}
