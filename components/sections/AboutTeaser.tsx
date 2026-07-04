import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function AboutTeaser() {
  return (
    <section
      className="py-20 sm:py-28 bg-neutral-25 border-y border-neutral-100"
      aria-labelledby="about-teaser-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <Image
              src="/images/melanie-photographe-portrait.jpg"
              alt="Mélanie, photographe, appareil photo à l'épaule"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-600 mb-3">
              Qui suis-je ?
            </p>
            <h2
              id="about-teaser-heading"
              className="font-serif text-3xl font-semibold text-neutral-950 sm:text-4xl"
            >
              Conteuse visuelle, avant tout
            </h2>
            <p className="mt-5 text-neutral-600 leading-relaxed">
              Je m'appelle Mélanie, photographe installée à La Palme, dans
              l'Aude. Mon approche : me faire discrète pour que vos émotions
              restent les vraies héroïnes de chaque photo. Pas de pose
              artificielle, juste votre histoire, racontée avec sensibilité.
            </p>
            <div className="mt-8">
              <Button href="/a-propos" variant="outline" className="group">
                En savoir plus sur moi
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
