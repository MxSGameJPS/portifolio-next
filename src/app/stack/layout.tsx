const SITE = "https://saulopavanello.com.br";
const PAGE = `${SITE}/stack`;

export const metadata = {
  title: {
    absolute: "Stack & Engenharia | Saulo Pavanello — Software Engineer",
  },
  description:
    "Conheça a stack de Saulo Pavanello organizada por responsabilidade: front-end, backend e APIs, mobile, dados e infraestrutura, IA, UI/UX e qualidade.",
  alternates: { canonical: "/stack" },
  openGraph: {
    title: "Stack & Engenharia | Saulo Pavanello — Software Engineer",
    description:
      "Tecnologia não é coleção de logos. Veja como front-end, backend, mobile, dados, infraestrutura, IA e produto se conectam na minha forma de construir software.",
    url: PAGE,
    images: ["/ogimage.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stack & Engenharia | Saulo Pavanello — Software Engineer",
    description:
      "Front-end, backend, mobile, dados, infraestrutura, IA e produto organizados por responsabilidade de engenharia.",
    images: ["/ogimage.png"],
  },
};

export default function StackLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${PAGE}/#stack`,
    url: PAGE,
    name: "Stack & Engenharia — Saulo Pavanello",
    description:
      "Competências técnicas de Saulo Pavanello em front-end, backend, mobile, dados, infraestrutura, IA, UI/UX e qualidade de software.",
    about: { "@id": `${SITE}/#person` },
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
