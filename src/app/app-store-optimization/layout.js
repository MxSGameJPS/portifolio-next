// Metadados específicos desta rota: evita herdar a canonical da página inicial.
export const metadata = {
  title: { absolute: "Otimização de Aplicativos nas Lojas (ASO) | Saulo Pavanello" },
  description: "Aprimoramento da apresentação de aplicativos nas lojas, com informações claras para melhorar sua descoberta.",
  alternates: { canonical: "/app-store-optimization" },
  openGraph: { title: "Otimização de Aplicativos nas Lojas (ASO) | Saulo Pavanello", description: "Aprimoramento da apresentação de aplicativos nas lojas, com informações claras para melhorar sua descoberta.", url: "https://www.saulopavanello.com.br/app-store-optimization" },
};

export default function Layout({ children }) {
  return children;
}
