"use client";

import { useState, useEffect } from "react";
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
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <Link href="/">
            <Image
              src="/Logo/logohorizontal.png"
              alt="Saulo Pavanello Logo"
              width={280}
              height={150}
              className={styles.logo}
              priority
            />
          </Link>
        </div>

        <nav
          className={`${styles.nav} ${
            isMobileMenuOpen ? styles.navActive : ""
          }`}
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
                  <Link href="/web-apps" className={styles.dropdownLink}>
                    Web Apps & Sistemas
                  </Link>
                  <Link href="/mobile" className={styles.dropdownLink}>
                    Aplicativos Mobile
                  </Link>
                  <Link href="/landing-pages" className={styles.dropdownLink}>
                    Landing Pages
                  </Link>
                  <Link href="/ecommerce" className={styles.dropdownLink}>
                    E-commerce
                  </Link>
                  <Link href="/backend" className={styles.dropdownLink}>
                    Backend
                  </Link>
                </div>
                <div>
                  <h4 className={styles.dropdownTitle}>Design & Estratégia</h4>
                  <Link href="/ui-ux" className={styles.dropdownLink}>
                    UI/UX Design
                  </Link>
                </div>
              </div>
            </li>

            <li className={styles.navItem}>
              <Link href="/portfolio" className={styles.navLink}>
                <span>Portfólio</span>
              </Link>
            </li>

            <li className={styles.navItem}>
              <div className={styles.navLink}>
                <span>Sobre</span>
                <ChevronDown />
              </div>
              <div className={styles.dropdown}>
                <Link href="/sobre" className={styles.dropdownLink}>
                  Quem sou eu
                </Link>
                <Link href="/stack" className={styles.dropdownLink}>
                  Minha Stack
                </Link>
              </div>
            </li>

            <li className={styles.navItem}>
              <Link href="/contato" className={styles.navLink}>
                <span>Contato</span>
              </Link>
            </li>
          </ul>
        </nav>

        <div className={styles.mobileToggle} onClick={toggleMenu}>
          <span
            className={`${styles.bar} ${
              isMobileMenuOpen ? styles.barActive : ""
            }`}
          ></span>
          <span
            className={`${styles.bar} ${
              isMobileMenuOpen ? styles.barActive : ""
            }`}
          ></span>
          <span
            className={`${styles.bar} ${
              isMobileMenuOpen ? styles.barActive : ""
            }`}
          ></span>
        </div>
      </div>
    </header>
  );
}
