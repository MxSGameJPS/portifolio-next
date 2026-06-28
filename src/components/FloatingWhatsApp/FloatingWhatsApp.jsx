"use client";

import { motion, useReducedMotion } from "framer-motion";
import { PiWhatsappLogoBold } from "react-icons/pi";
import styles from "./floatingWhatsApp.module.css";

const WHATSAPP_URL =
  "https://wa.me/5551993392983?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20quero%20um%20or%C3%A7amento.";

// Fire a GA / Google Ads event so WhatsApp leads show up in the funnel too
const trackWhats = () => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "cta_click", { event_label: "float_whatsapp" });
  }
};

export default function FloatingWhatsApp() {
  const reduce = useReducedMotion();

  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.fab}
      onClick={trackWhats}
      aria-label="Falar no WhatsApp"
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 220, damping: 16 }}
      whileHover={reduce ? undefined : { scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
    >
      <span className={styles.pulse} aria-hidden="true" />
      <PiWhatsappLogoBold className={styles.icon} />
      <span className={styles.label}>Fale conosco</span>
    </motion.a>
  );
}
