import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/pages/AboutPage";
import { hreflangLinks, SITE_ORIGIN } from "@/lib/i18n";

export const Route = createFileRoute("/en/about")({
  head: () => ({
    meta: [
      { title: "About — Business automation & AI agents team | AI Solutions" },
      { name: "description", content: "AI Solutions is a team specialized in business automation and AI agents — we turn operational complexity into a clear system that runs intelligently without an in-house tech team." },
      { property: "og:title", content: "About | AI Solutions" },
      { property: "og:description", content: "Our story and vision for business automation across sectors — manufacturing, healthcare, marketing, education." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_ORIGIN + "/en/about" },
    ],
    links: [
      { rel: "canonical", href: SITE_ORIGIN + "/en/about" },
      ...hreflangLinks("/about"),
    ],
  }),
  component: AboutPage,
});
