import dynamic from "next/dynamic";
import ParticlesBackground from "@/components/ui/ParticlesBackground";
import Formulario from "@/componentsPromocao/Formulario/form";
import Header from './../components/Novo/Header/Header';

// Importação dinâmica dos componentes com suspense
const Hero = dynamic(() => import("@/components/Novo/Hero/Hero"), {
  ssr: true,
});

const About = dynamic(() => import("@/components/Novo/About/About"), {
  ssr: true,
});

// const Skills = dynamic(() => import("@/components/sections/Skills"), {
//   ssr: true,
// });

const Staks = dynamic(() => import("@/components/Novo/Staks/Staks"), {
  ssr: true,
});

const Projects = dynamic(() => import("@/components/Novo/Projetos/Projects"), {
  ssr: false,
});

const Contact = dynamic(() => import("@/components/sections/Contact"), {
  ssr: true,
});

export default function Home() {
  return (
    <main
      style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}
    >
      <ParticlesBackground />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Header />
        <Hero />
        <About />
        <Staks />
        {/* <Skills /> */}
        <Projects />
        <Formulario />
      </div>
    </main>
  );
}
