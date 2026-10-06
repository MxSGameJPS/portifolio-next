import Image from "next/image";
import Link from "next/link";
import {
  PiArrowUpRightBold,
  PiCheckBold,
  PiWhatsappLogoBold,
} from "react-icons/pi";
import TrackedAnchor from "../../components/Analytics/TrackedAnchor";
import projectData from "../../components/PortfolioSection/projetosData.json";
import testimonials from "../../components/Testimonials/testimonials.json";
import { faqItems } from "./data";
import styles from "./sites.module.css";

const cases = [
  {
    id: 23,
    type: "Presença institucional",
    description:
      "Uma apresentação visual para conectar marca, conteúdo e experiência em uma única página.",
  },
  {
    id: 6,
    type: "Serviços & agendamento",
    description:
      "Serviços, identidade e agendamento reunidos na presença digital de uma barbearia.",
  },
  {
    id: 15,
    type: "Serviços & bem-estar",
    description:
      "Uma apresentação dos serviços do Alma Zen Spa, com identidade própria e caminhos para agendamento.",
  },
].map((item) => ({
  ...projectData.portfolio.find((project) => Number(project.id) === item.id),
  ...item,
}));

const pillars = [
  {
    title: "Apresentar sua empresa.",
    subtitle: "Uma presença que tem a sua identidade.",
    text: "Organizo serviços, diferenciais e informações para que o visitante entenda o seu negócio e saiba por que conversar com você.",
    items: [
      "Design alinhado à marca",
      "Conteúdo e navegação claros",
      "Experiência em celular e desktop",
    ],
  },
  {
    title: "Ser encontrada.",
    subtitle: "Uma base preparada para a busca.",
    text: "Cuido da estrutura técnica para facilitar o rastreamento do site e permitir que sua presença cresça com conteúdo e campanhas.",
    items: [
      "Títulos, descrições e URLs",
      "Performance e semântica",
      "Sitemap e Search Console",
    ],
  },
  {
    title: "Receber contatos.",
    subtitle: "Um próximo passo fácil de encontrar.",
    text: "WhatsApp, formulários e chamadas são posicionados para aproximar o interesse do visitante de uma conversa sobre o que ele precisa.",
    items: [
      "WhatsApp e formulário",
      "Chamadas para ação",
      "Medição de visitas e eventos",
    ],
  },
];

const steps = [
  {
    title: "Entender",
    text: "Alinhamos seu negócio, referências e objetivo do site.",
    deliverable: "Briefing e escopo definidos",
  },
  {
    title: "Desenhar",
    text: "Organizo o conteúdo e apresento a direção visual da sua marca.",
    deliverable: "Estrutura e design para aprovação",
  },
  {
    title: "Construir",
    text: "Desenvolvo o site responsivo, com SEO e as integrações combinadas.",
    deliverable: "Site para você testar",
  },
  {
    title: "Publicar",
    text: "Configuro o ambiente, conecto o domínio e valido a entrega.",
    deliverable: "Site no ar e orientação de uso",
  },
];

const testimonial = testimonials.find((item) => item.id === 3);
const whatsapp =
  "https://wa.me/5551993392983?text=" +
  encodeURIComponent(
    "Olá, Saulo! Quero conversar sobre a criação de um site para minha empresa.",
  );

export default function SiteContent() {
  return (
    <div className={styles.content}>
      <section
        className={styles.projects}
        aria-labelledby="sites-projects-title"
      >
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div>
              <p className={styles.eyebrow}>DO CÓDIGO PARA O MUNDO</p>
              <h2 id="sites-projects-title">
                Seu negócio merece
                <br />
                <em>uma presença própria.</em>
              </h2>
            </div>
            <p>
              Identidades e necessidades diferentes. Conheça alguns sites que
              desenvolvi e veja como cada projeto ganha uma expressão própria.
            </p>
          </div>
          <div className={styles.projectGrid}>
            {cases.map((project, index) => (
              <Link
                key={project.id}
                href={`/portfolio/${project.id}`}
                prefetch={false}
                className={`${styles.project} ${index === 0 ? styles.featuredProject : ""}`}
              >
                <div className={styles.projectMedia}>
                  <Image
                    src={project.image}
                    alt={`Site ${project.name}`}
                    fill
                    sizes={
                      index === 0
                        ? "(max-width: 760px) 100vw, (max-width: 1100px) 60vw, 740px"
                        : "(max-width: 760px) 100vw, 400px"
                    }
                    quality={60}
                    className={styles.projectImage}
                  />
                  <span className={styles.projectAction}>
                    Ver projeto <PiArrowUpRightBold aria-hidden="true" />
                  </span>
                </div>
                <div className={styles.projectCopy}>
                  <span>{project.type}</span>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                </div>
              </Link>
            ))}
          </div>
          <Link href="/portfolio" prefetch={false} className={styles.textLink}>
            Explore o portfólio completo{" "}
            <PiArrowUpRightBold aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section
        className={styles.deliverables}
        aria-labelledby="sites-deliverables-title"
      >
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div>
              <p className={styles.eyebrow}>O QUE SEU SITE PRECISA FAZER</p>
              <h2 id="sites-deliverables-title">
                Bonito de ver.
                <br />
                <em>Simples de usar.</em>
              </h2>
            </div>
            <p>
              Do primeiro acesso ao primeiro contato, cada escolha de conteúdo,
              design e tecnologia tem uma função.
            </p>
          </div>
          <div className={styles.pillars}>
            {pillars.map((pillar) => (
              <article key={pillar.title} className={styles.pillar}>
                <h3>{pillar.title}</h3>
                <p className={styles.pillarSubtitle}>{pillar.subtitle}</p>
                <p>{pillar.text}</p>
                <ul>
                  {pillar.items.map((item) => (
                    <li key={item}>
                      <PiCheckBold aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className={styles.scopeNote}>
            <strong>O escopo acompanha a sua necessidade.</strong>
            <p>
              Domínio, SSL e publicação fazem parte do planejamento. Painel para
              atualizar conteúdo, hospedagem e integrações são definidos
              conforme o projeto.
            </p>
          </div>
        </div>
      </section>

      <section
        className={styles.partnership}
        aria-labelledby="sites-partnership-title"
      >
        <div className={`${styles.container} ${styles.partnershipGrid}`}>
          <div className={styles.portrait}>
            <div className={styles.portraitCrop}>
              <Image
                src="/contact-saulo.png"
                alt="Saulo Pavanello em seu ambiente de trabalho"
                fill
                sizes="(max-width: 760px) 100vw, 420px"
                quality={60}
                className={styles.portraitImage}
              />
            </div>
            <span>SAULO PAVANELLO · SOFTWARE ENGINEER</span>
          </div>
          <div className={styles.partnershipCopy}>
            <p className={styles.eyebrowLight}>DO BRIEFING À PUBLICAÇÃO</p>
            <h2 id="sites-partnership-title">
              Você conversa com
              <br />
              <em>quem faz o seu site.</em>
            </h2>
            <p>
              Eu acompanho a estrutura, o design, o desenvolvimento e a
              publicação. Você tem um contato direto para alinhar decisões e
              acompanhar o projeto.
            </p>
            <p className={styles.location}>
              Dois Irmãos — RS. Atendimento na região e remoto para todo o
              Brasil.
            </p>
            <figure className={styles.testimonial}>
              <blockquote>“{testimonial.text}”</blockquote>
              <figcaption>
                <strong>{testimonial.person}</strong>
                <span>
                  {testimonial.role} · {testimonial.company}
                </span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className={styles.process} aria-labelledby="sites-process-title">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div>
              <p className={styles.eyebrow}>COMO ACONTECE</p>
              <h2 id="sites-process-title">
                Da primeira conversa
                <br />
                <em>ao seu site no ar.</em>
              </h2>
            </div>
            <p>
              Um caminho claro, com decisões compartilhadas e entregas que você
              consegue acompanhar.
            </p>
          </div>
          <ol className={styles.steps}>
            {steps.map((step, index) => (
              <li key={step.title}>
                <span className={styles.stepNumber}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
                <span className={styles.deliverable}>{step.deliverable}</span>
              </li>
            ))}
          </ol>
          <p className={styles.technicalNote}>
            Tecnologia a serviço do projeto: Next.js, React e ferramentas de
            busca e medição. Painel e banco de dados quando o escopo pede.
          </p>
        </div>
      </section>

      <section className={styles.faq} aria-labelledby="sites-faq-title">
        <div className={`${styles.container} ${styles.faqGrid}`}>
          <div>
            <p className={styles.eyebrow}>ANTES DE COMEÇAR</p>
            <h2 id="sites-faq-title">
              Vamos tirar
              <br />
              <em>suas dúvidas.</em>
            </h2>
            <p className={styles.faqIntro}>
              Alguns pontos importantes para planejar o site da sua empresa.
            </p>
          </div>
          <div>
            {faqItems.map((item) => (
              <details key={item.question} className={styles.faqItem}>
                <summary>
                  {item.question}
                  <PiArrowUpRightBold aria-hidden="true" />
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section
        className={styles.contact}
        id="contato"
        aria-labelledby="sites-contact-title"
      >
        <div className={`${styles.container} ${styles.contactGrid}`}>
          <div>
            <p className={styles.eyebrowLight}>
              O PRÓXIMO PASSO É UMA CONVERSA
            </p>
            <h2 id="sites-contact-title">
              Vamos construir o site
              <br />
              <em>da sua empresa?</em>
            </h2>
            <p>
              Me conte o que sua empresa faz, o que precisa apresentar e se já
              tem um site. A partir disso, alinhamos o melhor caminho para o
              projeto.
            </p>
          </div>
          <div className={styles.contactActions}>
            <TrackedAnchor
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              eventLabel="criacao_sites_whatsapp"
              className={styles.primaryCta}
            >
              <PiWhatsappLogoBold aria-hidden="true" /> Conversar sobre meu site{" "}
              <PiArrowUpRightBold aria-hidden="true" />
            </TrackedAnchor>
            <a
              className={styles.emailLink}
              href="mailto:contato@saulopavanello.com.br?subject=Cria%C3%A7%C3%A3o%20de%20site"
            >
              Prefere e-mail? Escreva para mim{" "}
              <PiArrowUpRightBold aria-hidden="true" />
            </a>
            <span>Atendimento direto com Saulo Pavanello.</span>
          </div>
        </div>
      </section>
    </div>
  );
}
