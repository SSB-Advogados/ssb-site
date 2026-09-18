"use client";

import { useCallback, useSyncExternalStore } from "react";

type Tema = "claro" | "escuro";

/**
 * Alterna entre claro e escuro.
 *
 * A escolha fica no localStorage. Na primeira visita, vale a preferência
 * do sistema operacional. Quem nunca escolheu e usa o sistema em claro
 * recebe o site claro, o que é o comportamento esperado.
 */
const ouvintes = new Set<() => void>();

function inscrever(aoMudar: () => void) {
  ouvintes.add(aoMudar);
  return () => { ouvintes.delete(aoMudar); };
}

/**
 * A fonte do tema é o próprio `data-tema` do `<html>`, escrito pelo script
 * do `<head>` antes da primeira pintura. Ler dali, e não de um estado
 * paralelo, evita divergência entre o que a página mostra e o que o botão
 * acha que está valendo.
 */
function lerDoDocumento(): Tema {
  return document.documentElement.dataset.tema === "claro" ? "claro" : "escuro";
}

/** No servidor não há documento; o HTML é sempre gerado no escuro. */
function lerNoServidor(): Tema {
  return "escuro";
}

export function BotaoTema() {
  const tema = useSyncExternalStore(inscrever, lerDoDocumento, lerNoServidor);

  const alternar = useCallback(() => {
    const novo: Tema = lerDoDocumento() === "claro" ? "escuro" : "claro";
    if (novo === "claro") document.documentElement.dataset.tema = "claro";
    else delete document.documentElement.dataset.tema;
    try {
      localStorage.setItem("ssb-tema", novo);
    } catch {
      // navegação privada pode bloquear; a troca vale para esta sessão
    }
    ouvintes.forEach((aoMudar) => aoMudar());
  }, []);

  return (
    <button
      type="button"
      onClick={alternar}
      aria-pressed={tema === "claro"}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-borda text-texto-suave transition-colors hover:border-acento hover:text-acento"
    >
      <span className="sr-only">
        {tema === "claro" ? "Mudar para o modo escuro" : "Mudar para o modo claro"}
      </span>
      {/* Sol quando está escuro (o que o clique traz), lua quando está claro */}
      <svg aria-hidden viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="1.4">
        {tema === "claro" ? (
          <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z" />
        ) : (
          <>
            <circle cx="12" cy="12" r="4.2" />
            <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.2 5.2l1.4 1.4M17.4 17.4l1.4 1.4M18.8 5.2l-1.4 1.4M6.6 17.4l-1.4 1.4" strokeLinecap="round" />
          </>
        )}
      </svg>
    </button>
  );
}

/**
 * Aplica o tema antes da primeira pintura. Sem isso, quem escolheu claro
 * vê o site escuro por um instante a cada carregamento.
 */
export const scriptDoTema = `(function(){try{var t=localStorage.getItem('ssb-tema');if(!t){t=window.matchMedia('(prefers-color-scheme: light)').matches?'claro':'escuro';}if(t==='claro'){document.documentElement.dataset.tema='claro';}}catch(e){}})();`;
