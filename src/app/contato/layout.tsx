const SITE = "https://saulopavanello.com.br";
const PAGE = `${SITE}/contato`;

export const metadata = {
  title: "Contato",
  description:
    "Fale direto com Saulo Pavanello sobre o seu projeto de site, app ou sistema. Atendo Dois Irmãos, Novo Hamburgo, São Leopoldo, Sapiranga e região (RS), com resposta em até 24h.",
  alternates: { canonical: "/contato" },
  openGraph: {
    title: "Contato | Saulo Pavanello",
    description:
      "Me conte a sua ideia. Primeira conversa gratuita, sem compromisso, e você fala direto comigo.",
    url: PAGE,
    images: ["/Hero.png"],
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
    ].map((name) => ({ "@type": "City", name, addressRegion: "RS", addressCountry: "BR" })),
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
