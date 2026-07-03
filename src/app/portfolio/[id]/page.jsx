"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import Contact from "../../../components/Contact/Contact";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import {
  PiGithubLogoBold,
  PiGlobeBold,
  PiShieldCheckBold,
  PiScalesBold,
  PiRobotBold,
  PiCurrencyDollarBold,
  PiCloudBold,
  PiMagnifyingGlassBold,
  PiVideoCameraBold,
  PiFileTextBold,
  PiGavelBold,
} from "react-icons/pi";
import projetosData from "../../../components/PortfolioSection/projetosData.json";

// Distinct icon per section so cards don't all look the same
const SECTION_ICONS = [
  PiShieldCheckBold,
  PiScalesBold,
  PiRobotBold,
  PiCurrencyDollarBold,
  PiMagnifyingGlassBold,
  PiVideoCameraBold,
  PiFileTextBold,
  PiCloudBold,
  PiGavelBold,
];

// Split "Label: Value" tech strings into parts (falls back gracefully)
function splitTech(tech) {
  const i = tech.indexOf(":");
  if (i === -1) return { label: null, value: tech };
  return { label: tech.slice(0, i).trim(), value: tech.slice(i + 1).trim() };
}

export default function ProjectDetailsPage() {
  const params = useParams();
  const projectId = params.id;

  const project = projetosData.portfolio.find(
    (p) => p.id.toString() === projectId,
  );

  if (!project) {
    return (
      <div className={styles.notFound}>
        <h1>Projeto não encontrado :(</h1>
        <Link href="/portfolio" className={styles.notFoundLink}>
          Voltar ao portfólio
        </Link>
      </div>
    );
  }

  const reveal = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <div className={styles.pageWrapper}>
      {/* Ambient background */}
      <div className={styles.fixedBackground}>
        {project.image && (
          <Image
            src={project.image}
            alt=""
            fill
            className={styles.backgroundImage}
            priority
          />
        )}
        <div className={styles.overlay}></div>
      </div>

      <Header />

      <main className={styles.container}>
        {/* HERO */}
        <section className={styles.projectHero}>
          <div className={styles.heroImageWrapper}>
            <Image
              src={project.image || "/Hero.png"}
              alt={project.name}
              fill
              className={styles.heroImage}
              sizes="(max-width: 900px) 100vw, 50vw"
              priority
            />
          </div>

          <div className={styles.heroContent}>
            <div className={styles.tagsWrapper}>
              <span className={styles.tagPrimary}>{project.tag}</span>
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
                  className={styles.projectLinkPrimary}
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

        {/* FEATURE CARDS */}
        {project.sections && project.sections.length > 0 && (
          <section className={styles.detailsSection}>
            <div className={styles.sectionHead}>
              <span className={styles.eyebrow}>Destaques técnicos</span>
              <h2 className={styles.sectionHeading}>
                Como foi construído<span className={styles.dot}>.</span>
              </h2>
            </div>

            <div className={styles.featureGrid}>
              {project.sections.map((section, index) => {
                const Icon = SECTION_ICONS[index % SECTION_ICONS.length];
                return (
                  <motion.article
                    key={index}
                    className={styles.featureCard}
                    variants={reveal}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-60px" }}
                  >
                    <span className={styles.featureIcon} aria-hidden="true">
                      <Icon size={24} />
                    </span>
                    <h3 className={styles.featureTitle}>{section.title}</h3>
                    <p className={styles.featureText}>{section.content}</p>
                  </motion.article>
                );
              })}
            </div>
          </section>
        )}

        {/* TECH STACK */}
        {project.tech_stack && project.tech_stack.length > 0 && (
          <section className={styles.stackSection}>
            <div className={styles.sectionHead}>
              <span className={styles.eyebrow}>Stack</span>
              <h2 className={styles.sectionHeading}>
                Tecnologias utilizadas<span className={styles.dot}>.</span>
              </h2>
            </div>

            <div className={styles.stackGrid}>
              {project.tech_stack.map((tech, idx) => {
                const { label, value } = splitTech(tech);
                return (
                  <div key={idx} className={styles.stackItem}>
                    {label && <span className={styles.stackLabel}>{label}</span>}
                    <span className={styles.stackValue}>{value}</span>
                  </div>
                );
              })}
            </div>
          </section>
        )}
      </main>

      <div className={styles.contactWrapper}>
        <Contact />
      </div>

      <Footer />
    </div>
  );
}
