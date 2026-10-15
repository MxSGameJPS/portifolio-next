// Metadados específicos desta rota: evita herdar a canonical da página inicial.
export const metadata = {
  title: { absolute: "Segurança de Aplicações e Sistemas | Saulo Pavanello" },
  description: "Melhorias de segurança em sistemas web, aplicações e APIs, com atenção a autenticação, autorização e proteção de dados.",
  alternates: { canonical: "/security" },
  openGraph: { title: "Segurança de Aplicações e Sistemas | Saulo Pavanello", description: "Melhorias de segurança em sistemas web, aplicações e APIs, com atenção a autenticação, autorização e proteção de dados.", url: "https://www.saulopavanello.com.br/security" },
};

export default function Layout({ children }) {
  return children;
}
