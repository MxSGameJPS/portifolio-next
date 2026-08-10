import { PiWhatsappLogoBold } from "react-icons/pi";
import TrackedAnchor from "../Analytics/TrackedAnchor";
import styles from "./floatingWhatsApp.module.css";

const WHATSAPP_URL =
  "https://wa.me/5551993392983?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20quero%20um%20or%C3%A7amento.";

export default function FloatingWhatsApp() {
  return (
    <TrackedAnchor
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.fab}
      eventLabel="float_whatsapp"
      aria-label="Falar no WhatsApp"
    >
      <span className={styles.pulse} aria-hidden="true" />
      <PiWhatsappLogoBold className={styles.icon} />
      <span className={styles.label}>Fale conosco</span>
    </TrackedAnchor>
  );
}
