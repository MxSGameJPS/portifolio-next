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
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="relative h-56 w-full">
        <Image
          src={imageSrc}
          alt={`Screenshot do projeto ${title}`}
          fill
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <h3 className="text-white text-xl font-bold p-4">{title}</h3>
        </div>
      </div>

      <div className="p-5">
        <p className="text-secondary mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, i) => (
            <span
              key={i}
              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-md text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3 mt-4">
          <Button
            href={liveUrl}
            className="flex items-center gap-2 text-sm px-4 py-2"
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
              className="flex items-center gap-2 text-sm px-4 py-2"
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
