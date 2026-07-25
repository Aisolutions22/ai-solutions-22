import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "@tanstack/react-router";

type NavLink = { href: string; label: string; external?: boolean };

const links: NavLink[] = [
  { href: "/services", label: "الخدمات" },
  { href: "/#process", label: "آلية العمل" },
  { href: "/case-studies", label: "دراسات الحالة", external: false },
  { href: "/about", label: "من نحن" },
  { href: "/#contact", label: "تواصل" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-background/85 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 h-16 flex items-center justify-between gap-6">
        <a
          href="/#top"
          className="font-display font-bold text-lg tracking-tight text-foreground shrink-0"
        >
          AI Solutions
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-foreground">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-accent transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="/#contact"
            className="hidden sm:inline-flex items-center h-10 px-5 rounded-full bg-accent text-accent-foreground text-sm font-semibold hover:opacity-90 transition"
          >
            احجز استشارة
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 -mr-2"
            aria-label="القائمة"
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
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-1"
              >
                {l.label}
              </a>
            ))}
            <a
              href="/#contact"
              onClick={() => setOpen(false)}
              className="sm:hidden inline-flex items-center justify-center h-11 px-5 rounded-full bg-accent text-accent-foreground font-semibold"
            >
              احجز استشارة
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
