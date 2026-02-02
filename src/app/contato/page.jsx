"use client";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./page.module.css";
import Contact from "../../components/Contact/Contact";
import {
  PiEnvelopeOpenBold,
  PiWhatsappLogoBold,
  PiLinkedinLogoBold,
} from "react-icons/pi";

export default function ContactPage() {
  return (
    <div className={styles.pageWrapper}>
      <Header />

      <main>
        {/* INTRO SECTION */}
        <section className={styles.introSection}>
          <div className={styles.introContent}>
            <h1 className={styles.introTitle}>FALE CONOSCO</h1>
            <div className={styles.introText}>
              <p>
                Tem um projeto em mente? Quer transformar sua ideia em software
                de impacto? Estamos prontos para ouvir você. Vamos conversar
                sobre como a tecnologia pode escalar o seu negócio.
              </p>
            </div>

            {/* Visual Icons for Intro */}
            <div className={styles.introIcons}>
              <a
                href="https://wa.me/5551993392983"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Whatsapp"
              >
                <PiWhatsappLogoBold className={styles.floatingIcon} />
              </a>
              <a href="mailto:contato@saulopavanello.com.br" aria-label="Email">
                <PiEnvelopeOpenBold className={styles.floatingIcon} />
              </a>
              <a
                href="https://linkedin.com/in/saulopavanello"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <PiLinkedinLogoBold className={styles.floatingIcon} />
              </a>
            </div>
          </div>
        </section>

        {/* CONTACT COMPONENT SECTION */}
        <div className={styles.contactWrapper}>
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
}
