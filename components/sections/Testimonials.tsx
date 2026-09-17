import { testimonials } from "@/config/testimonials";
import { Quote, Star } from "lucide-react";

export function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section
      className="py-20 sm:py-28 bg-white"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2
          id="testimonials-heading"
          className="font-serif text-3xl font-semibold text-neutral-950 sm:text-4xl"
        >
          Ce qu'ils en disent
        </h2>

        <a
          href="https://www.google.com/search?q=Melanie+Photography+La+Palme+avis"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-neutral-600 hover:text-brand-600 transition-colors"
        >
          <span className="flex items-center gap-0.5" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="h-4 w-4 fill-brand-500 text-brand-500"
              />
            ))}
          </span>
          4,7/5 sur Google — voir les avis
        </a>

        <ul className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2" role="list">
          {testimonials.map((t, i) => (
            <li
              key={i}
              className="rounded-2xl border border-neutral-200 bg-neutral-25 p-6 text-left"
            >
              <Quote
                className="h-5 w-5 text-brand-400 mb-4"
                aria-hidden="true"
              />
              <p className="text-sm leading-relaxed text-neutral-700">
                {t.quote}
              </p>
              <p className="mt-4 text-xs font-semibold text-neutral-500">
                {t.name} — {t.service}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
