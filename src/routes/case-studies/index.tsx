import { createFileRoute } from "@tanstack/react-router";
import { CaseStudiesIndexPage } from "@/pages/CaseStudiesIndexPage";
import { hreflangLinks, SITE_ORIGIN } from "@/lib/i18n";

export const Route = createFileRoute("/case-studies/")({
  head: () => ({
    meta: [
      { title: "دراسات الحالة — مشاريع أتمتة ووكلاء AI | AI Solutions" },
      { name: "description", content: "استعرض مشاريع فعلية نفّذناها في أتمتة الأعمال ووكلاء الذكاء الاصطناعي عبر قطاعات التجزئة والطبي وخدمات B2B." },
      { property: "og:title", content: "دراسات الحالة | AI Solutions" },
      { property: "og:description", content: "مشاريع فعلية في أتمتة الأعمال ووكلاء الذكاء الاصطناعي — قبل/بعد، workflows، وأثر واضح." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_ORIGIN + "/case-studies" },
    ],
    links: [
      { rel: "canonical", href: SITE_ORIGIN + "/case-studies" },
      ...hreflangLinks("/case-studies"),
    ],
  }),
  component: CaseStudiesIndexPage,
});
