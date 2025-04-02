"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Button from "../ui/Button";
import { FaGithub, FaArrowDown } from "react-icons/fa";
import Image from "next/image";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Desenvolvedor Front-End";
  const typingSpeed = 100;

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText((prevText) => prevText + fullText[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, typingSpeed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  return (
    <section
      id="home"
      className="flex justify-center items-center pt-20 pb-10 min-h-screen"
    >
      <div className="container px-4 mx-auto">
        <div className="flex flex-col gap-10 justify-between items-center md:flex-row">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h5 className="mb-4 font-medium text-primary">Olá, me chamo</h5>
            <h1 className="mb-4 text-4xl font-bold md:text-6xl">
              Saulo Pavanello
            </h1>
            <h2 className="mb-6 h-8 text-2xl font-medium md:text-3xl text-secondary">
              {typedText}
              <span className="animate-blink">|</span>
            </h2>
            <p className="mb-8 max-w-xl text-lg">
              Ex-UI Designer que virou Desenvolvedor Front-End, apaixonado por
              criar experiências digitais que unem beleza e funcionalidade.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button href="#projetos">Ver Projetos</Button>
              <Button
                href="https://github.com/MxSGameJPS"
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                className="flex gap-2 items-center"
              >
                <FaGithub />
                GitHub
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="relative md:w-1/2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative mx-auto w-72 h-72 md:w-96 md:h-96">
              <div className="p-1 w-full h-full bg-gradient-to-r rounded-full from-primary to-accent">
                <div className="overflow-hidden relative w-full h-full bg-white rounded-full dark:bg-gray-800">
                  <Image
                    src="/profile.jpeg"
                    alt="Foto de Saulo Pavanello"
                    fill
                    className="object-cover rounded-full"
                    priority
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <a
            href="#sobre"
            className="p-2 text-2xl rounded-full border border-gray-300 transition-colors animate-bounce hover:border-primary hover:text-primary"
            aria-label="Rolar para baixo"
          >
            <FaArrowDown />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
