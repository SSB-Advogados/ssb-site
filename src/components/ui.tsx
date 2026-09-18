import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

/* ---------------------------------------------------------------
   Componentes base do design system.
   Nenhum deles fixa cor: tudo vem dos tokens, para que a mesma
   peça funcione nas duas direções visuais.
   --------------------------------------------------------------- */

export function Rotulo({ children }: { children: ReactNode }) {
  return <p className="rotulo mb-6">{children}</p>;
}

type BotaoProps = {
  variante?: "primario" | "secundario";
  href?: string;
  children: ReactNode;
} & Omit<ComponentProps<"button">, "children">;

export function Botao({ variante = "primario", href, children, ...rest }: BotaoProps) {
  const base =
    "inline-flex items-center justify-center gap-2 min-h-12 px-7 rounded-full " +
    "text-mini font-normal tracking-[0.04em] transition-colors duration-200";
  const estilo =
    variante === "primario"
      ? `${base} bg-acento text-fundo hover:bg-texto`
      : `${base} border border-borda-forte text-texto hover:border-acento hover:text-acento`;

  if (href) {
    const externo = href.startsWith("http");
    return externo ? (
      <a className={estilo} href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ) : (
      <Link className={estilo} href={href}>{children}</Link>
    );
  }
  return <button className={estilo} {...rest}>{children}</button>;
}

export function Card({
  titulo, href, rotulo, children,
}: { titulo: string; href: string; rotulo?: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col border-t border-borda pt-6 pb-2
                 transition-colors duration-200 hover:border-acento"
    >
      {rotulo && (
        <p className="text-micro uppercase tracking-[0.2em] text-texto-suave mb-4">
          {rotulo}
        </p>
      )}
      <h3 className="text-h3 mb-3">{titulo}</h3>
      <div className="text-mini text-texto-suave flex-1">{children}</div>
      <p className="mt-6 text-micro uppercase tracking-[0.18em] text-acento">
        Conheça a área <span aria-hidden className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
      </p>
    </Link>
  );
}

/** Acordeão em <details>. Abre sem JavaScript e é acessível por padrão. */
export function Acordeao({ pergunta, children }: { pergunta: string; children: ReactNode }) {
  return (
    <details className="group border-b border-borda">
      <summary className="flex cursor-pointer items-start justify-between gap-4 py-5 list-none [&::-webkit-details-marker]:hidden">
        <span className="font-display text-h3 leading-snug">{pergunta}</span>
        <span aria-hidden className="mt-2 shrink-0 text-h3 leading-none text-acento transition-transform duration-200 group-open:rotate-45">
          +
        </span>
      </summary>
      <div className="pb-6 text-texto-suave">{children}</div>
    </details>
  );
}

export function Campo({
  id, rotulo, tipo = "text", ajuda, ...rest
}: { id: string; rotulo: string; tipo?: string; ajuda?: string } & ComponentProps<"input">) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-mini text-texto-suave">{rotulo}</label>
      <input
        id={id}
        type={tipo}
        aria-describedby={ajuda ? `${id}-ajuda` : undefined}
        className="min-h-12 border border-borda bg-fundo-elevado px-4 text-texto rounded-ssb focus:border-acento"
        {...rest}
      />
      {ajuda && (
        <p id={`${id}-ajuda`} className="text-mini text-texto-suave">{ajuda}</p>
      )}
    </div>
  );
}

export function Breadcrumb({ trilha }: { trilha: { nome: string; href?: string }[] }) {
  return (
    <nav aria-label="Você está em">
      <ol className="flex flex-wrap items-center gap-2 text-mini text-texto-suave">
        {trilha.map((item, i) => (
          <li key={item.nome} className="flex items-center gap-2">
            {item.href ? (
              <Link href={item.href} className="inline-flex min-h-11 items-center hover:text-acento underline underline-offset-4">
                {item.nome}
              </Link>
            ) : (
              <span aria-current="page" className="inline-flex min-h-11 items-center">{item.nome}</span>
            )}
            {i < trilha.length - 1 && <span aria-hidden>/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
