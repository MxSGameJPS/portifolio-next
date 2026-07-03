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
  PiPlugsBold,
  PiChartBarBold,
  PiDeviceMobileBold,
  PiAndroidLogoBold,
} from "react-icons/pi";

const features = [
  {
    title: "Parece feito para cada celular",
    description:
      "O app se comporta do jeito que o usuário espera no iPhone ou no Android: fluido, rápido e natural de usar, sem aquela sensação de site espremido dentro de um app.",
  },
  {
    title: "iPhone e Android com um só projeto",
    description:
      "Uma base de código para as duas lojas usando React Native. Você economiza tempo e investimento, sem abrir mão da qualidade em nenhum dos sistemas.",
  },
  {
    title: "Notificações na tela do cliente",
    description:
      "Avise sobre novidades, promoções e lembretes direto no celular. É o canal com a maior taxa de abertura que existe — bem acima de e-mail e redes sociais.",
  },
  {
    title: "Funciona até sem internet",
    description:
      "Recursos essenciais continuam funcionando quando a conexão cai. O app não trava no meio do uso e sincroniza os dados assim que a internet volta.",
  },
  {
    title: "Usa os recursos do celular",
    description:
      "Câmera, GPS, digital e reconhecimento facial aproveitados para criar uma experiência que só um aplicativo consegue oferecer.",
  },
  {
    title: "Publicado nas lojas por mim",
    description:
      "Cuido da papelada e das regras da App Store e da Google Play para o seu app entrar no ar em conformidade, sem dor de cabeça com burocracia.",
  },
];

const benefits = [
  {
    icon: <PiDeviceMobileBold />,
    text: "Sua marca 24h no bolso do cliente, com o ícone na tela inicial dele.",
  },
  {
    icon: <PiRocketLaunchBold />,
    text: "Muito mais rápido que site no celular: abre na hora e responde ao toque na hora.",
  },
  {
    icon: <PiShieldCheckBold />,
    text: "Login seguro por digital ou rosto, sem senha chata para o usuário decorar.",
  },
];

const differentials = [
  {
    icon: <PiCpuBold />,
    title: "Tecnologia atual",
    text: "Uso React Native e Expo, a mesma base de apps como Instagram e Uber: moderno, confiável e com atualização ágil.",
  },
  {
    icon: <PiDatabaseBold />,
    title: "Leve no dado e na bateria",
    text: "App otimizado para gastar menos internet e menos bateria do usuário. Experiência leve, que não incomoda quem usa todo dia.",
  },
  {
    icon: <PiLockKeyBold />,
    title: "Entra com digital ou rosto",
    text: "Login por impressão digital ou reconhecimento facial: acesso rápido e seguro, sem o cliente precisar lembrar de senha.",
  },
  {
    icon: <PiAndroidLogoBold />,
    title: "iPhone e Android juntos",
    text: "Entrego para as duas lojas ao mesmo tempo, alcançando praticamente todo mundo que tem um smartphone.",
  },
  {
    icon: <PiPlugsBold />,
    title: "Conecta com seus sistemas",
    text: "Integro com pagamentos, WhatsApp, seu site e ferramentas que você já usa — tudo sincronizado em tempo real.",
  },
  {
    icon: <PiChartBarBold />,
    title: "Você enxerga o uso",
    text: "Relatórios de instalações, uso diário e retenção para você saber o que funciona e decidir com base em número, não em achismo.",
  },
];

const methodSteps = [
  {
    title: "Conversa & Protótipo",
    description:
      "Definimos juntos o que o app precisa fazer e monto um rascunho navegável das telas, para você validar a navegação antes de eu programar.",
  },
  {
    title: "Design das telas",
    description:
      "Crio telas bonitas e fáceis de usar, seguindo os padrões da Apple e do Google para que o app pareça natural em cada sistema.",
  },
  {
    title: "Desenvolvimento",
    description:
      "Programo o aplicativo com base moderna que entrega performance nas duas plataformas a partir de um único projeto, com atualizações frequentes.",
  },
  {
    title: "Conexão com seus sistemas",
    description:
      "Ligo o app ao seu banco de dados e às ferramentas que você já usa, para as informações ficarem sincronizadas em tempo real.",
  },
  {
    title: "Testes em vários aparelhos",
    description:
      "Testo o app em diferentes modelos de iPhone e Android, com tamanhos de tela e versões distintas, para tudo funcionar antes do lançamento.",
  },
  {
    title: "Publicação nas lojas",
    description:
      "Envio o app para a App Store e a Google Play e ajusto qualquer detalhe exigido até ele ser aprovado e entrar no ar.",
  },
  {
    title: "Acompanhamento & updates",
    description:
      "Acompanho as avaliações dos usuários e lanço atualizações para corrigir pontos e adicionar novidades. O trabalho não termina no lançamento.",
  },
];

const trust = [
  { value: "iOS & Android", label: "publicação nas duas lojas" },
  { value: "2+ anos", label: "de experiência" },
  { value: "Apps no ar", label: "publicados nas lojas" },
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

export default function MobileAppsPage() {
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
              <span className={styles.eyebrow}>Aplicativos iOS & Android</span>
              <h1 className={styles.headline}>
                Seu negócio na tela inicial do cliente
              </h1>
              <h2 className={styles.subHeadline}>
                Um app rápido e fácil de usar, no iPhone e no Android — o canal
                mais direto com quem já confia em você.
              </h2>
              <p className={styles.description}>
                Crio aplicativos para iPhone e Android sob medida: pedidos,
                agendamentos, fidelidade, notificações e área do cliente. Publico
                nas lojas e deixo tudo pronto para você se comunicar direto com
                quem importa.
              </p>

              <div className={styles.heroActions}>
                <a href="#contato" className={styles.ctaButton}>
                  Criar meu app <PiArrowUpRightBold />
                </a>
                <Link href="/portfolio" className={styles.ctaGhost}>
                  Ver apps
                </Link>
              </div>
              <p className={styles.ctaNote}>
                Orçamento gratuito · resposta em até 24h · sem compromisso
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
                src="/CriacaoDeSites/aplicativosMobile.png"
                alt="Desenvolvimento de Aplicativos Mobile iOS e Android"
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
                Estar na tela inicial do cliente não é luxo. É o canal mais
                direto que existe com quem já confia na sua marca.
              </p>
            </div>

            <div className={styles.infoContent}>
              <p className={styles.infoParagraph}>
                Um app faz o que um site não faz: manda notificação direto na
                tela, usa câmera e GPS, entra com digital ou rosto e funciona até
                sem internet. É um canal seu, sem depender do alcance de rede
                social ou de algoritmo.
              </p>
              <p className={styles.infoParagraph}>
                Penso na jornada do usuário do começo ao fim. Seu cliente compra,
                agenda ou fala com você em poucos toques, de onde estiver. Fácil
                de usar e difícil de largar — é isso que traz o cliente de volta.
              </p>
            </div>
          </motion.div>
        </section>

        {/* FEATURES */}
        <section className={styles.featuresSection}>
          <div className={styles.featuresContainer}>
            <div className={styles.sectionHead}>
              <span className={styles.eyebrowDark}>O que o app faz</span>
              <h2 className={styles.sectionHeading}>
                Funcionalidades que fazem diferença<span className={styles.dot}>.</span>
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
              Quero um orçamento <PiArrowUpRightBold />
            </a>
          </div>
        </section>

        {/* DIFFERENTIALS */}
        <section className={styles.differentialsSection}>
          <div className={styles.differentialsContainer}>
            <div className={styles.sectionHead}>
              <span className={styles.eyebrow}>Por que nós</span>
              <h2 className={styles.differentialsTitle}>
                Diferenciais do seu app<span className={styles.dot}>.</span>
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
                Da ideia à loja<span className={styles.dot}>.</span>
              </h2>
              <span className={styles.methodSubtitle}>
                Do conceito à publicação, sem enrolação
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
                Dúvidas sobre apps<span className={styles.dot}>.</span>
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
