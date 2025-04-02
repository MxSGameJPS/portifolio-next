"use client";

import { motion } from "framer-motion";
import { 
  FaHtml5, FaCss3Alt, FaSass, FaJs, FaReact, FaGit, 
  FaFigma, FaGlobe, FaDatabase, FaMobile
} from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiFirebase } from "react-icons/si";
import SkillItem from "../ui/SkillItem";

export default function Skills() {
  const frontendSkills = [
    { name: "HTML", level: 95, icon: FaHtml5, color: "#E34F26" },
    { name: "CSS", level: 90, icon: FaCss3Alt, color: "#1572B6" },
    { name: "SASS", level: 85, icon: FaSass, color: "#CC6699" },
    { name: "JavaScript", level: 80, icon: FaJs, color: "#F7DF1E" },
    { name: "React", level: 75, icon: FaReact, color: "#61DAFB" },
    { name: "Next.js", level: 60, icon: SiNextdotjs, color: "#000000" },
  ];

  const otherSkills = [
    { name: "UI Design (Figma)", level: 85, icon: FaFigma, color: "#F24E1E" },
    { name: "Git", level: 70, icon: FaGit, color: "#F05032" },
    { name: "Firebase", level: 50, icon: SiFirebase, color: "#FFCA28" },
    { name: "Em andamento: TypeScript", level: 40, icon: SiTypescript, color: "#3178C6" },
    { name: "Em andamento: Inglês", level: 35, icon: FaGlobe, color: "#4CAF50" },
    { name: "Planejado: React Native", level: 10, icon: FaMobile, color: "#61DAFB" },
  ];

  return (
    <section id="habilidades" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Minhas Habilidades</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-lg text-secondary">
            Combinando experiência em design com desenvolvimento front-end para criar
            interfaces funcionais e visualmente atraentes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 border-b pb-2">Desenvolvimento Front-End</h3>
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
            <h3 className="text-2xl font-semibold mb-6 border-b pb-2">Outras Competências</h3>
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
