import Image from "next/image";
import styles from "./companies.module.css";

// Apenas logos de marca REAIS e reconhecíveis devem ficar aqui — prova social
// só funciona com consistência. Cada item idealmente vira link pro cliente (href).
const companies = [
  { name: "AI2Love", src: "/Empresas/AI2Love-logo.svg" },
  { name: "GeekZ", src: "/Empresas/Logos_GeekZ_vertical.png" },
  { name: "Moises", src: "/Empresas/Moises com fone (1).png" },

  // ⚠️ SAULO: itens abaixo comentados — quebram a credibilidade da fileira.
  // Troque pelo logo oficial do cliente (PNG/SVG fundo transparente) e reative.
  // { name: "Rafael", src: "/Empresas/Rafael.jpg" },      // foto de pessoa, não logo
  // { name: "Logo", src: "/Empresas/logo.png" },          // nome genérico — qual cliente?
  // { name: "Logo Preta", src: "/Empresas/logoPreta.png" },// variação da mesma marca?
  // { name: "Logo Q", src: "/Empresas/logoq.png" },       // placeholder
  { name: "Produtos", src: "/Empresas/produtos.png" },  // não é logo de cliente
  // { name: "Favicon", src: "/Empresas/favicon.png" },    // favicon ~32px, fica borrado
];

export default function Companies() {
  return (
    <section className={styles.companiesSection}>
      <h2 className={styles.title}>Marcas que já cresceram comigo</h2>

      <div className={styles.slider}>
        <div className={styles.slideTrack}>
          {/* one "set" is the list doubled so it overflows the viewport even
              with few logos; we render two sets and translate -50% for a
              seamless loop (see @keyframes scroll). */}
          {[...companies, ...companies, ...companies, ...companies].map(
            (company, index) => (
              <div key={`${company.name}-${index}`} className={styles.slide}>
                <Image
                  src={company.src}
                  alt={`${company.name} Logo`}
                  width={150}
                  height={60}
                  className={styles.companyLogo}
                />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
