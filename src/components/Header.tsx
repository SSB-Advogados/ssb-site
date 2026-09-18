"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ESCRITORIO } from "@/lib/escritorio";
import { BotaoTema } from "@/components/Tema";

const MENU = [
  { nome: "Áreas de atuação", href: "/areas-de-atuacao" },
  { nome: "Sobre", href: "/sobre" },
  { nome: "Conteúdo", href: "/blog" },
];

export function Header() {
  const [aberto, setAberto] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-borda bg-fundo/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-6 px-5 py-4 md:px-8">
        <Link href="/" className="flex items-center">
          {/* Dois lockups: o de texto branco no escuro, o de texto escuro
              no claro. Trocar por CSS evita piscar na alternância. */}
          <Image
            src="/brand/lockup-horizontal-acento.png"
            alt={`${ESCRITORIO.nome}, ir para a página inicial`}
            width={1200}
            height={245}
            priority
            className="h-9 w-auto md:h-11 logo-escuro"
          />
          <Image
            src="/brand/lockup-horizontal-claro.png"
            alt=""
            aria-hidden
            width={1200}
            height={245}
            priority
            className="h-9 w-auto md:h-11 logo-claro"
          />
        </Link>

        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {MENU.map((i) => (
              <li key={i.href}>
                <Link href={i.href} className="text-mini hover:text-acento">
                  {i.nome}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contato"
                className="inline-flex min-h-11 items-center border border-borda px-5 text-micro uppercase tracking-[0.18em] hover:border-acento hover:text-acento rounded-ssb"
              >
                Entre em contato
              </Link>
            </li>
            <li>
              <BotaoTema />
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
        <BotaoTema />
        <button
          type="button"
          onClick={() => setAberto((v) => !v)}
          aria-expanded={aberto}
          aria-controls="menu-mobile"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-borda"
        >
          <span className="sr-only">{aberto ? "Fechar menu" : "Abrir menu"}</span>
          <span aria-hidden className="font-display text-h3 leading-none">
            {aberto ? "×" : "≡"}
          </span>
        </button>
        </div>
      </div>

      <nav
        id="menu-mobile"
        aria-label="Principal, versão para celular"
        hidden={!aberto}
        className="md:hidden border-t border-borda"
      >
        <ul className="mx-auto flex max-w-[1200px] flex-col px-5 py-2">
          {[...MENU, { nome: "Entre em contato", href: "/contato" }].map((i) => (
            <li key={i.href}>
              <Link
                href={i.href}
                onClick={() => setAberto(false)}
                className="flex min-h-12 items-center border-b border-borda text-mini last:border-b-0"
              >
                {i.nome}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
