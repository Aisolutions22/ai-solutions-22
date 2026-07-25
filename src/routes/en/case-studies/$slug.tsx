import { createFileRoute, notFound } from "@tanstack/react-router";
import { caseExists, getCaseBySlug } from "@/lib/content";
import { hreflangLinks, SITE_ORIGIN } from "@/lib/i18n";
import { CaseStudyPage, CaseStudyNotFoundPage } from "@/pages/CaseStudyPage";

export const Route = createFileRoute("/en/case-studies/$slug")({
  loader: ({ params }) => {
    if (!caseExists(params.slug)) throw notFound();
    return { slug: params.slug };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Case study not found | AI Solutions" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const study = getCaseBySlug(params.slug, "en")!;
    const arPath = `/case-studies/${study.id}`;
    const url = SITE_ORIGIN + "/en" + arPath;
    return {
      meta: [
        { title: `${study.title} — Case study | AI Solutions` },
        { name: "description", content: study.summary },
        { property: "og:title", content: study.title },
        { property: "og:description", content: study.summary },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
      ],
      links: [
        { rel: "canonical", href: url },
        ...hreflangLinks(arPath),
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
