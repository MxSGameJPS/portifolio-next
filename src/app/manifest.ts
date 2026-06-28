import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Saulo Pavanello — Desenvolvimento de Sites e Apps",
    short_name: "Saulo Pavanello",
    description:
      "Desenvolvimento de sites, aplicativos e sistemas web sob medida com React, Next.js e Node.js.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0a2342",
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
