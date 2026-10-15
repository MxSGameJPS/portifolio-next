// Metadados específicos desta rota: evita herdar a canonical da página inicial.
export const metadata = {
  title: { absolute: "Integração de Sistemas e Automação | Saulo Pavanello" },
  description: "Integração de ERP, CRM, pagamentos e APIs para eliminar retrabalho e automatizar processos empresariais.",
  alternates: { canonical: "/integrations" },
  openGraph: { title: "Integração de Sistemas e Automação | Saulo Pavanello", description: "Integração de ERP, CRM, pagamentos e APIs para eliminar retrabalho e automatizar processos empresariais.", url: "https://www.saulopavanello.com.br/integrations" },
};

export default function Layout({ children }) {
  return children;
}
