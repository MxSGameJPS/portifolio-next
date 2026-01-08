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
  PiDatabaseBold,
  PiHardDrivesBold,
  PiTreeStructureBold,
  PiShieldCheckBold,
  PiChartBarBold,
  PiCloudArrowUpBold,
  PiLightningBold,
  PiLockKeyBold,
  PiInfinityBold,
  PiMagnifyingGlassBold,
  PiStackBold,
  PiArrowsMergeBold,
} from "react-icons/pi";

export default function DatabasePage() {
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
      title: "Modelagem de Dados (SQL & NoSQL)",
      description:
        "Desenhamos a estrutura ideal para seus dados, seja em bancos relacionais (PostgreSQL, MySQL, SQL Server) ou não-relacionais (MongoDB, Redis), garantindo consistência e escalabilidade.",
    },
    {
      title: "Performance Tuning",
      description:
        "Seu sistema está lento? Analisamos e otimizamos queries pesadas, índices e configurações do servidor para reduzir o tempo de resposta drasticamente.",
    },
    {
      title: "Migração de Dados (ETL)",
      description:
        "Transferimos seus dados de sistemas legados ou planilhas para bancos de dados modernos na nuvem, com zero perda de informação e mínimo downtime.",
    },
    {
      title: "Alta Disponibilidade & Replication",
      description:
        "Configuramos clusters e réplicas de leitura para garantir que seu banco de dados nunca pare, mesmo em caso de falha de um servidor.",
    },
    {
      title: "Backup & Disaster Recovery",
      description:
        "Estratégias robustas de backup (full, incremental, log) e planos de recuperação de desastres testados periodicamente.",
    },
    {
      title: "Segurança e Compliance (LGPD)",
      description:
        "Implementamos criptografia em repouso (TDE), mascaramento de dados e auditoria de acesso para proteger informações sensíveis conforme a lei.",
    },
    {
      title: "Monitoramento 24/7",
      description:
        "Acompanhamos a saúde do seu banco em tempo real (CPU, Memória, IOPS, Deadlocks) para agir preventivamente antes que o problema afete o usuário.",
    },
  ];

  const benefits = [
    {
      icon: <PiLightningBold />,
      text: "Consultas instantâneas para relatórios e telas do sistema",
    },
    {
      icon: <PiLockKeyBold />,
      text: "Sono tranquilo sabendo que seus dados estão salvos e seguros",
    },
    {
      icon: <PiInfinityBold />,
      text: "Arquitetura preparada para crescer de Gigabytes a Petabytes",
    },
  ];

  const differentials = [
    {
      icon: <PiStackBold />,
      title: "Multi-Database Expertise",
      text: "Não somos 'fanboys' de uma tecnologia. Trabalhamos com o banco que melhor resolve seu problema, seja Oracle, Postgres ou DynamoDB.",
    },
    {
      icon: <PiMagnifyingGlassBold />,
      title: "Análise Profunda",
      text: "Não olhamos apenas o banco, olhamos a aplicação. Muitas vezes a lentidão está no código, e nós ajudamos a refatorar.",
    },
    {
      icon: <PiCloudArrowUpBold />,
      title: "Cloud Native DBA",
      text: "Especialistas em serviços gerenciados de banco de dados na AWS (RDS, Aurora), Azure (SQL DB) e Google Cloud (Cloud SQL).",
    },
    {
      icon: <PiArrowsMergeBold />,
      title: "Zero Data Loss",
      text: "Nossos processos de migração são desenhados para garantir que cada registro existente na origem chegue ao destino.",
    },
    {
      icon: <PiShieldCheckBold />,
      title: "Auditoria Completa",
      text: "Rastreabilidade total. Você saberá quem acessou o quê e quando, facilitando o compliance com normas internas e externas.",
    },
    {
      icon: <PiChartBarBold />,
      title: "Custo Otimizado",
      text: "Ajudamos a escolher o dimensionamento correto do servidor (Right-sizing) para você não pagar por recursos que não usa.",
    },
  ];

  const methodSteps = [
    {
      title: "Assessment (Diagnóstico)",
      description:
        "Analisamos seu ambiente atual, identificando gargalos de performance, riscos de segurança e falhas de modelagem.",
    },
    {
      title: "Arquitetura e Planejamento",
      description:
        "Desenhamos a nova topologia do banco de dados e o plano de migração ou otimização.",
    },
    {
      title: "Execução (Hands-on)",
      description:
        "Aplicamos as correções, criamos os índices, migramos os dados ou configuramos o novo ambiente.",
    },
    {
      title: "Testes de Carga",
      description:
        "Simulamos uso intenso para garantir que as otimizações surtiram efeito e o ambiente aguenta o tranco.",
    },
    {
      title: "Documentação",
      description:
        "Entregamos o dicionário de dados e manuais de operação para sua equipe.",
    },
    {
      title: "Monitoramento Contínuo",
      description:
        "Instalamos agentes de monitoramento para garantir a estabilidade a longo prazo.",
    },
  ];

  const faqItems = [
    {
      question: "Qual banco de dados devo usar?",
      answer:
        "Depende do seu dado. Dados estruturados (financeiro, estoque) vão bem em SQL (Postgres). Dados flexíveis ou logs vão bem em NoSQL (Mongo). Nós te ajudamos a decidir.",
    },
    {
      question: "Meu sistema está lento, é culpa do banco?",
      answer:
        "Em 80% dos casos, sim. Índices faltando ou queries mal escritas são os maiores vilões da performance. Nós fazemos essa análise.",
    },
    {
      question: "A migração vai tirar meu site do ar?",
      answer:
        "Buscamos sempre o 'Zero Downtime'. Usamos técnicas de replicação para migrar enquanto o sistema roda e fazemos a virada de chave em segundos, geralmente de madrugada.",
    },
    {
      question: "Vocês fazem backup?",
      answer:
        "Nós configuramos a rotina de backup (automático) e, mais importante, testamos o restore. Backup sem teste de recuperação não é confiável.",
    },
    {
      question: "Trabalham com Oracle e SQL Server?",
      answer:
        "Sim, temos experiência tanto com bancos open-source (Postgres, MySQL) quanto com enterprise (Oracle, SQL Server).",
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
                src="/CriacaoDeSites/database.png" // Placeholder image path
                alt="Administração e Engenharia de Banco de Dados"
                width={500}
                height={500}
                className={styles.heroImage}
                priority
              />
            </div>

            {/* Right: Content */}
            <div className={styles.content}>
              <h1 className={styles.headline}>ADMINISTRAÇÃO DE DADOS & DBA</h1>
              <h2 className={styles.subHeadline}>
                Dados são o ativo mais valioso da sua empresa. Garanta que eles
                estejam seguros, rápidos e disponíveis.
              </h2>
              <p className={styles.description}>
                Da modelagem inicial à otimização de performance em larga
                escala. Oferecemos serviços completos de engenharia de dados
                para garantir que sua informação flua com velocidade e
                integridade, suportando o crescimento do seu negócio.
              </p>

              <a href="#contato" className={styles.ctaButton}>
                OTIMIZAR MEU BANCO DE DADOS <PiArrowUpRightBold />
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
                Dados são o novo petróleo, mas, assim como o petróleo, eles
                precisam ser refinados. Um banco de dados mal gerenciado é
                apenas um custo e um risco, não um ativo.
              </p>
            </div>

            {/* Right: Detailed Text */}
            <div className={styles.infoContent}>
              <p className={styles.infoParagraph}>
                Muitas aplicações sofrem com lentidão não por causa do código,
                mas por causa do banco de dados. Queries ineficientes e falta de
                índices podem matar a experiência do usuário.
              </p>
              <p className={styles.infoParagraph}>
                Nossa equipe de DBAs e Engenheiros de Dados atua como guardiães
                da sua informação. Utilizamos as melhores práticas de mercado
                para garantir que seus dados estejam protegidos contra falhas,
                ataques e erros humanos, ao mesmo tempo em que entregamos alta
                performance.
              </p>
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className={styles.featuresSection}>
          <div className={styles.featuresContainer}>
            <h2 className={styles.featuresTitle}>
              SOLUÇÕES EM DADOS<span>.</span>
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
              FALAR COM UM ESPECIALISTA <PiArrowUpRightBold />
            </a>
          </div>
        </section>

        {/* DIFFERENTIALS SECTION */}
        <section className={styles.differentialsSection}>
          <div className={styles.differentialsContainer}>
            <h2 className={styles.differentialsTitle}>
              POR QUE NÓS?<span>.</span>
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
              CICLO DE OTIMIZAÇÃO<span>.</span>
            </h2>
            <span className={styles.methodSubtitle}>NOSSA ABORDAGEM</span>

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
