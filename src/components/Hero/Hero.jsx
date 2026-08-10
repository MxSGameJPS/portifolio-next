"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { PiArrowRightBold, PiWhatsappLogoBold } from "react-icons/pi";
import styles from "./hero.module.css";

const WHATSAPP_URL =
  "https://wa.me/5551993392983?text=Ol%C3%A1%2C%20Saulo!%20Vim%20pelo%20seu%20portf%C3%B3lio%20e%20quero%20conversar%20sobre%20um%20projeto.";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.08 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const imageReveal = {
  hidden: { opacity: 0, scale: 1.025 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

const trackCta = (label) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "cta_click", { event_label: label });
  }
};

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className={styles.heroSection} aria-labelledby="hero-title">
      <div className={styles.texture} aria-hidden="true" />

      <motion.div
        className={styles.container}
        variants={container}
        initial={false}
        animate="show"
      >
        <div className={styles.content}>
          <motion.p className={styles.eyebrow} variants={fadeUp}>
            SAULO PAVANELLO <span>·</span> SOFTWARE ENGINEER
          </motion.p>

          <motion.h1 id="hero-title" className={styles.headline} variants={fadeUp}>
            Eu construo software para negócios que querem crescer.
          </motion.h1>

          <motion.p className={styles.subHeadline} variants={fadeUp}>
            Desenvolvimento de SaaS, sistemas web, aplicativos, APIs e
            experiências digitais com foco em resultado real.
          </motion.p>

          <motion.div className={styles.ctaGroup} variants={fadeUp}>
            <motion.a
              href="/portfolio"
              className={styles.ctaPrimary}
              onClick={() => trackCta("hero_ver_projetos")}
              whileHover={reduce ? undefined : { y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Ver projetos
              <PiArrowRightBold aria-hidden="true" />
            </motion.a>

            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaSecondary}
              onClick={() => trackCta("hero_falar_comigo")}
              whileHover={reduce ? undefined : { y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Falar comigo
              <PiWhatsappLogoBold aria-hidden="true" />
            </motion.a>
          </motion.div>

          <motion.div className={styles.stackLine} variants={fadeUp}>
            <span>React</span>
            <i>·</i>
            <span>Next.js</span>
            <i>·</i>
            <span>Node.js</span>
            <i>·</i>
            <span>Mobile</span>
            <i>·</i>
            <span>IA</span>
          </motion.div>
        </div>

        <motion.div
          className={styles.stage}
          variants={reduce ? undefined : imageReveal}
          initial={false}
          animate={reduce ? undefined : "show"}
        >
          <Image
            src="/hero-saulo.webp"
            alt="Saulo Pavanello em seu ambiente de trabalho, ao lado de uma estação de desenvolvimento de software"
            width={1440}
            height={810}
            sizes="(max-width: 900px) 100vw, 45vw"
            className={styles.portrait}
            preload
          />
          <div className={styles.photoShade} aria-hidden="true" />
        </motion.div>
      </motion.div>
    </section>
  );
}
