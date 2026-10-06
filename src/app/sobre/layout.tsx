const SITE = "https://www.saulopavanello.com.br";
const PAGE = `${SITE}/sobre`;

export const metadata = {
  title: {
    absolute: "Sobre | Saulo Pavanello — Software Engineer",
  },
  description:
    "Conheça Saulo Pavanello, Engenheiro de Software em Dois Irmãos — RS. Desenvolvimento de sites, sistemas e aplicativos para empresas da região e de todo o Brasil.",
  alternates: { canonical: "/sobre" },
  openGraph: {
    title: "Sobre | Saulo Pavanello — Software Engineer",
    description:
      "Engenheiro de Software baseado em Dois Irmãos — RS, com atendimento a empresas do Vale dos Sinos e de todo o Brasil.",
    url: PAGE,
    images: ["/ogimage.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sobre | Saulo Pavanello — Software Engineer",
    description:
      "Tecnologia, produto e negócios fazem parte da mesma conversa.",
    images: ["/ogimage.png"],
  },
};

export default function SobreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${PAGE}/#profilepage`,
    url: PAGE,
    name: "Sobre — Saulo Pavanello",
    description:
      "Trajetória profissional, forma de trabalho e experiência de Saulo Pavanello em software, produto, UI/UX e estratégia.",
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
