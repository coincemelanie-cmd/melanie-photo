import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef } from "react";

interface CardProps extends ComponentPropsWithoutRef<"div"> {
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
}

export function Card({
  hover = false,
  padding = "md",
  className,
  children,
  ...props
}: CardProps) {
  const paddings = { sm: "p-4", md: "p-6", lg: "p-8" };
  return (
    <div
      className={cn(
        "rounded-xl border border-neutral-200 bg-white",
        hover &&
          "transition-shadow duration-200 hover:shadow-medium cursor-pointer",
        paddings[padding],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
