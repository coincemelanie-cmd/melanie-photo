"use client";

import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Lightbox } from "@/components/sections/Lightbox";
import type { GalleryImage } from "@/types/gallery";
import Image from "next/image";
import { useState } from "react";

interface GalleryGridProps {
  images: GalleryImage[];
}

export function GalleryGrid({ images }: GalleryGridProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (images.length === 0) {
    return (
      <p className="text-neutral-500">
        Cette galerie est en cours de construction — revenez bientôt !
      </p>
    );
  }

  return (
    <>
      <ul
        className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
        role="list"
      >
        {images.map((image, i) => (
          <li key={image.src}>
            <button
              type="button"
              onClick={() => setOpenIndex(i)}
              className="block aspect-square w-full overflow-hidden rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
              aria-label={`Agrandir : ${image.alt}`}
            >
              {image.placeholder ? (
                <ImagePlaceholder
                  label={image.alt}
                  className="transition-transform duration-300 hover:scale-105"
                />
              ) : (
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              )}
            </button>
          </li>
        ))}
      </ul>

      {openIndex !== null && (
        <Lightbox
          images={images}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onNavigate={setOpenIndex}
        />
      )}
    </>
  );
}
