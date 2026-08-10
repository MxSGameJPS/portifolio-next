"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { PiArrowUpRightBold } from "react-icons/pi";

const navigationLinks = [
  { label: "Projetos", href: "/portfolio" },
  { label: "Sobre mim", href: "/sobre" },
  { label: "Stack", href: "/stack" },
  { label: "Contato", href: "/contato" },
];

const solutionLinks = [
  { label: "Produtos & SaaS", href: "/web-apps" },
  { label: "Sistemas Web", href: "/web-apps" },
  { label: "APIs & Integrações", href: "/backend" },
  { label: "Aplicativos Mobile", href: "/mobile" },
  { label: "UI/UX & Estratégia", href: "/ui-ux" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/saulopavanello/",
    icon: FaLinkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/MxSGameJPS",
    icon: FaGithub,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/saulopavanello.tech/",
    icon: FaInstagram,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@saulopavanello",
    icon: FaYoutube,
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topGrid}>
          <div className={styles.brandColumn}>
            <Link href="/" className={styles.logoLink} aria-label="Saulo Pavanello - início">
              <Image
                src="/Logo/logohorizontal.png"
                alt="Saulo Pavanello"
                width={260}
                height={110}
                className={styles.logo}
              />
            </Link>

            <span className={styles.eyebrow}>SOFTWARE ENGINEER</span>
            <h2 className={styles.brandStatement}>
              Software para negócios que querem crescer.
            </h2>
            <p className={styles.brandText}>
              Desenvolvimento de produtos digitais, sistemas, aplicativos, APIs e
              experiências com IA — da estratégia à produção.
            </p>
          </div>

          <nav className={styles.linkColumn} aria-label="Navegação do rodapé">
            <p className={styles.groupTitle}>Navegação</p>
            <ul className={styles.linkList}>
              {navigationLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={styles.linkItem}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className={styles.linkColumn} aria-label="Soluções">
            <p className={styles.groupTitle}>Soluções</p>
            <ul className={styles.linkList}>
              {solutionLinks.map((item) => (
                <li key={`${item.href}-${item.label}`}>
                  <Link href={item.href} className={styles.linkItem}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.contactColumn}>
            <p className={styles.groupTitle}>Tem um projeto em mente?</p>
            <p className={styles.contactText}>
              Me conte o que você precisa construir. Eu respondo pessoalmente.
            </p>
            <Link href="/contato" className={styles.cta}>
              Vamos conversar
              <PiArrowUpRightBold aria-hidden="true" />
            </Link>

            <a
              href="mailto:saulopavanello@saulopavanello.com.br"
              className={styles.email}
            >
              saulopavanello@saulopavanello.com.br
            </a>
          </div>
        </div>

        <div className={styles.middleRow}>
          <p className={styles.serviceArea}>
            Dois Irmãos · Rio Grande do Sul · Atendimento remoto para todo o Brasil
          </p>

          <div className={styles.socials} aria-label="Redes sociais">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label={label}
              >
                <Icon aria-hidden="true" />
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>

        <div className={styles.bottomRow}>
          <p>© 2026 Saulo Pavanello. Todos os direitos reservados.</p>
          <p className={styles.signature}>Design, código e produto por Saulo Pavanello.</p>
        </div>
      </div>
    </footer>
  );
}
