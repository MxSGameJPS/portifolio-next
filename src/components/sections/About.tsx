"use client";

import { motion } from "framer-motion";
import { FaCode, FaPalette, FaGlobe, FaLaptopCode } from "react-icons/fa";
import Button from "../ui/Button";

export default function About() {
  return (
    <section id="sobre" className="py-20  dark:bg-[#64646446]">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Sobre Mim</h2>
          <div className="w-24 h-1 mx-auto mb-8 bg-primary"></div>
        </motion.div>

        <div className="flex flex-col items-center gap-12 lg:flex-row">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-4 text-2xl font-semibold">Quem sou eu?</h3>
            <p className="mb-4 text-lg">
              Eu sou Saulo Pavanello, um ex-UI Designer que virou Desenvolvedor
              Front-End, apaixonado por criar experiências digitais que unem
              beleza e funcionalidade.
            </p>
            <p className="mb-4 text-lg">
              Com mais de um ano desenhando interfaces no Figma, hoje eu
              transformo ideias em código com HTML, CSS, SASS, JavaScript, React
              e, agora, Next.js – minha mais nova aventura!
            </p>
            <p className="mb-4 text-lg">
              Baseado em Dois Irmãos, RS, estou me preparando pra ser nômade
              digital em Portugal até o final de 2026, levando minha família e
              minha vontade de fazer a diferença.
            </p>
            <p className="mb-6 text-lg">
              Meu objetivo? Construir sites e apps que encantem usuários e
              resolvam problemas reais, como autônomo. Seja uma landing page
              estilizada com Next.js ou um app mobile (React Native tá na
              mira!), eu trago minha visão de design e código limpo pra cada
              projeto.
            </p>
            <Button href="#contato">Entre em Contato</Button>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-6 lg:w-1/2 md:grid-cols-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="p-6 transition-shadow bg-white rounded-lg shadow-md dark:bg-gray-800 hover:shadow-lg">
              <div className="mb-4 text-3xl text-primary">
                <FaCode />
              </div>
              <h4 className="mb-2 text-xl font-semibold">Front-End Dev</h4>
              <p>
                Transformando designs em código com foco em performance e
                acessibilidade.
              </p>
            </div>

            <div className="p-6 transition-shadow bg-white rounded-lg shadow-md dark:bg-gray-800 hover:shadow-lg">
              <div className="mb-4 text-3xl text-primary">
                <FaPalette />
              </div>
              <h4 className="mb-2 text-xl font-semibold">UI Designer</h4>
              <p>
                Criando interfaces intuitivas e atraentes com experiência em
                Figma.
              </p>
            </div>

            <div className="p-6 transition-shadow bg-white rounded-lg shadow-md dark:bg-gray-800 hover:shadow-lg">
              <div className="mb-4 text-3xl text-primary">
                <FaLaptopCode />
              </div>
              <h4 className="mb-2 text-xl font-semibold">React Dev</h4>
              <p>Construindo aplicações modernas com React e Next.js.</p>
            </div>

            <div className="p-6 transition-shadow bg-white rounded-lg shadow-md dark:bg-gray-800 hover:shadow-lg">
              <div className="mb-4 text-3xl text-primary">
                <FaGlobe />
              </div>
              <h4 className="mb-2 text-xl font-semibold">Aspirante Nômade</h4>
              <p>
                Em preparação para trabalhar remotamente a partir de Portugal em
                2026.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
