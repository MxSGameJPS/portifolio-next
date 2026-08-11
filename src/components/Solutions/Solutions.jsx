"use client";

import { useState } from "react";
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
  const initialCategory = data[0];
  const [expandedCategory, setExpandedCategory] = useState(initialCategory?.id);
  const [selectedItem, setSelectedItem] = useState(initialCategory?.items?.[0] || null);

  const toggleCategory = (id) => {
    if (expandedCategory === id) return;
    setExpandedCategory(id);
    const category = data.find((item) => item.id === id);
    if (category?.items?.length) setSelectedItem(category.items[0]);
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
          <div className={styles.menuContainer} aria-label="Categorias de soluções">
            {data.map((category) => {
              const isOpen = expandedCategory === category.id;

              return (
                <div key={category.id} className={styles.categoryGroup}>
                  <button
                    type="button"
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

                  <ul
                    id={`group-${category.id}`}
                    className={styles.itemList}
                    hidden={!isOpen}
                  >
                    {category.items.map((item) => {
                      const active = selectedItem === item;

                      return (
                        <li key={item.title}>
                          <button
                            type="button"
                            className={`${styles.itemButton} ${
                              active ? styles.activeItem : ""
                            }`}
                            onClick={() => setSelectedItem(item)}
                            aria-pressed={active}
                          >
                            {active && (
                              <span className={styles.itemIndicator} aria-hidden="true" />
                            )}
                            {item.name}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>

          <div
            className={styles.contentPanel}
            role="region"
            aria-live="polite"
            aria-label={
              selectedItem
                ? `Detalhes da solução ${selectedItem.name}`
                : "Detalhes da solução"
            }
          >
            {selectedItem && (
              <div className={styles.panelInner} key={selectedItem.title}>
                <span className={styles.panelEyebrow}>Solução selecionada</span>

                <h3 className={styles.contentTitle}>{selectedItem.title}</h3>

                <p className={styles.quote}>{selectedItem.quote}</p>

                <p className={styles.description}>{selectedItem.description}</p>

                <div className={styles.featureList}>
                  {selectedItem.features.map((feature) => (
                    <div key={feature} className={styles.featureItem}>
                      <span className={styles.featureCheck} aria-hidden="true">
                        <PiCheckBold size={12} />
                      </span>
                      {feature}
                    </div>
                  ))}
                </div>

                <a
                  href="#contato"
                  className={styles.ctaButton}
                  onClick={() => trackSolutionCta(selectedItem.title)}
                >
                  Conversar sobre o projeto
                  <PiArrowUpRightBold size={16} aria-hidden="true" />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
