import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "https://aisolutions22.cloud";

const serviceSlugs = ["n8n-automation", "ai-agents", "dashboards", "web-development"];
const caseSlugs = ["retail-ops", "clinic-ai", "b2b-dashboard"];

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const paths: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/about", changefreq: "monthly", priority: "0.7" },
          { path: "/services", changefreq: "monthly", priority: "0.9" },
          { path: "/case-studies", changefreq: "monthly", priority: "0.8" },
          ...serviceSlugs.map((s) => ({ path: `/services/${s}`, changefreq: "monthly" as const, priority: "0.8" })),
          ...caseSlugs.map((s) => ({ path: `/case-studies/${s}`, changefreq: "monthly" as const, priority: "0.7" })),
          { path: "/en", changefreq: "weekly", priority: "1.0" },
          { path: "/en/about", changefreq: "monthly", priority: "0.7" },
          { path: "/en/services", changefreq: "monthly", priority: "0.9" },
          { path: "/en/case-studies", changefreq: "monthly", priority: "0.8" },
          ...serviceSlugs.map((s) => ({ path: `/en/services/${s}`, changefreq: "monthly" as const, priority: "0.8" })),
          ...caseSlugs.map((s) => ({ path: `/en/case-studies/${s}`, changefreq: "monthly" as const, priority: "0.7" })),
        ];

        const urls = paths.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
