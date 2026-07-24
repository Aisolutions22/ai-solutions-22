import { motion, useReducedMotion } from "framer-motion";

/**
 * Larger, richer signature for the hero: a network of 5 nodes connected by
 * curved lines, with a pulse of light travelling along the path.
 * RTL: journey starts on the right (manual) and ends on the left (automated).
 */
export function HeroSignature() {
  const reduce = useReducedMotion();

  // Path across 5 nodes, right → left (RTL). viewBox 600x120.
  const nodes = [
    { x: 570, y: 60, accent: false }, // start (right / manual)
    { x: 440, y: 30, accent: false },
    { x: 300, y: 80, accent: false },
    { x: 160, y: 35, accent: false },
    { x: 30, y: 60, accent: true }, // end (left / automated)
  ];

  const d =
    `M ${nodes[0].x} ${nodes[0].y} ` +
    `C ${nodes[0].x - 60} ${nodes[0].y}, ${nodes[1].x + 60} ${nodes[1].y}, ${nodes[1].x} ${nodes[1].y} ` +
    `S ${nodes[2].x + 60} ${nodes[2].y}, ${nodes[2].x} ${nodes[2].y} ` +
    `S ${nodes[3].x + 60} ${nodes[3].y}, ${nodes[3].x} ${nodes[3].y} ` +
    `S ${nodes[4].x + 60} ${nodes[4].y}, ${nodes[4].x} ${nodes[4].y}`;

  return (
    <div className="w-full max-w-2xl mx-auto" aria-hidden="true">
      <svg
        viewBox="0 0 600 120"
        className="w-full h-auto"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="hero-sig-grad" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="var(--manual)" />
            <stop offset="100%" stopColor="var(--accent)" />
          </linearGradient>
          <radialGradient id="hero-sig-pulse" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="1" />
            <stop offset="60%" stopColor="var(--accent)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* base path */}
        <path
          d={d}
          fill="none"
          stroke="var(--border)"
          strokeWidth="1.25"
        />
        {/* colored overlay */}
        <path
          d={d}
          fill="none"
          stroke="url(#hero-sig-grad)"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.75"
        />

        {/* nodes */}
        {nodes.map((n, i) => (
          <g key={i}>
            <circle
              cx={n.x}
              cy={n.y}
              r={n.accent ? 7 : 5}
              fill={n.accent ? "var(--accent)" : "#fff"}
              stroke={n.accent ? "var(--accent)" : "var(--manual)"}
              strokeWidth="1.25"
            />
            {n.accent && (
              <motion.circle
                cx={n.x}
                cy={n.y}
                r={7}
                fill="none"
                stroke="var(--accent)"
                strokeWidth="1.25"
                initial={{ opacity: 0.6, scale: 1 }}
                animate={
                  reduce
                    ? undefined
                    : { opacity: [0.6, 0, 0.6], scale: [1, 2.6, 1] }
                }
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeOut" }}
                style={{ transformOrigin: `${n.x}px ${n.y}px` }}
              />
            )}
          </g>
        ))}

        {/* travelling pulse of light along the path */}
        {!reduce && (
          <>
            <circle r="10" fill="url(#hero-sig-pulse)">
              <animateMotion dur="5s" repeatCount="indefinite" path={d} />
            </circle>
            <circle r="3.5" fill="var(--accent)">
              <animateMotion dur="5s" repeatCount="indefinite" path={d} />
            </circle>
          </>
        )}
      </svg>
    </div>
  );
}
