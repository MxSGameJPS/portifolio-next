import Image from "next/image";
import styles from "./companies.module.css";

const companies = [
  { name: "AI2Love", src: "/Empresas/AI2Love-logo.svg" },
  { name: "GeekZ", src: "/Empresas/Logos_GeekZ_vertical.png" },
  { name: "Moises com fone", src: "/Empresas/Moises com fone (1).png" },
  { name: "Rafael", src: "/Empresas/Rafael.png" },
  { name: "Logo", src: "/Empresas/logo.png" },
  { name: "Logo Preta", src: "/Empresas/logoPreta.png" },
  { name: "Logo Q", src: "/Empresas/logoq.png" },
  { name: "Produtos", src: "/Empresas/produtos.png" },
  { name: "Logo", src: "/Empresas/favicon.png" },
];

export default function Companies() {
  return (
    <section className={styles.companiesSection}>
      <h2 className={styles.title}>Empresas que confiaram no meu trabalho</h2>

      <div className={styles.slider}>
        <div className={styles.slideTrack}>
          {[...companies, ...companies, ...companies].map((company, index) => (
            <div key={`${company.name}-${index}`} className={styles.slide}>
              <Image
                src={company.src}
                alt={`${company.name} Logo`}
                width={150}
                height={60}
                className={styles.companyLogo}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
