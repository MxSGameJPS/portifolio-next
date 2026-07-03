const SITE = "https://saulopavanello.com.br";
const PAGE = `${SITE}/sobre`;

export const metadata = {
  title: "Sobre",
  description:
    "Saulo Pavanello: desenvolvedor FullStack com base em UI Design e Jornalismo. Contato direto, visão de negócio e coerência do design ao banco de dados.",
  alternates: { canonical: "/sobre" },
  openGraph: {
    title: "Sobre | Saulo Pavanello",
    description:
      "Desenvolvedor FullStack que une engenharia, design e comunicação. Você fala direto com quem constrói o seu projeto.",
    url: PAGE,
    images: ["/Sobre/saulo_profile.png"],
  },
};

export default function SobreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // ProfilePage linked to the site-wide Person (#person) declared in the root layout.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${PAGE}/#profilepage`,
    url: PAGE,
    name: "Sobre — Saulo Pavanello",
    mainEntity: { "@id": `${SITE}/#person` },
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
