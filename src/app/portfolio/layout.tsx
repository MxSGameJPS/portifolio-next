const SITE = "https://saulopavanello.com.br";
const PAGE = `${SITE}/portfolio`;

export const metadata = {
  title: "Portfólio",
  description:
    "Portfólio de Saulo Pavanello: sites, e-commerce, aplicativos mobile, APIs e sistemas sob medida. Projetos reais, muitos já no ar, com valor de negócio entregue.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "Portfólio | Saulo Pavanello",
    description:
      "Seleção de projetos: web, mobile, APIs e sistemas. Cada um resolve um problema real de negócio.",
    url: PAGE,
    images: ["/Hero.png"],
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
