import Image from "next/image";
import styles from "./projectCard.module.css";

export default function ProjectCard({ imageSrc, title, altText }) {
  return (
    <div className={styles.card}>
      <Image
        src={imageSrc}
        alt={altText || title}
        width={600}
        height={400}
        className={styles.image}
      />
      <div className={styles.overlay}>
        <h3 className={styles.title}>{title}</h3>
      </div>
    </div>
  );
}
