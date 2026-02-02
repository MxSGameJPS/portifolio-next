"use client";
import { useState } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import styles from "./portfolioSection.module.css";
import Link from "next/link";
import data from "./projetos.json";

export default function PortfolioSection() {
  const [activeTab, setActiveTab] = useState("web"); // 'web', 'backend', 'mobile'

  const projectsWeb = data.portfolio.filter(
    (p) => p.importance === "1" && p.tag === "Web"
  );

  const projectsBackend = data.portfolio.filter(
    (p) =>
      p.importance === "1" &&
      (p.tag === "Api - BackEnd" || p.tag === "API - BackEnd")
  );

  const projectsMobile = data.portfolio.filter(
    (p) => p.importance === "1" && p.tag === "Mobile"
  );

  let displayedProjects = [];
  if (activeTab === "web") displayedProjects = projectsWeb;
  if (activeTab === "backend") displayedProjects = projectsBackend;
  if (activeTab === "mobile") displayedProjects = projectsMobile;

  return (
    <section className={styles.section} id="portfolio">
      <h2 className={styles.title}>
        Portfólio Diversificado<span className={styles.titleDot}>.</span>
      </h2>
      <p className={styles.description}>
        Destaque pela qualidade e criatividade presentes em cada projeto.
        Atendemos clientes variados, demonstrando nossa vasta compreensão do
        mercado e experiência abrangente.
      </p>

      <div className={styles.tabs}>
        <button
          className={`${styles.tabButton} ${
            activeTab === "web" ? styles.activeTab : ""
          }`}
          onClick={() => setActiveTab("web")}
        >
          Projetos de Front-End
        </button>
        <button
          className={`${styles.tabButton} ${
            activeTab === "backend" ? styles.activeTab : ""
          }`}
          onClick={() => setActiveTab("backend")}
        >
          Projetos de Back-End
        </button>
        <button
          className={`${styles.tabButton} ${
            activeTab === "mobile" ? styles.activeTab : ""
          }`}
          onClick={() => setActiveTab("mobile")}
        >
          Projetos Mobile (App)
        </button>
      </div>

      <div className={styles.grid}>
        {displayedProjects.map((project, index) => (
          <Link
            href={`/portfolio/${project.id}`}
            key={project.id || index}
            style={{ textDecoration: "none" }}
          >
            <ProjectCard
              title={project.name}
              altText={project.name}
              imageSrc={
                project.image && project.image !== ""
                  ? project.image
                  : "/Hero.png"
              }
            />
          </Link>
        ))}
      </div>

      <Link href="/portfolio" className={styles.ctaButton}>
        Veja nosso portfólio completo
      </Link>
    </section>
  );
}
