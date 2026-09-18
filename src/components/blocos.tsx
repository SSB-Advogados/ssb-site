import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Botao, Rotulo } from "@/components/ui";
import { ESCRITORIO, type Socio } from "@/lib/escritorio";

export function Secao({
  rotulo, titulo, intro, children, className = "",
}: { rotulo?: string; titulo?: string; intro?: string; children?: ReactNode; className?: string }) {
  return (
    <section className={`border-t border-borda py-20 md:py-28 ${className}`}>
      {rotulo && <Rotulo>{rotulo}</Rotulo>}
      {titulo && <h2 className="text-h2 mb-8 max-w-[20ch]">{titulo}</h2>}
      {intro && <p className="text-texto-suave mb-10">{intro}</p>}
      {children}
    </section>
  );
}

export function BlocosNumerados({
  blocos,
}: { blocos: { titulo: string; texto: string }[] }) {
  return (
    <ol className="grid gap-12 md:grid-cols-2 md:gap-x-16">
      {blocos.map((b, i) => (
        <li key={b.titulo}>
          <p className="font-display text-micro text-acento mb-2 tabular-nums">
            {String(i + 1).padStart(2, "0")}
          </p>
          <h3 className="text-h3 mb-2">{b.titulo}</h3>
          <p className="text-texto-suave">{b.texto}</p>
        </li>
      ))}
    </ol>
  );
}

/** Bloco condicional. Nas áreas sem sócio titular ele simplesmente
 *  não é renderizado, e o espaçamento da página segue correto porque
 *  o espaço vertical pertence a <Secao>, não a este componente. */
export function QuemConduz({ socios }: { socios: Socio[] }) {
  if (socios.length === 0) return null;
  return (
    <Secao rotulo="Quem conduz">
      <div className="grid gap-8 md:grid-cols-2">
        {socios.map((s) => (
          <div key={s.slug} className="flex flex-col gap-5 border border-borda bg-fundo-elevado p-6 rounded-ssb sm:flex-row sm:gap-6 sm:p-7">
            <Image
              src={s.fotoQuadrada}
              alt={`Retrato de ${s.nome}`}
              width={640}
              height={640}
              sizes="96px"
              className="foto h-24 w-24 shrink-0 rounded-ssb object-cover sm:h-28 sm:w-28"
            />
            <div>
            <h3 className="text-h3">{s.nome}</h3>
            <p className="text-mini text-texto-suave mt-1">{s.oab}</p>
            <p className="mt-4 text-mini">
              <Link href="/sobre" className="inline-flex min-h-11 items-center text-acento underline underline-offset-4">
                Sobre o escritório
              </Link>
              <span aria-hidden className="mx-2 text-texto-suave">·</span>
              <a href={s.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center text-acento underline underline-offset-4">
                Instagram
              </a>
            </p>
            </div>
          </div>
        ))}
      </div>
    </Secao>
  );
}

export function Escopo({ entrega }: { entrega: string[] }) {
  return (
    <div className="grid gap-10 md:grid-cols-[1fr_1fr]">
      <ul className="flex flex-col gap-3">
        {entrega.map((i) => (
          <li key={i} className="flex gap-3 text-texto-suave">
            <span aria-hidden className="text-acento">—</span>
            <span>{i}</span>
          </li>
        ))}
      </ul>
      <p className="text-texto-suave">
        Cada caso tem exigências próprias, e o serviço é estruturado a partir
        delas. A relação acima descreve o que costuma compor o trabalho nesta
        área. O escopo definitivo é estabelecido no diagnóstico, conforme a
        necessidade do cliente, e formalizado por escrito antes da contratação.
      </p>
    </div>
  );
}

export function ChamadaFinal({ titulo, refArea = "geral", area }: { titulo: string; refArea?: string; area?: string }) {
  const texto = area
    ? `Olá, vim pelo site do SSB Advogados. Gostaria de falar sobre ${area.toLowerCase()}. (ref: ${refArea})`
    : `Olá, vim pelo site do SSB Advogados. Gostaria de falar com o escritório. (ref: ${refArea})`;
  return (
    <Secao rotulo="Fale com o escritório" titulo={titulo}>
      <div className="mb-8 flex flex-wrap gap-4">
        <Botao href={`${ESCRITORIO.whatsapp}?text=${encodeURIComponent(texto)}`}>
          Falar no WhatsApp
        </Botao>
        <Botao href="/contato" variante="secundario">Todos os canais</Botao>
      </div>
      <p className="text-texto-suave max-w-[56ch]">
        O escritório responde {ESCRITORIO.prazoRetorno}.
      </p>
    </Secao>
  );
}
