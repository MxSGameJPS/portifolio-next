import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://saulopavanello.com.br";

  const routes = [
    "",
    "/web-apps",
    "/app-android",
    "/app-ios",
    "/landing-pages",
    "/ecommerce",
    "/api-development",
    "/ui-ux",
    "/devops",
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
