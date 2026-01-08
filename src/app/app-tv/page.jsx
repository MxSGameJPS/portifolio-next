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
  PiTelevisionBold,
  PiFilmStripBold,
  PiGameControllerBold,
  PiWifiHighBold,
  PiMonitorBold,
  PiSpeakerHighBold,
  PiDesktopTowerBold,
  PiCodeBold,
  PiDevicesBold,
  PiRocketLaunchBold,
  PiHouseBold,
} from "react-icons/pi";

export default function AppTvPage() {
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
      title: "Desenvolvimento para Smart TVs",
      description:
        "Criamos aplicativos nativos e híbridos para as principais plataformas do mercado: Tizen (Samsung), WebOS (LG) e Android TV (TCL, Philips, Sony).",
    },
    {
      title: "Apple TV (tvOS)",
      description:
        "Apps premium para o ecossistema Apple, aproveitando o poder do hardware da Apple TV para experiências fluidas e integradas com iPhone e iPad.",
    },
    {
      title: "Streaming & VOD",
      description:
        "Plataformas completas de vídeo sob demanda (Netflix-like), com player personalizado, DRM (proteção de conteúdo) e suporte a 4K HDR.",
    },
    {
      title: "Navegação por Controle Remoto",
      description:
        "Interface desenhada especificamente para interação via D-Pad (controle remoto), garantindo foco visível e usabilidade intuitiva a 3 metros de distância.",
    },
    {
      title: "Jogos para TV",
      description:
        "Experiências interativas e casuais adaptadas para a sala de estar, com suporte a controles Bluetooth e integração com smartphones.",
    },
    {
      title: "Sinalização Digital (Digital Signage)",
      description:
        "Apps para telas corporativas, menus digitais de restaurantes e painéis de publicidade, gerenciados remotamente.",
    },
    {
      title: "Chromecast & AirPlay",
      description:
        "Implementação de protocolos de transmissão para permitir que seus usuários enviem conteúdo do celular direto para a TV com um toque.",
    },
  ];

  const benefits = [
    {
      icon: <PiHouseBold />,
      text: "Presença no centro do lar: a sala de estar do seu cliente",
    },
    {
      icon: <PiFilmStripBold />,
      text: "Aumente o tempo de consumo de conteúdo com a tela grande",
    },
    {
      icon: <PiWifiHighBold />,
      text: "Alcance milhões de TVs conectadas sem depender de set-top boxes",
    },
  ];

  const differentials = [
    {
      icon: <PiMonitorBold />,
      title: "10-foot Experience",
      text: "Dominamos a UX para TV. Sabemos que o usuário não toca na tela e está sentado longe. Fontes legíveis e foco claro são nossa prioridade.",
    },
    {
      icon: <PiCodeBold />,
      title: "Performance Máxima",
      text: "Smart TVs têm processadores limitados. Nossos apps são otimizados para rodar liso, sem travar, mesmo em modelos mais antigos.",
    },
    {
      icon: <PiDevicesBold />,
      title: "Multi-Plataforma",
      text: "Desenvolvemos com frameworks que permitem reaproveitar código entre Samsung, LG e Android TV, reduzindo custo e tempo.",
    },
    {
      icon: <PiSpeakerHighBold />,
      title: "Imersão Sonora",
      text: "Integração com sistemas de som Dolby e interações sonoras que guiam o usuário pela navegação.",
    },
    {
      icon: <PiDesktopTowerBold />,
      title: "Homologação",
      text: "Cuidamos do chato e complexo processo de aprovação nas lojas da Samsung, LG, Roku e Apple, que é muito mais rígido que no celular.",
    },
    {
      icon: <PiGameControllerBold />,
      title: "Interatividade",
      text: "Criamos 'second screen experiences', onde o app da TV conversa em tempo real com o app do celular do usuário.",
    },
  ];

  const methodSteps = [
    {
      title: "Prototipagem em TV",
      description:
        "Testamos a navegação e legibilidade desde o wireframe, simulando a distância real de uso.",
    },
    {
      title: "Desenvolvimento",
      description:
        "Codificação utilizando TV Application Layer (TAL), React Native TV ou Swift, dependendo do alvo.",
    },
    {
      title: "Teste em Dispositivos Reais",
      description:
        "Não usamos apenas emuladores. Testamos seu app em TVs Samsung, LG e Android reais para garantir compatibilidade.",
    },
    {
      title: "DRM & Segurança",
      description:
        "Implementação de travas de segurança para proteger seu conteúdo de vídeo contra pirataria.",
    },
    {
      title: "Certificação",
      description:
        "Submissão técnica para as lojas (Store QA), ajustando detalhes exigidos pelos fabricantes (checklist de compliance).",
    },
    {
      title: "Lançamento",
      description:
        "Monitoramento de métricas específicas de TV e atualização remota (OTA).",
    },
  ];

  const faqItems = [
    {
      question: "Desenvolver para TV é igual para celular?",
      answer:
        "Não. A interação muda totalmente (toque vs controle remoto), a distância do olho é maior e o hardware é mais fraco. Exige design específico.",
    },
    {
      question: "Preciso fazer um app para cada marca?",
      answer:
        "Idealmente sim, para performance nativa. Mas usamos tecnologias híbridas que cobrem 90% do código comum entre Samsung (Tizen), LG (WebOS) e Android.",
    },
    {
      question: "Quanto tempo demora a aprovação?",
      answer:
        "É mais demorado que Apple/Google Play. A Samsung e LG testam manualmente cada app. Pode levar de 2 a 4 semanas para ser aprovado.",
    },
    {
      question: "Dá para vender produtos na TV?",
      answer:
        "Sim, mas a digitação de dados de cartão é ruim na TV. O ideal é usar QR Code na tela para finalizar a compra no celular (T-Commerce).",
    },
    {
      question: "Vocês fazem app para Roku?",
      answer:
        "Sim, desenvolvemos também para Roku TV usando a linguagem própria deles (BrightScript).",
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
                src="/CriacaoDeSites/app-tv.png" // Placeholder image path
                alt="Desenvolvimento de Apps para Smart TV"
                width={500}
                height={500}
                className={styles.heroImage}
                priority
              />
            </div>

            {/* Right: Content */}
            <div className={styles.content}>
              <h1 className={styles.headline}>APPS PARA SMART TV</h1>
              <h2 className={styles.subHeadline}>
                Leve sua marca para a tela grande e conquiste a sala de estar
                dos seus clientes.
              </h2>
              <p className={styles.description}>
                O consumo de streaming e apps em TVs explodiu. Desenvolvemos
                experiências imersivas e intuitivas para Samsung Tizen, LG
                WebOS, Android TV e Apple TV, conectando seu conteúdo ao
                dispositivo mais nobre da casa.
              </p>

              <a href="#contato" className={styles.ctaButton}>
                CRIAR MEU APP DE TV <PiArrowUpRightBold />
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
                A TV deixou de ser apenas um receptor de sinal para se tornar um
                hub de entretenimento e serviços. Estar nela é ocupar o espaço
                mais valioso da atenção familiar.
              </p>
            </div>

            {/* Right: Detailed Text */}
            <div className={styles.infoContent}>
              <p className={styles.infoParagraph}>
                Criar para TV (o conceito de Lean-back experience) é diferente
                de criar para celular. O usuário está relaxado no sofá,
                controlando tudo com um controle remoto simples. A interface
                precisa ser fluida, visual e direta.
              </p>
              <p className={styles.infoParagraph}>
                Nós cuidamos da fragmentação do mercado. Garantimos que seu
                aplicativo funcione perfeitamente tanto na TV mais moderna 4K
                quanto naquele modelo de 3 anos atrás que ainda é muito popular.
              </p>
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className={styles.featuresSection}>
          <div className={styles.featuresContainer}>
            <h2 className={styles.featuresTitle}>
              EXPERIÊNCIA BIG SCREEN<span>.</span>
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
              QUERO UM PROJETO PARA TV <PiArrowUpRightBold />
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
              DESENVOLVIMENTO DEDICADO<span>.</span>
            </h2>
            <span className={styles.methodSubtitle}>FLUXO E CERTIFICAÇÃO</span>

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
