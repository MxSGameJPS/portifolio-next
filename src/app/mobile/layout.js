// Metadados específicos desta rota: evita herdar a canonical da página inicial.
export const metadata = {
  title: { absolute: "Desenvolvimento de Aplicativos Mobile | Saulo Pavanello" },
  description: "Aplicativos mobile para Android e iOS com React Native, integrações e recursos feitos para seu negócio.",
  alternates: { canonical: "/mobile" },
  openGraph: { title: "Desenvolvimento de Aplicativos Mobile | Saulo Pavanello", description: "Aplicativos mobile para Android e iOS com React Native, integrações e recursos feitos para seu negócio.", url: "https://www.saulopavanello.com.br/mobile" },
};

export default function Layout({ children }) {
  return children;
}
