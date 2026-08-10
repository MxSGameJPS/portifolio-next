import ServicePage from "../_services/ServicePage";
import { faqItems } from "./data";

const features = [
  {
    title: "iOS e Android a partir do mesmo produto",
    description:
      "Uma base React Native permite evoluir as duas plataformas de forma coordenada, preservando comportamento e experiência próprios do dispositivo.",
  },
  {
    title: "Navegação pensada para uso recorrente",
    description:
      "Fluxos, estados, gestos e hierarquia de informação são desenhados para a tela pequena e para ações rápidas, não como adaptação tardia de um site.",
  },
  {
    title: "Notificações e relacionamento",
    description:
      "Push notifications podem conectar lembretes, atualizações de status, conteúdo e eventos importantes diretamente à jornada do usuário.",
  },
  {
    title: "Recursos do dispositivo",
    description:
      "Câmera, localização, armazenamento local, biometria e outros recursos entram quando ajudam o produto a resolver algo melhor no contexto mobile.",
  },
  {
    title: "Operação com e sem conexão",
    description:
      "Dados locais e estratégias de sincronização podem manter partes importantes da experiência disponíveis mesmo quando a rede oscila.",
  },
  {
    title: "Build e publicação",
    description:
      "Configuração de builds, assinaturas e pacotes para Google Play e App Store faz parte da entrega, junto da preparação das versões para distribuição.",
  },
];

const benefits = [
  { text: "Uma experiência realmente desenhada para o dispositivo que o cliente carrega todos os dias." },
  { text: "Produto mobile conectado ao mesmo backend, dados e operação do restante do negócio." },
  { text: "Base única para iOS e Android sem transformar a experiência em um simples site dentro de um app." },
];

const differentials = [
  {
    title: "Mobile como produto",
    text: "Navegação, estado, feedback e recursos do aparelho são tratados como parte da experiência central.",
  },
  {
    title: "Integração com backend",
    text: "Login, dados, pagamentos e comunicação com APIs são projetados junto da experiência do aplicativo.",
  },
  {
    title: "Notificações com contexto",
    text: "Push entra ligado a eventos do produto e não como disparo isolado sem relação com a jornada.",
  },
  {
    title: "Persistência local",
    text: "Quando faz sentido, dados importantes permanecem disponíveis no aparelho e sincronizam com a nuvem depois.",
  },
  {
    title: "Build reproduzível",
    text: "Configuração de ambientes e EAS ajuda a manter versões de teste e produção organizadas ao longo da evolução do app.",
  },
  {
    title: "Publicação faz parte da entrega",
    text: "Pacote, versão, assets e preparação para as lojas entram no fluxo técnico em vez de aparecer somente no final.",
  },
];

const methodSteps = [
  {
    title: "Objetivo e jornada",
    description: "Defino quem usa o app, em quais momentos e quais tarefas precisam ser mais rápidas no dispositivo.",
  },
  {
    title: "Fluxo e protótipo",
    description: "Organizo navegação e estados principais para validar a experiência antes do desenvolvimento completo.",
  },
  {
    title: "Arquitetura mobile",
    description: "Estruturo rotas, estado, dados locais, comunicação com APIs e recursos nativos necessários ao produto.",
  },
  {
    title: "Desenvolvimento",
    description: "Implemento a experiência em React Native e Expo, mantendo iOS e Android dentro da mesma evolução de produto.",
  },
  {
    title: "Testes em dispositivo",
    description: "Valido comportamento, tamanhos de tela, permissões, conexão e fluxos críticos em contexto real de uso.",
  },
  {
    title: "Build, loja e evolução",
    description: "Gero as versões de produção, preparo a distribuição e deixo a base organizada para os próximos updates.",
  },
];

export default function MobilePage() {
  return (
    <ServicePage
      eyebrow="APLICATIVOS MOBILE"
      headline="Um produto pensado para viver no bolso do usuário."
      subheadline="Aplicativos iOS e Android conectados à operação, aos dados e à experiência do seu negócio."
      description="Desenvolvo aplicativos com React Native e Expo, integrando backend, notificações, dados locais e recursos do dispositivo em uma experiência realmente mobile."
      ctaPrimary="Conversar sobre o app"
      quote="Aplicativo bom não é um site menor. É uma experiência que entende o dispositivo e o momento de uso."
      infoParagraphs={[
        "Mobile faz sentido quando proximidade, recorrência, notificações ou recursos do próprio aparelho criam valor para o usuário. É aí que um aplicativo passa a ser parte do produto, não apenas mais um canal.",
        "A arquitetura precisa conversar com o backend e com a operação existente. O app pode compartilhar dados e regras com o web sem perder a experiência própria de iOS e Android.",
      ]}
      featuresHeading="O que pode fazer parte de uma experiência mobile completa."
      features={features}
      benefits={benefits}
      diffHeading="O aplicativo é desenhado junto da engenharia que o sustenta."
      differentials={differentials}
      methodHeading="Do fluxo na tela à versão pronta para distribuição."
      methodSubtitle="Produto, dados e publicação tratados dentro do mesmo processo."
      methodSteps={methodSteps}
      technologies={["React Native", "Expo", "Expo Router", "TypeScript", "EAS Build", "Firebase", "AsyncStorage", "Expo Notifications", "APIs REST"]}
      relatedCase={{
        name: "Fogão do Meu Coração",
        category: "Mobile · iOS & Android",
        image: "/Projetos/FDMCAPP.png",
        href: "/portfolio/4",
      }}
      faqHeading="O que normalmente surge antes de colocar um aplicativo nas lojas."
      faqItems={faqItems}
    />
  );
}
