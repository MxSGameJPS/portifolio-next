"use client";

import { useParams } from "next/navigation";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import Contact from "../../../components/Contact/Contact";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import {
  PiGithubLogoBold,
  PiGlobeBold,
  PiDevicesBold,
  PiStarBold,
  PiRocketLaunchBold,
} from "react-icons/pi";
import projetosData from "../../../components/PortfolioSection/projetos.json";

export default function ProjectDetailsPage() {
  const params = useParams();
  const projectId = params.id; // Get ID from URL

  // Find project
  const project = projetosData.portfolio.find(
    (p) => p.id.toString() === projectId
  );

  if (!project) {
    return (
      <div
        className={styles.pageWrapper}
        style={{
          backgroundColor: "#000",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1 style={{ color: "white" }}>Projeto não encontrado :(</h1>
        <Link
          href="/portfolio"
          style={{ color: "var(--tech-blue)", marginLeft: "1rem" }}
        >
          Voltar
        </Link>
      </div>
    );
  }

  // Icons for features logic (optional mapping if we want specific icons per section title)
  const getSectionIcon = (index) => {
    if (index === 0) return <PiDevicesBold size={40} color="#00a8e8" />;
    if (index === 1) return <PiStarBold size={40} color="#00a8e8" />;
    return <PiRocketLaunchBold size={40} color="#00a8e8" />;
  };

  return (
    <div className={styles.pageWrapper}>
      {/* Dynamic Fixed Background */}
      <div className={styles.fixedBackground}>
        {project.image && (
          <Image
            src={project.image}
            alt="Background"
            fill
            className={styles.backgroundImage}
            priority
          />
        )}
        <div className={styles.overlay}></div>
      </div>

      <Header />

      <main className={styles.container}>
        {/* HERO SECTION */}
        <section className={styles.projectHero}>
          {/* Left: Image Card */}
          <div className={styles.heroImageWrapper}>
            <Image
              src={project.image || "/Hero.png"}
              alt={project.name}
              fill
              style={{ objectFit: "contain", backgroundColor: "#fff" }}
            />
          </div>

          {/* Right: Intro Info */}
          <div className={styles.heroContent}>
            <div className={styles.tagsWrapper}>
              <span
                className={styles.tag}
                style={{ background: "#fff", color: "#000" }}
              >
                {project.tag}
              </span>
              <span className={styles.tag}>{project.category}</span>
            </div>

            <h1 className={styles.projectTitle}>{project.name}</h1>

            <p className={styles.description}>{project.description}</p>

            <div className={styles.linksWrapper}>
              {project.deploy_link && (
                <a
                  href={project.deploy_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                >
                  <PiGlobeBold /> Acessar Online
                </a>
              )}
              {project.repo_link && (
                <a
                  href={project.repo_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                >
                  <PiGithubLogoBold /> Ver Código
                </a>
              )}
            </div>
          </div>
        </section>

        {/* DETAILS SECTIONS (Zig Zag) */}
        <section className={styles.detailsSection}>
          {project.sections &&
            project.sections.map((section, index) => (
              <div key={index} className={styles.detailBlock}>
                <div className={styles.textColumn}>
                  <h2 className={styles.detailTitle}>{section.title}</h2>
                  <p className={styles.detailText}>{section.content}</p>
                </div>

                <div className={styles.visualColumn}>
                  {/* Visual Placeholder or Icon depending on content */}
                  <div className={styles.visualWrapper}>
                    {getSectionIcon(index)}
                    {/* If we had specific screenshots for each section, we would render them here. 
                        For now, using icons and glassmorphism card as placeholder */}
                  </div>
                </div>
              </div>
            ))}
        </section>

        {/* TECH STACK */}
        <section className={styles.stackSection}>
          <h2 className={styles.stackTitle}>TECNOLOGIAS UTILIZADAS</h2>
          <div className={styles.stackGrid}>
            {project.tech_stack &&
              project.tech_stack.map((tech, idx) => (
                <div key={idx} className={styles.stackItem}>
                  {tech}
                </div>
              ))}
          </div>
        </section>
      </main>

      {/* CONTACT (White Background Wrapper) */}
      <div className={styles.contactWrapper}>
        <Contact />
      </div>

      <Footer />
    </div>
  );
}
