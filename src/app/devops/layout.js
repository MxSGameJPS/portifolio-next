// Metadados específicos desta rota: evita herdar a canonical da página inicial.
export const metadata = {
  title: { absolute: "DevOps e Implantação de Sistemas | Saulo Pavanello" },
  description: "Deploy, automação e infraestrutura para colocar aplicações em produção com confiabilidade e facilidade de manutenção.",
  alternates: { canonical: "/devops" },
  openGraph: { title: "DevOps e Implantação de Sistemas | Saulo Pavanello", description: "Deploy, automação e infraestrutura para colocar aplicações em produção com confiabilidade e facilidade de manutenção.", url: "https://www.saulopavanello.com.br/devops" },
};

export default function Layout({ children }) {
  return children;
}
