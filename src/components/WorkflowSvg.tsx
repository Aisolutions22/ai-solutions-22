export function WorkflowSvg() {
  return (
    <svg viewBox="0 0 420 160" className="w-full h-auto" aria-hidden="true">
      <defs>
        <marker
          id="arrow"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--accent)" />
        </marker>
      </defs>
      <path d="M 60 80 L 170 40" stroke="var(--manual)" strokeWidth="1.2" fill="none" markerEnd="url(#arrow)" />
      <path d="M 60 80 L 170 120" stroke="var(--manual)" strokeWidth="1.2" fill="none" markerEnd="url(#arrow)" />
      <path d="M 210 40 L 320 80" stroke="var(--manual)" strokeWidth="1.2" fill="none" markerEnd="url(#arrow)" />
      <path d="M 210 120 L 320 80" stroke="var(--accent)" strokeWidth="1.6" fill="none" markerEnd="url(#arrow)" />
      {[
        { x: 45, y: 80, label: "Input" },
        { x: 190, y: 40, label: "AI" },
        { x: 190, y: 120, label: "n8n" },
        { x: 340, y: 80, label: "CRM", accent: true },
      ].map((n) => (
        <g key={n.label}>
          <rect
            x={n.x - 30}
            y={n.y - 16}
            width="60"
            height="32"
            rx="8"
            fill={n.accent ? "var(--accent)" : "#fff"}
            stroke={n.accent ? "var(--accent)" : "var(--border)"}
          />
          <text
            x={n.x}
            y={n.y + 4}
            textAnchor="middle"
            fontSize="11"
            fontFamily="IBM Plex Mono, monospace"
            fill={n.accent ? "#fff" : "var(--foreground)"}
          >
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
