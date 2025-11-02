"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.css";

const Header = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Bloqueia o scroll do body quando o menu mobile está aberto
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const handleNavigate = (hashOrPath: string, smoothId?: string) => {
    if (hashOrPath.startsWith("/")) {
      window.location.href = hashOrPath;
      return;
    }
    window.location.hash = hashOrPath;
    const el =
      document.getElementById(smoothId || hashOrPath.replace("#", "")) ||
      document.querySelector(
        `[data-section='${smoothId || hashOrPath.replace("#", "")}']`
      );
    if (el) el.scrollIntoView({ behavior: "smooth" });
    // fecha o menu mobile ao navegar
    setOpen(false);
  };

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
              setOpen(false);
            }}
            style={{ display: "inline-block" }}
          >
            <Image src="/logos/logo1.png" alt="Logo" width={120} height={48} />
          </a>
        </Link>
      </div>

      {/* Botão hamburguer — visível em telas menores (<=900px / <=760px) */}
      <button
        className={`${styles.hamburger} ${open ? styles.open : ""}`}
        aria-label="Abrir menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>

      {/* Backdrop que fecha o menu ao clicar (apenas quando aberto) */}
      {open && (
        <div className={styles.backdrop} onClick={() => setOpen(false)} />
      )}

      <nav className={`${styles.nav} ${open ? styles.mobileOpen : ""}`}>
        {/* Botão de fechar visível dentro do menu mobile */}
        {open && (
          <button
            className={styles.closeButton}
            aria-label="Fechar menu"
            onClick={() => setOpen(false)}
          >
            ×
          </button>
        )}
        <button
          className={styles.link}
          onClick={() => {
            // Atualiza a URL para #sobre
            handleNavigate("#sobre", "sobre");
          }}
        >
          Sobre
        </button>

        <button
          className={styles.link}
          onClick={() => {
            // Tenta rolar para seção de certificações na página atual
            const el = document.querySelector(
              "section[class*='certificacoesSection']"
            );
            if (el) {
              el.scrollIntoView({ behavior: "smooth" });
              window.location.hash = "#certificacoes";
              setOpen(false);
              return;
            }
            // Caso não exista, navega para a rota
            handleNavigate("/certificacoes");
          }}
        >
          Certificações
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
                setOpen(false);
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
            // Navega para a rota /contato que contém o formulário.
            handleNavigate("/contato");
          }}
        >
          Vamos conversar
        </button>
      </nav>
    </header>
  );
};

export default Header;
