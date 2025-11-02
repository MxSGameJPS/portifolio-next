import React from "react";
import styles from "./form.module.css";
import { FaWhatsapp, FaEnvelope, FaClock } from "react-icons/fa";

const whatsappLink = "https://wa.me/5551993392983";
const formAction = "https://formsubmit.co/saulopavanello@saulopavanello.com.br";

const Formulario = () => {
  return (
    <section className={styles.formularioSection}>
      <h2 className={styles.titulo}>
        Pronto para{" "}
        <span className={styles.azul}>transformar seu negócio?</span>
      </h2>
      <p className={styles.subtitulo}>
        Entre em contato agora e receba uma proposta personalizada para seu
        projeto
      </p>
      <div className={styles.container}>
        <div className={styles.info}>
          <div className={styles.infoTitulo}>Fale conosco</div>
          <div className={styles.infoItem}>
            <span className={styles.iconBox} style={{ background: "#25D366" }}>
              <FaWhatsapp size={42} color="#fff" />
            </span>
            <div>
              <span className={styles.infoLabel}>WhatsApp</span>
              <br />
              <span className={styles.infoValor}>+55 (51) 99339-2983</span>
              <br />
              <span className={styles.infoObs} style={{ color: "#25D366" }}>
                Resposta em até 30 minutos
              </span>
            </div>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.iconBox} style={{ background: "#3ec6e0" }}>
              <FaEnvelope size={42} color="#fff" />
            </span>
            <div>
              <span className={styles.infoLabel}>Email</span>
              <br />
              <span className={styles.infoValor}>saulopavanello@saulopavanello.com.br</span>
              <br />
              <span className={styles.infoObs} style={{ color: "#3ec6e0" }}>
                Resposta em até 4 horas
              </span>
            </div>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.iconBox} style={{ background: "#B8860B" }}>
              <FaClock size={42} color="#fff" />
            </span>
            <div>
              <span className={styles.infoLabel}>Horário de Atendimento</span>
              <br />
              <span className={styles.infoValor}>
                Segunda a Sexta: 8h às 18h
              </span>
              <br />
              <span className={styles.infoObs} style={{ color: "#B8860B" }}>
                Sábados: 8h às 12h
              </span>
            </div>
          </div>

          {/* Card WhatsApp */}
          <div className={styles.cardWhatsapp}>
            <div className={styles.cardWhatsappTitle}>🚀 Quer falar agora?</div>
            <div className={styles.cardWhatsappText}>
              Clique no botão abaixo e fale diretamente conosco pelo WhatsApp!
            </div>
            <a
              className={styles.cardWhatsappBtn}
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp style={{ marginRight: 8 }} /> Falar no WhatsApp
            </a>
          </div>
        </div>
        <form className={styles.form} action={formAction} method="POST">
          <div className={styles.inputGroup}>
            <div style={{ flex: 1 }}>
              <label
                htmlFor="nome"
                style={{
                  fontWeight: 600,
                  color: "#C0C0C0",
                  fontSize: "0.98rem",
                }}
              >
                Nome
              </label>
              <input
                className={styles.input}
                type="text"
                name="nome"
                id="nome"
                placeholder="Seu nome completo"
                required
              />
            </div>
            <div style={{ flex: 1 }}>
              <label
                htmlFor="email"
                style={{
                  fontWeight: 600,
                  color: "#C0C0C0",
                  fontSize: "0.98rem",
                }}
              >
                Email
              </label>
              <input
                className={styles.input}
                type="email"
                name="email"
                id="email"
                placeholder="seu@email.com"
                required
              />
            </div>
          </div>
          <div className={styles.inputGroup}>
            <div style={{ flex: 1 }}>
              <label
                htmlFor="telefone"
                style={{
                  fontWeight: 600,
                  color: "#C0C0C0",
                  fontSize: "0.98rem",
                }}
              >
                Telefone/WhatsApp
              </label>
              <input
                className={styles.input}
                type="text"
                name="telefone"
                id="telefone"
                placeholder="(00) 00000-0000"
                required
              />
            </div>
            <div style={{ flex: 1 }}>
              <label
                htmlFor="empresa"
                style={{
                  fontWeight: 600,
                  color: "#C0C0C0",
                  fontSize: "0.98rem",
                }}
              >
                Empresa/Negócio
              </label>
              <input
                className={styles.input}
                type="text"
                name="empresa"
                id="empresa"
                placeholder="Nome da sua empresa"
              />
            </div>
          </div>
          <div style={{ marginBottom: "8px" }}>
            <label
              htmlFor="mensagem"
              style={{ fontWeight: 600, color: "#C0C0C0", fontSize: "0.98rem" }}
            >
              Mensagem
            </label>
            <textarea
              className={styles.textarea}
              name="mensagem"
              id="mensagem"
              placeholder="Conte-nos sobre seu projeto, objetivos e expectativas..."
              required
            ></textarea>
          </div>
          <div className={styles.botoes}>
            <button className={styles.botao} type="submit">
              Enviar Mensagem
            </button>
            <a
              className={styles.botaoWhatsapp}
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Formulario;
