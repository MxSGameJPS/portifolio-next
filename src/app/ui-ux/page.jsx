import ServicePage from "../_services/ServicePage";
import { faqItems } from "./data";

const features = [
  { title: "Arquitetura de informação", description: "Conteúdo, ações e prioridades são organizados para o usuário entender onde está, o que pode fazer e qual é o próximo passo." },
  { title: "Fluxos e jornadas", description: "Mapeio tarefas e decisões importantes para reduzir passos desnecessários, pontos de dúvida e caminhos sem saída." },
  { title: "Wireframes e protótipos", description: "Antes do código, a experiência pode ser testada em estruturas de baixa fidelidade e protótipos navegáveis no Figma." },
  { title: "UI e design system", description: "Tipografia, cor, componentes e estados formam uma linguagem visual consistente que consegue crescer com o produto." },
  { title: "Responsividade", description: "A interface é pensada para desktop, tablet e celular considerando hierarquia, toque, densidade e comportamento — não apenas redução de largura." },
  { title: "Redesign orientado ao uso", description: "Produtos existentes podem ser reorganizados a partir dos pontos onde o usuário se perde, hesita ou abandona a tarefa." },
];

const benefits = [
  { text: "Menos dúvida na interface e mais clareza sobre o próximo passo do usuário." },
  { text: "Problemas de fluxo podem ser descobertos no protótipo antes de virarem retrabalho caro no código." },
  { text: "Um sistema visual consistente conecta marca, experiência e desenvolvimento ao longo do produto." },
];

const differentials = [
  { title: "UX antes da decoração", text: "O primeiro problema é entender a tarefa e a jornada. Estética entra para reforçar clareza, hierarquia e confiança." },
  { title: "Design que conhece implementação", text: "Como também desenvolvo, decisões de interface consideram comportamento real de componentes, dados e estados." },
  { title: "Protótipo como ferramenta", text: "Figma não serve apenas para apresentar tela bonita; serve para testar caminho, conteúdo e interação antes de codificar." },
  { title: "Componentes que escalam", text: "Patterns reutilizáveis evitam que cada nova tela crie uma linguagem diferente dentro do mesmo produto." },
  { title: "Mobile com intenção", text: "O que aparece primeiro, o tamanho de toque e a quantidade de informação mudam conforme o contexto de uso." },
  { title: "Handoff menor", text: "Quando design e desenvolvimento fazem parte da mesma conversa, menos intenção se perde entre o protótipo e a interface final." },
];

const methodSteps = [
  { title: "Problema e usuário", description: "Entendo o objetivo do produto, quem usa e em que ponto da jornada existe fricção ou oportunidade." },
  { title: "Fluxo", description: "Mapeio tarefas e decisões antes de definir aparência, reduzindo complexidade estrutural primeiro." },
  { title: "Wireframe", description: "Organizo hierarquia, conteúdo e ações em uma estrutura rápida de validar e ajustar." },
  { title: "Protótipo e UI", description: "Transformo a estrutura em uma experiência navegável e aplico a linguagem visual do produto." },
  { title: "Validação", description: "Reviso estados, responsividade, consistência e pontos onde o usuário ainda pode hesitar." },
  { title: "Entrega ou implementação", description: "O design pode seguir como especificação para desenvolvimento ou continuar comigo até a interface em produção." },
];

export default function UiUxPage() {
  return (
    <ServicePage
      eyebrow="UI/UX & PRODUTO"
      headline="Interfaces que deixam o produto mais fácil de entender e usar."
      subheadline="Fluxo, hierarquia e sistema visual trabalhando juntos antes da primeira linha de código."
      description="Projeto experiências para sites, sistemas e aplicativos, conectando arquitetura de informação, prototipagem e UI a decisões reais de produto e desenvolvimento."
      ctaPrimary="Conversar sobre a experiência"
      quote="Design não é só aparência. É decidir o que o usuário precisa perceber, entender e fazer em cada momento."
      infoParagraphs={[
        "Uma interface pode estar visualmente bonita e ainda exigir esforço demais para usar. O trabalho de UX reduz essa carga antes de o refinamento visual entrar em cena.",
        "Quando fluxo, componentes e estados são validados cedo, o desenvolvimento recebe uma direção mais clara e o produto perde menos tempo corrigindo decisões estruturais depois.",
      ]}
      featuresHeading="As camadas que transformam requisito em experiência utilizável."
      features={features}
      benefits={benefits}
      diffHeading="O design é tratado como parte da engenharia do produto."
      differentials={differentials}
      methodHeading="Da intenção do produto a uma interface pronta para existir no mundo real."
      methodSubtitle="Estrutura primeiro; refinamento visual depois."
      methodSteps={methodSteps}
      technologies={["Figma", "Design Systems", "Prototipagem", "Responsive Design", "Acessibilidade", "React", "CSS Modules", "Framer Motion"]}
      relatedCase={{
        name: "Social Jurídico",
        category: "LegalTech · SaaS · Produto",
        image: "/Projetos/socialjuridico.png",
        href: "/portfolio/7",
      }}
      faqHeading="Pontos que normalmente surgem antes de iniciar um trabalho de UI/UX."
      faqItems={faqItems}
    />
  );
}
