import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Accordion } from "@/components/ui/Accordion";
import { CoverImage } from "@/components/ui/CoverImage";
import { Button } from "@/components/ui/Button";
import { CTA } from "@/components/sections/CTA";
import { services, getServiceBySlug } from "@/config/services";
import { siteConfig } from "@/config/site";
import { CheckCircle, Sparkles } from "lucide-react";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: `/prestations/${service.slug}` },
    openGraph: {
      title: service.title,
      description: service.description,
      url: `/prestations/${service.slug}`,
    },
  };
}

export default function ServicePage({ params }: Props) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "Person",
      name: siteConfig.author.name,
      url: siteConfig.url,
    },
    areaServed: "FR",
    url: `${siteConfig.url}/prestations/${service.slug}`,
  };

  const faqJsonLd = service.faq.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  } : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      <div className="pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Prestations", href: "/prestations" },
              { label: service.shortTitle },
            ]}
            className="mb-8"
          />

          {/* Hero */}
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 mb-16">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl">
              <CoverImage
                src={service.image}
                alt={service.imageAlt}
                label={service.shortTitle}
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="font-serif text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
                {service.title}
              </h1>
              <p className="mt-4 text-xl text-neutral-600 leading-relaxed">
                {service.hero}
              </p>
              <p className="mt-4 text-neutral-600 leading-relaxed">
                {service.description}
              </p>
              <div className="mt-6">
                <Button href="/contact" size="lg">
                  Demander un devis
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Highlights */}
            <section aria-labelledby="highlights-heading">
              <h2
                id="highlights-heading"
                className="font-serif text-lg font-bold text-neutral-950 mb-6"
              >
                Ce qui rend chaque séance unique
              </h2>
              <ul className="space-y-3" role="list">
                {service.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Sparkles
                      className="mt-0.5 h-5 w-5 shrink-0 text-brand-500"
                      aria-hidden="true"
                    />
                    <span className="text-sm text-neutral-700">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Includes */}
            <section aria-labelledby="includes-heading">
              <h2
                id="includes-heading"
                className="font-serif text-lg font-bold text-neutral-950 mb-6"
              >
                Ce qui est inclus
              </h2>
              <ul className="space-y-3" role="list">
                {service.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle
                      className="mt-0.5 h-5 w-5 shrink-0 text-brand-500"
                      aria-hidden="true"
                    />
                    <span className="text-sm text-neutral-700">{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Process */}
          <section className="mt-16" aria-labelledby="process-heading">
            <h2
              id="process-heading"
              className="font-serif text-lg font-bold text-neutral-950 mb-8"
            >
              Comment se déroule la séance ?
            </h2>
            <ol className="space-y-4" role="list">
              {service.process.map((step) => (
                <li key={step.step} className="flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-50 text-xs font-bold text-brand-600">
                    {step.step}
                  </span>
                  <div>
                    <h3 className="font-semibold text-neutral-900">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm text-neutral-600">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* Pricing */}
          <section className="mt-16" aria-labelledby="pricing-heading">
            <h2
              id="pricing-heading"
              className="font-serif text-lg font-bold text-neutral-950 mb-8"
            >
              Tarifs
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 max-w-2xl">
              {service.pricing.map((formula) => (
                <div
                  key={formula.label}
                  className="rounded-xl border border-neutral-200 bg-white p-6"
                >
                  <h3 className="font-semibold text-neutral-900">
                    {formula.label}
                  </h3>
                  <p className="mt-1 font-serif text-2xl font-semibold text-brand-600">
                    {formula.price}
                  </p>
                  <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                    {formula.description}
                  </p>
                  <ul className="mt-4 space-y-2" role="list">
                    {formula.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-sm text-neutral-700"
                      >
                        <CheckCircle
                          className="mt-0.5 h-4 w-4 shrink-0 text-brand-500"
                          aria-hidden="true"
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          {service.faq.length > 0 && (
            <section className="mt-16" aria-labelledby="faq-heading">
              <h2
                id="faq-heading"
                className="font-serif text-lg font-bold text-neutral-950 mb-6"
              >
                Questions fréquentes
              </h2>
              <div className="max-w-2xl">
                <Accordion items={service.faq} allowMultiple />
              </div>
            </section>
          )}
        </div>
      </div>

      <CTA />
    </>
  );
}
