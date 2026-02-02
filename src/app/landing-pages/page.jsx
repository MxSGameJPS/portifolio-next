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
} from "react-icons/pi";

export default function LandingPagesPage() {
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
      title: "Design de Alta Conversão",
      description:
        "Layouts estrategicamente desenhados para guiar o visitante até a compra ou cadastro, utilizando princípios de neurodesign e psicologia das cores.",
    },
    {
      title: "Velocidade Relâmpago",
      description:
        "Páginas otimizadas para carregar em milissegundos. Essencial para manter o custo por clique (CPC) baixo e melhorar o índice de qualidade no Google Ads.",
    },
    {
      title: "Copywriting Persuasivo",
      description:
        "Textos que vendem. Utilizamos gatilhos mentais e storytelling para conectar com a dor do seu cliente e apresentar sua solução como a única escolha lógica.",
    },
    {
      title: "Mobile Friendly & Responsivo",
      description:
        "Mais de 80% do tráfego pago vem do celular. Nossas páginas oferecem uma experiência impecável em qualquer dispositivo.",
    },
    {
      title: "Rastreamento Avançado",
      description:
        "Configuração completa de Pixel do Facebook, Tag Manager e Google Analytics (GA4) para que você saiba exatamente de onde vêm suas conversões.",
    },
    {
      title: "Testes A/B Ready",
      description:
        "Estrutura preparada para duplicar e testar variações de headline, cores e ofertas, permitindo otimização contínua das suas campanhas.",
    },
    {
      title: "Integração com CRM",
      description:
        "Conectamos sua Landing Page diretamente ao seu CRM (RD Station, ActiveCampaign, Salesforce) ou planilha para automação de leads.",
    },
  ];

  const benefits = [
    {
      icon: <PiRocketLaunchBold />,
      text: "Aumento real nas taxas de conversão de leads",
    },
    {
      icon: <PiShieldCheckBold />,
      text: "Instalação de Pixels e Tags de rastreamento inclusa",
    },
    {
      icon: <PiMagnifyingGlassBold />,
      text: "Otimização SEO para buscas orgânicas locais",
    },
  ];

  const differentials = [
    {
      icon: <PiCpuBold />,
      title: "Performance Extrema",
      text: "Utilizamos tecnologias modernas (Next.js/React) ou HTML/CSS puro para garantir pontuação máxima no Google PageSpeed.",
    },
    {
      icon: <PiDatabaseBold />,
      title: "Dados Precisos",
      text: "Não 'chutamos' o design. Baseamos cada elemento na análise de dados e comportamento do usuário para maximizar resultados.",
    },
    {
      icon: <PiCodeBold />,
      title: "Código Limpo",
      text: "Evitamos construtores de arrastar-e-soltar pesados (como alguns plugins de WP) que deixam seu anúncio mais caro.",
    },
    {
      icon: <PiLockKeyBold />,
      title: "Segurança Total",
      text: "Certificado SSL incluso e proteção contra ataques, garantindo a confiança do visitante ao deixar seus dados.",
    },
    {
      icon: <PiPlugsBold />,
      title: "Conexão Universal",
      text: "Integramos com qualquer ferramenta de E-mail Marketing, WhatsApp ou Gateway de Pagamento que você utilize.",
    },
    {
      icon: <PiChartBarBold />,
      title: "Foco no ROI",
      text: "Nosso objetivo não é apenas entregar uma página bonita, mas sim uma ferramenta que coloque dinheiro no seu bolso.",
    },
  ];

  const methodSteps = [
    {
      title: "Briefing Estratégico",
      description:
        "Entendemos sua oferta, público-alvo e objetivos da campanha para definir a melhor estrutura de persuasão.",
    },
    {
      title: "Copywriting & Estrutura",
      description:
        "Desenvolvemos os textos e a hierarquia da informação, focando em quebra de objeções e benefícios claros.",
    },
    {
      title: "Design UI de Alto Impacto",
      description:
        "Criamos o visual da página, alinhado à sua marca, mas com foco total na usabilidade e conversão.",
    },
    {
      title: "Desenvolvimento Otimizado",
      description:
        "Programamos a página garantindo leveza e velocidade, aplicando as melhores práticas de SEO técnico.",
    },
    {
      title: "Configuração de Tags",
      description:
        "Instalamos e testamos todos os pixels de rastreamento (Meta, Google, TikTok) para garantir a mensuração correta.",
    },
    {
      title: "Homologação & Testes",
      description:
        "Verificamos a página em diversos dispositivos e navegadores para garantir que tudo funcione perfeitamente.",
    },
    {
      title: "Entrega & Suporte",
      description:
        "Publicamos a página e oferecemos suporte para eventuais ajustes durante o início das suas campanhas.",
    },
  ];

  const faqItems = [
    {
      question: "Quanto tempo leva para ficar pronta?",
      answer:
        "Landing Pages são projetos ágeis. Geralmente entregamos a primeira versão em 5 a 10 dias úteis após o recebimento de todo o material e briefing.",
    },
    {
      question: "Eu posso alterar os textos depois?",
      answer:
        "Sim! Podemos construir a página de forma que você tenha autonomia para editar textos e imagens através de um painel administrativo simples, se desejar.",
    },
    {
      question: "A página serve para Google Ads e Facebook Ads?",
      answer:
        "Com certeza. Nossas páginas são desenvolvidas especificamente para ter um Índice de Qualidade alto no Google e carregar rápido no Facebook, baixando seus custos.",
    },
    {
      question: "Vocês escrevem os textos (Copy)?",
      answer:
        "Sim, temos especialistas em Copywriting que podem criar textos persuasivos para sua oferta, ou podemos revisar e adaptar o material que você já possui.",
    },
    {
      question: "Preciso pagar mensalidade?",
      answer:
        "Não. O desenvolvimento da Landing Page é um pagamento único. Você só terá os custos normais de hospedagem e domínio (que podemos ajudar a configurar).",
    },
    {
      question: "Vocês fazem a gestão do tráfego (anúncios)?",
      answer:
        "Nosso foco principal é o desenvolvimento da página de alta conversão. Porém, temos parceiros de confiança para indicar caso você precise de gestão de tráfego.",
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
                src="/CriacaoDeSites/landingpage.png" // Using same placeholder for now, user might want to change
                alt="Landing Pages de Alta Conversão"
                width={500}
                height={500}
                className={styles.heroImage}
                priority
              />
            </div>

            {/* Right: Content */}
            <div className={styles.content}>
              <h1 className={styles.headline}>
                LANDING PAGES DE ALTA CONVERSÃO
              </h1>
              <h2 className={styles.subHeadline}>
                Transforme visitantes em clientes com páginas otimizadas para
                vender.
              </h2>
              <p className={styles.description}>
                Criamos Landing Pages estratégicas, focadas em resultados.
                Design persuasivo, copywriters especialistas e velocidade máxima
                para garantir que cada clique nos seus anúncios se torne uma
                oportunidade real de negócio.
              </p>

              <a href="#contato" className={styles.ctaButton}>
                QUERO VENDER MAIS <PiArrowUpRightBold />
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
                A primeira impressão é a que fica. Sua Landing Page é o seu
                melhor vendedor trabalhando 24 horas por dia. Ela não pode
                falhar.
              </p>
            </div>

            {/* Right: Detailed Text */}
            <div className={styles.infoContent}>
              <p className={styles.infoParagraph}>
                Não basta ser bonita, tem que converter. Nossas páginas são
                desenvolvidas com base em dados, psicologia de vendas e UX,
                guiando o usuário inequivocamente até a ação desejada, seja uma
                compra ou um cadastro.
              </p>
              <p className={styles.infoParagraph}>
                Esqueça páginas lentas que fazem você perder dinheiro em
                anúncios. Entregamos performance de elite, essenciais para
                campanhas de Google Ads e Facebook Ads, garantindo que você
                aproveite ao máximo seu orçamento de marketing.
              </p>
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className={styles.featuresSection}>
          <div className={styles.featuresContainer}>
            <h2 className={styles.featuresTitle}>
              PRINCIPAIS CARACTERÍSTICAS<span>.</span>
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
              QUERO UMA LANDING PAGE <PiArrowUpRightBold />
            </a>
          </div>
        </section>

        {/* DIFFERENTIALS SECTION */}
        <section className={styles.differentialsSection}>
          <div className={styles.differentialsContainer}>
            <h2 className={styles.differentialsTitle}>
              DIFERENCIAIS TÉCNICOS<span>.</span>
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
              PROCESSO COMPROVADO<span>.</span>
            </h2>
            <span className={styles.methodSubtitle}>
              FOCO TOTAL EM CONVERSÃO
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
