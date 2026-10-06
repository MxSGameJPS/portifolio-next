import { meta, faqItems } from "./data";
import { serviceJsonLd } from "../_services/schema";

const SITE = "https://www.saulopavanello.com.br";
const PAGE = `${SITE}${meta.path}`;
const TITLE = "Criação de Sites Profissionais | Saulo Pavanello";

export const metadata = {
  title: { absolute: TITLE },
  description: meta.description,
  alternates: { canonical: meta.path },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: TITLE,
    description: meta.description,
    url: PAGE,
    images: ["/ogimage.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: meta.description,
    images: ["/ogimage.png"],
  },
};

export default function CriacaoDeSitesLayout({ children }) {
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
