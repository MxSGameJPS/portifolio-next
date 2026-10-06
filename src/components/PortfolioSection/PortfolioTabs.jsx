"use client";

import { useState } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import styles from "./portfolioSection.module.css";
import Link from "next/link";

const TABS = [
  { key: "web", label: "Web & SaaS", tag: "Web" },
  { key: "backend", label: "APIs & Backend", tag: "API - BackEnd" },
  { key: "mobile", label: "Mobile", tag: "Mobile" },
];

export default function PortfolioTabs({ projectsByTab }) {
  const [activeTab, setActiveTab] = useState("web");

  const displayedProjects = projectsByTab[activeTab];

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
              <Link prefetch={false} href={`/portfolio/${project.id}`} className={styles.cardLink}>
                <ProjectCard
                  title={project.name}
                  altText={project.name}
                  category={project.category}
                  description={featured ? project.description : undefined}
                  tech={project.tech}
                  featured={featured}
                  imageSrc={project.image || null}
                />
              </Link>
            </div>
          );
        })}
      </div>

      <Link prefetch={false} href="/portfolio" className={styles.ctaButton}>
        Ver todos os projetos <span aria-hidden="true">→</span>
      </Link>
    </section>
  );
}
