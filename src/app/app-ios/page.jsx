"use client";

import ServicePage from "../_services/ServicePage";
import { faqItems } from "./data";
import {
  PiCpuBold,
  PiAppleLogoBold,
  PiLockKeyBold,
  PiBellRingingBold,
  PiPlugsBold,
  PiDeviceMobileBold,
  PiCloudBold,
} from "react-icons/pi";

const features = [
  {
    title: "Publicado na App Store",
    description:
      "Cuido da conta Apple Developer, das regras e do envio para revisão até o app entrar na loja.",
  },
  {
    title: "Padrão de design da Apple",
    description:
      "Sigo as Human Interface Guidelines para o app parecer natural e ser bem avaliado no iOS.",
  },
  {
    title: "Face ID e Touch ID",
    description:
      "Login por reconhecimento facial ou digital, do jeito rápido e seguro que o usuário de iPhone já conhece.",
  },
  {
    title: "Notificações push",
    description:
      "Avise novidades e promoções direto na tela do cliente, com a alta taxa de abertura que só o app tem.",
  },
  {
    title: "Sem precisar de Mac",
    description:
      "Build na nuvem (EAS): entrego o app iOS sem você ter que comprar um Mac só para isso.",
  },
  {
    title: "Base pronta para Android",
    description:
      "Mesmo com foco no iPhone agora, o projeto já deixa o caminho aberto para a versão Android.",
  },
];

const benefits = [
  {
    icon: <PiAppleLogoBold />,
    text: "Público que valoriza: o usuário de iPhone costuma gastar mais e exigir uma experiência bem feita.",
  },
  {
    icon: <PiCloudBold />,
    text: "Sem Mac: build na nuvem, então você tem app iOS sem comprar equipamento da Apple.",
  },
  {
    icon: <PiDeviceMobileBold />,
    text: "Base para Android também: o React Native deixa o caminho pronto para a Google Play.",
  },
];

const differentials = [
  {
    icon: <PiCpuBold />,
    title: "React Native + Expo",
    text: "Base moderna e ágil, com build iOS na nuvem, sem depender de um Mac para compilar.",
  },
  {
    icon: <PiAppleLogoBold />,
    title: "Padrão Apple",
    text: "Design conforme as diretrizes da Apple, essencial para a aprovação e para a boa avaliação.",
  },
  {
    icon: <PiLockKeyBold />,
    title: "Face ID / Touch ID",
    text: "Login biométrico nativo, rápido e seguro, do jeito que o usuário de iPhone espera.",
  },
  {
    icon: <PiBellRingingBold />,
    title: "Push nativo",
    text: "Notificações prontas para reengajar o cliente, sem custo por mensagem enviada.",
  },
  {
    icon: <PiPlugsBold />,
    title: "Integra com seus sistemas",
    text: "App conectado ao seu banco de dados, ERP e APIs, com a informação sempre atual.",
  },
  {
    icon: <PiDeviceMobileBold />,
    title: "Um projeto, duas lojas",
    text: "O mesmo código fica pronto para virar app Android quando você quiser expandir.",
  },
];

const methodSteps = [
  {
    title: "Conversa & Escopo",
    description:
      "Definimos o que o app precisa fazer, para quem e quais funções entram na primeira versão.",
  },
  {
    title: "Design (padrão Apple)",
    description:
      "Crio as telas seguindo as diretrizes da Apple, para o app ficar elegante e natural no iPhone.",
  },
  {
    title: "Desenvolvimento",
    description:
      "Programo o app com performance fluida, Face ID, notificações e as integrações com os seus sistemas.",
  },
  {
    title: "Testes no iPhone",
    description:
      "Testo em diferentes modelos e versões de iPhone para tudo funcionar antes de enviar para a Apple.",
  },
  {
    title: "Publicação na App Store",
    description:
      "Envio o app para revisão da Apple e ajusto o que for necessário até a aprovação e o lançamento.",
  },
  {
    title: "Acompanhamento",
    description:
      "Acompanho as avaliações e lanço atualizações para corrigir pontos e adicionar novidades.",
  },
];

const trust = [
  { value: "App Store", label: "publicação inclusa" },
  { value: "Sem Mac", label: "build na nuvem" },
  { value: "2+ anos", label: "de experiência" },
];

export default function AppIosPage() {
  return (
    <ServicePage
      eyebrow="Apps iOS (iPhone)"
      headline="Um app iPhone à altura da sua marca"
      subheadline="Presença na App Store com um app elegante, rápido e no padrão que o usuário de iPhone espera."
      description="Desenvolvo apps iOS sob medida e publico na App Store. App fluido, com Face ID, notificações e integração com seus sistemas, no padrão de design da Apple — sem você precisar de Mac, com build na nuvem."
      heroImage={{ src: "/CriacaoDeSites/ios-dev.png", alt: "Desenvolvimento de Apps iOS (iPhone)" }}
      ctaPrimary="Quero meu app iPhone"
      ctaNote="Orçamento gratuito · resposta em até 24h · sem compromisso"
      trust={trust}
      quote="O público de iPhone costuma gastar mais e esperar mais. Um app à altura da App Store é o que segura essa exigência."
      infoParagraphs={[
        "Estar na App Store coloca o seu negócio na tela do público de iPhone — que costuma ser exigente e valorizar experiência bem feita. Entrego um app fluido e no padrão que esse usuário espera.",
        "Uso React Native com build na nuvem (EAS): você não precisa de Mac e ainda ganha a base pronta para a versão Android. Sigo as diretrizes da Apple para o app ser aprovado e parecer natural no iPhone.",
      ]}
      featuresHeading="O que o app tem"
      features={features}
      benefits={benefits}
      ctaMid="Quero um orçamento"
      diffHeading="Diferenciais do app iOS"
      differentials={differentials}
      methodHeading="Da ideia à App Store"
      methodSubtitle="App iOS no ar, sem precisar de Mac"
      methodSteps={methodSteps}
      faqHeading="Dúvidas sobre apps iOS"
      faqItems={faqItems}
    />
  );
}
