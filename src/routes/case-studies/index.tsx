import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { AmbientBackground } from "@/components/AmbientBackground";
import { cases } from "@/lib/content";

export const Route = createFileRoute("/case-studies/")({
  head: () => ({
    meta: [
      { title: "دراسات الحالة — مشاريع أتمتة ووكلاء AI | AI Solutions" },
      {
        name: "description",
        content:
          "استعرض مشاريع فعلية نفّذناها في أتمتة الأعمال ووكلاء الذكاء الاصطناعي عبر قطاعات التجزئة والطبي وخدمات B2B.",
      },
      { property: "og:title", content: "دراسات الحالة | AI Solutions" },
      {
        property: "og:description",
        content:
          "مشاريع فعلية في أتمتة الأعمال ووكلاء الذكاء الاصطناعي — قبل/بعد، workflows، وأثر واضح.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: "https://ai-solutions-22.lovable.app/case-studies",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://ai-solutions-22.lovable.app/case-studies",
      },
    ],
  }),
  component: CaseStudiesIndex,
});

function CaseStudiesIndex() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AmbientBackground />
      <Navbar />
      <main className="mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-28">
        <div className="max-w-2xl">
          <div className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
            / دراسات الحالة
          </div>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-foreground">
            مشاريع فعلية — من يدوي إلى تلقائي
          </h1>
          <p className="mt-4 text-muted-foreground">
            كل مشروع فيه تفاصيل التحدي، الحل، مخطط الـ workflow، والأثر
            المُقاس على أرض الواقع.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {cases.map((c) => (
            <Link
              key={c.id}
              to="/case-studies/$slug"
              params={{ slug: c.id }}
              className="group text-start rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-[0_12px_30px_-12px_rgba(232,89,12,0.25)]"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {c.sector}
                </span>
                <ArrowUpLeft
                  size={18}
                  className="text-muted-foreground group-hover:text-accent transition-colors"
                />
              </div>
              <h2 className="mt-6 font-display font-semibold text-lg text-foreground leading-snug">
                {c.title}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                {c.summary}
              </p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {c.stack.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[10px] px-2 py-1 rounded-md bg-foreground/5 text-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
