// TODO: محتوى حقيقي — استبدل هذه البيانات ببيانات المشاريع الفعلية
export type CaseStudy = {
  id: string;
  sector: string;
  title: string;
  summary: string;
  stack: string[];
  impact: string;
};

export const cases: CaseStudy[] = [
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

export function getCaseBySlug(slug: string): CaseStudy | undefined {
  return cases.find((c) => c.id === slug);
}
