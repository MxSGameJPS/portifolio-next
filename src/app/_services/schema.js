// Builds a connected @graph (Service linked to the site-wide Person + FAQPage)
// for every service landing page. Keeps structured data identical across routes.

const SITE = "https://saulopavanello.com.br";

export function serviceJsonLd({
  path,
  name,
  serviceType,
  image,
  description,
  offers = [],
  faqItems = [],
}) {
  const PAGE = `${SITE}${path}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${PAGE}/#service`,
        name,
        serviceType,
        url: PAGE,
        image: `${SITE}${image}`,
        description,
        provider: { "@id": `${SITE}/#person` },
        areaServed: { "@type": "Country", name: "Brasil" },
        mainEntityOfPage: PAGE,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name,
          itemListElement: offers.map((o) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: o },
          })),
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
}
