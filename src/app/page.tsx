import dynamic from "next/dynamic";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Importação dinâmica dos componentes com suspense
const Hero = dynamic(() => import("@/components/sections/Hero"), {
  ssr: true,
});

const About = dynamic(() => import("@/components/sections/About"), {
  ssr: true,
});

const Skills = dynamic(() => import("@/components/sections/Skills"), {
  ssr: true,
});

const Projects = dynamic(() => import("@/components/sections/Projects"), {
  ssr: true,
});

const Contact = dynamic(() => import("@/components/sections/Contact"), {
  ssr: true,
});

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
