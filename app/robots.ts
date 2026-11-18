import type { MetadataRoute } from "next";
import { site } from "@/lib/site-config";

// Policy: allow all reputable search and AI crawlers. Keep in sync with PORTFOLIO_STRUCTURE.md §7.
const aiBots = [
  "OAI-SearchBot", "GPTBot", "ChatGPT-User",
  "ClaudeBot", "Claude-User", "Claude-SearchBot",
  "Google-Extended", "PerplexityBot", "Perplexity-User",
  "Applebot", "Applebot-Extended", "DuckDuckBot", "Bingbot", "Googlebot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      ...aiBots.map((userAgent) => ({ userAgent, allow: "/" })),
      { userAgent: "*", allow: "/" },
    ],
    sitemap: `${site.url}/sitemap.xml`,
  };
}
