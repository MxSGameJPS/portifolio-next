"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import styles from "./HomePopup.module.css";
import popupImg from "../../../public/popup.png";

export default function HomePopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // Check localStorage to see if popup has been shown in this session (or ever)
    const hasSeenPopup = sessionStorage.getItem("hasSeenPopup");

    if (!hasSeenPopup) {
      // Delay opening by 2 seconds for better UX
      const timer = setTimeout(() => {
        setShouldRender(true);
        // Small delay to allow render before opacity transition
        setTimeout(() => setIsVisible(true), 10);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    // Wait for animation to finish before unmounting
    setTimeout(() => setShouldRender(false), 300);
    // Mark as seen for this session
    sessionStorage.setItem("hasSeenPopup", "true");
  };

  if (!shouldRender) return null;

  return (
    <div
      className={`${styles.overlay} ${isVisible ? styles.visible : ""}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="popup-title"
    >
      <div className={styles.popupContent}>
        <button
          className={styles.closeButton}
          onClick={handleClose}
          aria-label="Fechar popup"
        >
          <IoClose />
        </button>

        <div className={styles.imageWrapper}>
          {/* Link wrapper to make the whole image clickable */}
          <Link
            href="https://wa.me/5551993392983"
            target="_blank"
            className={styles.ctaLink}
            onClick={handleClose}
          >
            <Image
              src={popupImg}
              alt="Promoção exclusiva do mês"
              className={styles.popupImage}
              priority
              placeholder="blur"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
