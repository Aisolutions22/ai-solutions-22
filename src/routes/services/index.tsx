import { createFileRoute, Link } from "@tanstack/react-router";
import { Workflow, Bot, LayoutDashboard, Globe, ArrowUpLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { AmbientBackground } from "@/components/AmbientBackground";
import { services, type ServiceIcon } from "@/lib/content";

const iconMap: Record<ServiceIcon, typeof Workflow> = {
  Workflow,
  Bot,
  LayoutDashboard,
  Globe,
};

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "الخدمات — أتمتة أعمال ووكلاء AI و Dashboards | AI Solutions" },
      {
        name: "description",
        content:
          "أربع خدمات متكاملة: أتمتة الأعمال بـ n8n، وكلاء ذكاء اصطناعي، Dashboards مخصصة، وتصميم مواقع وتطبيقات ويب.",
      },
      { property: "og:title", content: "الخدمات | AI Solutions" },
      {
        property: "og:description",
        content:
          "أربع قدرات، منظومة واحدة متكاملة — من workflow خلف الكواليس إلى الواجهة اللي يستخدمها عميلك.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://ai-solutions-22.lovable.app/services" },
    ],
    links: [
      { rel: "canonical", href: "https://ai-solutions-22.lovable.app/services" },
    ],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AmbientBackground />
      <Navbar />
      <main className="mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-28">
        <div className="max-w-2xl">
          <div className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
            / الخدمات
          </div>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-foreground">
            أربع قدرات، منظومة واحدة متكاملة
          </h1>
          <p className="mt-4 text-muted-foreground">
            كل خدمة مصممة لتعمل مع الباقي — من أول workflow خلف الكواليس إلى
            الواجهة اللي يستخدمها عميلك.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => {
            const Icon = iconMap[s.icon];
            return (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group text-start rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-[0_12px_30px_-16px_rgba(232,89,12,0.35)]"
              >
                <div className="flex items-center justify-between">
                  <div className="h-11 w-11 rounded-xl bg-foreground text-background grid place-items-center">
                    <Icon size={20} strokeWidth={1.75} />
                  </div>
                  <ArrowUpLeft
                    size={18}
                    className="text-muted-foreground group-hover:text-accent transition-colors"
                  />
                </div>
                <div className="mt-5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {s.tag}
                </div>
                <h2 className="mt-2 font-display font-semibold text-lg text-foreground leading-snug">
                  {s.title}
                </h2>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {s.heroDesc}
                </p>
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
}
