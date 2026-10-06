import { faqItems } from "./data";

const SITE = "https://www.saulopavanello.com.br";
const PAGE = `${SITE}/web-apps`;

export const metadata = {
  title: { absolute: "Sistemas Empresariais & Web Apps | Saulo Pavanello" },
  description:
    "Desenvolvimento de sistemas empresariais, sistemas web, SaaS, dashboards e portais sob medida. Baseado em Dois Irmãos — RS, com atendimento em todo o Brasil.",
  alternates: { canonical: "/web-apps" },
  openGraph: {
    title: "Sistemas Empresariais & Web Apps | Saulo Pavanello",
    description:
      "Software sob medida para centralizar processos, automatizar tarefas e conectar dados, usuários e ferramentas.",
    url: PAGE,
    images: ["/ogimage.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sistemas Empresariais & Web Apps | Saulo Pavanello",
    description: "SaaS, sistemas web, dashboards e portais construídos em torno da operação real do negócio.",
    images: ["/ogimage.png"],
  },
};

export default function WebAppsLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${PAGE}/#service`,
        name: "Desenvolvimento de Web Apps & Sistemas",
        serviceType: "Web Application Development",
        url: PAGE,
        image: `${SITE}/ogimage.png`,
        description:
          "Desenvolvimento de sistemas web, SaaS, dashboards e portais sob medida.",
        provider: { "@id": `${SITE}/#person` },
        areaServed: [
          { "@type": "Country", name: "Brasil" },
          ...[
            "Dois Irmãos",
            "Ivoti",
            "Novo Hamburgo",
            "Estância Velha",
            "Sapiranga",
            "Campo Bom",
            "São Leopoldo",
          ].map((name) => ({
            "@type": "City",
            name,
            addressRegion: "RS",
            addressCountry: "BR",
          })),
        ],
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
