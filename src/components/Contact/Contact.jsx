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

  // Using FormSubmit.co for a fast, no-backend implementation that works immediately
  // The user can replace the email in the action URL if they want to use a specific backend later.
  // Using the requested email: contato@saulopavanello.com.br
  const handleSubmit = (e) => {
    // If we want to use the native HTML form submission, we don't preventDefault.
    // However, for SPA feel, we might want fetch. But FormSubmit is easiest as a standard form action.
    // Let's use the standard form action for robustness without ANY code setup.
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
          >
            {/* Configurações do FormSubmit */}
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_next"
              value="http://saulopavanello.com.br?success=true"
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
