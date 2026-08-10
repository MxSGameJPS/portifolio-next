import ServicePage from "../_services/ServicePage";
import { faqItems } from "./data";

const features = [
  {
    title: "Operação centralizada",
    description:
      "Cadastros, clientes, pedidos, agendamentos, relatórios e permissões podem deixar de viver em planilhas e ferramentas isoladas para funcionar dentro do mesmo fluxo.",
  },
  {
    title: "Regras de negócio próprias",
    description:
      "O sistema acompanha a forma como a empresa realmente trabalha: validações, etapas, cálculos, níveis de acesso e automações definidos para a operação.",
  },
  {
    title: "Painéis e áreas autenticadas",
    description:
      "Dashboards, portais de cliente, áreas administrativas e experiências distintas por perfil, com acesso controlado e informação organizada.",
  },
  {
    title: "Integrações com o ecossistema existente",
    description:
      "ERP, CRM, pagamentos, WhatsApp, e-mail e APIs externas podem conversar com o produto para reduzir digitação duplicada e trabalho manual.",
  },
  {
    title: "Dados e segurança desde a arquitetura",
    description:
      "Autenticação, autorização, modelagem de dados e políticas de acesso entram no desenho do produto antes do deploy, não como remendo posterior.",
  },
  {
    title: "Base preparada para evoluir",
    description:
      "Arquitetura modular e código organizado para novas funcionalidades entrarem sem transformar cada próxima versão em uma reconstrução completa.",
  },
];

const benefits = [
  { text: "Menos processo manual e menos informação espalhada pela operação." },
  { text: "Uma ferramenta construída em torno da regra do negócio, não do limite de um template." },
  { text: "Código, dados e infraestrutura preparados para continuar evoluindo depois do lançamento." },
];

const differentials = [
  {
    title: "Produto antes da tela",
    text: "O trabalho começa entendendo fluxo, usuário, regra e gargalo. A interface vem depois que o problema está claro.",
  },
  {
    title: "Front-end e backend na mesma conversa",
    text: "A experiência que o usuário vê é projetada junto da lógica, dos dados e das integrações que sustentam o sistema.",
  },
  {
    title: "Integrações reais",
    text: "Pagamentos, ERPs, CRMs, serviços de e-mail, IA e APIs entram como parte da arquitetura quando resolvem uma necessidade concreta.",
  },
  {
    title: "Acesso e dados controlados",
    text: "Sessões, permissões e dados sensíveis são tratados no servidor e no banco com separação clara por perfil e responsabilidade.",
  },
  {
    title: "Deploy faz parte do projeto",
    text: "Ambiente, domínio, performance, CDN, logs e comportamento em produção fazem parte da entrega técnica.",
  },
  {
    title: "Manutenção pensada desde o início",
    text: "Componentes reutilizáveis e regras de negócio bem separadas diminuem o custo da próxima funcionalidade.",
  },
];

const methodSteps = [
  {
    title: "Diagnóstico da operação",
    description: "Mapeio o problema, quem usa, onde há retrabalho e quais decisões o software precisa assumir.",
  },
  {
    title: "Escopo e arquitetura",
    description: "Defino módulos, dados, integrações, regras de acesso e o caminho técnico mais adequado ao estágio do produto.",
  },
  {
    title: "Fluxo e interface",
    description: "Organizo jornadas e telas para que a operação fique clara antes de concentrar esforço no código.",
  },
  {
    title: "Desenvolvimento",
    description: "Front-end, backend, banco e integrações evoluem como partes do mesmo produto, com validação frequente.",
  },
  {
    title: "Testes e segurança",
    description: "Valido os fluxos críticos, permissões, dados e comportamento em diferentes dispositivos e situações de erro.",
  },
  {
    title: "Deploy e evolução",
    description: "Coloco o sistema em produção e deixo a base pronta para acompanhar o uso real e as próximas versões.",
  },
];

export default function WebAppsPage() {
  return (
    <ServicePage
      eyebrow="WEB APPS & SISTEMAS"
      headline="Software sob medida para operações que já não cabem em planilhas."
      subheadline="Sistemas web, SaaS, dashboards e portais construídos em torno da rotina real do negócio."
      description="Desenvolvo produtos web completos para centralizar processos, automatizar tarefas e conectar dados, usuários e ferramentas em uma única operação digital."
      ctaPrimary="Conversar sobre o sistema"
      quote="O melhor sistema não é o que tem mais telas. É o que remove trabalho desnecessário da operação."
      infoParagraphs={[
        "Um Web App faz sentido quando o processo já ficou complexo demais para planilha, troca de mensagens ou ferramentas que não conversam entre si. O objetivo é transformar essa fragmentação em um fluxo único e mensurável.",
        "A solução pode começar pequena e crescer por módulos. O importante é a base nascer coerente com os dados, os perfis de acesso e as integrações que o negócio realmente precisa.",
      ]}
      featuresHeading="As partes do produto que podem entrar no mesmo sistema."
      features={features}
      benefits={benefits}
      diffHeading="Engenharia aplicada à rotina, não a um pacote pronto."
      differentials={differentials}
      methodHeading="Da operação atual a um sistema que pode evoluir."
      methodSubtitle="Cada etapa reduz incerteza antes de aumentar complexidade."
      methodSteps={methodSteps}
      technologies={["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "Supabase", "APIs REST", "Vercel", "Cloudflare"]}
      relatedCase={{
        name: "Social Jurídico",
        category: "LegalTech · SaaS · IA",
        image: "/Projetos/socialjuridico.png",
        href: "/portfolio/7",
      }}
      faqHeading="O que normalmente precisa estar claro antes de construir um sistema."
      faqItems={faqItems}
    />
  );
}
