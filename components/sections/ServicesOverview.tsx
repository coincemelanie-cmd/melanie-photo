import { services } from "@/config/services";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { CoverImage } from "@/components/ui/CoverImage";

export function ServicesOverview() {
  return (
    <section className="py-20 sm:py-28" aria-labelledby="services-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <h2
            id="services-heading"
            className="font-serif text-3xl font-semibold text-neutral-950 sm:text-4xl"
          >
            Des moments de vie, une même sensibilité
          </h2>
          <p className="mt-4 text-neutral-600 leading-relaxed">
            Chaque séance est pensée pour vous ressembler — sans poses
            forcées, avec beaucoup d'écoute.
          </p>
        </div>

        <ul
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          role="list"
        >
          {services.map((service) => (
            <li key={service.slug}>
              <Link
                href={`/prestations/${service.slug}`}
                className="group block overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-all duration-200 hover:shadow-large hover:border-neutral-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <CoverImage
                    src={service.image}
                    alt={service.imageAlt}
                    label={service.shortTitle}
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-neutral-900 group-hover:text-brand-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-600 leading-relaxed line-clamp-2">
                    {service.hero}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-xs font-medium text-brand-600">
                    Découvrir
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
    </section>
  );
}
