import { AREAS, ESCRITORIO, SOCIOS, enderecoEmLinha, type Socio } from "@/lib/escritorio";

const url = (p = "") => `https://${ESCRITORIO.dominio}${p}`;

/** Página de perfil de cada sócio. É a identidade única da pessoa no site:
 *  escritório, artigos do blog e a própria página apontam para este @id. */
export const perfilUrl = (slug: string) => url(`/sobre/${slug}/`);
export const pessoaId = (slug: string) => `${perfilUrl(slug)}#pessoa`;

export const legalService = () => ({
  "@context": "https://schema.org",
  "@type": ["LegalService", "Organization"],
  "@id": url("/#escritorio"),
  name: ESCRITORIO.nome,
  alternateName: ESCRITORIO.marca,
  legalName: ESCRITORIO.entidade,
  taxID: ESCRITORIO.cnpj,
  url: url(),
  email: ESCRITORIO.email,
  telephone: "+5531986299703",
  foundingDate: "2026-04",
  address: {
    "@type": "PostalAddress",
    streetAddress: `${ESCRITORIO.endereco.logradouro}, ${ESCRITORIO.endereco.bairro}`,
    addressLocality: ESCRITORIO.endereco.cidade,
    addressRegion: ESCRITORIO.endereco.uf,
    postalCode: ESCRITORIO.endereco.cep,
    addressCountry: "BR",
  },
  geo: { "@type": "GeoCoordinates", latitude: -19.9633, longitude: -43.9564 },
  areaServed: [
    { "@type": "City", name: "Belo Horizonte" },
    { "@type": "Country", name: "Brasil" },
  ],
  sameAs: [ESCRITORIO.redes.instagram, ESCRITORIO.redes.linkedin],
  knowsAbout: AREAS.map((a) => a.nome),
  member: SOCIOS.map((s) => ({ "@id": pessoaId(s.slug) })),
});

/** O sócio como pessoa. "Attorney" no schema.org é tipo de estabelecimento,
 *  não de pessoa, por isso aqui é Person com jobTitle. O nome civil vai em
 *  alternateName para que a busca pelo nome completo e pelo nome de uso
 *  caiam na mesma pessoa. */
export const pessoa = (s: Socio) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": pessoaId(s.slug),
  name: s.nome,
  alternateName: s.nomeCompleto,
  jobTitle: s.profissao,
  identifier: s.oab,
  image: url(s.fotosPerfil.topo),
  worksFor: { "@id": url("/#escritorio") },
  workLocation: { "@type": "City", name: ESCRITORIO.endereco.cidade },
  knowsAbout: s.areas.map((slug) => AREAS.find((a) => a.slug === slug)!.nome),
  sameAs: [s.instagram, s.linkedin].filter(Boolean) as string[],
  url: perfilUrl(s.slug),
});

export const attorneys = () => SOCIOS.map(pessoa);

export const perfil = (s: Socio) => ({
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": perfilUrl(s.slug),
  url: perfilUrl(s.slug),
  name: `${s.nomeCompleto}, ${s.profissao.toLowerCase()}`,
  inLanguage: "pt-BR",
  isPartOf: { "@id": url("/#site") },
  mainEntity: { "@id": pessoaId(s.slug) },
});

export const website = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": url("/#site"),
  name: ESCRITORIO.marca,
  url: url(),
  inLanguage: "pt-BR",
  publisher: { "@id": url("/#escritorio") },
});

export const breadcrumb = (trilha: { nome: string; href: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: trilha.map((t, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: t.nome,
    item: url(t.href),
  })),
});

export const faqPage = (faq: { p: string; r: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((f) => ({
    "@type": "Question",
    name: f.p,
    acceptedAnswer: { "@type": "Answer", text: f.r },
  })),
});

export const servico = (nome: string, descricao: string, slug: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: nome,
  description: descricao,
  serviceType: nome,
  provider: { "@id": url("/#escritorio") },
  areaServed: [
    { "@type": "City", name: "Belo Horizonte" },
    { "@type": "Country", name: "Brasil" },
  ],
  url: url(`/areas-de-atuacao/${slug}`),
});

export function JsonLd({ dados }: { dados: object | object[] }) {
  const lista = Array.isArray(dados) ? dados : [dados];
  return (
    <>
      {lista.map((d, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }}
        />
      ))}
    </>
  );
}

export const enderecoTexto = enderecoEmLinha;
