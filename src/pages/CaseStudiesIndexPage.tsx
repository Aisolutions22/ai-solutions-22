import { ArrowUpLeft, Sparkles, FlaskConical } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { AmbientBackground } from "@/components/AmbientBackground";
import { ToolBadgeRow } from "@/components/ToolBadge";
import { getCases } from "@/lib/content";
import { useDict, useLocale, localizeHref } from "@/lib/i18n";

export function CaseStudiesIndexPage() {
  const d = useDict();
  const locale = useLocale();
  const cases = getCases(locale);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AmbientBackground />
      <Navbar />
      <main className="mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-28">
        <div className="max-w-2xl">
          <div className="font-mono text-xs text-muted-foreground uppercase tracking-widest">{d.cases.section}</div>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-foreground">{d.casesIndex.h1}</h1>
          <p className="mt-4 text-muted-foreground">{d.casesIndex.desc}</p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((c) => (
            <a
              key={c.id}
              href={localizeHref(`/case-studies/${c.id}`, locale)}
              className="group relative flex flex-col text-start rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-[0_12px_30px_-12px_rgba(232,89,12,0.25)]"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{c.sector}</span>
                <ArrowUpLeft size={18} className="text-muted-foreground group-hover:text-accent transition-colors" />
              </div>

              {c.featured && (
                <span className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-accent text-accent-foreground px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest">
                  <Sparkles size={12} />
                  {d.caseStudyPage.featuredBadge}
                </span>
              )}
              {c.isDemo && (
                <span className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-foreground/10 text-muted-foreground px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest">
                  <FlaskConical size={12} />
                  {d.caseStudyPage.demoBadge}
                </span>
              )}

              <h2 className="mt-4 font-display font-semibold text-lg text-foreground leading-snug">{c.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3">{c.summary}</p>

              <div className="mt-5">
                <ToolBadgeRow tools={c.tools} />
              </div>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
