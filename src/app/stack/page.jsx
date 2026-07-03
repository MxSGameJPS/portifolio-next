"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./page.module.css";
import { PiArrowUpRightBold } from "react-icons/pi";
import {
  SiUnity,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
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

const content = [
  {
    title: "Game Dev & Desktop",
    icon: <SiUnity />,
    text: "Minha paixão por código começou aqui. Com C# e Unity, desenvolvo experiências interativas e jogos 2D/3D. Também tenho base em Java, o que consolidou um alicerce forte em Orientação a Objetos.",
    technologies: [
      { name: "C#", icon: <TbBrandCSharp /> },
      { name: "Unity", icon: <SiUnity /> },
      { name: "Java (Iniciante)", icon: <FaJava /> },
    ],
  },
  {
    title: "Front-end Moderno",
    icon: <SiReact />,
    text: "Construo interfaces rápidas, responsivas e acessíveis. Do HTML semântico à complexidade de aplicações SPA com Next.js 16, meu foco é performance e experiência do usuário (UX).",
    technologies: [
      { name: "React.js", icon: <SiReact /> },
      { name: "Next.js 16", icon: <SiNextdotjs /> },
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
    text: "Levo suas ideias para o bolso do usuário. Com React Native e Expo, crio aplicativos para Android e iOS publicados nas lojas — vários deles já no ar na Google Play.",
    technologies: [
      { name: "React Native", icon: <SiReact /> },
      { name: "Expo", icon: <SiExpo /> },
      { name: "Android Deploy", icon: <SiAndroid /> },
    ],
  },
  {
    title: "Back-end & API",
    icon: <FaServer />,
    text: "O motor que faz tudo funcionar. Desenvolvo APIs RESTful robustas e escaláveis, integrando meios de pagamento e cuidando da segurança dos dados.",
    technologies: [
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "API REST", icon: <FaServer /> },
    ],
  },
  {
    title: "Banco de Dados",
    icon: <FaDatabase />,
    text: "Dados são o novo petróleo. Uso soluções modernas como PostgreSQL e Neon DB (Postgres serverless) para garantir alta disponibilidade e integridade da informação.",
    technologies: [
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Neon DB", icon: <FaDatabase /> },
    ],
  },
  {
    title: "Ferramentas & DevOps",
    icon: <FaTools />,
    text: "Um bom artesão precisa de boas ferramentas. Trabalho com versionamento em Git, deploys automatizados na Vercel e prototipagem de alta fidelidade no Figma.",
    technologies: [
      { name: "Git", icon: <SiGit /> },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "Vercel", icon: <SiVercel /> },
      { name: "Docker", icon: <SiDocker /> },
      { name: "Figma", icon: <SiFigma /> },
    ],
  },
];

const heroIcons = [
  <SiReact key="react" />,
  <SiNextdotjs key="next" />,
  <SiTypescript key="ts" />,
  <SiNodedotjs key="node" />,
  <SiUnity key="unity" />,
  <SiPostgresql key="pg" />,
];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function StackPage() {
  const reduce = useReducedMotion();

  return (
    <div className={styles.pageWrapper}>
      <Header />

      <main>
        {/* HERO */}
        <section className={styles.heroSection}>
          <div className={styles.heroGrid} aria-hidden="true" />
          <div className={styles.heroContent}>
            <motion.div
              className={styles.textColumn}
              variants={reveal}
              initial="hidden"
              animate="show"
            >
              <span className={styles.eyebrow}>Stack & Tecnologias</span>
              <h1 className={styles.headline}>As ferramentas que eu domino</h1>
              <div className={styles.introText}>
                <p>
                  A tecnologia muda rápido, e eu acompanho. Minha caixa de
                  ferramentas reúne stacks modernas e consolidadas no mercado,
                  para entregar desde um{" "}
                  <span className={styles.highlight}>MVP rápido</span> até uma{" "}
                  <span className={styles.highlight}>
                    aplicação corporativa complexa
                  </span>
                  .
                </p>
                <p>
                  Mas ferramenta é só o meio. O que importa é como combiná-las
                  para resolver problemas reais de negócio com eficiência,
                  escalabilidade e manutenção fácil no futuro.
                </p>
              </div>

              <div className={styles.heroActions}>
                <Link href="/portfolio" className={styles.ctaButton}>
                  Ver projetos <PiArrowUpRightBold />
                </Link>
                <Link href="/contato" className={styles.ctaGhost}>
                  Falar comigo
                </Link>
              </div>
            </motion.div>

            <motion.div
              className={styles.iconCluster}
              initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.92 }}
              animate={reduce ? { opacity: 1 } : { opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              aria-hidden="true"
            >
              {heroIcons.map((icon, i) => (
                <span key={i} className={styles.floatingIcon}>
                  {icon}
                </span>
              ))}
            </motion.div>
          </div>
        </section>

        {/* COMPETENCES */}
        <section className={styles.contentList}>
          <div className={styles.container}>
            <div className={styles.sectionHead}>
              <span className={styles.eyebrowDark}>Competências técnicas</span>
              <h2 className={styles.sectionHeading}>
                O que eu uso para construir<span className={styles.dot}>.</span>
              </h2>
              <p className={styles.sectionSub}>
                Do front-end ao banco de dados, tudo em uma pessoa só.
              </p>
            </div>

            <div className={styles.stackGrid}>
              {content.map((item, index) => (
                <motion.article
                  key={index}
                  className={styles.stackCard}
                  variants={reveal}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-60px" }}
                >
                  <span className={styles.cardIcon} aria-hidden="true">
                    {item.icon}
                  </span>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardText}>{item.text}</p>

                  <ul className={styles.chipRow}>
                    {item.technologies.map((tech, techIndex) => (
                      <li key={techIndex} className={styles.chip}>
                        <span className={styles.chipIcon} aria-hidden="true">
                          {tech.icon}
                        </span>
                        {tech.name}
                      </li>
                    ))}
                  </ul>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
