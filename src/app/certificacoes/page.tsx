import Header from "@/componentsPromocao/Header/Header";
import Footer from "@/components/layout/Footer";
import styles from "./certificacoes.module.css";
import dynamic from "next/dynamic";

const Gallery = dynamic(() => import("@/components/Certificados/Gallery"), {
  ssr: false,
});

export default function CertificacoesPage() {
  return (
    <div className={styles.page}>
      <Header />

      <main className={styles.content}>
        <section id="certificacoes" className={styles.certificacoesSection}>
          <div className={styles.container}>
            <h1>Certificações</h1>
            <p>
              Esta página reúne os certificados de cursos que concluí até o
              momento. Abaixo você pode visualizar miniaturas dos certificados e
              clicar para ver cada imagem em tamanho maior. Para certificados de
              áreas como Jornalismo e Design que não estão listados aqui, por
              favor solicite pelo WhatsApp <a href="https://wa.me/5551993392983">VAMOS CONVERSAR</a>
              
            </p>

            {/* Galeria de certificados */}
            <Gallery />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
