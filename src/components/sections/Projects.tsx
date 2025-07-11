"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "../ui/ProjectCard";
import ParticlesBackground from "../ui/ParticlesBackground";

// Dados dos projetos
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
    technologies: [
      "React",
      "Styled-Components",
      "Formspree",
      "React Icons",
    ],
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
    imageSrc: "/projects/barbearia.png", // Substitua pelo caminho correto
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
    imageSrc: "/projects/academia.png", // Substitua pelo caminho correto
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
    imageSrc: "/projects/receitas.png", // Substitua pelo caminho correto
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
    imageSrc: "/projects/dj.png", // Substitua pelo caminho correto
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
    imageSrc: "/projects/confraria.png", // Substitua pelo caminho correto
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
    imageSrc: "/projects/canal.png", // Substitua pelo caminho correto
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
    imageSrc: "/projects/fokus-app.png", // Substitua pelo caminho correto
    technologies: ["React Native", "Expo", "Expo Router"],
    liveUrl: "/projects/fokusapp.mp4",
    githubUrl: "https://github.com/MxSGameJPS/fokus-app",
    category: "mobile",
  },
];

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [showAll, setShowAll] = useState(false);

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  // Limita os projetos mostrados a 6 quando showAll for falso
  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 6);

  return (
    <section
      id="projetos"
      className="relative py-20 dark:bg-[#64646446]"
    >
      <ParticlesBackground />
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Meus Projetos</h2>
          <div className="w-24 h-1 mx-auto mb-8 bg-primary"></div>
          <p className="max-w-2xl mx-auto mb-8 text-lg text-secondary">
            Conheça alguns dos projetos que desenvolvi, combinando design
            atraente com funcionalidades práticas.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filter === "all"
                  ? "bg-primary text-white"
                  : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
            >
              Todos
            </button>
            <button
              onClick={() => setFilter("web")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filter === "web"
                  ? "bg-primary text-white"
                  : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
            >
              Web
            </button>
            <button
              onClick={() => setFilter("mobile")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filter === "mobile"
                  ? "bg-primary text-white"
                  : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
            >
              Mobile
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
          {displayedProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imageSrc={project.imageSrc}
              technologies={project.technologies}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
              index={index}
            />
          ))}

          {filter === "mobile" && (
            <motion.div
              className="py-10 text-center col-span-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="mb-4 text-lg text-secondary">
                Projetos mobile em React Native estão nos planos para 2025!
              </p>
              <p className="text-lg font-medium text-primary">
                Fique ligado para novidades em breve.
              </p>
            </motion.div>
          )}
        </div>

        {!showAll && filteredProjects.length > 6 && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="px-6 py-3 text-white transition-colors rounded-md bg-primary hover:bg-primary/90"
            >
              Ver mais
            </button>
          </div>
        )}

        {showAll && filteredProjects.length > 6 && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(false)}
              className="px-6 py-3 text-gray-800 transition-colors bg-gray-200 rounded-md dark:bg-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              Ver menos
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
