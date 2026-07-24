import { useEffect, useRef, useState } from "react";

const stats = [
  { target: 15, prefix: "+", suffix: "", label: "مشروع مكتمل" },
  { target: 10, prefix: "+", suffix: "", label: "قطاع صناعي" },
  { target: 6, prefix: "+", suffix: "", label: "دول" },
  { target: 24, prefix: "", suffix: "h", label: "وقت الاستجابة" },
];

function useCountUp(target: number, active: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setValue(target);
      return;
    }
    const duration = 900;
    const start = performance.now();
    let frame: number;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setValue(Math.round(target * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target]);

  return value;
}

function Stat({ target, prefix, suffix, label, active }: (typeof stats)[number] & { active: boolean }) {
  const value = useCountUp(target, active);
  return (
    <div className="text-center md:text-start">
      <div className="font-mono text-3xl sm:text-4xl font-medium text-foreground tabular-nums">
        {prefix}
        {value}
        {suffix}
      </div>
      <div className="mt-1 text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

export function Proof() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} aria-label="أرقامنا" className="border-y border-border bg-background">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4">
        {stats.map((s) => (
          <Stat key={s.label} {...s} active={active} />
        ))}
      </div>
    </section>
  );
}
