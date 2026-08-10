import ServicePage from "../_services/ServicePage";
import { faqItems } from "./data";

const features = [
  { title: "Modelagem e persistência de dados", description: "Estruturo entidades, relações, integridade e consultas para que o dado continue confiável quando o volume e a complexidade aumentarem." },
  { title: "Autenticação e autorização", description: "Login, sessões, papéis e permissões são verificados no servidor para separar claramente quem pode acessar e alterar cada recurso." },
  { title: "Regras de negócio", description: "Cálculos, estados, validações e fluxos críticos ficam centralizados na camada que sustenta o comportamento do produto." },
  { title: "APIs e integrações", description: "REST APIs, webhooks e comunicação com serviços externos conectam o produto a pagamentos, ERPs, CRMs, IA e outros sistemas." },
  { title: "Processamento e automação", description: "Rotinas agendadas, e-mails, documentos, sincronizações e tarefas de processamento podem sair da execução manual." },
  { title: "Segurança e observabilidade", description: "Validação de entrada, controle de acesso, logs e configuração de infraestrutura ajudam a detectar e limitar falhas antes que virem problema operacional." },
];

const benefits = [
  { text: "Dados e regras de negócio centralizados em uma base que pode ser usada por web, mobile e integrações." },
  { text: "Permissões e validações protegidas no servidor em vez de depender apenas do comportamento da interface." },
  { text: "Arquitetura preparada para adicionar integrações e funcionalidades sem reescrever o motor do produto." },
];

const differentials = [
  { title: "Contrato de API claro", text: "Entradas, respostas e erros são pensados para que diferentes interfaces e serviços consigam conversar de forma previsível." },
  { title: "Banco modelado para a regra", text: "A estrutura de dados nasce da operação e das relações reais, evitando duplicidade e consultas frágeis." },
  { title: "Segurança por camadas", text: "Autenticação, autorização, validação e políticas de banco se complementam em vez de depender de um único ponto de defesa." },
  { title: "Webhooks e integrações confiáveis", text: "Eventos externos são validados e processados no backend para evitar que uma chamada do navegador vire fonte de verdade." },
  { title: "Código que outra pessoa consegue manter", text: "Separação de responsabilidades, documentação e estrutura previsível reduzem dependência de conhecimento implícito." },
  { title: "Produção considerada desde cedo", text: "Ambiente, deploy, logs, cache e comportamento em falha fazem parte da arquitetura, não de uma etapa isolada no final." },
];

const methodSteps = [
  { title: "Regras e fronteiras", description: "Mapeio o que pertence ao backend, quais atores existem e quais dados e decisões precisam ser protegidos." },
  { title: "Modelo de dados", description: "Estruturo entidades, relações, índices e políticas para sustentar os fluxos principais do produto." },
  { title: "Contratos e arquitetura", description: "Defino endpoints, serviços, integrações e separação de responsabilidades antes de espalhar lógica pelo código." },
  { title: "Implementação", description: "Desenvolvo regras, autenticação, automações e APIs com validações consistentes entre as camadas." },
  { title: "Testes e segurança", description: "Valido fluxos críticos, permissões, payloads inválidos e integrações que podem afetar dados ou dinheiro." },
  { title: "Deploy e observação", description: "Coloco a camada em produção com configuração adequada e estrutura para acompanhar o comportamento real do sistema." },
];

export default function BackendPage() {
  return (
    <ServicePage
      eyebrow="BACKEND & APIS"
      headline="A engenharia invisível que mantém o produto confiável."
      subheadline="Dados, regras de negócio, autenticação e integrações organizados em uma base que pode crescer."
      description="Desenvolvo backends e APIs para sustentar sistemas web, aplicativos e produtos digitais, conectando banco de dados, permissões, automações e serviços externos."
      ctaPrimary="Conversar sobre a arquitetura"
      quote="O backend só parece invisível enquanto está funcionando. Por isso ele precisa ser projetado para o dia real de uso."
      infoParagraphs={[
        "É no backend que o produto decide o que é válido, quem pode fazer cada ação e qual dado deve ser considerado verdade. Essa camada precisa ser previsível antes de ser sofisticada.",
        "Uma arquitetura organizada também facilita integrar novas interfaces, serviços e automações sem duplicar a mesma regra em vários lugares.",
      ]}
      featuresHeading="As responsabilidades que formam o motor de um produto digital."
      features={features}
      benefits={benefits}
      diffHeading="Uma base sólida reduz risco antes de aumentar velocidade."
      differentials={differentials}
      methodHeading="Da regra de negócio a uma API pronta para produção."
      methodSubtitle="Dados e segurança entram na arquitetura desde o começo."
      methodSteps={methodSteps}
      technologies={["Node.js", "Next.js", "Fastify", "Express", "PostgreSQL", "Supabase", "JWT", "Webhooks", "REST APIs", "Docker", "Vercel"]}
      relatedCase={{
        name: "FDMC API",
        category: "Backend · API · Arquitetura",
        image: "/Projetos/FDMCapi.png",
        href: "/portfolio/3",
      }}
      faqHeading="Questões importantes antes de definir um backend ou uma API."
      faqItems={faqItems}
    />
  );
}
