import { Button } from "@/components/ui/Button";
import { ArrowRight, Heart } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section
      className="relative flex min-h-[90vh] items-end overflow-hidden pb-16 pt-32 sm:pb-24"
      aria-labelledby="hero-heading"
    >
      {/*
        Image de fond plein écran : la meilleure photo disponible dans les
        archives de l'ancien site ne dépasse pas 536px de large — un léger
        flou artistique (effet bokeh) masque la perte de netteté à l'étirement
        plein écran. À remplacer par une vraie photo haute résolution (2000px+)
        dès que disponible.
      */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/portfolio/mariage/portrait-mariee-petales-fleurs.jpg"
          alt="Portrait de mariée souriante sous une pluie de pétales de fleurs"
          fill
          priority
          className="scale-110 object-cover blur-sm"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-neutral-950/45 to-neutral-950/15" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-medium text-white backdrop-blur-sm mb-6">
            <Heart className="h-3 w-3 text-brand-300" aria-hidden="true" />
            Photographe Mariage, Grossesse et Famille
          </div>

          <h1
            id="hero-heading"
            className="font-serif text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Capturer ce qui compte vraiment
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
            Mélanie, photographe à La Palme, raconte avec sensibilité et
            authenticité les instants précieux de votre mariage, votre
            grossesse ou votre vie de famille.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Button href="/portfolio" size="lg" className="group">
              Découvrir le portfolio
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Button>
            <Button
              href="/contact"
              variant="outline"
              size="lg"
              className="border-white/40 text-white hover:bg-white/10 hover:border-white/60"
            >
              Demander un devis
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
