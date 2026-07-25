import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

import { useRouterState } from "@tanstack/react-router";
import { useLocale, useDict, localizeHref, alternatePath } from "@/lib/i18n";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const locale = useLocale();
  const d = useDict();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const alt = alternatePath(pathname);
  const other = locale === "ar" ? alt.en : alt.ar;
  const otherLabel = locale === "ar" ? d.langSwitch.toEn : d.langSwitch.toAr;

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    try { localStorage.setItem("theme", next ? "dark" : "light"); } catch {}
  };


  const links = [
    { href: localizeHref("/services", locale), label: d.nav.services },
    { href: localizeHref("/#process", locale), label: d.nav.process },
    { href: localizeHref("/case-studies", locale), label: d.nav.cases },
    { href: localizeHref("/about", locale), label: d.nav.about },
    { href: localizeHref("/#contact", locale), label: d.nav.contact },
  ];

  const logoHref = localizeHref("/#top", locale);
  const ctaHref = localizeHref("/#contact", locale);

  return (
    <header className="sticky top-0 z-50 bg-background/85 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 h-16 flex items-center justify-between gap-6">
        <a
          href={logoHref}
          className="font-display font-bold text-lg tracking-tight text-foreground shrink-0"
        >
          AI Solutions
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-foreground">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-accent transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={other}
            hrefLang={locale === "ar" ? "en" : "ar"}
            className="h-10 min-w-10 px-2 inline-flex items-center justify-center rounded-full font-mono text-xs text-muted-foreground hover:bg-foreground/5 hover:text-foreground transition-colors"
            aria-label={otherLabel}
          >
            {otherLabel}
          </a>
          <button
            type="button"
            onClick={toggleTheme}
            className="h-10 w-10 inline-flex items-center justify-center rounded-full text-muted-foreground hover:bg-foreground/5 hover:text-foreground transition-colors"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a
            href={ctaHref}
            className="hidden sm:inline-flex items-center h-10 px-5 rounded-full bg-accent text-accent-foreground text-sm font-semibold hover:opacity-90 transition"
          >
            {d.nav.cta}
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden h-10 w-10 inline-flex items-center justify-center rounded-full hover:bg-foreground/5 transition-colors"
            aria-label={d.nav.menu}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="flex flex-col px-5 py-4 gap-4 text-sm">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-3 px-2 -mx-2 rounded-lg hover:bg-foreground/5 active:bg-foreground/10 transition-colors">
                {l.label}
              </a>
            ))}
            <a
              href={ctaHref}
              onClick={() => setOpen(false)}
              className="sm:hidden inline-flex items-center justify-center h-11 px-5 rounded-full bg-accent text-accent-foreground font-semibold"
            >
              {d.nav.cta}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
