import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { PortfolioGallery } from "@/components/sections/PortfolioGallery";
import { CTA } from "@/components/sections/CTA";
import { galleryImages } from "@/config/gallery";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Découvrez le portfolio de Mélanie Photography : photos de mariage, séances grossesse et famille réalisées à Perpignan, Narbonne et dans l'Aude.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return (
    <>
      <div className="pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Portfolio" }]} className="mb-8" />

          <div className="max-w-2xl mb-10">
            <h1 className="font-serif text-3xl font-semibold text-neutral-950 sm:text-4xl">
              Portfolio
            </h1>
            <p className="mt-4 text-neutral-600 leading-relaxed">
              Un aperçu des moments capturés lors de mariages, séances
              grossesse et séances famille. Le portfolio se complète au fil
              des séances — revenez régulièrement pour découvrir les
              nouveautés.
            </p>
          </div>

          <PortfolioGallery images={galleryImages} />
        </div>
      </div>

      <CTA variant="light" />
    </>
  );
}
