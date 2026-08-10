const SITE = "https://saulopavanello.com.br";
const PAGE = `${SITE}/sobre`;

export const metadata = {
  title: {
    absolute: "Sobre | Saulo Pavanello — Software Engineer",
  },
  description:
    "Conheça a trajetória de Saulo Pavanello: Software Engineer, desenvolvedor Full Stack & Mobile e graduando em Engenharia de Software, com bagagem em jornalismo, UI/UX, design e estratégia.",
  alternates: { canonical: "/sobre" },
  openGraph: {
    title: "Sobre | Saulo Pavanello — Software Engineer",
    description:
      "Tecnologia, produto e negócios fazem parte da mesma conversa. Conheça minha trajetória e a forma como transformo problemas em produtos digitais.",
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
