import type { Metadata } from "next";
import { Breadcrumb, Card, Rotulo } from "@/components/ui";
import { ChamadaFinal } from "@/components/blocos";
import { CONTEUDO } from "@/lib/areas-conteudo";
import { AREAS } from "@/lib/escritorio";
import { JsonLd, breadcrumb } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Áreas de atuação",
  description:
    "As nove áreas do SSB Advogados: societário, contratos, bancário, marcas, família e sucessões, imobiliário, criminal, previdenciário e concursos públicos.",
  alternates: { canonical: "/areas-de-atuacao" },
};

export default function IndiceAreas() {
  return (
    <div className="mx-auto max-w-[1200px] px-5 md:px-8">
      <JsonLd dados={breadcrumb([
        { nome: "Início", href: "/" },
        { nome: "Áreas de atuação", href: "/areas-de-atuacao" },
      ])} />
      <div className="pt-8">
        <Breadcrumb trilha={[{ nome: "Início", href: "/" }, { nome: "Áreas de atuação" }]} />
      </div>

      <div className="py-14 md:py-20">
        <Rotulo>Áreas de atuação</Rotulo>
        <h1 className="text-h1 md:text-display mb-6 max-w-[20ch]">
          Nove frentes, cada uma com escopo definido.
        </h1>
        <p className="text-medio text-texto-suave max-w-[60ch]">
          Todas recebem a mesma atenção. Onde há sócio responsável, o nome dele
          está no card. Onde não há, quem atende é o escritório.
        </p>
      </div>

      <h2 className="text-h2 mb-10 border-t border-borda pt-14">Como podemos te ajudar</h2>

      <div className="grid gap-5 pb-16 sm:grid-cols-2 lg:grid-cols-3">
        {AREAS.map((area) => {
          const c = CONTEUDO.find((x) => x.slug === area.slug)!;
          return (
            <Card key={area.slug} titulo={area.nome} href={`/areas-de-atuacao/${area.slug}`}>
              {c.h1}
            </Card>
          );
        })}
      </div>

      <ChamadaFinal titulo="Não sabe em qual área o seu caso entra?" refArea="indefinido" />
    </div>
  );
}
