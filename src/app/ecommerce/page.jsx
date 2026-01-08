"use client";

import { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Contact from "../../components/Contact/Contact";
import styles from "./page.module.css";
import Image from "next/image";
import {
  PiArrowUpRightBold,
  PiCaretDownBold,
  PiRocketLaunchBold,
  PiShieldCheckBold,
  PiMagnifyingGlassBold,
  PiCpuBold,
  PiDatabaseBold,
  PiLockKeyBold,
  PiCodeBold,
  PiPlugsBold,
  PiChartBarBold,
  PiShoppingCartBold,
  PiCreditCardBold,
  PiTagBold,
} from "react-icons/pi";

export default function EcommercePage() {
  const [openIndex, setOpenIndex] = useState(null);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFeature = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const features = [
    {
      title: "Gestão Completa de Produtos",
      description:
        "Painel intuitivo para cadastrar produtos simples ou com variações (cor, tamanho), controlar estoque e gerenciar preços promocionais.",
    },
    {
      title: "Check-out Transparente",
      description:
        "Otimizado para conversão. O cliente finaliza a compra sem sair do seu site, aumentando a confiança e reduzindo o abandono de carrinho.",
    },
    {
      title: "Cálculo de Frete Automático",
      description:
        "Integração direta com Correios, Melhor Envio e transportadoras privadas para oferecer as melhores opções de entrega em tempo real.",
    },
    {
      title: "Múltiplos Meios de Pagamento",
      description:
        "Aceite PIX, Cartão de Crédito (com parcelamento) e Boleto. Integração com Mercado Pago, Stripe, Pagar.me ou gateway de sua preferência.",
    },
    {
      title: "Recuperação de Carrinho",
      description:
        "Ferramentas automáticas para enviar e-mails ou mensagens para clientes que desistiram da compra no último momento.",
    },
    {
      title: "Cupons e Promoções",
      description:
        "Crie campanhas de desconto, frete grátis ou 'compre junto' para aumentar o ticket médio da sua loja.",
    },
    {
      title: "Painel de Resultados",
      description:
        "Acompanhe suas vendas diárias, produtos mais vendidos e faturamento em tempo real com relatórios detalhados.",
    },
  ];

  const benefits = [
    {
      icon: <PiShoppingCartBold />,
      text: "Sua loja aberta 24 horas por dia, 7 dias por semana",
    },
    {
      icon: <PiCreditCardBold />,
      text: "Automatização total do processo de venda e recebimento",
    },
    {
      icon: <PiRocketLaunchBold />,
      text: "Escalabilidade para vender para todo o Brasil (ou mundo)",
    },
  ];

  const differentials = [
    {
      icon: <PiCpuBold />,
      title: "Performance Extrema",
      text: "Lojas desenvolvidas com Next.js carregam instantaneamente. Diferente de plataformas prontas lentas, aqui a velocidade é prioridade.",
    },
    {
      icon: <PiLockKeyBold />,
      title: "Segurança Bancária",
      text: "Certificados SSL de alto nível e conformidade com PCI-DSS para garantir que os dados de pagamento estejam blindados.",
    },
    {
      icon: <PiCodeBold />,
      title: "Sem Taxas por Venda",
      text: "O lucro é 100% seu. Não cobramos comissões sobre suas vendas, ao contrário de plataformas como Shopify ou marketplaces.",
    },
    {
      icon: <PiDatabaseBold />,
      title: "Integração via API",
      text: "Conectamos sua loja virtual a qualquer ERP (Bling, Tiny), CRM ou sistema de logística via APIs RESTful personalizadas.",
    },
    {
      icon: <PiTagBold />,
      title: "SEO Técnico Avançado",
      text: "Controle total sobre o código permite otimizações de SEO que plataformas prontas não permitem, colocando sua loja no topo do Google.",
    },
    {
      icon: <PiPlugsBold />,
      title: "Liberdade Total",
      text: "Sem limitações de template. Crie regras de negócio, promoções e layouts exatamente como você imaginou, sem depender de plugins.",
    },
  ];

  const methodSteps = [
    {
      title: "Arquitetura de Dados",
      description:
        "Planejamos a estrutura do banco de dados e APIs para suportar seu catálogo e fluxo de vendas com escalabilidade.",
    },
    {
      title: "UI/UX Personalizado",
      description:
        "Desenhamos um layout exclusivo para sua marca, focado na jornada do seu cliente, sem uso de templates genéricos.",
    },
    {
      title: "Desenvolvimento Full-Stack",
      description:
        "Codificamos o frontend (React/Next.js) e backend (Node.js) da sua loja, garantindo performance e funcionalidades sob medida.",
    },
    {
      title: "Integrações Financeiras",
      description:
        "Conectamos os gateways de pagamento e cálculo de frete diretamente no código, garantindo transações seguras e rápidas.",
    },
    {
      title: "Importação e Testes",
      description:
        "Realizamos a carga inicial de produtos e testes rigorosos de segurança e usabilidade em todos os dispositivos.",
    },
    {
      title: "Treinamento & Launch",
      description:
        "Ensinamos sua equipe a gerenciar o painel administrativo customizado e colocamos sua loja no ar com monitoramento total.",
    },
    {
      title: "Evolução Contínua",
      description:
        "Diferente de plataformas fechadas, aqui seu e-commerce pode evoluir infinitamente com novas features desenvolvidas sob demanda.",
    },
  ];

  const faqItems = [
    {
      question: "Qual plataforma vocês utilizam?",
      answer:
        "Não utilizamos plataformas prontas (como Shopify, WooCommerce ou Wix) que limitam seu crescimento. Desenvolvemos seu e-commerce do zero com tecnologia de ponta (Next.js e Node.js), garantindo performance máxima e liberdade total.",
    },
    {
      question: "Posso vender qualquer tipo de produto?",
      answer:
        "Sim! Como o desenvolvimento é sob medida, podemos criar regras para produtos físicos, digitais, assinaturas, agendamentos ou qualquer modelo de negócio específico.",
    },
    {
      question: "Como recebo o dinheiro das vendas?",
      answer:
        "Integramos diretamente com sua conta no gateway de pagamento (Mercado Pago, Pagar.me, Stripe). O dinheiro cai direto na sua conta, nossa agência não intermedeia valores.",
    },
    {
      question: "Preciso pagar mensalidade da plataforma?",
      answer:
        "Não! Diferente de plataformas alugadas, você não paga mensalidade pelo software. O código é seu. Você terá apenas os custos básicos de hospedagem (servidor).",
    },
    {
      question: "O site calcula o frete sozinho?",
      answer:
        "Sim. Desenvolvemos integrações diretas com APIs dos Correios, Melhor Envio e transportadoras, oferecendo cálculo preciso em tempo real.",
    },
    {
      question: "Eu consigo gerenciar a loja sozinho?",
      answer:
        "Com certeza. Criamos um Painel Administrativo exclusivo e super intuitivo para você cadastrar produtos, ver pedidos e gerenciar clientes sem precisar saber programação.",
    },
  ];

  return (
    <div className={styles.pageWrapper}>
      <Header />

      <main>
        {/* HERO SECTION */}
        <section className={styles.heroSection}>
          <div className={styles.container}>
            {/* Left: Image */}
            <div className={styles.imageContainer}>
              <Image
                src="/CriacaoDeSites/ecommerce.png" // Placeholder
                alt="Criação de Loja Virtual E-commerce"
                width={500}
                height={500}
                className={styles.heroImage}
                priority
              />
            </div>

            {/* Right: Content */}
            <div className={styles.content}>
              <h1 className={styles.headline}>E-COMMERCE & LOJAS VIRTUAIS</h1>
              <h2 className={styles.subHeadline}>
                Venda seus produtos para todo o Brasil 24 horas por dia com uma
                loja profissional.
              </h2>
              <p className={styles.description}>
                Desenvolvemos lojas virtuais completas, seguras e otimizadas
                para conversão. Tenha total controle sobre seu estoque, vendas e
                clientes em uma plataforma feita para crescer o seu faturamento.
              </p>

              <a href="#contato" className={styles.ctaButton}>
                MONTAR MINHA LOJA <PiArrowUpRightBold />
              </a>
            </div>
          </div>
        </section>

        {/* INFO SECTION */}
        <section className={styles.infoSection}>
          <div className={styles.infoContainer}>
            {/* Left: Quote Card */}
            <div className={styles.quoteCard}>
              <span className={styles.quoteIcon}>“</span>
              <p className={styles.quoteText}>
                O comércio eletrônico não é mais o futuro, é o presente. Não ter
                uma loja online hoje significa limitar o potencial de
                crescimento da sua marca apenas ao seu bairro.
              </p>
            </div>

            {/* Right: Detailed Text */}
            <div className={styles.infoContent}>
              <p className={styles.infoParagraph}>
                Uma loja virtual remove as barreiras geográficas do seu negócio.
                Nós entregamos uma ferramenta poderosa que automatiza vendas,
                cálculo de frete e pagamentos, permitindo que você foque no que
                importa: gerenciar seu negócio e despachar pedidos.
              </p>
              <p className={styles.infoParagraph}>
                Focamos na experiência de compra. Do momento que o cliente entra
                no site até o checkout, tudo é desenhado para transmitir
                confiança e incentivar a finalização da compra, seja no celular
                ou no computador.
              </p>
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className={styles.featuresSection}>
          <div className={styles.featuresContainer}>
            <h2 className={styles.featuresTitle}>
              FUNCIONALIDADES DE VENDA<span>.</span>
            </h2>

            <div className={styles.featuresList}>
              {features.map((feature, index) => {
                const isOpen = openIndex === index;
                return (
                  <div key={index} className={styles.featureWrapper}>
                    <div
                      className={`${styles.featureItem} ${
                        isOpen ? styles.active : ""
                      }`}
                      onClick={() => toggleFeature(index)}
                    >
                      <span className={styles.featureText}>
                        {feature.title}
                      </span>
                      <PiCaretDownBold
                        className={`${styles.featureIcon} ${
                          isOpen ? styles.rotate : ""
                        }`}
                      />
                    </div>
                    <div
                      className={`${styles.featureDescription} ${
                        isOpen ? styles.open : ""
                      }`}
                    >
                      <p className={styles.descText}>{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* BENEFITS SECTION */}
        <section className={styles.benefitsSection}>
          <div className={styles.benefitsGrid}>
            {benefits.map((benefit, index) => (
              <div key={index} className={styles.benefitCard}>
                <div className={styles.iconWrapper}>
                  <div className={styles.benefitIcon}>{benefit.icon}</div>
                </div>
                <p className={styles.benefitText}>{benefit.text}</p>
              </div>
            ))}
          </div>

          <div className={styles.centeredCtaContainer}>
            <a href="#contato" className={styles.ctaButton}>
              QUERO VENDER ONLINE <PiArrowUpRightBold />
            </a>
          </div>
        </section>

        {/* DIFFERENTIALS SECTION */}
        <section className={styles.differentialsSection}>
          <div className={styles.differentialsContainer}>
            <h2 className={styles.differentialsTitle}>
              ALTA PERFORMANCE<span>.</span>
            </h2>

            <div className={styles.diffGrid}>
              {differentials.map((diff, index) => (
                <div key={index} className={styles.diffCard}>
                  <div className={styles.diffIcon}>{diff.icon}</div>
                  <h3 className={styles.diffTitle}>{diff.title}</h3>
                  <p className={styles.diffText}>{diff.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* METHOD SECTION */}
        <section className={styles.methodSection}>
          <div className={styles.methodContainer}>
            <h2 className={styles.methodTitle}>
              CAMINHO PARA O SUCESSO<span>.</span>
            </h2>
            <span className={styles.methodSubtitle}>
              IMPLEMENTAÇÃO DE E-COMMERCE
            </span>

            <div className={styles.timeline}>
              {methodSteps.map((step, index) => (
                <div key={index} className={styles.timelineItem}>
                  <div className={styles.timelineNumber}>{index + 1}</div>
                  <div className={styles.timelineContent}>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.stepDesc}>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className={styles.faqSection}>
          <div className={styles.faqContainer}>
            <h2 className={styles.faqTitle}>
              PERGUNTAS FREQUENTES<span>.</span>
            </h2>

            <div className={styles.faqList}>
              {faqItems.map((item, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div key={index} className={styles.faqItem}>
                    <div
                      className={styles.faqQuestion}
                      onClick={() => toggleFaq(index)}
                    >
                      <span className={styles.questionText}>
                        {item.question}
                      </span>
                      <PiCaretDownBold
                        className={`${styles.faqIcon} ${
                          isOpen ? styles.rotate : ""
                        }`}
                      />
                    </div>
                    <div
                      className={`${styles.faqAnswer} ${
                        isOpen ? styles.open : ""
                      }`}
                    >
                      <p className={styles.answerText}>{item.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <Contact />
      </main>

      <Footer />
    </div>
  );
}
