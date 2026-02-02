import Image from "next/image";
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.headline}>
            Seu crescimento exige um sistema de{" "}
            <span className={styles.highlightText}>Qualidade</span>
            Um site que <span className={styles.highlightText}>Converte</span>,
            um app que <span className={styles.highlightText}>Encanta</span>.{" "}
            Transformamos sua visão em tecnologia de alto nível.
          </h1>

          <div className={styles.growthBadgeWrapper}>
            <div className={styles.growthBadge}>CRESCEMOS JUNTOS!</div>
          </div>
        </div>

        <div className={styles.imageContainer}>
          <Image
            src="/Hero.png"
            alt="Personagem Tech Saulo Pavanello"
            width={600}
            height={600}
            className={styles.heroImage}
            priority
            quality={100}
          />
        </div>
      </div>
      <div className={styles.bottomShape}>
        
      </div>

      <div
        style={{
          position: "absolute",
          bottom: -1,
          left: 0,
          width: "100%",
          overflow: "hidden",
          lineHeight: 0,
          transform: "rotate(180deg)",
        }}
      >
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{
            position: "relative",
            display: "block",
            width: "calc(100% + 1.3px)",
            height: "80px",
          }}
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            fill="#FFFFFF"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,47.64,50.79,98.28,66,203.42,97.47,252.6,96,311.53,88.74c50.36-6.19,103.88-21.78,154.55-39.73C564.31,19.34,606.31,18.89,644,19.67c93.66,1.93,170.83,39.9,258.85,55.77,66.62,12,128.52-5.83,184.22-26.69C1149.38,30.34,1182.26,16,1200,0Z"
            opacity=".5"
            fill="#FFFFFF"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            fill="#FFFFFF"
          ></path>
        </svg>
      </div>
    </section>
  );
}
