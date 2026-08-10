import { meta, faqItems } from "./data";
import { serviceJsonLd } from "../_services/schema";

const SITE = "https://saulopavanello.com.br";
const PAGE = `${SITE}${meta.path}`;
const TITLE = "Backend & APIs | Saulo Pavanello — Software Engineer";

export const metadata = {
  title: { absolute: TITLE },
  description: meta.description,
  alternates: { canonical: meta.path },
  openGraph: {
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

export default function ServiceLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = serviceJsonLd({
    path: meta.path,
    name: meta.name,
    serviceType: meta.serviceType,
    image: "/ogimage.png",
    description: meta.description,
    offers: meta.offers,
    faqItems,
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}
