import styles from "./about.module.css";
import Image from "next/image";

export default function About() {
  return (
    <section id="sobre" className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.textArea}>
          <h2 className={styles.hey}>Hey!</h2>
          <p className={styles.description}>
            Sou o Saulo Desenvolvedor Fullstack com uma base sólida e
            diferenciada em UI Design e Jornalismo. Minha trajetória me permite
            unir três pilares essenciais: a engenharia de software para
            construir sistemas robustos, a sensibilidade de UI para criar
            interfaces que os usuários amam, e a habilidade de comunicação para
            entender e traduzir necessidades de negócio em soluções técnicas
            eficientes. Essa abordagem de ponta a ponta é visível nos projetos
            que desenvolvi, incluindo o{" "}
            <span className={styles.highlight}>
              Ai To Love (plataforma de relacionamento com IA), uma solução de
              gestão completa para igrejas evangélicas, e o aplicativo Android
              do FDMC.
            </span>
            <br />
            Minha transição de carreira foi marcada por uma rápida curva de
            aprendizado e pela entrega de resultados concretos desde o início.
            Com o objetivo de realocação familiar, estou buscando ativamente uma
            posição em Portugal ou Espanha para 2026. Tenho grande interesse em
            me juntar a uma empresa inovadora onde eu possa aplicar minhas
            habilidades e continuar crescendo profissionalmente.{" "}
          </p>
          <a
            href="https://curriculo-alpha-green.vercel.app"
            target="_blank"
            rel="noopener"
            className={styles.downloadButton}
          >
            Baixar Currículo
          </a>
        </div>
        <div className={styles.imageArea}>
          <Image
            src="/foto.png"
            alt="Foto de Saulo Pavanello"
            width={350}
            height={350}
            className={styles.profileImg}
            priority
          />
        </div>
      </div>
      <div className={styles.statsBar}>
        <div className={styles.stat}>
          <span className={styles.statNumber}>1+</span> ano de experiência
        </div>
        <div className={styles.stat}>
          <span className={styles.statNumber}>80+</span> projetos concluídos
        </div>
      </div>
    </section>
  );
}
