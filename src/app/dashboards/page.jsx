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
  PiChartBarBold,
  PiTableBold,
  PiPresentationChartBold,
  PiGaugeBold,
  PiDatabaseBold,
  PiEyeBold,
  PiSlidersHorizontalBold,
  PiDevicesBold,
  PiLightningBold,
  PiBrainBold,
} from "react-icons/pi";

export default function DashboardsPage() {
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
      title: "Visualização de Dados em Tempo Real",
      description:
        "Transformamos fluxos de dados complexos em gráficos dinâmicos que se atualizam no momento em que os eventos acontecem.",
    },
    {
      title: "Design de Interface Focado em Insights",
      description:
        "Criamos layouts limpos onde a informação mais crítica salta aos olhos, permitindo leitura rápida e tomada de decisão imediata.",
    },
    {
      title: "Integração Multifonte",
      description:
        "Centralizamos dados vindo de APIs, SQL, planilhas e CRMs em um único painel de controle unificado.",
    },
    {
      title: "Filtros e Relatórios Personalizados",
      description:
        "Ferramentas avançadas para o usuário 'fatiar' os dados (drill-down) e exportar relatórios em PDF, Excel ou CSV.",
    },
    {
      title: "Permissões Granulares",
      description:
        "Controle total sobre quem vê o quê. Defina visualizações diferentes para diretores, gerentes e analistas.",
    },
    {
      title: "Alertas Inteligentes",
      description:
        "Configure gatilhos automáticos para ser notificado por e-mail ou SMS quando métricas críticas atingirem determinados patamares.",
    },
    {
      title: "Responsividade Total",
      description:
        "Acesse seus indicadores chaves de desempenho (KPIs) de qualquer lugar, seja no desktop, tablet ou celular.",
    },
  ];

  const benefits = [
    {
      icon: <PiEyeBold />,
      text: "Visibilidade total da saúde do seu negócio em uma única tela",
    },
    {
      icon: <PiLightningBold />,
      text: "Agilidade para reagir a problemas antes que se tornem crises",
    },
    {
      icon: <PiBrainBold />,
      text: "Decisões baseadas em fatos e números, não em intuição",
    },
  ];

  const differentials = [
    {
      icon: <PiChartBarBold />,
      title: "Data Storytelling",
      text: "Mais do que gráficos bonitos, organizamos a informação para contar a história do que está acontecendo na empresa.",
    },
    {
      icon: <PiDatabaseBold />,
      title: "Alta Performance",
      text: "Otimizamos queries pesadas para carregar milhões de registros em segundos, sem travar o navegador.",
    },
    {
      icon: <PiSlidersHorizontalBold />,
      title: "Customização Total",
      text: "Não usamos templates engessados. Criamos componentes visuais específicos para a necessidade do seu setor.",
    },
    {
      icon: <PiGaugeBold />,
      title: "UX Intuitiva",
      text: "Dashboards tão fáceis de usar que sua equipe não precisará de treinamento para começar a explorar os dados.",
    },
    {
      icon: <PiPresentationChartBold />,
      title: "Interatividade",
      text: "Gráficos clicáveis que permitem explorar os detalhes por trás dos números macro.",
    },
    {
      icon: <PiDevicesBold />,
      title: "Tecnologia Moderna",
      text: "Utilizamos as bibliotecas de visualização mais avançadas do mercado (D3.js, Chart.js, Recharts) integradas ao React.",
    },
  ];

  const methodSteps = [
    {
      title: "Mapeamento de KPIs",
      description:
        "Reuniões com stakeholders para definir quais métricas realmente importam para o sucesso do negócio.",
    },
    {
      title: "Arquitetura de Dados",
      description:
        "Planejamento de como os dados serão coletados, tratados e armazenados para consulta rápida.",
    },
    {
      title: "Wireframing & Prototipagem",
      description:
        "Desenho da estrutura do painel para validar a disposição das informações antes de programar.",
    },
    {
      title: "Desenvolvimento Frontend",
      description:
        "Implementação dos componentes visuais e conectores de dados utilizando React/Next.js.",
    },
    {
      title: "Testes de Carga",
      description:
        "Simulação de grandes volumes de dados para garantir que o dashboard permaneça rápido.",
    },
    {
      title: "Entrega e Treinamento",
      description:
        "Deploy da solução e capacitação da equipe para extrair o máximo das ferramentas de análise.",
    },
  ];

  const faqItems = [
    {
      question: "Vocês usam PowerBI ou Tableau?",
      answer:
        "Nós desenvolvemos dashboards customizados em código (Web App). Isso oferece muito mais flexibilidade, performance e zero custo de licença mensal por usuário.",
    },
    {
      question: "Consigo conectar com meu banco de dados atual?",
      answer:
        "Sim, conectamos com praticamente qualquer fonte de dados: MySQL, PostgreSQL, SQL Server, MongoDB, APIs externas e até planilhas do Google Sheets.",
    },
    {
      question: "É seguro colocar dados sensíveis na web?",
      answer:
        "Totalmente. Utilizamos criptografia de ponta, autenticação segura e, se necessário, o dashboard pode rodar apenas na rede interna (Intranet/VPN) da sua empresa.",
    },
    {
      question: "Posso exportar os dados?",
      answer:
        "Sim, implementamos botões de exportação para que você possa baixar as tabelas e gráficos em formatos como EXCEL, CSV, PDF ou Imagem.",
    },
    {
      question: "O dashboard funciona no celular?",
      answer:
        "Sim, desenvolvemos com design responsivo, adaptando a visualização dos gráficos para que fiquem legíveis em telas de smartphones.",
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
                src="/CriacaoDeSites/dashboards.png" // Placeholder
                alt="Dashboards e Painéis Administrativos"
                width={500}
                height={500}
                className={styles.heroImage}
                priority
              />
            </div>

            {/* Right: Content */}
            <div className={styles.content}>
              <h1 className={styles.headline}>DASHBOARDS INTELIGENTES</h1>
              <h2 className={styles.subHeadline}>
                Transforme dados brutos em insights visuais poderosos para guiar
                suas decisões.
              </h2>
              <p className={styles.description}>
                Chega de planilhas confusas e dados dispersos. Desenvolvemos
                painéis de controle (Dashboards) personalizados, interativos e
                em tempo real, que colocam o controle da sua operação na ponta
                dos seus dedos.
              </p>

              <a href="#contato" className={styles.ctaButton}>
                VISUALIZAR MEUS DADOS <PiArrowUpRightBold />
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
                O que não é medido, não é gerenciado. Um bom dashboard é o
                painel de instrumentos que permite ao piloto (você) conduzir a
                empresa com segurança através da tempestade.
              </p>
            </div>

            {/* Right: Detailed Text */}
            <div className={styles.infoContent}>
              <p className={styles.infoParagraph}>
                Vivemos na era do Big Data, mas ter muitos dados não significa
                ter informação. O desafio moderno é filtrar o ruído e destacar o
                sinal. Nossos dashboards são projetados com foco em usabilidade
                e clareza cognitiva.
              </p>
              <p className={styles.infoParagraph}>
                Diferente de ferramentas de prateleira que cobram caro por
                usuário e possuem limitações visuais, nossas soluções
                customizadas são assets da sua empresa: sem mensalidades,
                ilimitadas e feitas sob medida para o seu fluxo de trabalho.
              </p>
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className={styles.featuresSection}>
          <div className={styles.featuresContainer}>
            <h2 className={styles.featuresTitle}>
              PODER DE ANÁLISE<span>.</span>
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
              QUERO UM PAINEL DE CONTROLE <PiArrowUpRightBold />
            </a>
          </div>
        </section>

        {/* DIFFERENTIALS SECTION */}
        <section className={styles.differentialsSection}>
          <div className={styles.differentialsContainer}>
            <h2 className={styles.differentialsTitle}>
              DIFERENCIAIS TÉCNICOS<span>.</span>
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
              DO DADO AO INSIGHT<span>.</span>
            </h2>
            <span className={styles.methodSubtitle}>
              FLUXO DE IMPLEMENTAÇÃO
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
