import { useRouterState } from "@tanstack/react-router";
import { dict as arDict } from "./dictionary.ar";
import { dict as enDict } from "./dictionary.en";

export type Locale = "ar" | "en";
export type Dict = typeof arDict;

export const dicts: Record<Locale, Dict> = { ar: arDict, en: enDict };

export function localeFromPath(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "ar";
}

export function useLocale(): Locale {
  return useRouterState({
    select: (s) => localeFromPath(s.location.pathname),
  });
}

export function useDict(): Dict {
  return dicts[useLocale()];
}

/**
 * Build a URL for a given canonical AR-style path in the target locale.
 * Examples:
 *   localizeHref("/", "en") => "/en"
 *   localizeHref("/services", "en") => "/en/services"
 *   localizeHref("/#contact", "en") => "/en#contact"
 *   localizeHref("/services/n8n-automation", "en") => "/en/services/n8n-automation"
 *   localizeHref(anything, "ar") => unchanged
 */
export function localizeHref(href: string, locale: Locale): string {
  if (locale === "ar") return href;
  if (href.startsWith("/#")) return "/en" + href.slice(1); // "/en#contact"
  if (href === "/") return "/en";
  if (href.startsWith("/")) return "/en" + href;
  return href;
}

/**
 * Given the current pathname, produce the equivalent pathname in the OTHER
 * locale so the language switcher lands the user on the same page.
 */
export function alternatePath(pathname: string): { ar: string; en: string } {
  const isEn = pathname === "/en" || pathname.startsWith("/en/");
  if (isEn) {
    const rest = pathname === "/en" ? "/" : pathname.slice(3); // strip "/en"
    return { ar: rest || "/", en: pathname };
  }
  const en = pathname === "/" ? "/en" : "/en" + pathname;
  return { ar: pathname, en };
}

export const SITE_ORIGIN = "https://ai-solutions-22.lovable.app";

/**
 * Emit hreflang link tags for a given canonical AR path.
 */
export function hreflangLinks(arPath: string): Array<{ rel: string; hrefLang?: string; href: string }> {
  const enPath = arPath === "/" ? "/en" : "/en" + arPath;
  return [
    { rel: "alternate", hrefLang: "ar", href: SITE_ORIGIN + arPath },
    { rel: "alternate", hrefLang: "en", href: SITE_ORIGIN + enPath },
    { rel: "alternate", hrefLang: "x-default", href: SITE_ORIGIN + arPath },
  ];
}
