"use client";

import ServicePage from "../_services/ServicePage";
import { faqItems } from "./data";
import {
  PiCpuBold,
  PiLockKeyBold,
  PiPlugsBold,
  PiChartBarBold,
  PiCodeBold,
  PiShoppingCartBold,
  PiCreditCardBold,
  PiStorefrontBold,
  PiDeviceMobileBold,
} from "react-icons/pi";

const features = [
  {
    title: "Checkout rápido, menos carrinho abandonado",
    description:
      "Menos etapas até o pagamento. Quanto mais curto o caminho entre escolher e pagar, menos gente desiste na hora de comprar.",
  },
  {
    title: "Pix, cartão e boleto",
    description:
      "Integração com Mercado Pago, Stripe ou Pagar.me: o cliente paga do jeito que preferir, com segurança e confirmação automática.",
  },
  {
    title: "Frete calculado automático",
    description:
      "Cálculo por CEP com Correios e Melhor Envio direto no carrinho, sem surpresa no valor da entrega no fim da compra.",
  },
  {
    title: "Você gerencia produtos e pedidos",
    description:
      "Painel próprio para cadastrar produto, preço e promoção e acompanhar cada pedido, sem depender de programador para mudar nada.",
  },
  {
    title: "Vende bem no celular",
    description:
      "A maioria compra pelo telefone. Loja e checkout ajustados para tela pequena, do banner ao botão de pagar.",
  },
  {
    title: "Integra com ERP e marketplaces",
    description:
      "Conecto a loja com Bling, nota fiscal e marketplaces para estoque e pedidos ficarem organizados em um lugar só.",
  },
];

const benefits = [
  {
    icon: <PiShoppingCartBold />,
    text: "Loja sua, sem mensalidade de plataforma nem comissão por venda.",
  },
  {
    icon: <PiCreditCardBold />,
    text: "Pagamento integrado e seguro: Pix, cartão e boleto prontos no lançamento.",
  },
  {
    icon: <PiDeviceMobileBold />,
    text: "Feita para vender no celular, onde a maior parte dos clientes compra.",
  },
];

const differentials = [
  {
    icon: <PiCpuBold />,
    title: "Tecnologia atual",
    text: "React e Next.js: loja que abre na hora. Site lento espanta comprador antes mesmo de ver o produto.",
  },
  {
    icon: <PiLockKeyBold />,
    title: "Pagamento seguro",
    text: "Checkout com criptografia e provedores confiáveis. Os dados do cartão nunca passam soltos pela sua loja.",
  },
  {
    icon: <PiStorefrontBold />,
    title: "Do seu jeito",
    text: "As regras são as suas: atacado e varejo, cupom, frete grátis acima de um valor. Não é tema pronto revendido.",
  },
  {
    icon: <PiPlugsBold />,
    title: "Integra com o que você usa",
    text: "Bling, Mercado Pago, marketplaces e WhatsApp conversando com a loja, sem trabalho manual duplicado.",
  },
  {
    icon: <PiChartBarBold />,
    title: "Você enxerga as vendas",
    text: "Relatórios de pedidos e de comportamento para decidir promoção e estoque com base em número, não em achismo.",
  },
  {
    icon: <PiCodeBold />,
    title: "O código é seu",
    text: "Entrego a loja completa no fim. Sem aluguel de plataforma e sem ficar refém de mensalidade.",
  },
];

const methodSteps = [
  {
    title: "Conversa & Catálogo",
    description:
      "Entendo seus produtos, seu público e suas regras de venda. Organizamos o catálogo e definimos as formas de pagamento e entrega.",
  },
  {
    title: "Design da loja",
    description:
      "Crio a vitrine com a cara da sua marca: página de produto, carrinho e checkout pensados para o cliente comprar sem dúvida.",
  },
  {
    title: "Desenvolvimento",
    description:
      "Coloco a loja de pé com catálogo, carrinho e painel de gestão, tudo rápido e preparado para o celular.",
  },
  {
    title: "Pagamento & Frete",
    description:
      "Integro Pix, cartão e boleto e o cálculo de frete por CEP, com confirmação automática de pagamento e status do pedido.",
  },
  {
    title: "Testes de compra",
    description:
      "Simulo compras de verdade em vários aparelhos para garantir que pagamento, frete e pedido funcionem antes de abrir para o público.",
  },
  {
    title: "Lançamento & Acompanhamento",
    description:
      "Publico a loja no ar em ambiente seguro e acompanho os primeiros pedidos, ajustando o que for preciso para vender melhor.",
  },
];

const trust = [
  { value: "Pix & Cartão", label: "checkout integrado" },
  { value: "Sem mensalidade", label: "de plataforma" },
  { value: "2+ anos", label: "de experiência" },
];

export default function EcommercePage() {
  return (
    <ServicePage
      eyebrow="Loja virtual sob medida"
      headline="Uma loja virtual feita para vender"
      subheadline="Checkout rápido, pagamento fácil e sua loja funcionando no celular — para transformar visita em venda."
      description="Crio sua loja virtual do zero: catálogo, carrinho, Pix e cartão, cálculo de frete e um painel para você gerenciar produtos e pedidos. Sem mensalidade de plataforma — a loja é sua."
      heroImage={{ src: "/CriacaoDeSites/ecommerce.png", alt: "Criação de Loja Virtual e E-commerce" }}
      ctaPrimary="Quero minha loja"
      ctaNote="Orçamento gratuito · resposta em até 24h · sem compromisso"
      ctaSecondary={{ href: "/portfolio", label: "Ver projetos" }}
      trust={trust}
      quote="Loja bonita não vende sozinha. Vende quem tira o atrito do caminho: achar o produto, confiar e pagar em poucos toques."
      infoParagraphs={[
        "Sua loja não é um template alugado. Monto do zero o catálogo, o carrinho e o checkout na sua identidade, com Pix, cartão e boleto integrados e cálculo de frete automático por CEP.",
        "Você gerencia tudo por um painel simples: cadastra produto, acompanha pedido e controla estoque. E, se quiser, integro com Bling, Mercado Pago e marketplaces para centralizar a operação.",
      ]}
      featuresHeading="O que a sua loja tem"
      features={features}
      benefits={benefits}
      ctaMid="Quero um orçamento"
      diffHeading="Diferenciais da sua loja"
      differentials={differentials}
      methodHeading="Da vitrine à venda"
      methodSubtitle="Loja pronta para receber o primeiro pedido"
      methodSteps={methodSteps}
      faqHeading="Dúvidas sobre e-commerce"
      faqItems={faqItems}
    />
  );
}
