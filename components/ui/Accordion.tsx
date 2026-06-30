"use client";

import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  className?: string;
}

export function Accordion({
  items,
  allowMultiple = false,
  className,
}: AccordionProps) {
  const [openIndexes, setOpenIndexes] = useState<Set<number>>(new Set());

  function toggle(index: number) {
    setOpenIndexes((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        if (!allowMultiple) next.clear();
        next.add(index);
      }
      return next;
    });
  }

  return (
    <div className={cn("divide-y divide-neutral-200", className)}>
      {items.map((item, index) => {
        const isOpen = openIndexes.has(index);
        const id = `accordion-${index}`;
        return (
          <div key={index}>
            <button
              id={`${id}-trigger`}
              aria-controls={`${id}-panel`}
              aria-expanded={isOpen}
              onClick={() => toggle(index)}
              className={cn(
                "flex w-full items-start justify-between py-5 text-left",
                "text-sm font-medium text-neutral-900",
                "hover:text-brand-600 transition-colors duration-150",
                "focus-visible:outline-none focus-visible:text-brand-600"
              )}
            >
              <span className="pr-4">{item.question}</span>
              <ChevronDown
                className={cn(
                  "mt-0.5 h-4 w-4 shrink-0 text-neutral-500 transition-transform duration-200",
                  isOpen && "rotate-180"
                )}
                aria-hidden="true"
              />
            </button>
            <div
              id={`${id}-panel`}
              role="region"
              aria-labelledby={`${id}-trigger`}
              hidden={!isOpen}
            >
              <p className="pb-5 text-sm leading-relaxed text-neutral-600">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
