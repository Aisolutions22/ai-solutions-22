import { ArrowLeft, Mail, MessageCircle, Linkedin } from "lucide-react";
import { useDict, useLocale, localizeHref } from "@/lib/i18n";

export function Contact() {
  const d = useDict();
  const locale = useLocale();
  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <div className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
              {d.contact.section}
            </div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
              {d.contact.h2}
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              {d.contact.desc}
            </p>
            <a
              href={localizeHref("/about", locale)}
              className="mt-6 inline-flex items-center gap-2 text-accent font-semibold hover:opacity-80"
            >
              {d.contact.aboutLink}
              <ArrowLeft size={16} />
            </a>

            <div className="mt-10 space-y-3">
              <a href="mailto:hello@aisolutions22.cloud" className="flex items-center gap-3 group">
                <span className="h-10 w-10 rounded-full border border-border grid place-items-center group-hover:border-foreground/50 transition">
                  <Mail size={16} />
                </span>
                <span className="text-foreground font-mono text-sm">hello@aisolutions22.cloud</span>
              </a>
              <a href="https://wa.me/000000000000" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                <span className="h-10 w-10 rounded-full border border-border grid place-items-center group-hover:border-foreground/50 transition">
                  <MessageCircle size={16} />
                </span>
                <span className="text-foreground text-sm">{d.contact.whatsapp}</span>
              </a>
              <a href="https://linkedin.com/company/ai-solutions" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                <span className="h-10 w-10 rounded-full border border-border grid place-items-center group-hover:border-foreground/50 transition">
                  <Linkedin size={16} />
                </span>
                <span className="text-foreground text-sm">{d.contact.linkedin}</span>
              </a>
            </div>
          </div>

          <div className="relative rounded-3xl bg-panel text-panel-foreground p-8 sm:p-12 overflow-hidden">
            <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full opacity-30 blur-3xl" style={{ background: "var(--accent)" }} aria-hidden="true" />
            <div className="relative">
              <div className="font-mono text-xs text-panel-foreground/60 uppercase tracking-widest">
                {d.contact.cardSection}
              </div>
              <h3 className="mt-3 font-display font-bold text-3xl sm:text-4xl leading-tight">
                {d.contact.cardH3}
              </h3>
              <p className="mt-4 text-panel-foreground/70 leading-relaxed">{d.contact.cardDesc}</p>
              <a
                href={`mailto:hello@aisolutions22.cloud?subject=${encodeURIComponent(d.contact.mailSubject)}`}
                className="mt-8 inline-flex items-center gap-2 h-12 px-6 rounded-full bg-accent text-accent-foreground font-semibold hover:opacity-90 transition"
              >
                {d.contact.cardCta}
                <ArrowLeft size={18} />
              </a>
              <div className="mt-8 pt-6 border-t border-panel-foreground/10 flex items-center gap-6 font-mono text-xs text-panel-foreground/50">
                <span>{d.contact.cardFoot1}</span>
                <span>•</span>
                <span>{d.contact.cardFoot2}</span>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-24 pt-8 border-t border-border flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
          <span className="font-display font-bold text-foreground">AI Solutions</span>
          <span>© {new Date().getFullYear()} — {d.contact.rights}</span>
        </footer>
      </div>
    </section>
  );
}
