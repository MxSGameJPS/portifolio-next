"use client";

import ServicePage from "../_services/ServicePage";
import { faqItems } from "./data";
import {
  PiTelevisionBold,
  PiPlayCircleBold,
  PiCpuBold,
  PiLockKeyBold,
  PiPlugsBold,
  PiDeviceMobileBold,
} from "react-icons/pi";

const features = [
  {
    title: "Navegação pelo controle",
    description:
      "Interface pensada para o controle remoto, com foco e seleção sempre claros, fácil de usar do sofá.",
  },
  {
    title: "App de streaming (VOD)",
    description:
      "Catálogo de vídeos, player, categorias e continuar assistindo — a experiência que o público já conhece.",
  },
  {
    title: "Login e assinatura",
    description:
      "Login na TV (inclusive por código exibido na tela) e integração com assinatura e pagamento.",
  },
  {
    title: "Tela grande valorizada",
    description:
      "Layout e imagens pensados para impressionar na tela grande, não um app de celular apenas esticado.",
  },
  {
    title: "Android TV e Apple TV",
    description:
      "Publicação nas lojas das principais plataformas de TV, conforme o alcance do seu público.",
  },
  {
    title: "Integrado ao seu conteúdo",
    description:
      "Conecta com o seu catálogo, CMS ou API para o conteúdo aparecer sempre atualizado, sem republicar.",
  },
];

const benefits = [
  {
    icon: <PiTelevisionBold />,
    text: "A maior tela da casa: seu conteúdo no centro da sala, com o destaque da tela grande.",
  },
  {
    icon: <PiPlayCircleBold />,
    text: "Experiência de streaming: catálogo e player no padrão que o público já sabe usar.",
  },
  {
    icon: <PiPlugsBold />,
    text: "Sempre atualizado: integrado ao seu catálogo, mostra conteúdo novo sem republicar o app.",
  },
];

const differentials = [
  {
    icon: <PiTelevisionBold />,
    title: "Feito para TV",
    text: "Navegação por controle e foco visível, não um app de celular esticado para a tela grande.",
  },
  {
    icon: <PiPlayCircleBold />,
    title: "Player robusto",
    text: "Reprodução de vídeo fluida, com categorias, continuar assistindo e boa experiência de busca.",
  },
  {
    icon: <PiCpuBold />,
    title: "Base moderna",
    text: "React Native for TV ou plataformas nativas, conforme o melhor caminho para o seu caso.",
  },
  {
    icon: <PiLockKeyBold />,
    title: "Login na tela",
    text: "Login por código exibido na TV e integração com assinatura e pagamento, sem digitação difícil.",
  },
  {
    icon: <PiPlugsBold />,
    title: "Integra seu catálogo",
    text: "Conteúdo puxado do seu CMS ou API, sempre atualizado sem precisar reenviar o app.",
  },
  {
    icon: <PiDeviceMobileBold />,
    title: "Alinhado ao seu app",
    text: "Mesma identidade e lógica do seu app de celular, adaptadas para a experiência de TV.",
  },
];

const methodSteps = [
  {
    title: "Conteúdo & Plataformas",
    description:
      "Definimos o conteúdo, o objetivo do app e em quais plataformas de TV vale a pena estar.",
  },
  {
    title: "Design para TV",
    description:
      "Crio a navegação pensada para o controle remoto, com foco e seleção claros na tela grande.",
  },
  {
    title: "Desenvolvimento",
    description:
      "Construo o app com o catálogo, a navegação e a identidade da sua marca adaptadas à TV.",
  },
  {
    title: "Player & Login",
    description:
      "Implemento o player de vídeo, o login na tela e a integração com assinatura e pagamento.",
  },
  {
    title: "Testes na TV",
    description:
      "Testo em aparelhos e sistemas de TV para garantir navegação e reprodução fluidas de verdade.",
  },
  {
    title: "Publicação nas lojas",
    description:
      "Envio o app para as lojas da Android TV e da Apple TV e ajusto o que for necessário até aprovar.",
  },
];

const trust = [
  { value: "Android & Apple TV", label: "tela grande" },
  { value: "Streaming", label: "catálogo + player" },
  { value: "2+ anos", label: "de experiência" },
];

export default function AppTvPage() {
  return (
    <ServicePage
      eyebrow="Apps para Smart TV"
      headline="Seu conteúdo na tela grande da sala"
      subheadline="Um app de TV — Android TV e Apple TV — com navegação pensada para o controle e experiência de tela grande."
      description="Desenvolvo apps para Smart TV (Android TV e Apple TV), inclusive apps de streaming com catálogo, player e login. Navegação feita para o controle remoto, tela grande e publicação nas lojas das TVs."
      heroImage={{ src: "/CriacaoDeSites/app-tv.png", alt: "Desenvolvimento de Apps para Smart TV" }}
      ctaPrimary="Quero meu app de TV"
      ctaNote="Consultoria gratuita · resposta em até 24h · sem compromisso"
      trust={trust}
      quote="A TV voltou para o centro da sala — agora conectada. Um app próprio coloca o seu conteúdo na maior tela da casa."
      infoParagraphs={[
        "A Smart TV virou uma plataforma como o celular, mas com regras próprias: tela grande, controle remoto e navegação por foco. Desenho o app pensando nesse contexto, para ser fácil de usar do sofá.",
        "Faço desde apps de streaming (catálogo, player, categorias e login) até apps institucionais e de conteúdo, publicados na loja da Android TV e da Apple TV, com a mesma identidade da sua marca.",
      ]}
      featuresHeading="O que o app de TV tem"
      features={features}
      benefits={benefits}
      ctaMid="Quero um orçamento"
      diffHeading="Diferenciais do app de TV"
      differentials={differentials}
      methodHeading="Da ideia à tela da sala"
      methodSubtitle="App de TV no ar"
      methodSteps={methodSteps}
      faqHeading="Dúvidas sobre apps de TV"
      faqItems={faqItems}
    />
  );
}
