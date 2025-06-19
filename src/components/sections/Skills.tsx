"use client";

import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaJs,
  FaReact,
  FaGit,
  FaFigma,
  FaGlobe,
  FaMobile,
} from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiFirebase } from "react-icons/si";
import SkillItem from "../ui/SkillItem";

export default function Skills() {
  const frontendSkills = [
    { name: "HTML", level: 95, icon: FaHtml5, color: "#E34F26" },
    { name: "CSS", level: 95, icon: FaCss3Alt, color: "#1572B6" },
    { name: "React", level: 95, icon: FaReact, color: "#61DAFB" },
    { name: "SASS", level: 90, icon: FaSass, color: "#CC6699" },
    { name: "JavaScript", level: 85, icon: FaJs, color: "#F7DF1E" },
    { name: "Next.js", level: 70, icon: SiNextdotjs, color: "#fafafa" },
  ];

  const otherSkills = [
    { name: "UI Design (Figma)", level: 95, icon: FaFigma, color: "#F24E1E" },
    { name: "Git", level: 80, icon: FaGit, color: "#F05032" },
    {
      name: "Em andamento: TypeScript",
      level: 60,
      icon: SiTypescript,
      color: "#3178C6",
    },
    { name: "Firebase", level: 50, icon: SiFirebase, color: "#FFCA28" },
    {
      name: "Em andamento: Inglês",
      level: 25,
      icon: FaGlobe,
      color: "#4CAF50",
    },
    {
      name: "Planejado: React Native",
      level: 10,
      icon: FaMobile,
      color: "#61DAFB",
    },
  ];

  return (
    <section id="habilidades" className="py-20">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Minhas Habilidades
          </h2>
          <div className="w-24 h-1 mx-auto mb-8 bg-primary"></div>
          <p className="max-w-2xl mx-auto text-lg text-secondary">
            Combinando experiência em design com desenvolvimento front-end para
            criar interfaces funcionais e visualmente atraentes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="pb-2 mb-6 text-2xl font-semibold border-b">
              Desenvolvimento Front-End
            </h3>
            {frontendSkills.map((skill) => (
              <SkillItem
                key={skill.name}
                name={skill.name}
                level={skill.level}
                icon={skill.icon}
                color={skill.color}
              />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="pb-2 mb-6 text-2xl font-semibold border-b">
              Outras Competências
            </h3>
            {otherSkills.map((skill) => (
              <SkillItem
                key={skill.name}
                name={skill.name}
                level={skill.level}
                icon={skill.icon}
                color={skill.color}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
