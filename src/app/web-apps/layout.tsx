import { faqItems } from "./data";

const SITE = "https://saulopavanello.com.br";
const PAGE = `${SITE}/web-apps`;

export const metadata = {
  title: "Desenvolvimento de Web Apps & Sistemas",
  description:
    "Criação de Web Apps e Sistemas Personalizados com React, Next.js e Node.js. Soluções escaláveis e de alta performance para o seu negócio.",
  alternates: { canonical: "/web-apps" },
  openGraph: {
    title: "Desenvolvimento de Web Apps & Sistemas | Saulo Pavanello",
    description:
      "Transforme processos complexos em softwares inteligentes. Desenvolvimento sob medida para máxima eficiência.",
    url: PAGE,
    images: ["/CriacaoDeSites/hero.png"],
  },
};

export default function WebAppsLayout({
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
        name: "Desenvolvimento de Web Apps & Sistemas Personalizados",
        serviceType: "Web Application Development",
        url: PAGE,
        image: `${SITE}/CriacaoDeSites/hero.png`,
        description:
          "Desenvolvimento de aplicações web complexas, dashboards e sistemas de gestão personalizados com React, Next.js e Node.js.",
        provider: { "@id": `${SITE}/#person` },
        areaServed: { "@type": "Country", name: "Brasil" },
        mainEntityOfPage: PAGE,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Web Apps & Sistemas",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sistemas de Gestão Sob Medida" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dashboards & Business Intelligence" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Integração de APIs (ERP/CRM)" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Portais e Áreas de Cliente" } },
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
