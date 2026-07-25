import { Workflow, Bot, LayoutDashboard, Globe } from "lucide-react";
import { getServices, type ServiceIcon } from "@/lib/content";
import { useDict, useLocale, localizeHref } from "@/lib/i18n";

const iconMap: Record<ServiceIcon, typeof Workflow> = {
  Workflow, Bot, LayoutDashboard, Globe,
};

export function Services() {
  const d = useDict();
  const locale = useLocale();
  const services = getServices(locale);

  return (
    <section id="services" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <div className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
            {d.services.section}
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">{d.services.h2}</h2>
          <p className="mt-4 text-muted-foreground">{d.services.desc}</p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => {
            const Icon = iconMap[s.icon];
            return (
              <a
                key={s.slug}
                href={localizeHref(`/services/${s.slug}`, locale)}
                className="group text-start relative rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_12px_30px_-16px_rgba(232,89,12,0.35)]"
              >
                <div className="flex items-center justify-between">
                  <div className="h-11 w-11 rounded-xl bg-foreground text-background grid place-items-center">
                    <Icon size={20} strokeWidth={1.75} />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {s.tag}
                  </span>
                </div>
                <h3 className="mt-6 font-display font-semibold text-lg text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.heroDesc}</p>
              </a>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <a
            href={localizeHref("/services", locale)}
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:opacity-80 transition"
          >
            {d.services.viewAll}
          </a>
        </div>
      </div>
    </section>
  );
}
