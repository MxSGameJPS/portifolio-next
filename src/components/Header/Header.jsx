"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.css";

const ChevronDown = () => (
  <svg
    className={styles.chevron}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M6 9L12 15L18 9"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 18);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMobileMenuOpen((current) => !current);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <Link href="/" onClick={closeMenu} aria-label="Ir para a página inicial">
            <Image
              src="/Logo/logohorizontal.png"
              alt="Saulo Pavanello"
              width={280}
              height={150}
              className={styles.logo}
              priority
            />
          </Link>
        </div>

        <nav
          className={`${styles.nav} ${isMobileMenuOpen ? styles.navActive : ""}`}
          aria-label="Navegação principal"
        >
          <ul>
            <li className={styles.navItem}>
              <div className={styles.navLink}>
                <span>Soluções</span>
                <ChevronDown />
              </div>

              <div className={`${styles.dropdown} ${styles.megaMenu}`}>
                <div>
                  <h4 className={styles.dropdownTitle}>Desenvolvimento</h4>
                  <Link href="/web-apps" className={styles.dropdownLink} onClick={closeMenu}>
                    Web Apps & Sistemas
                  </Link>
                  <Link href="/mobile" className={styles.dropdownLink} onClick={closeMenu}>
                    Aplicativos Mobile
                  </Link>
                  <Link href="/landing-pages" className={styles.dropdownLink} onClick={closeMenu}>
                    Landing Pages
                  </Link>
                  <Link href="/ecommerce" className={styles.dropdownLink} onClick={closeMenu}>
                    E-commerce
                  </Link>
                  <Link href="/backend" className={styles.dropdownLink} onClick={closeMenu}>
                    Backend
                  </Link>
                </div>

                <div>
                  <h4 className={styles.dropdownTitle}>Design & Estratégia</h4>
                  <Link href="/ui-ux" className={styles.dropdownLink} onClick={closeMenu}>
                    UI/UX Design
                  </Link>
                </div>
              </div>
            </li>

            <li className={styles.navItem}>
              <Link href="/portfolio" className={styles.navLink} onClick={closeMenu}>
                <span>Portfólio</span>
              </Link>
            </li>

            <li className={styles.navItem}>
              <div className={styles.navLink}>
                <span>Sobre</span>
                <ChevronDown />
              </div>

              <div className={styles.dropdown}>
                <Link href="/sobre" className={styles.dropdownLink} onClick={closeMenu}>
                  Quem sou eu
                </Link>
                <Link href="/stack" className={styles.dropdownLink} onClick={closeMenu}>
                  Minha Stack
                </Link>
              </div>
            </li>

            <li className={styles.navItem}>
              <Link href="/contato" className={styles.navLink} onClick={closeMenu}>
                <span>Contato</span>
              </Link>
            </li>

            <li className={styles.mobileCtaItem}>
              <Link href="/contato" className={styles.mobileCta} onClick={closeMenu}>
                Vamos conversar <span aria-hidden="true">↗</span>
              </Link>
            </li>
          </ul>
        </nav>

        <div className={styles.actions}>
          <Link href="/contato" className={styles.headerCta}>
            Vamos conversar <span aria-hidden="true">↗</span>
          </Link>

          <button
            className={styles.mobileToggle}
            onClick={toggleMenu}
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMobileMenuOpen}
          >
            <span className={`${styles.bar} ${isMobileMenuOpen ? styles.barActive : ""}`} />
            <span className={`${styles.bar} ${isMobileMenuOpen ? styles.barActive : ""}`} />
            <span className={`${styles.bar} ${isMobileMenuOpen ? styles.barActive : ""}`} />
          </button>
        </div>
      </div>
    </header>
  );
}
