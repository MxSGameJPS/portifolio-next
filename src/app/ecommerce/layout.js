// Metadados específicos desta rota: evita herdar a canonical da página inicial.
export const metadata = {
  title: { absolute: "Desenvolvimento de Lojas Virtuais | Saulo Pavanello" },
  description: "Lojas virtuais e e-commerce sob medida com catálogo, pagamentos e gerenciamento de vendas.",
  alternates: { canonical: "/ecommerce" },
  openGraph: { title: "Desenvolvimento de Lojas Virtuais | Saulo Pavanello", description: "Lojas virtuais e e-commerce sob medida com catálogo, pagamentos e gerenciamento de vendas.", url: "https://www.saulopavanello.com.br/ecommerce" },
};

export default function Layout({ children }) {
  return children;
}
