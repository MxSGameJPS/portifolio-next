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
  PiCloudArrowUpBold,
  PiHardDrivesBold,
  PiGraphBold,
} from "react-icons/pi";

export default function BackendPage() {
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
      title: "APIs REST & GraphQL",
      description:
        "Desenvolvemos interfaces de comunicação robustas e padronizadas para que seus sistemas troquem dados de forma eficiente e segura.",
    },
    {
      title: "Arquitetura de Microservices",
      description:
        "Dividimos sistemas monolíticos complexos em serviços pequenos e independentes, facilitando a escalabilidade e manutenção.",
    },
    {
      title: "Banco de Dados Otimizado",
      description:
        "Modelagem e administração de bancos SQL (PostgreSQL, MySQL) e NoSQL (MongoDB) focados em performance e integridade dos dados.",
    },
    {
      title: "Autenticação Segura (OAuth2/JWT)",
      description:
        "Implementamos sistemas de login modernos com criptografia de ponta para proteger as identidades e acessos dos seus usuários.",
    },
    {
      title: "Processamento em Background",
      description:
        "Filas de tarefas (RabbitMQ, Redis) para processar envios de e-mails, relatórios pesados e integrações sem travar a navegação do usuário.",
    },
    {
      title: "Integrações Cloud (AWS/Azure)",
      description:
        "Configuração de infraestrutura em nuvem, garantindo que seu sistema esteja sempre online, com backups automáticos e escalabilidade elástica.",
    },
    {
      title: "Webhooks e Automações",
      description:
        "Seu sistema reagindo em tempo real a eventos externos, como pagamentos aprovados ou novos leads cadastrados.",
    },
  ];

  const benefits = [
    {
      icon: <PiHardDrivesBold />,
      text: "Estabilidade para suportar milhares de acessos simultâneos",
    },
    {
      icon: <PiShieldCheckBold />,
      text: "Segurança de dados sensíveis e proteção contra ataques",
    },
    {
      icon: <PiGraphBold />,
      text: "Alta performance com tempos de resposta mínimos",
    },
  ];

  const differentials = [
    {
      icon: <PiCodeBold />,
      title: "Node.js & TypeScript",
      text: "Utilizamos tecnologias modernas que permitem alto throughput (vazão de dados), ideais para aplicações em tempo real.",
    },
    {
      icon: <PiDatabaseBold />,
      title: "Clean Architecture",
      text: "Código organizado e desacoplado. Isso significa que é fácil adicionar novas funcionalidades sem quebrar o que já existe.",
    },
    {
      icon: <PiLockKeyBold />,
      title: "Security First",
      text: "Desenvolvimento orientado a segurança desde a primeira linha de código, prevenindo vulnerabilidades como SQL Injection e XSS.",
    },
    {
      icon: <PiCloudArrowUpBold />,
      title: "DevOps & CI/CD",
      text: "Automação total do processo de deploy. Aprovou a feature? Em minutos ela está em produção sem derrubar o sistema.",
    },
    {
      icon: <PiCpuBold />,
      title: "Testes Automatizados",
      text: "Cobertura de testes unitários e de integração (TDD) para garantir que cada função do sistema comporte-se como esperado.",
    },
    {
      icon: <PiPlugsBold />,
      title: "API Gateway",
      text: "Centralização do tráfego para gerenciar requisições, aplicar limites (Rate Limiting) e monitorar o uso da sua API.",
    },
  ];

  const methodSteps = [
    {
      title: "System Design",
      description:
        "Desenhamos a arquitetura do sistema, definindo como os componentes vão interagir para garantir escalabilidade.",
    },
    {
      title: "Modelagem de Dados",
      description:
        "Estruturamos o banco de dados para representar fielmente as regras do seu negócio de forma performática.",
    },
    {
      title: "Desenvolvimento da API",
      description:
        "Codificamos as rotas e regras de negócio utilizando as melhores práticas (SOLID, DRY) em Node.js ou Go.",
    },
    {
      title: "Camada de Segurança",
      description:
        "Implementamos middlewares de validação, criptografia e controle de acesso para blindar a aplicação.",
    },
    {
      title: "Testes de Carga",
      description:
        "Simulamos milhares de acessos simultâneos para identificar gargalos e otimizar a infraestrutura antes do lançamento.",
    },
    {
      title: "Deploy na Nuvem",
      description:
        "Configuramos os servidores (Docker/Kubernetes) e colocamos a aplicação no ar com monitoramento ativo (Logs/Metrics).",
    },
    {
      title: "Documentação",
      description:
        "Entregamos uma documentação técnica completa (Swagger/OpenAPI) para que outros desenvolvedores possam integrar ao sistema.",
    },
  ];

  const faqItems = [
    {
      question: "O que é Backend exatamente?",
      answer:
        "Backend é o 'motor' invisível do software. É onde ficam as regras de negócio, o banco de dados, os cálculos e a segurança. Sem ele, o site é apenas uma casca vazia.",
    },
    {
      question: "Por que Node.js e não PHP ou Java?",
      answer:
        "Node.js oferece uma performance excepcional para aplicações web modernas, permitindo lidar com muitas conexões simultâneas de forma leve e rápida.",
    },
    {
      question: "Vocês cuidam do servidor (Hospedagem)?",
      answer:
        "Sim. Configuramos e gerenciamos servidores na AWS, Google Cloud ou DigitalOcean, garantindo que estejam seguros e atualizados.",
    },
    {
      question: "Como garantem a segurança dos dados?",
      answer:
        "Utilizamos criptografia para senhas (Bcrypt), tokens temporários (JWT), HTTPS em todas as comunicações e proteção contra as principais vulnerabilidades da web (OWASP).",
    },
    {
      question: "O sistema aguenta muitos usuários?",
      answer:
        "Sim. Projetamos a arquitetura para ser escalável. Se o número de usuários crescer, podemos aumentar a infraestrutura (Scaling) sem precisar refazer o código.",
    },
    {
      question: "Consigo integrar com meu App Mobile?",
      answer:
        "Com certeza. Desenvolvemos APIs RESTful ou GraphQL que servem como fonte de dados única tanto para o seu site quanto para aplicativos Android e iOS.",
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
                src="/CriacaoDeSites/backend.png" // Placeholder - user needs to ensure this image exists
                alt="Desenvolvimento Backend e APIs"
                width={500}
                height={500}
                className={styles.heroImage}
                priority
              />
            </div>

            {/* Right: Content */}
            <div className={styles.content}>
              <h1 className={styles.headline}>BACKEND & API DEVELOPMENT</h1>
              <h2 className={styles.subHeadline}>
                A inteligência invisível que torna seu sistema rápido, seguro e
                escalável.
              </h2>
              <p className={styles.description}>
                Construímos a fundação robusta que seu software precisa. APIs de
                alta performance, arquitetura de microservices e bancos de dados
                otimizados para suportar o crescimento do seu negócio.
              </p>

              <a href="#contato" className={styles.ctaButton}>
                POTENCIALIZAR MEU SISTEMA <PiArrowUpRightBold />
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
                Um frontend bonito atrai o usuário, mas é um backend sólido que
                o mantém. Performance e estabilidade não são diferenciais, são
                requisitos de sobrevivência.
              </p>
            </div>

            {/* Right: Detailed Text */}
            <div className={styles.infoContent}>
              <p className={styles.infoParagraph}>
                O desenvolvimento Backend é a engenharia por trás das cortinas.
                É aqui que processamos pagamentos, protegemos dados sensíveis e
                garantimos que milhares de usuários possam usar seu sistema
                simultaneamente sem lentidão.
              </p>
              <p className={styles.infoParagraph}>
                Nossa abordagem foca em código limpo e arquitetura escalável.
                Utilizamos tecnologias modernas como Node.js e Docker para criar
                sistemas que não apenas funcionam hoje, mas que estão prontos
                para evoluir amanhã.
              </p>
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className={styles.featuresSection}>
          <div className={styles.featuresContainer}>
            <h2 className={styles.featuresTitle}>
              ENGENHARIA DE SOFTWARE<span>.</span>
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
              FALAR COM UM ENGENHEIRO <PiArrowUpRightBold />
            </a>
          </div>
        </section>

        {/* DIFFERENTIALS SECTION */}
        <section className={styles.differentialsSection}>
          <div className={styles.differentialsContainer}>
            <h2 className={styles.differentialsTitle}>
              STACK TECNOLÓGICA<span>.</span>
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
              ARQUITETURA & DEPLOY<span>.</span>
            </h2>
            <span className={styles.methodSubtitle}>
              DESENVOLVIMENTO DE ALTO NÍVEL
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
              FAQ TÉCNICO<span>.</span>
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
