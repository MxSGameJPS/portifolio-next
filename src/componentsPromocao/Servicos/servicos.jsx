import React from "react";
import styles from "./servico.module.css";
import {
  FaBolt,
  FaPalette,
  FaShieldAlt,
  FaMobileAlt,
  FaSearch,
  FaChartLine,
} from "react-icons/fa";

const servicos = [
  {
    icon: <FaBolt className={styles.icone} style={{ color: "#B8860B" }} />,
    title: "Velocidade Incomparável",
    desc: "Seus clientes nunca esperarão mais de 1 segundo para acessar seu conteúdo. Performance otimizada para conversão máxima.",
  },
  {
    icon: <FaPalette className={styles.icone} style={{ color: "#C0C0C0" }} />,
    title: "Design Exclusivo",
    desc: "Layouts únicos e modernos que refletem a personalidade da sua marca e impressionam seus visitantes.",
  },
  {
    icon: <FaShieldAlt className={styles.icone} style={{ color: "#4D0000" }} />,
    title: "Segurança Máxima",
    desc: "Proteção avançada contra ataques, backup automático e certificado SSL incluído para total tranquilidade.",
  },
  {
    icon: <FaMobileAlt className={styles.icone} style={{ color: "#C0C0C0" }} />,
    title: "100% Responsivo",
    desc: "Perfeito em todos os dispositivos - celular, tablet e desktop. Seus clientes terão a melhor experiência sempre.",
  },
  {
    icon: <FaSearch className={styles.icone} style={{ color: "#B8860B" }} />,
    title: "SEO Otimizado",
    desc: "Configurado para aparecer no topo do Google. Mais visibilidade significa mais clientes para seu negócio.",
  },
  {
    icon: <FaChartLine className={styles.icone} style={{ color: "#C0C0C0" }} />,
    title: "Foco em Conversão",
    desc: "Cada elemento é estrategicamente posicionado para transformar visitantes em clientes pagantes.",
  },
];

const Servicos = () => {
  return (
    <section className={styles.servicosSection}>
      <h2 className={styles.titulo}>
        <span className={styles.azul}>Por que escolher</span>
        <br />
        <span className={styles.branco}>nossos serviços?</span>
      </h2>
      <p className={styles.subtitulo}>
        Combinamos tecnologia de ponta com design estratégico para criar sites
        que realmente vendem
      </p>
      <div className={styles.cards}>
        {servicos.map((servico, idx) => (
          <div className={styles.card} key={idx}>
            {servico.icon}
            <div className={styles.cardTitle}>{servico.title}</div>
            <div className={styles.cardDesc}>{servico.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Servicos;
