import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetail } from "@/components/services/service-detail";
import { ServiceHero } from "@/components/services/service-hero";
import { getServiceBySlug, services } from "@/lib/services";
import { createPageMetadata, serviceJsonLd } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return createPageMetadata({
    title: `${service.title} ${service.titleEmphasis}`,
    description: service.shortDescription,
    path: `/services/${service.slug}`,
    keywords: [
      service.titleEmphasis.toLowerCase(),
      service.featureTag.toLowerCase(),
    ],
    image: service.image,
  });
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const jsonLd = serviceJsonLd(service);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServiceHero service={service} />
      <ServiceDetail service={service} />
    </>
  );
}
