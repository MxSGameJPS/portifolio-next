import Image from "next/image";
import styles from "./companies.module.css";

const companies = [
  { name: "AI2Love", src: "/Empresas/AI2Love-logo.svg" },
  { name: "GeekZ", src: "/Empresas/Logos_GeekZ_vertical.png" },
  { name: "Moises", src: "/Empresas/Moises com fone (1).png" },
  { name: "Social Jurídico", src: "/Empresas/produtos.png" },
  { name: "Alma Zen", src: "/Empresas/logo.png" },
  { name: "Qfarma", src: "/Empresas/logoq.png" },
];

export default function Companies() {
  return (
    <section className={styles.companiesSection} aria-labelledby="companies-title">
      <div className={styles.container}>
        <div className={styles.headingRow}>
          <div className={styles.headingCopy}>
            <p className={styles.eyebrow}>PROJETOS · PRODUTOS · PARCERIAS</p>
            <h2 id="companies-title" className={styles.title}>
              Marcas diferentes. O mesmo cuidado com produto.
            </h2>
          </div>

          <p className={styles.supportingText}>
            Uma seleção de produtos e empresas que já passaram pelo meu trabalho —
            da estratégia à experiência e ao código.
          </p>
        </div>

        <div className={styles.logoRail} aria-label="Marcas e projetos selecionados">
          <div className={styles.logoTrack}>
            {companies.map((company) => (
              <div key={company.name} className={styles.logoItem} title={company.name}>
                <Image
                  src={company.src}
                  alt={`Logo ${company.name}`}
                  width={190}
                  height={78}
                  sizes="(max-width: 700px) 150px, 170px"
                  className={styles.companyLogo}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
