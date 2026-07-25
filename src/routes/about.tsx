import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/pages/AboutPage";
import { hreflangLinks, SITE_ORIGIN } from "@/lib/i18n";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "من نحن — فريق أتمتة أعمال ووكلاء AI | AI Solutions" },
      { name: "description", content: "AI Solutions فريق متخصص في أتمتة الأعمال ووكلاء الذكاء الاصطناعي — نحوّل تعقيد التشغيل إلى نظام واضح يشتغل بذكاء بدون فريق تقني داخلي." },
      { property: "og:title", content: "من نحن | AI Solutions" },
      { property: "og:description", content: "قصة AI Solutions ورؤيتنا في أتمتة الأعمال عبر قطاعات متعددة — تصنيع، طبي، تسويق، تعليم." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_ORIGIN + "/about" },
    ],
    links: [
      { rel: "canonical", href: SITE_ORIGIN + "/about" },
      ...hreflangLinks("/about"),
    ],
  }),
  component: AboutPage,
});
