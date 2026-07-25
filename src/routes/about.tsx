import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { AmbientBackground } from "@/components/AmbientBackground";
import { SignatureDivider } from "@/components/SignatureDivider";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "من نحن — فريق أتمتة أعمال ووكلاء AI | AI Solutions" },
      {
        name: "description",
        content:
          "AI Solutions فريق متخصص في أتمتة الأعمال ووكلاء الذكاء الاصطناعي — نحوّل تعقيد التشغيل إلى نظام واضح يشتغل بذكاء بدون فريق تقني داخلي.",
      },
      { property: "og:title", content: "من نحن | AI Solutions" },
      {
        property: "og:description",
        content:
          "قصة AI Solutions ورؤيتنا في أتمتة الأعمال عبر قطاعات متعددة — تصنيع، طبي، تسويق، تعليم.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://ai-solutions-22.lovable.app/about" },
    ],
    links: [
      { rel: "canonical", href: "https://ai-solutions-22.lovable.app/about" },
    ],
  }),
  component: AboutPage,
});

const differentiators = [
  {
    title: "مش أداة جاهزة، نظام مبني على مقاسك",
    desc: "كل عميل عملياته مختلفة، والأتمتة الجاهزة بتفشل لما العملية معقدة شوية.",
  },
  {
    title: "بنشتغل across قطاعات مختلفة",
    desc: "نفس منطق الأتمتة بيتطبق على مصنع وعيادة ووكالة تسويق، والخبرة العابرة للقطاعات دي بتوفر وقت اكتشاف.",
  },
  {
    title: "بدون فريق تقني داخلي مطلوب منك",
    desc: "التسليم يشمل تدريب فريقك، مش بس تسليم كود.",
  },
  {
    title: "متابعة بعد التسليم، مش تسليم وخلاص",
    desc: "أي نظام أتمتة محتاج ضبط بعد الاستخدام الفعلي.",
  },
];

const sectors = ["تصنيع", "وكالات تسويق", "عيادات طبية", "تعليم"];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AmbientBackground />
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 sm:px-8 py-16 sm:py-24">
        <div className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
          / من نحن
        </div>
        <h1 className="mt-3 font-display font-bold text-3xl sm:text-5xl text-foreground leading-tight">
          نبني الأنظمة اللي بتخلي الشركات تشتغل لوحدها
        </h1>
        <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
          AI Solutions فريق متخصص في أتمتة الأعمال ووكلاء الذكاء الاصطناعي.
          بدأنا لأننا شفنا شركات كتير — من مصانع لعيادات لوكالات تسويقية —
          بتضيّع وقتها في مهام يدوية ممكن يعملها نظام واحد ذكي.
        </p>

        <div className="mt-12">
          <SignatureDivider />
        </div>

        <section className="mt-14">
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            / لماذا بدأنا
          </div>
          <h2 className="mt-3 font-display font-semibold text-2xl sm:text-3xl text-foreground">
            نفس المشكلة، قطاعات مختلفة
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            المؤسس شاف نفس المشكلة تتكرر عند عملاء من قطاعات مختلفة تماماً
            (تصنيع، تسويق، طب، تعليم) — نفس النمط: فرق بتقضي ساعات في مهام
            تتكرر يومياً كان ممكن نظام واحد يعملها. من هنا جه القرار إن AI
            Solutions تركّز على حل واحد قابل للتخصيص بدل حل عام لكل الصناعات.
          </p>
        </section>

        <section className="mt-14">
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            / إيه اللي بيميزنا
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {differentiators.map((d, i) => (
              <article
                key={d.title}
                className="rounded-2xl border border-border bg-card p-5"
              >
                <div className="font-mono text-xs text-accent">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-2 font-display font-semibold text-foreground leading-snug">
                  {d.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {d.desc}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            / قطاعات اشتغلنا معاها
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {sectors.map((s) => (
              <span
                key={s}
                className="font-mono text-xs px-3 py-1.5 rounded-full bg-foreground/5 text-foreground"
              >
                {s}
              </span>
            ))}
          </div>
          <Link
            to="/case-studies"
            className="mt-5 inline-flex items-center gap-2 text-sm text-accent font-semibold hover:opacity-80"
          >
            شوف دراسات الحالة
            <ArrowLeft size={14} />
          </Link>
        </section>

        <section className="mt-14">
          <a
            href="https://mali.aisolutions22.cloud"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent font-semibold hover:opacity-80"
          >
            تعرّف على المؤسس
            <ArrowLeft size={16} />
          </a>
        </section>

        <section className="mt-16 relative rounded-3xl bg-[color:var(--surface-dark)] text-white p-8 sm:p-12 overflow-hidden">
          <div
            className="absolute -top-24 -left-24 h-64 w-64 rounded-full opacity-30 blur-3xl"
            style={{ background: "var(--accent)" }}
            aria-hidden="true"
          />
          <div className="relative">
            <div className="font-mono text-xs text-white/60 uppercase tracking-widest">
              / الخطوة القادمة
            </div>
            <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl leading-tight">
              جاهز تبدأ؟ احجز استشارة مجانية
            </h2>
            <p className="mt-4 text-white/70 leading-relaxed">
              نص ساعة نتناقش فيها في عملياتك الحالية ونحدد سوا فرص الأتمتة
              الأعلى أثراً — بدون التزام.
            </p>
            <a
              href="mailto:hello@aisolutions22.cloud?subject=طلب%20استشارة%20مجانية"
              className="mt-8 inline-flex items-center gap-2 h-12 px-6 rounded-full bg-accent text-accent-foreground font-semibold hover:opacity-90 transition"
            >
              احجز استشارة مجانية
              <ArrowLeft size={18} />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
