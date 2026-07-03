import { faqItems } from "./data";

const SITE = "https://saulopavanello.com.br";
const PAGE = `${SITE}/mobile`;

export const metadata = {
  title: "Desenvolvimento de Aplicativos Mobile (iOS & Android)",
  description:
    "Criação de aplicativos mobile para iPhone e Android com React Native. Apps rápidos, seguros e publicados nas lojas para colocar seu negócio no bolso do cliente.",
  alternates: { canonical: "/mobile" },
  openGraph: {
    title: "Aplicativos Mobile iOS & Android | Saulo Pavanello",
    description:
      "Apps nativos e híbridos para iPhone e Android. Do conceito à publicação nas lojas, com notificações, offline e integração com seus sistemas.",
    url: PAGE,
    images: ["/CriacaoDeSites/aplicativosMobile.png"],
  },
};

export default function MobileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Connected @graph: the Service links to the site-wide Person (#person) and the
  // FAQPage mirrors exactly the questions rendered on the page — both eligible for
  // Google rich results.
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${PAGE}/#service`,
        name: "Desenvolvimento de Aplicativos Mobile (iOS & Android)",
        serviceType: "Mobile App Development",
        url: PAGE,
        image: `${SITE}/CriacaoDeSites/aplicativosMobile.png`,
        description:
          "Desenvolvimento de aplicativos mobile para iPhone e Android com React Native e Expo, do conceito à publicação nas lojas.",
        provider: { "@id": `${SITE}/#person` },
        areaServed: { "@type": "Country", name: "Brasil" },
        mainEntityOfPage: PAGE,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Aplicativos Mobile",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Aplicativos iOS (iPhone)" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Aplicativos Android" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Apps Híbridos (React Native)" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Publicação na App Store e Google Play" } },
          ],
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${PAGE}/#faq`,
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
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
