import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb, Rotulo } from "@/components/ui";
import { ChamadaFinal, Secao } from "@/components/blocos";
import { AREAS, ESCRITORIO, SOCIOS } from "@/lib/escritorio";
import { JsonLd, attorneys, breadcrumb, legalService } from "@/lib/schema";

export const metadata: Metadata = {
  title: "O escritório e os sócios",
  description:
    "Quem é o SSB Advogados e quem são Vitor Silvino, Thayane Barbosa e Andreza Santos: formação, inscrição na OAB e as áreas de cada um.",
  alternates: { canonical: "/sobre" },
};


export default function Sobre() {
  return (
    <div className="mx-auto max-w-[1200px] px-5 md:px-8">
      <JsonLd dados={[
        legalService(),
        ...attorneys(),
        breadcrumb([{ nome: "Início", href: "/" }, { nome: "Sobre", href: "/sobre" }]),
      ]} />
      <div className="pt-8">
        <Breadcrumb trilha={[{ nome: "Início", href: "/" }, { nome: "Sobre" }]} />
      </div>

      <div className="py-14 md:py-20">
        <Rotulo>O escritório</Rotulo>
        <h1 className="text-h1 md:text-display mb-6 max-w-[20ch]">
          Escuta afetiva e atenção estratégica.
        </h1>
        <div className="max-w-[62ch] text-medio text-texto-suave flex flex-col gap-5">
          <p>
            O SSB Advogados foi criado em {ESCRITORIO.fundacao} para acompanhar
            o conjunto do que a situação do cliente envolve, e não uma demanda
            isolada: análise de risco antes da decisão,
            diagnóstico do que já está em curso, negociação e estruturação fora
            do Judiciário, e defesa dentro dele quando não houver saída melhor.
          </p>
          <p>
            Isso exige alcance. Uma questão familiar toca patrimônio. Uma
            operação de crédito toca contrato e garantia. Uma reorganização
            societária toca a sucessão da família. O escritório reúne
            empresarial, patrimonial, familiar, bancário, criminal e
            previdenciário porque essas frentes costumam aparecer juntas.
          </p>
          <p>
            O método é o mesmo em todas elas: entender a situação antes de
            propor caminho, explicar o mecanismo jurídico sem jargão,
            e definir escopo por escrito antes de começar.
          </p>
          <p>
            A maior parte do trabalho acontece fora do processo. É onde se
            desenha o acordo de sócios, se negocia a saída, se estrutura o
            patrimônio e se corrige o contrato antes de ele ser testado. Ir a
            juízo é uma decisão tomada quando a via extrajudicial já foi
            esgotada ou quando a outra parte
            não deixa alternativa.
          </p>
        </div>
      </div>

      <Image
        src="/fotos/socios-sofa-2640i.webp"
        alt="Vitor Silvino, Thayane Barbosa e Andreza Santos no escritório"
        width={1800}
        height={1150}
        sizes="(max-width: 1200px) 100vw, 1136px"
        className="foto w-full rounded-ssb object-cover"
      />

      <Secao rotulo="A equipe" titulo="Multidisciplinar por desenho.">
        <div className="grid gap-10 md:grid-cols-3 md:items-stretch">
          {SOCIOS.map((s) => (
            <div key={s.slug} id={s.slug} className="flex h-full flex-col scroll-mt-24">
              <Image
                src={s.foto}
                alt={`Retrato de ${s.nome}`}
                width={1000}
                height={1250}
                sizes="(max-width: 768px) 100vw, 360px"
                className="foto aspect-[4/5] w-full rounded-ssb object-cover"
              />
              <h3 className="text-h3 mt-5">{s.nome}</h3>
              <p className="text-mini text-texto-suave mt-1">{s.oab}</p>

              <h4 className="text-micro uppercase tracking-[0.2em] text-texto-suave mt-6 mb-2">
                Áreas
              </h4>
              <ul className="flex flex-col gap-2 md:min-h-[9.25rem]">
                {s.areas.map((slug) => {
                  const a = AREAS.find((x) => x.slug === slug)!;
                  return (
                    <li key={slug}>
                      <Link href={`/areas-de-atuacao/${slug}`} className="inline-flex min-h-10 items-center text-mini text-texto hover:text-acento">
                        {a.nome}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <h4 className="text-micro uppercase tracking-[0.2em] text-texto-suave mt-6 mb-3">
                Frentes
              </h4>
              <ul className="flex flex-1 flex-col gap-2">
                {s.destaques.map((d) => (
                  <li key={d} className="flex gap-2 text-mini text-texto-suave">
                    <span aria-hidden className="text-acento">—</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
                <a
                  href={s.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center text-micro uppercase tracking-[0.18em] text-texto-suave hover:text-acento"
                >
                  Instagram
                </a>
                {s.linkedin && (
                  <a
                    href={s.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center text-micro uppercase tracking-[0.18em] text-texto-suave hover:text-acento"
                  >
                    LinkedIn
                  </a>
                )}
              </p>
            </div>
          ))}
        </div>
      </Secao>

      <Secao rotulo="Trajetória" titulo="De onde vem a experiência.">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-h3 mb-3">Vitor Silvino</h3>
            <p className="text-texto-suave">
              Atuou em grupos empresariais, instituições financeiras, hubs de
              investimentos, empresa de dados e bureau de crédito. É de onde vem
              a familiaridade com contrato, com operação de crédito e com
              execução vista dos dois lados do balcão: quem cobra e quem é
              cobrado.
            </p>
          </div>
          <div>
            <h3 className="text-h3 mb-3">Thayane Barbosa</h3>
            <p className="text-texto-suave">
              Conduz demandas familiares e patrimoniais dentro e fora do Brasil,
              o que envolve partilha com bens em mais de um país, sucessão de
              patrimônio internacional e conflito familiar entre pessoas que
              vivem em jurisdições diferentes.
            </p>
          </div>
          <div>
            <h3 className="text-h3 mb-3">Andreza Santos</h3>
            <p className="text-texto-suave">
              Atua na urgência criminal: flagrante, audiência de custódia,
              inquérito e tribunal do júri. É a frente em que a primeira decisão
              acontece em horas, e o que se faz nesse intervalo entra no
              processo.
            </p>
          </div>
        </div>
      </Secao>

      <ChamadaFinal titulo="Fale com o escritório." />
    </div>
  );
}
