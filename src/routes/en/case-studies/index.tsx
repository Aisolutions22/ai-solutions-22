import { createFileRoute } from "@tanstack/react-router";
import { CaseStudiesIndexPage } from "@/pages/CaseStudiesIndexPage";
import { hreflangLinks, SITE_ORIGIN } from "@/lib/i18n";

export const Route = createFileRoute("/en/case-studies/")({
  head: () => ({
    meta: [
      { title: "Case studies — Automation & AI agent projects | AI Solutions" },
      { name: "description", content: "Explore real projects we built in business automation and AI agents across retail, healthcare and B2B services." },
      { property: "og:title", content: "Case studies | AI Solutions" },
      { property: "og:description", content: "Real projects in business automation and AI agents — before/after, workflows, and measurable impact." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_ORIGIN + "/en/case-studies" },
    ],
    links: [
      { rel: "canonical", href: SITE_ORIGIN + "/en/case-studies" },
      ...hreflangLinks("/case-studies"),
    ],
  }),
  component: CaseStudiesIndexPage,
});
