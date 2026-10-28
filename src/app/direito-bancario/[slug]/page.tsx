import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Acordeao, Botao, Rotulo } from "@/components/ui";
import { BlocosNumerados, ChamadaFinal, Secao } from "@/components/blocos";
import { ComoFunciona, QuemConduzBancario } from "@/components/bancario";
import { TopoEscuro } from "@/components/TopoEscuro";
import { PAGINAS_TEMA, TEMAS, hrefTema, temaPorSlug } from "@/lib/bancario";
import { ESCRITORIO } from "@/lib/escritorio";
import { JsonLd, breadcrumb, faqPage } from "@/lib/schema";

/** Página de tema bancário: descontos indevidos, RMC, juros, golpe... */

export const dynamicParams = false;

export function generateStaticParams() {
  return PAGINAS_TEMA.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: PageProps<"/direito-bancario/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const t = temaPorSlug(slug);
  if (!t) return {};
  return {
    title: { absolute: t.title },
    description: t.description,
    alternates: { canonical: hrefTema(t.slug) },
  };
}

function Lista({ itens, colunas }: { itens: string[]; colunas?: boolean }) {
  return (
    <ul className={`grid max-w-[64ch] gap-4 ${colunas ? "md:max-w-none md:grid-cols-2 md:gap-x-16" : ""}`}>
      {itens.map((i) => (
        <li key={i} className="flex gap-3 text-texto-suave">
          <span aria-hidden className="text-acento">—</span>
          <span>{i}</span>
        </li>
      ))}
    </ul>
  );
}

export default async function TemaBancario({ params }: PageProps<"/direito-bancario/[slug]">) {
  const { slug } = await params;
  const t = temaPorSlug(slug);
  if (!t) notFound();
  const nome = TEMAS.find((x) => x.slug === t.slug)!.nome;
  const relacionados = t.relacionados
    .map((r) => TEMAS.find((x) => x.slug === r))
    .filter((x) => !!x && x.temPagina);
  const trilha = [
    { nome: "Início", href: "/" },
    { nome: "Advogado bancário em BH", href: "/advogado-bancario/belo-horizonte" },
    { nome, href: hrefTema(t.slug) },
  ];

  return (
    <>
      <JsonLd dados={[
        {
          "@context": "https://schema.org",
          "@type": "Service",
          name: nome,
          serviceType: "Advocacia em direito bancário",
          description: t.description,
          url: `https://${ESCRITORIO.dominio}${hrefTema(t.slug)}/`,
          provider: { "@id": `https://${ESCRITORIO.dominio}/#escritorio` },
          areaServed: [
            { "@type": "City", name: "Belo Horizonte" },
            { "@type": "Country", name: "Brasil" },
          ],
        },
        faqPage(t.faq),
        breadcrumb(trilha),
      ]} />

      <TopoEscuro trilha={[trilha[0], trilha[1], { nome }]}>
        <Rotulo>{t.rotulo}</Rotulo>
        <h1 className="text-h1 md:text-display mb-8 max-w-[20ch] leading-[1.02]">{t.h1}</h1>
        <p className="text-medio text-texto-suave mb-10 max-w-[56ch]">{t.abertura}</p>
        <div className="flex flex-wrap gap-4">
          <Botao href={`${ESCRITORIO.whatsapp}?text=${encodeURIComponent(`Olá, vim pelo site do SSB Advogados. Quero falar sobre ${nome.toLowerCase()}. (ref: ${t.slug})`)}`}>
            Falar no WhatsApp
          </Botao>
          <Botao href="/contato" variante="secundario">Todos os canais</Botao>
        </div>
      </TopoEscuro>

      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <Secao rotulo="Tipos" titulo={t.tipos.titulo} intro={t.tipos.intro}>
          <BlocosNumerados blocos={t.tipos.blocos} />
        </Secao>

        <Secao rotulo="Primeiro passo" titulo={t.identificar.titulo}>
          <ol className="flex max-w-[64ch] flex-col gap-5">
            {t.identificar.passos.map((p, i) => (
              <li key={p} className="flex gap-4 text-texto-suave">
                <span className="font-display text-h3 leading-none text-acento tabular-nums">{i + 1}</span>
                <span>{p}</span>
              </li>
            ))}
          </ol>
        </Secao>

        <Secao rotulo="Pedidos" titulo={t.pedidos.titulo} intro={t.pedidos.intro}>
          <Lista itens={t.pedidos.itens} />
        </Secao>
      </div>

      <ComoFunciona />

      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <Secao rotulo="Documentos" titulo="O que separar para a análise.">
          <Lista itens={t.documentos} colunas />
          <p className="mt-8 text-mini text-texto-suave">Não tem tudo? Comece com o que tiver. O que faltar o escritório ajuda a pedir.</p>
        </Secao>

        <QuemConduzBancario />

        <Secao rotulo="Perguntas frequentes" titulo="As dúvidas que mais chegam.">
          <div className="max-w-[70ch]">
            {t.faq.map((f) => (
              <Acordeao key={f.p} pergunta={f.p}>{f.r}</Acordeao>
            ))}
          </div>
        </Secao>

        {relacionados.length > 0 && (
          <Secao rotulo="Também pode interessar">
            <ul className="flex flex-wrap gap-4">
              {relacionados.map((r) => (
                <li key={r!.slug}>
                  <Link href={hrefTema(r!.slug)} className="inline-flex min-h-11 items-center border border-borda px-5 text-mini rounded-ssb hover:border-acento hover:text-acento">
                    {r!.nome}
                  </Link>
                </li>
              ))}
            </ul>
          </Secao>
        )}

        <ChamadaFinal titulo="Conte o que está sendo descontado." refArea={t.slug} area={nome} />
      </div>
    </>
  );
}
