"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Button from "../ui/Button";
import { FaGithub, FaArrowDown } from "react-icons/fa";
import Image from "next/image";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = [
    "Desenvolvedor Front-End",
    "React Developer",
    "React Native Developer",
    "C# Developer",
  ];

  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 1500;

  useEffect(() => {
    const currentFullText = texts[currentTextIndex];

    if (!isDeleting && currentIndex === currentFullText.length) {
      // Texto completamente digitado, pausa antes de começar a apagar
      setTimeout(() => setIsDeleting(true), pauseTime);
      return;
    }

    if (isDeleting && currentIndex === 0) {
      // Texto completamente apagado, muda para o próximo texto
      setIsDeleting(false);
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        if (isDeleting) {
          // Apagando texto
          setTypedText((prevText) => prevText.slice(0, -1));
          setCurrentIndex((prevIndex) => prevIndex - 1);
        } else {
          // Digitando texto
          setTypedText((prevText) => prevText + currentFullText[currentIndex]);
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [currentIndex, currentTextIndex, isDeleting, texts]);

  return (
    <section
      id="home"
      className="flex items-center justify-center min-h-screen pt-20 pb-10"
    >
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
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
            <h2 className="mb-6 min-h-[2.5rem] md:min-h-[3rem] text-2xl font-medium md:text-3xl text-secondary">
              {typedText}
              <span className="animate-blink">|</span>
            </h2>
            <p className="max-w-xl mb-8 text-lg">
              Ex-UI Designer que virou Desenvolvedor FullStack, apaixonado por
              criar experiências digitais que unem beleza e funcionalidade.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button href="#projetos">Ver Projetos</Button>
              <Button
                href="https://github.com/MxSGameJPS"
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                className="flex items-center gap-2"
              >
                <FaGithub />
                GitHub
              </Button>
              <Button href="https://curriculo-alpha-green.vercel.app">
                Currículo
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
              <div className="w-full h-full p-1 rounded-full bg-gradient-to-r from-primary to-accent">
                <div className="relative w-full h-full overflow-hidden bg-white rounded-full dark:bg-gray-800">
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
            className="p-2 text-2xl transition-colors border border-gray-300 rounded-full animate-bounce hover:border-primary hover:text-primary"
            aria-label="Rolar para baixo"
          >
            <FaArrowDown />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
