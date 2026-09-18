import type { Metadata } from "next";
import { Botao, Breadcrumb, Rotulo } from "@/components/ui";
import { Secao } from "@/components/blocos";
import { ESCRITORIO, enderecoEmLinha } from "@/lib/escritorio";
import { JsonLd, breadcrumb, legalService } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Telefone, WhatsApp, e-mail e endereço do SSB Advogados em Belo Horizonte. Atendimento presencial em BH e remoto em todo o Brasil.",
  alternates: { canonical: "/contato" },
};

export default function Contato() {
  return (
    <div className="mx-auto max-w-[1200px] px-5 md:px-8">
      <JsonLd dados={[
        legalService(),
        breadcrumb([{ nome: "Início", href: "/" }, { nome: "Contato", href: "/contato" }]),
      ]} />
      <div className="pt-8">
        <Breadcrumb trilha={[{ nome: "Início", href: "/" }, { nome: "Contato" }]} />
      </div>

      <div className="py-14 md:py-20">
        <Rotulo>Contato</Rotulo>
        <h1 className="text-h1 md:text-display mb-6 max-w-[18ch]">Fale com o escritório.</h1>
        <p className="text-medio text-texto-suave max-w-[62ch]">
          WhatsApp, telefone, e-mail e atendimento presencial em Belo
          Horizonte. O escritório responde {ESCRITORIO.prazoRetorno}.
        </p>
      </div>

      <Secao rotulo="Canais">
        <div className="grid gap-10 md:grid-cols-2">
          <ul className="flex flex-col gap-5">
            <li>
              <p className="text-micro uppercase tracking-[0.2em] text-texto-suave mb-1">WhatsApp e telefone</p>
              <a href={ESCRITORIO.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center text-medio text-acento underline underline-offset-4">
                {ESCRITORIO.telefone}
              </a>
            </li>
            <li>
              <p className="text-micro uppercase tracking-[0.2em] text-texto-suave mb-1">E-mail</p>
              <a href={`mailto:${ESCRITORIO.email}`} className="inline-flex min-h-11 items-center text-acento underline underline-offset-4">{ESCRITORIO.email}</a>
            </li>
            <li>
              <p className="text-micro uppercase tracking-[0.2em] text-texto-suave mb-1">Endereço</p>
              <p className="text-texto-suave">{enderecoEmLinha()}</p>
            </li>
            <li>
              <p className="text-micro uppercase tracking-[0.2em] text-texto-suave mb-1">Horário</p>
              <p className="text-texto-suave">{ESCRITORIO.horario ?? "{{PENDENTE: horário de atendimento}}"}</p>
            </li>
            <li>
              <p className="text-micro uppercase tracking-[0.2em] text-texto-suave mb-1">Atendimento</p>
              <p className="text-texto-suave">{ESCRITORIO.atendimento}</p>
            </li>
          </ul>
          <div className="border border-borda bg-fundo-elevado p-7 rounded-ssb md:p-8">
            <h2 className="font-display text-h3 mb-5">WhatsApp</h2>
            <p className="text-texto-suave mb-8">
              Canal principal de atendimento. Informe a área de interesse para
              que o contato chegue ao advogado responsável.
            </p>
            <Botao href={`${ESCRITORIO.whatsapp}?text=${encodeURIComponent("Olá, vim pelo site do SSB Advogados. Gostaria de falar com o escritório. (ref: geral)")}`}>
              Falar no WhatsApp
            </Botao>
          </div>
        </div>
      </Secao>
    </div>
  );
}
