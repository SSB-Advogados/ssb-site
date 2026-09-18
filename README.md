# Site institucional SSB Advogados

Site do Santos Silvino & Barbosa Advogados. `ssbadvogados.com.br`.

Next.js 16 (App Router), TypeScript, Tailwind 4. Conteúdo do blog em MDX no próprio repositório, a partir da Fase 5.

## Como rodar na sua máquina

Você precisa do Node.js 18.18 ou mais novo. Confira com:

```bash
node -v
```

Se não tiver, baixe em nodejs.org e instale a versão LTS.

Depois, no Terminal:

```bash
cd ~/Desktop/"Site - SSB Advogados"/ssb-site
npm install
npm run dev
```

Abra `http://localhost:3000`.

**O que você deve ver:** a página inicial padrão do Next.js, com o logotipo do Next no centro. É isso mesmo. Na Fase 0 o projeto está vazio de propósito: nenhum texto do escritório foi escrito ainda, porque a arquitetura do site só é decidida na Fase 1.

Para parar o servidor, `Ctrl + C` na janela do Terminal.

**Se der errado:**

| O que aconteceu | O que fazer |
|---|---|
| `command not found: npm` | o Node não está instalado, ou o Terminal foi aberto antes da instalação. Feche e abra o Terminal de novo |
| `EADDRINUSE`, porta 3000 ocupada | rode `npm run dev -- -p 3001` e abra `http://localhost:3001` |
| erro durante o `npm install` | apague a pasta `node_modules` e o arquivo `package-lock.json` e rode `npm install` de novo |
| a página abre em branco | veja a janela do Terminal, a mensagem de erro aparece lá. Me mande a mensagem |

## Outros comandos

```bash
npm run build    # gera a versão de produção, é o teste que precisa passar antes de todo merge
npm run start    # roda a versão de produção localmente
npm run lint     # confere o padrão de código
```

## Documentação do projeto

| Arquivo | O que tem |
|---|---|
| `docs/decisoes-tecnicas.md` | por que esta stack, hospedagem, ambientes, fontes |
| `docs/dns.md` | estado do domínio, o que não pode ser tocado, e três problemas de e-mail encontrados |
| `docs/links-externos.md` | links de redes conferidos, para o rodapé e o schema |
| `docs/pendencias.md` | tudo que falta, e qual fase cada item bloqueia |

## Como o projeto anda

Uma fase por branch, uma URL de preview por branch, aprovação sua antes do merge. `main` está sempre publicável.

| Fase | O que é | Situação |
|---|---|---|
| 0 | Levantamento e decisões técnicas | concluída, aguardando aprovação |
| 1 | Mapa do site e palavras-chave | |
| 2 | Design system e shell | |
| 3 | Home | |
| 4 | Nove páginas de área | |
| 5 | Blog e fluxo editorial | |
| 6 | SEO técnico | |
| 7 | GEO, citação por IA | |
| 8 | LGPD e conformidade | |
| 9 | Lançamento | |

## Sobre este repositório

Público, porque é o que a hospedagem gratuita permite para repositório de
organização. Não há segredo aqui: o código, as folhas de estilo e os artigos
já são servidos ao navegador de qualquer visitante, e os dados do escritório
que aparecem no `src/lib/escritorio.ts` são os mesmos do rodapé do site.

A documentação interna do projeto fica em `SSB-Advogados/ssb-docs`, privado,
junto com o histórico completo de desenvolvimento até 18/09/2026.
