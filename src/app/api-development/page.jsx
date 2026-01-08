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
  PiPlugsConnectedBold,
  PiLightningBold,
  PiLockKeyBold,
  PiDatabaseBold,
  PiCloudBold,
  PiCodeBold,
  PiArrowsLeftRightBold,
  PiBooksBold,
  PiHardDrivesBold,
} from "react-icons/pi";

export default function ApiDevelopmentPage() {
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
      title: "APIs RESTful & GraphQL",
      description:
        "Desenvolvemos APIs modernas, seguindo os padrões REST ou a flexibilidade do GraphQL, garantindo comunicação eficiente entre seus sistemas.",
    },
    {
      title: "Arquitetura de Microsserviços",
      description:
        "Quebramos aplicações monolíticas em serviços menores e independentes, facilitando a escalabilidade e manutenção do seu ecossistema digital.",
    },
    {
      title: "Integração de Sistemas",
      description:
        "Conectamos seu negócio a ferramentas de terceiros (CRMs, Gateways de Pagamento, ERPs) através de endpoints seguros e robustos.",
    },
    {
      title: "Documentação Completa (Swagger/OpenAPI)",
      description:
        "Entregamos documentação interativa e detalhada, facilitando a vida dos desenvolvedores front-end e parceiros que consumirão sua API.",
    },
    {
      title: "Segurança de Dados",
      description:
        "Implementamos autenticação via JWT, OAuth2 e criptografia de ponta a ponta para blindar suas informações sensíveis.",
    },
    {
      title: "Performance & Caching",
      description:
        "Utilizamos Redis e estratégias avançadas de cache para reduzir o tempo de resposta e suportar picos de tráfego sem queda de performance.",
    },
    {
      title: "Webhooks e Eventos",
      description:
        "Arquitetura orientada a eventos para permitir que seus sistemas reajam em tempo real a ações específicas, automatizando fluxos de trabalho.",
    },
  ];

  const benefits = [
    {
      icon: <PiLightningBold />,
      text: "Comunicação ultrarrápida entre aplicações",
    },
    {
      icon: <PiPlugsConnectedBold />,
      text: "Facilidade de conectar com novos parceiros e softwares",
    },
    {
      icon: <PiHardDrivesBold />,
      text: "Escalabilidade independente para cada serviço",
    },
  ];

  const differentials = [
    {
      icon: <PiCodeBold />,
      title: "Clean Code",
      text: "Código limpo, testável e seguindo os princípios SOLID. Facilitamos a manutenção futura e a entrada de novos desenvolvedores no projeto.",
    },
    {
      icon: <PiLockKeyBold />,
      title: "Security by Design",
      text: "Não deixamos a segurança para o final. Desde a primeira linha de código, implementamos proteções contra injeção de SQL, XSS e outros ataques.",
    },
    {
      icon: <PiCloudBold />,
      title: "Cloud Native",
      text: "APIs prontas para rodar na nuvem (AWS, Azure, Google Cloud), aproveitando o melhor de containers (Docker) e orquestração.",
    },
    {
      icon: <PiDatabaseBold />,
      title: "Otimização de Banco de Dados",
      text: "Queries otimizadas e modelagem de dados eficiente para garantir que o banco de dados não seja o gargalo da sua operação.",
    },
    {
      icon: <PiArrowsLeftRightBold />,
      title: "Versioning",
      text: "Gerenciamento inteligente de versões da API para garantir que atualizações não quebrem as integrações já existentes.",
    },
    {
      icon: <PiBooksBold />,
      title: "Developer Experience",
      text: "Focamos em criar APIs que outros desenvolvedores amam usar, com mensagens de erro claras e estrutura previsível.",
    },
  ];

  const methodSteps = [
    {
      title: "Análise de Requisitos",
      description:
        "Entendemos quais dados e funções precisam ser expostos e quem serão os consumidores da API.",
    },
    {
      title: "Design da Arquitetura",
      description:
        "Definimos os endpoints, métodos HTTP, estrutura de requisição/resposta e modelo de dados.",
    },
    {
      title: "Desenvolvimento",
      description:
        "Codificamos a lógica de negócios, integrações e regras de segurança utilizando Node.js, Python ou Go.",
    },
    {
      title: "Testes Automatizados",
      description:
        "Criamos testes unitários e de integração para garantir que cada endpoint funcione exatamente como esperado.",
    },
    {
      title: "Documentação",
      description:
        "Geramos a documentação técnica (Swagger) para servir de guia para os consumidores da API.",
    },
    {
      title: "Monitoramento & Deploy",
      description:
        "Colocamos a API em produção com ferramentas de monitoramento (APM) para acompanhar a saúde e performance em tempo real.",
    },
  ];

  const faqItems = [
    {
      question: "O que é uma API e por que preciso de uma?",
      answer:
        "API é a ponte que permite que dois sistemas conversem. Se você quer que seu site fale com seu app, ou seu sistema interno consulte dados externos, você precisa de uma API.",
    },
    {
      question: "Vocês trabalham com integrações legadas?",
      answer:
        "Sim. Podemos criar camadas modernas (wrappers) sobre sistemas antigos para permitir que eles se comuniquem com tecnologias novas sem precisar refazer tudo do zero.",
    },
    {
      question: "Qual tecnologia vocês usam no backend?",
      answer:
        "Principalmente Node.js (JavaScript/TypeScript) pela alta performance em I/O, mas também trabalhamos com Python e Java dependendo da necessidade do projeto.",
    },
    {
      question: "A API será segura?",
      answer:
        "Absolutamente. Implementamos os mais modernos padrões de autenticação e autorização, além de rate limiting para prevenir abusos.",
    },
    {
      question: "Vocês entregam documentação?",
      answer:
        "Sim, utilizamos o padrão OpenAPI (Swagger). É uma documentação interativa onde é possível testar as requisições diretamente no navegador.",
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
                src="/CriacaoDeSites/api-dev.png" // Placeholder
                alt="Desenvolvimento de API e Backend"
                width={500}
                height={500}
                className={styles.heroImage}
                priority
              />
            </div>

            {/* Right: Content */}
            <div className={styles.content}>
              <h1 className={styles.headline}>
                DESENVOLVIMENTO DE APIs & INTEGRAÇÕES
              </h1>
              <h2 className={styles.subHeadline}>
                Conecte seus sistemas com eficiência, segurança e alta
                performance através de APIs robustas.
              </h2>
              <p className={styles.description}>
                O mundo digital é feito de conexões. Desenvolvemos o motor
                invisível que alimenta seus aplicativos, sites e processos de
                negócios, garantindo que os dados fluam de forma rápida e segura
                entre todas as pontas.
              </p>

              <a href="#contato" className={styles.ctaButton}>
                FALAR COM UM ARQUITETO <PiArrowUpRightBold />
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
                Uma API bem projetada é um ativo de negócios. Ela permite
                inovação rápida, parcerias estratégicas e uma experiência de
                usuário sem interrupções.
              </p>
            </div>

            {/* Right: Detailed Text */}
            <div className={styles.infoContent}>
              <p className={styles.infoParagraph}>
                APIs são a espinha dorsal da transformação digital. Seja para
                disponibilizar dados do seu ERP para um aplicativo móvel, ou
                para processar pagamentos em tempo real, a qualidade da sua API
                define a estabilidade do seu negócio.
              </p>
              <p className={styles.infoParagraph}>
                Nossa abordagem foca em escalabilidade e manutenibilidade.
                Criamos arquiteturas que crescem junto com sua empresa, evitando
                o débito técnico que costuma travar projetos de software a longo
                prazo.
              </p>
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className={styles.featuresSection}>
          <div className={styles.featuresContainer}>
            <h2 className={styles.featuresTitle}>
              TECNOLOGIAS DE PONTA<span>.</span>
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
              INTEGRAR MEUS SISTEMAS <PiArrowUpRightBold />
            </a>
          </div>
        </section>

        {/* DIFFERENTIALS SECTION */}
        <section className={styles.differentialsSection}>
          <div className={styles.differentialsContainer}>
            <h2 className={styles.differentialsTitle}>
              NOSSO PADRÃO DE QUALIDADE<span>.</span>
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
              FLUXO DE DESENVOLVIMENTO<span>.</span>
            </h2>
            <span className={styles.methodSubtitle}>
              ENGENHARIA DE SOFTWARE
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
