"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Link href="/" legacyBehavior>
          <a
            onClick={(e) => {
              e.preventDefault();
              window.location.hash = "";
              window.scrollTo({ top: 0, behavior: "smooth" });
              window.history.replaceState(null, "", "/");
            }}
            style={{ display: "inline-block" }}
          >
            <Image src="/logos/logo1.png" alt="Logo" width={120} height={48} />
          </a>
        </Link>
      </div>
      <nav className={styles.nav}>
        <button
          className={styles.link}
          onClick={() => {
            // Atualiza a URL para #sobre
            window.location.hash = "#sobre";
            const el =
              document.getElementById("sobre") ||
              document.getElementById("about") ||
              document.querySelector("[data-section='about']");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Sobre
        </button>
        <button
          className={styles.link}
          onClick={() => {
            window.location.hash = "#projetos";
            let attempts = 0;
            const maxAttempts = 30;
            const scrollToProjects = () => {
              const el =
                document.getElementById("projetos") ||
                document.getElementById("projects") ||
                document.querySelector("[data-section='projects']");
              if (el) {
                el.scrollIntoView({ behavior: "smooth" });
                return;
              }
              if (attempts < maxAttempts) {
                attempts++;
                window.requestAnimationFrame(scrollToProjects);
              }
            };
            scrollToProjects();
          }}
        >
          Projetos
        </button>
        <button
          className={styles.button}
          onClick={() => {
            window.location.hash = "#contato";
            const el = document.getElementById("contato");
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
