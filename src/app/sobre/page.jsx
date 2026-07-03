"use client";

import { motion, useReducedMotion } from "framer-motion";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import {
  PiArrowUpRightBold,
  PiUserBold,
  PiBarbellBold,
  PiTargetBold,
  PiFlaskBold,
  PiDownloadSimpleBold,
} from "react-icons/pi";

const dna = [
  {
    icon: <PiUserBold />,
    title: "Contato direto, do início ao fim",
    text: "Você fala comigo, não com um gerente de contas nem com um estagiário. A mesma pessoa que entende o seu negócio desenha a interface e programa o sistema — o que mantém tudo coerente, do design ao banco de dados.",
  },
  {
    icon: <PiBarbellBold />,
    title: "Não desisto do seu problema",
    text: "Como freelancer, o meu sucesso depende do seu. Se o seu projeto não performa, eu não cresço — então não largo um desafio até resolver, seja um bug difícil ou a performance no limite. We grow together.",
  },
  {
    icon: <PiTargetBold />,
    title: "Penso antes de programar",
    text: "Código sem estratégia é só texto colorido. Antes de escrever, analiso a arquitetura, a experiência do usuário e como o projeto vai crescer. Não entrego só o que você pediu — entrego o que o projeto precisa para se destacar.",
  },
  {
    icon: <PiFlaskBold />,
    title: "Estudo todo dia pela melhor solução",
    text: "Uso a tecnologia certa, não a da moda. Web Analytics, IA e as stacks mais atuais (Next.js, React 19) fazem parte da rotina, sempre validando o que realmente traz resultado para o seu projeto.",
  },
];

const trust = [
  { value: "Contato direto", label: "sem intermediário" },
  { value: "2+ anos", label: "de experiência" },
  { value: "FullStack + UI", label: "engenharia e design" },
];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function AboutPage() {
  const reduce = useReducedMotion();

  return (
    <div className={styles.pageWrapper}>
      <Header />

      <main>
        {/* HERO */}
        <section className={styles.heroSection}>
          <div className={styles.heroGrid} aria-hidden="true" />
          <div className={styles.heroContent}>
            <motion.div
              className={styles.textColumn}
              variants={reveal}
              initial="hidden"
              animate="show"
            >
              <span className={styles.eyebrow}>Sobre mim</span>
              <h1 className={styles.headline}>Quem é o Saulo?</h1>

              <div className={styles.introText}>
                <p>
                  Sou o Saulo, desenvolvedor FullStack com uma base diferente:
                  além de programar, venho de{" "}
                  <span className={styles.highlight}>UI Design</span> e{" "}
                  <span className={styles.highlight}>Jornalismo</span>. Isso me
                  deixa unir três coisas que raramente andam juntas — engenharia
                  para construir sistemas robustos, olhar de design para criar
                  telas que o usuário gosta de usar e comunicação para entender o
                  seu negócio e traduzir em solução.
                </p>
                <p>
                  Essa visão de ponta a ponta está nos projetos que construí — de
                  uma plataforma jurídica com IA (
                  <span className={styles.highlight}>Social Jurídico</span>) a um
                  super-app de cidade (
                  <span className={styles.highlight}>Rota Viva</span>) e ao
                  aplicativo do <span className={styles.highlight}>FDMC</span> na
                  Google Play.
                </p>
                <p>
                  Trabalhando direto comigo, você tem a entrega de um time
                  multidisciplinar concentrada em um só profissional: contato
                  direto, decisões rápidas e coerência do design ao banco de
                  dados.
                </p>
              </div>

              <div className={styles.heroActions}>
                <Link href="/portfolio" className={styles.ctaButton}>
                  Ver projetos <PiArrowUpRightBold />
                </Link>
                <Link href="/contato" className={styles.ctaGhost}>
                  Falar comigo
                </Link>
              </div>
              <p className={styles.ctaNote}>
                Resposta em até 24h · você fala direto comigo
              </p>

              <a
                href="/Curriculo_Saulo.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cvLink}
              >
                <PiDownloadSimpleBold /> Recrutador? Baixe meu currículo (PDF)
              </a>

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
              className={styles.imageColumn}
              initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.94 }}
              animate={reduce ? { opacity: 1 } : { opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className={styles.profileImageWrapper}>
                <Image
                  src="/Sobre/saulo_profile.png"
                  alt="Saulo Pavanello, desenvolvedor FullStack"
                  fill
                  className={styles.profileImage}
                  priority
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* DNA */}
        <section className={styles.dnaSection}>
          <div className={styles.container}>
            <div className={styles.sectionHead}>
              <span className={styles.eyebrowDark}>Como eu trabalho</span>
              <h2 className={styles.sectionHeading}>
                Meu DNA<span className={styles.dot}>.</span>
              </h2>
              <p className={styles.sectionSub}>
                O que você pode esperar de quem vai construir o seu projeto.
              </p>
            </div>

            <div className={styles.dnaGrid}>
              {dna.map((item, index) => (
                <motion.article
                  key={index}
                  className={styles.dnaCard}
                  variants={reveal}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-60px" }}
                >
                  <span className={styles.dnaIcon} aria-hidden="true">
                    {item.icon}
                  </span>
                  <h3 className={styles.dnaTitle}>{item.title}</h3>
                  <p className={styles.dnaText}>{item.text}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA BAND */}
        <section className={styles.ctaBand}>
          <div className={styles.ctaBandInner}>
            <h2 className={styles.ctaBandTitle}>
              Vamos construir o seu projeto?
            </h2>
            <p className={styles.ctaBandText}>
              Me conte a sua ideia. A primeira conversa é gratuita e sem
              compromisso.
            </p>
            <Link href="/contato" className={styles.ctaButton}>
              Falar comigo <PiArrowUpRightBold />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
