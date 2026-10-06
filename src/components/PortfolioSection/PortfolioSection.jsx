import data from "./projetosData.json";
import PortfolioTabs from "./PortfolioTabs";

const TABS = [
  { key: "web", label: "Web & SaaS", tag: "Web" },
  { key: "backend", label: "APIs & Backend", tag: "API - BackEnd" },
  { key: "mobile", label: "Mobile", tag: "Mobile" },
];

const PRIMARY = new Set(["Rota Viva App"]);

const FLAGSHIP = new Set([
  "SocialJurídico",
  "Rota Viva",
  "Rota Viva App",
  "API Social Jurídico",
  "Vida Leve",
]);

const TECH_KEYWORDS = [
  "Next.js",
  "React Native",
  "React",
  "Fastify",
  "GSAP",
  "Supabase",
  "Stripe",
  "OpenAI",
  "Gemini",
  "Zod",
  "PostgreSQL",
  "MongoDB",
  "Node.js",
  "Express",
  "Docker",
  "Tailwind",
  "Firebase",
  "Prisma",
  "TypeScript",
  "Redis",
];

function pickTech(stack = []) {
  const joined = stack.join(" ");
  const found = TECH_KEYWORDS.filter((keyword) => joined.includes(keyword));
  const cleaned = found.includes("React Native")
    ? found.filter((keyword) => keyword !== "React")
    : found;
  return cleaned.slice(0, 4);
}

function getProjects(tag) {
  const list = data.portfolio.filter(
    (project) =>
      project.importance === "1" &&
      (project.tag === tag ||
        (tag === "API - BackEnd" && project.tag === "Api - BackEnd")),
  );

  const rank = (project) =>
    (PRIMARY.has(project.name) ? 2 : 0) +
    (FLAGSHIP.has(project.name) ? 1 : 0);

  return [...list].sort((a, b) => rank(b) - rank(a));
}

export default function PortfolioSection() {
  // Only send card fields to the browser; full case studies stay on the server.
  const projectsByTab = Object.fromEntries(TABS.map((tab) => [
    tab.key, getProjects(tab.tag).map((project) => ({
      id: project.id, name: project.name, category: project.category,
      description: project.description, image: project.image || null,
      tech: pickTech(project.tech_stack),
    })),
  ]));
  return <PortfolioTabs projectsByTab={projectsByTab} />;
}
