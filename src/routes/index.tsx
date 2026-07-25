import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/pages/HomePage";
import { hreflangLinks, SITE_ORIGIN } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    links: [
      { rel: "canonical", href: SITE_ORIGIN + "/" },
      ...hreflangLinks("/"),
    ],
    meta: [
      { property: "og:url", content: SITE_ORIGIN + "/" },
    ],
  }),
  component: HomePage,
});
