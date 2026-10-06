import Link from "next/link";
import { PiArrowUpRightBold } from "react-icons/pi";
import styles from "./LocalPresence.module.css";

const cities = [
  "Dois Irmãos",
  "Ivoti",
  "Novo Hamburgo",
  "Estância Velha",
  "Sapiranga",
  "Campo Bom",
  "São Leopoldo",
];

const services = [
  { label: "Criação de Sites", href: "/criacao-de-sites" },
  { label: "Landing Pages", href: "/landing-pages" },
  { label: "Sistemas Empresariais", href: "/web-apps" },
  { label: "Lojas Virtuais", href: "/ecommerce" },
  { label: "Aplicativos", href: "/mobile" },
];

export default function LocalPresence() {
  return (
    <section className={styles.section} aria-labelledby="local-presence-title">
      <div className={styles.container}>
        <div className={styles.heading}>
          <p className={styles.eyebrow}>DOIS IRMÃOS · VALE DOS SINOS · BRASIL</p>
          <h2 id="local-presence-title">
            Engenharia de software perto de quem está na região — e disponível para todo o Brasil.
          </h2>
        </div>

        <div className={styles.contentGrid}>
          <div className={styles.copy}>
            <p>
              Trabalho a partir de Dois Irmãos, no Rio Grande do Sul, desenvolvendo
              sites profissionais, sistemas empresariais, lojas virtuais e aplicativos.
              Atendo negócios locais do Vale dos Sinos e projetos de qualquer região
              do Brasil com acompanhamento remoto do briefing ao lançamento.
            </p>
            <p>
              Para empresas próximas, a vantagem é ter um profissional da região
              responsável diretamente pelo projeto. Para clientes de outras cidades,
              o processo continua simples: reuniões online, acompanhamento contínuo e
              entrega completa em produção.
            </p>
          </div>

          <div className={styles.region}>
            <p className={styles.regionLabel}>Atendimento próximo na região</p>
            <ul className={styles.cityList}>
              {cities.map((city) => (
                <li key={city}>{city}</li>
              ))}
            </ul>
          </div>
        </div>

        <nav className={styles.serviceLinks} aria-label="Serviços de desenvolvimento">
          {services.map((service) => (
            <Link prefetch={false} key={service.href} href={service.href} className={styles.serviceLink}>
              <span>{service.label}</span>
              <PiArrowUpRightBold aria-hidden="true" />
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
