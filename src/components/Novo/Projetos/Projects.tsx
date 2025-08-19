"use client";

import React, { useState } from "react";
import styles from "./projects.module.css";

const projects = [
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
    id: 3,
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
    id: 8,
    title: "DJ Moisés PS",
    description:
      "Site para um DJ profissional, com galeria de fotos, agenda de eventos e contato.",
    imageSrc: "/projects/dj.png",
    technologies: ["Vite", "React", "CSS Modules"],
    liveUrl: "https://www.djmoisesps.com.br/",
    githubUrl: "https://github.com/MxSGameJPS/dj-moises",
    category: "web",
  },
  {
    id: 9,
    title: "Confraria Chopp & Grill",
    description:
      "Redesign moderno para um restaurante tradicional, com menu interativo e informações de contato.",
    imageSrc: "/projects/confraria.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://confraria-chop-grill.vercel.app/",
    githubUrl: "https://github.com/MxSGameJPS/confraria",
    category: "web",
  },
  {
    id: 10,
    title: "Canal do TF",
    description:
      "Portal de notícias e vídeos relacionados ao Botafogo, com áreas públicas e administrativas.",
    imageSrc: "/projects/canal.png",
    technologies: ["React", "React Router", "Styled Components", "Axios"],
    liveUrl: "https://canal-do-tf.vercel.app/",
    githubUrl: "https://github.com/MxSGameJPS/canal-tf",
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
  const [groupIndex, setGroupIndex] = useState(0);
  const projectsPerPage = 4;
  const totalGroups = Math.ceil(projects.length / projectsPerPage);

  const handlePrev = () => {
    setGroupIndex((prev) => (prev === 0 ? totalGroups - 1 : prev - 1));
  };

  const handleNext = () => {
    setGroupIndex((prev) => (prev === totalGroups - 1 ? 0 : prev + 1));
  };

  const startIdx = groupIndex * projectsPerPage;
  const currentProjects = projects.slice(startIdx, startIdx + projectsPerPage);

  return (
    <section className={styles.projectsSection} id="projetos">
      <h2 className={styles.title}>Projetos</h2>
      <div className={styles.storiesContainer}>
        <button className={styles.arrow} onClick={handlePrev}>
          &lt;
        </button>
        <div className={styles.storiesGroup}>
          {currentProjects.map((project) => (
            <div key={project.id} className={styles.storyCard}>
              <img
                src={project.imageSrc}
                alt={project.title}
                className={styles.storyImage}
              />
              <div className={styles.storyContent}>
                <h3 className={styles.storyTitle}>{project.title}</h3>
                <p className={styles.storyDescription}>{project.description}</p>
                <div className={styles.techList}>
                  {project.technologies.map((tech) => (
                    <span key={tech} className={styles.techItem}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className={styles.links}>
                  {project.liveUrl && project.liveUrl.startsWith("http") && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.linkButton}
                    >
                      Ver Projeto
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.linkButton}
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className={styles.arrow} onClick={handleNext}>
          &gt;
        </button>
      </div>
      <div className={styles.storiesIndicators}>
        {Array.from({ length: totalGroups }).map((_, idx) => (
          <span
            key={idx}
            className={
              idx === groupIndex ? styles.activeIndicator : styles.indicator
            }
            onClick={() => setGroupIndex(idx)}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
