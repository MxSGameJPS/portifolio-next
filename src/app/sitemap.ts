import { MetadataRoute } from "next";
import projetosData from "../components/PortfolioSection/projetosData.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://saulopavanello.com.br";
  const now = new Date();

  // Grouped by intent so crawlers get differentiated priority signals instead
  // of a flat list where every URL looks equally (un)important.
  const groups: {
    paths: string[];
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  }[] = [
    { paths: [""], priority: 1.0, changeFrequency: "weekly" },
    { paths: ["/portfolio", "/sobre"], priority: 0.9, changeFrequency: "weekly" },
    {
      // Service / money pages
      paths: [
        "/web-apps",
        "/landing-pages",
        "/ecommerce",
        "/api-development",
        "/backend",
        "/app-android",
        "/app-ios",
        "/mobile",
        "/dashboards",
        "/database",
        "/integrations",
        "/devops",
        "/security",
        "/ui-ux",
        "/portais",
        "/redes-sociais",
        "/app-tv",
        "/app-store-optimization",
      ],
      priority: 0.8,
      changeFrequency: "monthly",
    },
    { paths: ["/stack", "/contato"], priority: 0.7, changeFrequency: "monthly" },
  ];

  const staticPages = groups.flatMap((group) =>
    group.paths.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: now,
      changeFrequency: group.changeFrequency,
      priority: group.priority,
    })),
  );

  const portfolioCases: MetadataRoute.Sitemap = projetosData.portfolio.map((project) => ({
    url: `${baseUrl}/portfolio/${project.id}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  return [...staticPages, ...portfolioCases];
}
