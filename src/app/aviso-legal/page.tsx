import type { Metadata } from "next";
import { Breadcrumb, Rotulo } from "@/components/ui";
import { Secao } from "@/components/blocos";
import { AREAS, ESCRITORIO, SOCIOS, enderecoEmLinha } from "@/lib/escritorio";
import { JsonLd, breadcrumb } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Aviso legal",
  description:
    "Identificação profissional, áreas declaradas de atuação e conformidade com o Provimento 205/2021 do Conselho Federal da OAB.",
  alternates: { canonical: "/aviso-legal" },
};

export default function AvisoLegal() {
  return (
    <div className="mx-auto max-w-[1200px] px-5 md:px-8">
      <JsonLd dados={breadcrumb([{ nome: "Início", href: "/" }, { nome: "Aviso legal", href: "/aviso-legal" }])} />
      <div className="pt-8">
        <Breadcrumb trilha={[{ nome: "Início", href: "/" }, { nome: "Aviso legal" }]} />
      </div>

      <div className="py-14 md:py-20">
        <Rotulo>Aviso legal</Rotulo>
        <h1 className="text-h1 mb-6">Caráter informativo e conformidade.</h1>
        <p className="text-medio text-texto-suave max-w-[62ch]">
          Este site tem caráter exclusivamente informativo. As informações
          apresentadas não constituem aconselhamento jurídico individualizado
          e não substituem a consulta a profissional habilitado. Em
          conformidade com o Provimento 205/2021 do Conselho Federal da OAB.
        </p>
      </div>

      <Secao rotulo="Identificação profissional">
        <ul className="flex flex-col gap-3 text-texto-suave">
          <li><strong className="text-texto">Razão social:</strong> {ESCRITORIO.entidade}</li>
          <li><strong className="text-texto">Nome de marca:</strong> {ESCRITORIO.nome}</li>
          <li><strong className="text-texto">CNPJ:</strong> {ESCRITORIO.cnpj}</li>
          <li><strong className="text-texto">Endereço:</strong> {enderecoEmLinha()}</li>
          <li><strong className="text-texto">Contato:</strong> {ESCRITORIO.email} · {ESCRITORIO.telefone}</li>
        </ul>
        <p className="mt-6 text-texto-suave">Advogados responsáveis:</p>
        <ul className="mt-3 flex flex-col gap-2 text-texto-suave">
          {SOCIOS.map((s) => <li key={s.slug}>{s.nome} — {s.oab}</li>)}
        </ul>
      </Secao>

      <Secao rotulo="Áreas declaradas de atuação">
        <p className="mb-5 text-texto-suave max-w-[62ch]">
          O escritório declara atuação nas áreas abaixo. Não há anúncio de
          especialidade sem título correspondente, nos termos do art. 3º, III,
          do Provimento 205/2021.
        </p>
        <ul className="grid gap-2 sm:grid-cols-2 text-texto-suave">
          {AREAS.map((a) => <li key={a.slug}>{a.nome}</li>)}
        </ul>
      </Secao>

      <Secao rotulo="Publicidade" titulo="O que este site não faz.">
        <ul className="flex flex-col gap-3 text-texto-suave max-w-[70ch]">
          <li>Não promete nem garante resultado, nos termos do art. 6º do Provimento 205/2021.</li>
          <li>Não faz referência a caso concreto nem a resultado obtido em processo que o escritório patrocina, nos termos dos arts. 4º, § 2º, e 6º.</li>
          <li>Não faz referência a valor de honorários, forma de pagamento, desconto ou gratuidade, nos termos do art. 3º, I.</li>
          <li>Não utiliza símbolo ou logotipo da Ordem dos Advogados do Brasil, nos termos do art. 5º, § 2º.</li>
          <li>Não veicula informação sobre dimensão, qualidade ou estrutura física do escritório, nos termos do art. 6º.</li>
        </ul>
      </Secao>

      <Secao rotulo="Direitos autorais e responsabilidade">
        <div className="flex flex-col gap-5 text-texto-suave max-w-[70ch]">
          <p>
            Os textos publicados neste site são de autoria do escritório e dos
            advogados identificados em cada conteúdo. A reprodução é permitida
            desde que citada a fonte e o autor.
          </p>
          <p>
            O conteúdo tem finalidade informativa e reflete o entendimento
            vigente na data de publicação, que consta em cada página. Legislação
            e jurisprudência mudam. Nenhum texto aqui substitui a análise do
            caso concreto por advogado constituído.
          </p>
          <p>
            O envio de mensagem por este site não cria relação de cliente e
            advogado. Essa relação começa com a contratação formal.
          </p>
        </div>
      </Secao>
    </div>
  );
}
