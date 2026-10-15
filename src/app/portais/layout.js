// Metadados específicos desta rota: evita herdar a canonical da página inicial.
export const metadata = {
  title: { absolute: "Desenvolvimento de Portais Web | Saulo Pavanello" },
  description: "Portais corporativos e plataformas web sob medida, com acesso organizado a serviços, informações e operações.",
  alternates: { canonical: "/portais" },
  openGraph: { title: "Desenvolvimento de Portais Web | Saulo Pavanello", description: "Portais corporativos e plataformas web sob medida, com acesso organizado a serviços, informações e operações.", url: "https://www.saulopavanello.com.br/portais" },
};

export default function Layout({ children }) {
  return children;
}
