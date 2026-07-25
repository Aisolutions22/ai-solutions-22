import type { Locale } from "./i18n";

type LS = { ar: string; en: string };
type LSA = { ar: string[]; en: string[] };

export type Tool = { name: string; color: string };

export const TOOL_COLORS: Record<string, string> = {
  n8n: "#EA4B71",
  OpenAI: "#10A37F",
  OpenRouter: "#6467F2",
  Supabase: "#3ECF8E",
  Messenger: "#0084FF",
  Instagram: "linear-gradient(135deg,#F58529,#DD2A7B,#8134AF)",
  "WhatsApp Business API": "#25D366",
  Telegram: "#26A5E4",
  Apify: "#FF9012",
  Apollo: "#9B51E0",
  "Google Maps": "#4285F4",
  LinkedIn: "#0A66C2",
};

const t = (names: string[]): Tool[] =>
  names.map((n) => ({ name: n, color: TOOL_COLORS[n] ?? "#8A8680" }));

export type CaseStudy = {
  id: string;
  sector: string;
  title: string;
  summary: string;
  stack: string[];
  impact: string;
  tools: Tool[];
  challenge?: string;
  solutionSteps?: string[];
  videoUrl?: string;
  imageUrl?: string;
  featured?: { label: string };
  isDemo?: boolean;
};

type CaseStudyRaw = {
  id: string;
  sector: LS;
  title: LS;
  summary: LS;
  stack: string[];
  impact: LS;
  tools: Tool[];
  challenge?: LS;
  solutionSteps?: LSA;
  videoUrl?: string;
  imageUrl?: string;
  featured?: LS;
  isDemo?: boolean;
};

const casesRaw: CaseStudyRaw[] = [
  {
    id: "lead-generation-engine",
    sector: { ar: "مبيعات B2B", en: "B2B Sales" },
    title: {
      ar: "محرك توليد العملاء المحتملين",
      en: "Lead generation engine",
    },
    summary: {
      ar: "من ساعات بحث يدوي إلى قاعدة عملاء محتملين جاهزة تلقائياً كل صباح.",
      en: "From hours of manual research to a ready lead list delivered automatically every morning.",
    },
    challenge: {
      ar: "فرق المبيعات تقضي ساعات يومياً في البحث اليدوي عن بيانات العملاء المحتملين وتجميعها من مصادر متفرقة، مع نسبة أخطاء وتكرار عالية.",
      en: "Sales teams spend hours daily manually searching and aggregating lead data from scattered sources, with high rates of errors and duplicates.",
    },
    solutionSteps: {
      ar: [
        "استخراج نشط من خرائط جوجل ولينكدإن حسب معايير القطاع والموقع الجغرافي.",
        "إثراء البيانات (Enrichment) عبر Apollo وApify لاستخلاص بيانات التواصل والشركة بدقة.",
        "تنقية القوائم وإزالة التكرار تلقائياً قبل التسليم.",
        "تسليم قائمة عملاء جاهزة يومياً مباشرة إلى نظام إدارة العلاقات أو جدول بيانات موحّد.",
      ],
      en: [
        "Active extraction from Google Maps and LinkedIn based on industry and geographic criteria.",
        "Data enrichment via Apollo and Apify to accurately retrieve contact and company information.",
        "Automatic list cleaning and deduplication before delivery.",
        "Daily delivery of a ready lead list directly to the CRM or a unified spreadsheet.",
      ],
    },
    stack: ["n8n", "Apify", "Apollo", "API"],
    tools: t(["n8n", "Apify", "Apollo", "Google Maps", "LinkedIn"]),
    impact: {
      ar: "قاعدة عملاء محتملين نظيفة ومحدّثة تصل يومياً دون أي بحث يدوي.",
      en: "A clean, up-to-date lead base delivered daily with zero manual research.",
    },
  },
  {
    id: "ai-sales-agent-instagram-messenger",
    sector: { ar: "تجارة تجزئة", en: "Retail" },
    title: {
      ar: "وكيل مبيعات ذكاء اصطناعي — إنستجرام وماسنجر",
      en: "AI sales agent — Instagram & Messenger",
    },
    summary: {
      ar: "رد فوري وذكي على كل استفسار عميل، بالنص والصوت والصورة، على مدار الساعة.",
      en: "Instant, intelligent replies to every customer inquiry — text, voice, and image — around the clock.",
    },
    challenge: {
      ar: "العملاء يتواصلون عبر رسائل نصية وصوتية وصور على إنستجرام وماسنجر، والرد اليدوي لا يواكب حجم الرسائل أو سرعة توقّع العميل.",
      en: "Customers reach out via text, voice, and image messages on Instagram and Messenger, and manual replies can't keep up with the volume or the customer's speed expectations.",
    },
    solutionSteps: {
      ar: [
        "استقبال الرسائل بجميع أنواعها (نص، صوت، صورة) من إنستجرام وماسنجر عبر واجهة موحّدة.",
        "تحويل الرسائل الصوتية إلى نص، وتحليل الصور المرسلة (منتج، استفسار مرئي، فاتورة).",
        "بناء الرد من بيانات العميل الفعلية (المنتجات، الأسعار، السياسات)، لا من إجابات عامة جاهزة.",
        "تصعيد المحادثات المعقدة لفريق بشري تلقائياً عند الحاجة.",
      ],
      en: [
        "Receive all message types (text, voice, image) from Instagram and Messenger through a unified interface.",
        "Transcribe voice messages and analyze sent images (product, visual inquiry, invoice).",
        "Build responses from the client's real data (products, prices, policies) — not generic canned replies.",
        "Automatically escalate complex conversations to a human team when needed.",
      ],
    },
    stack: ["n8n", "AI Agent"],
    tools: t(["n8n", "OpenAI", "OpenRouter", "Supabase", "Messenger", "Instagram"]),
    impact: {
      ar: "استجابة على مدار الساعة لكل قناة اجتماعية بأسلوب الشركة نفسه.",
      en: "24/7 response across every social channel — in the company's own voice.",
    },
  },
  {
    id: "whatsapp-business-sales-agent",
    sector: { ar: "تجارة تجزئة", en: "Retail" },
    title: {
      ar: "وكيل مبيعات واتساب بزنس API",
      en: "WhatsApp Business API sales agent",
    },
    summary: {
      ar: "نظام واحد حلّ محل فريق مبيعات كامل من خمسة موظفين.",
      en: "A single system that replaced an entire five-person sales team.",
    },
    challenge: {
      ar: "فريق مبيعات مكوّن من 5 أفراد يعمل يدوياً على واتساب بزنس، بتكلفة تشغيلية مرتفعة وسرعة استجابة غير متسقة بين الموظفين.",
      en: "A five-person sales team operating manually on WhatsApp Business, with high operating costs and inconsistent response speed across staff.",
    },
    solutionSteps: {
      ar: [
        "استيعاب كل أنواع الرسائل (نص، صوت، صورة) عبر واتساب بزنس API مباشرة.",
        "فهم نية العميل وسياق المحادثة الكاملة، لا الرد على كل رسالة بمعزل عن سابقاتها.",
        "توليد ردود مخصصة وإتمام دورة المبيعات كاملة، من الاستفسار الأول حتى تأكيد الطلب.",
        "النتيجة التشغيلية الموثّقة: استغناء العميل عن خمس وظائف مبيعات يدوية بالكامل.",
      ],
      en: [
        "Ingest all message types (text, voice, image) directly through the WhatsApp Business API.",
        "Understand customer intent and full conversation context — not reply to each message in isolation.",
        "Generate tailored responses and complete the full sales cycle from first inquiry to order confirmation.",
        "Documented operational outcome: the client fully retired five manual sales roles.",
      ],
    },
    stack: ["n8n", "AI Agent", "API"],
    tools: t(["n8n", "OpenAI", "OpenRouter", "Supabase", "WhatsApp Business API"]),
    impact: {
      ar: "نظام واحد يغطي دورة المبيعات الكاملة على واتساب بدل فريق من خمسة موظفين.",
      en: "One system covers the full WhatsApp sales cycle in place of a five-person team.",
    },
  },
  {
    id: "telegram-study-assistant",
    sector: { ar: "تعليم", en: "Education" },
    title: {
      ar: "المساعد الدراسي على تيليجرام",
      en: "Telegram study assistant",
    },
    summary: {
      ar: "من ملف PDF دراسي إلى درس تفاعلي وتقييم فوري يصل لولي الأمر.",
      en: "From a study PDF to an interactive lesson and an instant report delivered to the parent.",
    },
    challenge: {
      ar: "متابعة استيعاب الطالب لمحتوى تعليمي تقليدي (ملف PDF) تستهلك وقتاً كبيراً من الأهل، بدون قياس فعلي لمستوى الفهم.",
      en: "Following a student's understanding of traditional PDF study material eats up parents' time with no real measurement of comprehension.",
    },
    solutionSteps: {
      ar: [
        "رفع ملف PDF مباشرة عبر تيليجرام.",
        "تحويل المحتوى تلقائياً إلى شرح مبسّط وأسئلة تفاعلية.",
        "تقييم إجابات الطالب فور إرسالها.",
        "إرسال تقرير أداء بعد كل درس مباشرة إلى ولي الأمر.",
      ],
      en: [
        "Upload a PDF directly through Telegram.",
        "Automatically transform the content into a simplified explanation and interactive questions.",
        "Grade student answers the moment they're submitted.",
        "Send a performance report after each lesson directly to the parent.",
      ],
    },
    stack: ["n8n", "AI Agent"],
    tools: t(["n8n", "OpenAI", "Telegram"]),
    impact: {
      ar: "درس تفاعلي كامل + تقرير أداء لكل جلسة دراسة، تلقائياً.",
      en: "A full interactive lesson plus a per-session performance report — automatically.",
    },
    featured: {
      ar: "يُعرض Live هذا الأسبوع في n8n Meetup Cairo",
      en: "Presented live this week at n8n Meetup Cairo",
    },
  },
  {
    id: "dental-clinic-automation",
    sector: { ar: "قطاع طبي", en: "Healthcare" },
    title: {
      ar: "أتمتة عيادة الأسنان",
      en: "Dental clinic automation",
    },
    summary: {
      ar: "حجز وتذكير ومتابعة مرضى بالكامل، بدون عبء إداري يومي.",
      en: "End-to-end booking, reminders, and patient follow-up — without a daily admin burden.",
    },
    challenge: {
      ar: "إدارة يدوية للحجوزات والتذكيرات ومتابعة المرضى تستهلك وقت الفريق الإداري وتزيد حالات عدم الحضور غير المُتابَعة.",
      en: "Manual handling of bookings, reminders, and patient follow-up drains the admin team's time and increases untracked no-shows.",
    },
    solutionSteps: {
      ar: [
        "استقبال طلبات الحجز من القنوات المختلفة وتنسيقها في تقويم موحّد.",
        "تذكيرات تلقائية للمرضى قبل الموعد بوقت كافٍ.",
        "متابعة ما بعد الزيارة (تعليمات العناية، مواعيد المتابعة).",
        "تقليل حالات عدم الحضور عبر التذكير الذكي متعدد المراحل.",
      ],
      en: [
        "Receive booking requests from multiple channels and unify them in a single calendar.",
        "Automatic patient reminders well ahead of the appointment.",
        "Post-visit follow-up (care instructions, next appointments).",
        "Reduce no-shows through smart, multi-stage reminders.",
      ],
    },
    stack: ["n8n", "WhatsApp"],
    tools: t(["n8n", "Supabase", "WhatsApp Business API"]),
    impact: {
      ar: "تشغيل إداري كامل للعيادة يعمل تلقائياً على مدار اليوم.",
      en: "The clinic's admin operations run themselves throughout the day.",
    },
  },
  {
    id: "meeting-transcription-automation",
    sector: { ar: "إنتاجية", en: "Productivity" },
    title: {
      ar: "تسجيل وتفريغ الاجتماعات",
      en: "Meeting recording & transcription",
    },
    summary: {
      ar: "كل اجتماع يتحول تلقائياً إلى ملخص وقرارات ومهام موزّعة.",
      en: "Every meeting turns automatically into a summary, decisions, and assigned tasks.",
    },
    challenge: {
      ar: "محاضر الاجتماعات تُكتب يدوياً أو تُهمل بالكامل، والقرارات المتخذة تضيع بدون متابعة فعلية لتنفيذها.",
      en: "Meeting minutes are written manually or skipped entirely, and decisions get lost without real follow-through.",
    },
    solutionSteps: {
      ar: [
        "تسجيل الاجتماع وتفريغه نصياً تلقائياً فور انتهائه.",
        "استخلاص القرارات والمهام وتحديد المسؤول عن كل مهمة.",
        "توزيع الملخص على جميع المشاركين تلقائياً.",
        "متابعة حالة تنفيذ كل مهمة حتى إغلاقها.",
      ],
      en: [
        "Automatically record and transcribe the meeting the moment it ends.",
        "Extract decisions and tasks and assign an owner to each one.",
        "Distribute the summary to all participants automatically.",
        "Track each task's execution status through to closure.",
      ],
    },
    stack: ["n8n", "AI Agent"],
    tools: t(["n8n", "OpenAI", "Supabase"]),
    impact: {
      ar: "ملخص وقرارات ومهام موزعة بعد كل اجتماع، دون كتابة يدوية.",
      en: "Summary, decisions, and assigned tasks after every meeting — with no manual note-taking.",
    },
  },
  {
    id: "contracts-risk-management",
    sector: { ar: "قانوني", en: "Legal" },
    title: {
      ar: "إدارة العقود والمخاطر التعاقدية",
      en: "Contracts & contractual risk management",
    },
    summary: {
      ar: "رصد المخاطر التعاقدية قبل أن تتحول إلى خسارة مالية فعلية.",
      en: "Detect contractual risks before they become an actual financial loss.",
    },
    challenge: {
      ar: "عقود الشركات الكبرى تحمل بنوداً قد تهدد هوامش الربح، ومراجعتها يدوياً بطيئة وعرضة للخطأ البشري في العقود طويلة أو المعقّدة.",
      en: "Enterprise contracts carry clauses that can threaten profit margins, and manual review is slow and error-prone on long or complex agreements.",
    },
    solutionSteps: {
      ar: [
        "تحليل نصوص العقود تلقائياً فور رفعها للنظام.",
        "رصد البنود عالية الخطورة (غرامات، التزامات مفتوحة، تواريخ حرجة).",
        "تنبيه الفريق المعني بمواعيد التجديد أو الانتهاء مسبقاً.",
        "إصدار تقرير مخاطر مركزي لكل عقد.",
      ],
      en: [
        "Automatically analyze contract text as soon as it's uploaded.",
        "Flag high-risk clauses (penalties, open-ended obligations, critical dates).",
        "Alert the relevant team about renewal or expiry dates in advance.",
        "Produce a centralized risk report per contract.",
      ],
    },
    stack: ["n8n", "AI Agent"],
    tools: t(["n8n", "OpenAI", "Supabase"]),
    impact: {
      ar: "رؤية مبكرة لكل بند عالي الخطورة قبل توقيع العقد أو تجديده.",
      en: "Early visibility on every high-risk clause before signing or renewing.",
    },
  },
  {
    id: "orders-inventory-automation",
    sector: { ar: "تجارة تجزئة", en: "Retail" },
    title: {
      ar: "أتمتة الطلبات والمخزون",
      en: "Orders & inventory automation",
    },
    summary: {
      ar: "مستوى المخزون والطلبات يدير نفسه بنفسه.",
      en: "Stock levels and orders that run themselves.",
    },
    challenge: {
      ar: "تتبع الطلبات ومستويات المخزون يدوياً يؤدي لحالات نفاد مفاجئ أو تكدّس غير مرصود، وتأخر في اتخاذ قرار إعادة الطلب.",
      en: "Manual tracking of orders and stock levels causes sudden stock-outs or undetected overstock and delays reorder decisions.",
    },
    solutionSteps: {
      ar: [
        "مزامنة الطلبات الواردة مع نظام المخزون تلقائياً فور حدوثها.",
        "تنبيهات فورية عند اقتراب أي صنف من حد النفاد.",
        "إعادة طلب تلقائية حسب حدود مُعرَّفة مسبقاً لكل صنف.",
        "تقرير حركة مخزون دوري لصاحب القرار.",
      ],
      en: [
        "Sync incoming orders with the inventory system automatically the moment they occur.",
        "Instant alerts when any item approaches its stock-out threshold.",
        "Automatic reordering based on predefined thresholds per item.",
        "Periodic stock-movement report for the decision-maker.",
      ],
    },
    stack: ["n8n", "Dashboard"],
    tools: t(["n8n", "Supabase"]),
    impact: {
      ar: "مخزون وطلبات يديران نفسيهما مع رؤية لحظية للحركة.",
      en: "Stock and orders that manage themselves with real-time visibility.",
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
    tools: c.tools,
    challenge: c.challenge?.[locale],
    solutionSteps: c.solutionSteps?.[locale],
    videoUrl: c.videoUrl,
    imageUrl: c.imageUrl,
    featured: c.featured ? { label: c.featured[locale] } : undefined,
    isDemo: c.isDemo,
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
        "أصحاب أعمال لديهم أنظمة (CRM, WhatsApp Business, Google Sheets) لكنها لا تتواصل فيما بينها.",
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
      { title: { ar: "بناء واختبار", en: "Build & test" }, desc: { ar: "تنفيذ فعلي على بياناتك الحقيقية، لا على بيانات تجريبية.", en: "Real implementation on your live data, not test data." } },
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
        "شركات تستقبل استفسارات متكررة على واتساب أو الموقع، ولا يستطيع فريقها الرد بالسرعة الكافية.",
        "عيادات أو خدمات تحتاج إلى استقبال الحجوزات على مدار الساعة.",
        "فرق مبيعات ترغب في تأهيل العملاء المحتملين قبل وصولهم إلى موظف بشري.",
      ],
      en: [
        "Companies receiving repetitive inquiries on WhatsApp or the site where staff can't respond fast enough.",
        "Clinics or services that need 24/7 booking reception.",
        "Sales teams wanting to qualify leads before they reach a human rep.",
      ],
    },
    process: [
      { title: { ar: "تحديد الشخصية", en: "Define the persona" }, desc: { ar: "نبني صوت الوكيل بأسلوب شركتك الخاص، لا رداً آلياً عاماً.", en: "We craft the agent's voice in your company's style, not a generic bot reply." } },
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
      { title: { ar: "تحديد الأرقام المهمة فعلاً", en: "Identify the numbers that actually matter" }, desc: { ar: "ليس كل رقم يستحق مكاناً في اللوحة.", en: "Not every metric deserves a place on the dashboard." } },
      { title: { ar: "ربط المصادر", en: "Connect sources" }, desc: { ar: "نجمع البيانات من أنظمتك الحالية تلقائياً.", en: "We pull data automatically from your existing systems." } },
      { title: { ar: "تصميم اللوحة", en: "Dashboard design" }, desc: { ar: "واجهة واضحة تتابعها في ثوانٍ، لا تحليلاً معقداً.", en: "A clear interface you can scan in seconds, not a complex analysis." } },
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
      ar: "مواقع وتطبيقات ويب سريعة قابلة للتوسع، مبنية بنفس فلسفة الأتمتة — لا كموقع منفصل عن باقي أنظمتك.",
      en: "Fast, scalable websites and web apps built on the same automation philosophy — not a site disconnected from the rest of your systems.",
    },
    audience: {
      ar: [
        "شركات تريد موقعاً لا يقتصر دوره على «الواجهة»، بل يكون مرتبطاً فعلياً بالـ CRM والواتساب وأنظمة الحجز والطلبات.",
        "شركات لديها موقع قديم بطيء لا يحوّل الزوار إلى عملاء فعليين.",
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
      { q: { ar: "هل سيكون الموقع بطيئاً كمواقع الشركات التقليدية؟", en: "Will the site be slow like typical corporate sites?" }, a: { ar: "لأ، بنبني على معايير أداء حديثة (LCP أقل من 2.5 ثانية) من الأول.", en: "No — we build to modern performance standards (LCP under 2.5s) from the start." } },
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
