import Image from "next/image";
import type { ReactNode } from "react";
import { Breadcrumb } from "@/components/ui";

/**
 * Topo escuro das páginas de perfil e das páginas bancárias.
 *
 * Fundo escuro fixo (.faixa-escura) nos dois temas. Com foto, o retrato
 * sangra até a borda direita e escurece para a esquerda; no celular a foto vem
 * primeiro e escurece para baixo. Sem foto, é só o texto sobre o escuro.
 */
export function TopoEscuro({
  foto, alt, trilha, children,
}: {
  foto?: string;
  alt?: string;
  trilha: { nome: string; href?: string }[];
  children: ReactNode;
}) {
  return (
    <section className="faixa-escura relative isolate overflow-hidden">
      {foto && (
        <div className="relative aspect-[4/5] w-full md:absolute md:inset-y-0 md:right-0 md:aspect-auto md:w-[56%]">
          <Image
            src={foto}
            alt={alt ?? ""}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 56vw"
            className="foto object-cover object-[60%_20%]"
          />
          <div aria-hidden className="absolute inset-x-0 -bottom-px top-0 bg-gradient-to-t from-fundo-profundo via-transparent to-transparent md:hidden" />
          <div aria-hidden className="absolute -left-px inset-y-0 hidden w-1/2 bg-gradient-to-r from-fundo-profundo via-fundo-profundo/70 to-transparent md:block" />
        </div>
      )}

      <div className="relative mx-auto max-w-[1200px] px-5 md:px-8">
        <div
          className={
            foto
              ? "-mt-24 pb-16 md:mt-0 md:flex md:min-h-[46rem] md:w-[44%] md:flex-col md:justify-center md:py-24"
              : "py-16 md:py-28"
          }
        >
          <div className={`mb-10 ${foto ? "hidden md:block" : ""}`}>
            <Breadcrumb trilha={trilha} />
          </div>
          {children}
        </div>
      </div>
    </section>
  );
}
