import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const allowAll = { allow: "/", disallow: ["/admin", "/private"] };
  const host = "https://www.saulopavanello.com.br";

  return {
    rules: [
      { userAgent: "*", ...allowAll },
      { userAgent: "GPTBot", ...allowAll },
      { userAgent: "OAI-SearchBot", ...allowAll },
      { userAgent: "ChatGPT-User", ...allowAll },
      { userAgent: "PerplexityBot", ...allowAll },
      { userAgent: "Google-Extended", ...allowAll },
      { userAgent: "GoogleOther", ...allowAll },
      { userAgent: "ClaudeBot", ...allowAll },
      { userAgent: "Claude-Web", ...allowAll },
      { userAgent: "Applebot-Extended", ...allowAll },
    ],
    sitemap: `${host}/sitemap.xml`,
    host,
  };
}
