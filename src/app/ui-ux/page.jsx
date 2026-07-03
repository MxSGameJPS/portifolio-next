"use client";

import ServicePage from "../_services/ServicePage";
import { faqItems } from "./data";
import {
  PiUserFocusBold,
  PiPenNibBold,
  PiFlowArrowBold,
  PiCubeBold,
  PiDeviceMobileBold,
  PiCpuBold,
  PiCursorClickBold,
  PiPresentationChartBold,
  PiSparkleBold,
} from "react-icons/pi";

const features = [
  {
    title: "Clareza que reduz desistência",
    description:
      "Cada tela com um objetivo claro e o caminho óbvio, para o usuário não travar nem abandonar no meio da tarefa.",
  },
  {
    title: "Visual com a cara da sua marca",
    description:
      "Interface bonita e consistente, que passa profissionalismo e confiança em cada tela do seu produto.",
  },
  {
    title: "Protótipo antes de programar",
    description:
      "Fluxo navegável no Figma para você testar e validar o caminho antes de gastar com desenvolvimento.",
  },
  {
    title: "Redesign do que já existe",
    description:
      "Identifico onde o usuário trava ou desiste no seu produto atual e reorganizo para ficar simples e converter mais.",
  },
  {
    title: "Pensado para o celular",
    description:
      "Design mobile-first, com botões no alcance do dedo e navegação fácil na tela pequena, onde a maioria acessa.",
  },
  {
    title: "Acessível para mais gente",
    description:
      "Contraste, tamanho de toque e navegação por teclado, para mais pessoas conseguirem usar sem barreira.",
  },
];

const benefits = [
  {
    icon: <PiCursorClickBold />,
    text: "Usuário não trava: caminho óbvio até o objetivo, com menos desistência e mais conversão.",
  },
  {
    icon: <PiPresentationChartBold />,
    text: "Testa antes de gastar: o protótipo valida o fluxo antes do desenvolvimento, evitando retrabalho.",
  },
  {
    icon: <PiSparkleBold />,
    text: "Marca mais profissional: visual consistente que passa confiança em cada tela.",
  },
];

const differentials = [
  {
    icon: <PiUserFocusBold />,
    title: "Foco no usuário real",
    text: "Decisões baseadas em como a pessoa realmente usa, não em achismo de estética.",
  },
  {
    icon: <PiPenNibBold />,
    title: "Design consistente",
    text: "Sistema de cores, tipografia e componentes coeso do início ao fim do produto.",
  },
  {
    icon: <PiFlowArrowBold />,
    title: "Fluxo pensado",
    text: "O caminho do usuário mapeado para reduzir passos e tirar a fricção do meio do caminho.",
  },
  {
    icon: <PiCubeBold />,
    title: "Protótipo no Figma",
    text: "Tela navegável para validar a experiência antes de escrever uma linha de código.",
  },
  {
    icon: <PiDeviceMobileBold />,
    title: "Mobile-first",
    text: "Desenhado primeiro para o celular, onde a maior parte dos acessos acontece.",
  },
  {
    icon: <PiCpuBold />,
    title: "Design que vira código",
    text: "Faço design e desenvolvimento: a tela sai do Figma fiel na tela real, sem se perder na entrega.",
  },
];

const methodSteps = [
  {
    title: "Entendimento & Usuário",
    description:
      "Entendo o objetivo do produto e quem vai usar, para o design resolver um problema real, não só enfeitar.",
  },
  {
    title: "Fluxo & Wireframe",
    description:
      "Mapeio o caminho do usuário e monto o rascunho das telas, cuidando da estrutura antes do visual.",
  },
  {
    title: "Protótipo navegável",
    description:
      "Transformo os wireframes em um protótipo clicável no Figma para testar a experiência de verdade.",
  },
  {
    title: "UI Visual",
    description:
      "Aplico a identidade: cores, tipografia e componentes, criando telas bonitas e consistentes.",
  },
  {
    title: "Validação & Ajustes",
    description:
      "Testo o fluxo, ouço o feedback e refino os pontos onde o usuário ainda hesita ou se perde.",
  },
  {
    title: "Entrega (ou Código)",
    description:
      "Entrego o design pronto no Figma ou sigo para o desenvolvimento, deixando a tela real fiel ao projeto.",
  },
];

const trust = [
  { value: "UI + UX", label: "forma e função" },
  { value: "Protótipo", label: "testa antes de codar" },
  { value: "2+ anos", label: "de experiência" },
];

export default function UiUxPage() {
  return (
    <ServicePage
      eyebrow="Design que guia o usuário"
      headline="Interfaces bonitas que o usuário entende na hora"
      subheadline="Menos confusão, menos desistência: telas claras que levam o usuário direto ao que ele quer."
      description="Desenho a interface (UI) e a experiência (UX) do seu site, app ou sistema. Telas bonitas e, principalmente, claras — que reduzem a desistência e fazem o usuário chegar ao objetivo sem esforço. Com protótipo antes de programar."
      heroImage={{ src: "/CriacaoDeSites/uiuxdesigner.png", alt: "UI/UX Design de Interfaces" }}
      ctaPrimary="Quero melhorar minha interface"
      ctaNote="Consultoria gratuita · resposta em até 24h · sem compromisso"
      trust={trust}
      quote="Design não é deixar bonito. É deixar óbvio. Quando o usuário não pensa para usar, ele fica — e converte."
      infoParagraphs={[
        "UX é o caminho: fazer o usuário chegar ao objetivo rápido e sem confusão. UI é a aparência: um visual que comunica e passa confiança. Cuido dos dois para a sua interface funcionar e encantar.",
        "Antes de programar, entrego um protótipo navegável no Figma para você testar o fluxo e validar o caminho. Assim ajustamos no barato, antes de gastar com desenvolvimento em cima de uma tela confusa.",
      ]}
      featuresHeading="O que eu desenho"
      features={features}
      benefits={benefits}
      ctaMid="Quero um orçamento"
      diffHeading="Diferenciais do design"
      differentials={differentials}
      methodHeading="Da confusão à clareza"
      methodSubtitle="Interface que funciona e encanta"
      methodSteps={methodSteps}
      faqHeading="Dúvidas sobre UI/UX"
      faqItems={faqItems}
    />
  );
}
