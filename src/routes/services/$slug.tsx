import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Workflow, Bot, LayoutDashboard, Globe } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { AmbientBackground } from "@/components/AmbientBackground";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  getServiceBySlug,
  cases,
  type ServiceIcon,
} from "@/lib/content";

const iconMap: Record<ServiceIcon, typeof Workflow> = {
  Workflow,
  Bot,
  LayoutDashboard,
  Globe,
};

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getServiceBySlug(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "الخدمة غير موجودة | AI Solutions" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { service } = loaderData;
    const url = `https://ai-solutions-22.lovable.app/services/${service.slug}`;
    return {
      meta: [
        { title: `${service.title} — ${service.heroTitle} | AI Solutions` },
        { name: "description", content: service.heroDesc },
        { property: "og:title", content: service.title },
        { property: "og:description", content: service.heroDesc },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: service.faq.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        },
      ],
    };
  },
  component: ServicePage,
  notFoundComponent: ServiceNotFound,
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

function ServiceNotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="mx-auto max-w-2xl px-5 py-24 text-center">
        <h1 className="text-3xl font-bold">الخدمة غير موجودة</h1>
        <p className="mt-3 text-muted-foreground">
          الرابط اللي فتحته مش موجود أو تم نقله.
        </p>
        <Link
          to="/services"
          className="mt-6 inline-flex items-center gap-2 h-11 px-6 rounded-full bg-accent text-accent-foreground font-semibold"
        >
          كل الخدمات
        </Link>
      </main>
    </div>
  );
}

function ServicePage() {
  const { service } = Route.useLoaderData() as { service: import("@/lib/content").Service };
  const Icon = iconMap[service.icon];
  const related = cases
    .filter((c) => c.stack.includes(service.relatedTag))
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <AmbientBackground />
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 sm:px-8 py-16 sm:py-24">
        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition"
        >
          <ArrowLeft size={14} />
          كل الخدمات
        </Link>

        <div className="mt-8 flex items-center gap-4">
          <div className="h-12 w-12 rounded-xl bg-foreground text-background grid place-items-center">
            <Icon size={22} strokeWidth={1.75} />
          </div>
          <div className="font-mono text-[11px] uppercase tracking-widest text-accent">
            {service.tag}
          </div>
        </div>

        <h1 className="mt-4 font-display font-bold text-3xl sm:text-4xl text-foreground leading-tight">
          {service.heroTitle}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
          {service.heroDesc}
        </p>

        <section className="mt-14">
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            / لمين الخدمة دي
          </div>
          <ul className="mt-4 space-y-3">
            {service.audience.map((a: string) => (
              <li
                key={a}
                className="flex items-start gap-3 rounded-xl bg-foreground/[0.03] p-4"
              >
                <div className="h-2 w-2 mt-2 rounded-full bg-accent shrink-0" />
                <p className="text-sm text-foreground leading-relaxed">{a}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-14">
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            / إزاي بنشتغل
          </div>
          <ol className="mt-4 grid gap-4 sm:grid-cols-2">
            {service.process.map((p: { title: string; desc: string }, i: number) => (
              <li
                key={p.title}
                className="rounded-2xl border border-border bg-card p-5"
              >
                <div className="font-mono text-xs text-accent">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-2 font-display font-semibold text-foreground">
                  {p.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  {p.desc}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-14">
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            / أسئلة شائعة
          </div>
          <Accordion type="single" collapsible className="mt-4">
            {service.faq.map((f: { q: string; a: string }, i: number) => (
              <AccordionItem key={f.q} value={`item-${i}`}>
                <AccordionTrigger className="text-start text-foreground font-medium">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {related.length > 0 && (
          <section className="mt-16">
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              / دراسات حالة ذات صلة
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

        <section className="mt-16 rounded-2xl bg-[color:var(--surface-dark)] text-white p-8 sm:p-10 text-center">
          <h2 className="font-display font-bold text-2xl sm:text-3xl">
            جاهز تبدأ؟
          </h2>
          <p className="mt-3 text-white/70 text-sm sm:text-base">
            احجز استشارة مجانية ونشوف مع بعض إزاي الخدمة دي تناسب شركتك.
          </p>
          <a
            href="/#contact"
            className="mt-6 inline-flex items-center h-11 px-6 rounded-full bg-accent text-accent-foreground font-semibold hover:opacity-90 transition"
          >
            احجز استشارة مجانية
          </a>
        </section>
      </main>
    </div>
  );
}
