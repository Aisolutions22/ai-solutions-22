import { useState } from "react";
import { Play, X, ArrowUpLeft } from "lucide-react";
import { SignatureDivider } from "./SignatureDivider";

// TODO: محتوى حقيقي — استبدل هذه البيانات ببيانات المشاريع الفعلية
const cases = [
  {
    id: "retail-ops",
    sector: "تجارة تجزئة",
    title: "أتمتة الطلبات والمخزون لمتجر متعدد الفروع",
    summary:
      "ربط WhatsApp Business بنظام المخزون و CRM، مع وكيل AI للرد على الاستفسارات وتأهيل العملاء تلقائياً.",
    stack: ["n8n", "WhatsApp API", "AI Agent"],
    impact: "قلّل الوقت اليدوي بنسبة كبيرة على فريق التشغيل.",
  },
  {
    id: "clinic-ai",
    sector: "قطاع طبي",
    title: "وكيل حجوزات ذكي لعيادة متعددة الأطباء",
    summary:
      "وكيل AI يستقبل الحجوزات على مدار الساعة، يتحقق من التوفر، ويرسل تذكيرات تلقائية للمرضى.",
    stack: ["AI Agent", "Calendar", "n8n"],
    impact: "غطاء استقبال 24/7 بدون توظيف إضافي.",
  },
  {
    id: "b2b-dashboard",
    sector: "خدمات B2B",
    title: "Dashboard تشغيلي موحّد لفريق المبيعات",
    summary:
      "لوحة تحكم لحظية تجمع بيانات المبيعات والتشغيل من عدة مصادر في مكان واحد.",
    stack: ["Dashboard", "n8n", "API"],
    impact: "قرارات يومية أسرع اعتماداً على بيانات موحّدة.",
  },
];

function WorkflowSvg() {
  // Simple abstract workflow: nodes connected by lines
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
      {/* connections */}
      <path d="M 60 80 L 170 40" stroke="var(--manual)" strokeWidth="1.2" fill="none" markerEnd="url(#arrow)" />
      <path d="M 60 80 L 170 120" stroke="var(--manual)" strokeWidth="1.2" fill="none" markerEnd="url(#arrow)" />
      <path d="M 210 40 L 320 80" stroke="var(--manual)" strokeWidth="1.2" fill="none" markerEnd="url(#arrow)" />
      <path d="M 210 120 L 320 80" stroke="var(--accent)" strokeWidth="1.6" fill="none" markerEnd="url(#arrow)" />
      {/* nodes */}
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

export function CaseStudies() {
  const [open, setOpen] = useState<string | null>(null);
  const active = cases.find((c) => c.id === open);

  return (
    <section id="cases" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <div className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
            / دراسات الحالة
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
            مشاريع فعلية — من يدوي إلى تلقائي
          </h2>
          <p className="mt-4 text-muted-foreground">
            اضغط على أي بطاقة لتشاهد فيديو قبل/بعد ومخطط الـ workflow المبسّط.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {cases.map((c) => (
            <button
              key={c.id}
              onClick={() => setOpen(c.id)}
              className="group text-start rounded-2xl border border-border bg-card p-6 hover:border-foreground/40 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {c.sector}
                </span>
                <ArrowUpLeft
                  size={18}
                  className="text-muted-foreground group-hover:text-accent transition-colors"
                />
              </div>
              <h3 className="mt-6 font-display font-semibold text-lg text-foreground leading-snug">
                {c.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                {c.summary}
              </p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {c.stack.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[10px] px-2 py-1 rounded-md bg-foreground/5 text-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </button>
          ))}
        </div>

        <div className="mt-20">
          <SignatureDivider />
        </div>
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          className="fixed inset-0 z-50 grid place-items-center bg-black/60 backdrop-blur-sm p-4"
          onClick={() => setOpen(null)}
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-background border border-border p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(null)}
              className="absolute top-4 left-4 p-2 rounded-full hover:bg-foreground/5"
              aria-label="إغلاق"
            >
              <X size={18} />
            </button>
            <div className="font-mono text-[10px] uppercase tracking-widest text-accent">
              {active.sector}
            </div>
            <h3 className="mt-2 font-display font-bold text-2xl sm:text-3xl text-foreground">
              {active.title}
            </h3>
            <p className="mt-3 text-muted-foreground">{active.summary}</p>

            {/* TODO: محتوى حقيقي — استبدل placeholder الفيديو بفيديو قبل/بعد فعلي 60-90 ثانية */}
            <div className="mt-6 aspect-video rounded-xl bg-[color:var(--surface-dark)] grid place-items-center text-white/70">
              <div className="flex flex-col items-center gap-2">
                <div className="h-12 w-12 rounded-full bg-accent grid place-items-center">
                  <Play size={20} className="text-accent-foreground translate-x-[-2px]" />
                </div>
                <span className="text-xs font-mono uppercase tracking-widest">
                  Before / After — Placeholder
                </span>
              </div>
            </div>

            <div className="mt-8">
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                / Workflow
              </div>
              <div className="mt-3 rounded-xl border border-border p-6 bg-card">
                <WorkflowSvg />
              </div>
            </div>

            <div className="mt-6 flex items-start gap-3 rounded-xl bg-foreground/[0.03] p-4">
              <div className="h-2 w-2 mt-2 rounded-full bg-accent shrink-0" />
              <p className="text-sm text-foreground">
                <span className="font-semibold">الأثر: </span>
                {active.impact}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
