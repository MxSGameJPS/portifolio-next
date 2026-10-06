import ServicePage from "../_services/ServicePage";
import { faqItems } from "./data";

const features = [
  {
    title: "Site institucional e empresarial",
    description:
      "Uma presença digital completa para apresentar a empresa, serviços, diferenciais, estrutura, localização e formas de contato com clareza.",
  },
  {
    title: "Experiência responsiva",
    description:
      "Layout pensado para celular, tablet e desktop, com navegação, leitura e chamadas para ação adaptadas ao tamanho da tela.",
  },
  {
    title: "SEO técnico desde a base",
    description:
      "Estrutura semântica, metadata, sitemap, URLs, dados estruturados e performance preparados para facilitar o trabalho dos mecanismos de busca.",
  },
  {
    title: "WhatsApp e formulários",
    description:
      "Canais de contato integrados à jornada para reduzir atrito entre a visita e o pedido de orçamento, agendamento ou conversa comercial.",
  },
  {
    title: "Painel de atualização quando necessário",
    description:
      "Textos, imagens e conteúdos podem ser administrados pelo próprio cliente em projetos que precisam de atualização frequente.",
  },
  {
    title: "Publicação e infraestrutura",
    description:
      "Configuração de domínio, SSL, hospedagem, banco de dados quando necessário e publicação do projeto em ambiente de produção.",
  },
];

const benefits = [
  {
    text: "Sua empresa deixa de depender apenas de Instagram, Facebook ou perfil do Google para explicar o que faz.",
  },
  {
    text: "Um endereço próprio na internet concentra serviços, provas, informações e canais de contato em uma experiência profissional.",
  },
  {
    text: "A base técnica fica pronta para evoluir com SEO, campanhas, novas páginas, integrações e funcionalidades futuras.",
  },
];

const differentials = [
  {
    title: "Engenharia, não apenas montagem de página",
    text: "O projeto considera código, performance, arquitetura, rastreamento, domínio e manutenção — não somente a aparência final.",
  },
  {
    title: "Atendimento direto",
    text: "Briefing, desenvolvimento e acompanhamento acontecem diretamente comigo, sem repasse entre comercial, agência e equipe técnica.",
  },
  {
    title: "Conteúdo orientado ao negócio",
    text: "A estrutura do site é organizada para explicar o que a empresa vende, reduzir dúvidas e conduzir o visitante até o próximo passo.",
  },
  {
    title: "SEO preparado para crescer",
    text: "O site nasce com uma base técnica correta para que páginas de serviço, conteúdo local e estratégias orgânicas possam ser desenvolvidas depois.",
  },
  {
    title: "Projeto sob medida",
    text: "A solução pode ser enxuta quando a necessidade é simples ou incorporar painel, banco de dados e integrações quando o negócio exige mais.",
  },
  {
    title: "Responsabilidade até a publicação",
    text: "O trabalho não termina no arquivo de código: configuração, deploy, domínio e validação em produção fazem parte da entrega.",
  },
];

const methodSteps = [
  {
    title: "Diagnóstico",
    description:
      "Entendo a empresa, público, serviços, diferenciais, referências e o objetivo principal do site.",
  },
  {
    title: "Estrutura de conteúdo",
    description:
      "Organizo páginas, seções e chamadas para que o visitante encontre rápido o que precisa para tomar uma decisão.",
  },
  {
    title: "Design e experiência",
    description:
      "Transformo a estrutura em uma interface coerente com a marca, responsiva e fácil de navegar.",
  },
  {
    title: "Desenvolvimento",
    description:
      "Implemento o projeto com foco em performance, semântica, acessibilidade e manutenção.",
  },
  {
    title: "SEO, integrações e medição",
    description:
      "Configuro os elementos técnicos para busca, formulários, WhatsApp, Analytics e demais integrações previstas no escopo.",
  },
  {
    title: "Publicação",
    description:
      "Configuro domínio, ambiente de produção e validações finais para colocar o site no ar com segurança.",
  },
];

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
      quote="Um bom site não existe apenas para estar online. Ele precisa explicar o negócio e facilitar a próxima decisão do cliente."
      infoParagraphs={[
        "Para muitas empresas, o primeiro contato ainda acontece pelo Google, por indicação ou por uma rede social. O site funciona como o lugar em que essas pessoas conseguem validar a empresa, entender serviços, ver projetos e entrar em contato.",
        "Estou baseado em Dois Irmãos — RS e atendo negócios do Vale dos Sinos, incluindo Ivoti, Novo Hamburgo, Estância Velha, Sapiranga, Campo Bom e São Leopoldo. Para clientes de outras regiões, todo o processo pode ser conduzido remotamente.",
      ]}
      featuresHeading="O que pode fazer parte de um site profissional."
      features={features}
      benefits={benefits}
      diffHeading="Uma presença digital construída para a realidade da empresa."
      differentials={differentials}
      methodHeading="Da empresa atual ao site publicado."
      methodSubtitle="Conteúdo, experiência e tecnologia tratados como o mesmo projeto."
      methodSteps={methodSteps}
      technologies={[
        "Next.js",
        "React",
        "CSS Modules",
        "SEO técnico",
        "Google Analytics",
        "Search Console",
        "Supabase",
        "Vercel",
      ]}
      faqHeading="Dúvidas comuns sobre criação de sites."
      faqItems={faqItems}
    />
  );
}
