import { ArrowLeft, Play } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { AmbientBackground } from "@/components/AmbientBackground";
import { WorkflowSvg } from "@/components/WorkflowSvg";
import { getCaseBySlug, getCases } from "@/lib/content";
import { useDict, useLocale, localizeHref } from "@/lib/i18n";

export function CaseStudyPage({ slug }: { slug: string }) {
  const d = useDict();
  const locale = useLocale();
  const study = getCaseBySlug(slug, locale)!;
  const related = getCases(locale).filter((c) => c.id !== study.id).slice(0, 2);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <AmbientBackground />
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 sm:px-8 py-16 sm:py-24">
        <a href={localizeHref("/case-studies", locale)} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition">
          <ArrowLeft size={14} />
          {d.caseStudyPage.back}
        </a>

        <div className="mt-8 font-mono text-[11px] uppercase tracking-widest text-accent">{study.sector}</div>
        <h1 className="mt-3 font-display font-bold text-3xl sm:text-4xl text-foreground leading-tight">{study.title}</h1>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{study.summary}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {study.stack.map((t) => (
            <span key={t} className="font-mono text-[10px] px-2 py-1 rounded-md bg-foreground/5 text-foreground">{t}</span>
          ))}
        </div>

        <div className="mt-10 aspect-video rounded-xl bg-panel grid place-items-center text-panel-foreground/70">
          <div className="flex flex-col items-center gap-2">
            <div className="h-12 w-12 rounded-full bg-accent grid place-items-center">
              <Play size={20} className="text-accent-foreground translate-x-[-2px]" />
            </div>
            <span className="text-xs font-mono uppercase tracking-widest">{d.caseStudyPage.videoPlaceholder}</span>
          </div>
        </div>

        <section className="mt-12">
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{d.caseStudyPage.workflowSection}</div>
          <div className="mt-3 rounded-xl border border-border p-6 bg-card"><WorkflowSvg /></div>
        </section>

        <section className="mt-8 flex items-start gap-3 rounded-xl bg-foreground/[0.03] p-5">
          <div className="h-2 w-2 mt-2 rounded-full bg-accent shrink-0" />
          <p className="text-sm text-foreground leading-relaxed">
            <span className="font-semibold">{d.caseStudyPage.impact}</span>
            {study.impact}
          </p>
        </section>

        {related.length > 0 && (
          <section className="mt-16">
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{d.caseStudyPage.other}</div>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {related.map((c) => (
                <a key={c.id} href={localizeHref(`/case-studies/${c.id}`, locale)} className="rounded-2xl border border-border bg-card p-5 transition hover:-translate-y-0.5 hover:border-accent">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{c.sector}</div>
                  <div className="mt-2 font-semibold text-foreground leading-snug">{c.title}</div>
                </a>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

export function CaseStudyNotFoundPage() {
  const d = useDict();
  const locale = useLocale();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="mx-auto max-w-2xl px-5 py-24 text-center">
        <h1 className="text-3xl font-bold">{d.caseStudyPage.notFoundH1}</h1>
        <p className="mt-3 text-muted-foreground">{d.caseStudyPage.notFoundDesc}</p>
        <a href={localizeHref("/case-studies", locale)} className="mt-6 inline-flex items-center gap-2 h-11 px-6 rounded-full bg-accent text-accent-foreground font-semibold">
          {d.caseStudyPage.back}
        </a>
      </main>
    </div>
  );
}
