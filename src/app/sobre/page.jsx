"use client";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./page.module.css";
import Image from "next/image";
import { PiDownloadSimpleBold } from "react-icons/pi";

export default function AboutPage() {
  const content = [
    {
      title: "SOU PROFISSIONAL",
      text: "Sou muito mais do que um programador que apenas escreve código ou 'faz telas'. Sou um Engenheiro de Software FullStack que une técnica e visão de negócio. Aqui você não será atendido por um gerente de contas ou repassado para um estagiário: o contato é direto comigo. Ofereço a entrega de uma equipe multidisciplinar concentrada em um profissional sênior, garantindo coerência do design ao banco de dados.",
      image: "/Sobre/saulo_profile.png",
      alt: "Profissional focado trabalhando em setup moderno",
    },
    {
      title: "SOU PERSEVERANTE",
      text: "Meu processo foi lapidado na prática para trazer resultados reais. Como freelancer, o meu sucesso está diretamente atrelado ao seu: se o projeto não performa, eu não cresço. A perseverança está no meu DNA — seja resolvendo um bug complexo ou otimizando a performance da sua aplicação até o limite. Mantenho o lema: We Grow Together!",
      image: "/Sobre/perseverantes.png",
      alt: "Homem dançando estilo anos 80 (Meme)",
    },
    {
      title: "SOU ESTRATÉGICO",
      text: "Código sem estratégia é apenas texto colorido. A execução é um meio para alcançar seu objetivo, e por isso cada linha que digito é acompanhada de planejamento. Analiso a arquitetura, a experiência do usuário (UX) e a escalabilidade futura. Não entrego apenas o que você pede, mas o que o seu projeto realmente precisa para se destacar no mercado.",
      image: "/Sobre/estrategicos.png",
      alt: "Maestro regendo com energia",
    },
    {
      title: "SOU CIENTISTA",
      text: "Web Analytics, Inteligência Artificial e as stacks mais modernas (como Next.js e React 19) fazem parte da minha rotina. O conceito de 'cientista' aqui é literal: estudo todos os dias para validar as melhores tecnologias e estratégias. Meu laboratório está sempre ativo para oferecer as soluções mais 'fresquinhas' e eficientes para o seu projeto. YEAH SCIENCE!",
      image: "/Sobre/saulo_profile.png",
      alt: "Jesse Pinkman Breaking Bad - Yeah Science",
    },
  ];

  return (
    <div className={styles.pageWrapper}>
      <Header />

      <main>
        {/* INTRO SECTION (Standardized Hero) */}
        <section className={styles.introSection}>
          <div className={styles.introContent}>
            <div className={styles.introTextColumn}>
              <h1 className={styles.introTitle}>QUEM É SAULO?</h1>
              <div className={styles.introText}>
                <p>
                  Sou o Saulo, Desenvolvedor Fullstack com uma base sólida e
                  diferenciada em UI Design e Jornalismo. Minha trajetória me
                  permite unir três pilares essenciais: a engenharia de software
                  para construir sistemas robustos, a sensibilidade de UI para
                  criar interfaces que os usuários amam, e a habilidade de
                  comunicação para entender e traduzir necessidades de negócio
                  em soluções técnicas eficientes.
                </p>
                <br />
                <p>
                  Essa abordagem de ponta a ponta é visível nos projetos que
                  desenvolvi, incluindo o{" "}
                  <span className={styles.highlight}>Ai To Love</span>{" "}
                  (plataforma de relacionamento com IA), uma solução de gestão
                  completa para{" "}
                  <span className={styles.highlight}>igrejas evangélicas</span>,
                  e o aplicativo Android do{" "}
                  <span className={styles.highlight}>FDMC</span>.
                </p>
                <br />
                <p>
                  Minha transição de carreira foi marcada por uma rápida curva
                  de aprendizado e pela entrega de resultados concretos desde o
                  início. Com o objetivo de realocação familiar, estou buscando
                  ativamente uma posição em{" "}
                  <strong style={{ color: "#fff" }}>Portugal ou Espanha</strong>{" "}
                  para 2026.
                </p>
              </div>
              <a
                href="/Curriculo_Saulo.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.downloadBtn}
              >
                BAIXAR CURRÍCULO <PiDownloadSimpleBold />
              </a>
            </div>

            <div className={styles.introImageColumn}>
              <div className={styles.profileImageWrapper}>
                <Image
                  src="/Sobre/saulo_profile.png"
                  alt="Saulo - Fullstack Developer"
                  fill
                  className={styles.profileImage}
                  priority
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* CONTENT SECTION (Standardized List) */}
        <section className={styles.contentList}>
          <div className={styles.container}>
            <div className={styles.pageTitleWrapper}>
              <h2 className={styles.pageTitle}>MEU DNA</h2>
              <p className={styles.pageSubtitle}>
                de onde vim, para onde vou, do que me alimento?
              </p>
            </div>

            {content.map((item, index) => (
              <div key={index} className={styles.contentBlock}>
                <div className={styles.textColumn}>
                  <h3 className={styles.blockTitle}>{item.title}</h3>
                  <p className={styles.blockText}>{item.text}</p>
                </div>

                <div className={styles.imageColumn}>
                  <div className={styles.imageWrapper}>
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className={styles.blobImage}
                      sizes="(max-width: 768px) 100vw, 500px"
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
