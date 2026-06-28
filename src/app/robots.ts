import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const allowAll = { allow: "/", disallow: ["/admin", "/private"] };

  return {
    rules: [
      // Classic search + general crawlers
      { userAgent: "*", ...allowAll },
      // AI answer engines — explicitly allowed so the site can be cited in
      // ChatGPT Search, Perplexity, Gemini Overviews and Claude answers.
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
    sitemap: "https://saulopavanello.com.br/sitemap.xml",
    host: "https://saulopavanello.com.br",
  };
}
