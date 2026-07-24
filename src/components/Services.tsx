import { Workflow, Bot, LayoutDashboard, Globe } from "lucide-react";
import { SignatureDivider } from "./SignatureDivider";

const services = [
  {
    icon: Workflow,
    tag: "n8n",
    title: "أتمتة الأعمال بـ n8n",
    desc: "ربط أنظمتك (CRM, WhatsApp, المخزون) في workflow واحد ذكي يشتغل لوحده على مدار اليوم.",
  },
  {
    icon: Bot,
    tag: "AI Agent",
    title: "وكلاء ذكاء اصطناعي",
    desc: "رد تلقائي على العملاء، تأهيل leads، ومتابعة المبيعات بصوت وأسلوب شركتك.",
  },
  {
    icon: LayoutDashboard,
    tag: "Dashboards",
    title: "Dashboards مخصصة",
    desc: "لوحات تحكم لمتابعة أداء عملك لحظياً بأرقام واضحة ومصادر بيانات موحّدة.",
  },
  {
    icon: Globe,
    tag: "Web",
    title: "تصميم مواقع وتطبيقات ويب",
    desc: "مواقع سريعة قابلة للتوسع، مبنية على نفس فلسفة الأتمتة ومربوطة بأنظمتك.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <div className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
            / الخدمات
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
            أربع قدرات، منظومة واحدة متكاملة
          </h2>
          <p className="mt-4 text-muted-foreground">
            كل خدمة مصممة لتعمل مع الباقي — من أول workflow خلف الكواليس إلى
            الواجهة اللي يستخدمها عميلك.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <article
              key={s.title}
              className="group relative rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_12px_30px_-16px_rgba(232,89,12,0.35)]"
            >
              <div className="flex items-center justify-between">
                <div className="h-11 w-11 rounded-xl bg-foreground text-background grid place-items-center">
                  <s.icon size={20} strokeWidth={1.75} />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {s.tag}
                </span>
              </div>
              <h3 className="mt-6 font-display font-semibold text-lg text-foreground">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {s.desc}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-20">
          <SignatureDivider />
        </div>
      </div>
    </section>
  );
}
