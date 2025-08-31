"use client";

import React, { useState } from "react";
import styles from "./comparacao.module.css";
import { FaPlay, FaCheck } from "react-icons/fa";

const comparacoes = [
  {
    nome: "Saulo Pavanello",
    tempo: "0.8s",
    score: 98,
    percent: "100%",
    barClass: styles.cardBarInner + " " + styles.nxhost,
  },
  {
    nome: "Concorrente A",
    tempo: "4.2s",
    score: 65,
    percent: "100%",
    barClass: styles.cardBarInner + " " + styles.a,
  },
  {
    nome: "Concorrente B",
    tempo: "6.1s",
    score: 45,
    percent: "90%",
    barClass: styles.cardBarInner + " " + styles.b,
  },
];

const finalBarWidths = ["100%", "80%", "60%"];
const initialBarWidths = ["0%", "0%", "0%"];
const barDurations = [600, 1800, 2500]; // ms para cada barra

const Comparacao = () => {
  const [barWidths, setBarWidths] = useState(initialBarWidths);
  const [loading, setLoading] = useState(false);

  const startTest = () => {
    if (loading) return;
    setLoading(true);
    setBarWidths(initialBarWidths);
    // animação individual por barra
    setTimeout(() => {
      setBarWidths([finalBarWidths[0], "0%", "0%"]);
    }, barDurations[0]);
    setTimeout(() => {
      setBarWidths([finalBarWidths[0], finalBarWidths[1], "0%"]);
    }, barDurations[1]);
    setTimeout(() => {
      setBarWidths(finalBarWidths);
      setLoading(false);
    }, barDurations[2]);
  };

  return (
    <section className={styles.comparacaoSection}>
      <h2 className={styles.titulo}>
        Velocidade que <span className={styles.impressiona}>impressiona</span>
      </h2>
      <p className={styles.subtitulo}>
        Veja como nossos sites carregam muito mais rápido que a concorrência
      </p>
      <button
        className={styles.botaoTeste}
        onClick={startTest}
        disabled={loading}
      >
        <FaPlay /> {loading ? "Testando..." : "Iniciar Teste de Velocidade"}
      </button>
      <div className={styles.comparacaoCards}>
        {comparacoes.map((item, idx) => (
          <div className={styles.card} key={item.nome}>
            <div className={styles.cardHeader}>
              <span className={styles.cardTitle}>{item.nome}</span>
              <span className={styles.cardCheck}>
                <FaCheck />
              </span>
              <span className={styles.cardTime}>
                {item.tempo}{" "}
                <span style={{ fontSize: "0.9rem", color: "#C0C0C0" }}>
                  Tempo de carregamento
                </span>
              </span>
            </div>
            <div className={styles.cardPercent}>{item.percent}</div>
            <div className={styles.cardBar}>
              <div
                className={item.barClass}
                style={{
                  width: barWidths[idx],
                  transition: `width ${barDurations[idx] / 1000}s`,
                }}
              ></div>
            </div>
            <div className={styles.cardScore}>Score: {item.score}</div>
          </div>
        ))}
      </div>
      <div className={styles.destaque}>
        <span>🚀</span> Sites Criados por Saulo Pavanello são até 7x mais rápidos!
      </div>
      <div className={styles.destaqueTexto}>
        Velocidade superior significa mais conversões, melhor SEO e clientes
        mais satisfeitos.
      </div>
    </section>
  );
};

export default Comparacao;
