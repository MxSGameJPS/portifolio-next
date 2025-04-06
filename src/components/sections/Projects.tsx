"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "../ui/ProjectCard";

// Dados dos projetos
const projects = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
    title: "Canal do TF",
    description:
      "Portal de notícias e vídeos relacionados ao Botafogo, com áreas públicas e administrativas.",
    imageSrc: "/projects/canal.png", // Substitua pelo caminho correto
    technologies: ["React", "React Router", "Styled Components", "Axios"],
    liveUrl: "https://canal-do-tf.vercel.app/",
    githubUrl: "https://github.com/MxSGameJPS/canal-tf",
    category: "web",
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
    <section id="projetos" className="py-20 bg-[#f1f3f5] dark:bg-[#343a40]">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Meus Projetos</h2>
          <div className="mx-auto mb-8 w-24 h-1 bg-primary"></div>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-secondary">
            Conheça alguns dos projetos que desenvolvi, combinando design
            atraente com funcionalidades práticas.
          </p>

          <div className="flex flex-wrap gap-3 justify-center mb-10">
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
              Mobile (Em breve)
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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
              className="col-span-full py-10 text-center"
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
              className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
            >
              Ver mais
            </button>
          </div>
        )}

        {showAll && filteredProjects.length > 6 && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(false)}
              className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              Ver menos
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
