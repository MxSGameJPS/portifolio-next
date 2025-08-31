import React from "react";
import styles from "./testemunho.module.css";
import { FaStar, FaQuoteRight } from "react-icons/fa";

const testemunhos = [
  {
    frase:
      "Meu site ficou incrível! Em 2 semanas já dobrei o número de clientes. A velocidade é impressionante e o design é muito profissional.",
    destaque: "+150% clientes",
    nome: "Carlos Silva",
    cargo: "Silva Advocacia",
    foto: "https://randomuser.me/api/portraits/men/32.jpg",
    estrelas: 5,
  },
  {
    frase:
      "Nunca imaginei que um site pudesse fazer tanta diferença no meu negócio. As vendas online explodiram depois que o Saulo criou minha loja.",
    destaque: "+300% vendas online",
    nome: "Ana Costa",
    cargo: "Boutique Ana",
    foto: "https://randomuser.me/api/portraits/women/44.jpg",
    estrelas: 5,
  },
  {
    frase:
      "Profissionalismo exemplar! Entregaram exatamente o que prometeram, no prazo combinado. Recomendo para qualquer empresário sério.",
    destaque: "+200% agendamentos",
    nome: "Roberto Mendes",
    cargo: "Clínica Vida",
    foto: "https://randomuser.me/api/portraits/men/65.jpg",
    estrelas: 5,
  },
  {
    frase:
      "O suporte é fantástico! Sempre que preciso de algo, eles respondem rapidamente. Meu site está sempre funcionando perfeitamente.",
    destaque: "90% uptime",
    nome: "Mariana Oliveira",
    cargo: "Consultoria MO",
    foto: "https://randomuser.me/api/portraits/women/68.jpg",
    estrelas: 5,
  },
];

const stats = [
  { value: "200+", label: "Sites entregues" },
  { value: "98%", label: "Clientes satisfeitos" },
  { value: "56h", label: "Tempo médio de entrega" },
];

const Testemunhos = () => {
  return (
    <section className={styles.testemunhosSection}>
      <h2 className={styles.titulo}>
        O que nossos <span className={styles.azul}>clientes dizem</span>
      </h2>
      <p className={styles.subtitulo}>
        Resultados reais de empresários que transformaram seus negócios com
        nossos sites
      </p>
      <div className={styles.cards}>
        {testemunhos.map((t, idx) => (
          <div className={styles.card} key={idx}>
            <div className={styles.stars}>
              {[...Array(t.estrelas)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <div className={styles.frase}>"{t.frase}"</div>
            <div className={styles.destaque}>{t.destaque}</div>
            <div className={styles.autor}>
              <img src={t.foto} alt={t.nome} className={styles.autorFoto} />
              <div className={styles.autorInfo}>
                <span className={styles.autorNome}>{t.nome}</span>
                <span className={styles.autorCargo}>{t.cargo}</span>
              </div>
            </div>
            <FaQuoteRight className={styles.quoteIcon} />
          </div>
        ))}
      </div>
      <div className={styles.stats}>
        {stats.map((s, idx) => (
          <div className={styles.stat} key={idx}>
            <div className={styles.statValue}>{s.value}</div>
            <div className={styles.statLabel}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testemunhos;
