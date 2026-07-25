import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/pages/HomePage";
import { hreflangLinks, SITE_ORIGIN } from "@/lib/i18n";

export const Route = createFileRoute("/en/")({
  head: () => ({
    meta: [
      { title: "AI Solutions — Business automation & AI agents built on n8n" },
      { name: "description", content: "AI Solutions builds custom business automation and AI agents on n8n, with dashboards and web apps to turn manual operations into a system that runs itself." },
      { property: "og:title", content: "AI Solutions — Business automation & AI agents built on n8n" },
      { property: "og:description", content: "Custom AI automation, agents and dashboards, built on n8n — no in-house tech team required." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_ORIGIN + "/en" },
    ],
    links: [
      { rel: "canonical", href: SITE_ORIGIN + "/en" },
      ...hreflangLinks("/"),
    ],
  }),
  component: HomePage,
});
