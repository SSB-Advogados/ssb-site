import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Acordeao, Botao, Breadcrumb, Rotulo } from "@/components/ui";
import {
  BlocosNumerados, ChamadaFinal, Escopo, QuemConduz, Secao,
} from "@/components/blocos";
import { CONTEUDO } from "@/lib/areas-conteudo";
import { AREAS, socioPorSlug } from "@/lib/escritorio";
import { JsonLd, breadcrumb, faqPage, servico } from "@/lib/schema";

export const dynamicParams = false;

export function generateStaticParams() {
  return CONTEUDO.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps<"/areas-de-atuacao/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const a = CONTEUDO.find((c) => c.slug === slug);
  if (!a) return {};
  return {
    title: a.title,
    description: a.description,
    alternates: { canonical: `/areas-de-atuacao/${a.slug}` },
  };
}

export default async function PaginaArea({ params }: PageProps<"/areas-de-atuacao/[slug]">) {
  const { slug } = await params;
  const a = CONTEUDO.find((c) => c.slug === slug);
  if (!a) notFound();

  const area = AREAS.find((x) => x.slug === slug)!;
  const socios = (area.socios ?? []).map(socioPorSlug).filter((s) => !!s);
  const relacionadas = a.relacionadas
    .map((s) => AREAS.find((x) => x.slug === s))
    .filter((x) => !!x);

  return (
    <div className="mx-auto max-w-[1200px] px-5 md:px-8">
      <JsonLd
        dados={[
          servico(area.nome, a.description, a.slug),
          faqPage(a.faq),
          breadcrumb([
            { nome: "Início", href: "/" },
            { nome: "Áreas de atuação", href: "/areas-de-atuacao" },
            { nome: area.nome, href: `/areas-de-atuacao/${a.slug}` },
          ]),
        ]}
      />

      <div className="pt-8">
        <Breadcrumb
          trilha={[
            { nome: "Início", href: "/" },
            { nome: "Áreas de atuação", href: "/areas-de-atuacao" },
            { nome: area.nome },
          ]}
        />
      </div>

      <div className="py-14 md:py-20">
        <Rotulo>{a.rotulo}</Rotulo>
        <h1 className="text-h1 md:text-display mb-6 max-w-[18ch]">{a.h1}</h1>
        <p className="text-medio text-texto-suave mb-10">{a.abertura}</p>
        <Botao href="/contato">Fale com o escritório</Botao>
      </div>

      <Secao rotulo="O problema" titulo={a.problema.titulo}>
        <BlocosNumerados blocos={a.problema.blocos} />
      </Secao>

      <Secao rotulo="Como atuamos" titulo={a.atuacao.titulo}>
        <BlocosNumerados blocos={a.atuacao.blocos} />
      </Secao>

      <QuemConduz socios={socios} />

      <Secao rotulo="Escopo" titulo="O que costuma compor o trabalho.">
        <Escopo entrega={a.incluso.entrega} />
      </Secao>

      <Secao rotulo="Atenção" titulo={a.erros.titulo} intro={a.erros.intro}>
        <BlocosNumerados blocos={a.erros.blocos} />
      </Secao>

      <Secao rotulo="Perguntas frequentes" titulo="As dúvidas que mais chegam.">
        <div className="max-w-[70ch]">
          {a.faq.map((f) => (
            <Acordeao key={f.p} pergunta={f.p}>{f.r}</Acordeao>
          ))}
        </div>
      </Secao>

      {relacionadas.length > 0 && (
        <Secao rotulo="Também pode interessar">
          <ul className="flex flex-wrap gap-4">
            {relacionadas.map((r) => (
              <li key={r.slug}>
                <Link
                  href={`/areas-de-atuacao/${r.slug}`}
                  className="inline-flex min-h-11 items-center border border-borda px-5 text-mini rounded-ssb hover:border-acento hover:text-acento"
                >
                  {r.nome}
                </Link>
              </li>
            ))}
          </ul>
        </Secao>
      )}

      <ChamadaFinal titulo="Conte o que está acontecendo." refArea={a.slug} area={area.nome} />
    </div>
  );
}
