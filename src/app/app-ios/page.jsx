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
  PiAppleLogoBold,
  PiDeviceMobileBold,
  PiStorefrontBold,
  PiPaintBucketBold,
  PiShieldCheckBold,
  PiRocketLaunchBold,
  PiMagicWandBold,
  PiCheckFatBold,
  PiFingerprintBold,
} from "react-icons/pi";

export default function AppIosPage() {
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
      title: "Desenvolvimento Nativo Swift",
      description:
        "Utilizamos a linguagem oficial da Apple (Swift) para garantir a máxima performance, fluidez e acesso a todas as APIs modernas do iOS.",
    },
    {
      title: "Human Interface Guidelines",
      description:
        "Respeitamos rigorosamente os guias de design da Apple para criar aplicativos que parecem uma extensão natural do sistema operacional.",
    },
    {
      title: "SwiftUI & UIKit",
      description:
        "Dominamos os frameworks visuais da Apple para criar interfaces responsivas, acessíveis e com animações suaves de 120Hz (ProMotion).",
    },
    {
      title: "Integração Apple Ecosystem",
      description:
        "Conectamos seu app com recursos exclusivos como FaceID, Apple Pay, Widgets na Home Screen e notificações interativas.",
    },
    {
      title: "Aprovação na App Store",
      description:
        "Conhecemos todos os critérios de revisão da Apple e preparamos seu aplicativo para ser aprovado sem rejeições ou retrabalho.",
    },
    {
      title: "Segurança de Dados e Privacidade",
      description:
        "Implementamos todas as exigências de privacidade da Apple (LGPD/GDPR compliance), garantindo a confiança do usuário.",
    },
    {
      title: "Testes em Devices Reais",
      description:
        "Validamos o funcionamento em iPhones de várias gerações para garantir que a experiência seja premium para todos.",
    },
  ];

  const benefits = [
    {
      icon: <PiAppleLogoBold />,
      text: "Atinga o público com maior poder aquisitivo e ticket médio",
    },
    {
      icon: <PiShieldCheckBold />,
      text: "Segurança e estabilidade reconhecidas mundialmente",
    },
    {
      icon: <PiMagicWandBold />,
      text: "Experiência de uso premium e refinada",
    },
  ];

  const differentials = [
    {
      icon: <PiPaintBucketBold />,
      title: "Design Premium",
      text: "Não fazemos apenas funcionar, fazemos ser bonito. Atenção obsessiva aos detalhes, alinhamentos e micro-interações.",
    },
    {
      icon: <PiRocketLaunchBold />,
      title: "Performance Nativa",
      text: "Otimizamos cada linha de código para garantir que o app abra instantaneamente e consuma o mínimo de bateria.",
    },
    {
      icon: <PiFingerprintBold />,
      title: "FaceID & TouchID",
      text: "Login biométrico para facilitar a vida do usuário e aumentar a segurança do acesso.",
    },
    {
      icon: <PiStorefrontBold />,
      title: "App Store Optimization",
      text: "Não basta publicar, precisa ser encontrado. Ajudamos a configurar sua página na loja para atrair mais downloads.",
    },
    {
      icon: <PiCheckFatBold />,
      title: "Código Seguro",
      text: "Evitamos bibliotecas de terceiros desnecessárias e seguimos as melhores práticas de segurança da Apple.",
    },
    {
      icon: <PiDeviceMobileBold />,
      title: "iPad & WatchOS",
      text: "Possibilidade de expandir seu aplicativo para rodar também no iPad e Apple Watch, ampliando o ecossistema.",
    },
  ];

  const methodSteps = [
    {
      title: "Discovery & UX",
      description:
        "Mapeamos a jornada do usuário focando nas convenções de navegação do iOS (TabBars, NavigationControllers).",
    },
    {
      title: "UI Design (Figma)",
      description:
        "Criação das telas seguindo o Human Interface Guidelines, com assets em alta resolução (Retina Display).",
    },
    {
      title: "Desenvolvimento Swift",
      description:
        "Programação da lógica e da interface utilizando Swift e Xcode, as ferramentas oficiais da Apple.",
    },
    {
      title: "Integração Backend",
      description:
        "Conexão segura com servidores e bancos de dados para tornar o aplicativo dinâmico.",
    },
    {
      title: "TestFlight (Beta)",
      description:
        "Disponibilização de uma versão de testes para você usar no seu próprio iPhone antes do lançamento.",
    },
    {
      title: "Publicação na App Store",
      description:
        "Geração de certificados, screenshots profissionais e submissão para a revisão da Apple.",
    },
  ];

  const faqItems = [
    {
      question: "Preciso ter um Mac para ter um app iOS?",
      answer:
        "Não, você não precisa. Nós desenvolvemos tudo. Você só precisa de uma conta de desenvolvedor na Apple (Apple Developer Program) que nós ajudamos a criar.",
    },
    {
      question: "Quanto custa a conta da Apple?",
      answer:
        "Atualmente a Apple cobra 99 dólares por ano para manter sua conta de desenvolvedor ativa e seus apps na loja.",
    },
    {
      question: "O app vai funcionar no iPad?",
      answer:
        "Por padrão, apps de iPhone rodam no iPad em modo de compatibilidade. Se desejar um layout exclusivo para a tela grande do iPad, podemos desenvolver como um adicional.",
    },
    {
      question: "Quanto tempo demora a aprovação da Apple?",
      answer:
        "A Apple é rigorosa. A revisão costuma levar de 24h a 48h. Se houver rejeição, nós corrigimos os pontos apontados e reenviamos sem custo adicional.",
    },
    {
      question: "Vocês dão manutenção depois?",
      answer:
        "Sim, oferecemos suporte técnico e atualizações evolutivas para acompanhar as novas versões do iOS que são lançadas todo ano.",
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
                src="/CriacaoDeSites/ios-dev.png" // Placeholder
                alt="Desenvolvimento de Apps iOS iPhone"
                width={500}
                height={500}
                className={styles.heroImage}
                priority
              />
            </div>

            {/* Right: Content */}
            <div className={styles.content}>
              <h1 className={styles.headline}>
                DESENVOLVIMENTO DE APPS IOS (IPHONE)
              </h1>
              <h2 className={styles.subHeadline}>
                Experiências mobile premium para o público mais exigente do
                mercado.
              </h2>
              <p className={styles.description}>
                Ter um aplicativo na App Store é um selo de qualidade para sua
                marca. Desenvolvemos aplicativos nativos para iPhone que unem
                design sofisticado, fluidez absoluta e segurança robusta,
                seguindo os altos padrões da Apple.
              </p>

              <a href="#contato" className={styles.ctaButton}>
                ORÇAR MEU APP IOS <PiArrowUpRightBold />
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
                Usuários de iPhone gastam, em média, 2x mais em aplicativos do
                que usuários de outras plataformas. É um mercado de alto valor
                que sua empresa não pode ignorar.
              </p>
            </div>

            {/* Right: Detailed Text */}
            <div className={styles.infoContent}>
              <p className={styles.infoParagraph}>
                O ecossistema Apple é conhecido pela integração e qualidade. Ao
                criar um app iOS nativo com a gente, você garante acesso a
                recursos avançados como Apple Pay, Siri Shortcuts e Widgets, que
                aumentam o engajamento e a retenção do usuário.
              </p>
              <p className={styles.infoParagraph}>
                Nossa equipe domina Swift e SwiftUI, as tecnologias mais
                modernas de desenvolvimento Apple. Isso significa código mais
                limpo, menos bugs, e um aplicativo preparado para durar anos com
                fácil manutenção.
              </p>
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className={styles.featuresSection}>
          <div className={styles.featuresContainer}>
            <h2 className={styles.featuresTitle}>
              PADRÃO APPLE DE QUALIDADE<span>.</span>
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
              QUERO MEU APP NA APP STORE <PiArrowUpRightBold />
            </a>
          </div>
        </section>

        {/* DIFFERENTIALS SECTION */}
        <section className={styles.differentialsSection}>
          <div className={styles.differentialsContainer}>
            <h2 className={styles.differentialsTitle}>
              DIFERENCIAIS<span>.</span>
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
              JOURNEY TO THE STORE<span>.</span>
            </h2>
            <span className={styles.methodSubtitle}>
              NOSSO FLUXO DE TRABALHO
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
