import Image from "next/image";
import Link from "next/link";
import { PiArrowUpRightBold } from "react-icons/pi";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Contact from "../../components/Contact/Contact";
import styles from "./service.module.css";

export default function ServicePage({
  eyebrow,
  headline,
  subheadline,
  description,
  ctaPrimary = "Conversar sobre o projeto",
  ctaSecondary = { href: "/portfolio", label: "Ver projetos" },
  quote,
  infoParagraphs = [],
  featuresEyebrow = "O QUE EU CONSTRUO",
  featuresHeading = "Uma solução desenhada para a operação real.",
  features = [],
  benefits = [],
  diffEyebrow = "DECISÕES DE PROJETO",
  diffHeading = "O que muda quando a solução é construída sob medida.",
  differentials = [],
  methodEyebrow = "PROCESSO",
  methodHeading = "Da necessidade ao software em produção.",
  methodSubtitle,
  methodSteps = [],
  technologies = [],
  relatedCase = null,
  faqEyebrow = "DÚVIDAS FREQUENTES",
  faqHeading = "Antes de começar, vale alinhar alguns pontos.",
  faqItems = [],
}) {
  return (
    <div className={styles.pageWrapper}>
      <Header />

      <main>
        <section className={styles.heroSection}>
          <div className={styles.heroTexture} aria-hidden="true" />
          <div className={styles.heroContainer}>
            <p className={styles.eyebrow}>{eyebrow}</p>

            <div className={styles.heroGrid}>
              <div>
                <h1 className={styles.headline}>{headline}</h1>
                {subheadline && <p className={styles.subheadline}>{subheadline}</p>}
              </div>

              <div className={styles.heroAside}>
                <p>{description}</p>
                <div className={styles.heroActions}>
                  <a href="#contato" className={styles.primaryAction}>
                    {ctaPrimary} <PiArrowUpRightBold aria-hidden="true" />
                  </a>
                  {ctaSecondary && (
                    <Link href={ctaSecondary.href} className={styles.secondaryAction}>
                      {ctaSecondary.label}
                    </Link>
                  )}
                </div>
              </div>
            </div>

            <div className={styles.heroFacts} aria-label="Como o projeto é conduzido">
              <div>
                <strong>Contexto → solução</strong>
                <span>arquitetura definida a partir do problema</span>
              </div>
              <div>
                <strong>Produto sob medida</strong>
                <span>sem depender de template genérico</span>
              </div>
              <div>
                <strong>Briefing → produção</strong>
                <span>uma visão técnica de ponta a ponta</span>
              </div>
            </div>
          </div>
        </section>

        {(quote || infoParagraphs.length > 0) && (
          <section className={styles.contextSection}>
            <div className={styles.container}>
              <div className={styles.contextGrid}>
                <div className={styles.contextLabel}>
                  <p className={styles.eyebrow}>CONTEXTO</p>
                  <span>01</span>
                </div>

                <div className={styles.contextLead}>
                  {quote && <h2>{quote}</h2>}
                </div>

                <div className={styles.contextCopy}>
                  {infoParagraphs.map((paragraph, index) => (
                    <p key={`${paragraph}-${index}`}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {features.length > 0 && (
          <section className={styles.featuresSection}>
            <div className={styles.container}>
              <div className={styles.sectionHeader}>
                <p className={styles.eyebrow}>{featuresEyebrow}</p>
                <h2>{featuresHeading}</h2>
              </div>

              <div className={styles.featureList}>
                {features.map((feature, index) => (
                  <article key={`${feature.title}-${index}`} className={styles.featureItem}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {benefits.length > 0 && (
          <section className={styles.benefitsSection}>
            <div className={styles.container}>
              <p className={styles.eyebrowLight}>O QUE FICA PARA O NEGÓCIO</p>
              <div className={styles.benefitsGrid}>
                {benefits.slice(0, 3).map((benefit, index) => (
                  <article key={`${benefit.text}-${index}`} className={styles.benefitItem}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <p>{benefit.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {differentials.length > 0 && (
          <section className={styles.differentialsSection}>
            <div className={styles.container}>
              <div className={styles.sectionHeaderSplit}>
                <p className={styles.eyebrow}>{diffEyebrow}</p>
                <h2>{diffHeading}</h2>
              </div>

              <div className={styles.differentialsGrid}>
                {differentials.map((item, index) => (
                  <article key={`${item.title}-${index}`} className={styles.differentialItem}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {methodSteps.length > 0 && (
          <section className={styles.methodSection}>
            <div className={styles.container}>
              <div className={styles.methodHeader}>
                <div>
                  <p className={styles.eyebrowLight}>{methodEyebrow}</p>
                  <h2>{methodHeading}</h2>
                </div>
                {methodSubtitle && <p>{methodSubtitle}</p>}
              </div>

              <ol className={styles.methodList}>
                {methodSteps.map((step, index) => (
                  <li key={`${step.title}-${index}`} className={styles.methodItem}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        )}

        {technologies.length > 0 && (
          <section className={styles.stackSection}>
            <div className={styles.container}>
              <div className={styles.stackGrid}>
                <div>
                  <p className={styles.eyebrow}>TECNOLOGIA</p>
                  <h2>A stack acompanha o produto — não o contrário.</h2>
                </div>
                <div className={styles.techList}>
                  {technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {relatedCase && (
          <section className={styles.caseSection}>
            <div className={styles.container}>
              <div className={styles.caseHeader}>
                <p className={styles.eyebrow}>CASE RELACIONADO</p>
                <h2>Veja essa competência aplicada em um produto real.</h2>
              </div>

              <Link href={relatedCase.href} className={styles.caseCard}>
                <div className={styles.caseMedia}>
                  <Image
                    src={relatedCase.image}
                    alt={`Interface do projeto ${relatedCase.name}`}
                    fill
                    sizes="(max-width: 800px) 100vw, 58vw"
                    className={styles.caseImage}
                  />
                </div>
                <div className={styles.caseCopy}>
                  <p>{relatedCase.category}</p>
                  <h3>{relatedCase.name}</h3>
                  <span>
                    Ver case completo <PiArrowUpRightBold aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </div>
          </section>
        )}

        {faqItems.length > 0 && (
          <section className={styles.faqSection}>
            <div className={styles.container}>
              <div className={styles.sectionHeaderSplit}>
                <p className={styles.eyebrow}>{faqEyebrow}</p>
                <h2>{faqHeading}</h2>
              </div>

              <div className={styles.faqList}>
                {faqItems.map((item, index) => (
                  <details key={`${item.question}-${index}`} className={styles.faqItem}>
                    <summary>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <strong>{item.question}</strong>
                      <i aria-hidden="true">+</i>
                    </summary>
                    <p>{item.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

        <Contact />
      </main>

      <Footer />
    </div>
  );
}
