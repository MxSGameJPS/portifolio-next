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
  PiGlobeBold,
  PiUsersBold,
  PiNewspaperBold,
  PiKeyBold,
  PiLockKeyBold,
  PiIdentificationCardBold,
  PiFilesBold,
  PiMagnifyingGlassBold,
  PiTreeStructureBold,
  PiShieldCheckBold,
} from "react-icons/pi";

export default function PortalsPage() {
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
      title: "Intranets Corporativas",
      description:
        "Centralize a comunicação interna, notícias, documentos e ferramentas de RH em um ambiente seguro e exclusivo para seus colaboradores.",
    },
    {
      title: "Extranets e Portais de Parceiros",
      description:
        "Crie canais de comunicação seguros com fornecedores, franqueados ou representantes comerciais para troca de pedidos e arquivos.",
    },
    {
      title: "Portais de Notícias e Conteúdo",
      description:
        "Sites de alto tráfego preparados para lidar com milhares de acessos simultâneos, com CMS personalizado para jornalistas e editores.",
    },
    {
      title: "Áreas de Membros (Membership)",
      description:
        "Plataformas para venda de cursos, conteúdo premium ou comunidades exclusivas com gestão automatizada de assinaturas.",
    },
    {
      title: "Gestão Eletrônica de Documentos (GED)",
      description:
        "Sistemas robustos para upload, versionamento, busca e compartilhamento seguro de documentos corporativos.",
    },
    {
      title: "Single Sign-On (SSO)",
      description:
        "Integração com o login da sua empresa (Google Workspace, Microsoft AD) para que o funcionário não precise decorar mais uma senha.",
    },
    {
      title: "Busca Inteligente (Elasticsearch)",
      description:
        "Mecanismos de busca avançados que indexam milhares de documentos e páginas para encontrar a informação em milissegundos.",
    },
  ];

  const benefits = [
    {
      icon: <PiUsersBold />,
      text: "Engajamento e alinhamento da cultura organizacional",
    },
    {
      icon: <PiFilesBold />,
      text: "Fim do caos de arquivos perdidos em e-mails e pastas de rede",
    },
    {
      icon: <PiLockKeyBold />,
      text: "Segurança total no acesso à informação confidencial",
    },
  ];

  const differentials = [
    {
      icon: <PiIdentificationCardBold />,
      title: "Perfis de Acesso",
      text: "Controle granular de quem vê o quê. O estagiário vê uma tela, o diretor vê outra, tudo no mesmo portal.",
    },
    {
      icon: <PiGlobeBold />,
      title: "Alta Disponibilidade",
      text: "Arquitetura preparada para não cair, mesmo quando todos os funcionários acessam ao mesmo tempo (ex: holerite).",
    },
    {
      icon: <PiNewspaperBold />,
      title: "CMS Intuitivo",
      text: "Painel administrativo fácil de usar, permitindo que o RH ou Marketing publique conteúdo sem depender de TI.",
    },
    {
      icon: <PiMagnifyingGlassBold />,
      title: "Auditoria de Acesso",
      text: "Logs detalhados de quem acessou, baixou ou alterou cada documento, garantindo compliance e rastreabilidade.",
    },
    {
      icon: <PiTreeStructureBold />,
      title: "Organização Hierárquica",
      text: "Estrutura de departamentos e unidades de negócio refletida na organização do conteúdo e permissões.",
    },
    {
      icon: <PiShieldCheckBold />,
      title: "Segurança Avançada",
      text: "Proteção contra ataques de força bruta, autenticação em dois fatores (2FA) e criptografia de dados em repouso.",
    },
  ];

  const methodSteps = [
    {
      title: "Imersão",
      description:
        "Entendemos a estrutura da sua empresa, os fluxos de informação e os diferentes perfis de usuários.",
    },
    {
      title: "Arquitetura da Informação",
      description:
        "Desenhamos o mapa do site e a taxonomia (categorias) para garantir que a informação seja fácil de encontrar.",
    },
    {
      title: "Prototipagem",
      description:
        "Criação de wireframes navegáveis para validar a experiência de uso antes de escrever o código.",
    },
    {
      title: "Desenvolvimento Frontend & CMS",
      description:
        "Construção da interface e do painel de administração personalizado.",
    },
    {
      title: "Migração de Conteúdo",
      description:
        "Apoio na importação de documentos e notícias de sistemas antigos para o novo portal.",
    },
    {
      title: "Lançamento e Suporte",
      description:
        "Deploy em ambiente seguro e acompanhamento pós-lançamento para ajustes e melhorias.",
    },
  ];

  const faqItems = [
    {
      question: "Serve como rede social corporativa?",
      answer:
        "Sim, podemos implementar recursos sociais como curtidas, comentários, fóruns e perfis de colaboradores para estimular a interação.",
    },
    {
      question: "Posso hospedar no meu servidor interno?",
      answer:
        "Sim. Nossas soluções podem ser entregues em containers (Docker) prontos para rodar tanto na nuvem quanto na infraestrutura local (On-premise) da sua empresa.",
    },
    {
      question: "É compatível com o SharePoint?",
      answer:
        "Muitas vezes criamos portais que **substituem** o SharePoint pela complexidade e custo dele, mas também podemos criar interfaces modernas que consomem dados do SharePoint via API.",
    },
    {
      question: "Tem limite de usuários?",
      answer:
        "Não. Diferente de plataformas SaaS que cobram por usuário ('seat'), nossa solução tem custo fixo de desenvolvimento. Você pode ter 10 ou 10.000 usuários.",
    },
    {
      question: "Consigo restringir o acesso fora da empresa?",
      answer:
        "Sim, é possível configurar o portal para ser acessível apenas via VPN ou faixas de IP específicas da sua rede corporativa.",
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
                src="/CriacaoDeSites/portals.png" // Placeholder
                alt="Portais Corporativos e Intranets"
                width={500}
                height={500}
                className={styles.heroImage}
                priority
              />
            </div>

            {/* Right: Content */}
            <div className={styles.content}>
              <h1 className={styles.headline}>PORTAIS & INTRANETS</h1>
              <h2 className={styles.subHeadline}>
                Centralize a comunicação e o conhecimento da sua empresa em um
                ambiente digital seguro e exclusivo.
              </h2>
              <p className={styles.description}>
                Conecte seus colaboradores, parceiros e clientes em plataformas
                robustas de conteúdo e serviços. Desenvolvemos portais
                corporativos que organizam a informação, simplificam processos e
                fortalecem a cultura institucional.
              </p>

              <a href="#contato" className={styles.ctaButton}>
                CRIAR MEU PORTAL <PiArrowUpRightBold />
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
                Uma intranet moderna não é apenas um depósito de arquivos e
                avisos. É o workspace digital onde o trabalho acontece, a
                cultura é vivida e a inovação floresce.
              </p>
            </div>

            {/* Right: Detailed Text */}
            <div className={styles.infoContent}>
              <p className={styles.infoParagraph}>
                Empresas em crescimento sofrem com a dispersão da informação.
                Procedimentos estão em PDFs no e-mail, notícias no WhatsApp e
                formulários em papel. Um portal unifica tudo isso.
              </p>
              <p className={styles.infoParagraph}>
                Nós fugimos das soluções de intranet &quot;prontas&quot; que
                ninguém usa porque são feias e complexas. Criamos portais com UX
                de nível consumidor (comparável a redes sociais populares),
                garantindo alta adoção por parte dos colaboradores.
              </p>
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className={styles.featuresSection}>
          <div className={styles.featuresContainer}>
            <h2 className={styles.featuresTitle}>
              SOLUÇÕES CORPORATIVAS<span>.</span>
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
              QUERO ORGANIZAR MINHA EMPRESA <PiArrowUpRightBold />
            </a>
          </div>
        </section>

        {/* DIFFERENTIALS SECTION */}
        <section className={styles.differentialsSection}>
          <div className={styles.differentialsContainer}>
            <h2 className={styles.differentialsTitle}>
              SEGURANÇA E CONTROLE<span>.</span>
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
              CONSTRUÇÃO DA PLATAFORMA<span>.</span>
            </h2>
            <span className={styles.methodSubtitle}>NOSSO FLUXO</span>

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
