"use client";

import { useState } from "react";
import {
  PiArrowRightBold,
  PiArrowUpRightBold,
  PiCalendarDotsBold,
  PiCodeBold,
  PiEnvelopeSimpleBold,
  PiLightningBold,
  PiShieldCheckBold,
  PiTargetBold,
  PiWhatsappLogoBold,
} from "react-icons/pi";
import styles from "./contact.module.css";
import contactImage from "./contactImageData";

const WHATSAPP_URL =
  "https://wa.me/5551993392983?text=Ol%C3%A1%2C%20Saulo!%20Vim%20pelo%20seu%20portf%C3%B3lio%20e%20quero%20conversar%20sobre%20um%20projeto.";

const MEETING_URL =
  "https://wa.me/5551993392983?text=Ol%C3%A1%2C%20Saulo!%20Gostaria%20de%20agendar%20uma%20conversa%20sobre%20meu%20projeto.";

const contactOptions = [
  {
    label: "WhatsApp",
    description: "Fale comigo diretamente e receba um retorno rápido.",
    href: WHATSAPP_URL,
    icon: PiWhatsappLogoBold,
    external: true,
  },
  {
    label: "E-mail",
    description: "Envie os detalhes do seu projeto e retornarei o mais breve possível.",
    href: "mailto:contato@saulopavanello.com.br",
    icon: PiEnvelopeSimpleBold,
    external: false,
  },
  {
    label: "Agendar reunião",
    description: "Prefere uma conversa por vídeo? Combine comigo o melhor dia e horário.",
    href: MEETING_URL,
    icon: PiCalendarDotsBold,
    external: true,
  },
];

export default function Contact({ mode = "showcase" }) {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    empresa: "",
    mensagem: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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

  if (mode === "form") {
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
              <input
                type="hidden"
                name="_subject"
                value="Novo Lead do Portfólio!"
              />

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

  return (
    <section className={styles.section} id="contato">
      <div className={styles.container}>
        <div className={styles.leftContent}>
          <span className={styles.eyebrow}>VAMOS CONVERSAR</span>
          <h2 className={styles.headline}>Como posso te ajudar?</h2>
          <p className={styles.introText}>
            Tem um projeto em mente ou precisa de ajuda para tirar uma ideia do
            papel? Vamos conversar sobre como posso transformar sua visão em um
            produto digital de alto impacto.
          </p>

          <div className={styles.contactList}>
            {contactOptions.map((option) => {
              const Icon = option.icon;

              return (
                <a
                  key={option.label}
                  href={option.href}
                  target={option.external ? "_blank" : undefined}
                  rel={option.external ? "noopener noreferrer" : undefined}
                  className={styles.contactCard}
                >
                  <span className={styles.contactIcon} aria-hidden="true">
                    <Icon />
                  </span>
                  <span className={styles.contactBody}>
                    <strong>{option.label}</strong>
                    <span>{option.description}</span>
                  </span>
                  <PiArrowRightBold className={styles.contactArrow} aria-hidden="true" />
                </a>
              );
            })}
          </div>

          <div className={styles.directCard}>
            <span className={styles.directIcon} aria-hidden="true">
              <PiShieldCheckBold />
            </span>
            <div>
              <strong>Atendimento direto comigo</strong>
              <p>
                Sem intermediários. Seu projeto será acompanhado de perto em
                cada etapa do desenvolvimento.
              </p>
            </div>
          </div>

          <div className={styles.benefits} aria-label="Diferenciais do atendimento">
            <span>
              <PiLightningBold aria-hidden="true" /> Resposta rápida
            </span>
            <span>
              <PiCodeBold aria-hidden="true" /> Projetos sob medida
            </span>
            <span>
              <PiTargetBold aria-hidden="true" /> Foco em resultados
            </span>
          </div>
        </div>

        <div className={styles.visualColumn}>
          <div className={styles.photoFrame}>
            <img
              src={contactImage}
              alt="Saulo Pavanello em seu ambiente de trabalho"
              className={styles.contactPhoto}
            />
          </div>

          <aside className={styles.quoteCard}>
            <span className={styles.quoteMark} aria-hidden="true">
              “
            </span>
            <p>
              Cada projeto é único. Meu compromisso é entender seu objetivo e
              entregar a melhor solução em tecnologia.
            </p>
            <div className={styles.signature}>
              <strong>SAULO PAVANELLO</strong>
              <span>Software Engineer</span>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
