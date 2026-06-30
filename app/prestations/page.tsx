import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CTA } from "@/components/sections/CTA";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { services } from "@/config/services";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Prestations",
  description:
    "Découvrez les prestations de Mélanie Photography : photo de mariage, séance grossesse et séance famille à Perpignan, Narbonne et dans l'Aude.",
  alternates: { canonical: "/prestations" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Prestations photographiques",
  itemListElement: services.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: service.title,
    url: `/prestations/${service.slug}`,
    description: service.description,
  })),
};

export default function PrestationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Prestations" }]} className="mb-8" />

          <div className="max-w-2xl mb-12">
            <h1 className="font-serif text-3xl font-semibold text-neutral-950 sm:text-4xl">
              Des séances sur mesure, pensées pour vous
            </h1>
            <p className="mt-4 text-lg text-neutral-600 leading-relaxed">
              Chaque prestation est construite autour de votre histoire et de
              vos envies. Toutes les formules sont personnalisables sur devis.
            </p>
          </div>

          <ul
            className="grid grid-cols-1 gap-6 sm:grid-cols-3"
            role="list"
          >
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/prestations/${service.slug}`}
                  className="group flex flex-col h-full overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-all duration-200 hover:shadow-large hover:border-neutral-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <ImagePlaceholder label={service.shortTitle} />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="font-serif text-xl font-semibold text-neutral-900 group-hover:text-brand-600 transition-colors">
                      {service.title}
                    </h2>
                    <p className="mt-2 text-sm text-neutral-600 leading-relaxed flex-1">
                      {service.description}
                    </p>
                    <div className="mt-4 flex items-center gap-1 text-xs font-medium text-brand-600">
                      En savoir plus
                      <ArrowRight
                        className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <CTA variant="light" />
    </>
  );
}
