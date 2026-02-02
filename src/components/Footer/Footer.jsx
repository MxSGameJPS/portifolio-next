"use client";
import styles from "./footer.module.css";
import Image from "next/image";
import solutionsData from "../Solutions/solutions.json";
import { FaInstagram, FaYoutube, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { PiArrowUpRightBold } from "react-icons/pi";
import Link from "next/link";

export default function Footer() {
  // Extract categories for columns
  const webCategory = solutionsData.find((c) => c.id === "web");
  const mobileCategory = solutionsData.find((c) => c.id === "mobile");
  const backendCategory = solutionsData.find((c) => c.id === "backend");

  const linkMapping = {
    // Web
    Prototipação: "/ui-ux",
    "Criação de Sites": "/web-apps",
    "E-Commerce Personalizado": "/ecommerce",
    "Landing Pages": "/landing-pages",
    Portais: "/portais",
    Dashboards: "/dashboards",
    "Redes Sociais": "/redes-sociais",
    // Mobile
    "Criação de APP Android": "/app-android",
    "Criação de APP IOS": "/app-ios",
    "Criação de APP para TV Android/TV Box": "/app-tv",
    "Postagem em Lojas": "/app-store-optimization",
    // Backend
    "Desenvolvimento de Banco de Dados": "/database",
    "Criação de Api": "/api-development",
    "Integração com Terceiros": "/integrations",
    "Automação e DevOps": "/devops",
    "Segurança da Informação": "/security",
  };

  const getLink = (name) => linkMapping[name] || "/";

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Left Column: Web & BackEnd */}
        <div className={styles.column}>
          <div>
            <p className={`${styles.groupTitle} ${styles.highlightTitle}`}>
              {webCategory?.title || "Desenvolvimento Web"}
            </p>
            <ul className={styles.linkList}>
              {webCategory?.items.map((item, idx) => (
                <li key={idx}>
                  <Link href={getLink(item.name)} className={styles.linkItem}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className={`${styles.groupTitle} ${styles.highlightTitle}`}>
              {backendCategory?.title || "BackEnd"}
            </p>
            <ul className={styles.linkList}>
              {backendCategory?.items.slice(0, 4).map((item, idx) => (
                <li key={idx}>
                  <Link href={getLink(item.name)} className={styles.linkItem}>
                    {item.name}
                  </Link>
                </li>
              ))}
              {/* Limit items if too long? */}
            </ul>
          </div>
        </div>

        {/* Center Column: Logo & Socials */}
        <div className={styles.centerColumn}>
          <Image
            src="/Logo/logohorizontal.png"
            alt="Logo"
            width={350}
            height={280}
            className={styles.logo}
          />

          <div>
            <p className={styles.socialTitle}>SIGA-NOS</p>
            <div className={styles.socialIcons}>
              <a
                href="https://www.instagram.com/mxsgamejps/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.youtube.com/@saulopavanello"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
              >
                <FaYoutube />
              </a>
              <a
                href="https://www.linkedin.com/in/saulopavanello/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
              >
                <FaLinkedin />
              </a>
              <a
                href="https://wa.me/5551993392983"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Badges Placeholder - mimicking ref image */}
          <div className={styles.badges}>
            {/* Can add partner logos here in future */}
          </div>
        </div>

        {/* Right Column: Mobile & Others */}
        <div className={styles.column}>
          <div>
            <p className={`${styles.groupTitle} ${styles.highlightTitle}`}>
              {mobileCategory?.title || "Mobile"}
            </p>
            <ul className={styles.linkList}>
              {mobileCategory?.items.map((item, idx) => (
                <li key={idx}>
                  <Link href={getLink(item.name)} className={styles.linkItem}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className={`${styles.groupTitle} ${styles.highlightTitle}`}>
              Mais
            </p>
            <ul className={styles.linkList}>
              <li>
                <Link href="/portfolio" className={styles.linkItem}>
                  Portfólio
                </Link>
              </li>
              <li>
                <Link href="/sobre" className={styles.linkItem}>
                  Sobre mim
                </Link>
              </li>
              <li>
                <Link href="/contato" className={styles.linkItem}>
                  Contato
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        Desenvolvido por{" "}
        <a href="https://github.com/MxSGameJPS">Saulo Pavanello</a> © 2026.
        Todos os direitos reservados.
      </div>

      {/* Floating Elements */}
      <a
        href="https://wa.me/5551993392983"
        target="_blank"
        className={styles.whatsappFloat}
        aria-label="WhatsApp"
      >
        <FaWhatsapp />
      </a>
    </footer>
  );
}
