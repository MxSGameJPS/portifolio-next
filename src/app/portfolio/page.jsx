"use client";

import { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./page.module.css";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import Link from "next/link";
import projetosData from "../../components/PortfolioSection/projetos.json";

export default function PortfolioPage() {
  const [filter, setFilter] = useState("TODOS");

  // Get unique tags for filter tabs
  const allTags = [
    "TODOS",
    ...new Set(projetosData.portfolio.map((p) => p.tag)),
  ];

  const filteredProjects =
    filter === "TODOS"
      ? projetosData.portfolio
      : projetosData.portfolio.filter((p) => p.tag === filter);

  return (
    <div className={styles.pageWrapper}>
      <Header />

      <main>
        {/* INTRO SECTION */}
        <section className={styles.introSection}>
          <div className={styles.introContent}>
            <h1 className={styles.introTitle}>MEU PORTFÓLIO</h1>
            <div className={styles.introText}>
              <p>
                Confira abaixo uma seleção dos projetos que desenvolvi. Cada
                linha de código aqui representa um desafio superado e um valor
                de negócio entregue. Utilize os filtros para navegar por área de
                atuação.
              </p>
            </div>
          </div>
        </section>

        {/* CONTENT SECTION */}
        <section className={styles.contentList}>
          <div className={styles.container}>
            <div className={styles.pageTitleWrapper}>
              <h2 className={styles.pageTitle}>PROJETOS RECENTES</h2>
              <p className={styles.pageSubtitle}>
                Web, Mobile, APIs e muito mais
              </p>
            </div>

            {/* Filters */}
            <div className={styles.filterContainer}>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  className={`${styles.filterButton} ${
                    filter === tag ? styles.active : ""
                  }`}
                  onClick={() => setFilter(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>

            {/* Grid */}
            <div className={styles.projectsGrid}>
              {filteredProjects.map((project) => (
                <Link
                  key={project.id}
                  href={`/portfolio/${project.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <ProjectCard
                    imageSrc={
                      project.image && project.image !== ""
                        ? project.image
                        : "/Hero.png"
                    }
                    title={project.name}
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
