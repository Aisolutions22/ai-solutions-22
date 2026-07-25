type Tool = { name: string; color: string };

export function ToolBadge({ tool }: { tool: Tool }) {
  return (
    <span className="tool-badge inline-flex items-center gap-2 rounded-full border border-border bg-foreground/[0.03] px-2.5 py-1 font-mono text-[11px] text-foreground">
      <span
        aria-hidden
        className="tool-badge-dot"
        style={{
          width: 8,
          height: 8,
          borderRadius: 9999,
          background: tool.color,
          boxShadow: `0 0 8px ${cssShadowColor(tool.color)}`,
          display: "inline-block",
          flexShrink: 0,
        }}
      />
      {tool.name}
    </span>
  );
}

export function ToolBadgeRow({ tools }: { tools: Tool[] }) {
  if (!tools?.length) return null;
  return (
    <div className="flex flex-wrap gap-2">
      {tools.map((t) => (
        <ToolBadge key={t.name} tool={t} />
      ))}
    </div>
  );
}

// For gradient values (e.g. Instagram), fall back to a neutral glow.
function cssShadowColor(color: string): string {
  if (color.trim().startsWith("linear-gradient")) return "rgba(221,42,123,0.6)";
  return color;
}
