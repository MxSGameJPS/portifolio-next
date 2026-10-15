// Metadados específicos desta rota: evita herdar a canonical da página inicial.
export const metadata = {
  title: { absolute: "Desenvolvimento de Aplicativos para Smart TV | Saulo Pavanello" },
  description: "Aplicativos e experiências para televisores inteligentes, com navegação adequada a telas grandes e soluções sob medida.",
  alternates: { canonical: "/app-tv" },
  openGraph: { title: "Desenvolvimento de Aplicativos para Smart TV | Saulo Pavanello", description: "Aplicativos e experiências para televisores inteligentes, com navegação adequada a telas grandes e soluções sob medida.", url: "https://www.saulopavanello.com.br/app-tv" },
};

export default function Layout({ children }) {
  return children;
}
