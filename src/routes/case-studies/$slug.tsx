import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Play } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { AmbientBackground } from "@/components/AmbientBackground";
import { WorkflowSvg } from "@/components/WorkflowSvg";
import { getCaseBySlug, cases } from "@/lib/content";

export const Route = createFileRoute("/case-studies/$slug")({
  loader: ({ params }) => {
    const study = getCaseBySlug(params.slug);
    if (!study) throw notFound();
    return { study };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "دراسة الحالة غير موجودة | AI Solutions" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { study } = loaderData;
    const url = `https://ai-solutions-22.lovable.app/case-studies/${study.id}`;
    return {
      meta: [
        { title: `${study.title} — دراسة حالة | AI Solutions` },
        { name: "description", content: study.summary },
        { property: "og:title", content: study.title },
        { property: "og:description", content: study.summary },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  component: CaseStudyPage,
  notFoundComponent: CaseNotFound,
  errorComponent: ({ error, reset }) => (
    <div className="min-h-screen grid place-items-center p-6 text-center">
      <div>
        <h1 className="text-xl font-semibold">حدث خطأ</h1>
        <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
        <button
          onClick={() => reset()}
          className="mt-4 inline-flex h-10 px-4 rounded-full bg-accent text-accent-foreground"
        >
          إعادة المحاولة
        </button>
      </div>
    </div>
  ),
});

function CaseNotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="mx-auto max-w-2xl px-5 py-24 text-center">
        <h1 className="text-3xl font-bold">دراسة الحالة غير موجودة</h1>
        <p className="mt-3 text-muted-foreground">
          الرابط اللي فتحته مش موجود أو تم نقله.
        </p>
        <Link
          to="/case-studies"
          className="mt-6 inline-flex items-center gap-2 h-11 px-6 rounded-full bg-accent text-accent-foreground font-semibold"
        >
          كل دراسات الحالة
        </Link>
      </main>
    </div>
  );
}

function CaseStudyPage() {
  const { study } = Route.useLoaderData();
  const related = cases.filter((c) => c.id !== study.id).slice(0, 2);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <AmbientBackground />
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 sm:px-8 py-16 sm:py-24">
        <Link
          to="/case-studies"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition"
        >
          <ArrowLeft size={14} />
          كل دراسات الحالة
        </Link>

        <div className="mt-8 font-mono text-[11px] uppercase tracking-widest text-accent">
          {study.sector}
        </div>
        <h1 className="mt-3 font-display font-bold text-3xl sm:text-4xl text-foreground leading-tight">
          {study.title}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
          {study.summary}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {study.stack.map((t) => (
            <span
              key={t}
              className="font-mono text-[10px] px-2 py-1 rounded-md bg-foreground/5 text-foreground"
            >
              {t}
            </span>
          ))}
        </div>

        {/* TODO: محتوى حقيقي — فيديو قبل/بعد فعلي */}
        <div className="mt-10 aspect-video rounded-xl bg-[color:var(--surface-dark)] grid place-items-center text-white/70">
          <div className="flex flex-col items-center gap-2">
            <div className="h-12 w-12 rounded-full bg-accent grid place-items-center">
              <Play
                size={20}
                className="text-accent-foreground translate-x-[-2px]"
              />
            </div>
            <span className="text-xs font-mono uppercase tracking-widest">
              Before / After — Placeholder
            </span>
          </div>
        </div>

        <section className="mt-12">
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            / Workflow
          </div>
          <div className="mt-3 rounded-xl border border-border p-6 bg-card">
            <WorkflowSvg />
          </div>
        </section>

        <section className="mt-8 flex items-start gap-3 rounded-xl bg-foreground/[0.03] p-5">
          <div className="h-2 w-2 mt-2 rounded-full bg-accent shrink-0" />
          <p className="text-sm text-foreground leading-relaxed">
            <span className="font-semibold">الأثر: </span>
            {study.impact}
          </p>
        </section>

        {related.length > 0 && (
          <section className="mt-16">
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              / مشاريع أخرى
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {related.map((c) => (
                <Link
                  key={c.id}
                  to="/case-studies/$slug"
                  params={{ slug: c.id }}
                  className="rounded-2xl border border-border bg-card p-5 transition hover:-translate-y-0.5 hover:border-accent"
                >
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {c.sector}
                  </div>
                  <div className="mt-2 font-semibold text-foreground leading-snug">
                    {c.title}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
