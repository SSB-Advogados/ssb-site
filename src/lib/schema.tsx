import { AREAS, ESCRITORIO, SOCIOS, enderecoEmLinha } from "@/lib/escritorio";

const url = (p = "") => `https://${ESCRITORIO.dominio}${p}`;

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
  member: SOCIOS.map((s) => ({ "@id": url(`/sobre#${s.slug}`) })),
});

export const attorneys = () =>
  SOCIOS.map((s) => ({
    "@context": "https://schema.org",
    "@type": "Attorney",
    "@id": url(`/sobre#${s.slug}`),
    name: s.nome,
    identifier: s.oab,
    worksFor: { "@id": url("/#escritorio") },
    sameAs: [s.instagram, s.linkedin].filter(Boolean) as string[],
    url: url("/sobre"),
  }));

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
