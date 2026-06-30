import { cn } from "@/lib/utils";
import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  const allItems = [{ label: "Accueil", href: "/" }, ...items];

  return (
    <nav
      aria-label="Fil d'Ariane"
      className={cn("flex items-center", className)}
    >
      <ol
        className="flex flex-wrap items-center gap-1 text-xs text-neutral-500"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        {allItems.map((item, index) => {
          const isLast = index === allItems.length - 1;
          return (
            <li
              key={index}
              className="flex items-center gap-1"
              itemScope
              itemProp="itemListElement"
              itemType="https://schema.org/ListItem"
            >
              {index === 0 ? (
                <Home className="h-3 w-3" aria-hidden="true" />
              ) : (
                <ChevronRight
                  className="h-3 w-3 text-neutral-300"
                  aria-hidden="true"
                />
              )}
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="hover:text-brand-600 transition-colors"
                  itemProp="item"
                >
                  <span itemProp="name">{item.label}</span>
                </Link>
              ) : (
                <span
                  className={cn(isLast && "text-neutral-700 font-medium")}
                  itemProp="name"
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </span>
              )}
              <meta itemProp="position" content={String(index + 1)} />
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
