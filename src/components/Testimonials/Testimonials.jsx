"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";
import styles from "./testimonials.module.css";
import data from "./testimonials.json";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight, FaStar, FaQuoteLeft } from "react-icons/fa";

const AUTOPLAY_MS = 6500;

function initials(name = "") {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export default function Testimonials() {
  const reduce = useReducedMotion();
  const [[index, direction], setState] = useState([0, 0]);
  const [paused, setPaused] = useState(false);

  const count = data.length;
  const active = data[index];

  const go = useCallback(
    (dir) => {
      setState(([prev]) => [(prev + dir + count) % count, dir]);
    },
    [count],
  );

  const goTo = (i) => {
    setState(([prev]) => [i, i > prev ? 1 : -1]);
  };

  // Autoplay — pauses on hover/focus and when reduced motion is requested
  useEffect(() => {
    if (paused || reduce) return;
    const t = setInterval(() => go(1), AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [paused, reduce, go]);

  // Keyboard nav within the region
  const regionRef = useRef(null);
  const onKeyDown = (e) => {
    if (e.key === "ArrowLeft") go(-1);
    if (e.key === "ArrowRight") go(1);
  };

  const slideVariants = {
    enter: (dir) =>
      reduce ? { opacity: 0 } : { opacity: 0, x: dir > 0 ? 60 : -60 },
    center: { opacity: 1, x: 0 },
    exit: (dir) =>
      reduce ? { opacity: 0 } : { opacity: 0, x: dir > 0 ? -60 : 60 },
  };

  return (
    <section className={styles.section} id="depoimentos">
      <div className={styles.container}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>Depoimentos</span>
          <h2 className={styles.title}>
            O que falam de mim<span className={styles.dot}>.</span>
          </h2>
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
          <button
            className={`${styles.navButton} ${styles.navLeft}`}
            onClick={() => go(-1)}
            aria-label="Depoimento anterior"
          >
            <FaChevronLeft size={18} aria-hidden="true" />
          </button>

          <div className={styles.viewport}>
            <AnimatePresence mode="wait" custom={direction}>
              <motion.figure
                key={active.id}
                className={styles.card}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                drag={reduce ? false : "x"}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.18}
                onDragEnd={(e, info) => {
                  if (info.offset.x < -80) go(1);
                  else if (info.offset.x > 80) go(-1);
                }}
              >
                <FaQuoteLeft className={styles.quoteIcon} aria-hidden="true" />

                <div className={styles.stars} aria-label="5 de 5 estrelas">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar key={i} aria-hidden="true" />
                  ))}
                </div>

                <blockquote className={styles.text}>{active.text}</blockquote>

                <figcaption className={styles.author}>
                  <span className={styles.avatar} aria-hidden="true">
                    {initials(active.person)}
                  </span>
                  <span className={styles.authorMeta}>
                    <span className={styles.name}>{active.person}</span>
                    <span className={styles.role}>
                      {active.role} · {active.company}
                    </span>
                  </span>
                  <span className={styles.logoWrap}>
                    <Image
                      src={active.logo}
                      alt={`Logo ${active.company}`}
                      width={110}
                      height={44}
                      className={styles.companyLogo}
                    />
                  </span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <button
            className={`${styles.navButton} ${styles.navRight}`}
            onClick={() => go(1)}
            aria-label="Próximo depoimento"
          >
            <FaChevronRight size={18} aria-hidden="true" />
          </button>
        </div>

        {/* Wall of clients — clicking a logo jumps to that testimonial */}
        <div className={styles.thumbs} role="tablist" aria-label="Selecionar depoimento">
          {data.map((item, i) => {
            const isActive = i === index;
            return (
              <button
                key={item.id}
                className={`${styles.thumb} ${isActive ? styles.thumbActive : ""}`}
                onClick={() => goTo(i)}
                role="tab"
                aria-selected={isActive}
                aria-label={`Depoimento de ${item.person}, ${item.company}`}
              >
                <Image
                  src={item.logo}
                  alt=""
                  width={84}
                  height={34}
                  className={styles.thumbLogo}
                />
                {isActive && (
                  <motion.span
                    layoutId="thumbRing"
                    className={styles.thumbRing}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
