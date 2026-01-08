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
  PiMagnifyingGlassBold,
  PiChartLineUpBold,
  PiStarBold,
  PiTrophyBold,
  PiTargetBold,
  PiImageBold,
  PiTextTBold,
  PiGraphBold,
  PiGlobeHemisphereWestBold,
  PiUsersThreeBold,
} from "react-icons/pi";

export default function AsoPage() {
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
      title: "Pesquisa de Palavras-Chave",
      description:
        "Identificamos os termos exatos que seu público-alvo utiliza para buscar aplicativos na App Store e Google Play, garantindo que você seja encontrado.",
    },
    {
      title: "Otimização de Título e Subtítulo",
      description:
        "Criamos nomes e descrições curtas magnéticas que não só contêm as palavras-chave vitais, mas também convencem o usuário a clicar.",
    },
    {
      title: "Design de Screenshots e Ícone",
      description:
        "O visual vende. Produzimos screenshots profissionais, vídeos de preview e ícones otimizados para maximizar a taxa de conversão (instalação).",
    },
    {
      title: "Gestão de Reviews e Ratings",
      description:
        "Estratégias para incentivar avaliações positivas (5 estrelas) e gestão de respostas para feedback negativo, melhorando a reputação do app.",
    },
    {
      title: "Análise de Concorrência",
      description:
        "Monitoramos o que seus concorrentes estão fazendo, quais keywords eles usam e onde estão falhando, para você sair na frente.",
    },
    {
      title: "Testes A/B",
      description:
        "Realizamos experimentos controlados trocando ícones, textos e imagens para descobrir cientificamente qual versão traz mais downloads.",
    },
    {
      title: "Localização (Internacionalização)",
      description:
        "Adaptamos seu ASO para diferentes idiomas e culturas, permitindo que seu aplicativo escale globalmente.",
    },
  ];

  const benefits = [
    {
      icon: <PiMagnifyingGlassBold />,
      text: "Aumente drasticamente a visibilidade orgânica do seu app",
    },
    {
      icon: <PiChartLineUpBold />,
      text: "Reduza o Custo por Instalação (CPI) de campanhas pagas",
    },
    {
      icon: <PiTargetBold />,
      text: "Atraia usuários qualificados que realmente buscam sua solução",
    },
  ];

  const differentials = [
    {
      icon: <PiTrophyBold />,
      title: "Foco em ROI",
      text: "Não buscamos apenas 'rankings por vaidade'. Nosso foco é aumentar o número de downloads qualificados e a receita do app.",
    },
    {
      icon: <PiTextTBold />,
      title: "Copywriting Persuasivo",
      text: "Escrevemos descrições que utilizam gatilhos mentais para converter visitantes casuais em usuários ativos.",
    },
    {
      icon: <PiGraphBold />,
      title: "Data Driven",
      text: "Utilizamos ferramentas premium de inteligência de mercado para basear cada decisão em dados reais de volume e dificuldade.",
    },
    {
      icon: <PiImageBold />,
      title: "Design de Conversão",
      text: "Nossos designers são especialistas em criar assets visuais (telas) otimizados especificamente para as telas pequenas das lojas.",
    },
    {
      icon: <PiGlobeHemisphereWestBold />,
      title: "Expansão Global",
      text: "Experiência em posicionar aplicativos em múltiplos mercados e idiomas simultaneamente.",
    },
    {
      icon: <PiUsersThreeBold />,
      title: "Retenção Focus",
      text: "Otimizamos não só para o download, mas alinhamos a expectativa para garantir que o usuário não desinstale logo depois.",
    },
  ];

  const methodSteps = [
    {
      title: "Auditoria Inicial",
      description:
        "Analisamos a situação atual do seu app, detectando falhas de indexação e oportunidades imediatas de melhoria.",
    },
    {
      title: "Keyword Map",
      description:
        "Criamos um mapa extenso de palavras-chave, priorizando as de alto volume e baixa competição.",
    },
    {
      title: "Otimização On-Metadata",
      description:
        "Reescrevemos Título, Subtítulo, Descrição Curta e Longa e campos de Keywords (iOS) com as palavras selecionadas.",
    },
    {
      title: "Otimização Visual",
      description:
        "Criação e upload dos novos screenshots e ícone, focando nos benefícios principais do app.",
    },
    {
      title: "Implementação e Lançamento",
      description:
        "Publicamos as atualizações nas lojas e acompanhamos a indexação dos novos termos.",
    },
    {
      title: "Monitoramento Mensal",
      description:
        "ASO não é algo que se faz uma vez só. Monitoramos os rankings e ajustamos a estratégia continuamente.",
    },
  ];

  const faqItems = [
    {
      question: "O que é ASO?",
      answer:
        "ASO (App Store Optimization) é o 'SEO para Aplicativos'. É o processo de melhorar a visibilidade do seu app nas lojas (Google Play e App Store) para ganhar mais downloads orgânicos (gratuitos).",
    },
    {
      question: "Quanto tempo demora para ver resultados?",
      answer:
        "Geralmente, as alterações de texto indexam em 2 a 4 semanas. O impacto visual na conversão pode ser medido quase imediatamente após a atualização.",
    },
    {
      question: "ASO substitui anúncios pagos (Ads)?",
      answer:
        "Não, eles se complementam. O ASO reduz o custo dos seus anúncios, pois um app bem otimizado converte melhor o tráfego que vem da publicidade.",
    },
    {
      question: "Serve para jogos também?",
      answer:
        "Sim! Para jogos, a otimização visual (ícone e vídeo) é ainda mais crítica e temos estratégias específicas para esse nicho.",
    },
    {
      question: "Vocês garantem a primeira posição?",
      answer:
        "Niguém pode garantir posições específicas pois os algoritmos das lojas são secretos e mudam. Garantimos a aplicação das melhores práticas e o aumento significativo da visibilidade.",
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
                src="/CriacaoDeSites/aso.png" // Placeholder
                alt="App Store Optimization ASO"
                width={500}
                height={500}
                className={styles.heroImage}
                priority
              />
            </div>

            {/* Right: Content */}
            <div className={styles.content}>
              <h1 className={styles.headline}>ASO - APP STORE OPTIMIZATION</h1>
              <h2 className={styles.subHeadline}>
                Faça seu aplicativo ser encontrado por milhões de usuários e
                multiplique seus downloads orgânicos.
              </h2>
              <p className={styles.description}>
                Ter um app incrível não adianta se ninguém o encontra.
                Utilizamos técnicas avançadas de dados e psicologia para
                posicionar seu aplicativo no topo das buscas da Google Play e
                App Store.
              </p>

              <a href="#contato" className={styles.ctaButton}>
                QUERO MAIS DOWNLOADS <PiArrowUpRightBold />
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
                65% de todos os downloads de aplicativos vêm de buscas orgânicas
                nas lojas. Se você não faz ASO, está deixando mais da metade do
                seu público na mesa para a concorrência.
              </p>
            </div>

            {/* Right: Detailed Text */}
            <div className={styles.infoContent}>
              <p className={styles.infoParagraph}>
                O mercado de aplicativos está saturado. Para se destacar, você
                precisa mais do que sorte; precisa de estratégia. O ASO é a
                ciência de entender o algoritmo das lojas e o comportamento do
                usuário para hackear o crescimento do seu app.
              </p>
              <p className={styles.infoParagraph}>
                Nossa metodologia ataca em duas frentes: **Visibilidade** (fazer
                o app aparecer para as palavras-chave certas) e **Conversão**
                (convencer quem viu a baixar o app através de visuais
                impactantes).
              </p>
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className={styles.featuresSection}>
          <div className={styles.featuresContainer}>
            <h2 className={styles.featuresTitle}>
              COMO OTIMIZAMOS<span>.</span>
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
              ALAVANCAR MEUS RANKINGS <PiArrowUpRightBold />
            </a>
          </div>
        </section>

        {/* DIFFERENTIALS SECTION */}
        <section className={styles.differentialsSection}>
          <div className={styles.differentialsContainer}>
            <h2 className={styles.differentialsTitle}>
              POR QUE INVESTIR EM ASO?<span>.</span>
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
              ESTRATÉGIA DE CRESCIMENTO<span>.</span>
            </h2>
            <span className={styles.methodSubtitle}>NOSSA METODOLOGIA</span>

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
