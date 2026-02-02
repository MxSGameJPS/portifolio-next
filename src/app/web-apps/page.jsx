"use client";

import { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Contact from "../../components/Contact/Contact";
import styles from "./page.module.css";
import Image from "next/image";
import {
  PiArrowUpRightBold,
  // ... imports ...
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

export default function WebAppsPage() {
  const [openIndex, setOpenIndex] = useState(null);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFeature = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "Qual o prazo para desenvolver um projeto?",
      answer:
        "Os prazos variam conforme a complexidade do escopo. Projetos institucionais levam em média 30 dias, enquanto sistemas complexos podem variar de 60 a 120 dias, dependendo das funcionalidades.",
    },
    {
      question: "Qual a tecnologia utilizada no desenvolvimento?",
      answer:
        "Utilizamos as tecnologias mais modernas do mercado: Stack JavaScript (Next.js, React, Node.js, Express). Isso garante performance, segurança e facilidade de manutenção futura.",
    },
    {
      question: "Posso integrar o sistema com meu software atual (ERP/CRM)?",
      answer:
        "Sim! Desenvolvemos APIs e microservices que permitem a comunicação fluida entre o novo sistema e ferramentas que você já utiliza, como RD Station, Salesforce, SAP, entre outros.",
    },
    {
      question: "O código-fonte será meu ao final do projeto?",
      answer:
        "Com certeza. Prezamos pela sua autonomia. Ao final do projeto e quitação do contrato, entregamos o repositório completo do código, sem 'pegadinhas' de licença ou aluguel.",
    },
    {
      question: "O sistema funcionará bem em celulares?",
      answer:
        "Sim. Nossas aplicações são desenvolvidas com o conceito 'Mobile First' e Responsividade, garantindo que funcionem perfeitamente em smartphones, tablets e desktops.",
    },
    {
      question: "Como funciona o suporte pós-lançamento?",
      answer:
        "Oferecemos um período de garantia para correções de eventuais bugs. Após isso, podemos estabelecer um contrato de SLA (Nível de Serviço) para evolução contínua e suporte técnico premium.",
    },
  ];

  const features = [
    {
      title: "Alta Performance",
      description:
        "Páginas servidas em CDN global, otimização de imagens automática e código enxuto garantem excelente velocidade de carregamento.",
    },
    {
      title: "SEO On-Page Avançado",
      description:
        "Estrutura de código otimizada para motores de busca, meta tags dinâmicas e sitemaps automáticos para melhorar seu ranking no Google.",
    },
    {
      title: "Design Responsivo e Adaptável",
      description:
        "Layouts fluidos que se ajustam perfeitamente a qualquer tamanho de tela, proporcionando a melhor experiência em celulares, tablets e desktops.",
    },
    {
      title: "Segurança Reforçada (OWASP)",
      description:
        "Implementação das melhores práticas de segurança, proteção contra ataques comuns e criptografia de dados sensíveis.",
    },
    {
      title: "Administração Descomplicada",
      description:
        "Painel administrativo intuitivo para que você possa gerenciar conteúdo, usuários e configurações sem precisar de conhecimentos técnicos.",
    },
    {
      title: "Metodologia Ágil de Desenvolvimento",
      description:
        "Entregas contínuas e incrementais, permitindo feedback rápido e ajustes precisos para garantir que o produto final atenda suas expectativas.",
    },
    {
      title: "Suporte Analítico e Dados",
      description:
        "Integração nativa com ferramentas de análise (Google Analytics, Hotjar) para monitorar o comportamento do usuário e tomar decisões baseadas em dados.",
    },
  ];

  const benefits = [
    {
      icon: <PiRocketLaunchBold />,
      text: "Projetos otimizados para máxima performance",
    },
    {
      icon: <PiShieldCheckBold />,
      text: "Segurança de ponta e compliance LGPD",
    },
    {
      icon: <PiMagnifyingGlassBold />,
      text: "Arquitetura SEO e GEO para otimizar indexação",
    },
  ];

  const differentials = [
    {
      icon: <PiCpuBold />,
      title: "Arquitetura Moderna",
      text: "Utilizamos Next.js e React para criar interfaces ultra-rápidas e interativas, abandonando o carregamento lento de páginas tradicionais.",
    },
    {
      icon: <PiDatabaseBold />,
      title: "Backend Robusto",
      text: "APIs desenvolvidas em Node.js e Express, garantindo escalabilidade para suportar milhares de requisições simultâneas com estabilidade.",
    },
    {
      icon: <PiCodeBold />,
      title: "Código Exclusivo",
      text: "Nada de templates prontos. Desenvolvemos cada linha de código pensando na sua regra de negócio, garantindo um software único e eficiente.",
    },
    {
      icon: <PiLockKeyBold />,
      title: "Segurança Avançada",
      text: "Proteção contra ataques de força bruta, criptografia de ponta a ponta e autenticação segura (JWT/OAuth) para blindar seus dados.",
    },
    {
      icon: <PiPlugsBold />,
      title: "Integrações Poderosas",
      text: "Conectamos seu sistema a qualquer ferramenta externa: gateways de pagamento, CRMs, ERPs e APIs de terceiros de forma fluida.",
    },
    {
      icon: <PiChartBarBold />,
      title: "Sem Mensalidades",
      text: "O software é seu. Entregamos o código-fonte completo (Open Source/Proprietário), sem taxas de licença ou mensalidades ocultas.",
    },
  ];

  const methodSteps = [
    {
      title: "Imersão & Discovery",
      description:
        "Começamos mergulhando no seu negócio. Entendemos suas dores, objetivos e público-alvo para definir o escopo exato do projeto.",
    },
    {
      title: "Arquitetura & Prototipagem",
      description:
        "Planejamos a estrutura técnica (banco de dados, frameworks) e criamos wireframes para validar a usabilidade antes de escrever código.",
    },
    {
      title: "Design UI/UX",
      description:
        "Nossos designers criam interfaces modernas, intuitivas e alinhadas à sua identidade visual, focadas na melhor experiência do usuário.",
    },
    {
      title: "Desenvolvimento Full-Stack",
      description:
        "Programação de alta performance. Implementamos o frontend (visual) e backend (lógica) utilizando as tecnologias mais avançadas do mercado.",
    },
    {
      title: "Quality Assurance (QA)",
      description:
        "Bateria rigorosa de testes automatizados e manuais para garantir que o sistema funcione perfeitamente em todos os dispositivos e cenários.",
    },
    {
      title: "Deploy & Lançamento",
      description:
        "Configuração de servidores seguros (AWS/Vercel), domínios e certificados SSL para colocar seu sistema no ar com estabilidade máxima.",
    },
    {
      title: "Evolução Contínua",
      description:
        "O trabalho não para. Monitoramos a performance e implementamos melhorias constantes baseadas no feedback real dos usuários.",
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
                src="/CriacaoDeSites/hero.png"
                alt="Desenvolvimento de Sites e Web Apps"
                width={500}
                height={500}
                className={styles.heroImage}
                priority
              />
            </div>

            {/* Right: Content */}
            <div className={styles.content}>
              <h1 className={styles.headline}>
                WEB APPS & SISTEMAS PERSONALIZADOS
              </h1>
              <h2 className={styles.subHeadline}>
                Transformamos processos complexos em soluções digitais
                inteligentes e escaláveis.
              </h2>
              <p className={styles.description}>
                Desenvolvemos aplicações web sob medida que impulsionam a
                eficiência operacional do seu negócio. Combinamos arquitetura
                robusta, design intuitivo e tecnologia de ponta para entregar
                softwares que evoluem junto com sua empresa, garantindo
                performance, segurança e resultados reais.
              </p>

              <a href="#contato" className={styles.ctaButton}>
                SOLICITAR UMA CONSULTORIA <PiArrowUpRightBold />
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
                A tecnologia deve ser um acelerador de negócios. Sistemas
                personalizados eliminam processos manuais e desbloqueiam o
                verdadeiro potencial de crescimento da sua empresa.
              </p>
            </div>

            {/* Right: Detailed Text */}
            <div className={styles.infoContent}>
              <p className={styles.infoParagraph}>
                Desenvolvemos ecossistemas digitais completos, indo muito além
                de simples páginas web. Nossas soluções integram APIs complexas,
                bancos de dados robustos e interfaces intuitivas, criando
                ferramentas que centralizam sua operação e facilitam a tomada de
                decisão em tempo real.
              </p>
              <p className={styles.infoParagraph}>
                Atuamos como parceiros estratégicos de tecnologia. Nossa
                metodologia envolve imersão total no seu modelo de negócio para
                desenhar softwares que resolvem dores reais. Garantimos
                segurança de dados, alta disponibilidade e uma arquitetura
                preparada para escalar conforme sua demanda aumenta.
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
              QUERO UMA PROPOSTA <PiArrowUpRightBold />
            </a>
          </div>
        </section>

        {/* DIFFERENTIALS SECTION */}
        <section className={styles.differentialsSection}>
          <div className={styles.differentialsContainer}>
            <h2 className={styles.differentialsTitle}>
              DIFERENCIAIS DOS NOSSOS PROJETOS<span>.</span>
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
              NOSSO MÉTODO<span>.</span>
            </h2>
            <span className={styles.methodSubtitle}>
              VALIDADO COM MAIS DE 100 CLIENTES
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
              FAQ - WEB APPS & SISTEMAS<span>.</span>
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
