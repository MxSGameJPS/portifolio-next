import Image from "next/image";
import { PiArrowUpRightBold } from "react-icons/pi";
import styles from "./projectCard.module.css";

export default function ProjectCard({
  imageSrc,
  title,
  altText,
  category,
  description,
  tech = [],
  featured = false,
}) {
  return (
    <article className={`${styles.card} ${featured ? styles.featured : ""}`}>
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={altText || title}
          fill
          sizes={featured ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
          className={styles.image}
        />
      ) : (
        <div className={styles.placeholder} aria-hidden="true">
          <span>{title}</span>
        </div>
      )}

      <div className={styles.scrim} aria-hidden="true" />

      <div className={styles.content}>
        {category && <span className={styles.category}>{category}</span>}
        <h3 className={styles.title}>{title}</h3>

        {featured && description && (
          <p className={styles.description}>{description}</p>
        )}

        {tech.length > 0 && (
          <ul className={styles.techRow}>
            {tech.map((t) => (
              <li key={t} className={styles.chip}>
                {t}
              </li>
            ))}
          </ul>
        )}

        <span className={styles.cta}>
          {featured ? "Ver case" : "Ver projeto"} <PiArrowUpRightBold />
        </span>
      </div>
    </article>
  );
}
