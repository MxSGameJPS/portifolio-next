"use client";

import React from "react";
import styles from "./projects.module.css";

// TIPO DO PROJETO
interface Project {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl: string;
  tags?: string[];
}

// DADOS DOS PROJETOS
const allProjects: Project[] = [
  // --- FullStack ---
  {
    id: 3,
    title: "NextPath",
    tags: ["Destaque"],
    description:
      "Plataforma para aprender NEXT.JS de forma divertida e eficaz, com gamificação e comunidade.",
    imageSrc: "/projects/nextpath.png",
    technologies: ["Next.js", "React", "Node.js", "PostgreSQL"],
    liveUrl: "https://nextpath-eight.vercel.app/",
    githubUrl: "https://github.com/MxSGameJPS/nextpath.git",
  },
  {
    id: 1,
    title: "Ai To Love",
    tags: ["Projeto Contratado"],
    description:
      "Plataforma de relacionamento virtual com companheiros personalizados via inteligência artificial.",
    imageSrc: "/projects/aitolove.png",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "API Rest"],
    liveUrl: "https://www.aitolove.app",
    githubUrl: "https://github.com/MxSGameJPS/ai2love.git",
  },
  {
    id: 20,
    title: "Smile Pet Shop",
    tags: ["Projeto Contratado"],
    description:
      "Loja Virtual para Pet Shop com sistema de gerenciamento de estoque e vendas, gerenciamento de clientes e funcionários, sistema de pagamento e envio de e-mails.",
    imageSrc: "/projects/smilepet.png",
    technologies: ["Next.js", "PostgreSQL", "Node.js", "API Rest", "JWT Auth", "React.js"],
    liveUrl: "https://www.smilepetshop.com.br/",
    githubUrl: "https://github.com/MxSGameJPS/smilepetshop.git",
  },
  {
    id: 8,
    title: "FreeControl",
    tags: ["Projeto Pessoal"],
    description:
      "Ferramenta para auxiliar devs na organização de estudos e controle de projetos freelancer.",
    imageSrc: "/projects/freecontrol.png",
    technologies: ["Next", "React", "PostgreSQL", "JWT - Auth"],
    liveUrl: "https://freela-control.vercel.app/",
    githubUrl: "https://github.com/MxSGameJPS/freela-control.git",
  },
  {
    id: 10,
    title: "MaisDireito Advogados",
    tags: ["Projeto Pessoal"],
    description:
      "Site institucional completo para escritório de advocacia com CMS personalizado.",
    imageSrc: "/projects/advogados.png",
    technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://sistema-advogados.vercel.app",
    githubUrl: "https://github.com/MxSGameJPS/sistema-advogados",
  },
  {
    id: 6,
    title: "Academia Fitness",
    tags: ["Projeto Pessoal"],
    description:
      "Sistema de gerenciamento para academia com dashboard de alunos e controle de treinos.",
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
  },

  // --- Front-End ---
  {
    id: 2,
    title: "Rafael Richard",
    tags: ["Projeto Contratado"],
    description:
      "Landing page profissional para psicólogo com agendamento integrado e blog.",
    imageSrc: "/projects/rafael.png",
    technologies: ["React", "Styled-Components", "Formspree", "React Icons"],
    liveUrl: "https://www.rafaelrichardpsico.com/",
    githubUrl: "https://github.com/MxSGameJPS/rafael-psicologo.git",
  },
  {
    id: 7,
    title: "Receitas do Brasil",
    tags: ["Projeto Pessoal"],
    description:
      "Explore a culinária brasileira com receitas típicas separadas por regiões.",
    imageSrc: "/projects/receitas.png",
    technologies: ["React", "Styled Components", "React Router"],
    liveUrl: "https://receitasdomeubrasil.vercel.app/",
    githubUrl: "https://github.com/MxSGameJPS/receitas-brasil",
  },
  {
    id: 17,
    title: "Lughs Word",
    tags: ["Projeto Contratado"],
    description:
      "Site desenvolvido em React para o lançamento de um novo jogo para Desktop e Mobile.",
    imageSrc: "/projects/lughs.png",
    technologies: ["React", "Styled Components", "React Router", "Parallax"],
    liveUrl: "https://lughs.vercel.app/",
    githubUrl: "https://github.com/MxSGameJPS/lughs",
  },
  {
    id: 18,
    title: "Gleice Torres Massoterapeuta",
    tags: ["Projeto Contratado"],
    description:
      "Site desenvolvido em React para o lançamento de um novo jogo para Desktop e Mobile.",
    imageSrc: "/projects/gleicetorres.png",
    technologies: ["React", "Styled Components", "React Router", "Parallax"],
    liveUrl: "https://gleicetorres.vercel.app/",
    githubUrl: "https://github.com/MxSGameJPS/gleicetorres",
  },

  // --- Mobile ---
  {
    id: 11,
    title: "Fokus APP",
    tags: ["Projeto Acadêmico"],
    description:
      "App de produtividade com técnica Pomodoro para gerenciamento de foco e tarefas.",
    imageSrc: "/projects/fokus-app.png",
    technologies: ["React Native", "Expo", "Expo Router"],
    githubUrl: "https://github.com/MxSGameJPS/fokus-app",
  },
  {
    id: 12,
    title: "Vida Leve",
    tags: ["Projeto Acadêmico"],
    description:
      "Aplicativo auxiliar para rotinas saudáveis, funcionando 100% offline.",
    imageSrc: "/projects/vidaleve/Group1.png",
    technologies: ["React Native", "Expo", "Expo Router"],
    githubUrl: "https://github.com/MxSGameJPS/vida-leve",
  },
];

// Categorizando os projetos e filtrando undefined
const projectsFullStack = [3, 1, 8, 10, 6, 20]
  .map((id) => allProjects.find((p) => p.id === id))
  .filter((p): p is Project => p !== undefined);

const projectsFrontEnd = [2, 7, 17, 18]
  .map((id) => allProjects.find((p) => p.id === id))
  .filter((p): p is Project => p !== undefined);

const projectsMobile = [11, 12]
  .map((id) => allProjects.find((p) => p.id === id))
  .filter((p): p is Project => p !== undefined);

// Componente Cartão Individual
const ProjectCard = ({
  project,
  isMobile = false,
}: {
  project: Project;
  isMobile?: boolean;
}) => {
  return (
    <div className={styles.projectCard}>
      {isMobile && <span className={styles.mobileBadge}>APP</span>}

      {/* Container de Tags (Badges) */}
      {project.tags && project.tags.length > 0 && (
        <div className={styles.badgesContainer}>
          {project.tags.map((tag, index) => (
            <span key={index} className={styles.projectBadge}>
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className={styles.cardImageWrapper}>
        <img
          src={project.imageSrc}
          alt={project.title}
          className={styles.cardImage}
        />
      </div>

      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.cardDescription}>{project.description}</p>

        <div className={styles.techTags}>
          {project.technologies.slice(0, 4).map((tech) => (
            <span key={tech} className={styles.techTag}>
              {tech}
            </span>
          ))}
        </div>

        <div className={styles.cardActions}>
          {project.liveUrl && project.liveUrl.startsWith("http") && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnLive}
            >
              Ver Projeto
            </a>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnCode}
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

// Componente Grid Estático
const ProjectGrid = ({
  items,
  isMobile = false,
}: {
  items: Project[];
  isMobile?: boolean;
}) => {
  return (
    <div className={styles.staticGrid}>
      {items.map((project) => (
        <ProjectCard key={project.id} project={project} isMobile={isMobile} />
      ))}
    </div>
  );
};

// Componente Carrossel
const ProjectCarousel = ({
  items,
  isMobile = false,
}: {
  items: Project[];
  isMobile?: boolean;
}) => {
  // Duplicamos os items para criar o efeito de "loop infinito" perfeito
  const displayItems =
    items.length < 5
      ? [...items, ...items, ...items, ...items]
      : [...items, ...items];

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselTrack}>
        {displayItems.map((project, index) => (
          <ProjectCard
            key={`${project.id}-${index}`}
            project={project}
            isMobile={isMobile}
          />
        ))}
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <section className={styles.projectsSection} id="projetos">
      {/* FULLSTACK SECTION - Mantemos Carrossel pois tem 5 items */}
      <div>
        <h2 className={styles.categoryTitle}>Projetos FullStack</h2>
        <ProjectCarousel items={projectsFullStack} />
      </div>

      {/* FRONTEND SECTION - Grid Estático */}
      <div>
        <h2 className={styles.categoryTitle}>Projetos Front-End</h2>
        <ProjectGrid items={projectsFrontEnd} />
      </div>

      {/* MOBILE SECTION - Grid Estático */}
      <div>
        <h2 className={styles.categoryTitle}>Projetos Mobile</h2>
        <ProjectGrid items={projectsMobile} isMobile={true} />
      </div>
    </section>
  );
};

export default Projects;
