"use client";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./page.module.css";
import {
  SiUnity,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiSass,
  SiTailwindcss,
  SiExpo,
  SiAndroid,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiVercel,
  SiFigma,
  SiDocker,
  SiMongodb,
} from "react-icons/si";
import {
  FaJava,
  FaMobileAlt,
  FaServer,
  FaDatabase,
  FaTools,
} from "react-icons/fa";

import { TbBrandCSharp } from "react-icons/tb";

export default function StackPage() {
  const content = [
    {
      title: "Game Dev & Desktop",
      icon: <SiUnity />,
      text: "Minha paixão pelo código começou aqui. Com C# e Unity, desenvolvo experiências interativas e jogos 2D/3D. Também possuo conhecimentos iniciais em Java, consolidando uma base forte em Orientação a Objetos.",
      technologies: [
        { name: "C#", icon: <TbBrandCSharp /> },
        { name: "Unity", icon: <SiUnity /> },
        { name: "Java (Iniciante)", icon: <FaJava /> },
      ],
    },
    {
      title: "Front-end Moderno",
      icon: <SiReact />,
      text: "Construo interfaces rápidas, responsivas e acessíveis. Do HTML semântico à complexidade de aplicações SPA com Next.js 14+, meu foco é performance e experiência do usuário (UX).",
      technologies: [
        { name: "React.js", icon: <SiReact /> },
        { name: "Next.js 14+", icon: <SiNextdotjs /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "JavaScript (ES6+)", icon: <SiJavascript /> },
        { name: "HTML5", icon: <SiHtml5 /> },
        { name: "CSS/SASS", icon: <SiSass /> },
        { name: "Tailwind", icon: <SiTailwindcss /> },
      ],
    },
    {
      title: "Mobile Development",
      icon: <FaMobileAlt />,
      text: "Levo suas ideias para o bolso do usuário. Especialista em React Native e Expo, crio aplicativos nativos para Android prontos para publicação na Play Store.",
      technologies: [
        { name: "React Native", icon: <SiReact /> },
        { name: "Expo", icon: <SiExpo /> },
        { name: "Android Deploy", icon: <SiAndroid /> },
      ],
    },
    {
      title: "Back-end & API",
      icon: <FaServer />,
      text: "O motor que faz tudo funcionar. Desenvolvo APIs RESTful robustas e escaláveis, integrando sistemas de pagamento e garantindo a segurança dos dados.",
      technologies: [
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "Express", icon: <SiExpress /> },
        { name: "API REST", icon: <FaServer /> },
      ],
    },
    {
      title: "Banco de Dados",
      icon: <FaDatabase />,
      text: "Dados são o novo petróleo. Utilizo soluções modernas como Neon DB (Serverless Postgres) para garantir alta disponibilidade e integridade.",
      technologies: [
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Neon DB", icon: <FaDatabase /> },
      ],
    },
    {
      title: "Ferramentas & DevOps",
      icon: <FaTools />,
      text: "Um bom artesão precisa de boas ferramentas. Domino o fluxo de versionamento com Git, deploys automatizados na Vercel e prototipagem de alta fidelidade no Figma.",
      technologies: [
        { name: "Git", icon: <SiGit /> },
        { name: "GitHub", icon: <SiGithub /> },
        { name: "Vercel", icon: <SiVercel /> },
        { name: "Docker", icon: <SiDocker /> },
        { name: "Figma", icon: <SiFigma /> },
      ],
    },
  ];

  return (
    <div className={styles.pageWrapper}>
      <Header />

      <main>
        {/* INTRO SECTION */}
        <section className={styles.introSection}>
          <div className={styles.introContent}>
            <div className={styles.introTextColumn}>
              <h1 className={styles.introTitle}>STACKS & TECNOLOGIAS</h1>
              <div className={styles.introText}>
                <p>
                  A tecnologia muda rápido, e eu acompanho. Minha caixa de
                  ferramentas é composta por stacks modernas e consolidadas no
                  mercado, garantindo que eu possa entregar desde um{" "}
                  <span className={styles.highlight}>MVP rápido</span> até uma{" "}
                  <span className={styles.highlight}>
                    aplicação corporativa complexa
                  </span>
                  .
                </p>
                <br />
                <p>
                  Mas ferramentas são apenas meios. O que realmente importa é
                  como combiná-las para resolver problemas reais de negócio com
                  eficiência, escalabilidade e manutenibilidade. Abaixo, detalho
                  as tecnologias que domino e utilizo no meu dia a dia.
                </p>
              </div>
            </div>

            {/* Visual Grid of Icons for Intro */}
            <div className={styles.introIcons}>
              <SiReact className={styles.floatingIcon} />
              <SiNextdotjs className={styles.floatingIcon} />
              <SiTypescript className={styles.floatingIcon} />
              <SiNodedotjs className={styles.floatingIcon} />
              <SiUnity className={styles.floatingIcon} />
              <SiPostgresql className={styles.floatingIcon} />
            </div>
          </div>
        </section>

        {/* CONTENT SECTION */}
        <section className={styles.contentList}>
          <div className={styles.container}>
            <div className={styles.pageTitleWrapper}>
              <h2 className={styles.pageTitle}>COMPETÊNCIAS TÉCNICAS</h2>
              <p className={styles.pageSubtitle}>
                o que eu uso para construir o futuro
              </p>
            </div>

            {content.map((item, index) => (
              <div key={index} className={styles.contentBlock}>
                <div className={styles.textColumn}>
                  <h3 className={styles.blockTitle}>
                    {item.icon} {item.title}
                  </h3>
                  <p className={styles.blockText}>{item.text}</p>
                </div>

                <div className={styles.techGrid}>
                  {item.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className={styles.techItem}>
                      <div className={styles.techIcon}>{tech.icon}</div>
                      <span className={styles.techName}>{tech.name}</span>
                    </div>
                  ))}
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
