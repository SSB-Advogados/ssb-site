import Image from "next/image";
import Link from "next/link";
import { Secao } from "@/components/blocos";
import { TEMAS, hrefTema } from "@/lib/bancario";
import { nomeExibicao, socioPorSlug } from "@/lib/escritorio";

/** Cards dos temas bancários. Tema sem página ainda aparece sem link. */
export function CardsTemas({ excluir }: { excluir?: string }) {
  const temas = TEMAS.filter((t) => t.slug !== excluir);
  return (
    <ul className="grid gap-px overflow-hidden rounded-ssb border border-borda bg-borda sm:grid-cols-2 lg:grid-cols-3">
      {temas.map((t) => {
        const corpo = (
          <>
            <p className="text-micro uppercase tracking-[0.14em] text-acento mb-4">{t.nome}</p>
            <h3 className="font-display text-h3 leading-snug mb-4">{t.dor}</h3>
            <p className="text-mini text-texto-suave">{t.resumo}</p>
            {t.temPagina && (
              <span className="mt-5 inline-block text-mini text-acento">Entenda o caso →</span>
            )}
          </>
        );
        return (
          <li key={t.slug} className="bg-fundo">
            {t.temPagina ? (
              <Link href={hrefTema(t.slug)} className="block h-full p-7 transition-colors hover:bg-fundo-elevado">
                {corpo}
              </Link>
            ) : (
              <div className="h-full p-7">{corpo}</div>
            )}
          </li>
        );
      })}
      {/* Fecha a grade (7 temas em 3 colunas) e atende quem não se viu nos cards */}
      <li className="bg-fundo-elevado">
        <Link href="/contato" className="flex h-full flex-col justify-center p-7 transition-colors hover:bg-fundo">
          <p className="text-micro uppercase tracking-[0.14em] text-acento mb-4">Outro problema com o banco</p>
          <h3 className="font-display text-h3 leading-snug mb-4">“Não achei o meu caso aqui.”</h3>
          <p className="text-mini text-texto-suave">Conte o que está acontecendo. A análise começa pelos seus documentos.</p>
          <span className="mt-5 inline-block text-mini text-acento">Falar com o escritório →</span>
        </Link>
      </li>
    </ul>
  );
}

const PASSOS = [
  { titulo: "Conversa inicial", texto: "Você conta o que está acontecendo, por WhatsApp, vídeo ou no escritório. Sem formulário longo." },
  { titulo: "Leitura dos documentos", texto: "Extrato, contrato e histórico do benefício são lidos por inteiro, para saber o que foi contratado e o que foi cobrado." },
  { titulo: "Caminho definido por escrito", texto: "Reclamação formal, negociação ou ação judicial. Você recebe a explicação do caminho e do escopo antes de qualquer passo." },
  { titulo: "Acompanhamento", texto: "Cada movimentação relevante é explicada em linguagem simples, sem precisar decifrar o processo." },
];

export function ComoFunciona() {
  return (
    <section className="faixa-escura">
      <div className="mx-auto max-w-[1200px] px-5 py-20 md:px-8 md:py-28">
        <p className="rotulo mb-6">Como funciona</p>
        <h2 className="text-h2 mb-14 max-w-[20ch]">Do primeiro contato ao caso resolvido.</h2>
        <ol className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {PASSOS.map((p, i) => (
            <li key={p.titulo}>
              <p className="font-display text-h2 leading-none text-acento/60 mb-4 tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="text-base text-texto mb-2">{p.titulo}</h3>
              <p className="text-mini text-texto-suave">{p.texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/** Quem conduz os casos bancários. O texto vem da trajetória do sócio. */
export function QuemConduzBancario() {
  const s = socioPorSlug("vitor-silvino")!;
  return (
    <Secao rotulo="Quem conduz o seu caso">
      <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] md:gap-16">
        <div>
          {s.fotosPerfil.retrato && (
            <Image
              src={s.fotosPerfil.retrato}
              alt={`Retrato de ${s.nomeCompleto}`}
              width={1000}
              height={1250}
              sizes="(max-width: 768px) 100vw, 360px"
              className="foto mb-6 aspect-[4/5] w-full max-w-[22rem] rounded-ssb object-cover"
            />
          )}
          <h2 className="text-h2 mb-2">{nomeExibicao(s)}</h2>
          <p className="text-mini text-texto-suave mb-1">{s.nomeCompleto}</p>
          <p className="text-mini text-texto-suave">{s.oab}</p>
        </div>
        <div>
          <p className="text-texto-suave mb-6">{s.trajetoria}</p>
          <Link href={`/sobre/${s.slug}`} className="inline-flex min-h-11 items-center text-mini text-acento underline underline-offset-4">
            Perfil completo de {s.nome}
          </Link>
        </div>
      </div>
    </Secao>
  );
}
