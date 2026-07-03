"use client";

import { useId, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { PiArrowUpRightBold, PiCaretDownBold } from "react-icons/pi";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Contact from "../../components/Contact/Contact";
import styles from "./service.module.css";

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

// Accessible, height-animated collapsible panel shared by Features and FAQ.
function Collapsible({ open, id, children, reduce }) {
  return (
    <AnimatePresence initial={false}>
      {open && (
        <motion.div
          id={id}
          role="region"
          initial={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
          animate={reduce ? { opacity: 1 } : { height: "auto", opacity: 1 }}
          exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          style={{ overflow: "hidden" }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/**
 * Shared layout for every /service landing page. Pass content via props;
 * structure, motion, accessibility and styling stay identical across routes.
 */
export default function ServicePage({
  eyebrow,
  headline,
  subheadline,
  description,
  heroImage,
  ctaPrimary = "Solicitar consultoria",
  ctaNote = "Consultoria gratuita · resposta em até 24h · sem compromisso",
  ctaSecondary = { href: "/portfolio", label: "Ver projetos" },
  trust = [],
  quote,
  infoParagraphs = [],
  featuresEyebrow = "O que entregamos",
  featuresHeading,
  features = [],
  benefits = [],
  ctaMid = "Quero uma proposta",
  diffEyebrow = "Por que nós",
  diffHeading,
  differentials = [],
  methodEyebrow = "Como trabalhamos",
  methodHeading,
  methodSubtitle,
  methodSteps = [],
  faqEyebrow = "Dúvidas frequentes",
  faqHeading,
  faqItems = [],
}) {
  const [openIndex, setOpenIndex] = useState(null);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const reduce = useReducedMotion();
  const uid = useId();

  const toggleFeature = (i) => setOpenIndex(openIndex === i ? null : i);
  const toggleFaq = (i) => setOpenFaqIndex(openFaqIndex === i ? null : i);

  return (
    <div className={styles.pageWrapper}>
      <Header />

      <main>
        {/* HERO */}
        <section className={styles.heroSection}>
          <div className={styles.heroGrid} aria-hidden="true" />
          <div className={styles.container}>
            <motion.div
              className={styles.content}
              variants={reveal}
              initial="hidden"
              animate="show"
            >
              {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
              <h1 className={styles.headline}>{headline}</h1>
              <h2 className={styles.subHeadline}>{subheadline}</h2>
              <p className={styles.description}>{description}</p>

              <div className={styles.heroActions}>
                <a href="#contato" className={styles.ctaButton}>
                  {ctaPrimary} <PiArrowUpRightBold />
                </a>
                {ctaSecondary && (
                  <Link href={ctaSecondary.href} className={styles.ctaGhost}>
                    {ctaSecondary.label}
                  </Link>
                )}
              </div>
              {ctaNote && <p className={styles.ctaNote}>{ctaNote}</p>}

              {trust.length > 0 && (
                <ul className={styles.trustRow}>
                  {trust.map((t) => (
                    <li key={t.label} className={styles.trustItem}>
                      <span className={styles.trustValue}>{t.value}</span>
                      <span className={styles.trustLabel}>{t.label}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>

            {heroImage && (
              <motion.div
                className={styles.imageContainer}
                initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.94 }}
                animate={reduce ? { opacity: 1 } : { opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image
                  src={heroImage.src}
                  alt={heroImage.alt}
                  width={520}
                  height={520}
                  className={styles.heroImage}
                  priority
                />
              </motion.div>
            )}
          </div>
        </section>

        {/* INFO */}
        {(quote || infoParagraphs.length > 0) && (
          <section className={styles.infoSection}>
            <motion.div
              className={styles.infoContainer}
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
            >
              <div className={styles.quoteCard}>
                <span className={styles.quoteIcon}>&ldquo;</span>
                <p className={styles.quoteText}>{quote}</p>
              </div>

              <div className={styles.infoContent}>
                {infoParagraphs.map((p, i) => (
                  <p key={i} className={styles.infoParagraph}>
                    {p}
                  </p>
                ))}
              </div>
            </motion.div>
          </section>
        )}

        {/* FEATURES */}
        {features.length > 0 && (
          <section className={styles.featuresSection}>
            <div className={styles.featuresContainer}>
              <div className={styles.sectionHead}>
                {featuresEyebrow && (
                  <span className={styles.eyebrowDark}>{featuresEyebrow}</span>
                )}
                <h2 className={styles.sectionHeading}>
                  {featuresHeading}
                  <span className={styles.dot}>.</span>
                </h2>
              </div>

              <div className={styles.featuresList}>
                {features.map((feature, index) => {
                  const isOpen = openIndex === index;
                  const panelId = `${uid}-feat-${index}`;
                  return (
                    <div key={index} className={styles.featureWrapper}>
                      <button
                        type="button"
                        className={`${styles.featureItem} ${isOpen ? styles.active : ""}`}
                        onClick={() => toggleFeature(index)}
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                      >
                        <span className={styles.featureText}>{feature.title}</span>
                        <PiCaretDownBold
                          className={`${styles.featureIcon} ${isOpen ? styles.rotate : ""}`}
                          aria-hidden="true"
                        />
                      </button>
                      <Collapsible open={isOpen} id={panelId} reduce={reduce}>
                        <p className={styles.descText}>{feature.description}</p>
                      </Collapsible>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* BENEFITS */}
        {benefits.length > 0 && (
          <section className={styles.benefitsSection}>
            <motion.div
              className={styles.benefitsGrid}
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
            >
              {benefits.map((benefit, index) => (
                <div key={index} className={styles.benefitCard}>
                  <div className={styles.iconWrapper}>
                    <div className={styles.benefitIcon}>{benefit.icon}</div>
                  </div>
                  <p className={styles.benefitText}>{benefit.text}</p>
                </div>
              ))}
            </motion.div>

            <div className={styles.centeredCtaContainer}>
              <a href="#contato" className={styles.ctaButton}>
                {ctaMid} <PiArrowUpRightBold />
              </a>
            </div>
          </section>
        )}

        {/* DIFFERENTIALS */}
        {differentials.length > 0 && (
          <section className={styles.differentialsSection}>
            <div className={styles.differentialsContainer}>
              <div className={styles.sectionHead}>
                {diffEyebrow && <span className={styles.eyebrow}>{diffEyebrow}</span>}
                <h2 className={styles.differentialsTitle}>
                  {diffHeading}
                  <span className={styles.dot}>.</span>
                </h2>
              </div>

              <div className={styles.diffGrid}>
                {differentials.map((diff, index) => (
                  <motion.div
                    key={index}
                    className={styles.diffCard}
                    variants={reveal}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-40px" }}
                  >
                    <div className={styles.diffIcon}>{diff.icon}</div>
                    <h3 className={styles.diffTitle}>{diff.title}</h3>
                    <p className={styles.diffText}>{diff.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* METHOD */}
        {methodSteps.length > 0 && (
          <section className={styles.methodSection}>
            <div className={styles.methodContainer}>
              <div className={styles.sectionHead}>
                {methodEyebrow && <span className={styles.eyebrow}>{methodEyebrow}</span>}
                <h2 className={styles.methodTitle}>
                  {methodHeading}
                  <span className={styles.dot}>.</span>
                </h2>
                {methodSubtitle && (
                  <span className={styles.methodSubtitle}>{methodSubtitle}</span>
                )}
              </div>

              <ol className={styles.timeline}>
                {methodSteps.map((step, index) => (
                  <motion.li
                    key={index}
                    className={styles.timelineItem}
                    variants={reveal}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-40px" }}
                  >
                    <div className={styles.timelineNumber}>{index + 1}</div>
                    <div className={styles.timelineContent}>
                      <h3 className={styles.stepTitle}>{step.title}</h3>
                      <p className={styles.stepDesc}>{step.description}</p>
                    </div>
                  </motion.li>
                ))}
              </ol>
            </div>
          </section>
        )}

        {/* FAQ */}
        {faqItems.length > 0 && (
          <section className={styles.faqSection}>
            <div className={styles.faqContainer}>
              <div className={styles.sectionHead}>
                {faqEyebrow && <span className={styles.eyebrow}>{faqEyebrow}</span>}
                <h2 className={styles.faqTitle}>
                  {faqHeading}
                  <span className={styles.dot}>.</span>
                </h2>
              </div>

              <div className={styles.faqList}>
                {faqItems.map((item, index) => {
                  const isOpen = openFaqIndex === index;
                  const panelId = `${uid}-faq-${index}`;
                  return (
                    <div key={index} className={styles.faqItem}>
                      <button
                        type="button"
                        className={styles.faqQuestion}
                        onClick={() => toggleFaq(index)}
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                      >
                        <span className={styles.questionText}>{item.question}</span>
                        <PiCaretDownBold
                          className={`${styles.faqIcon} ${isOpen ? styles.rotate : ""}`}
                          aria-hidden="true"
                        />
                      </button>
                      <Collapsible open={isOpen} id={panelId} reduce={reduce}>
                        <p className={styles.answerText}>{item.answer}</p>
                      </Collapsible>
                    </div>
                  );
                })}
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
