"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  PiArrowUpRightBold,
  PiDownloadSimpleBold,
} from "react-icons/pi";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./page.module.css";

const trajectory = [
  {
    period: "2018 — 2024",
    title: "Jornalismo & comunicação",
    text: "Na FNI / Portal Vassouras, trabalhei com apuração, investigação, produção sob prazo e comunicação para públicos diferentes. Foi onde aprendi a fazer perguntas melhores, separar ruído de informação e explicar temas complexos com clareza.",
  },
  {
    period: "Bagagem anterior",
    title: "Design, UI/UX & estratégia",
    text: "Design gráfico, prototipagem, experiência do usuário, comunicação digital e marketing político ampliaram meu olhar para comportamento, posicionamento e decisão. Hoje essa bagagem entra diretamente na forma como desenho produtos digitais.",
  },
  {
    period: "Desde jan. 2025",
    title: "Software & produto",
    text: "Passei a atuar profissionalmente com desenvolvimento Full Stack e Mobile enquanto curso Engenharia de Software. Meu trabalho hoje cobre descoberta de requisitos, arquitetura, UI/UX, implementação, integrações, deploy e evolução do produto.",
  },
];

const process = [
  {
    number: "01",
    title: "Entender o problema",
    text: "Antes da stack, procuro entender operação, usuário, restrições e o resultado que o software precisa gerar.",
  },
  {
    number: "02",
    title: "Desenhar a experiência",
    text: "Organizo fluxos, prioridades e interface para que tecnologia e usabilidade nasçam juntas, não em etapas desconectadas.",
  },
  {
    number: "03",
    title: "Arquitetar e construir",
    text: "Escolho a arquitetura e as integrações pensando no produto de hoje, mas sem bloquear o crescimento de amanhã.",
  },
  {
    number: "04",
    title: "Produzir e evoluir",
    text: "Deploy não é o fim. Monitoramento, correções, aprendizado e evolução fazem parte da responsabilidade sobre o produto.",
  },
];

const proof = [
  {
    label: "Social Jurídico",
    value: "SaaS em produção",
    text: "LegalTech com CRM, chat, automações, assinatura digital e recursos de IA.",
  },
  {
    label: "Mobile",
    value: "3 apps Android publicados",
    text: "Produtos mobile desenvolvidos e levados até a distribuição para usuários reais.",
  },
  {
    label: "Educação",
    value: "React Pro · Udemy",
    text: "Curso de React construído com uma abordagem prática e baseada em projetos.",
  },
];

const principles = [
  {
    title: "Produto antes da feature",
    text: "Uma funcionalidade só faz sentido quando melhora a operação, a experiência ou o resultado do negócio.",
  },
  {
    title: "Responsabilidade ponta a ponta",
    text: "Gosto de entender o todo: interface, dados, integrações, deploy e o que acontece depois que o software entra em uso.",
  },
  {
    title: "Comunicação sem ruído",
    text: "Tecnologia não precisa virar uma barreira. Decisões, limites e trade-offs devem ser explicados de forma objetiva.",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function AboutPage() {
  const reduceMotion = useReducedMotion();

  return (
    <div className={styles.pageWrapper}>
      <Header />

      <main>
        <section className={styles.heroSection}>
          <div className={styles.heroTexture} aria-hidden="true" />
          <div className={styles.heroContent}>
            <motion.div
              className={styles.heroCopy}
              variants={reveal}
              initial="hidden"
              animate="show"
            >
              <p className={styles.eyebrow}>SAULO PAVANELLO · SOFTWARE ENGINEER</p>
              <h1 className={styles.headline}>
                Tecnologia, produto e negócios fazem parte da mesma conversa.
              </h1>
              <p className={styles.heroLead}>
                Sou desenvolvedor Full Stack & Mobile e graduando em Engenharia de
                Software. Antes do código, minha trajetória passou por jornalismo,
                design, UI/UX e estratégia — experiências que hoje influenciam a
                forma como eu transformo problemas de negócio em produtos digitais.
              </p>

              <div className={styles.heroActions}>
                <Link href="/portfolio" className={styles.primaryCta}>
                  Ver projetos <PiArrowUpRightBold aria-hidden="true" />
                </Link>
                <a
                  href="/Curriculo_Saulo.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.secondaryCta}
                >
                  <PiDownloadSimpleBold aria-hidden="true" />
                  Baixar currículo
                </a>
              </div>

              <div className={styles.heroFacts} aria-label="Resumo profissional">
                <div>
                  <strong>Engenharia de Software</strong>
                  <span>graduação em andamento</span>
                </div>
                <div>
                  <strong>Full Stack & Mobile</strong>
                  <span>atuação desde jan. 2025</span>
                </div>
                <div>
                  <strong>Produto + UI/UX</strong>
                  <span>visão além do código</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className={styles.heroVisual}
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className={styles.photoFrame}>
                <Image
                  src="/Sobre/saulo_profile.png"
                  alt="Saulo Pavanello em retrato profissional"
                  fill
                  sizes="(max-width: 820px) 100vw, 500px"
                  priority
                  className={styles.profileImage}
                />
              </div>
              <div className={styles.photoCaption}>
                <span>SAULO PAVANELLO</span>
                <span>Software · Produto · Estratégia</span>
              </div>
            </motion.div>
          </div>
        </section>

        <section className={styles.perspectiveSection}>
          <div className={styles.narrowGrid}>
            <div>
              <p className={styles.eyebrow}>UMA BASE DIFERENTE</p>
              <h2 className={styles.sectionTitle}>
                O código é uma parte da solução. Não a solução inteira.
              </h2>
            </div>
            <div className={styles.editorialCopy}>
              <p>
                Jornalismo me ensinou a investigar antes de concluir. Design me
                ensinou a olhar para quem usa. Estratégia me ensinou que toda
                decisão precisa servir a um objetivo. Engenharia de software me deu
                as ferramentas para transformar tudo isso em produto.
              </p>
              <p>
                É por isso que, ao receber um projeto, eu não penso apenas em telas
                ou endpoints. Penso em fluxo, arquitetura, operação, experiência,
                manutenção e no que precisa acontecer para aquele software continuar
                fazendo sentido depois do lançamento.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.trajectorySection}>
          <div className={styles.container}>
            <div className={styles.sectionHeaderLight}>
              <p className={styles.eyebrowLight}>TRAJETÓRIA</p>
              <h2 className={styles.sectionTitleLight}>
                Experiências diferentes. Uma mesma forma de resolver problemas.
              </h2>
            </div>

            <div className={styles.timeline}>
              {trajectory.map((item, index) => (
                <motion.article
                  key={item.title}
                  className={styles.timelineItem}
                  variants={reveal}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-60px" }}
                >
                  <span className={styles.timelineIndex}>0{index + 1}</span>
                  <div>
                    <p className={styles.timelinePeriod}>{item.period}</p>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.processSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <p className={styles.eyebrow}>COMO EU CONSTRUO</p>
              <h2 className={styles.sectionTitle}>
                Do problema à operação em produção.
              </h2>
              <p className={styles.sectionIntro}>
                Meu processo tenta reduzir a distância entre estratégia, experiência
                e engenharia.
              </p>
            </div>

            <div className={styles.processGrid}>
              {process.map((item) => (
                <motion.article
                  key={item.number}
                  className={styles.processCard}
                  variants={reveal}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <span className={styles.processNumber}>{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.proofSection}>
          <div className={styles.container}>
            <div className={styles.proofHeader}>
              <p className={styles.eyebrow}>PRODUTO EM VEZ DE PROMESSA</p>
              <h2 className={styles.sectionTitle}>O trabalho já saiu do Figma e do localhost.</h2>
            </div>

            <div className={styles.proofGrid}>
              {proof.map((item) => (
                <article key={item.label} className={styles.proofCard}>
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.principlesSection}>
          <div className={styles.container}>
            <div className={styles.principlesGrid}>
              <div className={styles.principlesLead}>
                <p className={styles.eyebrow}>PRINCÍPIOS</p>
                <h2 className={styles.sectionTitle}>
                  O que eu quero preservar em cada projeto.
                </h2>
              </div>

              <div className={styles.principlesList}>
                {principles.map((item, index) => (
                  <article key={item.title} className={styles.principleItem}>
                    <span>0{index + 1}</span>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaInner}>
            <p className={styles.eyebrowLight}>PRÓXIMO PROJETO</p>
            <h2>Tem um problema que precisa virar software?</h2>
            <p>
              Me conte o contexto. Eu posso te ajudar a organizar a ideia, avaliar
              o caminho técnico e transformar isso em produto.
            </p>
            <Link href="/contato" className={styles.ctaLight}>
              Vamos conversar <PiArrowUpRightBold aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
