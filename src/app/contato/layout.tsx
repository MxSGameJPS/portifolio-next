const SITE = "https://saulopavanello.com.br";
const PAGE = `${SITE}/contato`;

export const metadata = {
  title: {
    absolute: "Contato | Saulo Pavanello — Software Engineer",
  },
  description:
    "Fale diretamente com Saulo Pavanello sobre SaaS, sistemas web, aplicativos, APIs, automações e produtos digitais sob medida.",
  alternates: { canonical: "/contato" },
  openGraph: {
    title: "Contato | Saulo Pavanello — Software Engineer",
    description:
      "Tem um produto, sistema ou operação digital para construir ou melhorar? Conte o contexto e converse diretamente comigo.",
    url: PAGE,
    images: ["/ogimage.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contato | Saulo Pavanello — Software Engineer",
    description:
      "SaaS, sistemas, aplicativos, APIs e produtos digitais. Converse diretamente comigo sobre o seu projeto.",
    images: ["/ogimage.png"],
  },
};

export default function ContatoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${PAGE}/#contactpage`,
    url: PAGE,
    name: "Contato — Saulo Pavanello",
    description:
      "Canal de contato para projetos de software, SaaS, sistemas web, aplicativos, APIs e produtos digitais.",
    about: { "@id": `${SITE}/#person` },
    areaServed: [
      "Dois Irmãos",
      "Novo Hamburgo",
      "São Leopoldo",
      "Sapiranga",
      "Campo Bom",
      "Ivoti",
      "Estância Velha",
      "Sapucaia do Sul",
      "Caxias do Sul",
    ].map((name) => ({
      "@type": "City",
      name,
      addressRegion: "RS",
      addressCountry: "BR",
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
