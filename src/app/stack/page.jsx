import Link from "next/link";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./page.module.css";
import { PiArrowUpRightBold } from "react-icons/pi";

const capabilities = [
  {
    number: "01",
    title: "Front-end & Product UI",
    description:
      "Interfaces de produto que precisam ser rápidas, claras e sustentáveis no longo prazo. Trabalho da arquitetura dos componentes à experiência final, cuidando de renderização, estado, responsividade, acessibilidade e performance.",
    responsibilities: [
      "SaaS, dashboards e sistemas web",
      "SSR, SSG, ISR e Server Components",
      "Design systems e interfaces responsivas",
      "Animação e microinterações com propósito",
    ],
    technologies: [
      "React 19",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "CSS Modules",
      "Tailwind CSS",
      "GSAP",
      "Framer Motion",
    ],
  },
  {
    number: "02",
    title: "Backend & APIs",
    description:
      "A camada onde regras de negócio, integrações, autenticação e segurança precisam funcionar sem depender da interface. Estruturo serviços pensando em clareza, manutenção, contratos de API e evolução do produto.",
    responsibilities: [
      "APIs REST e integrações externas",
      "Autenticação, autorização e regras de negócio",
      "Pagamentos, webhooks e automações",
      "Comunicação em tempo real",
    ],
    technologies: [
      "Node.js",
      "Next.js API Routes",
      "Server Actions",
      "Fastify",
      "Express",
      "REST APIs",
      "SignalR",
      "WebSockets",
    ],
  },
  {
    number: "03",
    title: "Mobile",
    description:
      "Aplicativos que compartilham produto e engenharia com o ecossistema web, mas respeitam a experiência própria do dispositivo. Do fluxo de navegação à publicação, penso o mobile como produto — não como uma versão menor do site.",
    responsibilities: [
      "Aplicativos Android e iOS",
      "Navegação e estado local",
      "Notificações e recursos do dispositivo",
      "Build, distribuição e publicação",
    ],
    technologies: [
      "React Native",
      "Expo",
      "Expo Router",
      "EAS Build",
      "AsyncStorage",
      "Firebase",
      "Expo Notifications",
    ],
  },
  {
    number: "04",
    title: "Dados & Infraestrutura",
    description:
      "Produto em produção precisa de uma base confiável. Trabalho com modelagem de dados, storage, autenticação, deploy e infraestrutura buscando equilíbrio entre velocidade de entrega, segurança e possibilidade de crescimento.",
    responsibilities: [
      "Modelagem e persistência de dados",
      "Storage, autenticação e políticas de acesso",
      "Deploy, ambientes e CI/CD",
      "CDN, segurança de borda e infraestrutura",
    ],
    technologies: [
      "PostgreSQL",
      "Supabase",
      "Neon",
      "Firebase",
      "Docker",
      "Vercel",
      "Cloudflare",
      "Git & GitHub",
    ],
  },
  {
    number: "05",
    title: "IA & Automação",
    description:
      "Uso Inteligência Artificial como parte de um fluxo de produto, não como enfeite. Integro modelos generativos a funcionalidades reais, com contexto, validação, tratamento de dados e fallback quando a operação exige previsibilidade.",
    responsibilities: [
      "Assistentes e recursos generativos",
      "Geração e transformação de conteúdo",
      "Fluxos documentais e processamento de PDFs",
      "Automação de tarefas dentro do produto",
    ],
    technologies: [
      "OpenAI",
      "Google Gemini",
      "IA Generativa",
      "Automação",
      "PDF & Documentos",
      "Pipelines de conteúdo",
    ],
  },
  {
    number: "06",
    title: "Produto, UI/UX & Qualidade",
    description:
      "Antes do código existe uma decisão de produto. Minha bagagem em design e UI/UX ajuda a transformar requisito em fluxo, interface e prioridade — e testes, SEO e revisão técnica ajudam a garantir que a entrega sobreviva ao uso real.",
    responsibilities: [
      "Arquitetura de informação e prototipagem",
      "UI/UX e design systems",
      "Testes de componentes e integrações",
      "SEO técnico e auditoria de experiência",
    ],
    technologies: [
      "Figma",
      "Design Systems",
      "Jest",
      "React Testing Library",
      "SEO Técnico",
      "Lighthouse",
    ],
  },
];

const principles = [
  {
    number: "01",
    title: "O problema vem antes da stack.",
    text: "A tecnologia precisa servir ao produto, à equipe, ao prazo e ao estágio do negócio — não o contrário.",
  },
  {
    number: "02",
    title: "Manutenção também é feature.",
    text: "Arquitetura simples de entender, componentes reutilizáveis e regras de negócio bem separadas diminuem o custo da próxima versão.",
  },
  {
    number: "03",
    title: "Segurança começa no desenho.",
    text: "Autenticação, autorização, dados sensíveis e integrações entram na arquitetura desde o início, não como correção depois do deploy.",
  },
  {
    number: "04",
    title: "Produção é parte do desenvolvimento.",
    text: "Deploy, performance, logs, comportamento em falhas e experiência no dispositivo real fazem parte da definição de pronto.",
  },
];

export default function StackPage() {
  return (
    <div className={styles.pageWrapper}>
      <Header />

      <main>
        <section className={styles.heroSection}>
          <div className={styles.heroTexture} aria-hidden="true" />
          <div className={styles.heroContainer}>
            <p className={styles.eyebrow}>STACK & ENGENHARIA</p>
            <div className={styles.heroGrid}>
              <h1 className={styles.headline}>
                Tecnologia não é coleção de logos. É decisão de engenharia.
              </h1>
              <div className={styles.heroAside}>
                <p>
                  Minha stack muda conforme o problema, mas a responsabilidade é a
                  mesma: transformar uma necessidade de negócio em software que
                  funciona bem, pode evoluir e chega à produção.
                </p>
                <div className={styles.heroActions}>
                  <Link href="/portfolio" className={styles.primaryAction}>
                    Ver projetos <PiArrowUpRightBold aria-hidden="true" />
                  </Link>
                  <Link href="/contato" className={styles.secondaryAction}>
                    Falar comigo
                  </Link>
                </div>
              </div>
            </div>

            <div className={styles.heroFacts}>
              <div>
                <strong>Web → Mobile → Infra</strong>
                <span>visão de produto ponta a ponta</span>
              </div>
              <div>
                <strong>6 frentes</strong>
                <span>competências organizadas por responsabilidade</span>
              </div>
              <div>
                <strong>Stack por contexto</strong>
                <span>ferramenta escolhida pelo problema</span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.capabilitiesSection}>
          <div className={styles.container}>
            <div className={styles.sectionIntro}>
              <p className={styles.eyebrow}>COMPETÊNCIAS</p>
              <h2>O que eu assumo tecnicamente em um produto.</h2>
              <p>
                Em vez de separar meu trabalho por bibliotecas, organizo a stack
                pelas partes do produto pelas quais consigo responder.
              </p>
            </div>

            <div className={styles.capabilityList}>
              {capabilities.map((capability) => (
                <article key={capability.number} className={styles.capabilityItem}>
                  <div className={styles.capabilityIndex}>
                    <span>{capability.number}</span>
                  </div>

                  <div className={styles.capabilitySummary}>
                    <h3>{capability.title}</h3>
                    <p>{capability.description}</p>
                  </div>

                  <div className={styles.capabilityDetails}>
                    <div>
                      <p className={styles.detailLabel}>RESPONSABILIDADES</p>
                      <ul className={styles.responsibilityList}>
                        {capability.responsibilities.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className={styles.detailLabel}>FERRAMENTAS</p>
                      <div className={styles.techList}>
                        {capability.technologies.map((technology) => (
                          <span key={technology}>{technology}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.principlesSection}>
          <div className={styles.container}>
            <div className={styles.principlesHeader}>
              <p className={styles.eyebrowLight}>COMO EU ESCOLHO</p>
              <h2>Ferramenta boa é a que continua fazendo sentido depois do lançamento.</h2>
            </div>

            <div className={styles.principlesGrid}>
              {principles.map((principle) => (
                <article key={principle.number} className={styles.principleItem}>
                  <span>{principle.number}</span>
                  <h3>{principle.title}</h3>
                  <p>{principle.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.backgroundSection}>
          <div className={styles.container}>
            <div className={styles.backgroundGrid}>
              <div>
                <p className={styles.eyebrow}>BAGAGEM TÉCNICA</p>
                <h2>Nem tudo que eu sei precisa ser o centro da minha oferta.</h2>
              </div>
              <div className={styles.backgroundCopy}>
                <p>
                  Também tenho experiência com C#, Unity e fundamentos de Java.
                  Essa base continua útil para raciocínio orientado a objetos,
                  arquitetura e projetos interativos, mas hoje meu trabalho comercial
                  está concentrado em produtos web, mobile, backend, IA e sistemas sob
                  medida.
                </p>
                <Link href="/sobre" className={styles.textLink}>
                  Conhecer minha trajetória <PiArrowUpRightBold aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaInner}>
            <p className={styles.eyebrowLight}>DA STACK AO PRODUTO</p>
            <h2>O valor não está na tecnologia isolada. Está no que ela permite construir.</h2>
            <p>
              Veja como essas decisões aparecem em produtos reais ou me conte o que
              você precisa colocar em operação.
            </p>
            <div className={styles.ctaActions}>
              <Link href="/portfolio" className={styles.ctaPrimary}>
                Explorar cases <PiArrowUpRightBold aria-hidden="true" />
              </Link>
              <Link href="/contato" className={styles.ctaSecondary}>
                Vamos conversar
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
