"use client";

import React from "react";
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
  FaNodeJs,
} from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiFirebase, SiUnity, SiLua } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import SkillItem from "../ui/SkillItem";

export default function Skills() {
  const frontendSkills = [
    { name: "HTML", level: 95, icon: FaHtml5, color: "#E34F26" },
    { name: "CSS", level: 95, icon: FaCss3Alt, color: "#1572B6" },
    { name: "React", level: 95, icon: FaReact, color: "#61DAFB" },
    { name: "SASS", level: 90, icon: FaSass, color: "#CC6699" },
    { name: "JavaScript", level: 85, icon: FaJs, color: "#F7DF1E" },
    { name: "Next.js", level: 70, icon: SiNextdotjs, color: "#fafafa" },
    { name: "TypeScript", level: 60, icon: SiTypescript, color: "#3178C6" },
  ];

  const backendSkills = [
    { name: "Node.js", level: 50, icon: FaNodeJs, color: "#339933" },
    { name: "C#", level: 15, icon: TbBrandCSharp, color: "#239120" },
    { name: "Firebase", level: 50, icon: SiFirebase, color: "#FFCA28" },
  ];

  const mobileGameSkills = [
    { name: "React Native", level: 60, icon: FaMobile, color: "#61DAFB" },
    { name: "Unity", level: 5, icon: SiUnity, color: "#FFFFFF" },
    { name: "Preparação Lua", level: 1, icon: SiLua, color: "#2C2D72" },
  ];

  const otherSkills = [
    { name: "UI Design (Figma)", level: 95, icon: FaFigma, color: "#F24E1E" },
    { name: "Git", level: 80, icon: FaGit, color: "#F05032" },
    { name: "Em andamento: Inglês", level: 25, icon: FaGlobe, color: "#4CAF50" },
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
            Combinando experiência em design com desenvolvimento em diversas áreas para
            criar soluções completas e visualmente atraentes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="p-2 mb-6 text-2xl font-bold border-t border-b" >
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
            
            <h3 className="p-2 mt-12 mb-6 text-2xl font-bold border-t border-b">
              Desenvolvimento Mobile & Games
            </h3>
            {mobileGameSkills.map((skill) => (
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
            <h3 className="p-2 mb-6 text-2xl font-bold border-t border-b">
              Desenvolvimento Back-End
            </h3>
            {backendSkills.map((skill) => (
              <SkillItem
                key={skill.name}
                name={skill.name}
                level={skill.level}
                icon={skill.icon}
                color={skill.color}
              />
            ))}
            
            <h3 className="p-2 mt-12 mb-6 text-2xl font-bold border-b border-t">
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
