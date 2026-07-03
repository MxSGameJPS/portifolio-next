"use client";

import ServicePage from "../_services/ServicePage";
import { faqItems } from "./data";
import {
  PiCpuBold,
  PiMagnifyingGlassBold,
  PiChatCircleTextBold,
  PiPlugsBold,
  PiTargetBold,
  PiCodeBold,
  PiRocketLaunchBold,
  PiChartLineUpBold,
} from "react-icons/pi";

const features = [
  {
    title: "Um objetivo, zero distração",
    description:
      "Sem menu cheio de saídas. Cada bloco empurra o visitante para uma única ação: preencher o formulário, chamar no WhatsApp ou comprar.",
  },
  {
    title: "Feita para anúncio pago",
    description:
      "Alinhada ao Google e ao Meta Ads e rápida para carregar, para você não pagar por clique que sai antes mesmo de a página abrir.",
  },
  {
    title: "Formulário e WhatsApp",
    description:
      "Formulário que cai no seu e-mail ou CRM e botão de WhatsApp direto, para o lead chegar na hora em que o interesse está quente.",
  },
  {
    title: "Prova que gera confiança",
    description:
      "Espaço pensado para depoimento, número e garantia — os elementos que fazem o visitante confiar e dar o próximo passo.",
  },
  {
    title: "Mede cada lead",
    description:
      "Google Analytics e pixel de conversão instalados para você saber o custo por lead e o que realmente traz resultado.",
  },
  {
    title: "Abre rápido no celular",
    description:
      "Imagens leves e código enxuto: a página abre rápido no 4G, onde a maioria dos cliques de anúncio acontece.",
  },
];

const benefits = [
  {
    icon: <PiTargetBold />,
    text: "Uma página, um objetivo: é isso que faz a taxa de conversão subir.",
  },
  {
    icon: <PiRocketLaunchBold />,
    text: "Página rápida melhora a nota do anúncio e reduz o custo por clique.",
  },
  {
    icon: <PiChartLineUpBold />,
    text: "Pixel e Analytics mostram quanto cada lead custou, para investir no que funciona.",
  },
];

const differentials = [
  {
    icon: <PiCpuBold />,
    title: "Tecnologia rápida",
    text: "Next.js gera uma página leve e veloz, essencial para não perder o clique que você pagou no anúncio.",
  },
  {
    icon: <PiMagnifyingGlassBold />,
    title: "Otimizada para busca",
    text: "Estrutura e SEO on-page para a página também ser encontrada de graça no Google, além do tráfego pago.",
  },
  {
    icon: <PiChatCircleTextBold />,
    title: "Texto que persuade",
    text: "Copy pensada para conversão: título, oferta e chamada claros, guiando o visitante até a ação sem enrolação.",
  },
  {
    icon: <PiPlugsBold />,
    title: "Integra com seu funil",
    text: "Conecta com CRM, RD Station, e-mail e WhatsApp, para o lead entrar direto no seu processo de vendas.",
  },
  {
    icon: <PiTargetBold />,
    title: "Pronta para teste A/B",
    text: "Estrutura que facilita testar título e oferta para melhorar a conversão ao longo da campanha.",
  },
  {
    icon: <PiCodeBold />,
    title: "Sem construtor caro",
    text: "Sem mensalidade de construtor de página. Página própria, código seu e carregando mais rápido.",
  },
];

const methodSteps = [
  {
    title: "Objetivo & Oferta",
    description:
      "Definimos qual é a única ação da página e qual a oferta. É isso que orienta todo o resto: texto, design e prova.",
  },
  {
    title: "Copy & Estrutura",
    description:
      "Escrevo o texto de conversão e organizo a ordem dos blocos, do título à chamada final, para conduzir o visitante à ação.",
  },
  {
    title: "Design da página",
    description:
      "Crio o visual alinhado à sua marca e ao anúncio, com foco em legibilidade e no botão certo em destaque.",
  },
  {
    title: "Desenvolvimento rápido",
    description:
      "Programo a página leve e veloz, responsiva no celular e pronta para aguentar o tráfego da campanha.",
  },
  {
    title: "Medição & Integração",
    description:
      "Instalo Analytics e o pixel de conversão e ligo o formulário ao seu e-mail, CRM ou WhatsApp.",
  },
  {
    title: "Lançamento & Otimização",
    description:
      "Publico a página e acompanho os números para ajustar título e oferta e melhorar a conversão da campanha.",
  },
];

const trust = [
  { value: "1 objetivo", label: "foco total em conversão" },
  { value: "Pronta pra Ads", label: "Google & Meta" },
  { value: "2+ anos", label: "de experiência" },
];

export default function LandingPagesPage() {
  return (
    <ServicePage
      eyebrow="Página feita para converter"
      headline="Uma página que transforma clique em cliente"
      subheadline="Um só objetivo, zero distração e carregamento rápido — para o seu anúncio virar contato e venda."
      description="Crio landing pages focadas em conversão: mensagem clara, prova, formulário e WhatsApp, prontas para receber tráfego de Google e Meta Ads. Rápidas, alinhadas ao anúncio e medindo cada lead que entra."
      heroImage={{ src: "/CriacaoDeSites/landingpage.png", alt: "Criação de Landing Pages de Alta Conversão" }}
      ctaPrimary="Quero minha landing"
      ctaNote="Orçamento gratuito · resposta em até 24h · sem compromisso"
      trust={trust}
      quote="Página que tenta falar tudo não converte nada. Uma boa landing page tem um objetivo — e remove tudo que atrapalha ele."
      infoParagraphs={[
        "Diferente de um site, a landing page tem uma missão só: fazer o visitante agir. Escrevo a mensagem, organizo a prova e coloco o formulário e o WhatsApp no lugar certo para reduzir a hesitação.",
        "Ela nasce pronta para anúncio: rápida para não queimar cliques pagos, alinhada ao que a propaganda promete e com pixel e Analytics medindo quanto custa cada lead que entra.",
      ]}
      featuresHeading="O que a página tem"
      features={features}
      benefits={benefits}
      ctaMid="Quero um orçamento"
      diffHeading="Diferenciais da sua landing"
      differentials={differentials}
      methodHeading="Do clique ao lead"
      methodSubtitle="Página pronta para a campanha"
      methodSteps={methodSteps}
      faqHeading="Dúvidas sobre landing pages"
      faqItems={faqItems}
    />
  );
}
