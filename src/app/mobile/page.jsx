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
  PiDeviceMobileBold,
  PiAndroidLogoBold,
  PiAppleLogoBold,
} from "react-icons/pi";

export default function MobileAppsPage() {
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
      title: "Experiência Nativa e Precisa",
      description:
        "Desenvolvemos aplicativos que se comportam exatamente como o usuário espera em seu sistema operacional (iOS ou Android), garantindo fluidez e usabilidade.",
    },
    {
      title: "Cross-Platform Moderno",
      description:
        "Utilizamos tecnologias como React Native e Flutter para criar um único código que roda em ambas as plataformas, reduzindo custos e tempo de desenvolvimento sem perder performance.",
    },
    {
      title: "Notificações Push",
      description:
        "Mantenha seu usuário engajado enviando alertas e promoções diretamente para a tela do celular, aumentando a retenção e o uso do app.",
    },
    {
      title: "Funcionamento Offline",
      description:
        "Seu app não para quando a internet cai. Implementamos armazenamento local para garantir que funcionalidades críticas continuem operando em qualquer lugar.",
    },
    {
      title: "Integração com Hardware",
      description:
        "Aproveite todo o potencial do smartphone: câmera, GPS, biometria (FaceID/TouchID), giroscópio e muito mais para criar experiências imersivas.",
    },
    {
      title: "Design Mobile-First",
      description:
        "Interfaces pensadas exclusivamente para o toque, com botões acessíveis, gestos intuitivos e navegação simplificada para telas menores.",
    },
    {
      title: "Publicação nas Lojas",
      description:
        "Cuidamos de toda a burocracia para colocar seu app na Apple App Store e Google Play Store, garantindo conformidade com todas as diretrizes.",
    },
  ];

  const benefits = [
    {
      icon: <PiDeviceMobileBold />,
      text: "Sua marca presente 24h no bolso do cliente",
    },
    {
      icon: <PiShieldCheckBold />,
      text: "Maior fidelização e canal direto de comunicação",
    },
    {
      icon: <PiRocketLaunchBold />,
      text: "Performance muito superior a sites móveis",
    },
  ];

  const differentials = [
    {
      icon: <PiCpuBold />,
      title: "Tecnologia de Ponta",
      text: "React Native e Expo para desenvolvimento ágil e robusto, utilizados por gigantes como Facebook, Instagram e Uber.",
    },
    {
      icon: <PiDatabaseBold />,
      title: "Backend Escalável",
      text: "APIs otimizadas para mobile que consomem menos dados e bateria, garantindo uma experiência leve para o usuário.",
    },
    {
      icon: <PiLockKeyBold />,
      title: "Segurança Biométrica",
      text: "Implementação nativa de login por digital ou reconhecimento facial para facilitar o acesso com segurança máxima.",
    },
    {
      icon: <PiAndroidLogoBold />,
      title: "Android & iOS",
      text: "Entrega simultânea para as duas maiores plataformas do mundo, alcançando 99% dos usuários de smartphones.",
    },
    {
      icon: <PiPlugsBold />,
      title: "Conectividade",
      text: "Integração via Bluetooth, NFC ou Beacons para soluções de IoT e interações físicas com o ambiente.",
    },
    {
      icon: <PiChartBarBold />,
      title: "Analytics Mobile",
      text: "Ferramentas específicas (Firebase, Mixpanel) para rastrear instalações, uso diário e retenção de usuários.",
    },
  ];

  const methodSteps = [
    {
      title: "Discovery & Prototipagem",
      description:
        "Definimos as features essenciais e criamos o fluxo de telas (wireframes) para validar a navegação antes de codificar.",
    },
    {
      title: "UI Design Mobile",
      description:
        "Desenhamos telas bonitas e funcionais, respeitando os Guidelines de Design da Apple (Human Interface) e Google (Material Design).",
    },
    {
      title: "Desenvolvimento Híbrido",
      description:
        "Codificamos o aplicativo utilizando frameworks modernos que garantem performance nativa com um único código base.",
    },
    {
      title: "Integração de APIs",
      description:
        "Conectamos o aplicativo ao seu banco de dados e sistemas existentes para sincronizar informações em tempo real.",
    },
    {
      title: "Testes em Dispositivos",
      description:
        "Validamos o app em diversos modelos de iPhone e Android, com diferentes tamanhos de tela e versões de sistema operacional.",
    },
    {
      title: "Publicação nas Lojas",
      description:
        "Submetemos o app para aprovação na Apple Store e Google Play, ajustando qualquer detalhe necessário para a publicação.",
    },
    {
      title: "Monitoramento & Updates",
      description:
        "Acompanhamos os reviews dos usuários e lançamos atualizações periódicas para corrigir bugs e adicionar novas funcionalidades.",
    },
  ];

  const faqItems = [
    {
      question: "Preciso pagar para publicar nas lojas?",
      answer:
        "Sim. A Apple cobra uma taxa anual de $99 e o Google uma taxa única de $25. Esses valores são pagos diretamente para elas na criação da sua conta de desenvolvedor.",
    },
    {
      question: "O aplicativo vai funcionar no iPhone e no Android?",
      answer:
        "Sim! Utilizamos desenvolvimento híbrido (React Native), o que nos permite criar versões para iOS e Android simultaneamente, economizando tempo e investimento.",
    },
    {
      question: "Quanto tempo demora para a Apple/Google aprovar?",
      answer:
        "O Google Play geralmente aprova em até 48 horas. A Apple App Store é mais rigorosa e pode levar de 3 a 5 dias para revisar e aprovar o aplicativo.",
    },
    {
      question: "Vocês dão manutenção depois de pronto?",
      answer:
        "Sim. Aplicativos precisam de manutenção constante devido a atualizações dos sistemas operacionais (iOS/Android). Oferecemos planos de suporte contínuo.",
    },
    {
      question: "Consigo enviar notificações para os usuários?",
      answer:
        "Com certeza. As notificações Push são uma das ferramentas mais poderosas dos apps e já deixamos a estrutura pronta para você se comunicar com sua base.",
    },
    {
      question: "O aplicativo precisa de internet para funcionar?",
      answer:
        "Depende da funcionalidade. Podemos construir o app para ter recursos offline (modos de consulta), mas para sincronizar dados geralmente é necessária conexão.",
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
                src="/CriacaoDeSites/aplicativosMobile.png" // Placeholder
                alt="Desenvolvimento de Aplicativos Mobile"
                width={500}
                height={500}
                className={styles.heroImage}
                priority
              />
            </div>

            {/* Right: Content */}
            <div className={styles.content}>
              <h1 className={styles.headline}>
                APLICATIVOS MOBILE iOS & ANDROID
              </h1>
              <h2 className={styles.subHeadline}>
                Coloque sua empresa no bolso do seu cliente com experiências
                mobile nativas.
              </h2>
              <p className={styles.description}>
                Desenvolvemos aplicativos intuitivos, rápidos e seguros para
                iPhone e Android. Utilizamos tecnologia moderna para garantir
                performance, escalabilidade e uma experiência de usuário
                inesquecível.
              </p>

              <a href="#contato" className={styles.ctaButton}>
                CRIAR MEU APP <PiArrowUpRightBold />
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
                O mundo é mobile. Estar presente na tela inicial do smartphone
                do seu cliente não é mais um luxo, é uma necessidade estratégica
                de retenção.
              </p>
            </div>

            {/* Right: Detailed Text */}
            <div className={styles.infoContent}>
              <p className={styles.infoParagraph}>
                Aplicativos oferecem recursos que sites não conseguem: acesso à
                câmera, geolocalização em background, biometria e,
                principalmente, notificações push. Essas ferramentas criam um
                canal direto e poderoso de engajamento.
              </p>
              <p className={styles.infoParagraph}>
                Nossa abordagem foca na jornada do usuário. Criamos interfaces
                que simplificam tarefas complexas, garantindo que seu cliente
                consiga comprar, agendar ou interagir com sua marca com poucos
                toques, onde quer que esteja.
              </p>
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className={styles.featuresSection}>
          <div className={styles.featuresContainer}>
            <h2 className={styles.featuresTitle}>
              FUNCIONALIDADES PREMIUM<span>.</span>
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
              QUERO UM ORÇAMENTO <PiArrowUpRightBold />
            </a>
          </div>
        </section>

        {/* DIFFERENTIALS SECTION */}
        <section className={styles.differentialsSection}>
          <div className={styles.differentialsContainer}>
            <h2 className={styles.differentialsTitle}>
              TECNOLOGIA DE PONTA<span>.</span>
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
              DO CONCEITO À LOJA<span>.</span>
            </h2>
            <span className={styles.methodSubtitle}>
              DESENVOLVIMENTO ÁGIL DE APPS
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
              DÚVIDAS SOBRE APPS<span>.</span>
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
