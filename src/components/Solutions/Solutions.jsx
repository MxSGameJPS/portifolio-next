"use client";
import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import styles from "./solutions.module.css";
import data from "./solutions.json";
import { FaChevronDown } from "react-icons/fa";
import { PiCheckBold, PiArrowUpRightBold } from "react-icons/pi";

function trackSolutionCta(label) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", "cta_click", {
    event_category: "solucoes",
    event_label: label,
  });
}

export default function Solutions() {
  const reduce = useReducedMotion();
  const initialCategory = data[0];
  const [expandedCategory, setExpandedCategory] = useState(initialCategory?.id);
  const [selectedItem, setSelectedItem] = useState(initialCategory?.items?.[0] || null);

  const toggleCategory = (id) => {
    if (expandedCategory === id) return;
    setExpandedCategory(id);
    const category = data.find((c) => c.id === id);
    if (category?.items?.length) setSelectedItem(category.items[0]);
  };

  const panelContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.05, delayChildren: 0.06 } },
  };

  const panelItem = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 14 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className={styles.section} id="solucoes">
      <div className={styles.container}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>Como posso ajudar</span>
          <h2 className={styles.mainTitle}>
            Do problema ao software<br />
            <em>pronto para operar.</em>
          </h2>
          <p className={styles.subtitle}>
            Desenvolvo soluções digitais de ponta a ponta — da estratégia e
            arquitetura ao deploy e evolução do produto.
          </p>
        </header>

        <div className={styles.layout}>
          <div
            className={styles.menuContainer}
            role="tablist"
            aria-orientation="vertical"
            aria-label="Categorias de soluções"
          >
            {data.map((category) => {
              const isOpen = expandedCategory === category.id;
              return (
                <div key={category.id} className={styles.categoryGroup}>
                  <button
                    className={`${styles.categoryHeader} ${
                      isOpen ? styles.categoryHeaderActive : ""
                    }`}
                    onClick={() => toggleCategory(category.id)}
                    aria-expanded={isOpen}
                    aria-controls={`group-${category.id}`}
                  >
                    <span className={styles.categoryNumber}>{category.number}</span>
                    <span className={styles.categoryCopy}>
                      <strong className={styles.categoryTitle}>{category.title}</strong>
                      <span className={styles.categorySummary}>{category.summary}</span>
                    </span>
                    <FaChevronDown
                      className={`${styles.arrowIcon} ${isOpen ? styles.rotated : ""}`}
                      size={12}
                      aria-hidden="true"
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.ul
                        id={`group-${category.id}`}
                        className={styles.itemList}
                        role="list"
                        initial={false}
                        animate={reduce ? { opacity: 1 } : { height: "auto", opacity: 1 }}
                        exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                      >
                        {category.items.map((item) => {
                          const active = selectedItem === item;
                          return (
                            <li key={item.title}>
                              <button
                                className={`${styles.itemButton} ${active ? styles.activeItem : ""}`}
                                onClick={() => setSelectedItem(item)}
                                role="tab"
                                aria-selected={active}
                                aria-controls="solution-content-panel"
                              >
                                {active && (
                                  <motion.span
                                    layoutId="solIndicator"
                                    className={styles.itemIndicator}
                                    transition={{ type: "spring", stiffness: 420, damping: 32 }}
                                  />
                                )}
                                {item.name}
                              </button>
                            </li>
                          );
                        })}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <div className={styles.contentPanel} role="tabpanel" id="solution-content-panel">
            <AnimatePresence mode="wait" initial={false}>
              {selectedItem && (
                <motion.div
                  key={selectedItem.title}
                  variants={panelContainer}
                  initial={false}
                  animate="show"
                  exit={reduce ? { opacity: 0 } : { opacity: 0, y: 8 }}
                  className={styles.panelInner}
                >
                  <motion.span variants={panelItem} className={styles.panelEyebrow}>
                    Solução selecionada
                  </motion.span>

                  <motion.h3 variants={panelItem} className={styles.contentTitle}>
                    {selectedItem.title}
                  </motion.h3>

                  <motion.p variants={panelItem} className={styles.quote}>
                    {selectedItem.quote}
                  </motion.p>

                  <motion.p variants={panelItem} className={styles.description}>
                    {selectedItem.description}
                  </motion.p>

                  <motion.div variants={panelItem} className={styles.featureList}>
                    {selectedItem.features.map((feature) => (
                      <div key={feature} className={styles.featureItem}>
                        <span className={styles.featureCheck} aria-hidden="true">
                          <PiCheckBold size={12} />
                        </span>
                        {feature}
                      </div>
                    ))}
                  </motion.div>

                  <motion.a
                    variants={panelItem}
                    href="#contato"
                    className={styles.ctaButton}
                    onClick={() => trackSolutionCta(selectedItem.title)}
                  >
                    Conversar sobre o projeto
                    <PiArrowUpRightBold size={16} aria-hidden="true" />
                  </motion.a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
