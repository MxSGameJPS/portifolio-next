"use client";

import ServicePage from "../_services/ServicePage";
import { faqItems } from "./data";
import {
  PiMagnifyingGlassBold,
  PiStorefrontBold,
  PiImageBold,
  PiTextAaBold,
  PiChartBarBold,
  PiRocketLaunchBold,
  PiDownloadSimpleBold,
  PiTrendUpBold,
} from "react-icons/pi";

const features = [
  {
    title: "Palavras-chave da loja",
    description:
      "Descubro e aplico os termos que o seu público busca, para o app aparecer nas pesquisas certas dentro da loja.",
  },
  {
    title: "Título e descrição que convertem",
    description:
      "Texto claro que diz o que o app resolve e convence a instalar, dentro das regras de cada loja.",
  },
  {
    title: "Ícone que se destaca",
    description:
      "Ícone pensado para chamar atenção no meio de dezenas de concorrentes na tela de resultados da busca.",
  },
  {
    title: "Prints que vendem",
    description:
      "As imagens da ficha organizadas para mostrar o valor do app nos primeiros segundos, que é quando a pessoa decide.",
  },
  {
    title: "Otimização das duas lojas",
    description:
      "Ajustes específicos para a App Store e a Google Play, respeitando as regras e o algoritmo de cada uma.",
  },
  {
    title: "Medição e melhoria contínua",
    description:
      "Acompanho impressões, downloads e conversão da página para ajustar o que traz mais instalação ao longo do tempo.",
  },
];

const benefits = [
  {
    icon: <PiMagnifyingGlassBold />,
    text: "Achado na busca: seu app aparece quando o público procura pelo que ele faz.",
  },
  {
    icon: <PiDownloadSimpleBold />,
    text: "Mais downloads: a ficha otimizada transforma quem vê em quem instala.",
  },
  {
    icon: <PiTrendUpBold />,
    text: "Menos dependência de Ads: visibilidade orgânica que reduz o custo de aquisição.",
  },
];

const differentials = [
  {
    icon: <PiMagnifyingGlassBold />,
    title: "Pesquisa de palavras-chave",
    text: "Termos reais que o seu público busca na loja, com base em dado, não em chute.",
  },
  {
    icon: <PiStorefrontBold />,
    title: "Regras de cada loja",
    text: "Otimização certa para App Store e Google Play, sem risco de punição por quebrar diretriz.",
  },
  {
    icon: <PiImageBold />,
    title: "Ícone e prints que convertem",
    text: "Elementos visuais focados em transformar quem vê a ficha em quem baixa o app.",
  },
  {
    icon: <PiTextAaBold />,
    title: "Copy da ficha",
    text: "Título e descrição claros, persuasivos e dentro do limite de caracteres de cada loja.",
  },
  {
    icon: <PiChartBarBold />,
    title: "Decisão por dado",
    text: "Impressões, downloads e conversão medidos para melhorar a ficha continuamente.",
  },
  {
    icon: <PiRocketLaunchBold />,
    title: "Orgânico + lançamento",
    text: "Uma base de ASO pronta para potencializar campanhas pagas e o lançamento do app.",
  },
];

const methodSteps = [
  {
    title: "Análise & Concorrência",
    description:
      "Estudo o seu app e os concorrentes na loja para entender onde dá para ganhar visibilidade e downloads.",
  },
  {
    title: "Palavras-chave",
    description:
      "Pesquiso os termos que o seu público realmente busca e defino em quais vale a pena posicionar o app.",
  },
  {
    title: "Título & Descrição",
    description:
      "Escrevo o texto da ficha com as palavras-chave certas, claro e persuasivo, dentro das regras da loja.",
  },
  {
    title: "Ícone & Prints",
    description:
      "Ajusto ou oriento o ícone e as imagens da ficha para chamar atenção e mostrar o valor do app.",
  },
  {
    title: "Publicação nas lojas",
    description:
      "Aplico as mudanças na App Store e na Google Play, respeitando as diretrizes de cada plataforma.",
  },
  {
    title: "Medição & Ajuste",
    description:
      "Acompanho impressões, downloads e conversão e refino os elementos para melhorar o resultado.",
  },
];

const trust = [
  { value: "App Store & Play", label: "as duas lojas" },
  { value: "Orgânico", label: "menos dependência de Ads" },
  { value: "2+ anos", label: "de experiência" },
];

export default function AsoPage() {
  return (
    <ServicePage
      eyebrow="SEO das lojas de app"
      headline="Seu app achado e baixado nas lojas"
      subheadline="Otimizo sua página na App Store e Google Play para aparecer nas buscas e converter mais downloads — sem depender só de anúncio."
      description="Faço a otimização (ASO) da ficha do seu app: título, descrição, palavras-chave, ícone e prints. Mais gente encontra seu app na busca da loja e mais visitantes viram download — visibilidade orgânica, sem depender só de mídia paga."
      heroImage={{ src: "/CriacaoDeSites/aso.png", alt: "ASO: Otimização para App Store e Google Play" }}
      ctaPrimary="Quero mais downloads"
      ctaNote="Consultoria gratuita · resposta em até 24h · sem compromisso"
      trust={trust}
      quote="App bom que ninguém acha não é baixado. ASO é o que faz a loja mostrar o seu app para quem já está procurando por ele."
      infoParagraphs={[
        "ASO é o SEO das lojas: assim como o Google, a App Store e a Google Play têm busca. Otimizo título, descrição e palavras-chave para o seu app aparecer quando alguém procura pelo que ele resolve.",
        "Não basta aparecer: a pessoa precisa baixar. Trabalho o ícone, os prints e os primeiros segundos da ficha para transformar quem vê em quem instala, e acompanho os números para melhorar com o tempo.",
      ]}
      featuresHeading="O que eu otimizo"
      features={features}
      benefits={benefits}
      ctaMid="Quero um orçamento"
      diffHeading="Diferenciais do ASO"
      differentials={differentials}
      methodHeading="Da busca ao download"
      methodSubtitle="Mais gente achando seu app"
      methodSteps={methodSteps}
      faqHeading="Dúvidas sobre ASO"
      faqItems={faqItems}
    />
  );
}
