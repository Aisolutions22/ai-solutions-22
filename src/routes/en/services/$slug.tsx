import { createFileRoute, notFound } from "@tanstack/react-router";
import { serviceExists, getServiceBySlug } from "@/lib/content";
import { hreflangLinks, SITE_ORIGIN } from "@/lib/i18n";
import { ServicePage, ServiceNotFoundPage } from "@/pages/ServicePage";

export const Route = createFileRoute("/en/services/$slug")({
  loader: ({ params }) => {
    if (!serviceExists(params.slug)) throw notFound();
    return { slug: params.slug };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Service not found | AI Solutions" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const service = getServiceBySlug(params.slug, "en")!;
    const arPath = `/services/${service.slug}`;
    const url = SITE_ORIGIN + "/en" + arPath;
    return {
      meta: [
        { title: `${service.title} — ${service.heroTitle} | AI Solutions` },
        { name: "description", content: service.heroDesc },
        { property: "og:title", content: service.title },
        { property: "og:description", content: service.heroDesc },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
      ],
      links: [
        { rel: "canonical", href: url },
        ...hreflangLinks(arPath),
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: service.faq.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        },
      ],
    };
  },
  component: RouteComponent,
  notFoundComponent: ServiceNotFoundPage,
});

function RouteComponent() {
  const { slug } = Route.useLoaderData();
  return <ServicePage slug={slug} />;
}
