// Metadados específicos desta rota: evita herdar a canonical da página inicial.
export const metadata = {
  title: { absolute: "Desenvolvimento de Aplicativos Android | Saulo Pavanello" },
  description: "Aplicativos Android sob medida para empresas: interfaces intuitivas, integrações e soluções mobile para operações reais.",
  alternates: { canonical: "/app-android" },
  openGraph: { title: "Desenvolvimento de Aplicativos Android | Saulo Pavanello", description: "Aplicativos Android sob medida para empresas: interfaces intuitivas, integrações e soluções mobile para operações reais.", url: "https://www.saulopavanello.com.br/app-android" },
};

export default function Layout({ children }) {
  return children;
}
