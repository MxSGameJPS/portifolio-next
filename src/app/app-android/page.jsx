"use client";

import ServicePage from "../_services/ServicePage";
import { faqItems } from "./data";
import {
  PiCpuBold,
  PiAndroidLogoBold,
  PiBellRingingBold,
  PiLockKeyBold,
  PiPlugsBold,
  PiDeviceMobileBold,
} from "react-icons/pi";

const features = [
  {
    title: "Publicado na Google Play",
    description:
      "Cuido da conta de desenvolvedor, das regras e do envio para o app entrar na loja sem dor de cabeça com burocracia.",
  },
  {
    title: "Rápido e nativo",
    description:
      "React Native entrega a fluidez de um app nativo, sem a sensação de site espremido dentro de um aplicativo.",
  },
  {
    title: "Notificações push",
    description:
      "Avise promoções e novidades direto na tela do cliente — o canal com a maior taxa de abertura que existe.",
  },
  {
    title: "Testado em vários aparelhos",
    description:
      "O Android tem muitos modelos e tamanhos. Testo para o app funcionar bem tanto no popular quanto no top de linha.",
  },
  {
    title: "Usa recursos do aparelho",
    description:
      "Câmera, GPS, digital e mais aproveitados para criar uma experiência que só um app consegue oferecer.",
  },
  {
    title: "Base pronta para iPhone",
    description:
      "Mesmo com foco no Android agora, o projeto já deixa o caminho aberto para a versão iOS quando fizer sentido.",
  },
];

const benefits = [
  {
    icon: <PiAndroidLogoBold />,
    text: "Onde está a maioria: o Android é o celular da maior parte dos brasileiros. Esteja lá.",
  },
  {
    icon: <PiBellRingingBold />,
    text: "Canal direto: notificação na tela do cliente, sem depender do algoritmo de rede social.",
  },
  {
    icon: <PiDeviceMobileBold />,
    text: "Base para iOS também: o React Native deixa o caminho pronto para o iPhone quando quiser.",
  },
];

const differentials = [
  {
    icon: <PiCpuBold />,
    title: "React Native + Expo",
    text: "Base moderna, a mesma de apps como Instagram: rápido de usar e ágil de evoluir.",
  },
  {
    icon: <PiAndroidLogoBold />,
    title: "Foco em Android",
    text: "Otimizado para a Google Play e para os aparelhos que o seu público realmente usa.",
  },
  {
    icon: <PiBellRingingBold />,
    title: "Push nativo",
    text: "Notificações prontas para reengajar o cliente, sem custo por mensagem enviada.",
  },
  {
    icon: <PiLockKeyBold />,
    title: "Login seguro",
    text: "Digital, senha protegida e boas práticas de segurança embutidas no app.",
  },
  {
    icon: <PiPlugsBold />,
    title: "Integra com seus sistemas",
    text: "App conectado ao seu banco de dados, ERP e APIs, com a informação sempre atual.",
  },
  {
    icon: <PiDeviceMobileBold />,
    title: "Um projeto, duas lojas",
    text: "O mesmo código fica pronto para virar app iOS quando você quiser expandir.",
  },
];

const methodSteps = [
  {
    title: "Conversa & Escopo",
    description:
      "Definimos o que o app precisa fazer, para quem e quais funções entram na primeira versão.",
  },
  {
    title: "Design das telas",
    description:
      "Crio telas bonitas e fáceis de usar, seguindo os padrões do Android para parecer natural no aparelho.",
  },
  {
    title: "Desenvolvimento",
    description:
      "Programo o app com performance nativa, notificações e as integrações com os seus sistemas.",
  },
  {
    title: "Testes em aparelhos",
    description:
      "Testo em diferentes modelos e versões de Android para tudo funcionar antes de ir para a loja.",
  },
  {
    title: "Publicação na Play",
    description:
      "Envio o app para a Google Play e ajusto o que a loja pedir até ele ser aprovado e entrar no ar.",
  },
  {
    title: "Acompanhamento",
    description:
      "Acompanho as avaliações e lanço atualizações para corrigir pontos e adicionar novidades.",
  },
];

const trust = [
  { value: "Google Play", label: "publicação inclusa" },
  { value: "React Native", label: "base para iOS também" },
  { value: "2+ anos", label: "de experiência" },
];

export default function AppAndroidPage() {
  return (
    <ServicePage
      eyebrow="Apps Android"
      headline="Um app Android para o seu negócio"
      subheadline="Presença na Google Play com um app rápido, publicado e pronto para falar direto com o cliente."
      description="Desenvolvo apps Android sob medida e publico na Google Play. App rápido, com notificações, integração com seus sistemas e testado nos vários aparelhos — e, se quiser, o caminho para a versão iPhone já fica pronto."
      heroImage={{ src: "/CriacaoDeSites/android-dev.png", alt: "Desenvolvimento de Apps Android" }}
      ctaPrimary="Quero meu app Android"
      ctaNote="Orçamento gratuito · resposta em até 24h · sem compromisso"
      trust={trust}
      quote="O Android é a maioria dos celulares no Brasil. Estar bem na Google Play é estar onde o seu cliente já está."
      infoParagraphs={[
        "O Android domina os celulares no Brasil. Um app na Google Play coloca o seu negócio na tela inicial da maior parte dos seus clientes, com um canal direto por notificação.",
        "Construo com React Native: performance de app nativo e, de quebra, a base pronta para também rodar no iPhone quando fizer sentido. Publico na loja e deixo tudo funcionando, testado nos vários aparelhos Android.",
      ]}
      featuresHeading="O que o app tem"
      features={features}
      benefits={benefits}
      ctaMid="Quero um orçamento"
      diffHeading="Diferenciais do app Android"
      differentials={differentials}
      methodHeading="Da ideia à Google Play"
      methodSubtitle="App Android no ar, sem enrolação"
      methodSteps={methodSteps}
      faqHeading="Dúvidas sobre apps Android"
      faqItems={faqItems}
    />
  );
}
