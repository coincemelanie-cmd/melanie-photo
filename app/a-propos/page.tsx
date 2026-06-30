import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { CTA } from "@/components/sections/CTA";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Découvrez Mélanie, photographe à La Palme dans l'Aude, spécialisée en mariage, grossesse et famille. Une approche sensible et authentique.",
  alternates: { canonical: "/a-propos" },
};

export default function AProposPage() {
  return (
    <>
      <div className="pt-24 pb-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "À propos" }]} className="mb-8" />

          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl lg:sticky lg:top-28">
              <ImagePlaceholder label="Portrait de Mélanie à venir" />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-600 mb-3">
                Qui suis-je ?
              </p>
              <h1 className="font-serif text-3xl font-semibold text-neutral-950 sm:text-4xl">
                Conteuse visuelle, avant tout
              </h1>

              <div className="mt-6 space-y-5 text-neutral-700 leading-relaxed">
                <p>
                  Je m'appelle Mélanie. Installée à La Palme, dans l'Aude,
                  j'accompagne les couples, les futures mamans et les familles
                  de la région Perpignan–Narbonne pour capturer leurs moments
                  les plus précieux.
                </p>
                <p>
                  Mon approche est simple : me faire discrète pour que vos
                  émotions restent les vraies héroïnes de chaque photo. Je ne
                  cherche pas la pose parfaite, mais l'instant vrai — un
                  regard, un rire, un silence partagé.
                </p>
                <p>
                  Chaque séance, chaque mariage est différent. Je m'adapte à
                  votre rythme, à votre histoire, avec toujours la même
                  exigence : vous offrir des photos qui vous ressemblent
                  vraiment, et que vous regarderez encore avec émotion dans
                  vingt ans.
                </p>
                <p>
                  Si vous cherchez une photographe sensible, à l'écoute et
                  passionnée par l'authenticité, j'serais ravie d'échanger
                  avec vous sur votre projet.
                </p>
              </div>

              <div className="mt-8 rounded-xl border border-neutral-100 bg-neutral-25 p-5 text-sm text-neutral-600">
                <p>
                  <strong className="text-neutral-900">
                    Zone d'intervention :
                  </strong>{" "}
                  {siteConfig.author.location}, et au-delà selon votre projet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CTA variant="light" />
    </>
  );
}
