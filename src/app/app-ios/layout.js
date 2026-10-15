// Metadados específicos desta rota: evita herdar a canonical da página inicial.
export const metadata = {
  title: { absolute: "Desenvolvimento de Aplicativos iOS | Saulo Pavanello" },
  description: "Criação de aplicativos iOS para empresas, com foco em experiência, desempenho e integração com seus sistemas.",
  alternates: { canonical: "/app-ios" },
  openGraph: { title: "Desenvolvimento de Aplicativos iOS | Saulo Pavanello", description: "Criação de aplicativos iOS para empresas, com foco em experiência, desempenho e integração com seus sistemas.", url: "https://www.saulopavanello.com.br/app-ios" },
};

export default function Layout({ children }) {
  return children;
}
