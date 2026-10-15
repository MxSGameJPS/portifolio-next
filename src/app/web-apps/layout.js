// Metadados específicos desta rota: evita herdar a canonical da página inicial.
export const metadata = {
  title: { absolute: "Desenvolvimento de Sistemas Web | Saulo Pavanello" },
  description: "Sistemas web sob medida para empresas, com painéis, automações, integrações e fluxos de trabalho eficientes.",
  alternates: { canonical: "/web-apps" },
  openGraph: { title: "Desenvolvimento de Sistemas Web | Saulo Pavanello", description: "Sistemas web sob medida para empresas, com painéis, automações, integrações e fluxos de trabalho eficientes.", url: "https://www.saulopavanello.com.br/web-apps" },
};

export default function Layout({ children }) {
  return children;
}
