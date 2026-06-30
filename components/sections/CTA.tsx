import { Button } from "@/components/ui/Button";
import { Mail, CheckCircle } from "lucide-react";

interface CTAProps {
  title?: string;
  description?: string;
  variant?: "default" | "light";
}

export function CTA({
  title = "Envie de raconter votre histoire en images ?",
  description = "Parlons de votre projet : mariage, grossesse ou famille. Je réponds personnellement à chaque demande sous 24h.",
  variant = "default",
}: CTAProps) {
  const isLight = variant === "light";

  return (
    <section
      className={`py-20 ${isLight ? "bg-neutral-25 border-t border-neutral-200" : "bg-white border-t border-neutral-100"}`}
      aria-labelledby="cta-heading"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2
          id="cta-heading"
          className="font-serif text-2xl font-semibold text-neutral-950 sm:text-3xl"
        >
          {title}
        </h2>
        <p className="mt-4 text-neutral-600 leading-relaxed">{description}</p>

        <div className="mt-8">
          <Button href="/contact" size="lg" className="group">
            <Mail className="h-4 w-4" aria-hidden="true" />
            Demander un devis
          </Button>
        </div>

        <ul
          className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2"
          role="list"
        >
          {["Réponse sous 24h", "Sans engagement", "Devis personnalisé"].map(
            (item) => (
              <li
                key={item}
                className="flex items-center gap-1.5 text-xs text-neutral-500"
              >
                <CheckCircle
                  className="h-3.5 w-3.5 text-brand-500"
                  aria-hidden="true"
                />
                {item}
              </li>
            )
          )}
        </ul>
      </div>
    </section>
  );
}
