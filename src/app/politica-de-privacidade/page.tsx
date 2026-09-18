import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb, Rotulo } from "@/components/ui";
import { Secao } from "@/components/blocos";
import { ESCRITORIO, enderecoEmLinha } from "@/lib/escritorio";
import { JsonLd, breadcrumb } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Política de privacidade",
  description:
    "Controlador, dados coletados, finalidade, base legal, compartilhamento, prazo de guarda e como exercer os direitos previstos na LGPD.",
  alternates: { canonical: "/politica-de-privacidade" },
};

export default function Privacidade() {
  return (
    <div className="mx-auto max-w-[1200px] px-5 md:px-8">
      <JsonLd dados={breadcrumb([{ nome: "Início", href: "/" }, { nome: "Política de privacidade", href: "/politica-de-privacidade" }])} />
      <div className="pt-8">
        <Breadcrumb trilha={[{ nome: "Início", href: "/" }, { nome: "Política de privacidade" }]} />
      </div>

      <div className="py-14 md:py-20">
        <Rotulo>Política de privacidade</Rotulo>
        <h1 className="text-h1 mb-6">Como o escritório trata os dados deste site.</h1>
        <p className="text-mini text-texto-suave">
          Última atualização: 09 de setembro de 2026.
        </p>
      </div>

      <Secao rotulo="1" titulo="Quem é o controlador">
        <p className="text-texto-suave max-w-[70ch]">
          {ESCRITORIO.entidade}, CNPJ {ESCRITORIO.cnpj}, com endereço em{" "}
          {enderecoEmLinha()}. Contato: {ESCRITORIO.email}.
        </p>
      </Secao>

      <Secao rotulo="2" titulo="Quais dados são coletados">
        <ul className="flex flex-col gap-3 text-texto-suave max-w-[70ch]">
          <li><strong className="text-texto">Do e-mail e do telefone:</strong> o que você escrever ou disser ao procurar o escritório por esses canais. Este site não tem formulário: nenhum dado é coletado pelas páginas.</li>
          <li><strong className="text-texto">Do WhatsApp:</strong> o que você escrever na conversa, e os dados que o próprio aplicativo transmite.</li>
          <li><strong className="text-texto">De navegação:</strong> dados de uso agregados, coletados por ferramenta de análise, e somente depois do seu consentimento no aviso de cookies.</li>
        </ul>
      </Secao>

      <Secao rotulo="3" titulo="Para que servem e com que base legal">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[36rem] text-mini">
            <thead>
              <tr className="border-b border-borda text-left">
                <th className="py-3 pr-4 font-display">Dado</th>
                <th className="py-3 pr-4 font-display">Finalidade</th>
                <th className="py-3 font-display">Base legal (Lei 13.709/2018)</th>
              </tr>
            </thead>
            <tbody className="text-texto-suave">
              <tr className="border-b border-borda"><td className="py-3 pr-4">Nome, e-mail, telefone e o assunto</td><td className="py-3 pr-4">Responder o contato e direcioná-lo à área certa</td><td className="py-3">Art. 7º, V, procedimentos preliminares a contrato, a pedido do titular</td></tr>
              <tr className="border-b border-borda"><td className="py-3 pr-4">Dados de navegação</td><td className="py-3 pr-4">Entender o uso do site</td><td className="py-3">Art. 7º, I, consentimento</td></tr>
              <tr><td className="py-3 pr-4">Registros de acesso</td><td className="py-3 pr-4">Cumprir o Marco Civil da Internet</td><td className="py-3">Art. 7º, II, obrigação legal</td></tr>
            </tbody>
          </table>
        </div>
      </Secao>

      <Secao rotulo="4" titulo="Com quem os dados são compartilhados">
        <ul className="flex flex-col gap-3 text-texto-suave max-w-[70ch]">
          <li><strong className="text-texto">Hospedagem do site:</strong> Netlify, que processa os dados necessários para servir as páginas.</li>
          <li><strong className="text-texto">E-mail:</strong> Google Workspace, onde as mensagens enviadas ao escritório chegam.</li>
          <li><strong className="text-texto">Análise de uso:</strong> Google Analytics, somente após consentimento.</li>
          <li><strong className="text-texto">WhatsApp:</strong> Meta, quando você escolhe esse canal.</li>
        </ul>
        <p className="mt-5 text-texto-suave max-w-[70ch]">
          Os dados não são vendidos, cedidos nem usados para publicidade de
          terceiro.
        </p>
      </Secao>

      <Secao rotulo="5" titulo="Por quanto tempo são guardados">
        <ul className="flex flex-col gap-3 text-texto-suave max-w-[70ch]">
          <li>Contato que não vira cliente: até 12 meses do último contato.</li>
          <li>Contato que vira cliente: pelo prazo do contrato e pelos prazos legais de guarda que se aplicam à advocacia.</li>
          <li>Registros de acesso: 6 meses, conforme o art. 15 do Marco Civil da Internet.</li>
        </ul>
      </Secao>

      <Secao rotulo="6" titulo="Seus direitos">
        <p className="mb-5 text-texto-suave max-w-[70ch]">
          O art. 18 da Lei 13.709/2018 garante a você confirmar a existência de
          tratamento, acessar os dados, corrigir dado incompleto ou desatualizado,
          pedir anonimização, bloqueio ou eliminação de dado desnecessário ou
          tratado em desconformidade, pedir portabilidade, obter informação sobre
          compartilhamento, ser informado sobre a consequência de negar
          consentimento, e revogar o consentimento.
        </p>
        <p className="text-texto-suave max-w-[70ch]">
          Para exercer qualquer deles, escreva para{" "}
          <a href={`mailto:${ESCRITORIO.email}`} className="text-acento underline underline-offset-4">{ESCRITORIO.email}</a>.
          O pedido é respondido dentro dos prazos da lei.
        </p>
      </Secao>

      <Secao rotulo="7" titulo="Encarregado pelo tratamento de dados">
        <p className="text-texto-suave max-w-[70ch]">
Vitor Silvino — contato: {ESCRITORIO.email}
        </p>
      </Secao>

      <Secao rotulo="8" titulo="Cookies">
        <p className="text-texto-suave max-w-[70ch]">
          Cookies estritamente necessários ao funcionamento do site são usados
          sem consentimento, porque sem eles o site não funciona. Qualquer outro,
          inclusive os de análise de uso, só é acionado depois do seu aceite no
          aviso que aparece na primeira visita. Você pode recusar, e o site
          continua funcionando. A escolha pode ser mudada a qualquer momento
          pelo mesmo aviso.
        </p>
      </Secao>

      <Secao rotulo="9" titulo="Sigilo profissional">
        <p className="text-texto-suave max-w-[70ch]">
          Nenhum canal de contato deste site é canal de consulta jurídica.
          Isso é deliberado: informação de caso é dado sensível e está
          protegida por sigilo profissional, que se estabelece na relação com o
          advogado, não em uma mensagem de primeiro contato. Veja também o{" "}
          <Link href="/aviso-legal" className="text-acento underline underline-offset-4">aviso legal</Link>.
        </p>
      </Secao>
    </div>
  );
}
