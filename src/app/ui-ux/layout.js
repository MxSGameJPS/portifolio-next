// Metadados específicos desta rota: evita herdar a canonical da página inicial.
export const metadata = {
  title: { absolute: "Design de Interfaces UI e UX | Saulo Pavanello" },
  description: "Interfaces para sites, sistemas e aplicativos com foco em clareza, usabilidade e experiência do usuário.",
  alternates: { canonical: "/ui-ux" },
  openGraph: { title: "Design de Interfaces UI e UX | Saulo Pavanello", description: "Interfaces para sites, sistemas e aplicativos com foco em clareza, usabilidade e experiência do usuário.", url: "https://www.saulopavanello.com.br/ui-ux" },
};

export default function Layout({ children }) {
  return children;
}
