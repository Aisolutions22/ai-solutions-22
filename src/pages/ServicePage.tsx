import { ArrowLeft, Workflow, Bot, LayoutDashboard, Globe } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { AmbientBackground } from "@/components/AmbientBackground";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { getServiceBySlug, getCases, type ServiceIcon } from "@/lib/content";
import { useDict, useLocale, localizeHref } from "@/lib/i18n";

const iconMap: Record<ServiceIcon, typeof Workflow> = {
  Workflow, Bot, LayoutDashboard, Globe,
};

export function ServicePage({ slug }: { slug: string }) {
  const d = useDict();
  const locale = useLocale();
  const service = getServiceBySlug(slug, locale)!;
  const Icon = iconMap[service.icon];
  const related = getCases(locale).filter((c) => c.stack.includes(service.relatedTag)).slice(0, 3);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <AmbientBackground />
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 sm:px-8 py-16 sm:py-24">
        <a href={localizeHref("/services", locale)} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition">
          <ArrowLeft size={14} />
          {d.servicePage.back}
        </a>

        <div className="mt-8 flex items-center gap-4">
          <div className="h-12 w-12 rounded-xl bg-foreground text-background grid place-items-center">
            <Icon size={22} strokeWidth={1.75} />
          </div>
          <div className="font-mono text-[11px] uppercase tracking-widest text-accent">{service.tag}</div>
        </div>

        <h1 className="mt-4 font-display font-bold text-3xl sm:text-4xl text-foreground leading-tight">{service.heroTitle}</h1>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{service.heroDesc}</p>

        <section className="mt-14">
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{d.servicePage.audienceSection}</div>
          <ul className="mt-4 space-y-3">
            {service.audience.map((a) => (
              <li key={a} className="flex items-start gap-3 rounded-xl bg-foreground/[0.03] p-4">
                <div className="h-2 w-2 mt-2 rounded-full bg-accent shrink-0" />
                <p className="text-sm text-foreground leading-relaxed">{a}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-14">
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{d.servicePage.processSection}</div>
          <ol className="mt-4 grid gap-4 sm:grid-cols-2">
            {service.process.map((p, i) => (
              <li key={p.title} className="rounded-2xl border border-border bg-card p-5">
                <div className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="mt-2 font-display font-semibold text-foreground">{p.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-14">
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{d.servicePage.faqSection}</div>
          <Accordion type="single" collapsible className="mt-4">
            {service.faq.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`}>
                <AccordionTrigger className="text-start text-foreground font-medium">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {related.length > 0 && (
          <section className="mt-16">
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{d.servicePage.relatedSection}</div>
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

        <section className="mt-16 rounded-2xl bg-[color:var(--surface-dark)] text-white p-8 sm:p-10 text-center">
          <h2 className="font-display font-bold text-2xl sm:text-3xl">{d.servicePage.readyH2}</h2>
          <p className="mt-3 text-white/70 text-sm sm:text-base">{d.servicePage.readyDesc}</p>
          <a href={localizeHref("/#contact", locale)} className="mt-6 inline-flex items-center h-11 px-6 rounded-full bg-accent text-accent-foreground font-semibold hover:opacity-90 transition">
            {d.servicePage.readyCta}
          </a>
        </section>
      </main>
    </div>
  );
}

export function ServiceNotFoundPage() {
  const d = useDict();
  const locale = useLocale();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="mx-auto max-w-2xl px-5 py-24 text-center">
        <h1 className="text-3xl font-bold">{d.servicePage.notFoundH1}</h1>
        <p className="mt-3 text-muted-foreground">{d.servicePage.notFoundDesc}</p>
        <a href={localizeHref("/services", locale)} className="mt-6 inline-flex items-center gap-2 h-11 px-6 rounded-full bg-accent text-accent-foreground font-semibold">
          {d.servicePage.back}
        </a>
      </main>
    </div>
  );
}
