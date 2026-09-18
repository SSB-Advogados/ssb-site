import type { Metadata } from "next";
import { Botao } from "@/components/ui";

export const metadata: Metadata = { title: "Página não encontrada" };

export default function NaoEncontrada() {
  return (
    <div className="mx-auto max-w-[1200px] px-5 py-secao md:px-8">
      <p className="text-micro uppercase tracking-[0.22em] text-acento mb-4">
        Erro 404
      </p>
      <h1 className="text-h1 mb-6">Esta página não existe.</h1>
      <p className="text-medio text-texto-suave mb-10">
        O endereço pode ter mudado, ou o link que você seguiu pode estar
        incompleto. As áreas de atuação e o contato do escritório continuam
        nos caminhos abaixo.
      </p>
      <div className="flex flex-wrap gap-4">
        <Botao href="/areas-de-atuacao">Áreas de atuação</Botao>
        <Botao href="/contato" variante="secundario">Entre em contato</Botao>
      </div>
    </div>
  );
}
