"use client";

import { useState } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import styles from "./portfolioSection.module.css";
import Link from "next/link";
import data from "./projetosData.json";

const TABS = [
  { key: "web", label: "Web & SaaS", tag: "Web" },
  { key: "backend", label: "APIs & Backend", tag: "API - BackEnd" },
  { key: "mobile", label: "Mobile", tag: "Mobile" },
];

const PRIMARY = new Set(["Rota Viva App"]);

const FLAGSHIP = new Set([
  "SocialJurídico",
  "Rota Viva",
  "Rota Viva App",
  "API Social Jurídico",
  "Vida Leve",
]);

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
  const found = TECH_KEYWORDS.filter((keyword) => joined.includes(keyword));
  const cleaned = found.includes("React Native")
    ? found.filter((keyword) => keyword !== "React")
    : found;
  return cleaned.slice(0, 4);
}

function getProjects(tag) {
  const list = data.portfolio.filter(
    (project) =>
      project.importance === "1" &&
      (project.tag === tag ||
        (tag === "API - BackEnd" && project.tag === "Api - BackEnd")),
  );

  const rank = (project) =>
    (PRIMARY.has(project.name) ? 2 : 0) +
    (FLAGSHIP.has(project.name) ? 1 : 0);

  return [...list].sort((a, b) => rank(b) - rank(a));
}

export default function PortfolioSection() {
  const [activeTab, setActiveTab] = useState("web");

  const activeMeta = TABS.find((tab) => tab.key === activeTab);
  const displayedProjects = getProjects(activeMeta.tag);

  return (
    <section className={styles.section} id="portfolio">
      <div className={styles.headingWrap}>
        <span className={styles.eyebrow}>Projetos selecionados</span>
        <h2 className={styles.title}>
          Software que saiu do código e virou produto.
        </h2>
        <p className={styles.description}>
          SaaS, sistemas, aplicativos e APIs desenvolvidos para resolver
          problemas reais de negócio — da ideia à produção.
        </p>
      </div>

      <div className={styles.tabs} role="tablist" aria-label="Categorias de projetos">
        {TABS.map((tab) => {
          const active = activeTab === tab.key;

          return (
            <button
              key={tab.key}
              type="button"
              className={`${styles.tabButton} ${active ? styles.activeTab : ""}`}
              onClick={() => setActiveTab(tab.key)}
              role="tab"
              aria-selected={active}
              aria-controls="portfolio-projects-panel"
              id={`${tab.key}-tab`}
            >
              {tab.label}
              {active && <span className={styles.tabUnderline} aria-hidden="true" />}
            </button>
          );
        })}
      </div>

      <div
        key={activeTab}
        className={styles.grid}
        role="tabpanel"
        id="portfolio-projects-panel"
        aria-labelledby={`${activeTab}-tab`}
      >
        {displayedProjects.map((project, index) => {
          const featured = index === 0;

          return (
            <div
              key={project.id || index}
              className={featured ? styles.featuredItem : undefined}
            >
              <Link href={`/portfolio/${project.id}`} className={styles.cardLink}>
                <ProjectCard
                  title={project.name}
                  altText={project.name}
                  category={project.category}
                  description={featured ? project.description : undefined}
                  tech={pickTech(project.tech_stack)}
                  featured={featured}
                  imageSrc={project.image || null}
                />
              </Link>
            </div>
          );
        })}
      </div>

      <Link href="/portfolio" className={styles.ctaButton}>
        Ver todos os projetos <span aria-hidden="true">→</span>
      </Link>
    </section>
  );
}
