"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import ContactForm from "../ui/ContactForm";

export default function Contact() {
  return (
    <section id="contato" className="py-20">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Entre em Contato</h2>
          <div className="w-24 h-1 mx-auto mb-8 bg-primary"></div>
          <p className="max-w-2xl mx-auto text-lg text-secondary">
            Estou disponível para projetos freelance e oportunidades de trabalho. 
            Vamos conversar sobre como posso ajudar em seu próximo projeto!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-6 text-2xl font-semibold">Vamos Trabalhar Juntos</h3>
            <p className="mb-8 text-lg">
              Seja para um projeto web, um redesign de interface ou uma
              parceria de longo prazo, estou pronto para trazer minha experiência
              em design e desenvolvimento para o seu negócio.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="p-3 mr-4 rounded-lg bg-primary/10">
                  <FaEnvelope className="text-xl text-primary" />
                </div>
                <div>
                  <h4 className="mb-1 font-medium">Email</h4>
                  <a 
                    href="mailto:saulopavanello@saulopavanello.com" 
                    className="transition-colors text-secondary hover:text-primary"
                  >
                    devmobile@saulopavanello.com.br
                    
                    frontend@saulopavanello.com.br
                    
                    backend@saulopavanello.com.br
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 mr-4 rounded-lg bg-primary/10">
                  <FaMapMarkerAlt className="text-xl text-primary" />
                </div>
                <div>
                  <h4 className="mb-1 font-medium">Localização</h4>
                  <p className="text-secondary">Dois Irmãos, RS, Brasil</p>
                  <p className="text-sm text-secondary">(Em preparação para Portugal em 2025)</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 mr-4 rounded-lg bg-primary/10">
                  <FaGithub className="text-xl text-primary" />
                </div>
                <div>
                  <h4 className="mb-1 font-medium">GitHub</h4>
                  <a 
                    href="https://github.com/MxSGameJPS" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="transition-colors text-secondary hover:text-primary"
                  >
                    github.com/MxSGameJPS
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 mr-4 rounded-lg bg-primary/10">
                  <FaLinkedin className="text-xl text-primary" />
                </div>
                <div>
                  <h4 className="mb-1 font-medium">LinkedIn</h4>
                  <a 
                    href="https://www.linkedin.com/in/saulopavanello/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="transition-colors text-secondary hover:text-primary"
                  >
                    /in/saulopavanello/
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
