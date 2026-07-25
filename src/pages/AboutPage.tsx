import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { AmbientBackground } from "@/components/AmbientBackground";
import { SignatureDivider } from "@/components/SignatureDivider";
import { useDict, useLocale, localizeHref } from "@/lib/i18n";

export function AboutPage() {
  const d = useDict();
  const locale = useLocale();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AmbientBackground />
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 sm:px-8 py-16 sm:py-24">
        <div className="font-mono text-xs text-muted-foreground uppercase tracking-widest">{d.about.section}</div>
        <h1 className="mt-3 font-display font-bold text-3xl sm:text-5xl text-foreground leading-tight">{d.about.h1}</h1>
        <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{d.about.intro}</p>

        <div className="mt-12"><SignatureDivider /></div>

        <section className="mt-14">
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{d.about.whySection}</div>
          <h2 className="mt-3 font-display font-semibold text-2xl sm:text-3xl text-foreground">{d.about.whyH2}</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">{d.about.whyDesc}</p>
        </section>

        <section className="mt-14">
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{d.about.diffSection}</div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {d.about.differentiators.map((it, i) => (
              <article key={i} className="rounded-2xl border border-border bg-card p-5">
                <div className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="mt-2 font-display font-semibold text-foreground leading-snug">{it.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{d.about.sectorsSection}</div>
          <div className="mt-4 flex flex-wrap gap-2">
            {d.about.sectors.map((s) => (
              <span key={s} className="font-mono text-xs px-3 py-1.5 rounded-full bg-foreground/5 text-foreground">{s}</span>
            ))}
          </div>
          <a href={localizeHref("/case-studies", locale)} className="mt-5 inline-flex items-center gap-2 text-sm text-accent font-semibold hover:opacity-80">
            {d.about.sectorsCta}
            <ArrowLeft size={14} />
          </a>
        </section>

        <section className="mt-14">
          <a href="https://mali.aisolutions22.cloud" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-accent font-semibold hover:opacity-80">
            {d.about.founderCta}
            <ArrowLeft size={16} />
          </a>
        </section>

        <section className="mt-16 relative rounded-3xl bg-card text-card-foreground p-8 sm:p-12 overflow-hidden">
          <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full opacity-30 blur-3xl" style={{ background: "var(--accent)" }} aria-hidden="true" />
          <div className="relative">
            <div className="font-mono text-xs text-card-foreground/60 uppercase tracking-widest">{d.about.nextSection}</div>
            <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl leading-tight">{d.about.nextH2}</h2>
            <p className="mt-4 text-card-foreground/70 leading-relaxed">{d.about.nextDesc}</p>
            <a href={`mailto:hello@aisolutions22.cloud?subject=${encodeURIComponent(d.contact.mailSubject)}`} className="mt-8 inline-flex items-center gap-2 h-12 px-6 rounded-full bg-accent text-accent-foreground font-semibold hover:opacity-90 transition">
              {d.about.nextCta}
              <ArrowLeft size={18} />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
