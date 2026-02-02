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
  PiAndroidLogoBold,
  PiDeviceMobileBold,
  PiStorefrontBold,
  PiCubeBold,
  PiRocketLaunchBold,
  PiLayoutBold,
  PiWifiHighBold,
  PiCpuBold,
  PiShieldCheckBold,
  PiCheckFatBold,
} from "react-icons/pi";

export default function AppAndroidPage() {
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
      title: "Desenvolvimento Nativo",
      description:
        "Criamos aplicativos utilizando as linguagens oficiais (Kotlin/Java) ou frameworks modernos (React Native) para garantir o máximo desempenho no sistema Android.",
    },
    {
      title: "Material Design 3",
      description:
        "Seguimos rigorosamente as diretrizes de design do Google para criar interfaces que parecem 'em casa' no Android, com navegação intuitiva e visual moderno.",
    },
    {
      title: "Compatibilidade Extensa",
      description:
        "Garantimos que seu app funcione perfeitamente em uma vasta gama de dispositivos, desde os modelos mais novos até aparelhos mais antigos e populares.",
    },
    {
      title: "Integração com Hardware",
      description:
        "Acesso profundo aos recursos do aparelho: Câmera, GPS, Bluetooth, NFC, Biometria e Sensores para criar experiências ricas e funcionais.",
    },
    {
      title: "Publicação na Google Play",
      description:
        "Cuidamos de todo o processo burocrático de submissão, desde a configuração da loja, preenchimento de metadados até a aprovação final.",
    },
    {
      title: "Notificações Push",
      description:
        "Engaje seus usuários com notificações inteligentes e personalizadas, trazendo-os de volta para o aplicativo no momento certo.",
    },
    {
      title: "Modo Offline",
      description:
        "Arquitetura inteligente que permite que as principais funções do app continuem operando mesmo quando o usuário perde a conexão com a internet.",
    },
  ];

  const benefits = [
    {
      icon: <PiAndroidLogoBold />,
      text: "Alcance a maior base de usuários mobile do Brasil e do mundo",
    },
    {
      icon: <PiRocketLaunchBold />,
      text: "Performance otimizada para consumir menos bateria e dados",
    },
    {
      icon: <PiStorefrontBold />,
      text: "Presença oficial na Google Play Store",
    },
  ];

  const differentials = [
    {
      icon: <PiCubeBold />,
      title: "Jetpack Compose",
      text: "Utilizamos o toolkit moderno do Android para criar UIs nativas de forma mais rápida, com menos bugs e fácil manutenção.",
    },
    {
      icon: <PiWifiHighBold />,
      title: "Offline-First",
      text: "Pensamos na falta de internet como cenário padrão, não exceção. Seu app sincroniza dados automaticamente quando a conexão retorna.",
    },
    {
      icon: <PiLayoutBold />,
      title: "Layout Adaptável",
      text: "Interfaces que se ajustam fluidamente para telas de diferentes tamanhos, incluindo tablets e dispositivos dobráveis.",
    },
    {
      icon: <PiCpuBold />,
      title: "Alta Performance",
      text: "Profiling avançado para garantir que o app não trave, não esquente o aparelho e tenha scroll suave (60fps).",
    },
    {
      icon: <PiShieldCheckBold />,
      title: "Segurança de Dados",
      text: "Armazenamento local criptografado e comunicação segura (SSL pinning) para proteger os dados dos seus usuários.",
    },
    {
      icon: <PiCheckFatBold />,
      title: "Testes Automatizados",
      text: "Baterias de testes em múltiplos dispositivos reais para garantir que o app não quebre na mão do cliente.",
    },
  ];

  const methodSteps = [
    {
      title: "Concepção & Escopo",
      description:
        "Definimos as funcionalidades chave e o MVP (Produto Mínimo Viável) para lançar rápido e com qualidade.",
    },
    {
      title: "UI/UX Design Mobile",
      description:
        "Desenhamos as telas seguindo o Material Design, focando na usabilidade em telas de toque e gestos.",
    },
    {
      title: "Desenvolvimento Android",
      description:
        "Codificação do aplicativo utilizando as melhores práticas de arquitetura (MVVM/Clean Architecture).",
    },
    {
      title: "Integração API",
      description:
        "Conexão do aplicativo com o servidor (backend) para troca e sincronização de dados.",
    },
    {
      title: "Controle de Qualidade (QA)",
      description:
        "Testes rigorosos em diversos modelos de smartphones (Samsung, Motorola, Xiaomi, etc.) para validar compatibilidade.",
    },
    {
      title: "Lançamento na Loja",
      description:
        "Preparação dos assets (ícones, screenshots), políticas de privacidade e publicação na Google Play Store.",
    },
  ];

  const faqItems = [
    {
      question: "Quanto custa criar um app Android?",
      answer:
        "O investimento varia conforme a complexidade (número de telas e funções). Apps simples são mais acessíveis, enquanto apps tipo Uber ou iFood exigem maior investimento.",
    },
    {
      question: "Vocês fazem o app para iOS também?",
      answer:
        "Sim! Desenvolvemos também para iPhone. Podemos criar nativo para cada plataforma ou usar tecnologias híbridas (React Native) para reduzir custos.",
    },
    {
      question: "Preciso pagar para colocar na Google Play?",
      answer:
        "O Google cobra uma taxa única de registro de desenvolvedor (atualmente 25 dólares). Nós te orientamos em como fazer esse pagamento diretamente ao Google.",
    },
    {
      question: "O app vai funcionar em celulares antigos?",
      answer:
        "Definimos juntos a versão mínima do Android. Geralmente suportamos versões de até 4-5 anos atrás, cobrindo mais de 95% dos aparelhos em uso.",
    },
    {
      question: "Depois de pronto, eu consigo atualizar o conteúdo?",
      answer:
        "Sim. Geralmente criamos um Painel Administrativo Web (Dashboard) onde você pode gerenciar usuários, produtos e conteúdos do app em tempo real.",
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
                src="/CriacaoDeSites/android-dev.png" // Placeholder
                alt="Desenvolvimento de Aplicativos Android"
                width={500}
                height={500}
                className={styles.heroImage}
                priority
              />
            </div>

            {/* Right: Content */}
            <div className={styles.content}>
              <h1 className={styles.headline}>
                DESENVOLVIMENTO DE APPS ANDROID
              </h1>
              <h2 className={styles.subHeadline}>
                Coloque sua empresa no bolso de milhões de clientes com um
                aplicativo Android moderno e potente.
              </h2>
              <p className={styles.description}>
                O sistema operacional mais usado do mundo é o canal ideal para
                escalar seu negócio. Desenvolvemos aplicativos nativos e
                performáticos que aproveitam todo o potencial dos smartphones
                Android, garantindo uma experiência de usuário impecável.
              </p>

              <a href="#contato" className={styles.ctaButton}>
                ORÇAR MEU APP ANDROID <PiArrowUpRightBold />
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
                No Brasil, o Android domina o mercado. Ter um aplicativo bem
                feito para essa plataforma não é apenas um diferencial, é uma
                necessidade estratégica para atingir a massa.
              </p>
            </div>

            {/* Right: Detailed Text */}
            <div className={styles.infoContent}>
              <p className={styles.infoParagraph}>
                Desenvolver para Android exige expertise para lidar com a
                fragmentação de dispositivos e tamanhos de tela. Nossa equipe é
                especialista em criar interfaces resilientes que funcionam bem
                tanto em um Samsung de última geração quanto em um Motorola
                intermediário.
              </p>
              <p className={styles.infoParagraph}>
                Focamos na estabilidade e na retenção. Um app que fecha sozinho
                (crash) é desinstalado na hora. Por isso, investimos pesado em
                arquitetura de software e testes para garantir que seu usuário
                tenha uma experiência fluida e confiável.
              </p>
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className={styles.featuresSection}>
          <div className={styles.featuresContainer}>
            <h2 className={styles.featuresTitle}>
              RECURSOS E TECNOLOGIA<span>.</span>
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
              QUERO MEU APP NA PLAY STORE <PiArrowUpRightBold />
            </a>
          </div>
        </section>

        {/* DIFFERENTIALS SECTION */}
        <section className={styles.differentialsSection}>
          <div className={styles.differentialsContainer}>
            <h2 className={styles.differentialsTitle}>
              POR QUE NOS ESCOLHER?<span>.</span>
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
              DO CÓDIGO À LOJA<span>.</span>
            </h2>
            <span className={styles.methodSubtitle}>O PROCESSO DE CRIAÇÃO</span>

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
