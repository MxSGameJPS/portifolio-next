"use client";

import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import ContactForm from "../ui/ContactForm";

export default function Contact() {
  return (
    <section
      id="contato"
      className="py-20 bg-gradient-to-b from-[#000000] via-[#4D0000] to-[#000000] text-[#F5F5F5]"
    >
      <div className="container max-w-full px-2 mx-auto overflow-x-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl text-[#F5F5F5]">
            Entre em Contato
          </h2>
          <div className="w-24 h-1 mx-auto mb-8 bg-[#B8860B]"></div>
          <p className="max-w-2xl mx-auto text-lg text-[#C0C0C0]">
            Estou disponível para projetos freelance e oportunidades de
            trabalho. Vamos conversar sobre como posso ajudar em seu próximo
            projeto!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-[#000000]/80 rounded-2xl p-4 md:p-8 shadow-lg border border-[#B8860B]/40 w-full box-border"
          >
            <h3 className="mb-6 text-2xl font-semibold text-[#F5F5F5]">
              Vamos Trabalhar Juntos
            </h3>
            <p className="mb-8 text-lg text-[#C0C0C0]">
              Seja para um projeto web, um redesign de interface ou uma parceria
              de longo prazo, estou pronto para trazer minha experiência em
              design e desenvolvimento para o seu negócio.
            </p>

            <div className="space-y-6 md:space-y-7">
              <div className="flex items-start">
                <div className="p-3 mr-4 rounded-lg bg-[#B8860B]/20">
                  <FaEnvelope className="text-xl text-[#B8860B]" />
                </div>
                <div>
                  <h4 className="mb-1 font-medium text-[#F5F5F5]">Email</h4>
                  <div className="flex flex-col space-y-1">
                    <a
                      href="mailto:devmobile@saulopavanello.com.br"
                      className="transition-colors text-[#C0C0C0] hover:text-[#B8860B]"
                    >
                      devmobile@saulopavanello.com.br
                    </a>
                    <a
                      href="mailto:frontend@saulopavanello.com.br"
                      className="transition-colors text-[#C0C0C0] hover:text-[#B8860B]"
                    >
                      frontend@saulopavanello.com.br
                    </a>
                    <a
                      href="mailto:backend@saulopavanello.com.br"
                      className="transition-colors text-[#C0C0C0] hover:text-[#B8860B]"
                    >
                      backend@saulopavanello.com.br
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 mr-4 rounded-lg bg-[#C0C0C0]/20">
                  <FaMapMarkerAlt className="text-xl text-[#C0C0C0]" />
                </div>
                <div>
                  <h4 className="mb-1 font-medium text-[#F5F5F5]">
                    Localização
                  </h4>
                  <p className="text-[#C0C0C0]">Dois Irmãos, RS, Brasil</p>
                  <p className="text-sm text-[#C0C0C0]">
                    (Em preparação para Portugal em 2025)
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 mr-4 rounded-lg bg-[#C0C0C0]/20">
                  <FaGithub className="text-xl text-[#C0C0C0]" />
                </div>
                <div>
                  <h4 className="mb-1 font-medium text-[#F5F5F5]">GitHub</h4>
                  <a
                    href="https://github.com/MxSGameJPS"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors text-[#C0C0C0] hover:text-[#B8860B]"
                  >
                    github.com/MxSGameJPS
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 mr-4 rounded-lg bg-[#C0C0C0]/20">
                  <FaLinkedin className="text-xl text-[#C0C0C0]" />
                </div>
                <div>
                  <h4 className="mb-1 font-medium text-[#F5F5F5]">LinkedIn</h4>
                  <a
                    href="https://www.linkedin.com/in/saulopavanello/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors text-[#C0C0C0] hover:text-[#B8860B]"
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
            className="bg-[#000000]/80 rounded-2xl p-5 md:p-8 shadow-lg border border-[#C0C0C0]/40 w-full box-border"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
