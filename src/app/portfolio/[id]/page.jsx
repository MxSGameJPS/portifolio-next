import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  PiArrowLeftBold,
  PiArrowUpRightBold,
  PiGithubLogoBold,
  PiGlobeBold,
} from "react-icons/pi";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import projetosData from "../../../components/PortfolioSection/projetosData.json";
import styles from "./page.module.css";

const SITE = "https://saulopavanello.com.br";

function getProjectName(project) {
  if (project.name === "SocialJurídico") return "Social Jurídico";
  return project.name;
}

function getProjectById(id) {
  return projetosData.portfolio.find((project) => String(project.id) === String(id));
}

function splitTech(tech) {
  const separator = tech.indexOf(":");
  if (separator === -1) return { label: "Tecnologia", value: tech };

  return {
    label: tech.slice(0, separator).trim(),
    value: tech.slice(separator + 1).trim(),
  };
}

function getProjectType(project) {
  if (project.tag === "Mobile") return "Aplicativo mobile";
  if (project.tag === "API - BackEnd") return "API & Backend";
  if ((project.category || "").toLowerCase().includes("saas")) {
    return "SaaS / Produto digital";
  }
  return "Sistema / experiência web";
}

export function generateStaticParams() {
  return projetosData.portfolio.map((project) => ({ id: String(project.id) }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    return {
      title: { absolute: "Projeto não encontrado | Saulo Pavanello" },
      robots: { index: false, follow: false },
    };
  }

  const projectName = getProjectName(project);
  const description = project.description.slice(0, 155);
  const image = project.image ? `${SITE}${project.image}` : `${SITE}/ogimage.png`;
  const pageUrl = `${SITE}/portfolio/${project.id}`;

  return {
    title: {
      absolute: `${projectName} | Case — Saulo Pavanello`,
    },
    description,
    alternates: { canonical: `/portfolio/${project.id}` },
    openGraph: {
      type: "article",
      title: `${projectName} | Case — Saulo Pavanello`,
      description,
      url: pageUrl,
      images: [
        {
          url: image,
          alt: `Case ${projectName}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${projectName} | Case — Saulo Pavanello`,
      description,
      images: [image],
    },
  };
}

export default async function ProjectDetailsPage({ params }) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) notFound();

  const projectName = getProjectName(project);
  const projects = projetosData.portfolio;
  const currentIndex = projects.findIndex((item) => item.id === project.id);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const nextProjectName = getProjectName(nextProject);
  const pageUrl = `${SITE}/portfolio/${project.id}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${pageUrl}/#case`,
    url: pageUrl,
    name: projectName,
    description: project.description,
    image: project.image ? `${SITE}${project.image}` : `${SITE}/ogimage.png`,
    creator: { "@id": `${SITE}/#person` },
    genre: project.category,
  };

  return (
    <div className={styles.pageWrapper}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />

      <main>
        <section className={styles.heroSection}>
          <div className={styles.heroTexture} aria-hidden="true" />
          <div className={styles.heroContainer}>
            <Link href="/portfolio" className={styles.backLink}>
              <PiArrowLeftBold aria-hidden="true" /> Voltar ao portfólio
            </Link>

            <div className={styles.heroHeadingGrid}>
              <div>
                <p className={styles.eyebrow}>
                  CASE {String(project.id).padStart(2, "0")} · {project.tag}
                </p>
                <h1 className={styles.projectTitle}>{projectName}</h1>
              </div>

              <div className={styles.heroAside}>
                <p className={styles.category}>{project.category}</p>
                <p className={styles.description}>{project.description}</p>

                <div className={styles.heroActions}>
                  {project.deploy_link && (
                    <a
                      href={project.deploy_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.primaryAction}
                    >
                      <PiGlobeBold aria-hidden="true" />
                      Acessar projeto
                      <PiArrowUpRightBold aria-hidden="true" />
                    </a>
                  )}
                  {project.repo_link && (
                    <a
                      href={project.repo_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.secondaryAction}
                    >
                      <PiGithubLogoBold aria-hidden="true" />
                      Ver código
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className={styles.heroMedia}>
              {project.image ? (
                <Image
                  src={project.image}
                  alt={`Interface do projeto ${projectName}`}
                  fill
                  priority
                  sizes="(max-width: 760px) 100vw, 1260px"
                  className={styles.heroImage}
                />
              ) : (
                <div className={styles.imageFallback} aria-hidden="true">
                  {String(project.id).padStart(2, "0")}
                </div>
              )}
            </div>
          </div>
        </section>

        <section className={styles.overviewSection}>
          <div className={styles.contentContainer}>
            <div className={styles.sectionLabelColumn}>
              <p className={styles.eyebrowLight}>VISÃO DO PROJETO</p>
              <span className={styles.sectionIndex}>01</span>
            </div>

            <div className={styles.overviewContent}>
              <h2>Mais contexto do que uma lista de tecnologias.</h2>
              <p className={styles.overviewLead}>{project.description}</p>

              <div className={styles.projectFacts}>
                <div>
                  <span>Tipo</span>
                  <strong>{getProjectType(project)}</strong>
                </div>
                <div>
                  <span>Categoria</span>
                  <strong>{project.category}</strong>
                </div>
                <div>
                  <span>Entrega</span>
                  <strong>{project.deploy_link ? "Projeto publicado" : "Case documentado"}</strong>
                </div>
                <div>
                  <span>Código</span>
                  <strong>{project.repo_link ? "Repositório disponível" : "Código privado"}</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        {project.sections?.length > 0 && (
          <section className={styles.buildSection}>
            <div className={styles.contentContainer}>
              <div className={styles.sectionLabelColumn}>
                <p className={styles.eyebrow}>PRODUTO & ENGENHARIA</p>
                <span className={styles.sectionIndexDark}>02</span>
              </div>

              <div>
                <div className={styles.sectionHeadingBlock}>
                  <h2>O que foi pensado e construído.</h2>
                  <p>
                    Decisões de experiência, arquitetura e implementação que ajudam a
                    explicar o produto além da screenshot.
                  </p>
                </div>

                <div className={styles.decisionList}>
                  {project.sections.map((section, index) => (
                    <article key={`${section.title}-${index}`} className={styles.decisionItem}>
                      <span className={styles.decisionNumber}>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3>{section.title}</h3>
                        <p>{section.content}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {project.tech_stack?.length > 0 && (
          <section className={styles.stackSection}>
            <div className={styles.contentContainer}>
              <div className={styles.sectionLabelColumn}>
                <p className={styles.eyebrowLight}>ARQUITETURA & STACK</p>
                <span className={styles.sectionIndex}>03</span>
              </div>

              <div>
                <div className={styles.stackHeading}>
                  <h2>A tecnologia aparece onde ela resolve alguma coisa.</h2>
                  <p>
                    Frameworks, serviços e ferramentas usados na construção deste case.
                  </p>
                </div>

                <div className={styles.stackList}>
                  {project.tech_stack.map((tech, index) => {
                    const { label, value } = splitTech(tech);
                    return (
                      <div key={`${tech}-${index}`} className={styles.stackItem}>
                        <span>{String(index + 1).padStart(2, "0")}</span>
                        <small>{label}</small>
                        <strong>{value}</strong>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        )}

        <section className={styles.deliverySection}>
          <div className={styles.contentContainer}>
            <div className={styles.sectionLabelColumn}>
              <p className={styles.eyebrow}>ENTREGA</p>
              <span className={styles.sectionIndexDark}>04</span>
            </div>

            <div className={styles.deliveryContent}>
              <h2>Veja o produto além deste case.</h2>
              <p>
                Quando o projeto ou o código estão públicos, os links abaixo levam
                diretamente para a entrega correspondente.
              </p>

              <div className={styles.deliveryLinks}>
                {project.deploy_link && (
                  <a
                    href={project.deploy_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.deliveryLink}
                  >
                    <span>PRODUTO / DEPLOY</span>
                    <strong>Acessar projeto</strong>
                    <PiArrowUpRightBold aria-hidden="true" />
                  </a>
                )}

                {project.repo_link && (
                  <a
                    href={project.repo_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.deliveryLink}
                  >
                    <span>REPOSITÓRIO</span>
                    <strong>Ver código-fonte</strong>
                    <PiArrowUpRightBold aria-hidden="true" />
                  </a>
                )}

                {project.repo_link_API && (
                  <a
                    href={project.repo_link_API}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.deliveryLink}
                  >
                    <span>BACKEND / API</span>
                    <strong>Ver repositório da API</strong>
                    <PiArrowUpRightBold aria-hidden="true" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className={styles.nextCaseSection}>
          <div className={styles.nextCaseContainer}>
            <p className={styles.eyebrowLight}>PRÓXIMO CASE</p>
            <Link href={`/portfolio/${nextProject.id}`} className={styles.nextCaseLink}>
              <span className={styles.nextCaseTitle}>{nextProjectName}</span>
              <PiArrowUpRightBold aria-hidden="true" />
            </Link>
            <p className={styles.nextCaseMeta}>{nextProject.category}</p>

            <div className={styles.finalCtaRow}>
              <p>Tem um projeto que também precisa sair da ideia e entrar em operação?</p>
              <Link href="/contato" className={styles.finalCta}>
                Vamos conversar <PiArrowUpRightBold aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
