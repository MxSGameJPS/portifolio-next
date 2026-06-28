"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { PiArrowUpRightBold, PiWhatsappLogoBold } from "react-icons/pi";
import styles from "./hero.module.css";

const WHATSAPP_URL =
  "https://wa.me/5551993392983?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20quero%20um%20or%C3%A7amento.";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

// Fire a GA / Google Ads event when a CTA is clicked (funnel tracking)
const trackCta = (label) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "cta_click", { event_label: label });
  }
};

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className={styles.heroSection}>
      <div className={styles.grid} aria-hidden="true" />

      <motion.div
        className={styles.container}
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Left: copy */}
        <div className={styles.content}>


          <motion.h1 className={styles.headline} variants={fadeUp}>
            Um site que <span className={styles.highlight}>converte</span>.
            <br />
            Um app que <span className={styles.highlight}>encanta</span>.
          </motion.h1>

          <motion.p className={styles.subHeadline} variants={fadeUp}>
            Seu crescimento exige tecnologia de alto nível. Transformo sua visão
            em software que gera resultado de verdade.
          </motion.p>

          <motion.div className={styles.ctaGroup} variants={fadeUp}>
            <motion.a
              href="#contato"
              className={styles.ctaPrimary}
              onClick={() => trackCta("hero_orcamento")}
              whileHover={reduce ? undefined : { scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Solicitar orçamento
              <PiArrowUpRightBold />
            </motion.a>

            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaSecondary}
              onClick={() => trackCta("hero_whatsapp")}
              whileHover={reduce ? undefined : { scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <PiWhatsappLogoBold />
              Chamar no WhatsApp
            </motion.a>
          </motion.div>

          <motion.p className={styles.trustLine} variants={fadeUp}>
            Orçamento sem compromisso · Resposta no mesmo dia
          </motion.p>
        </div>

        {/* Right: mascot stage */}
        <motion.div
          className={styles.stage}
          variants={fadeUp}
        >
          <div className={styles.glow} aria-hidden="true" />

          <motion.div
            className={styles.mascotWrap}
            animate={reduce ? undefined : { y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/Hero.png"
              alt="Mascote tech de Saulo Pavanello acenando"
              width={600}
              height={600}
              className={styles.mascot}
              priority
              quality={90}
              fetchPriority="high"
            />
          </motion.div>

          <motion.div
            className={styles.badge}
            initial={{ opacity: 0, scale: 0.7, rotate: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: -4 }}
            transition={{ delay: 0.7, type: "spring", stiffness: 220, damping: 14 }}
          >
            CRESCEMOS JUNTOS!
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom wave — transitions into the light sections below */}
      <div className={styles.wave} aria-hidden="true">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z"
            fill="#ffffff"
          ></path>
        </svg>
      </div>
    </section>
  );
}
