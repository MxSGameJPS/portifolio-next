"use client";
import { useState } from "react";
import styles from "./solutions.module.css";
import data from "./solutions.json";
import { FaChevronDown } from "react-icons/fa";
import { PiArrowUpRightBold } from "react-icons/pi";

export default function Solutions() {
  // Estado para controlar qual categoria está expandida
  const [expandedCategory, setExpandedCategory] = useState("web"); // Começa com web aberto

  // Estado para controlar qual item específico está selecionado para exibição
  // Inicializa com o primeiro item da categoria 'web' para evitar efeito na montagem
  const [selectedItem, setSelectedItem] = useState(() => {
    const category = data.find((c) => c.id === "web");
    return category?.items?.[0] || null;
  });

  const toggleCategory = (id) => {
    if (expandedCategory === id) {
      // Se clicar no que já está aberto, não fecha, apenas mantem (estilo accordion unico)
      return;
    }
    setExpandedCategory(id);

    // Ao trocar de categoria, seleciona automaticamente o primeiro item dela
    const category = data.find((c) => c.id === id);
    if (category && category.items.length > 0) {
      setSelectedItem(category.items[0]);
    }
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <section className={styles.section} id="solucoes">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.mainTitle}>
            Nossas Soluções<span className={styles.dot}>.</span>
          </h2>
        </div>

        <div className={styles.layout}>
          {/* MENU ESQUERDO */}
          <div
            className={styles.menuContainer}
            role="tablist"
            aria-orientation="vertical"
            aria-label="Categorias de soluções"
          >
            {data.map((category) => (
              <div
                key={category.id}
                className={`${styles.categoryGroup} ${
                  expandedCategory === category.id ? styles.active : ""
                }`}
              >
                <button
                  className={`${styles.categoryHeader} ${
                    expandedCategory === category.id
                      ? styles.categoryHeaderActive
                      : ""
                  }`}
                  onClick={() => toggleCategory(category.id)}
                  aria-expanded={expandedCategory === category.id}
                  aria-controls={`group-${category.id}`}
                  style={{ width: "100%", border: "none", background: "none" }}
                >
                  <span>
                    {category.number}. {category.title}
                  </span>
                  <FaChevronDown
                    className={`${styles.arrowIcon} ${
                      expandedCategory === category.id ? styles.rotated : ""
                    }`}
                    size={14}
                    aria-hidden="true"
                  />
                </button>

                <ul
                  id={`group-${category.id}`}
                  className={`${styles.itemList} ${
                    expandedCategory === category.id ? styles.open : ""
                  }`}
                  role="list"
                >
                  {category.items.map((item, index) => (
                    <li key={index} role="presentation">
                      <button
                        className={`${styles.itemButton} ${
                          selectedItem === item ? styles.activeItem : ""
                        }`}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleItemClick(item);
                        }}
                        role="tab"
                        aria-selected={selectedItem === item}
                        aria-controls="solution-content-panel"
                      >
                        {item.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CONTEÚDO DIREITO */}
          <div
            className={styles.contentPanel}
            role="tabpanel"
            id="solution-content-panel"
          >
            {selectedItem && (
              <>
                <h3 className={styles.contentTitle}>{selectedItem.title}</h3>

                {/* Divisor Decorativo */}
                <div className={styles.dividerContainer}>
                  ---{" "}
                  <span style={{ margin: "0 10px", fontSize: "1.5rem" }}>
                    ✦
                  </span>{" "}
                  ---
                </div>

                <p className={styles.quote}>{selectedItem.quote}</p>

                <p className={styles.description}>{selectedItem.description}</p>

                <div className={styles.featureList}>
                  {selectedItem.features.map((feature, idx) => (
                    <div key={idx} className={styles.featureItem}>
                      <span className={styles.featureDot} aria-hidden="true">
                        •
                      </span>
                      {feature}
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
