"use client";

import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import ContactForm from "../ui/ContactForm";
import styles from "./contact.module.css";

export default function Contact() {
  return (
    <section id="contato" className={styles.section}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className={styles.heading}
        >
          <h2 className={styles.title}>Entre em Contato</h2>
          <div className={styles.divider} />
          <p className={styles.description}>
            Estou disponível para projetos freelance e oportunidades de
            trabalho. Vamos conversar sobre como posso ajudar em seu próximo
            projeto!
          </p>
        </motion.div>

        <div className={styles.grid}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className={styles.cardLeft}
          >
            <h3 className={styles.cardTitle}>Vamos Trabalhar Juntos</h3>
            <p className={styles.cardText}>
              Seja para um projeto web, um redesign de interface ou uma parceria
              de longo prazo, estou pronto para trazer minha experiência em
              design e desenvolvimento para o seu negócio.
            </p>

            <div className={styles.infoList}>
              <div className={styles.infoItem}>
                <div className={styles.iconBox}>
                  <FaEnvelope className={styles.icon} />
                </div>
                <div>
                  <h4 className={styles.infoTitle}>Email</h4>
                  <div className={styles.infoStack}>
                    <a
                      href="mailto:devmobile@saulopavanello.com.br"
                      className={styles.link}
                    >
                      devmobile@saulopavanello.com.br
                    </a>
                    <a
                      href="mailto:frontend@saulopavanello.com.br"
                      className={styles.link}
                    >
                      frontend@saulopavanello.com.br
                    </a>
                    <a
                      href="mailto:backend@saulopavanello.com.br"
                      className={styles.link}
                    >
                      backend@saulopavanello.com.br
                    </a>
                  </div>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.iconBoxAlt}>
                  <FaMapMarkerAlt className={styles.iconAlt} />
                </div>
                <div>
                  <h4 className={styles.infoTitle}>Localização</h4>
                  <p className={styles.infoText}>Dois Irmãos, RS, Brasil</p>
                  <p className={styles.smallText}>
                    (Em preparação para Portugal em 2025)
                  </p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.iconBoxAlt}>
                  <FaGithub className={styles.iconAlt} />
                </div>
                <div>
                  <h4 className={styles.infoTitle}>GitHub</h4>
                  <a
                    href="https://github.com/MxSGameJPS"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    github.com/MxSGameJPS
                  </a>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.iconBoxAlt}>
                  <FaLinkedin className={styles.iconAlt} />
                </div>
                <div>
                  <h4 className={styles.infoTitle}>LinkedIn</h4>
                  <a
                    href="https://www.linkedin.com/in/saulopavanello/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    /in/saulopavanello/
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className={styles.formCard}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
