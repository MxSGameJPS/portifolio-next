"use client";
import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";
import styles from "./solutions.module.css";
import data from "./solutions.json";
import { FaChevronDown } from "react-icons/fa";
import { PiCheckBold, PiArrowUpRightBold } from "react-icons/pi";

// Tracks intent when a visitor asks for a specific solution
function trackSolutionCta(label) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", "cta_click", {
    event_category: "solucoes",
    event_label: label,
  });
}

export default function Solutions() {
  const reduce = useReducedMotion();

  // Which category accordion is expanded (one open at a time)
  const [expandedCategory, setExpandedCategory] = useState("web");

  // Which item is shown in the right-hand content panel
  const [selectedItem, setSelectedItem] = useState(() => {
    const category = data.find((c) => c.id === "web");
    return category?.items?.[0] || null;
  });

  const toggleCategory = (id) => {
    if (expandedCategory === id) return; // single-accordion: clicking open does nothing
    setExpandedCategory(id);
    const category = data.find((c) => c.id === id);
    if (category && category.items.length > 0) {
      setSelectedItem(category.items[0]);
    }
  };

  const handleItemClick = (item) => setSelectedItem(item);

  // Stagger the feature rows as the panel swaps in
  const panelContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.05, delayChildren: 0.08 } },
  };
  const panelItem = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 14 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className={styles.section} id="solucoes">
      <div className={styles.container}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>O que entregamos</span>
          <h2 className={styles.mainTitle}>
            Soluções sob medida<span className={styles.dot}>.</span>
          </h2>
          <p className={styles.subtitle}>
            Escolha uma frente e veja exatamente como resolvo o problema — do
            protótipo ao deploy em produção.
          </p>
        </header>

        <div className={styles.layout}>
          {/* MENU ESQUERDO — rail de categorias */}
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
                    <span className={styles.categoryNumber}>
                      {category.number}
                    </span>
                    <span className={styles.categoryTitle}>
                      {category.title}
                    </span>
                    <FaChevronDown
                      className={`${styles.arrowIcon} ${
                        isOpen ? styles.rotated : ""
                      }`}
                      size={13}
                      aria-hidden="true"
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.ul
                        id={`group-${category.id}`}
                        className={styles.itemList}
                        role="list"
                        initial={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                        animate={
                          reduce
                            ? { opacity: 1 }
                            : { height: "auto", opacity: 1 }
                        }
                        exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      >
                        {category.items.map((item, index) => {
                          const active = selectedItem === item;
                          return (
                            <li key={index} role="presentation">
                              <button
                                className={`${styles.itemButton} ${
                                  active ? styles.activeItem : ""
                                }`}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleItemClick(item);
                                }}
                                role="tab"
                                aria-selected={active}
                                aria-controls="solution-content-panel"
                              >
                                {active && (
                                  <motion.span
                                    layoutId="solIndicator"
                                    className={styles.itemIndicator}
                                    transition={{
                                      type: "spring",
                                      stiffness: 420,
                                      damping: 32,
                                    }}
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

          {/* CONTEÚDO DIREITO — painel animado */}
          <div
            className={styles.contentPanel}
            role="tabpanel"
            id="solution-content-panel"
          >
            <AnimatePresence mode="wait">
              {selectedItem && (
                <motion.div
                  key={selectedItem.title}
                  variants={panelContainer}
                  initial="hidden"
                  animate="show"
                  exit={reduce ? { opacity: 0 } : { opacity: 0, y: 8 }}
                >
                  <motion.h3 variants={panelItem} className={styles.contentTitle}>
                    {selectedItem.title}
                  </motion.h3>

                  <motion.p variants={panelItem} className={styles.quote}>
                    <span className={styles.quoteMark} aria-hidden="true">
                      &ldquo;
                    </span>
                    {selectedItem.quote.replace(/[“”"]/g, "")}
                  </motion.p>

                  <motion.p
                    variants={panelItem}
                    className={styles.description}
                  >
                    {selectedItem.description}
                  </motion.p>

                  <motion.div
                    variants={panelItem}
                    className={styles.featureList}
                  >
                    {selectedItem.features.map((feature, idx) => (
                      <div key={idx} className={styles.featureItem}>
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
                    Quero esta solução
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
