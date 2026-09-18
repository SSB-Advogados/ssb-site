import Image from "next/image";
import Link from "next/link";
import { AREAS, ESCRITORIO, SOCIOS, enderecoEmLinha } from "@/lib/escritorio";

const ESCRITORIO_LINKS = [
  { nome: "Sobre", href: "/sobre" },
  { nome: "Conteúdo", href: "/blog" },
  { nome: "Política de privacidade", href: "/politica-de-privacidade" },
  { nome: "Aviso legal", href: "/aviso-legal" },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-borda bg-fundo">
      <div className="mx-auto max-w-[1200px] px-5 py-14 md:px-8">
        <Image
          src="/brand/lockup-empilhado-escuro.png"
          alt=""
          width={1200}
          height={438}
          aria-hidden
          className="mb-14 h-16 w-auto opacity-90"
        />

        <div className="grid gap-10 md:grid-cols-3">
          <section>
            <h2 className="text-micro uppercase tracking-[0.22em] text-texto-suave mb-5">
              Áreas
            </h2>
            <ul className="flex flex-col gap-3">
              {AREAS.map((a) => (
                <li key={a.slug}>
                  <Link href={`/areas-de-atuacao/${a.slug}`} className="inline-flex min-h-11 items-center text-mini hover:text-acento">
                    {a.nome}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-micro uppercase tracking-[0.22em] text-texto-suave mb-5">
              Escritório
            </h2>
            <ul className="flex flex-col gap-3">
              {ESCRITORIO_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="inline-flex min-h-11 items-center text-mini hover:text-acento">{l.nome}</Link>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-micro uppercase tracking-[0.22em] text-texto-suave mb-5">
              Contato
            </h2>
            <ul className="flex flex-col gap-3 text-mini">
              <li><a href={`mailto:${ESCRITORIO.email}`} className="inline-flex min-h-11 items-center hover:text-acento">{ESCRITORIO.email}</a></li>
              <li><a href={ESCRITORIO.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center hover:text-acento">{ESCRITORIO.telefone}</a></li>
              <li className="flex gap-4">
                <a href={ESCRITORIO.redes.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center hover:text-acento">Instagram</a>
                <a href={ESCRITORIO.redes.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center hover:text-acento">LinkedIn</a>
              </li>
              <li className="text-texto-suave">{enderecoEmLinha()}</li>
              <li className="text-texto-suave">
                {ESCRITORIO.horario ?? "{{PENDENTE: horário de atendimento}}"}
              </li>
              <li className="text-texto-suave">{ESCRITORIO.atendimento}</li>
            </ul>
          </section>
        </div>

        <div className="mt-12 border-t border-borda pt-8 text-mini text-texto-suave">
          <p className="max-w-none">
            Este site tem caráter exclusivamente informativo. As informações
            apresentadas não constituem aconselhamento jurídico individualizado
            e não substituem a consulta a profissional habilitado. Em
            conformidade com o Provimento 205/2021 do Conselho Federal da OAB.
          </p>
          <p className="mt-5 text-micro">CNPJ {ESCRITORIO.cnpj}</p>
          <p className="mt-2 text-micro">
            {SOCIOS.map((s, i) => (
              <span key={s.slug}>
                {i > 0 && <span aria-hidden> · </span>}
                {s.nome}, {s.oab}
              </span>
            ))}
          </p>
          <p className="mt-2">
            © {new Date().getFullYear()} {ESCRITORIO.marca}
          </p>
        </div>
      </div>
    </footer>
  );
}
