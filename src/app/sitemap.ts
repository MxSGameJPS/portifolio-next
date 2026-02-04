import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://saulopavanello.com.br";

  const routes = [
    "",
    "/web-apps",
    "/app-android",
    "/app-ios",
    "/app-tv",
    "/app-store-optimization",
    "/landing-pages",
    "/ecommerce",
    "/api-development",
    "/ui-ux",
    "/devops",
    "/backend",
    "/dashboards",
    "/database",
    "/integrations",
    "/mobile",
    "/portais",
    "/redes-sociais",
    "/security",
    "/stack",
    "/contato",
    "/portfolio",
    "/sobre",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
