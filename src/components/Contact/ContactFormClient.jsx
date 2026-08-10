"use client";

import { useState } from "react";
import { PiArrowUpRightBold } from "react-icons/pi";
import styles from "./contact.module.css";

export default function ContactFormClient() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    empresa: "",
    mensagem: "",
  });

  const handleChange = (event) => {
    setFormData((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = () => {
    if (typeof window === "undefined" || typeof window.gtag !== "function") return;

    window.gtag("event", "generate_lead", {
      event_category: "contato",
      event_label: "form_orcamento",
    });

    window.gtag("event", "conversion", {
      send_to: "AW-17926381242/XXXXXXXXX",
    });
  };

  return (
    <section className={`${styles.section} ${styles.formSection}`} id="contato">
      <div className={styles.formShell}>
        <div className={styles.formIntro}>
          <span className={styles.eyebrow}>SOLICITE UM ORÇAMENTO</span>
          <h2 className={styles.formHeadline}>Conte-me sobre o seu projeto.</h2>
          <p>
            Quanto mais contexto você enviar, melhor consigo entender a sua
            necessidade antes da nossa primeira conversa.
          </p>
        </div>

        <div className={styles.formCard}>
          <form
            action="https://formsubmit.co/contato@saulopavanello.com.br"
            method="POST"
            className={styles.form}
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_next"
              value="https://saulopavanello.com.br?success=true"
            />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_subject" value="Novo Lead do Portfólio!" />

            <div className={styles.formGrid}>
              <input
                type="text"
                name="nome"
                placeholder="Nome"
                aria-label="Nome"
                required
                className={styles.input}
                value={formData.nome}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                aria-label="E-mail"
                required
                className={styles.input}
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="tel"
                name="telefone"
                placeholder="Telefone / WhatsApp"
                aria-label="Telefone ou WhatsApp"
                required
                className={styles.input}
                value={formData.telefone}
                onChange={handleChange}
              />
              <input
                type="text"
                name="empresa"
                placeholder="Empresa (opcional)"
                aria-label="Empresa (opcional)"
                className={styles.input}
                value={formData.empresa}
                onChange={handleChange}
              />
            </div>

            <textarea
              name="mensagem"
              placeholder="Conte sobre o seu projeto (opcional)"
              aria-label="Sobre o seu projeto"
              rows={5}
              className={styles.textarea}
              value={formData.mensagem}
              onChange={handleChange}
            />

            <button type="submit" className={styles.submitButton}>
              Solicitar orçamento <PiArrowUpRightBold aria-hidden="true" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
