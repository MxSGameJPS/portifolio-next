// Metadados específicos desta rota: evita herdar a canonical da página inicial.
export const metadata = {
  title: { absolute: "Tecnologias e Ferramentas de Desenvolvimento | Saulo Pavanello" },
  description: "Conheça as tecnologias usadas por Saulo Pavanello no desenvolvimento de sistemas, sites, APIs e aplicativos.",
  alternates: { canonical: "/stack" },
  openGraph: { title: "Tecnologias e Ferramentas de Desenvolvimento | Saulo Pavanello", description: "Conheça as tecnologias usadas por Saulo Pavanello no desenvolvimento de sistemas, sites, APIs e aplicativos.", url: "https://www.saulopavanello.com.br/stack" },
};

export default function Layout({ children }) {
  return children;
}
