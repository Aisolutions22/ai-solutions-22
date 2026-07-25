import { createFileRoute } from "@tanstack/react-router";
import { ServicesIndexPage } from "@/pages/ServicesIndexPage";
import { hreflangLinks, SITE_ORIGIN } from "@/lib/i18n";

export const Route = createFileRoute("/en/services/")({
  head: () => ({
    meta: [
      { title: "Services — Business automation, AI agents & dashboards | AI Solutions" },
      { name: "description", content: "Four integrated services: business automation with n8n, AI agents, custom dashboards, and web development." },
      { property: "og:title", content: "Services | AI Solutions" },
      { property: "og:description", content: "Four capabilities, one integrated system — from the workflow behind the scenes to the interface your customer uses." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_ORIGIN + "/en/services" },
    ],
    links: [
      { rel: "canonical", href: SITE_ORIGIN + "/en/services" },
      ...hreflangLinks("/services"),
    ],
  }),
  component: ServicesIndexPage,
});
