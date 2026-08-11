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
  const responsiveSizes = featured
    ? "(max-width: 768px) 100vw, 1200px"
    : "(max-width: 768px) 100vw, 50vw";

  return (
    <article className={`${styles.card} ${featured ? styles.featured : ""}`}>
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={altText || title}
          fill
          sizes={responsiveSizes}
          quality={60}
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
            {tech.map((technology) => (
              <li key={technology} className={styles.chip}>
                {technology}
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
