import { ArrowLeft } from "lucide-react";
import { HeroNetwork } from "./SignatureDivider";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 pt-16 sm:pt-24 pb-20 sm:pb-28">
        <div className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          شريك أتمتة ذكاء اصطناعي موثوق
        </div>

        <h1 className="mt-6 font-display font-bold text-foreground text-[2.25rem] leading-[1.15] sm:text-6xl sm:leading-[1.08] max-w-4xl">
          نحوّل فوضى التشغيل اليومي إلى{" "}
          <span className="text-accent">نظام أعمال</span> يعمل بالذكاء
          الاصطناعي
        </h1>

        <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
          أنظمة أتمتة ووكلاء ذكاء اصطناعي مصممة خصيصاً لشركتك، مبنية على n8n
          — بدون فريق تقني داخلي.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-accent text-accent-foreground font-semibold hover:opacity-90 transition"
          >
            احجز استشارة مجانية
            <ArrowLeft size={18} />
          </a>
          <a
            href="#cases"
            className="inline-flex items-center h-12 px-6 rounded-full border border-border text-foreground font-semibold hover:border-foreground transition"
          >
            شاهد أعمالنا
          </a>
        </div>

        <div className="mt-16">
          <HeroNetwork />
          <div className="mt-3 flex justify-between max-w-lg mx-auto text-[11px] font-mono uppercase tracking-widest">
            <span className="text-manual">Manual</span>
            <span className="text-accent">Automated</span>
          </div>
        </div>
      </div>
    </section>
  );
}
