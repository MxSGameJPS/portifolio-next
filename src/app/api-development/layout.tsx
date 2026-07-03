import { meta, faqItems } from "./data";
import { serviceJsonLd } from "../_services/schema";

const SITE = "https://saulopavanello.com.br";

export const metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: meta.path },
  openGraph: {
    title: `${meta.title} | Saulo Pavanello`,
    description: meta.description,
    url: `${SITE}${meta.path}`,
    images: [meta.image],
  },
};

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = serviceJsonLd({
    path: meta.path,
    name: meta.name,
    serviceType: meta.serviceType,
    image: meta.image,
    description: meta.description,
    offers: meta.offers,
    faqItems,
  });

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
