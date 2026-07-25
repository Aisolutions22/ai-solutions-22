import { createFileRoute } from "@tanstack/react-router";
import { ServicesIndexPage } from "@/pages/ServicesIndexPage";
import { hreflangLinks, SITE_ORIGIN } from "@/lib/i18n";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "الخدمات — أتمتة أعمال ووكلاء AI و Dashboards | AI Solutions" },
      { name: "description", content: "أربع خدمات متكاملة: أتمتة الأعمال بـ n8n، وكلاء ذكاء اصطناعي، Dashboards مخصصة، وتصميم مواقع وتطبيقات ويب." },
      { property: "og:title", content: "الخدمات | AI Solutions" },
      { property: "og:description", content: "أربع قدرات، منظومة واحدة متكاملة — من workflow خلف الكواليس إلى الواجهة اللي يستخدمها عميلك." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_ORIGIN + "/services" },
    ],
    links: [
      { rel: "canonical", href: SITE_ORIGIN + "/services" },
      ...hreflangLinks("/services"),
    ],
  }),
  component: ServicesIndexPage,
});
