import { ArrowLeft, Mail, MessageCircle, Linkedin } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <div className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
              / تواصل
            </div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
              خلينا نتكلم
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              اختر القناة الأنسب ليك ونرد عليك خلال 24 ساعة كحد أقصى.
            </p>
            <Link
              to="/about"
              className="mt-6 inline-flex items-center gap-2 text-accent font-semibold hover:opacity-80"
            >
              اعرف قصتنا كاملة
              <ArrowLeft size={16} />
            </Link>

            <div className="mt-10 space-y-3">
              <a
                href="mailto:hello@aisolutions22.cloud"
                className="flex items-center gap-3 group"
              >
                <span className="h-10 w-10 rounded-full border border-border grid place-items-center group-hover:border-foreground/50 transition">
                  <Mail size={16} />
                </span>
                <span className="text-foreground font-mono text-sm">
                  hello@aisolutions22.cloud
                </span>
              </a>
              <a
                href="https://wa.me/000000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <span className="h-10 w-10 rounded-full border border-border grid place-items-center group-hover:border-foreground/50 transition">
                  <MessageCircle size={16} />
                </span>
                <span className="text-foreground text-sm">واتساب العمل</span>
              </a>
              <a
                href="https://linkedin.com/company/ai-solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <span className="h-10 w-10 rounded-full border border-border grid place-items-center group-hover:border-foreground/50 transition">
                  <Linkedin size={16} />
                </span>
                <span className="text-foreground text-sm">
                  لينكدإن — صفحة الشركة
                </span>
              </a>
            </div>
          </div>

          <div className="relative rounded-3xl bg-[color:var(--surface-dark)] text-white p-8 sm:p-12 overflow-hidden">
            <div
              className="absolute -top-24 -left-24 h-64 w-64 rounded-full opacity-30 blur-3xl"
              style={{ background: "var(--accent)" }}
              aria-hidden="true"
            />
            <div className="relative">
              <div className="font-mono text-xs text-white/60 uppercase tracking-widest">
                / الخطوة القادمة
              </div>
              <h3 className="mt-3 font-display font-bold text-3xl sm:text-4xl leading-tight">
                جاهز تبدأ؟ احجز استشارة مجانية
              </h3>
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
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-6 font-mono text-xs text-white/50">
                <span>24h response</span>
                <span>•</span>
                <span>Made with n8n + AI</span>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-24 pt-8 border-t border-border flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
          <span className="font-display font-bold text-foreground">
            AI Solutions
          </span>
          <span>© {new Date().getFullYear()} — كل الحقوق محفوظة</span>
        </footer>
      </div>
    </section>
  );
}
