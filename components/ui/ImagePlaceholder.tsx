import { cn } from "@/lib/utils";
import { Camera } from "lucide-react";

interface ImagePlaceholderProps {
  label?: string;
  className?: string;
}

/**
 * Encart stylisé affiché tant qu'une vraie photo n'a pas été fournie.
 * Évite les images cassées pendant que le portfolio se complète.
 */
export function ImagePlaceholder({ label, className }: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "flex h-full w-full flex-col items-center justify-center gap-2",
        "bg-gradient-to-br from-neutral-100 via-neutral-50 to-brand-50",
        "text-neutral-400",
        className
      )}
      role="img"
      aria-label={label ?? "Photo à venir"}
    >
      <Camera className="h-8 w-8" aria-hidden="true" />
      {label && <span className="text-xs">{label}</span>}
    </div>
  );
}
