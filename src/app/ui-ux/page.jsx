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
  PiPaintBrushBold,
  PiUsersBold,
  PiLayoutBold,
  PiFigmaLogoBold,
  PiEyeBold,
  PiDevicesBold,
  PiLightbulbBold,
} from "react-icons/pi";

export default function UiUxPage() {
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
      title: "Pesquisa de Usuário (UX Research)",
      description:
        "Entendemos profundamente quem é seu cliente, seus comportamentos e dores através de entrevistas e análise de dados para criar soluções que resolvem problemas reais.",
    },
    {
      title: "Wireframing & Arquitetura de Informação",
      description:
        "Planejamos a estrutura e o fluxo de navegação do seu projeto antes de qualquer design visual, garantindo que a hierarquia da informação faça sentido.",
    },
    {
      title: "Design de Interface (UI)",
      description:
        "Criamos interfaces visualmente deslumbrantes, modernas e alinhadas à identidade da sua marca, focadas em transmitir confiança e profissionalismo.",
    },
    {
      title: "Design System",
      description:
        "Desenvolvemos uma biblioteca de componentes padronizados (botões, fontes, cores) para garantir consistência visual e velocidade em manutenções futuras.",
    },
    {
      title: "Prototipagem Interativa",
      description:
        "Entregamos protótipos navegáveis de alta fidelidade no Figma, permitindo que você teste e valide o fluxo do usuário antes de escrever uma linha de código.",
    },
    {
      title: "Testes de Usabilidade",
      description:
        "Colocamos usuários reais para testar a interface e identificar pontos de fricção, ajustando o design para garantir a máxima facilidade de uso.",
    },
    {
      title: "Acessibilidade (WCAG)",
      description:
        "Projetamos interfaces inclusivas que podem ser utilizadas por pessoas com deficiências visuais ou motoras, ampliando seu alcance e cumprindo normas legais.",
    },
  ];

  const benefits = [
    {
      icon: <PiUsersBold />,
      text: "Aumento na retenção e satisfação dos usuários",
    },
    {
      icon: <PiRocketLaunchBold />,
      text: "Redução de custos com refatoração e suporte técnico",
    },
    {
      icon: <PiShieldCheckBold />,
      text: "Fortalecimento da percepção de valor da sua marca",
    },
  ];

  const differentials = [
    {
      icon: <PiLightbulbBold />,
      title: "Data-Driven Design",
      text: "Não 'achamos' nada. Nossas decisões de design são baseadas em dados, mapas de calor e métricas de comportamento do usuário.",
    },
    {
      icon: <PiFigmaLogoBold />,
      title: "Figma Mastery",
      text: "Utilizamos o Figma em seu potencial máximo, com Auto-Layout e Componentes Interativos, facilitando drasticamente o trabalho dos desenvolvedores.",
    },
    {
      icon: <PiLayoutBold />,
      title: "Foco em Conversão",
      text: "Unimos a beleza (UI) com a estratégia (Business) para criar interfaces que não apenas encantam, mas que convertem visitantes em clientes.",
    },
    {
      icon: <PiDevicesBold />,
      title: "Responsividade Real",
      text: "Projetamos pensando em como a interface se adapta a telas gigantes de desktop até os menores smartwatches, não apenas 'espremendo' conteúdo.",
    },
    {
      icon: <PiEyeBold />,
      title: "Heurísticas de Nielsen",
      text: "Aplicamos rigorosamente as 10 heurísticas de usabilidade para garantir que seu sistema seja intuitivo e previna erros do usuário.",
    },
    {
      icon: <PiPaintBrushBold />,
      title: "Pixel Perfect",
      text: "Obsessão pelos detalhes. Espaçamentos, tipografia e alinhamentos são calculados milimetricamente para um visual extremamente polido.",
    },
  ];

  const methodSteps = [
    {
      title: "Imersão & Discovery",
      description:
        "Mergulhamos no seu negócio entender os objetivos do produto e o perfil dos usuários que irão utilizá-lo.",
    },
    {
      title: "Definição de Jornada",
      description:
        "Mapeamos todos os passos que o usuário dará dentro do sistema (User Flow) para identificar caminhos mais curtos e eficientes.",
    },
    {
      title: "Wireframes (Baixa Fidelidade)",
      description:
        "Desenhamos o esqueleto das telas focando apenas na funcionalidade e disposição dos elementos, sem distrações visuais.",
    },
    {
      title: "Visual Design (Alta Fidelidade)",
      description:
        "Aplicamos cores, tipografia, ícones e imagens para dar vida ao projeto, criando o 'Look & Feel' final da interface.",
    },
    {
      title: "Prototipagem",
      description:
        "Conectamos as telas criando um simulador navegável do aplicativo ou site, idêntico ao produto real.",
    },
    {
      title: "Validação & Testes",
      description:
        "Apresentamos o protótipo para validação e, se possível, realizamos testes rápidos com usuários para ajustes finais.",
    },
    {
      title: "Handover (Entrega)",
      description:
        "Preparamos o arquivo para os desenvolvedores, com todas as especificações de medidas, assets e guia de estilos (Styleguide).",
    },
  ];

  const faqItems = [
    {
      question: "Qual a diferença entre UI e UX?",
      answer:
        "UX (User Experience) foca na lógica, facilidade de uso e como o usuário se sente. UI (User Interface) foca no visual, nas cores, tipografia e beleza. Nós unimos os dois.",
    },
    {
      question: "Vocês entregam o código ou só o design?",
      answer:
        "Neste serviço de UI/UX, entregamos os arquivos de design (Figma) prontos para desenvolvimento. Se você precisar do código, também oferecemos o serviço de Desenvolvimento Web/Mobile.",
    },
    {
      question: "Já tenho um sistema, vocês fazem Redesign?",
      answer:
        "Sim! O Redesign é focado em melhorar a usabilidade e modernizar o visual de sistemas legados que ficaram ultrapassados ou difíceis de usar.",
    },
    {
      question: "Quanto tempo demora um projeto de Design?",
      answer:
        "Depende da complexidade (número de telas). Projetos menores levam de 2 a 3 semanas, enquanto sistemas complexos podem levar meses de trabalho contínuo.",
    },
    {
      question: "O que é um Design System e eu preciso de um?",
      answer:
        "É um manual vivo da sua interface. Se você planeja crescer seu produto a longo prazo, ter um Design System é essencial para manter a consistência e economizar tempo futuro.",
    },
    {
      question: "Vocês fazem design de aplicativos também?",
      answer:
        "Sim. Somos especialistas em design de interfaces mobile (iOS Human Interface Guidelines e Android Material Design).",
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
                src="/CriacaoDeSites/uiuxdesigner.png" // Placeholder - user needs to ensure this image exists
                alt="UI/UX Design de Interfaces"
                width={500}
                height={500}
                className={styles.heroImage}
                priority
              />
            </div>

            {/* Right: Content */}
            <div className={styles.content}>
              <h1 className={styles.headline}>UI/UX DESIGN DE INTERFACES</h1>
              <h2 className={styles.subHeadline}>
                Criamos experiências digitais apaixonantes, intuitivas e focadas
                em conversão.
              </h2>
              <p className={styles.description}>
                Transformamos ideias complexas em interfaces simples e
                elegantes. Utilizamos pesquisa, estratégia e design visual para
                garantir que seu produto não seja apenas bonito, mas
                extremamente funcional e fácil de usar.
              </p>

              <a href="#contato" className={styles.ctaButton}>
                INICIAR PROJETO DE DESIGN <PiArrowUpRightBold />
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
                Design não é apenas o que parece e o que se sente. Design é como
                funciona. Uma interface ruim custa caro: perde clientes, gera
                chamados de suporte e frustração.
              </p>
            </div>

            {/* Right: Detailed Text */}
            <div className={styles.infoContent}>
              <p className={styles.infoParagraph}>
                No mundo digital atual, a paciência do usuário é zero. Se seu
                site ou aplicativo for confuso, ele vai para o concorrente em um
                clique. O UI/UX Design é a ferramenta estratégica para prender a
                atenção e guiar o usuário ao sucesso.
              </p>
              <p className={styles.infoParagraph}>
                Nossa metodologia une estética refinada com arquitetura de
                informação sólida. Projetamos cada botão, cada cor e cada
                interação pensando no comportamento humano, reduzindo a carga
                cognitiva e tornando a navegação fluida e prazerosa.
              </p>
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className={styles.featuresSection}>
          <div className={styles.featuresContainer}>
            <h2 className={styles.featuresTitle}>
              O QUE ENTREGAMOS<span>.</span>
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
              QUERO UM DESIGN INCRÍVEL <PiArrowUpRightBold />
            </a>
          </div>
        </section>

        {/* DIFFERENTIALS SECTION */}
        <section className={styles.differentialsSection}>
          <div className={styles.differentialsContainer}>
            <h2 className={styles.differentialsTitle}>
              DIFERENCIAIS<span>.</span>
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
              DESIGN THINKING<span>.</span>
            </h2>
            <span className={styles.methodSubtitle}>
              NOSSO PROCESSO CRIATIVO
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
