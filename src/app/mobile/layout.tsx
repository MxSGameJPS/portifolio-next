import { faqItems } from "./data";

const SITE = "https://saulopavanello.com.br";
const PAGE = `${SITE}/mobile`;

export const metadata = {
  title: { absolute: "Aplicativos Mobile | Saulo Pavanello — Software Engineer" },
  description:
    "Desenvolvimento de aplicativos iOS e Android com React Native e Expo, integrados a APIs, notificações, dados e recursos do dispositivo.",
  alternates: { canonical: "/mobile" },
  openGraph: {
    title: "Aplicativos Mobile | Saulo Pavanello — Software Engineer",
    description:
      "Aplicativos iOS e Android pensados como produto: experiência mobile, backend, notificações e publicação dentro do mesmo projeto.",
    url: PAGE,
    images: ["/ogimage.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aplicativos Mobile | Saulo Pavanello — Software Engineer",
    description: "React Native, Expo, iOS e Android conectados à operação e aos dados do negócio.",
    images: ["/ogimage.png"],
  },
};

export default function MobileLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${PAGE}/#service`,
        name: "Desenvolvimento de Aplicativos Mobile",
        serviceType: "Mobile App Development",
        url: PAGE,
        image: `${SITE}/ogimage.png`,
        description: "Desenvolvimento de aplicativos iOS e Android com React Native e Expo.",
        provider: { "@id": `${SITE}/#person` },
        areaServed: { "@type": "Country", name: "Brasil" },
        mainEntityOfPage: PAGE,
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}
