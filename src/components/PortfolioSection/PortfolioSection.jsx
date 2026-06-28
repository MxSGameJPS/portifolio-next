"use client";
import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";
import ProjectCard from "../ProjectCard/ProjectCard";
import styles from "./portfolioSection.module.css";
import Link from "next/link";
import data from "./projetosData.json";

const TABS = [
  { key: "web", label: "Front-End", tag: "Web" },
  { key: "backend", label: "Back-End", tag: "API - BackEnd" },
  { key: "mobile", label: "Mobile", tag: "Mobile" },
];

// Flagship projects float to the top of their tab so they land in the featured slot
const FLAGSHIP = new Set([
  "SocialJurídico",
  "API Social Jurídico",
  "Vida Leve",
]);

// Short, clean tech chips derived from the verbose tech_stack strings
const TECH_KEYWORDS = [
  "Next.js",
  "React Native",
  "React",
  "Fastify",
  "Supabase",
  "Stripe",
  "OpenAI",
  "Gemini",
  "Zod",
  "PostgreSQL",
  "MongoDB",
  "Node.js",
  "Express",
  "Docker",
  "Tailwind",
  "Firebase",
  "Prisma",
  "TypeScript",
  "Redis",
];

function pickTech(stack = []) {
  const joined = stack.join(" ");
  const found = TECH_KEYWORDS.filter((k) => joined.includes(k));
  // avoid "React" duplicating when the stack is actually React Native
  const cleaned = found.includes("React Native")
    ? found.filter((k) => k !== "React")
    : found;
  return cleaned.slice(0, 4);
}

function getProjects(tag) {
  const list = data.portfolio.filter(
    (p) =>
      p.importance === "1" &&
      (p.tag === tag ||
        (tag === "API - BackEnd" && p.tag === "Api - BackEnd")),
  );
  // flagship first, original order otherwise
  return [...list].sort(
    (a, b) => (FLAGSHIP.has(b.name) ? 1 : 0) - (FLAGSHIP.has(a.name) ? 1 : 0),
  );
}

export default function PortfolioSection() {
  const [activeTab, setActiveTab] = useState("web");
  const reduce = useReducedMotion();

  const activeMeta = TABS.find((t) => t.key === activeTab);
  const displayedProjects = getProjects(activeMeta.tag);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
  };
  const item = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className={styles.section} id="portfolio">
      <h2 className={styles.title}>
        Portfólio Diversificado<span className={styles.titleDot}>.</span>
      </h2>
      <p className={styles.description}>
        De plataformas SaaS com IA a APIs de arquitetura enterprise — cada
        projeto resolve um problema real de negócio, com segurança e
        performance de produção.
      </p>

      <div className={styles.tabs} role="tablist" aria-label="Categorias de projetos">
        {TABS.map((t) => (
          <button
            key={t.key}
            className={`${styles.tabButton} ${
              activeTab === t.key ? styles.activeTab : ""
            }`}
            onClick={() => setActiveTab(t.key)}
            role="tab"
            aria-selected={activeTab === t.key}
            aria-controls={`${t.key}-projects-panel`}
            id={`${t.key}-tab`}
          >
            {t.label}
            {activeTab === t.key && (
              <motion.span
                layoutId="tabUnderline"
                className={styles.tabUnderline}
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          className={styles.grid}
          role="tabpanel"
          id={`${activeTab}-projects-panel`}
          aria-labelledby={`${activeTab}-tab`}
          variants={container}
          initial="hidden"
          animate="show"
        >
          {displayedProjects.map((project, index) => {
            const featured = index === 0;
            return (
              <motion.div
                key={project.id || index}
                variants={item}
                className={featured ? styles.featuredItem : undefined}
              >
                <Link
                  href={`/portfolio/${project.id}`}
                  className={styles.cardLink}
                >
                  <ProjectCard
                    title={project.name}
                    altText={project.name}
                    category={project.category}
                    tech={pickTech(project.tech_stack)}
                    featured={featured}
                    imageSrc={
                      project.image && project.image !== ""
                        ? project.image
                        : "/Hero.png"
                    }
                  />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </AnimatePresence>

      <Link href="/portfolio" className={styles.ctaButton}>
        Veja nosso portfólio completo
      </Link>
    </section>
  );
}
