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
