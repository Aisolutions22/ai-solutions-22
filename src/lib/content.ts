import type { Locale } from "./i18n";

type LS = { ar: string; en: string };
type LSA = { ar: string[]; en: string[] };

export type CaseStudy = {
  id: string;
  sector: string;
  title: string;
  summary: string;
  stack: string[];
  impact: string;
};

type CaseStudyRaw = {
  id: string;
  sector: LS;
  title: LS;
  summary: LS;
  stack: string[];
  impact: LS;
};

const casesRaw: CaseStudyRaw[] = [
  {
    id: "retail-ops",
    sector: { ar: "تجارة تجزئة", en: "Retail" },
    title: {
      ar: "أتمتة الطلبات والمخزون لمتجر متعدد الفروع",
      en: "Order & inventory automation for a multi-branch retailer",
    },
    summary: {
      ar: "ربط WhatsApp Business بنظام المخزون و CRM، مع وكيل AI للرد على الاستفسارات وتأهيل العملاء تلقائياً.",
      en: "Connected WhatsApp Business to inventory and CRM, with an AI agent handling inquiries and qualifying leads automatically.",
    },
    stack: ["n8n", "WhatsApp API", "AI Agent"],
    impact: {
      ar: "قلّل الوقت اليدوي بنسبة كبيرة على فريق التشغيل.",
      en: "Cut manual work on the operations team significantly.",
    },
  },
  {
    id: "clinic-ai",
    sector: { ar: "قطاع طبي", en: "Healthcare" },
    title: {
      ar: "وكيل حجوزات ذكي لعيادة متعددة الأطباء",
      en: "Smart booking agent for a multi-doctor clinic",
    },
    summary: {
      ar: "وكيل AI يستقبل الحجوزات على مدار الساعة، يتحقق من التوفر، ويرسل تذكيرات تلقائية للمرضى.",
      en: "An AI agent that takes bookings 24/7, checks availability, and sends automatic reminders to patients.",
    },
    stack: ["AI Agent", "Calendar", "n8n"],
    impact: {
      ar: "غطاء استقبال 24/7 بدون توظيف إضافي.",
      en: "24/7 reception coverage without additional hires.",
    },
  },
  {
    id: "b2b-dashboard",
    sector: { ar: "خدمات B2B", en: "B2B Services" },
    title: {
      ar: "Dashboard تشغيلي موحّد لفريق المبيعات",
      en: "Unified operations dashboard for a sales team",
    },
    summary: {
      ar: "لوحة تحكم لحظية تجمع بيانات المبيعات والتشغيل من عدة مصادر في مكان واحد.",
      en: "A real-time dashboard aggregating sales and operations data from multiple sources in one place.",
    },
    stack: ["Dashboard", "n8n", "API"],
    impact: {
      ar: "قرارات يومية أسرع اعتماداً على بيانات موحّدة.",
      en: "Faster daily decisions driven by unified data.",
    },
  },
];

export function getCases(locale: Locale): CaseStudy[] {
  return casesRaw.map((c) => ({
    id: c.id,
    sector: c.sector[locale],
    title: c.title[locale],
    summary: c.summary[locale],
    stack: c.stack,
    impact: c.impact[locale],
  }));
}

export function getCaseBySlug(slug: string, locale: Locale): CaseStudy | undefined {
  return getCases(locale).find((c) => c.id === slug);
}

export function caseExists(slug: string): boolean {
  return casesRaw.some((c) => c.id === slug);
}

export type ServiceIcon = "Workflow" | "Bot" | "LayoutDashboard" | "Globe";

export type Service = {
  slug: string;
  tag: string;
  icon: ServiceIcon;
  title: string;
  heroTitle: string;
  heroDesc: string;
  audience: string[];
  process: { title: string; desc: string }[];
  faq: { q: string; a: string }[];
  relatedTag: string;
};

type ServiceRaw = {
  slug: string;
  tag: string;
  icon: ServiceIcon;
  title: LS;
  heroTitle: LS;
  heroDesc: LS;
  audience: LSA;
  process: { title: LS; desc: LS }[];
  faq: { q: LS; a: LS }[];
  relatedTag: string;
};

const servicesRaw: ServiceRaw[] = [
  {
    slug: "n8n-automation",
    tag: "n8n",
    icon: "Workflow",
    title: { ar: "أتمتة الأعمال بـ n8n", en: "Business automation with n8n" },
    heroTitle: {
      ar: "نظام واحد يشتغل بدل عشر خطوات يدوية",
      en: "One system that runs instead of ten manual steps",
    },
    heroDesc: {
      ar: "نربط أنظمتك (CRM، واتساب، المخزون، الفواتير) في workflow واحد ذكي يشتغل لوحده على مدار اليوم — بدون فريق تقني داخلي.",
      en: "We connect your systems (CRM, WhatsApp, inventory, invoicing) into one smart workflow that runs on its own all day — no in-house tech team.",
    },
    audience: {
      ar: [
        "شركات بتكرر نفس المهمة اليدوية عشرات المرات في اليوم (إدخال بيانات، نقل معلومات بين نظامين، متابعة طلبات).",
        "فرق مبيعات أو تشغيل بتضيع وقتها في نسخ ولصق بين أدوات مختلفة.",
        "أصحاب أعمال عندهم أنظمة (CRM, WhatsApp Business, Google Sheets) بس مش متكلمة مع بعضها.",
      ],
      en: [
        "Companies repeating the same manual task dozens of times a day (data entry, moving info between two systems, order follow-up).",
        "Sales or ops teams losing time copy-pasting between different tools.",
        "Businesses with systems (CRM, WhatsApp Business, Google Sheets) that don't talk to each other.",
      ],
    },
    process: [
      { title: { ar: "اكتشاف", en: "Discovery" }, desc: { ar: "نراجع عملياتك الحالية ونحدد أكتر مهمة بتاخد وقت.", en: "We review your current operations and identify the biggest time sinks." } },
      { title: { ar: "رسم الـ workflow", en: "Workflow design" }, desc: { ar: "نصمم مسار الأتمتة بشكل مرئي وواضح قبل أي تنفيذ.", en: "We design the automation path visually and clearly before any implementation." } },
      { title: { ar: "بناء واختبار", en: "Build & test" }, desc: { ar: "تنفيذ فعلي على بياناتك الحقيقية، مش بيانات تجريبية.", en: "Real implementation on your live data, not test data." } },
      { title: { ar: "تسليم ومتابعة", en: "Handoff & follow-up" }, desc: { ar: "تدريب فريقك على مراقبة الـ workflow ومعالجة أي استثناء.", en: "Training your team to monitor the workflow and handle any exception." } },
    ],
    faq: [
      { q: { ar: "هل محتاج فريق تقني عندي عشان أستخدم n8n بعد التسليم؟", en: "Do I need an in-house tech team to use n8n after handoff?" }, a: { ar: "لأ، بنسلّمك نظام جاهز ومُدرَّب عليه فريقك، والدعم متاح لأي تعديل لاحق.", en: "No — we hand over a ready-to-use system with your team trained on it, and support is available for future changes." } },
      { q: { ar: "ماذا لو تغيّرت عمليتي بعد شهور؟", en: "What if my process changes months later?" }, a: { ar: "الـ workflows مبنية بمرونة تسمح بالتعديل من غير إعادة بناء من الصفر.", en: "Workflows are built to be flexible — you can modify them without rebuilding from scratch." } },
      { q: { ar: "هل بياناتي آمنة؟", en: "Is my data safe?" }, a: { ar: "الأتمتة بتشتغل على أنظمتك الحالية مباشرة، من غير تخزين بيانات حساسة في أماكن خارجية بدون إذنك.", en: "Automation runs directly on your existing systems, with no sensitive data stored in external locations without your consent." } },
    ],
    relatedTag: "n8n",
  },
  {
    slug: "ai-agents",
    tag: "AI Agent",
    icon: "Bot",
    title: { ar: "وكلاء ذكاء اصطناعي", en: "AI agents" },
    heroTitle: { ar: "رد فوري على عملائك، حتى وأنت نايم", en: "Instant replies to your customers, even while you sleep" },
    heroDesc: {
      ar: "وكيل AI بيرد على الاستفسارات، يأهّل الـ leads، ويتابع المبيعات بصوت وأسلوب شركتك — 24 ساعة.",
      en: "An AI agent that answers inquiries, qualifies leads, and follows up on sales in your company's voice — 24/7.",
    },
    audience: {
      ar: [
        "شركات بتستقبل استفسارات متكررة على واتساب أو الموقع وموظفينها مش قادرين يردوا بسرعة كافية.",
        "عيادات أو خدمات بتحتاج استقبال حجوزات على مدار الساعة.",
        "فرق مبيعات عايزة تأهيل leads قبل ما توصل لموظف بشري.",
      ],
      en: [
        "Companies receiving repetitive inquiries on WhatsApp or the site where staff can't respond fast enough.",
        "Clinics or services that need 24/7 booking reception.",
        "Sales teams wanting to qualify leads before they reach a human rep.",
      ],
    },
    process: [
      { title: { ar: "تحديد الشخصية", en: "Define the persona" }, desc: { ar: "نبني صوت الوكيل بأسلوب شركتك، مش رد آلي عام.", en: "We craft the agent's voice in your company's style, not a generic bot reply." } },
      { title: { ar: "تدريب على بياناتك", en: "Train on your data" }, desc: { ar: "أسئلة العملاء الشائعة، منتجاتك، سياساتك.", en: "Common customer questions, your products, your policies." } },
      { title: { ar: "ربط بالقنوات", en: "Channel integration" }, desc: { ar: "واتساب، الموقع، أو أي قناة تواصل تستخدمها.", en: "WhatsApp, your site, or any channel you use." } },
      { title: { ar: "مراقبة وتحسين", en: "Monitor & tune" }, desc: { ar: "نراجع المحادثات الأولى ونضبط الردود قبل الإطلاق الكامل.", en: "We review early conversations and tune responses before full launch." } },
    ],
    faq: [
      { q: { ar: "هل الوكيل هيحل محل فريق خدمة العملاء بالكامل؟", en: "Will the agent fully replace my customer service team?" }, a: { ar: "لأ — بيتعامل مع الاستفسارات المتكررة والتأهيل الأولي، ويحوّل الحالات المعقدة لفريقك.", en: "No — it handles repetitive inquiries and initial qualification, and hands off complex cases to your team." } },
      { q: { ar: "إزاي يفرق بين عميل جاد وعميل بيستكشف بس؟", en: "How does it distinguish a serious lead from a browser?" }, a: { ar: "بنصمم أسئلة تأهيل (lead qualification) داخل المحادثة نفسها تحدد الأولوية.", en: "We design lead-qualification questions inside the conversation itself to prioritize." } },
      { q: { ar: "هل بيرد بالعربي المصري؟", en: "Does it respond in Egyptian Arabic?" }, a: { ar: "أيوه، بندرّبه على لهجتك وأسلوب شركتك تحديداً.", en: "Yes — we specifically train it on your dialect and company style." } },
    ],
    relatedTag: "AI Agent",
  },
  {
    slug: "dashboards",
    tag: "Dashboards",
    icon: "LayoutDashboard",
    title: { ar: "Dashboards مخصصة", en: "Custom dashboards" },
    heroTitle: { ar: "أرقامك كلها في مكان واحد، لحظياً", en: "All your numbers in one place, in real time" },
    heroDesc: {
      ar: "لوحة تحكم تجمع بيانات مبيعاتك وتشغيلك من مصادر متفرقة في مكان واحد واضح — بدون تصدير Excel يدوي كل يوم.",
      en: "A dashboard that aggregates sales and operations data from scattered sources in one clear view — no daily manual Excel exports.",
    },
    audience: {
      ar: [
        "مديرين بيحتاجوا يشوفوا أداء العمل بنظرة واحدة بدل تجميع تقارير من كذا مصدر.",
        "شركات بياناتها موزعة بين أنظمة مختلفة (CRM، مخزون، مبيعات) من غير رؤية موحّدة.",
      ],
      en: [
        "Managers who need to see business performance at a glance instead of assembling reports from multiple sources.",
        "Companies with data spread across different systems (CRM, inventory, sales) without a unified view.",
      ],
    },
    process: [
      { title: { ar: "تحديد الأرقام المهمة فعلاً", en: "Identify the numbers that actually matter" }, desc: { ar: "مش كل رقم يستحق مكان في اللوحة.", en: "Not every metric deserves a place on the dashboard." } },
      { title: { ar: "ربط المصادر", en: "Connect sources" }, desc: { ar: "نجمع البيانات من أنظمتك الحالية تلقائياً.", en: "We pull data automatically from your existing systems." } },
      { title: { ar: "تصميم اللوحة", en: "Dashboard design" }, desc: { ar: "واجهة واضحة تتابعها في ثواني، مش تحليل معقد.", en: "A clear interface you can scan in seconds, not a complex analysis." } },
      { title: { ar: "تحديث لحظي", en: "Real-time updates" }, desc: { ar: "الأرقام بتتحدث تلقائياً بدون تدخل يدوي.", en: "Numbers refresh automatically with no manual intervention." } },
    ],
    faq: [
      { q: { ar: "هل محتاج أدخل بياناتي يدوياً؟", en: "Do I need to enter data manually?" }, a: { ar: "لأ، الهدف الأساسي إن اللوحة تسحب البيانات تلقائياً من أنظمتك.", en: "No — the whole point is that the dashboard pulls data automatically from your systems." } },
      { q: { ar: "أقدر أشوفها من الموبايل؟", en: "Can I view it on mobile?" }, a: { ar: "أيوه، مصممة تشتغل على أي شاشة.", en: "Yes — designed to work on any screen." } },
    ],
    relatedTag: "Dashboard",
  },
  {
    slug: "web-development",
    tag: "Web",
    icon: "Globe",
    title: { ar: "تصميم مواقع وتطبيقات ويب", en: "Web design & development" },
    heroTitle: {
      ar: "موقع سريع، مربوط بالنظام اللي بيشغّل شركتك فعلياً",
      en: "A fast site, wired into the system that actually runs your business",
    },
    heroDesc: {
      ar: "مواقع وتطبيقات ويب سريعة قابلة للتوسع، مبنية على نفس فلسفة الأتمتة — مش موقع منفصل عن باقي أنظمتك.",
      en: "Fast, scalable websites and web apps built on the same automation philosophy — not a site disconnected from the rest of your systems.",
    },
    audience: {
      ar: [
        "شركات عايزة موقع مش بس «واجهة» لكن مربوط فعلياً بالـ CRM والواتساب وأنظمة الحجز/الطلب.",
        "شركات عندها موقع قديم بطيء أو مش بيحوّل زوار لعملاء.",
      ],
      en: [
        "Companies who want a site that's more than a facade — actually wired into CRM, WhatsApp, and booking/order systems.",
        "Companies with an old, slow site that doesn't convert visitors into customers.",
      ],
    },
    process: [
      { title: { ar: "البنية والهدف", en: "Structure & goal" }, desc: { ar: "نحدد إيه الهدف الأساسي للموقع (تحويل، معلومات، حجز) قبل أي تصميم.", en: "We define the site's core goal (conversion, information, booking) before any design." } },
      { title: { ar: "التصميم", en: "Design" }, desc: { ar: "نظام تصميم متسق (ألوان، خطوط، تباعد) من الأول.", en: "A consistent design system (colors, fonts, spacing) from day one." } },
      { title: { ar: "البناء والربط", en: "Build & integrate" }, desc: { ar: "الموقع نفسه + ربطه بأنظمة الأتمتة عندك لو محتاج.", en: "The site itself plus integration with your automation systems if needed." } },
      { title: { ar: "الأداء والإطلاق", en: "Performance & launch" }, desc: { ar: "اختبار سرعة (Core Web Vitals) وتوافق الموبايل قبل الإطلاق.", en: "Speed testing (Core Web Vitals) and mobile compatibility before launch." } },
    ],
    faq: [
      { q: { ar: "هل الموقع هيبقى بطيء زي مواقع الشركات التقليدية؟", en: "Will the site be slow like typical corporate sites?" }, a: { ar: "لأ، بنبني على معايير أداء حديثة (LCP أقل من 2.5 ثانية) من الأول.", en: "No — we build to modern performance standards (LCP under 2.5s) from the start." } },
      { q: { ar: "هل ينفع أعمل تعديلات بنفسي بعد التسليم؟", en: "Can I make edits myself after handoff?" }, a: { ar: "حسب الأداة المستخدمة، بنوضح الجزء اللي تقدر تعدّله بنفسك من غير احتياج مبرمج.", en: "Depending on the tooling, we specify which parts you can edit yourself without needing a developer." } },
    ],
    relatedTag: "API",
  },
];

export function getServices(locale: Locale): Service[] {
  return servicesRaw.map((s) => ({
    slug: s.slug,
    tag: s.tag,
    icon: s.icon,
    title: s.title[locale],
    heroTitle: s.heroTitle[locale],
    heroDesc: s.heroDesc[locale],
    audience: s.audience[locale],
    process: s.process.map((p) => ({ title: p.title[locale], desc: p.desc[locale] })),
    faq: s.faq.map((f) => ({ q: f.q[locale], a: f.a[locale] })),
    relatedTag: s.relatedTag,
  }));
}

export function getServiceBySlug(slug: string, locale: Locale): Service | undefined {
  return getServices(locale).find((s) => s.slug === slug);
}

export function serviceExists(slug: string): boolean {
  return servicesRaw.some((s) => s.slug === slug);
}
