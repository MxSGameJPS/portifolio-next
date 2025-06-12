"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  index: number;
}

export default function ProjectCard({
  title,
  description,
  imageSrc,
  technologies,
  liveUrl,
  githubUrl,
  index,
}: ProjectCardProps) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleProjectClick = () => {
    if (liveUrl.endsWith(".mp4")) {
      setIsVideoPlaying(true);
    } else {
      window.open(liveUrl, "_blank");
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="flex flex-col h-full overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800"
      >
        <div className="relative w-full pt-[56.25%]">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="absolute top-0 left-0 object-cover w-full h-full"
          />
        </div>

        <div className="flex flex-col flex-grow p-6">
          <h3 className="mb-2 text-xl font-bold">{title}</h3>
          <p className="flex-grow mb-4 text-secondary">{description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs font-medium rounded-full text-primary bg-primary/10"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4 mt-auto">
            <button
              onClick={handleProjectClick}
              className="flex-1 px-4 py-2 text-sm font-medium text-white transition-colors rounded-md bg-primary hover:bg-primary/90"
            >
              {liveUrl.endsWith(".mp4") ? "Ver vídeo" : "Ver projeto"}
            </button>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2 text-sm font-medium text-center text-gray-800 transition-colors bg-gray-200 rounded-md dark:bg-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              Ver código
            </a>
          </div>
        </div>
      </motion.div>

      {isVideoPlaying && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60"
          onClick={() => setIsVideoPlaying(false)}
        >
          <div className="relative w-full max-w-2xl mx-auto">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsVideoPlaying(false);
              }}
              className="absolute top-0 right-0 z-10 p-2 text-white translate-x-1/2 -translate-y-1/2 rounded-full bg-black/50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="relative pt-[76.25%]">
              <video
                src={liveUrl}
                controls
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-xl"
                autoPlay
              >
                Seu navegador não suporta o elemento de vídeo.
              </video>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
