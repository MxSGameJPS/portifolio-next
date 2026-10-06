import ServicePage from "../_services/ServicePage";
import SiteContent from "./SiteContent";

export default function CriacaoDeSitesPage() {
  return (
    <ServicePage
      eyebrow="CRIAÇÃO DE SITES"
      heroVariant="compact"
      headline="Sites profissionais para empresas que querem ser encontradas."
      subheadline="Presença digital própria, rápida e preparada para transformar visitas em contatos."
      description="Desenvolvo sites institucionais e empresariais sob medida, com responsividade, SEO técnico, integração com WhatsApp, publicação e painel administrativo quando necessário. Trabalho a partir de Dois Irmãos — RS e atendo empresas de todo o Brasil."
      ctaPrimary="Quero criar meu site"
      heroFacts={[
        {
          title: "SEO técnico",
          text: "estrutura preparada para busca e crescimento orgânico",
        },
        {
          title: "Painel opcional",
          text: "autonomia para atualizar textos e imagens quando necessário",
        },
        {
          title: "Dois Irmãos · Brasil",
          text: "atendimento local na região e remoto para todo o país",
        },
      ]}
    >
      <SiteContent />
    </ServicePage>
  );
}
