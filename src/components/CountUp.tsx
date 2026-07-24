import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

type Props = {
  value: string; // e.g. "+15", "24h", "10"
  duration?: number; // ms
};

/**
 * Counts up the numeric portion of a label from 0 → value the first time
 * it enters the viewport. Preserves any non-numeric prefix/suffix.
 */
export function CountUp({ value, duration = 1200 }: Props) {
  const match = value.match(/^(\D*)(\d+)(\D*)$/);
  const prefix = match?.[1] ?? "";
  const target = match ? parseInt(match[2], 10) : 0;
  const suffix = match?.[3] ?? "";

  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement | null>(null);
  const [n, setN] = useState(reduce || !match ? target : 0);
  const started = useRef(false);

  useEffect(() => {
    if (!match || reduce) return;
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const p = Math.min(1, (now - start) / duration);
              // easeOutCubic
              const eased = 1 - Math.pow(1 - p, 3);
              setN(Math.round(target * eased));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            io.disconnect();
          }
        });
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target, duration, reduce, match]);

  if (!match) return <span ref={ref}>{value}</span>;

  return (
    <span ref={ref}>
      {prefix}
      {n}
      {suffix}
    </span>
  );
}
