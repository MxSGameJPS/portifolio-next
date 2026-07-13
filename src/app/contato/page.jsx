"use client";

import { motion, useReducedMotion } from "framer-motion";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Contact from "../../components/Contact/Contact";
import styles from "./page.module.css";
import {
  PiEnvelopeSimpleBold,
  PiWhatsappLogoBold,
  PiLinkedinLogoBold,
  PiArrowUpRightBold,
} from "react-icons/pi";

const channels = [
  {
    icon: <PiWhatsappLogoBold />,
    label: "WhatsApp",
    value: "Resposta mais rápida",
    href: "https://wa.me/5551993392983",
    external: true,
    primary: true,
  },
  {
    icon: <PiEnvelopeSimpleBold />,
    label: "E-mail",
    value: "contato@saulopavanello.com.br",
    href: "mailto:contato@saulopavanello.com.br",
    external: false,
  },
  {
    icon: <PiLinkedinLogoBold />,
    label: "LinkedIn",
    value: "Vamos nos conectar",
    href: "https://linkedin.com/in/saulopavanello",
    external: true,
  },
];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ContactPage() {
  const reduce = useReducedMotion();

  return (
    <div className={styles.pageWrapper}>
      <Header />

      <main>
        {/* HERO */}
        <section className={styles.heroSection}>
          <div className={styles.heroGrid} aria-hidden="true" />
          <motion.div
            className={styles.heroContent}
            variants={reveal}
            initial="hidden"
            animate="show"
          >
            <span className={styles.eyebrow}>Contato</span>
            <h1 className={styles.headline}>
              Vamos conversar sobre o seu projeto
            </h1>
            <p className={styles.introText}>
              Me conte a sua ideia. A primeira conversa é gratuita e sem
              compromisso, a resposta chega em até 24h — e você fala direto
              comigo, não com um atendente.
            </p>
            <p className={styles.introText}>
              Baseado em Dois Irmãos (RS), atendo presencialmente Novo
              Hamburgo, São Leopoldo, Sapiranga, Campo Bom, Ivoti, Estância
              Velha, Sapucaia do Sul e Caxias do Sul — e remoto para todo o
              Brasil.
            </p>

            <div className={styles.channels}>
              {channels.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.external ? "_blank" : undefined}
                  rel={c.external ? "noopener noreferrer" : undefined}
                  className={`${styles.channelCard} ${c.primary ? styles.channelPrimary : ""}`}
                >
                  <span className={styles.channelIcon} aria-hidden="true">
                    {c.icon}
                  </span>
                  <span className={styles.channelBody}>
                    <span className={styles.channelLabel}>{c.label}</span>
                    <span className={styles.channelValue}>{c.value}</span>
                  </span>
                  <PiArrowUpRightBold className={styles.channelArrow} aria-hidden="true" />
                </a>
              ))}
            </div>
          </motion.div>
        </section>

        {/* FORM */}
        <div className={styles.contactWrapper}>
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
}
