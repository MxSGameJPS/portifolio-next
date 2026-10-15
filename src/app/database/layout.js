// Metadados específicos desta rota: evita herdar a canonical da página inicial.
export const metadata = {
  title: { absolute: "Desenvolvimento e Modelagem de Banco de Dados | Saulo Pavanello" },
  description: "Modelagem, otimização e integração de bancos de dados para sistemas empresariais, aplicativos e plataformas web.",
  alternates: { canonical: "/database" },
  openGraph: { title: "Desenvolvimento e Modelagem de Banco de Dados | Saulo Pavanello", description: "Modelagem, otimização e integração de bancos de dados para sistemas empresariais, aplicativos e plataformas web.", url: "https://www.saulopavanello.com.br/database" },
};

export default function Layout({ children }) {
  return children;
}
