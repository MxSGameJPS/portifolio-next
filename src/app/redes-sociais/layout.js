// Metadados específicos desta rota: evita herdar a canonical da página inicial.
export const metadata = {
  title: { absolute: "Integrações e Soluções para Redes Sociais | Saulo Pavanello" },
  description: "Soluções tecnológicas para conectar redes sociais, automatizar processos e integrar canais digitais ao seu negócio.",
  alternates: { canonical: "/redes-sociais" },
  openGraph: { title: "Integrações e Soluções para Redes Sociais | Saulo Pavanello", description: "Soluções tecnológicas para conectar redes sociais, automatizar processos e integrar canais digitais ao seu negócio.", url: "https://www.saulopavanello.com.br/redes-sociais" },
};

export default function Layout({ children }) {
  return children;
}
