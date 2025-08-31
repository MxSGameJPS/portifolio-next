import React from "react";
import styles from "./hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.topLabel}>
        <span className={styles.star}>⭐</span>
        <span>Sites que Vendem</span>
        <span className={styles.star}>⭐</span>
      </div>
      <h1 className={styles.title}>
        <span className={styles.gradientBlue}>Seu site pronto</span>
        <br />
        <span className={styles.white}>antes mesmo de seus</span>
        <br />
        <span className={styles.gradientPink}>clientes perceberem</span>
      </h1>
      <p className={styles.subtitle}>
        Tecnologia de ponta para sites{" "}
        <span className={styles.gradientBlue}>ultrarrápidos</span>, modernos e
        feitos para destacar sua{" "}
        <span className={styles.gradientPink}>autoridade</span> no mercado
        digital.
      </p>
      <div className={styles.actions}>
        <a
          className={styles.buttonMain}
          href="https://wa.me/5551993392983?text=Olá! Gostaria de fazer um orçamento para meu site."
          target="_blank"
          rel="noopener noreferrer"
        >
          🚀 Tenha meu site exclusivo
        </a>
        <span className={styles.entrega}>
          <span>⚡</span> Entrega em 72h
        </span>
      </div>
      <div className={styles.metrics}>
        <div>
          <span className={styles.metricValue}>&lt; 1s</span>
          <span className={styles.metricLabel}>Tempo de carregamento</span>
        </div>
        <div>
          <span className={styles.metricValue}>100%</span>
          <span className={styles.metricLabel}>Mobile responsive</span>
        </div>
        <div>
          <span className={styles.metricValue}>24/7</span>
          <span className={styles.metricLabel}>Suporte técnico</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
