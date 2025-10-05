"use client";

import React, { useState } from "react";
import styles from "./projects.module.css";

const projects = [
  {
    id: 3,
    title: "NextPath",
    description:
      "Desenvolvi esta plataforma para ajudar a comunidade iniciante a aprender NEXT.JS de forma divertida e eficaz",
    imageSrc: "/projects/nextpath.png",
    technologies: ["Next.js", "React", "Node.js", "PostgreSQL"],
    liveUrl: "https://nextpath-eight.vercel.app/",
    githubUrl: "https://github.com/MxSGameJPS/nextpath.git",
    category: "web",
  },
  {
    id: 1,
    title: "Ai To Love",
    description:
      "AI to Love é uma plataforma inovadora de relacionamento virtual que oferece companheiros personalizados alimentados por inteligência artificial.",
    imageSrc: "/projects/aitolove.png",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "TypeScript",
      "API Rest",
    ],
    liveUrl: "https://www.aitolove.app",
    githubUrl: "https://github.com/MxSGameJPS/ai2love.git",
    category: "web",
  },
  {
    id: 8,
    title: "FreeControl",
    description:
      "Plataforma desenvolvida para auxiliar e apoiar desenvolvedores na organização e conclusão de estudos e projetos",
    imageSrc: "/projects/freecontrol.png",
    technologies: ["Next", "React", "PostgreSQL", "JWT - Auth"],
    liveUrl: "https://freela-control.vercel.app/",
    githubUrl: "https://github.com/MxSGameJPS/freela-control.git",
    category: "web",
  },
  {
    id: 2,
    title: "Rafael Richard Psicólogo",
    description:
      "Site profissional para psicólogo, com agendamento de consultas e informações sobre serviços.",
    imageSrc: "/projects/rafael.png",
    technologies: ["React", "Styled-Components", "Formspree", "React Icons"],
    liveUrl: "https://www.rafaelrichardpsico.com/",
    githubUrl: "https://github.com/MxSGameJPS/rafael-psicologo.git",
    category: "web",
  },
  {
    id: 10,
    title: "MaisDireito Advogados",
    description:
      "Site institucional para escritório de advocacia com layout moderno e responsivo.",
    imageSrc: "/projects/advogados.png",
    technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://sistema-advogados.vercel.app",
    githubUrl: "https://github.com/MxSGameJPS/sistema-advogados",
    category: "web",
  },
  {
    id: 4,
    title: "MXSFLIX",
    description:
      "Clone da Netflix com integração à API do TheMovieDB, listando filmes por categorias.",
    imageSrc: "/projects/mxsflix.png",
    technologies: ["Next.js", "React", "CSS Modules", "API Integration"],
    liveUrl: "https://mxsflix.vercel.app",
    githubUrl: "https://github.com/MxSGameJPS/mxsflix",
    category: "web",
  },
  {
    id: 5,
    title: "Barbearia Pavanello",
    description:
      "Site completo para barbearia com agendamento de serviços, venda de produtos e área administrativa.",
    imageSrc: "/projects/barbearia.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Cookies"],
    liveUrl: "https://barbearia-three-teal.vercel.app/",
    githubUrl: "https://github.com/MxSGameJPS/barbearia",
    category: "web",
  },
  {
    id: 6,
    title: "Academia Fitness",
    description:
      "Aplicação web para gerenciamento de academia com área para administradores e alunos.",
    imageSrc: "/projects/academia.png",
    technologies: [
      "React",
      "JavaScript",
      "Styled Components",
      "Zustand",
      "Chart.js",
    ],
    liveUrl: "https://academia-fitness.vercel.app",
    githubUrl: "https://github.com/MxSGameJPS/academia-fitness",
    category: "web",
  },
  {
    id: 7,
    title: "Receitas do Meu Brasil",
    description:
      "Site que celebra a culinária brasileira com receitas típicas de cada região.",
    imageSrc: "/projects/receitas.png",
    technologies: ["React", "Styled Components", "React Router", "React Icons"],
    liveUrl: "https://receitasdomeubrasil.vercel.app/",
    githubUrl: "https://github.com/MxSGameJPS/receitas-brasil",
    category: "web",
  },
  {
    id: 11,
    title: "Fokus APP",
    description:
      "App Android para gerenciamento de tarefas, com funcionalidades de criação, edição e exclusão, estilo Pomodoro.",
    imageSrc: "/projects/fokus-app.png",
    technologies: ["React Native", "Expo", "Expo Router"],
    liveUrl: "/projects/fokusapp.mp4",
    githubUrl: "https://github.com/MxSGameJPS/fokus-app",
    category: "mobile",
  },
  {
    id: 12,
    title: "Vida Leve",
    description:
      "Um aplicativo React Native com Expo para ajudá-lo a manter uma rotina saudável, funcionando 100% offline.",
    imageSrc: "/projects/vidaleve/Group1.png",
    images: [
      "/projects/vidaleve/Group1.png",
      "/projects/vidaleve/Group2.png",
      "/projects/vidaleve/Group3.png",
      "/projects/vidaleve/Group4.png",
      "/projects/vidaleve/Group5.png",
      "/projects/vidaleve/Group6.png",
      "/projects/vidaleve/Group7.png",
      "/projects/vidaleve/Group8.png",
    ],
    technologies: ["React Native", "Expo", "Expo Router"],
    liveUrl: "",
    githubUrl: "https://github.com/MxSGameJPS/vida-leve",
    category: "mobile",
  },
];

const Projects: React.FC = () => {
  // novo layout: 3 projetos em destaque full-width + grid com até 8 projetos em 4 colunas
  const featuredProjects = projects.slice(0, 3);
  const otherProjects = projects.slice(3, 11); // pegamos até 8 projetos para 2 linhas de 4

  return (
    <section className={styles.projectsSection} id="projetos">
      <h2 className={styles.title}>Projetos</h2>

      <div className={styles.featuredGroup}>
        {featuredProjects.map((project) => (
          <article key={project.id} className={styles.featuredFull}>
            <img
              src={project.imageSrc}
              alt={project.title}
              className={styles.featuredImage}
            />
            <div className={styles.featuredContent}>
              {project.category === "mobile" && (
                <span className={styles.mobileTag}>MOBILE</span>
              )}
              <h3 className={styles.featuredTitle}>{project.title}</h3>
              <p className={styles.featuredDescription}>
                {project.description}
              </p>
              <div className={styles.projectTags}>
                {project.technologies?.slice(0, 4).map((t) => (
                  <span key={t} className={styles.tag}>
                    {t}
                  </span>
                ))}
              </div>
              <div className={styles.projectFooter}>
                {project.liveUrl && project.liveUrl.startsWith("http") && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.ctaButton}
                  >
                    Live
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.ctaOutline}
                  >
                    Code
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className={styles.gridFour}>
        {otherProjects.map((project) => (
          <div key={project.id} className={styles.smallCard}>
            <img
              src={project.imageSrc}
              alt={project.title}
              className={styles.smallImage}
            />
            <div className={styles.smallContent}>
              {project.category === "mobile" && (
                <span className={styles.mobileTag}>MOBILE</span>
              )}
              <h4 className={styles.smallTitle}>{project.title}</h4>
              <p className={styles.smallDesc}>{project.description}</p>
              <div className={styles.projectTags}>
                {project.technologies?.slice(0, 4).map((t) => (
                  <span key={t} className={styles.tag}>
                    {t}
                  </span>
                ))}
              </div>
              <div className={styles.smallLinks}>
                {project.liveUrl && project.liveUrl.startsWith("http") && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.smallLink}
                  >
                    Ver
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.smallLink}
                  >
                    Código
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
