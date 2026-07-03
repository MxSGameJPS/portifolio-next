"use client";

import ServicePage from "../_services/ServicePage";
import { faqItems } from "./data";
import {
  PiPaletteBold,
  PiImagesBold,
  PiLinkBold,
  PiPlugsBold,
  PiDeviceMobileBold,
  PiMagnifyingGlassBold,
  PiSparkleBold,
} from "react-icons/pi";

const features = [
  {
    title: "Identidade visual coesa",
    description:
      "Paleta, tipografia, capa e destaques para o seu perfil ficar reconhecível e profissional em qualquer post.",
  },
  {
    title: "Modelos de post editáveis",
    description:
      "Templates prontos para a sua equipe postar mantendo o padrão, sem precisar chamar um designer toda vez.",
  },
  {
    title: "Página de links (bio) própria",
    description:
      "Um link na bio seu, rápido e com a sua cara, no lugar de uma ferramenta genérica alugada por mensalidade.",
  },
  {
    title: "Redes integradas ao site",
    description:
      "Feed do Instagram, botões e compartilhamento no seu site, ligando a presença social à sua página.",
  },
  {
    title: "Adaptado a cada rede",
    description:
      "Formatos e identidade ajustados para Instagram, Facebook, LinkedIn e TikTok, cada um do seu jeito.",
  },
  {
    title: "Pronto para crescer",
    description:
      "Uma base visual organizada que facilita manter a constância — o que realmente faz a presença crescer.",
  },
];

const benefits = [
  {
    icon: <PiSparkleBold />,
    text: "Perfil que passa confiança: identidade coesa faz o cliente levar sua marca a sério de cara.",
  },
  {
    icon: <PiLinkBold />,
    text: "Redes e site conectados: o público circula entre suas redes e sua página sem se perder.",
  },
  {
    icon: <PiPaletteBold />,
    text: "Padrão fácil de manter: modelos prontos para postar com constância, sem depender de designer.",
  },
];

const differentials = [
  {
    icon: <PiPaletteBold />,
    title: "Identidade profissional",
    text: "Um sistema visual coeso, não post solto sem padrão que enfraquece a marca.",
  },
  {
    icon: <PiImagesBold />,
    title: "Modelos editáveis",
    text: "Templates para a sua equipe manter o padrão sozinha, sem gargalo em design.",
  },
  {
    icon: <PiLinkBold />,
    title: "Bio link próprio",
    text: "Uma página de links sua, rápida e sem mensalidade de ferramenta de terceiro.",
  },
  {
    icon: <PiPlugsBold />,
    title: "Integração com o site",
    text: "Feed, botões e compartilhamento ligando as redes e a sua página em uma experiência só.",
  },
  {
    icon: <PiDeviceMobileBold />,
    title: "Feito para o feed",
    text: "Formatos certos para cada rede, bonitos na tela do celular, onde o público está.",
  },
  {
    icon: <PiMagnifyingGlassBold />,
    title: "Credibilidade e alcance",
    text: "Perfil coeso e ligado ao site reforça a confiança e ajuda no tráfego para o seu negócio.",
  },
];

const methodSteps = [
  {
    title: "Marca & Público",
    description:
      "Entendo a sua marca e quem você quer alcançar, para a identidade falar com o público certo.",
  },
  {
    title: "Identidade Visual",
    description:
      "Defino paleta, tipografia, capa e destaques, criando a base visual que deixa o perfil coeso.",
  },
  {
    title: "Modelos de Post",
    description:
      "Crio templates editáveis para os principais formatos, para postar com padrão e agilidade.",
  },
  {
    title: "Bio Link & Integração",
    description:
      "Monto a página de links e integro as redes ao seu site, ligando presença social e página.",
  },
  {
    title: "Entrega dos Templates",
    description:
      "Entrego os modelos prontos e organizados, com orientação para a equipe manter o padrão.",
  },
  {
    title: "Ajustes & Suporte",
    description:
      "Acompanho o uso e ajusto o que for preciso para a presença ficar redonda no dia a dia.",
  },
];

const trust = [
  { value: "Identidade coesa", label: "perfil profissional" },
  { value: "Integrado", label: "redes + site" },
  { value: "2+ anos", label: "de experiência" },
];

export default function RedesSociaisPage() {
  return (
    <ServicePage
      eyebrow="Presença digital coesa"
      headline="Redes sociais com a cara profissional do seu negócio"
      subheadline="Identidade visual coesa, modelos de post prontos e redes integradas ao seu site — presença que passa confiança."
      description="Cuido da base da sua presença nas redes: identidade visual, modelos de post editáveis, página de links (bio) e integração com o seu site. Um perfil coeso e profissional, que passa credibilidade e leva o público até você."
      heroImage={{ src: "/CriacaoDeSites/social-media.png", alt: "Presença em Redes Sociais e Conteúdo" }}
      ctaPrimary="Quero minhas redes profissionais"
      ctaNote="Consultoria gratuita · resposta em até 24h · sem compromisso"
      trust={trust}
      quote="Perfil bagunçado passa desconfiança no primeiro toque. Uma presença coesa faz o cliente levar você a sério antes mesmo de falar com você."
      infoParagraphs={[
        "Antes de postar todo dia, sua marca precisa de base: uma identidade visual coesa (cores, tipografia, modelos) para o perfil parecer profissional e reconhecível em qualquer post.",
        "Depois, integro as redes ao seu site: feed, botões, compartilhamento e uma página de links (link na bio) própria. Assim o público circula entre suas redes e o seu site sem se perder, aumentando a credibilidade.",
      ]}
      featuresHeading="O que eu entrego"
      features={features}
      benefits={benefits}
      ctaMid="Quero um orçamento"
      diffHeading="Diferenciais da presença"
      differentials={differentials}
      methodHeading="Da bagunça à marca coesa"
      methodSubtitle="Presença que passa confiança"
      methodSteps={methodSteps}
      faqHeading="Dúvidas sobre redes sociais"
      faqItems={faqItems}
    />
  );
}
