"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { PiArrowUpRightBold } from "react-icons/pi";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import projetosData from "../../components/PortfolioSection/projetosData.json";
import styles from "./page.module.css";
import fixStyles from "./portfolio-fixes.module.css";

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

const FILTERS = ["Todos", "SaaS", "Web", "Mobile", "APIs"];

function pickTech(stack = [], limit = 3) {
  const joined = stack.join(" ");
  const found = TECH_KEYWORDS.filter((keyword) => joined.includes(keyword));
  const cleaned = found.includes("React Native")
    ? found.filter((keyword) => keyword !== "React")
    : found;
  return cleaned.slice(0, limit);
}

function getProjectGroup(project) {
  if (project.tag === "Mobile") return "Mobile";
  if (project.tag === "API - BackEnd") return "APIs";
  if ((project.category || "").toLowerCase().includes("saas")) return "SaaS";
  return "Web";
}

function getProjectName(project) {
  if (project.name === "SocialJurídico") return "Social Jurídico";
  return project.name;
}

export default function PortfolioPage() {
  const [filter, setFilter] = useState("Todos");
  const reduceMotion = useReducedMotion();

  const projects = projetosData.portfolio;
  const featured =
    projects.find((project) =>
      project.name.toLowerCase().replaceAll(" ", "").includes("socialjurídico")
    ) || projects[0];
  const featuredName = getProjectName(featured);

  const filteredProjects = projects
    .filter((project) => project.id !== featured.id)
    .filter((project) => filter === "Todos" || getProjectGroup(project) === filter);

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.045 } },
  };

  const itemVariants = {
    hidden: reduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <div className={styles.pageWrapper}>
      <Header />

      <main>
        <section className={styles.heroSection}>
          <div className={styles.heroTexture} aria-hidden="true" />
          <motion.div
            className={styles.heroContent}
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className={styles.eyebrow}>CASES & PRODUTOS</p>
            <h1 className={styles.headline}>
              Software construído para sair do briefing e entrar em operação.
            </h1>
            <p className={styles.introText}>
              Uma seleção de produtos, sistemas, aplicativos e APIs que já passaram
              da ideia para o código — e do código para usuários reais. Cada projeto
              mostra uma combinação diferente de produto, experiência e engenharia.
            </p>

            <div className={styles.heroFacts} aria-label="Resumo do portfólio">
              <div>
                <strong>202</strong>
                <span>sites e sistemas criados</span>
              </div>
              <div>
                <strong>Web · SaaS · Mobile · APIs</strong>
                <span>produtos em diferentes frentes</span>
              </div>
              <div>
                <strong>Arquitetura → deploy</strong>
                <span>visão de ponta a ponta</span>
              </div>
            </div>
          </motion.div>
        </section>

        <section className={styles.featuredSection}>
          <div className={styles.container}>
            <div className={styles.sectionIntroGrid}>
              <p className={styles.eyebrow}>CASE EM DESTAQUE</p>
              <h2 className={styles.sectionTitle}>
                Um produto real diz mais do que uma lista de tecnologias.
              </h2>
            </div>

            <Link
              href={`/portfolio/${featured.id}`}
              className={styles.featuredCase}
              aria-label={`Ver case ${featuredName}`}
            >
              <div className={styles.featuredMedia}>
                {featured.image ? (
                  <Image
                    src={featured.image}
                    alt={featuredName}
                    fill
                    sizes="(max-width: 860px) 100vw, 58vw"
                    className={styles.projectImage}
                    priority
                  />
                ) : (
                  <div className={styles.mediaFallback}>SP</div>
                )}
              </div>

              <div className={`${styles.featuredCopy} ${fixStyles.featuredCopySafe}`}>
                <div>
                  <p className={styles.caseMeta}>{featured.category}</p>
                  <h3 className={fixStyles.featuredTitleSafe}>{featuredName}</h3>
                  <p
                    className={`${styles.caseDescription} ${fixStyles.featuredDescriptionFull}`}
                  >
                    {featured.description}
                  </p>
                </div>

                <div>
                  <div className={styles.techList}>
                    {pickTech(featured.tech_stack, 5).map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                  <span className={styles.caseLink}>
                    Ver case completo <PiArrowUpRightBold aria-hidden="true" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>

        <section className={styles.librarySection}>
          <div className={styles.container}>
            <div className={styles.libraryHeader}>
              <div>
                <p className={styles.eyebrow}>BIBLIOTECA DE PROJETOS</p>
                <h2 className={styles.sectionTitle}>Explore por tipo de produto.</h2>
              </div>

              <div
                className={styles.filterContainer}
                role="tablist"
                aria-label="Filtrar projetos"
              >
                {FILTERS.map((label) => (
                  <button
                    key={label}
                    type="button"
                    className={`${styles.filterButton} ${
                      filter === label ? styles.active : ""
                    }`}
                    onClick={() => setFilter(label)}
                    role="tab"
                    aria-selected={filter === label}
                  >
                    {filter === label && (
                      <motion.span
                        layoutId="portfolioFilter"
                        className={styles.filterMarker}
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span>{label}</span>
                  </button>
                ))}
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={filter}
                className={styles.projectsGrid}
                variants={containerVariants}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0 }}
              >
                {filteredProjects.map((project) => {
                  const projectName = getProjectName(project);

                  return (
                    <motion.article
                      key={project.id}
                      variants={itemVariants}
                      className={styles.projectCard}
                    >
                      <Link
                        href={`/portfolio/${project.id}`}
                        className={styles.projectCardLink}
                      >
                        <div className={styles.cardMedia}>
                          {project.image ? (
                            <Image
                              src={project.image}
                              alt={projectName}
                              fill
                              sizes="(max-width: 680px) 100vw, (max-width: 1050px) 50vw, 33vw"
                              className={styles.projectImage}
                            />
                          ) : (
                            <div className={styles.mediaFallback}>
                              {String(project.id).padStart(2, "0")}
                            </div>
                          )}
                          <span className={styles.typeBadge}>{getProjectGroup(project)}</span>
                        </div>

                        <div className={styles.cardBody}>
                          <p className={styles.cardCategory}>{project.category}</p>
                          <h3>{projectName}</h3>
                          <p className={styles.cardDescription}>{project.description}</p>

                          <div className={styles.cardFooter}>
                            <div className={styles.techListCompact}>
                              {pickTech(project.tech_stack).map((tech) => (
                                <span key={tech}>{tech}</span>
                              ))}
                            </div>
                            <PiArrowUpRightBold
                              className={styles.cardArrow}
                              aria-hidden="true"
                            />
                          </div>
                        </div>
                      </Link>
                    </motion.article>
                  );
                })}
              </motion.div>
            </AnimatePresence>

            {filteredProjects.length === 0 && (
              <p className={styles.emptyState}>
                Nenhum projeto desta categoria está publicado aqui ainda.
              </p>
            )}
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaInner}>
            <p className={styles.eyebrowLight}>PRÓXIMO CASE</p>
            <h2>O próximo produto pode começar com uma conversa.</h2>
            <p>
              Se você tem um problema de negócio, uma operação manual demais ou
              uma ideia de produto, eu posso ajudar a transformar o contexto em uma
              solução técnica viável.
            </p>
            <Link href="/contato" className={styles.ctaButton}>
              Falar sobre um projeto <PiArrowUpRightBold aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
