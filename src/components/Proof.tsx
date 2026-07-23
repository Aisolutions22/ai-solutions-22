const stats = [
  { value: "+15", label: "مشروع مكتمل" },
  { value: "+10", label: "قطاع صناعي" },
  { value: "+6", label: "دول" },
  { value: "24h", label: "وقت الاستجابة" },
];

export function Proof() {
  return (
    <section aria-label="أرقامنا" className="border-y border-border bg-background">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center md:text-start">
            <div className="font-mono text-3xl sm:text-4xl font-medium text-foreground tabular-nums">
              {s.value}
            </div>
            <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
