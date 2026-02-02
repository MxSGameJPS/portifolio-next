import Header from "../components/Header/Header";
import ScrollReveal from "../components/ScrollReveal/ScrollReveal";
import Hero from "../components/Hero/Hero";
import Companies from "../components/Companies/Companies";
import PortfolioSection from "../components/PortfolioSection/PortfolioSection";
import Solutions from "../components/Solutions/Solutions";
import Testimonials from "../components/Testimonials/Testimonials";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import HomePopup from "../components/HomePopup/HomePopup";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.pageWrapper}>
      <HomePopup />
      <Header />
      <main className={styles.main}>
        <Hero />
        <ScrollReveal>
          <Companies />
        </ScrollReveal>
        <ScrollReveal>
          <PortfolioSection />
        </ScrollReveal>
        <ScrollReveal>
          <Solutions />
        </ScrollReveal>
        <ScrollReveal>
          <Testimonials />
        </ScrollReveal>
        <ScrollReveal>
          <Contact />
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  );
}
