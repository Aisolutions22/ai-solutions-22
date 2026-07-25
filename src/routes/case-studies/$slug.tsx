import { createFileRoute, notFound } from "@tanstack/react-router";
import { caseExists, getCaseBySlug } from "@/lib/content";
import { hreflangLinks, SITE_ORIGIN } from "@/lib/i18n";
import { CaseStudyPage, CaseStudyNotFoundPage } from "@/pages/CaseStudyPage";

export const Route = createFileRoute("/case-studies/$slug")({
  loader: ({ params }) => {
    if (!caseExists(params.slug)) throw notFound();
    return { slug: params.slug };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "دراسة الحالة غير موجودة | AI Solutions" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const study = getCaseBySlug(params.slug, "ar")!;
    const path = `/case-studies/${study.id}`;
    const url = SITE_ORIGIN + path;
    return {
      meta: [
        { title: `${study.title} — دراسة حالة | AI Solutions` },
        { name: "description", content: study.summary },
        { property: "og:title", content: study.title },
        { property: "og:description", content: study.summary },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
      ],
      links: [
        { rel: "canonical", href: url },
        ...hreflangLinks(path),
      ],
    };
  },
  component: RouteComponent,
  notFoundComponent: CaseStudyNotFoundPage,
});

function RouteComponent() {
  const { slug } = Route.useLoaderData();
  return <CaseStudyPage slug={slug} />;
}
