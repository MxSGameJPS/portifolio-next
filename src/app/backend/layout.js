// Metadados específicos desta rota: evita herdar a canonical da página inicial.
export const metadata = {
  title: { absolute: "Desenvolvimento Backend | Saulo Pavanello" },
  description: "Backends, APIs e integrações para sistemas e aplicativos, com arquitetura organizada e segurança.",
  alternates: { canonical: "/backend" },
  openGraph: { title: "Desenvolvimento Backend | Saulo Pavanello", description: "Backends, APIs e integrações para sistemas e aplicativos, com arquitetura organizada e segurança.", url: "https://www.saulopavanello.com.br/backend" },
};

export default function Layout({ children }) {
  return children;
}
