import { Link } from "@tanstack/react-router";
import { ArrowUpLeft, ArrowLeft } from "lucide-react";
import { SignatureDivider } from "./SignatureDivider";
import { cases } from "@/lib/content";

export function CaseStudies() {
  const preview = cases.slice(0, 3);

  return (
    <section id="cases" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <div className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
            / دراسات الحالة
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
            مشاريع فعلية — من يدوي إلى تلقائي
          </h2>
          <p className="mt-4 text-muted-foreground">
            اضغط على أي بطاقة لتشاهد تفاصيل المشروع كاملة ومخطط الـ workflow.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {preview.map((c) => (
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
              <h3 className="mt-6 font-display font-semibold text-lg text-foreground leading-snug">
                {c.title}
              </h3>
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

        <div className="mt-10 flex justify-center">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 h-11 px-6 rounded-full border border-border text-foreground font-semibold hover:border-accent hover:text-accent transition"
          >
            شوف كل المشاريع
            <ArrowLeft size={16} />
          </Link>
        </div>

        <div className="mt-20">
          <SignatureDivider />
        </div>
      </div>
    </section>
  );
}
