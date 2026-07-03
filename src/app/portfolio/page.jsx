"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Link from "next/link";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./page.module.css";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { PiArrowUpRightBold } from "react-icons/pi";
import projetosData from "../../components/PortfolioSection/projetosData.json";

// Short, clean tech chips derived from the verbose tech_stack strings
const TECH_KEYWORDS = [
  "Next.js",
  "React Native",
  "React",
  "Fastify",
  "GSAP",
  "Supabase",
  "Stripe",
  "OpenAI",
  "Gemini",
  "PostgreSQL",
  "MongoDB",
  "Node.js",
  "Express",
  "Firebase",
  "TypeScript",
  "Expo",
];

function pickTech(stack = []) {
  const joined = stack.join(" ");
  const found = TECH_KEYWORDS.filter((k) => joined.includes(k));
  const cleaned = found.includes("React Native")
    ? found.filter((k) => k !== "React")
    : found;
  return cleaned.slice(0, 3);
}

const TAG_LABELS = {
  TODOS: "Todos",
  Web: "Web",
  Mobile: "Mobile",
  "API - BackEnd": "APIs & Back-end",
};

export default function PortfolioPage() {
  const [filter, setFilter] = useState("TODOS");
  const reduce = useReducedMotion();

  const allTags = ["TODOS", ...new Set(projetosData.portfolio.map((p) => p.tag))];

  const filteredProjects =
    filter === "TODOS"
      ? projetosData.portfolio
      : projetosData.portfolio.filter((p) => p.tag === filter);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.05 } },
  };
  const item = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <div className={styles.pageWrapper}>
      <Header />

      <main>
        {/* HERO */}
        <section className={styles.heroSection}>
          <div className={styles.heroGrid} aria-hidden="true" />
          <motion.div
            className={styles.heroContent}
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className={styles.eyebrow}>Portfólio</span>
            <h1 className={styles.headline}>
              Projetos que resolvem problemas reais
            </h1>
            <p className={styles.introText}>
              Uma seleção do que já construí — muitos já no ar. Cada projeto aqui
              é um desafio de negócio resolvido, do design ao banco de dados. Use
              os filtros para navegar por área.
            </p>

            <ul className={styles.trustRow}>
              <li className={styles.trustItem}>
                <span className={styles.trustValue}>
                  {projetosData.portfolio.length}
                </span>
                <span className={styles.trustLabel}>projetos entregues</span>
              </li>
              <li className={styles.trustItem}>
                <span className={styles.trustValue}>Web · Mobile · APIs</span>
                <span className={styles.trustLabel}>áreas de atuação</span>
              </li>
              <li className={styles.trustItem}>
                <span className={styles.trustValue}>2+ anos</span>
                <span className={styles.trustLabel}>de experiência</span>
              </li>
            </ul>
          </motion.div>
        </section>

        {/* PROJECTS */}
        <section className={styles.contentList}>
          <div className={styles.container}>
            <div className={styles.sectionHead}>
              <span className={styles.eyebrowDark}>Projetos recentes</span>
              <h2 className={styles.sectionHeading}>
                Explore os trabalhos<span className={styles.dot}>.</span>
              </h2>
            </div>

            {/* Filters */}
            <div className={styles.filterContainer} role="tablist" aria-label="Filtrar projetos">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  className={`${styles.filterButton} ${filter === tag ? styles.active : ""}`}
                  onClick={() => setFilter(tag)}
                  role="tab"
                  aria-selected={filter === tag}
                >
                  {filter === tag && (
                    <motion.span
                      layoutId="filterPill"
                      className={styles.filterPill}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className={styles.filterLabel}>
                    {TAG_LABELS[tag] || tag}
                  </span>
                </button>
              ))}
            </div>

            {/* Grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={filter}
                className={styles.projectsGrid}
                variants={container}
                initial="hidden"
                animate="show"
              >
                {filteredProjects.map((project) => (
                  <motion.div key={project.id} variants={item}>
                    <Link
                      href={`/portfolio/${project.id}`}
                      className={styles.cardLink}
                    >
                      <ProjectCard
                        imageSrc={
                          project.image && project.image !== ""
                            ? project.image
                            : "/Hero.png"
                        }
                        title={project.name}
                        altText={project.name}
                        category={project.category}
                        tech={pickTech(project.tech_stack)}
                      />
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* CTA BAND */}
        <section className={styles.ctaBand}>
          <div className={styles.ctaBandInner}>
            <h2 className={styles.ctaBandTitle}>
              O próximo projeto pode ser o seu
            </h2>
            <p className={styles.ctaBandText}>
              Me conte a sua ideia. A primeira conversa é gratuita e sem
              compromisso.
            </p>
            <Link href="/contato" className={styles.ctaButton}>
              Falar comigo <PiArrowUpRightBold />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
