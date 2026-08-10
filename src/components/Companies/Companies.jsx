import Image from "next/image";
import styles from "./companies.module.css";

const companies = [
  { name: "AI2Love", src: "/Empresas/AI2Love-logo.svg" },
  { name: "GeekZ", src: "/Empresas/Logos_GeekZ_vertical.png" },
  { name: "Moises", src: "/Empresas/Moises com fone (1).png" },
];

export default function Companies() {
  return (
    <section className={styles.companiesSection} aria-labelledby="companies-title">
      <div className={styles.container}>
        <p className={styles.eyebrow}>PROJETOS & PARCERIAS</p>
        <h2 id="companies-title" className={styles.title}>
          Marcas que já confiaram no meu trabalho.
        </h2>

        <div className={styles.logoGrid} aria-label="Marcas e projetos atendidos">
          {companies.map((company) => (
            <div key={company.name} className={styles.logoItem}>
              <Image
                src={company.src}
                alt={`Logo ${company.name}`}
                width={180}
                height={72}
                className={styles.companyLogo}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
