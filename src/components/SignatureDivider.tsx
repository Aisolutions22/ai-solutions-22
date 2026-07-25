import { useLocale } from "@/lib/i18n";

const HERO_NODES: [number, number][] = [
  [20, 60],
  [110, 32],
  [200, 44],
  [290, 22],
  [380, 26],
];
const HERO_PATH = "M20,60 C90,20 140,70 200,44 C260,18 310,55 380,26";

export function HeroNetwork({ className = "" }: { className?: string }) {
  const locale = useLocale();
  const base =
    locale === "ar"
      ? "w-full max-w-lg mx-auto [transform:scaleX(-1)]"
      : "w-full max-w-lg mx-auto";
  return (
    <svg
      viewBox="0 0 400 80"
      className={`${base} ${className}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="sig-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--manual)" />
          <stop offset="100%" stopColor="var(--accent)" />
        </linearGradient>
      </defs>
      <path d={HERO_PATH} fill="none" stroke="var(--border)" strokeWidth="1" />
      <path
        d={HERO_PATH}
        fill="none"
        stroke="url(#sig-grad)"
        strokeWidth="1.5"
        strokeDasharray="6 494"
        className="sig-path-anim"
      />
      {HERO_NODES.map(([x, y], i) => {
        const isLast = i === HERO_NODES.length - 1;
        return (
          <circle
            key={`${x}-${y}`}
            cx={x}
            cy={y}
            r={isLast ? 5 : 3.5}
            fill={isLast ? "var(--accent)" : "var(--manual)"}
          />
        );
      })}
    </svg>
  );
}

export function SignatureDivider({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative w-full max-w-md mx-auto h-6 ${className}`}
      aria-hidden="true"
    >
      {/* base track */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-border" />
      {/* animated fill track: from right (start in RTL) to left, gray -> orange gradient */}
      <div
        className="sig-fill-anim absolute top-1/2 -translate-y-1/2 right-0 h-px"
        style={{
          background:
            "linear-gradient(to left, var(--manual), var(--accent))",
          animation: "sig-fill 4s ease-in-out infinite alternate",
        }}
      />
      {/* 4 dots evenly spaced */}
      {[0, 33.33, 66.66, 100].map((pos, i) => (
        <span
          key={i}
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full"
          style={{
            right: `${pos}%`,
            width: i === 3 ? 10 : 7,
            height: i === 3 ? 10 : 7,
            background:
              i === 3 ? "var(--accent)" : "var(--manual)",
          }}
        />
      ))}
      {/* traveling dot */}
      <span
        className="sig-dot-anim absolute top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full"
        style={{
          width: 6,
          height: 6,
          background: "var(--accent)",
          boxShadow: "0 0 12px var(--accent)",
          animation: "sig-travel 4s ease-in-out infinite alternate",
        }}
      />
    </div>
  );
}
