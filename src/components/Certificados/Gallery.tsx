"use client";

import { useState } from "react";
import styles from "./Gallery.module.css";
import Image from "next/image";

// Lista estática baseada na pasta public/certificados
const certificados = [
  {
    file: "C# APLICANDO ORIENTAÇÃO A OBJETOS.png",
    title: "C# - Aplicando Orientação a Objetos",
  },
  { file: "html,css para web.png", title: "HTML e CSS para Web" },
  { file: "ProFigma Ui Designer.png", title: "ProFigma UI Designer" },
  { file: "Captura de tela 2025-09-13 180536.png", title: "HTML e CSS: Ambiente de Desenvolvimento, Estrutura de arquivos e Tags" },
  { file: "Captura de tela 2025-09-13 180559.png", title: "JavaScript: Validando Formulários" },
  { file: "Captura de tela 2025-09-13 180628.png", title: "Lógica de Programação: Explore Funções e Listas" },
  { file: "Captura de tela 2025-09-13 180652.png", title: "Lógica de Programação: Praticando com Desafios" },
  { file: "Captura de tela 2025-09-13 180712.png", title: "Lógica de Programação: Mergulhe em Programação com JavaScript" },
  { file: "Captura de tela 2025-09-13 180731.png", title: "Explore REACT com JavaScript" },
  { file: "Captura de tela 2025-09-13 180752.png", title: "React Native: Desenvolva seu Primeiro APP" },
  { file: "Captura de tela 2025-09-13 180807.png", title: "Desenvolvimento com TypeScript" },
  { file: "Captura de tela 2025-09-13 180857.png", title: "Iniciante em Programação" },
  { file: "Captura de tela 2025-09-13 180921.png", title: "HTML e CSS para Projetos WEB" },
  { file: "Captura de tela 2025-09-13 180947.png", title: "HTML e CSS para Projetos WEB" },
  { file: "Captura de tela 2025-09-13 181310.png", title: "Visualização de dados e Design de Dashboards" },
  { file: "Captura de tela 2025-09-13 181556.png", title: "Desenvolvimento Front-End" },
  { file: "Captura de tela 2025-09-13 181843.png", title: "REACT - JSX e Hooks" },
  { file: "Captura de tela 2025-09-13 182000.png", title: "REACT com TypeScript" },
];

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState<number | null>(null);

  const openImage = (index: number) => {
    setCurrent(index);
    setOpen(true);
  };

  const close = () => {
    setOpen(false);
    setCurrent(null);
  };

  return (
    <>
      <div className={styles.grid}>
        {certificados.map((c, i) => (
          <div
            key={c.file}
            className={styles.thumb}
            onClick={() => openImage(i)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter") openImage(i);
            }}
          >
            <Image
              src={`/certificados/${encodeURIComponent(c.file)}`}
              alt={c.title}
              width={400}
              height={240}
              style={{ objectFit: "cover", borderRadius: 4 }}
            />
            <div className={styles.thumbTitle}>{c.title}</div>
          </div>
        ))}
      </div>

      {open && current !== null && (
        <div className={styles.modalBackdrop} onClick={close}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeBtn} onClick={close}>
              Fechar
            </button>
            <Image
              src={`/certificados/${encodeURIComponent(
                certificados[current].file
              )}`}
              alt={certificados[current].title}
              width={1200}
              height={900}
              className={styles.modalImage}
            />
          </div>
        </div>
      )}
    </>
  );
}
