"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

export type CardArtigo = {
  slug: string;
  titulo: string;
  resumo: string;
  categoria: string;
  categoriaNome: string;
  autorNome: string;
  autorFoto: string;
  data: string;
  dataLegivel: string;
  minutos: number;
};

export function ListagemBlog({
  artigos,
  categorias,
  categoriaAtiva,
}: {
  artigos: CardArtigo[];
  categorias: { slug: string; nome: string }[];
  categoriaAtiva?: string;
}) {
  const [busca, setBusca] = useState("");

  const filtrados = useMemo(() => {
    const t = busca.trim().toLowerCase();
    if (!t) return artigos;
    return artigos.filter((a) =>
      `${a.titulo} ${a.resumo} ${a.categoriaNome} ${a.autorNome}`.toLowerCase().includes(t),
    );
  }, [artigos, busca]);

  return (
    <>
      <div className="border-t border-borda py-10">
        <label htmlFor="busca" className="sr-only">
          Buscar no conteúdo
        </label>
        <input
          id="busca"
          type="search"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          placeholder="Buscar por assunto, área ou autor"
          className="min-h-12 w-full max-w-[26rem] border border-borda bg-fundo-elevado px-4 text-texto rounded-ssb focus:border-acento"
        />

        {categorias.length > 0 && (
          <nav aria-label="Categorias" className="mt-8">
            <ul className="flex flex-wrap gap-3">
              <li>
                <Link
                  href="/blog"
                  aria-current={!categoriaAtiva ? "page" : undefined}
                  className={`inline-flex min-h-10 items-center rounded-full border px-5 text-micro uppercase tracking-[0.14em] ${
                    !categoriaAtiva
                      ? "border-acento text-acento"
                      : "border-borda text-texto-suave hover:border-acento hover:text-acento"
                  }`}
                >
                  Tudo
                </Link>
              </li>
              {categorias.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/blog/categoria/${c.slug}`}
                    aria-current={categoriaAtiva === c.slug ? "page" : undefined}
                    className={`inline-flex min-h-10 items-center rounded-full border px-5 text-micro uppercase tracking-[0.14em] ${
                      categoriaAtiva === c.slug
                        ? "border-acento text-acento"
                        : "border-borda text-texto-suave hover:border-acento hover:text-acento"
                    }`}
                  >
                    {c.nome}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>

      <p aria-live="polite" className="sr-only">
        {filtrados.length} artigos encontrados
      </p>

      {filtrados.length === 0 ? (
        <p className="border-t border-borda py-16 text-texto-suave">
          Nenhum artigo encontrado para “{busca}”. Se o assunto que você procura
          ainda não foi escrito, fale com o escritório: a dúvida costuma virar
          pauta.
        </p>
      ) : (
        <ul className="pb-16">
          {filtrados.map((a) => (
            <li key={a.slug}>
              <Link
                href={`/blog/${a.slug}`}
                className="group flex flex-col gap-3 border-t border-borda py-10 transition-colors hover:border-acento"
              >
                <p className="text-micro uppercase tracking-[0.2em] text-acento">
                  {a.categoriaNome}
                </p>
                <h2 className="font-display text-h3 md:text-h2 max-w-[24ch]">{a.titulo}</h2>
                <p className="text-texto-suave">{a.resumo}</p>
                <p className="mt-2 flex flex-wrap items-center text-mini text-texto-suave">
                  <Image
                    src={a.autorFoto}
                    alt=""
                    width={64}
                    height={64}
                    className="foto mr-2 h-7 w-7 shrink-0 rounded-full object-cover"
                  />
                  {a.autorNome}
                  <span aria-hidden className="mx-2">·</span>
                  <time dateTime={a.data}>{a.dataLegivel}</time>
                  <span aria-hidden className="mx-2">·</span>
                  {a.minutos} min de leitura
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export function BotaoCompartilhar({ titulo }: { titulo: string }) {
  const [copiado, setCopiado] = useState(false);

  async function compartilhar() {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title: titulo, url });
        return;
      } catch {
        // o usuário cancelou; segue para a cópia
      }
    }
    await navigator.clipboard.writeText(url);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2500);
  }

  return (
    <button
      type="button"
      onClick={compartilhar}
      className="inline-flex min-h-11 items-center gap-2 rounded-full border border-borda px-5 text-mini text-texto-suave hover:border-acento hover:text-acento"
    >
      {copiado ? "Link copiado" : "Compartilhar"}
    </button>
  );
}
