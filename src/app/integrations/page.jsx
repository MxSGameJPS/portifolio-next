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
  PiNetworkBold,
  PiPuzzlePieceBold,
  PiArrowsLeftRightBold,
  PiCurrencyDollarBold,
  PiShareNetworkBold,
  PiCubeTransparentBold,
  PiGearSixBold,
  PiShieldCheckBold,
  PiLightningBold,
} from "react-icons/pi";

export default function IntegrationsPage() {
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
      title: "Integração de ERP e CRM",
      description:
        "Sincronizamos seu sistema de gestão (SAP, Totvs, Bling) com seu CRM (Salesforce, HubSpot, RD Station) para manter os dados de vendas e estoque sempre alinhados.",
    },
    {
      title: "Gateways de Pagamento",
      description:
        "Implementação robusta de processadores como Stripe, PayPal, Pagar.me e Mercado Pago, incluindo gestão de assinaturas (SaaS) e split de pagamentos.",
    },
    {
      title: "Conectores Personalizados",
      description:
        "Criamos soluções sob medida para conectar sistemas que não possuem integração nativa, desenvolvendo middlewares seguros e eficientes.",
    },
    {
      title: "Automação de Marketing",
      description:
        "Conectamos seu site ou app a ferramentas de e-mail marketing e automação, enviando leads qualificados diretamente para o fluxo de nutrição.",
    },
    {
      title: "APIs de Logística",
      description:
        "Integração com Correios, transportadoras e sistemas de frete (Melhor Envio, Frenet) para cálculo de prazo e preço em tempo real.",
    },
    {
      title: "Social Login & SSO",
      description:
        "Facilitamos a vida do usuário permitindo login com Google, Facebook, Apple ou Single Sign-On corporativo (Okta, Azure AD).",
    },
    {
      title: "Migração de Dados",
      description:
        "Scripts inteligentes para transferir grandes volumes de dados de sistemas legados para novas plataformas sem perda de informação.",
    },
  ];

  const benefits = [
    {
      icon: <PiPlugsConnectedBold />,
      text: "Eliminação do trabalho manual de redigitação de dados",
    },
    {
      icon: <PiCurrencyDollarBold />,
      text: "Redução de erros operacionais que custam dinheiro",
    },
    {
      icon: <PiNetworkBold />,
      text: "Ecossistema unificado onde todos os sistemas conversam",
    },
  ];

  const differentials = [
    {
      icon: <PiPuzzlePieceBold />,
      title: "Soluções Agnósticas",
      text: "Não importa a tecnologia do seu sistema atual (PHP, Java, .NET), nós encontramos a melhor forma de conectar.",
    },
    {
      icon: <PiShieldCheckBold />,
      title: "Segurança na Transmissão",
      text: "Garantimos que os dados trafeguem criptografados e que apenas fontes autorizadas possam acessar seus endpoints.",
    },
    {
      icon: <PiLightningBold />,
      title: "Real-time Processing",
      text: "Priorizamos arquiteturas baseadas em eventos (Webhooks), para que a informação chegue no outro lado instantaneamente.",
    },
    {
      icon: <PiGearSixBold />,
      title: "Monitoramento de Falhas",
      text: "Se uma integração falhar (ex: API de terceiro caiu), nosso sistema detecta, alerta e tenta reenviar automaticamente.",
    },
    {
      icon: <PiCubeTransparentBold />,
      title: "Documentação Clara",
      text: "Entregamos documentação técnica de como as integrações funcionam, facilitando a manutenção futura pela sua equipe.",
    },
    {
      icon: <PiShareNetworkBold />,
      title: "Escalabilidade",
      text: "Sistemas preparados para processar desde algumas centenas até milhões de requisições por dia sem gargalos.",
    },
  ];

  const methodSteps = [
    {
      title: "Análise de Fluxo",
      description:
        "Desenhamos o caminho que o dado deve percorrer entre os sistemas Origem e Destino.",
    },
    {
      title: "Mapeamento de Dados (De-Para)",
      description:
        "Definimos quais campos correspondem a quais (ex: 'nome_cliente' no sistema A vira 'customerName' no sistema B).",
    },
    {
      title: "Escolha da Estratégia",
      description:
        "Decidimos entre integração via API (REST/SOAP), troca de arquivos (CSV/XML) ou acesso direto ao banco, dependendo do cenário.",
    },
    {
      title: "Desenvolvimento do Middleware",
      description:
        "Criamos o código que faz a ponte, aplicando regras de negócio e validações necessárias no meio do caminho.",
    },
    {
      title: "Testes de Integração",
      description:
        "Simulamos cenários reais e de borda para garantir que a sincronização funcione perfeitamente.",
    },
    {
      title: "Monitoramento em Produção",
      description:
        "Ativamos logs detalhados para rastrear qualquer anomalia no tráfego de dados.",
    },
  ];

  const faqItems = [
    {
      question: "Vocês integram com [Sistema Específico]?",
      answer:
        "Provavelmente sim. Se o sistema tiver uma API aberta ou permitir exportação de dados, nós conseguimos integrar. Já trabalhamos com dezenas de plataformas.",
    },
    {
      question: "E se o outro sistema não tiver API?",
      answer:
        "Existem alternativas, como conectar diretamente no banco de dados, usar troca de arquivos via FTP ou, em último caso, automação via RPA (robôs).",
    },
    {
      question: "A integração acontece em tempo real?",
      answer:
        "Depende da tecnologia disponível nos sistemas envolvidos. Preferimos sempre tempo real (Webhooks), mas em alguns casos antigos pode ser necessário rodar em intervalos (Batch processing).",
    },
    {
      question: "É seguro integrar sistemas financeiros?",
      answer:
        "Sim. Seguimos padrões bancários de segurança (criptografia TLS 1.2+, OAuth2) e nunca armazenamos dados de cartão de crédito nos nossos servidores (PCI Compliance).",
    },
    {
      question: "O que acontece se a internet cair?",
      answer:
        "Implementamos filas e mecanismos de 'Retry' (reatentativa). O sistema guarda a informação e tenta enviar novamente assim que a conexão voltar, garantindo que nenhum dado se perca.",
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
                src="/CriacaoDeSites/integrations.png" // Placeholder
                alt="Integração de Sistemas e APIs"
                width={500}
                height={500}
                className={styles.heroImage}
                priority
              />
            </div>

            {/* Right: Content */}
            <div className={styles.content}>
              <h1 className={styles.headline}>INTEGRAÇÃO DE SISTEMAS</h1>
              <h2 className={styles.subHeadline}>
                Faça suas ferramentas conversarem entre si e elimine o trabalho
                manual repetitivo.
              </h2>
              <p className={styles.description}>
                Empresas modernas usam dezenas de softwares diferentes. O
                segredo da eficiência está em conectar esses pontos. Unificamos
                seu ecossistema digital, garantindo que a informação flua
                automaticamente entre Vendas, Marketing, Financeiro e Logística.
              </p>

              <a href="#contato" className={styles.ctaButton}>
                CONECTAR MEUS SISTEMAS <PiArrowUpRightBold />
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
                Dados isolados em &apos;ilhas&apos; (silos) são o maior inimigo
                da produtividade. Integração não é gasto, é investimento direto
                em tempo e redução de erros humanos.
              </p>
            </div>

            {/* Right: Detailed Text */}
            <div className={styles.infoContent}>
              <p className={styles.infoParagraph}>
                Quantas vezes sua equipe precisou copiar dados de uma planilha
                para colar no sistema de gestão? Ou conferir se o pagamento caiu
                no banco para liberar o pedido no site? Nós automatizamos esses
                processos de ponta a ponta.
              </p>
              <p className={styles.infoParagraph}>
                Desenvolvemos &quot;pontes&quot; inteligentes entre softwares.
                Seja um legado antigo ou uma startup moderna com API REST,
                encontramos a maneira mais segura e eficiente de fazer a troca
                de dados acontecer.
              </p>
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className={styles.featuresSection}>
          <div className={styles.featuresContainer}>
            <h2 className={styles.featuresTitle}>
              O QUE CONECTAMOS<span>.</span>
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
              QUERO AUTOMATIZAR PROCESSOS <PiArrowUpRightBold />
            </a>
          </div>
        </section>

        {/* DIFFERENTIALS SECTION */}
        <section className={styles.differentialsSection}>
          <div className={styles.differentialsContainer}>
            <h2 className={styles.differentialsTitle}>
              COMO TRABALHAMOS<span>.</span>
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
              O PROCESSO DE CONEXÃO<span>.</span>
            </h2>
            <span className={styles.methodSubtitle}>PASSO A PASSO</span>

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
