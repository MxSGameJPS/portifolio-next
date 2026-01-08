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
  PiShareNetworkBold,
  PiChatCircleDotsBold,
  PiMegaphoneBold,
  PiUserCircleBold,
  PiRobotBold,
  PiChartPieSliceBold,
  PiFingerprintSimpleBold,
  PiLightningBold,
  PiLinkBold,
  PiUsersThreeBold,
} from "react-icons/pi";

export default function SocialMediaPage() {
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
      title: "Chatbots de Atendimento (WhatsApp/Instagram)",
      description:
        "Desenvolvemos robôs inteligentes que qualificam leads, tiram dúvidas frequentes e agendam reuniões automaticamente, 24 horas por dia.",
    },
    {
      title: "Integração via API Oficial (Meta/LinkedIn)",
      description:
        "Conectamos seu sistema interno diretamente com Facebook, Instagram e LinkedIn para publicação automática de conteúdo ou extração de dados.",
    },
    {
      title: "Social Login",
      description:
        "Facilite o cadastro no seu site ou app permitindo que o usuário entre com um clique usando sua conta do Google, Facebook ou Apple.",
    },
    {
      title: "Monitoramento de Marca",
      description:
        "Ferramentas que escaneiam as redes sociais em busca de menções à sua empresa, permitindo agir rápido sobre feedbacks ou crises.",
    },
    {
      title: "Pixel e API de Conversão",
      description:
        "Implementação avançada do Pixel do Facebook e CAPI (Conversion API) para rastrear eventos server-side e otimizar suas campanhas de anúncios.",
    },
    {
      title: "Catálogo de Produtos (Instagram Shopping)",
      description:
        "Sincronizamos automaticamente o estoque do seu e-commerce com a loja do Instagram/Facebook, mantendo preços e disponibilidade sempre atualizados.",
    },
    {
      title: "Dashboard de Métricas Unificado",
      description:
        "Agregamos dados de várias redes (likes, alcance, engajamento) em um único painel para facilitar a análise de performance.",
    },
  ];

  const benefits = [
    {
      icon: <PiRobotBold />,
      text: "Atendimento imediato ao cliente, sem filas de espera",
    },
    {
      icon: <PiChartPieSliceBold />,
      text: "Dados precisos para otimizar o ROI de mídia paga",
    },
    {
      icon: <PiLightningBold />,
      text: "Automação de tarefas repetitivas de postagem e gestão",
    },
  ];

  const differentials = [
    {
      icon: <PiShareNetworkBold />,
      title: "Omnichannel",
      text: "Integramos todos os canais (WhatsApp, Direct, Messenger) em uma única caixa de entrada para sua equipe de atendimento.",
    },
    {
      icon: <PiFingerprintSimpleBold />,
      title: "Personalização",
      text: "Nossos bots não parecem robôs burros. Usamos fluxos de conversação naturais e, quando possível, IA para humanizar o contato.",
    },
    {
      icon: <PiLinkBold />,
      title: "Deep Linking",
      text: "Criamos links inteligentes que abrem direto no app da rede social, aumentando a taxa de conversão das suas campanhas.",
    },
    {
      icon: <PiUsersThreeBold />,
      title: "Gestão de Comunidade",
      text: "Ferramentas para automatizar a aprovação de membros e moderação de conteúdo em grupos e comunidades.",
    },
    {
      icon: <PiMegaphoneBold />,
      title: "Viral Loops",
      text: "Mecanismos de indicação (Member-Get-Member) integrados às redes sociais para incentivar o compartilhamento orgânico.",
    },
    {
      icon: <PiChatCircleDotsBold />,
      title: "Backup de Conversas",
      text: "Sistemas para armazenar o histórico de atendimento fora das redes sociais, garantindo a propriedade dos dados do cliente.",
    },
  ];

  const methodSteps = [
    {
      title: "Definição do Objetivo",
      description:
        "Entendemos se sua necessidade é atendimento (SAC), vendas ou inteligência de dados.",
    },
    {
      title: "Escolha da Plataforma/API",
      description:
        "Selecionamos as APIs oficiais (WhatsApp Business API, Instagram Graph API) adequadas para o projeto.",
    },
    {
      title: "Design de Conversa (VUI)",
      description:
        "Se for um bot, desenhamos o fluxo de diálogo para garantir que ele seja útil e não frustrante.",
    },
    {
      title: "Desenvolvimento & Integração",
      description:
        "Codificamos a solução conectando as redes sociais ao seu CRM ou banco de dados.",
    },
    {
      title: "Homologação",
      description:
        "Testes em ambiente controlado para garantir que as automações funcionem sem bugs.",
    },
    {
      title: "Go Live & Treinamento",
      description:
        "Lançamento da ferramenta e treinamento da sua equipe em como interagir ou monitorar a automação.",
    },
  ];

  const faqItems = [
    {
      question: "Vocês fazem gestão de posts (Marketing)?",
      answer:
        "Não somos uma agência de marketing. Nós desenvolvemos a **tecnologia** e as **automações** que dão superpoderes ao seu marketing, mas não criamos o conteúdo dos posts.",
    },
    {
      question: "O chatbot do WhatsApp é oficial?",
      answer:
        "Sim, trabalhamos apenas com a API Oficial do WhatsApp Business (WABA), o que garante estabilidade e evita o banimento do seu número, diferente de soluções piratas.",
    },
    {
      question: "Consigo atender junto com o robô?",
      answer:
        "Com certeza. Configuramos o sistema de transbordo (handover) para que o robô faça a triagem e passe para um humano quando o assunto ficar complexo.",
    },
    {
      question: "É seguro integrar meus dados com o Facebook?",
      answer:
        "Sim. Utilizamos os protocolos de autenticação segura (OAuth) exigidos pelas plataformas. Você concede permissão apenas para o que for necessário.",
    },
    {
      question: "Quanto custa o WhatsApp API?",
      answer:
        "Além do desenvolvimento, a Meta cobra por conversa iniciada (custo variável). Nós te ajudamos a entender e estimar esses custos antes de começar.",
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
                src="/CriacaoDeSites/social-media.png" // Placeholder
                alt="Automação e Integração de Redes Sociais"
                width={500}
                height={500}
                className={styles.heroImage}
                priority
              />
            </div>

            {/* Right: Content */}
            <div className={styles.content}>
              <h1 className={styles.headline}>AUTOMAÇÃO DE REDES SOCIAIS</h1>
              <h2 className={styles.subHeadline}>
                Venda e atenda no piloto automático integrando WhatsApp,
                Instagram e Facebook ao seu sistema.
              </h2>
              <p className={styles.description}>
                Seus clientes estão nas redes sociais o dia todo. Desenvolvemos
                tecnologias, chatbots e integrações que permitem que sua empresa
                esteja lá também, respondendo instantaneamente e capturando
                oportunidades 24/7, sem depender apenas de trabalho manual.
              </p>

              <a href="#contato" className={styles.ctaButton}>
                AUTOMATIZAR MEU ATENDIMENTO <PiArrowUpRightBold />
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
                O tempo de resposta é o fator #1 na conversão de vendas online.
                Um cliente respondido em 1 minuto tem 391% mais chances de
                comprar do que um respondido após 1 hora.
              </p>
            </div>

            {/* Right: Detailed Text */}
            <div className={styles.infoContent}>
              <p className={styles.infoParagraph}>
                Não se trata apenas de &quot;estar&quot; nas redes sociais, mas
                de torná-las torná-las um canal de performance integrado ao seu
                negócio. Nossas soluções vão além do post bonitinho: criamos
                máquinas de vendas e atendimento.
              </p>
              <p className={styles.infoParagraph}>
                Utilizando as APIs oficiais da Meta e LinkedIn, conseguimos
                automatizar processos que antes consumiam horas da sua equipe,
                como qualificar leads no Direct, sincronizar catálogo de
                produtos ou extrair relatórios complexos de engajamento.
              </p>
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className={styles.featuresSection}>
          <div className={styles.featuresContainer}>
            <h2 className={styles.featuresTitle}>
              TECNOLOGIA SOCIAL<span>.</span>
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
              QUERO UM CHATBOT INTELIGENTE <PiArrowUpRightBold />
            </a>
          </div>
        </section>

        {/* DIFFERENTIALS SECTION */}
        <section className={styles.differentialsSection}>
          <div className={styles.differentialsContainer}>
            <h2 className={styles.differentialsTitle}>
              NOSSO DIFERENCIAL<span>.</span>
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
              FLUXO DE AUTOMAÇÃO<span>.</span>
            </h2>
            <span className={styles.methodSubtitle}>ETAPAS DO PROJETO</span>

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
