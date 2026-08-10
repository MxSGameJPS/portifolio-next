import ServicePage from "../_services/ServicePage";
import { faqItems } from "./data";

const features = [
  { title: "Catálogo e experiência de compra", description: "Categorias, busca, produto, variações e informações são organizados para reduzir dúvida e deixar o caminho até o carrinho mais direto." },
  { title: "Carrinho e checkout próprios", description: "Fluxo de compra adaptado às regras da operação, com menos etapas desnecessárias e integração aos meios de pagamento definidos pelo negócio." },
  { title: "Pix, cartão e confirmação automática", description: "Integrações com provedores de pagamento permitem confirmar transações e atualizar pedidos sem depender de conferência manual." },
  { title: "Frete e logística", description: "Cálculo por CEP, regras de entrega e integração com serviços logísticos podem entrar no checkout de acordo com a operação real." },
  { title: "Painel de produtos e pedidos", description: "Cadastro, preço, estoque, promoção e status de pedido ficam disponíveis em uma área administrativa desenhada para a rotina da loja." },
  { title: "ERP e canais conectados", description: "Bling, marketplaces, serviços fiscais e outros sistemas podem compartilhar estoque e pedidos para reduzir duplicidade operacional." },
];

const benefits = [
  { text: "Uma loja que pode acompanhar regras comerciais próprias sem ficar limitada ao tema de uma plataforma." },
  { text: "Checkout, pagamento, estoque e operação conectados dentro da mesma experiência de venda." },
  { text: "Código e arquitetura que permitem evoluir a loja como produto digital ao longo do tempo." },
];

const differentials = [
  { title: "Regra comercial sob medida", text: "Atacado, varejo, cupons, faixas de preço, promoções e condições podem acompanhar o modelo real da empresa." },
  { title: "Performance na vitrine", text: "Imagens, renderização e navegação são tratadas para não transformar catálogo grande em experiência lenta." },
  { title: "Checkout integrado", text: "Pagamento e pedido conversam diretamente, reduzindo conferência manual e inconsistência de status." },
  { title: "Operação conectada", text: "ERP, estoque, fiscal, logística e comunicação podem compartilhar o mesmo fluxo conforme a necessidade do negócio." },
  { title: "Dados para decisão", text: "Eventos e relatórios ajudam a enxergar comportamento de compra, abandono e desempenho das ações comerciais." },
  { title: "Loja como ativo próprio", text: "A experiência pode ser evoluída sem ficar presa ao limite visual e funcional de um construtor genérico." },
];

const methodSteps = [
  { title: "Modelo de venda", description: "Mapeio catálogo, público, regras comerciais, meios de pagamento, estoque e logística." },
  { title: "Jornada de compra", description: "Organizo descoberta, produto, carrinho e checkout para reduzir atrito entre intenção e pagamento." },
  { title: "Arquitetura e integrações", description: "Defino dados, painel, pagamento, frete e conexão com ERP ou serviços externos." },
  { title: "Desenvolvimento", description: "Construo a vitrine e a operação administrativa como partes do mesmo produto." },
  { title: "Testes de ponta a ponta", description: "Valido variações, carrinho, pagamento, frete, pedido e comportamento em diferentes telas." },
  { title: "Lançamento e evolução", description: "Publico a loja e deixo a base preparada para acompanhar catálogo, campanhas e novas regras de negócio." },
];

export default function EcommercePage() {
  return (
    <ServicePage
      eyebrow="E-COMMERCE"
      headline="Uma operação de venda digital construída em torno do seu negócio."
      subheadline="Da vitrine ao pagamento, com catálogo, checkout, logística e gestão trabalhando como um único produto."
      description="Desenvolvo lojas virtuais sob medida para operações que precisam controlar a experiência de compra, as regras comerciais e as integrações sem ficar presas a uma plataforma genérica."
      ctaPrimary="Conversar sobre a loja"
      quote="E-commerce não termina no botão comprar. A experiência só funciona quando pedido, pagamento, estoque e entrega conversam."
      infoParagraphs={[
        "Uma loja virtual é interface para o cliente e sistema operacional para quem vende. Por isso catálogo, carrinho e checkout precisam nascer conectados ao que acontece depois do pagamento.",
        "Quando existem regras específicas de atacado, estoque, ERP ou logística, uma arquitetura própria permite que a tecnologia acompanhe a empresa em vez de obrigar a empresa a acompanhar a ferramenta.",
      ]}
      featuresHeading="As peças que conectam experiência de compra e operação."
      features={features}
      benefits={benefits}
      diffHeading="A loja deixa de ser um tema e passa a funcionar como produto."
      differentials={differentials}
      methodHeading="Do catálogo à primeira compra processada de ponta a ponta."
      methodSubtitle="Venda e operação desenhadas dentro do mesmo fluxo."
      methodSteps={methodSteps}
      technologies={["Next.js", "React", "Node.js", "PostgreSQL", "Mercado Pago", "Stripe", "Bling ERP", "Cloudinary", "APIs de frete"]}
      relatedCase={{
        name: "Smile Pet Shop",
        category: "E-commerce · B2B & B2C",
        image: "/Projetos/SmilePetShop.png",
        href: "/portfolio/1",
      }}
      faqHeading="O que costuma precisar de definição antes de construir uma loja própria."
      faqItems={faqItems}
    />
  );
}
