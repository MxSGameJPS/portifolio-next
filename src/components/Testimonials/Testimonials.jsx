"use client";
import { useState, useEffect, useCallback } from "react";
import styles from "./testimonials.module.css";
import data from "./testimonials.json";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  // Responsive check
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 900) {
        setItemsPerPage(3);
      } else {
        setItemsPerPage(1);
      }
    };

    handleResize(); // Init
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % data.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  return (
    <section className={styles.section} id="depoimentos">
      <div className={styles.header}>
        <h2 className={styles.title}>
          O que falam de mim<span className={styles.dot}>.</span>
        </h2>

        <div className={styles.controls}>
          <button
            className={styles.navButton}
            onClick={prevSlide}
            aria-label="Anterior"
          >
            <FaChevronLeft size={24} aria-hidden="true" />
          </button>
          <button
            className={styles.navButton}
            onClick={nextSlide}
            aria-label="Próximo"
          >
            <FaChevronRight size={24} aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className={styles.carouselViewport}>
        <div
          className={styles.track}
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
          }}
        >
          {[...data, ...data].map((item, index) => {
            // Determine if this card is the "central"/active one
            // Mobile (1 item): The visible item is active (index === currentIndex)
            // Desktop (3 items): The middle item is active (index === currentIndex + 1)
            const isActive =
              index === currentIndex + (itemsPerPage > 1 ? 1 : 0);

            return (
              <div key={`${item.id}-${index}`} className={styles.cardContainer}>
                <div
                  className={`${styles.card} ${
                    isActive ? styles.activeCard : styles.inactiveCard
                  }`}
                >
                  <FaQuoteLeft
                    className={styles.quoteIcon}
                    aria-hidden="true"
                  />

                  <div className={styles.logoContainer}>
                    <Image
                      src={item.logo}
                      alt={`${item.company} Logo`}
                      width={120}
                      height={50}
                      className={styles.companyLogo}
                    />
                  </div>

                  <p className={styles.text}>&quot;{item.text}&quot;</p>

                  <div className={styles.author}>
                    <span className={styles.name}>{item.person}</span>
                    <span className={styles.role}>{item.role}</span>
                    <span className={styles.role}>{item.company}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
