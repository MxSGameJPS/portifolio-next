import { MetadataRoute } from "next";

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

  return groups.flatMap((group) =>
    group.paths.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: now,
      changeFrequency: group.changeFrequency,
      priority: group.priority,
    })),
  );
}
