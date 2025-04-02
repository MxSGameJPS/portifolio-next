"use client";

import { motion } from "framer-motion";
import { FaCode, FaPalette, FaGlobe, FaLaptopCode } from "react-icons/fa";
import Button from "../ui/Button";

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-[#f1f3f5] dark:bg-[#343a40]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre Mim</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4">Quem sou eu?</h3>
            <p className="text-lg mb-4">
              Eu sou Saulo Pavanello, um ex-UI Designer que virou Desenvolvedor
              Front-End, apaixonado por criar experiências digitais que unem
              beleza e funcionalidade.
            </p>
            <p className="text-lg mb-4">
              Com mais de um ano desenhando interfaces no Figma, hoje eu
              transformo ideias em código com HTML, CSS, SASS, JavaScript, React
              e, agora, Next.js – minha mais nova aventura!
            </p>
            <p className="text-lg mb-4">
              Baseado em Dois Irmãos, RS, estou me preparando pra ser nômade
              digital em Portugal até o final de 2025, levando minha família e
              minha vontade de fazer a diferença.
            </p>
            <p className="text-lg mb-6">
              Meu objetivo? Construir sites e apps que encantem usuários e
              resolvam problemas reais, como autônomo. Seja uma landing page
              estilizada com Next.js ou um app mobile (React Native tá na
              mira!), eu trago minha visão de design e código limpo pra cada
              projeto.
            </p>
            <Button href="#contato">Entre em Contato</Button>
          </motion.div>

          <motion.div
            className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-primary text-3xl mb-4">
                <FaCode />
              </div>
              <h4 className="text-xl font-semibold mb-2">Front-End Dev</h4>
              <p>
                Transformando designs em código com foco em performance e
                acessibilidade.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-primary text-3xl mb-4">
                <FaPalette />
              </div>
              <h4 className="text-xl font-semibold mb-2">UI Designer</h4>
              <p>
                Criando interfaces intuitivas e atraentes com experiência em
                Figma.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-primary text-3xl mb-4">
                <FaLaptopCode />
              </div>
              <h4 className="text-xl font-semibold mb-2">React Dev</h4>
              <p>Construindo aplicações modernas com React e Next.js.</p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-primary text-3xl mb-4">
                <FaGlobe />
              </div>
              <h4 className="text-xl font-semibold mb-2">Aspirante Nômade</h4>
              <p>
                Em preparação para trabalhar remotamente a partir de Portugal em
                2025.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
