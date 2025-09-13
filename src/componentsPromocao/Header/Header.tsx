"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <a
          href="https://www.saulopavanello.com.br/"
          style={{ display: "inline-block" }}
        >
          <Image src="/logos/logo1.png" alt="Logo" width={120} height={48} />
        </a>
      </div>
      <nav className={styles.nav}>
        <button
          className={styles.link}
          onClick={() => {
            const el = document.querySelector(
              "section[class*='servicosSection']"
            );
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Sobre
        </button>
        <button
          className={styles.link}
          onClick={() => {
            // Tenta encontrar a seção de certificações na página atual
            const el = document.querySelector(
              "section[class*='certificacoesSection']"
            );
            if (el) {
              el.scrollIntoView({ behavior: "smooth" });
              return;
            }
            // Se não existir na página atual, navega para a rota /certificacoes
            window.location.href = "/certificacoes";
          }}
        >
          Certificações
        </button>
        <a
          className={styles.link}
          href="https://www.saulopavanello.com.br/#projetos"
        >
          Projetos
        </a>
        <button
          className={styles.button}
          onClick={() => {
            const el = document.querySelector(
              "section[class*='formularioSection']"
            );
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Vamos conversar
        </button>
      </nav>
    </header>
  );
};

export default Header;
