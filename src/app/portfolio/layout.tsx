const SITE = "https://saulopavanello.com.br";
const PAGE = `${SITE}/portfolio`;

export const metadata = {
  title: {
    absolute: "Portfólio | Saulo Pavanello — Software Engineer",
  },
  description:
    "Cases e produtos desenvolvidos por Saulo Pavanello: SaaS, sistemas web, aplicativos mobile, APIs e integrações construídos da arquitetura ao deploy.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "Portfólio | Saulo Pavanello — Software Engineer",
    description:
      "Software que saiu do briefing e entrou em operação. Explore cases de SaaS, sistemas, mobile e APIs.",
    url: PAGE,
    images: ["/ogimage.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfólio | Saulo Pavanello — Software Engineer",
    description:
      "Cases de SaaS, sistemas web, aplicativos mobile e APIs construídos da ideia à produção.",
    images: ["/ogimage.png"],
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
