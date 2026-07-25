import { SignatureDivider } from "./SignatureDivider";
import { useDict } from "@/lib/i18n";

export function Process() {
  const d = useDict();
  return (
    <section id="process" className="bg-[color:var(--surface-dark)] text-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <div className="font-mono text-xs text-white/60 uppercase tracking-widest">
            {d.process.section}
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">
            {d.process.h2}
          </h2>
        </div>

        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {d.process.steps.map((s, i) => (
            <li key={i} className="relative">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-3xl font-medium text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="h-px flex-1 bg-white/15" />
              </div>
              <h3 className="mt-5 font-display font-semibold text-xl text-white">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-white/65 leading-relaxed">
                {s.desc}
              </p>
              {i < d.process.steps.length - 1 && (
                <span className="hidden lg:block absolute top-4 -left-3 h-2 w-2 rounded-full bg-white/20" />
              )}
            </li>
          ))}
        </ol>

        <div className="mt-20 opacity-90">
          <SignatureDivider />
        </div>
      </div>
    </section>
  );
}
