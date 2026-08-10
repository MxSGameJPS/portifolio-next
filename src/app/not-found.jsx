import Link from "next/link";
import { PiArrowLeftBold, PiArrowUpRightBold } from "react-icons/pi";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.page}>
      <Header />

      <main className={styles.main}>
        <section className={styles.section} aria-labelledby="not-found-title">
          <div className={styles.texture} aria-hidden="true" />

          <div className={styles.content}>
            <div className={styles.copy}>
              <p className={styles.eyebrow}>ERRO 404 · ROTA NÃO ENCONTRADA</p>
              <h1 id="not-found-title" className={styles.title}>
                Essa página saiu de rota.
              </h1>
              <p className={styles.description}>
                O endereço pode ter mudado, o conteúdo pode ter sido movido ou o
                link simplesmente não existe mais. O restante do site continua no
                lugar certo.
              </p>

              <div className={styles.actions}>
                <Link href="/" className={styles.primaryAction}>
                  <PiArrowLeftBold aria-hidden="true" />
                  Voltar para a Home
                </Link>
                <Link href="/portfolio" className={styles.secondaryAction}>
                  Ver projetos
                  <PiArrowUpRightBold aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className={styles.codeBlock} aria-hidden="true">
              <span className={styles.codeLabel}>HTTP STATUS</span>
              <strong>404</strong>
              <span className={styles.codeCaption}>NOT FOUND</span>
            </div>
          </div>

          <div className={styles.bottomLine}>
            <span>SAULO PAVANELLO</span>
            <span>SOFTWARE · PRODUTO · ENGENHARIA</span>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
