import Image from "next/image";
import { PiArrowRightBold, PiWhatsappLogoBold } from "react-icons/pi";
import TrackedAnchor from "../Analytics/TrackedAnchor";
import styles from "./hero.module.css";

const WHATSAPP_URL =
  "https://wa.me/5551993392983?text=Ol%C3%A1%2C%20Saulo!%20Vim%20pelo%20seu%20portf%C3%B3lio%20e%20quero%20conversar%20sobre%20um%20projeto.";

export default function Hero() {
  return (
    <section className={styles.heroSection} aria-labelledby="hero-title">
      <div className={styles.texture} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>
            SAULO PAVANELLO <span>·</span> SOFTWARE ENGINEER
          </p>

          <h1 id="hero-title" className={styles.headline}>
            Eu construo software para negócios que querem crescer.
          </h1>

          <p className={styles.subHeadline}>
            Desenvolvimento de SaaS, sistemas web, aplicativos, APIs e
            experiências digitais com foco em resultado real.
          </p>

          <div className={styles.ctaGroup}>
            <TrackedAnchor
              href="/portfolio"
              className={styles.ctaPrimary}
              eventLabel="hero_ver_projetos"
            >
              Ver projetos
              <PiArrowRightBold aria-hidden="true" />
            </TrackedAnchor>

            <TrackedAnchor
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaSecondary}
              eventLabel="hero_falar_comigo"
            >
              Falar comigo
              <PiWhatsappLogoBold aria-hidden="true" />
            </TrackedAnchor>
          </div>

          <div className={styles.stackLine}>
            <span>React</span>
            <i>·</i>
            <span>Next.js</span>
            <i>·</i>
            <span>Node.js</span>
            <i>·</i>
            <span>Mobile</span>
            <i>·</i>
            <span>IA</span>
          </div>
        </div>

        <div className={styles.stage}>
          <Image
            src="/hero-saulo.webp"
            alt="Saulo Pavanello em seu ambiente de trabalho, ao lado de uma estação de desenvolvimento de software"
            width={1440}
            height={810}
            sizes="(max-width: 900px) 100vw, 45vw"
            className={styles.portrait}
            loading="eager"
            fetchPriority="high"
          />
          <div className={styles.photoShade} aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
