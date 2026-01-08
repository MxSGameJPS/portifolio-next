import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Companies from "../components/Companies/Companies";
import PortfolioSection from "../components/PortfolioSection/PortfolioSection";
import Solutions from "../components/Solutions/Solutions";
import Testimonials from "../components/Testimonials/Testimonials";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.pageWrapper}>
      <Header />
      <main className={styles.main}>
        <Hero />
        <Companies />
        <PortfolioSection />
        <Solutions />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
