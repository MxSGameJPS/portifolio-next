import ServicePage from "../_services/ServicePage";
import { faqItems } from "./data";

const features = [
  {
    title: "Uma oferta, uma ação principal",
    description: "A página elimina caminhos paralelos e organiza mensagem, prova e CTA em torno do que a campanha precisa gerar: contato, cadastro ou venda.",
  },
  {
    title: "Mensagem alinhada ao anúncio",
    description: "Título, promessa e conteúdo continuam a conversa iniciada no Google, Meta ou outra origem de tráfego, reduzindo a quebra de expectativa depois do clique.",
  },
  {
    title: "Formulário e WhatsApp integrados",
    description: "O lead pode chegar por formulário, WhatsApp ou integração com CRM e e-mail, sem depender de coleta manual depois da campanha.",
  },
  {
    title: "Prova e redução de objeções",
    description: "Depoimentos, números, perguntas frequentes, diferenciais e garantias entram na ordem certa para diminuir dúvida antes da decisão.",
  },
  {
    title: "Medição de conversão",
    description: "Analytics, tags e eventos permitem entender quais canais e ações realmente geram resultado depois do lançamento.",
  },
  {
    title: "Performance no celular",
    description: "Estrutura enxuta, imagens otimizadas e experiência mobile para reduzir a perda de tráfego entre o clique e a abertura da página.",
  },
];

const benefits = [
  { text: "Uma jornada curta e clara entre o anúncio e a ação que interessa ao negócio." },
  { text: "Medição preparada para descobrir onde a campanha converte — e onde perde o visitante." },
  { text: "Página própria, rápida e integrada ao funil sem depender de um construtor pesado." },
];

const differentials = [
  { title: "Copy e estrutura juntas", text: "A mensagem é organizada ao mesmo tempo em que a jornada visual, para não existir design bonito competindo com a oferta." },
  { title: "Performance como conversão", text: "Velocidade entra como parte da experiência porque cada segundo extra pode desperdiçar tráfego que já foi pago." },
  { title: "Mobile primeiro", text: "Hierarquia, formulários e CTAs são tratados pensando no contexto em que grande parte dos cliques de campanha acontece." },
  { title: "Integração com o funil", text: "CRM, e-mail, WhatsApp e automações podem receber o lead diretamente da página." },
  { title: "SEO quando faz sentido", text: "Mesmo sendo focada em campanha, a página pode nascer com estrutura semântica e técnica adequada para busca orgânica." },
  { title: "Base para testar", text: "Componentização facilita evoluir oferta, prova e chamadas sem reconstruir a página a cada aprendizado da campanha." },
];

const methodSteps = [
  { title: "Objetivo e oferta", description: "Defino a conversão principal, público, origem do tráfego e o que precisa ficar claro antes do visitante agir." },
  { title: "Mensagem e estrutura", description: "Organizo headline, argumento, prova, objeções e chamadas na sequência que sustenta a decisão." },
  { title: "Interface", description: "Transformo a estrutura em uma experiência visual coerente com a marca e com a campanha." },
  { title: "Desenvolvimento", description: "Implemento uma página responsiva e enxuta, priorizando carregamento, acessibilidade e clareza." },
  { title: "Medição e integrações", description: "Configuro os pontos de captura e conecto a página aos canais e ferramentas definidos no funil." },
  { title: "Publicação e aprendizado", description: "Coloco no ar e deixo a estrutura pronta para ajustes orientados pelos dados reais da campanha." },
];

export default function LandingPagesPage() {
  return (
    <ServicePage
      eyebrow="LANDING PAGES"
      headline="Uma página construída para transformar atenção em ação."
      subheadline="Mensagem, performance e jornada trabalhando juntas para dar um próximo passo claro ao visitante."
      description="Desenvolvo landing pages para campanhas, lançamentos e ofertas específicas, conectando copy, interface, velocidade e medição em uma única experiência."
      ctaPrimary="Conversar sobre a landing"
      quote="Quando a página tenta vender tudo ao mesmo tempo, o visitante precisa decidir demais antes de agir."
      infoParagraphs={[
        "Landing page é uma ferramenta de campanha. Ela precisa continuar a promessa que trouxe o visitante até ali e remover distrações entre interesse e conversão.",
        "Por isso, texto, layout, velocidade, formulário e tracking são tratados como partes do mesmo sistema — e não como etapas desconectadas.",
      ]}
      featuresHeading="Os elementos que sustentam uma página de conversão."
      features={features}
      benefits={benefits}
      diffHeading="Uma landing page própria permite controlar a experiência inteira."
      differentials={differentials}
      methodHeading="Da oferta à página pronta para receber tráfego."
      methodSubtitle="Primeiro clareza; depois design e código."
      methodSteps={methodSteps}
      technologies={["Next.js", "React", "CSS Modules", "Analytics", "Google Tag", "SEO técnico", "Formulários", "Integrações CRM"]}
      relatedCase={{
        name: "QFarma Digital",
        category: "Saúde · Produto Web",
        image: "/Projetos/qfarma.png",
        href: "/portfolio/8",
      }}
      faqHeading="Perguntas comuns antes de colocar uma landing page em campanha."
      faqItems={faqItems}
    />
  );
}
