// Metadados específicos desta rota: evita herdar a canonical da página inicial.
export const metadata = {
  title: { absolute: "Criação de Landing Pages | Saulo Pavanello" },
  description: "Landing pages profissionais com foco em apresentação clara, desempenho e geração de contatos para empresas.",
  alternates: { canonical: "/landing-pages" },
  openGraph: { title: "Criação de Landing Pages | Saulo Pavanello", description: "Landing pages profissionais com foco em apresentação clara, desempenho e geração de contatos para empresas.", url: "https://www.saulopavanello.com.br/landing-pages" },
};

export default function Layout({ children }) {
  return children;
}
