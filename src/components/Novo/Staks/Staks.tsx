"use client";

import styles from "./staks.module.css";
import {
  SiHtml5,
  SiCss3,
  SiReact,
  SiSass,
  SiJavascript,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiFirebase,
  SiSharp,
  SiUnity,
  SiLua,
  SiFigma,
  SiGit,
} from "react-icons/si";
import { useEffect, useState } from "react";

const stacks = [
  { name: "HTML", percent: 100, icon: SiHtml5, color: "#e34f26" },
  { name: "CSS", percent: 95, icon: SiCss3, color: "#1572B6" },
  { name: "REACT", percent: 95, icon: SiReact, color: "#61dafb" },
  { name: "SASS", percent: 90, icon: SiSass, color: "#cc6699" },
  { name: "JAVASCRIPT", percent: 85, icon: SiJavascript, color: "#f7df1e" },
  { name: "NEXT", percent: 70, icon: SiNextdotjs, color: "#ffffff" },
  { name: "TYPESCRIPT", percent: 60, icon: SiTypescript, color: "#3178c6" },
  { name: "NODE", percent: 50, icon: SiNodedotjs, color: "#339933" },
  { name: "FIREBASE", percent: 50, icon: SiFirebase, color: "#ffca28" },
  { name: "C#", percent: 15, icon: SiSharp, color: "#239120" },
  { name: "REACT NATIVE", percent: 75, icon: SiReact, color: "#61dafb" },
  { name: "UNITY", percent: 15, icon: SiUnity, color: "#222c37" },
  { name: "LUA", percent: 5, icon: SiLua, color: "#000080" },
  { name: "UI DESIGN (FIGMA)", percent: 95, icon: SiFigma, color: "#F24E1E" },
  { name: "GIT", percent: 85, icon: SiGit, color: "#f05032" },
];

export default function Staks() {
  const [repeatCount, setRepeatCount] = useState(5);

  useEffect(() => {
    function updateRepeat() {
      const itemWidth = 140; // largura aproximada de cada stakItem + gap
      const minItems = Math.ceil(window.innerWidth / itemWidth) + 2;
      setRepeatCount(Math.max(minItems, 5));
    }
    updateRepeat();
    window.addEventListener("resize", updateRepeat);
    return () => window.removeEventListener("resize", updateRepeat);
  }, []);

  const repeatedStacks = Array.from(
    { length: repeatCount },
    () => stacks
  ).flat();

  return (
    <section className={styles.staksSection}>
      <div className={styles.staksCarousel}>
        {repeatedStacks.map((stak, idx) => {
          const Icon = stak.icon;
          return (
            <div className={styles.stakItem} key={idx}>
              <Icon className={styles.stakLogo} size={60} color={stak.color} />
              <div className={styles.stakLabel}>{stak.name}</div>
              <div className={styles.stakBar}>
                <div
                  className={styles.stakBarFill}
                  style={{ width: `${stak.percent}%` }}
                ></div>
              </div>
              <div className={styles.stakPercent}>{stak.percent}%</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
