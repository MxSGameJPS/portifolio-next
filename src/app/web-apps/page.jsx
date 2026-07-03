"use client";

import { useId, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Contact from "../../components/Contact/Contact";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import { faqItems } from "./data";
import {
  PiArrowUpRightBold,
  PiCaretDownBold,
  PiRocketLaunchBold,
  PiShieldCheckBold,
  PiCpuBold,
  PiDatabaseBold,
  PiLockKeyBold,
  PiCodeBold,
  PiPlugsBold,
  PiCalendarCheckBold,
} from "react-icons/pi";

const features = [
  {
    title: "Abre rápido, cliente não desiste",
    description:
      "Páginas leves que carregam rápido no wi-fi e no 4G. Quanto menos o cliente espera, menos ele desiste antes de comprar ou entrar em contato.",
  },
  {
    title: "Encontrado no Google",
    description:
      "Estrutura preparada para busca: seu negócio aparece quando as pessoas procuram pelo que você faz — sem precisar pagar anúncio para todo clique.",
  },
  {
    title: "Funciona bem no celular",
    description:
      "A maioria acessa pelo telefone. Seu sistema se ajusta a celular, tablet e computador, mantendo a mesma experiência boa em qualquer tela.",
  },
  {
    title: "Seus dados protegidos (LGPD)",
    description:
      "Proteção contra invasão e vazamento e conformidade com a Lei Geral de Proteção de Dados. Tranquilidade para você e para os seus clientes.",
  },
  {
    title: "Você mesmo gerencia",
    description:
      "Painel simples para você mudar conteúdo, preços, produtos e usuários quando quiser — sem depender de programador para cada ajuste.",
  },
  {
    title: "Decisões com dados, não achismo",
    description:
      "Integração com Google Analytics para você enxergar o que funciona: de onde vêm os clientes e onde eles desistem, para melhorar com base em número.",
  },
];

const benefits = [
  {
    icon: <PiCodeBold />,
    text: "O código é seu: entrego tudo no fim, sem aluguel nem mensalidade de licença.",
  },
  {
    icon: <PiShieldCheckBold />,
    text: "Dados seguros e LGPD em dia, protegendo você e os seus clientes.",
  },
  {
    icon: <PiRocketLaunchBold />,
    text: "Pronto para crescer: aguenta mais acesso e novas funções conforme o negócio cresce.",
  },
];

const differentials = [
  {
    icon: <PiCpuBold />,
    title: "Tecnologia atual",
    text: "Uso Next.js e React, o mesmo padrão de grandes empresas: interface rápida e moderna, sem aquele site lento que trava a cada clique.",
  },
  {
    icon: <PiDatabaseBold />,
    title: "Feito do zero pra você",
    text: "Sistema desenhado em cima da sua rotina e das suas regras — não um tema pronto revendido igual para todo mundo.",
  },
  {
    icon: <PiPlugsBold />,
    title: "Conecta com o que você usa",
    text: "Integro com meios de pagamento, WhatsApp, ERP, CRM e outras ferramentas que você já tem, tudo conversando em um lugar só.",
  },
  {
    icon: <PiLockKeyBold />,
    title: "Segurança levada a sério",
    text: "Login protegido, criptografia e defesa contra ataques. Seus dados e os dos seus clientes ficam blindados.",
  },
  {
    icon: <PiCalendarCheckBold />,
    title: "Escopo e prazo claros",
    text: "Você sabe o que vai receber e quando, combinado antes de começar. Sem 'depois a gente vê' e sem surpresa no meio do caminho.",
  },
  {
    icon: <PiRocketLaunchBold />,
    title: "Suporte de verdade",
    text: "Garantia após o lançamento e um canal direto comigo para dúvidas e ajustes — você fala com quem construiu, não com um robô.",
  },
];

const methodSteps = [
  {
    title: "Conversa & Entendimento",
    description:
      "Começo entendendo seu negócio: onde você perde tempo, o que quer resolver e quem é seu cliente. É daqui que sai o escopo exato do projeto.",
  },
  {
    title: "Planejamento & Protótipo",
    description:
      "Desenho como o sistema vai funcionar e monto um rascunho navegável das telas, para você validar o caminho antes de eu escrever o código.",
  },
  {
    title: "Design das telas",
    description:
      "Crio as telas com a cara da sua marca: bonitas, organizadas e fáceis de usar, focadas em quem vai clicar do outro lado.",
  },
  {
    title: "Desenvolvimento",
    description:
      "Coloco tudo de pé: a parte visual e a lógica por trás. É aqui que o sistema ganha vida, com atualizações frequentes para você acompanhar.",
  },
  {
    title: "Testes",
    description:
      "Testo cada função em diferentes aparelhos e situações para garantir que tudo funcione certo antes de qualquer cliente colocar a mão.",
  },
  {
    title: "Lançamento",
    description:
      "Publico seu sistema no ar em servidor seguro, com domínio e certificado (cadeado), pronto para receber acessos com estabilidade.",
  },
  {
    title: "Acompanhamento",
    description:
      "Depois no ar, acompanho o funcionamento e ajusto melhorias com base no uso real e no seu feedback. O trabalho não termina no lançamento.",
  },
];

const trust = [
  { value: "+100", label: "projetos entregues" },
  { value: "+2 anos", label: "de experiência" },
  { value: "LGPD", label: "dados seguros" },
];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

// Accessible, height-animated collapsible panel shared by Features and FAQ.
function Collapsible({ open, id, children, reduce }) {
  return (
    <AnimatePresence initial={false}>
      {open && (
        <motion.div
          id={id}
          role="region"
          initial={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
          animate={reduce ? { opacity: 1 } : { height: "auto", opacity: 1 }}
          exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          style={{ overflow: "hidden" }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function WebAppsPage() {
  const [openIndex, setOpenIndex] = useState(null);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const reduce = useReducedMotion();
  const uid = useId();

  const toggleFeature = (i) => setOpenIndex(openIndex === i ? null : i);
  const toggleFaq = (i) => setOpenFaqIndex(openFaqIndex === i ? null : i);

  return (
    <div className={styles.pageWrapper}>
      <Header />

      <main>
        {/* HERO */}
        <section className={styles.heroSection}>
          <div className={styles.heroGrid} aria-hidden="true" />
          <div className={styles.container}>
            <motion.div
              className={styles.content}
              variants={reveal}
              initial="hidden"
              animate="show"
            >
              <span className={styles.eyebrow}>Sistemas & Web Apps sob medida</span>
              <h1 className={styles.headline}>
                Um sistema feito sob medida pro seu negócio
              </h1>
              <h2 className={styles.subHeadline}>
                Menos trabalho manual, menos planilha solta e mais controle da
                sua operação — tudo em um lugar só, no computador e no celular.
              </h2>
              <p className={styles.description}>
                Crio do zero o sistema que sua empresa usa todos os dias:
                cadastro de clientes, agendamentos, pedidos, relatórios e área
                de login, integrados em um painel só. Feito para a sua rotina —
                não um modelo genérico revendido para todo mundo.
              </p>

              <div className={styles.heroActions}>
                <a href="#contato" className={styles.ctaButton}>
                  Solicitar consultoria <PiArrowUpRightBold />
                </a>
                <Link href="/portfolio" className={styles.ctaGhost}>
                  Ver projetos
                </Link>
              </div>
              <p className={styles.ctaNote}>
                Consultoria gratuita · resposta em até 24h · sem compromisso
              </p>

              <ul className={styles.trustRow}>
                {trust.map((t) => (
                  <li key={t.label} className={styles.trustItem}>
                    <span className={styles.trustValue}>{t.value}</span>
                    <span className={styles.trustLabel}>{t.label}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className={styles.imageContainer}
              initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.94 }}
              animate={reduce ? { opacity: 1 } : { opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src="/CriacaoDeSites/hero.png"
                alt="Desenvolvimento de Sites e Web Apps"
                width={520}
                height={520}
                className={styles.heroImage}
                priority
              />
            </motion.div>
          </div>
        </section>

        {/* INFO */}
        <section className={styles.infoSection}>
          <motion.div
            className={styles.infoContainer}
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className={styles.quoteCard}>
              <span className={styles.quoteIcon}>&ldquo;</span>
              <p className={styles.quoteText}>
                Você não precisa entender de programação. Precisa de um sistema
                que resolve o seu problema — e de alguém que explica cada passo
                em português claro.
              </p>
            </div>

            <div className={styles.infoContent}>
              <p className={styles.infoParagraph}>
                Vou além de um site: crio a ferramenta que sua empresa usa no
                dia a dia. Agendamentos, pedidos, cadastro de clientes,
                relatórios e área de login, tudo junto em um painel acessível de
                qualquer lugar. Fim da planilha solta e do processo espalhado em
                vários cantos.
              </p>
              <p className={styles.infoParagraph}>
                Antes de programar, entendo a sua rotina e onde você perde
                tempo. A partir disso desenho um sistema que elimina o trabalho
                manual, mantém seus dados seguros e já nasce pronto para crescer
                junto com o seu movimento — sem precisar refazer tudo depois.
              </p>
            </div>
          </motion.div>
        </section>

        {/* FEATURES */}
        <section className={styles.featuresSection}>
          <div className={styles.featuresContainer}>
            <div className={styles.sectionHead}>
              <span className={styles.eyebrowDark}>O que entregamos</span>
              <h2 className={styles.sectionHeading}>
                Principais características<span className={styles.dot}>.</span>
              </h2>
            </div>

            <div className={styles.featuresList}>
              {features.map((feature, index) => {
                const isOpen = openIndex === index;
                const panelId = `${uid}-feat-${index}`;
                return (
                  <div key={index} className={styles.featureWrapper}>
                    <button
                      type="button"
                      className={`${styles.featureItem} ${isOpen ? styles.active : ""}`}
                      onClick={() => toggleFeature(index)}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                    >
                      <span className={styles.featureText}>{feature.title}</span>
                      <PiCaretDownBold
                        className={`${styles.featureIcon} ${isOpen ? styles.rotate : ""}`}
                        aria-hidden="true"
                      />
                    </button>
                    <Collapsible open={isOpen} id={panelId} reduce={reduce}>
                      <p className={styles.descText}>{feature.description}</p>
                    </Collapsible>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className={styles.benefitsSection}>
          <motion.div
            className={styles.benefitsGrid}
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            {benefits.map((benefit, index) => (
              <div key={index} className={styles.benefitCard}>
                <div className={styles.iconWrapper}>
                  <div className={styles.benefitIcon}>{benefit.icon}</div>
                </div>
                <p className={styles.benefitText}>{benefit.text}</p>
              </div>
            ))}
          </motion.div>

          <div className={styles.centeredCtaContainer}>
            <a href="#contato" className={styles.ctaButton}>
              Quero uma proposta <PiArrowUpRightBold />
            </a>
          </div>
        </section>

        {/* DIFFERENTIALS */}
        <section className={styles.differentialsSection}>
          <div className={styles.differentialsContainer}>
            <div className={styles.sectionHead}>
              <span className={styles.eyebrow}>Por que nós</span>
              <h2 className={styles.differentialsTitle}>
                Diferenciais dos nossos projetos<span className={styles.dot}>.</span>
              </h2>
            </div>

            <div className={styles.diffGrid}>
              {differentials.map((diff, index) => (
                <motion.div
                  key={index}
                  className={styles.diffCard}
                  variants={reveal}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-40px" }}
                >
                  <div className={styles.diffIcon}>{diff.icon}</div>
                  <h3 className={styles.diffTitle}>{diff.title}</h3>
                  <p className={styles.diffText}>{diff.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* METHOD */}
        <section className={styles.methodSection}>
          <div className={styles.methodContainer}>
            <div className={styles.sectionHead}>
              <span className={styles.eyebrow}>Como trabalhamos</span>
              <h2 className={styles.methodTitle}>
                Nosso método<span className={styles.dot}>.</span>
              </h2>
              <span className={styles.methodSubtitle}>
                Do primeiro papo ao pós-lançamento
              </span>
            </div>

            <ol className={styles.timeline}>
              {methodSteps.map((step, index) => (
                <motion.li
                  key={index}
                  className={styles.timelineItem}
                  variants={reveal}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-40px" }}
                >
                  <div className={styles.timelineNumber}>{index + 1}</div>
                  <div className={styles.timelineContent}>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.stepDesc}>{step.description}</p>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>
        </section>

        {/* FAQ */}
        <section className={styles.faqSection}>
          <div className={styles.faqContainer}>
            <div className={styles.sectionHead}>
              <span className={styles.eyebrow}>Dúvidas frequentes</span>
              <h2 className={styles.faqTitle}>
                FAQ — Web Apps & Sistemas<span className={styles.dot}>.</span>
              </h2>
            </div>

            <div className={styles.faqList}>
              {faqItems.map((item, index) => {
                const isOpen = openFaqIndex === index;
                const panelId = `${uid}-faq-${index}`;
                return (
                  <div key={index} className={styles.faqItem}>
                    <button
                      type="button"
                      className={styles.faqQuestion}
                      onClick={() => toggleFaq(index)}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                    >
                      <span className={styles.questionText}>{item.question}</span>
                      <PiCaretDownBold
                        className={`${styles.faqIcon} ${isOpen ? styles.rotate : ""}`}
                        aria-hidden="true"
                      />
                    </button>
                    <Collapsible open={isOpen} id={panelId} reduce={reduce}>
                      <p className={styles.answerText}>{item.answer}</p>
                    </Collapsible>
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
