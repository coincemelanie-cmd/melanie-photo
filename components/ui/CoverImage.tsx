import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface CoverImageProps {
  src?: string;
  alt?: string;
  label: string;
  className?: string;
  sizes?: string;
}

/** Affiche une vraie photo si `src` est fourni, sinon un placeholder stylisé. */
export function CoverImage({ src, alt, label, className, sizes }: CoverImageProps) {
  if (!src) {
    return <ImagePlaceholder label={label} className={className} />;
  }
  return (
    <div className={cn("relative h-full w-full", className)}>
      <Image
        src={src}
        alt={alt ?? label}
        fill
        sizes={sizes ?? "(min-width: 1024px) 33vw, 100vw"}
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>
  );
}
