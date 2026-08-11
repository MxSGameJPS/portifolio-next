import Image from "next/image";
import styles from "./companies.module.css";

const companies = [
  {
    name: "AI2Love",
    src: "/Empresas/AI2Love-logo.svg",
    sizes: "(max-width: 620px) 90px, 110px",
    quality: 75,
  },
  {
    name: "GeekZ",
    src: "/Empresas/Logos_GeekZ_vertical.png",
    sizes: "(max-width: 620px) 48px, 58px",
    quality: 60,
  },
  {
    name: "MC Contabilidade",
    src: "/Empresas/Moises com fone (1).png",
    sizes: "(max-width: 620px) 46px, 54px",
    quality: 60,
  },
  {
    name: "Social Jurídico",
    src: "/Empresas/produtos.png",
    sizes: "(max-width: 620px) 46px, 54px",
    quality: 60,
  },
  {
    name: "Alma Zen",
    src: "/Empresas/logo.png",
    sizes: "(max-width: 620px) 46px, 54px",
    quality: 60,
  },
  {
    name: "Qfarma",
    src: "/Empresas/logoq.png",
    sizes: "(max-width: 620px) 92px, 138px",
    quality: 60,
  },
];

export default function Companies() {
  return (
    <section className={styles.companiesSection} aria-labelledby="companies-title">
      <div className={styles.container}>
        <div className={styles.introGrid}>
          <div>
            <p className={styles.eyebrow}>PRODUTOS · MARCAS · PARCERIAS</p>
            <h2 id="companies-title" className={styles.title}>
              Alguns projetos que carregam meu trabalho.
            </h2>
          </div>

          <div className={styles.introAside}>
            <span className={styles.asideNumber}>06</span>
            <p>
              Uma seleção entre produtos próprios e trabalhos desenvolvidos para
              negócios reais — do raciocínio de produto à experiência e ao código.
            </p>
          </div>
        </div>

        <div className={styles.brandIndex} aria-label="Projetos e marcas selecionados">
          {companies.map((company, index) => (
            <div key={company.name} className={styles.brandRow}>
              <span className={styles.brandNumber}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className={styles.brandName}>{company.name}</span>
              <div className={styles.logoWrap}>
                <Image
                  src={company.src}
                  alt={`Logo ${company.name}`}
                  width={180}
                  height={70}
                  sizes={company.sizes}
                  quality={company.quality}
                  className={styles.companyLogo}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
