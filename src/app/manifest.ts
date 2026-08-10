import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Saulo Pavanello — Software Engineer",
    short_name: "Saulo Pavanello",
    description:
      "SaaS, sistemas web, aplicativos mobile, APIs, IA e produtos digitais sob medida.",
    start_url: "/",
    display: "standalone",
    background_color: "#f5f1eb",
    theme_color: "#f5f1eb",
    lang: "pt-BR",
    categories: ["technology", "business", "developer"],
    icons: [
      {
        src: "/Logo/logo1.png",
        sizes: "any",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
