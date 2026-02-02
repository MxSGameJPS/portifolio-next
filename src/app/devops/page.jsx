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
  PiInfinityBold,
  PiCloudArrowUpBold,
  PiGearBold,
  PiHardDrivesBold,
  PiShieldCheckBold,
  PiArrowsClockwiseBold,
  PiCodesandboxLogoBold,
  PiTerminalWindowBold,
  PiGraphBold,
  PiLockKeyBold,
} from "react-icons/pi";

export default function DevOpsPage() {
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
      title: "CI/CD (Integração e Entrega Contínuas)",
      description:
        "Automatizamos o processo de deploy. Assim que um código é aprovado, ele é testado e colocado em produção automaticamente, sem intervenção humana arriscada.",
    },
    {
      title: "Infraestrutura como Código (IaC)",
      description:
        "Gerenciamos servidores e redes através de arquivos de configuração (Terraform, CloudFormation), garantindo ambientes reprodutíveis e auditáveis.",
    },
    {
      title: "Cloud Computing (AWS/Azure/GCP)",
      description:
        "Arquitetamos soluções escaláveis na nuvem, utilizando serviços gerenciados para reduzir custos operacionais e aumentar a disponibilidade.",
    },
    {
      title: "Containerização (Docker & Kubernetes)",
      description:
        "Empacotamos suas aplicações em containers para garantir que elas rodem exatamente da mesma forma no computador do desenvolvedor e no servidor.",
    },
    {
      title: "Monitoramento e Observabilidade",
      description:
        "Implementamos logs centralizados (ELK Stack, Datadog) e métricas (Prometheus, Grafana) para detectar falhas antes do usuário perceber.",
    },
    {
      title: "Segurança (DevSecOps)",
      description:
        "Integramos scans de vulnerabilidade diretamente no pipeline de desenvolvimento, garantindo que nenhum código inseguro chegue à produção.",
    },
    {
      title: "Alta Disponibilidade e Disaster Recovery",
      description:
        "Estratégias de backup e redundância para garantir que seu negócio continue operando mesmo em caso de falhas catastróficas em um data center.",
    },
  ];

  const benefits = [
    {
      icon: <PiInfinityBold />,
      text: "Deploys mais frequentes, rápidos e com menos falhas",
    },
    {
      icon: <PiCloudArrowUpBold />,
      text: "Escalabilidade automática para suportar picos de tráfego",
    },
    {
      icon: <PiShieldCheckBold />,
      text: "Ambientes de produção estáveis e seguros",
    },
  ];

  const differentials = [
    {
      icon: <PiGearBold />,
      title: "Automação Extrema",
      text: "Nosso objetivo é eliminar o trabalho manual repetitivo. Se algo precisa ser feito mais de duas vezes, nós automatizamos.",
    },
    {
      icon: <PiCodesandboxLogoBold />,
      title: "Arquitetura Resiliente",
      text: "Desenhamos sistemas que 'falham graciosamente', isolando erros para que uma parte quebrada não derrube todo o site.",
    },
    {
      icon: <PiTerminalWindowBold />,
      title: "Expertise Técnica",
      text: "Dominamos Linux, Shell Scripting e as entranhas dos sistemas operacionais para extrair o máximo de performance.",
    },
    {
      icon: <PiLockKeyBold />,
      title: "Segurança Militar",
      text: "Gerenciamento rigoroso de chaves de acesso (Secrets Management) e firewalls (WAF) configurados corretamente.",
    },
    {
      icon: <PiGraphBold />,
      title: "Cost Optimization",
      text: "Monitoramos os custos de nuvem (FinOps) para garantir que você não esteja pagando por recursos ociosos.",
    },
    {
      icon: <PiArrowsClockwiseBold />,
      title: "Zero Downtime Deploy",
      text: "Atualizamos seu sistema sem que ele fique fora do ar nem por um segundo (Blue-Green Deployment / Canary Releases).",
    },
  ];

  const methodSteps = [
    {
      title: "Assessment",
      description:
        "Analisamos sua infraestrutura atual e identificamos gargalos de performance, segurança e custos.",
    },
    {
      title: "Planejamento da Arquitetura",
      description:
        "Desenhamos a nova topologia de rede e serviços na nuvem ideal para sua carga de trabalho.",
    },
    {
      title: "Dockerização",
      description:
        "Preparamos suas aplicações para rodarem em containers, garantindo portabilidade.",
    },
    {
      title: "Pipeline de CI/CD",
      description:
        "Configuramos as esteiras de automação (GitHub Actions, GitLab CI/CD) para testes e deploy.",
    },
    {
      title: "Provisionamento & Migração",
      description:
        "Subimos a nova infraestrutura e realizamos a migração dos dados e serviços com segurança.",
    },
    {
      title: "Monitoramento Contínuo",
      description:
        "Configuramos os painéis de alerta e acompanhamos a saúde do ambiente 24/7.",
    },
  ];

  const faqItems = [
    {
      question: "O que é DevOps?",
      answer:
        "DevOps é a união de Pessoas, Processos e Ferramentas para permitir a entrega contínua de valor. Na prática, é o que faz seu software ser lançado rápido e funcionar sem cair.",
    },
    {
      question: "Vocês trabalham com qual Cloud?",
      answer:
        "Somos agnósticos, mas temos forte especialização em AWS (Amazon Web Services), Google Cloud Platform (GCP) e Microsoft Azure. Também trabalhamos com DigitalOcean e Vercel.",
    },
    {
      question: "Meu site vive caindo, vocês resolvem?",
      answer:
        "Sim. Uma das principais funções do DevOps é garantir a estabilidade. Analisamos a causa raiz das quedas e implementamos redundância e auto-scaling.",
    },
    {
      question: "O que é CI/CD?",
      answer:
        "Significa Integração Contínua e Entrega Contínua. É a automação que pega o código do desenvolvedor, testa e coloca no ar automaticamente.",
    },
    {
      question: "Vocês fazem migração de servidor local para a nuvem?",
      answer:
        "Sim. Ajudamos empresas a sair de servidores físicos (on-premise) e migrar para a nuvem para ganhar flexibilidade e segurança.",
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
                src="/CriacaoDeSites/devops.png" // Placeholder
                alt="DevOps e Infraestrutura em Nuvem"
                width={500}
                height={500}
                className={styles.heroImage}
                priority
              />
            </div>

            {/* Right: Content */}
            <div className={styles.content}>
              <h1 className={styles.headline}>DEVOPS & CLOUD INFRA</h1>
              <h2 className={styles.subHeadline}>
                Automatize, Escale e Blinde sua operação digital com engenharia
                de infraestrutura moderna.
              </h2>
              <p className={styles.description}>
                Código bom precisa de casa boa. Construímos infraestruturas de
                nuvem resilientes, escaláveis e automatizadas que garantem que
                seu software esteja sempre disponível, rápido e seguro, não
                importa o tamanho do tráfego.
              </p>

              <a href="#contato" className={styles.ctaButton}>
                OTIMIZAR MINHA INFRAESTRUTURA <PiArrowUpRightBold />
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
                No mundo digital, lentidão é o novo fora do ar. Uma estratégia
                de DevOps sólida não é apenas sobre tecnologia, é sobre garantir
                a continuidade e a velocidade do seu negócio.
              </p>
            </div>

            {/* Right: Detailed Text */}
            <div className={styles.infoContent}>
              <p className={styles.infoParagraph}>
                Muitas empresas perdem dinheiro por ineficiência operacional:
                servidores superdimensionados ociosos, ou pior, servidores que
                travam na Black Friday. Nossa abordagem resolve esses dois
                extremos.
              </p>
              <p className={styles.infoParagraph}>
                Utilizamos Infraestrutura como Código para tratar seus
                servidores com a mesma disciplina do seu software: versionado,
                testado e replicável. Isso elimina o funcionava na minha máquina
                e cria um ambiente de produção previsível e à prova de balas.
              </p>
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className={styles.featuresSection}>
          <div className={styles.featuresContainer}>
            <h2 className={styles.featuresTitle}>
              TECNOLOGIA DE PONTA<span>.</span>
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
              QUERO ESCALAR MEU SISTEMA <PiArrowUpRightBold />
            </a>
          </div>
        </section>

        {/* DIFFERENTIALS SECTION */}
        <section className={styles.differentialsSection}>
          <div className={styles.differentialsContainer}>
            <h2 className={styles.differentialsTitle}>
              NOSSO DNA<span>.</span>
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
              CAMINHO PARA A NUVEM<span>.</span>
            </h2>
            <span className={styles.methodSubtitle}>FLUXO DE PROJETO</span>

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
