import { MetadataRoute } from "next";
import projetosData from "../components/PortfolioSection/projetosData.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://saulopavanello.com.br";

  const staticPaths = [
    "",
    "/portfolio",
    "/sobre",
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
    "/stack",
    "/contato",
  ];

  const staticPages: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${baseUrl}${path}`,
  }));

  const portfolioCases: MetadataRoute.Sitemap = projetosData.portfolio.map((project) => ({
    url: `${baseUrl}/portfolio/${project.id}`,
  }));

  return [...staticPages, ...portfolioCases];
}
