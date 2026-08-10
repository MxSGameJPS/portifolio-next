import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Contact from "../../components/Contact/Contact";
import styles from "./page.module.css";
import {
  PiArrowUpRightBold,
  PiEnvelopeSimpleBold,
  PiLinkedinLogoBold,
  PiWhatsappLogoBold,
} from "react-icons/pi";

const channels = [
  {
    icon: PiWhatsappLogoBold,
    label: "WhatsApp",
    value: "Conversa direta",
    href: "https://wa.me/5551993392983?text=Ol%C3%A1%2C%20Saulo!%20Vim%20pelo%20seu%20portf%C3%B3lio%20e%20quero%20conversar%20sobre%20um%20projeto.",
    external: true,
  },
  {
    icon: PiEnvelopeSimpleBold,
    label: "E-mail",
    value: "contato@saulopavanello.com.br",
    href: "mailto:contato@saulopavanello.com.br",
    external: false,
  },
  {
    icon: PiLinkedinLogoBold,
    label: "LinkedIn",
    value: "Conexão profissional",
    href: "https://www.linkedin.com/in/saulopavanello/",
    external: true,
  },
];

export default function ContactPage() {
  return (
    <div className={styles.pageWrapper}>
      <Header />

      <main>
        <section className={styles.heroSection}>
          <div className={styles.heroTexture} aria-hidden="true" />
          <div className={styles.heroContainer}>
            <p className={styles.eyebrow}>CONTATO</p>

            <div className={styles.heroGrid}>
              <h1 className={styles.headline}>
                Se existe um problema para resolver, a conversa começa aqui.
              </h1>

              <div className={styles.heroAside}>
                <p>
                  Me conte o que você precisa construir, melhorar ou colocar em
                  operação. Eu avalio o contexto com você e ajudo a transformar a
                  necessidade em um caminho técnico viável.
                </p>
                <p>
                  Você fala diretamente comigo — do primeiro contato às decisões de
                  produto e desenvolvimento.
                </p>
              </div>
            </div>

            <div className={styles.channels} aria-label="Canais de contato">
              {channels.map((channel) => {
                const Icon = channel.icon;

                return (
                  <a
                    key={channel.label}
                    href={channel.href}
                    target={channel.external ? "_blank" : undefined}
                    rel={channel.external ? "noopener noreferrer" : undefined}
                    className={styles.channelLink}
                  >
                    <span className={styles.channelIcon} aria-hidden="true">
                      <Icon />
                    </span>
                    <span className={styles.channelCopy}>
                      <small>{channel.label}</small>
                      <strong>{channel.value}</strong>
                    </span>
                    <PiArrowUpRightBold className={styles.channelArrow} aria-hidden="true" />
                  </a>
                );
              })}
            </div>

            <div className={styles.heroFacts}>
              <div>
                <strong>Direto comigo</strong>
                <span>sem repasse para atendimento comercial</span>
              </div>
              <div>
                <strong>Dois Irmãos · RS</strong>
                <span>atendimento remoto para todo o Brasil</span>
              </div>
              <div>
                <strong>Novo ou em andamento</strong>
                <span>produto, sistema, app, API ou operação digital</span>
              </div>
            </div>
          </div>
        </section>

        <div className={styles.contactWrapper}>
          <Contact mode="form" />
        </div>
      </main>

      <Footer />
    </div>
  );
}
