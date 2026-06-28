"use client";
import styles from "./contact.module.css";
import Image from "next/image";
import { PiArrowUpRightBold } from "react-icons/pi";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    empresa: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form posts natively to FormSubmit.co (no backend needed). We do NOT preventDefault —
  // the native submit/redirect proceeds. gtag events use sendBeacon, so they survive the
  // navigation and still reach Google Ads / Analytics.
  const handleSubmit = () => {
    if (typeof window === "undefined" || typeof window.gtag !== "function") return;

    // GA4 standard lead event (shows up in Analytics funnels)
    window.gtag("event", "generate_lead", {
      event_category: "contato",
      event_label: "form_orcamento",
    });

    // Google Ads conversion. IMPORTANT (Saulo): troque XXXXXXXXX pelo "Rótulo de conversão"
    // da sua ação de conversão "Lead" no Google Ads (Ferramentas > Conversões).
    // Formato final: "AW-17926381242/AbC-D_efG"
    window.gtag("event", "conversion", {
      send_to: "AW-17926381242/XXXXXXXXX",
    });
  };

  return (
    <section className={styles.section} id="contato">
      <div className={styles.container}>
        {/* Left Side: Visuals */}
        <div className={styles.leftContent}>
          <div className={styles.outlineText}>
            CRESCEMOS
            <br />
            JUNTOS!
          </div>

          <div className={styles.mainImageContainer}>
            <Image
              src="/Hero.png"
              alt="Mascote Soluções"
              width={300}
              height={300}
              className={styles.heroImage}
            />
          </div>

          <div className={styles.solidText}>
            VAMOS
            <br />
            <span className={styles.highlightGreen}>CRESCER!</span>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className={styles.formCard}>
          <p className={styles.formTitle}>
            Preencha seus dados e aguarde o contato de um especialista.
          </p>

          <form
            action="https://formsubmit.co/contato@saulopavanello.com.br"
            method="POST"
            className={styles.form}
            onSubmit={handleSubmit}
          >
            {/* Configurações do FormSubmit */}
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_next"
              value="https://saulopavanello.com.br?success=true"
            />
            <input type="hidden" name="_template" value="table" />
            <input
              type="hidden"
              name="_subject"
              value="Novo Lead do Portfólio!"
            />

            <div className={styles.formGroup}>
              <input
                type="text"
                name="nome"
                placeholder="Nome"
                required
                className={styles.input}
                value={formData.nome}
                onChange={handleChange}
              />
            </div>

            <div className={styles.formGroup}>
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                required
                className={styles.input}
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className={styles.formGroup}>
              <input
                type="tel"
                name="telefone"
                placeholder="Telefone"
                required
                className={styles.input}
                value={formData.telefone}
                onChange={handleChange}
              />
            </div>

            <div className={styles.formGroup}>
              <input
                type="text"
                name="empresa"
                placeholder="Empresa"
                className={styles.input}
                value={formData.empresa}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className={styles.submitButton}>
              SOLICITAR ORÇAMENTO <PiArrowUpRightBold />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
