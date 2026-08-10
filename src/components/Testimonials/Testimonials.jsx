"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight, FaQuoteLeft } from "react-icons/fa";
import styles from "./testimonials.module.css";
import data from "./testimonials.json";

const AUTOPLAY_MS = 6500;

function initials(name = "") {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

export default function Testimonials() {
  const reduce = useReducedMotion();
  const [[index, direction], setState] = useState([0, 0]);
  const [paused, setPaused] = useState(false);
  const regionRef = useRef(null);

  const count = data.length;
  const active = data[index];

  const go = useCallback(
    (dir) => {
      setState(([prev]) => [(prev + dir + count) % count, dir]);
    },
    [count],
  );

  const goTo = (nextIndex) => {
    setState(([prev]) => [nextIndex, nextIndex > prev ? 1 : -1]);
  };

  useEffect(() => {
    if (paused || reduce) return;
    const timer = setInterval(() => go(1), AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [paused, reduce, go]);

  const onKeyDown = (event) => {
    if (event.key === "ArrowLeft") go(-1);
    if (event.key === "ArrowRight") go(1);
  };

  const slideVariants = {
    enter: (dir) =>
      reduce ? { opacity: 0 } : { opacity: 0, x: dir > 0 ? 42 : -42 },
    center: { opacity: 1, x: 0 },
    exit: (dir) =>
      reduce ? { opacity: 0 } : { opacity: 0, x: dir > 0 ? -42 : 42 },
  };

  return (
    <section className={styles.section} id="depoimentos">
      <div className={styles.container}>
        <header className={styles.header}>
          <div>
            <span className={styles.eyebrow}>CLIENTES & PARCERIAS</span>
            <h2 className={styles.title}>
              O resultado também aparece no que <em>fica depois da entrega.</em>
            </h2>
          </div>
          <p className={styles.intro}>
            Tecnologia boa resolve o problema. Uma parceria boa deixa confiança,
            clareza e vontade de construir o próximo passo juntos.
          </p>
        </header>

        <div
          className={styles.stage}
          ref={regionRef}
          role="group"
          aria-roledescription="carrossel"
          aria-label="Depoimentos de clientes"
          tabIndex={0}
          onKeyDown={onKeyDown}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <div className={styles.viewport}>
            <AnimatePresence mode="wait" custom={direction} initial={false}>
              <motion.figure
                key={active.id}
                className={styles.card}
                custom={direction}
                variants={slideVariants}
                initial={false}
                animate="center"
                exit="exit"
                transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                drag={reduce ? false : "x"}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.16}
                onDragEnd={(event, info) => {
                  if (info.offset.x < -80) go(1);
                  else if (info.offset.x > 80) go(-1);
                }}
              >
                <div className={styles.quotePanel}>
                  <div className={styles.quoteTopline}>
                    <span className={styles.caseNumber}>
                      {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
                    </span>
                    <FaQuoteLeft className={styles.quoteIcon} aria-hidden="true" />
                  </div>

                  <blockquote className={styles.text}>{active.text}</blockquote>

                  <div className={styles.controls} aria-label="Navegação dos depoimentos">
                    <button
                      className={styles.navButton}
                      onClick={() => go(-1)}
                      aria-label="Depoimento anterior"
                    >
                      <FaArrowLeft aria-hidden="true" />
                    </button>
                    <button
                      className={styles.navButton}
                      onClick={() => go(1)}
                      aria-label="Próximo depoimento"
                    >
                      <FaArrowRight aria-hidden="true" />
                    </button>
                  </div>
                </div>

                <figcaption className={styles.authorPanel}>
                  <div className={styles.companyMark}>
                    <Image
                      src={active.logo}
                      alt={`Logo ${active.company}`}
                      width={150}
                      height={64}
                      className={styles.companyLogo}
                    />
                  </div>

                  <div className={styles.authorBlock}>
                    <span className={styles.avatar} aria-hidden="true">
                      {initials(active.person)}
                    </span>
                    <span className={styles.authorMeta}>
                      <strong className={styles.name}>{active.person}</strong>
                      <span className={styles.role}>{active.role}</span>
                      <span className={styles.company}>{active.company}</span>
                    </span>
                  </div>

                  <span className={styles.relationship}>Projeto entregue · parceria construída</span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>
        </div>

        <div className={styles.clientIndex}>
          <span className={styles.indexLabel}>Quem já confiou no meu trabalho</span>
          <div className={styles.thumbs} role="tablist" aria-label="Selecionar depoimento">
            {data.map((item, itemIndex) => {
              const isActive = itemIndex === index;
              return (
                <button
                  key={item.id}
                  className={`${styles.thumb} ${isActive ? styles.thumbActive : ""}`}
                  onClick={() => goTo(itemIndex)}
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`Depoimento de ${item.person}, ${item.company}`}
                >
                  <span className={styles.thumbNumber}>
                    {String(itemIndex + 1).padStart(2, "0")}
                  </span>
                  <Image
                    src={item.logo}
                    alt=""
                    width={92}
                    height={40}
                    className={styles.thumbLogo}
                  />
                  <span className={styles.thumbName}>{item.company}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
