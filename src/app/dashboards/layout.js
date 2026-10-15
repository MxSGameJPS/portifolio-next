// Metadados específicos desta rota: evita herdar a canonical da página inicial.
export const metadata = {
  title: { absolute: "Dashboards e Painéis Administrativos | Saulo Pavanello" },
  description: "Dashboards sob medida com indicadores, relatórios e integração de dados para apoiar decisões de negócios.",
  alternates: { canonical: "/dashboards" },
  openGraph: { title: "Dashboards e Painéis Administrativos | Saulo Pavanello", description: "Dashboards sob medida com indicadores, relatórios e integração de dados para apoiar decisões de negócios.", url: "https://www.saulopavanello.com.br/dashboards" },
};

export default function Layout({ children }) {
  return children;
}
