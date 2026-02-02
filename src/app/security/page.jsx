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
  PiShieldCheckBold,
  PiLockKeyBold,
  PiSirenBold,
  PiBugBold,
  PiFingerprintBold,
  PiEyeClosedBold,
  PiFileMagnifyingGlassBold,
  PiWallBold,
  PiCloudBold,
  PiUserFocusBold,
} from "react-icons/pi";

export default function SecurityPage() {
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
      title: "Auditoria de Código (Code Review)",
      description:
        "Analisamos linha por linha do seu software em busca de brechas de segurança, backdoors ou más práticas que possam comprometer a aplicação.",
    },
    {
      title: "Pentest (Teste de Intrusão)",
      description:
        "Simulamos ataques reais de hackers (Black Box / White Box) para testar as defesas do seu sistema e corrigir falhas antes que elas sejam exploradas.",
    },
    {
      title: "Adequação à LGPD/GDPR",
      description:
        "Mapeamos o fluxo de dados dos usuários e implementamos as medidas técnicas necessárias (criptografia, anonimização) para cumprir a lei.",
    },
    {
      title: "Implementação de WAF & DDoS Protection",
      description:
        "Configuração de Firewalls de Aplicação (Cloudflare, AWS WAF) para bloquear tráfego malicioso e mitigar ataques de negação de serviço.",
    },
    {
      title: "Gestão de Identidade e Acesso (IAM)",
      description:
        "Implementação de políticas de acesso rigorosas, autenticação multifator (MFA) e Single Sign-On para garantir que apenas pessoas autorizadas entrem.",
    },
    {
      title: "Criptografia de Dados",
      description:
        "Proteção de dados sensíveis tanto em repouso (no banco de dados) quanto em trânsito (HTTPS/TLS) utilizando algoritmos de nível militar.",
    },
    {
      title: "Backup & Recuperação de Desastres",
      description:
        "Criação e teste de rotinas de backup imutáveis, garantindo que sua empresa possa se recuperar rapidamente (RTO/RPO) em caso de ransomware.",
    },
  ];

  const benefits = [
    {
      icon: <PiLockKeyBold />,
      text: "Proteção da reputação da sua marca e da confiança dos clientes",
    },
    {
      icon: <PiSirenBold />,
      text: "Prevenção de prejuízos financeiros causados por vazamentos",
    },
    {
      icon: <PiFileMagnifyingGlassBold />,
      text: "Conformidade legal para evitar multas pesadas",
    },
  ];

  const differentials = [
    {
      icon: <PiBugBold />,
      title: "Hacker Mindset",
      text: "Nossa equipe pensa como o atacante. Conhecemos as ferramentas e táticas usadas no submundo do cibercrime.",
    },
    {
      icon: <PiFingerprintBold />,
      title: "Zero Trust",
      text: "Adotamos a filosofia de 'não confie em ninguém, verifique sempre'. Cada requisição interna ou externa é autenticada.",
    },
    {
      icon: <PiEyeClosedBold />,
      title: "Confidencialidade",
      text: "Todos os nossos processos são cobertos por rigorosos acordos de não-divulgação (NDA). Sua segurança é nosso segredo.",
    },
    {
      icon: <PiWallBold />,
      title: "Defesa em Profundidade",
      text: "Não confiamos em uma única barreira. Criamos múltiplas camadas de proteção (App, Rede, Host, Dados).",
    },
    {
      icon: <PiCloudBold />,
      title: "Cloud Security",
      text: "Especialistas em blindar ambientes de nuvem (AWS, Azure), corrigindo configurações inseguras (misconfigurations) comuns.",
    },
    {
      icon: <PiUserFocusBold />,
      title: "Treinamento",
      text: "Além da tecnologia, educamos sua equipe para não cair em engenharia social e phishing, o vetor de ataque mais comum.",
    },
  ];

  const methodSteps = [
    {
      title: "Reconhecimento",
      description:
        "Mapeamos todos os ativos digitais da empresa e entendemos a superfície de ataque exposta.",
    },
    {
      title: "Scan de Vulnerabilidades",
      description:
        "Rodamos ferramentas automatizadas para detectar falhas conhecidas em softwares desatualizados ou mal configurados.",
    },
    {
      title: "Análise Manual",
      description:
        "Especialistas revisam a lógica de negócios da aplicação procurando falhas que ferramentas automáticas não pegam.",
    },
    {
      title: "Relatório de Riscos",
      description:
        "Entregamos um documento classificado por criticidade (Alto, Médio, Baixo) com o impacto de cada falha.",
    },
    {
      title: "Remediação",
      description:
        "Apoiamos sua equipe de desenvolvimento na correção do código ou aplicamos os patches de infraestrutura necessários.",
    },
    {
      title: "Reteste",
      description:
        "Verificamos se as correções foram efetivas e se não introduziram novos problemas.",
    },
  ];

  const faqItems = [
    {
      question: "O que é um Pentest?",
      answer:
        "É um ataque controlado. Nossos especialistas tentam invadir seu sistema (com sua permissão) para encontrar as portas abertas antes que os criminosos o façam.",
    },
    {
      question: "Vocês emitem certificado de segurança?",
      answer:
        "Emitimos um laudo técnico atestando que os testes foram realizados e que as vulnerabilidades críticas foram corrigidas, o que serve para auditorias e parceiros.",
    },
    {
      question: "A segurança atrapalha a usabilidade?",
      answer:
        "Não se for bem feita. Nosso foco é segurança transparente. O usuário só percebe quando é estritamente necessário (ex: confirmar um login suspeito).",
    },
    {
      question: "Isso garante 100% de segurança?",
      answer:
        "Não existe 100% em segurança. O objetivo é tornar o custo do ataque tão alto que não valha a pena para o criminoso, além de garantir detecção rápida.",
    },
    {
      question: "Quanto custa uma auditoria?",
      answer:
        "Depende do escopo (tamanho do sistema, número de páginas/endpoints). Agende uma conversa para fazermos uma estimativa precisa.",
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
                src="/CriacaoDeSites/security.png" // Placeholder
                alt="Segurança da Informação e Compliance"
                width={500}
                height={500}
                className={styles.heroImage}
                priority
              />
            </div>

            {/* Right: Content */}
            <div className={styles.content}>
              <h1 className={styles.headline}>CONSULTORIA EM SEGURANÇA</h1>
              <h2 className={styles.subHeadline}>
                Proteja seus ativos digitais, seus dados e a reputação da sua
                empresa contra ciberataques.
              </h2>
              <p className={styles.description}>
                Segurança não é um produto, é um processo. Ajudamos sua empresa
                a identificar vulnerabilidades, blindar sistemas e criar uma
                cultura de proteção de dados, garantindo conformidade e
                tranquilidade para operar.
              </p>

              <a href="#contato" className={styles.ctaButton}>
                BLINDAR MEU NEGÓCIO <PiArrowUpRightBold />
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
                Existem dois tipos de empresas: as que já foram hackeadas e as
                que não sabem que foram. A pergunta não é &apos;se&apos;, mas
                &apos;quando&apos;. Esteja preparado.
              </p>
            </div>

            {/* Right: Detailed Text */}
            <div className={styles.infoContent}>
              <p className={styles.infoParagraph}>
                Com a LGPD em vigor e o aumento exponencial de ataques de
                Ransomware, negligenciar a segurança da informação é um risco de
                negócio inaceitável. Um vazamento de dados pode custar milhões
                em multas e destruir a confiança que levou anos para ser
                construída.
              </p>
              <p className={styles.infoParagraph}>
                Nossa abordagem de segurança é ofensiva e defensiva. Não apenas
                configuramos firewalls, nós agimos como &quot;hackers
                éticos&quot; para encontrar os pontos fracos que seus
                desenvolvedores deixaram passar, corrigindo-os na raiz.
              </p>
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className={styles.featuresSection}>
          <div className={styles.featuresContainer}>
            <h2 className={styles.featuresTitle}>
              SERVIÇOS DE PROTEÇÃO<span>.</span>
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
              SOLICITAR DIAGNÓSTICO <PiArrowUpRightBold />
            </a>
          </div>
        </section>

        {/* DIFFERENTIALS SECTION */}
        <section className={styles.differentialsSection}>
          <div className={styles.differentialsContainer}>
            <h2 className={styles.differentialsTitle}>
              EXPERTISE TÉCNICA<span>.</span>
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
              CICLO DE SEGURANÇA<span>.</span>
            </h2>
            <span className={styles.methodSubtitle}>METODOLOGIA</span>

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
