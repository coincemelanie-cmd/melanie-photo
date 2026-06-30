"use client";

import { GalleryGrid } from "@/components/sections/GalleryGrid";
import type { GalleryCategory, GalleryImage } from "@/types/gallery";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface PortfolioGalleryProps {
  images: GalleryImage[];
}

const categories: { value: GalleryCategory | "tous"; label: string }[] = [
  { value: "tous", label: "Tous" },
  { value: "mariage", label: "Mariage" },
  { value: "grossesse", label: "Grossesse" },
  { value: "famille", label: "Famille" },
];

export function PortfolioGallery({ images }: PortfolioGalleryProps) {
  const [active, setActive] = useState<GalleryCategory | "tous">("tous");

  const filtered =
    active === "tous" ? images : images.filter((img) => img.category === active);

  return (
    <div>
      <nav
        aria-label="Filtrer le portfolio par catégorie"
        className="mb-8 flex flex-wrap gap-2"
      >
        {categories.map((cat) => (
          <button
            key={cat.value}
            type="button"
            onClick={() => setActive(cat.value)}
            className={cn(
              "inline-flex items-center rounded-full px-4 py-1.5 text-xs font-medium transition-colors",
              active === cat.value
                ? "bg-brand-600 text-white"
                : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
            )}
            aria-current={active === cat.value ? "true" : undefined}
          >
            {cat.label}
          </button>
        ))}
      </nav>

      <GalleryGrid images={filtered} />
    </div>
  );
}
