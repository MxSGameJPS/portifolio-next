"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "./Button";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

type ProjectCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  technologies: string[];
  liveUrl: string;
  githubUrl?: string;
  index: number;
};

export default function ProjectCard({
  title,
  description,
  imageSrc,
  technologies,
  liveUrl,
  githubUrl,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      className="flex flex-col h-full overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="relative w-full h-56">
        <Image
          src={imageSrc}
          alt={`Screenshot do projeto ${title}`}
          fill
          className="object-cover object-top"
        />
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent">
          <h3 className="p-4 text-xl font-bold text-white">{title}</h3>
        </div>
      </div>

      <div className="flex flex-col flex-grow p-5">
        <div className="mb-4 min-h-[80px]">
          <p className="text-secondary">{description}</p>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, i) => (
            <span
              key={i}
              className="px-2 py-1 text-xs font-medium bg-gray-100 rounded-md dark:bg-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3 mt-auto">
          <Button
            href={liveUrl}
            className="flex items-center gap-2 px-4 py-2 text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaExternalLinkAlt />
            Ver Projeto
          </Button>

          {githubUrl && (
            <Button
              href={githubUrl}
              variant="outline"
              className="flex items-center gap-2 px-4 py-2 text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
              Código
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
