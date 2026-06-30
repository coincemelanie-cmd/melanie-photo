"use client";

import { cn } from "@/lib/utils";
import { forwardRef, type ComponentPropsWithoutRef } from "react";

interface TextareaProps extends ComponentPropsWithoutRef<"textarea"> {
  label?: string;
  error?: string;
  hint?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, hint, className, id, rows = 4, ...props }, ref) => {
    const textareaId = id ?? label?.toLowerCase().replace(/\s+/g, "-");
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={textareaId}
            className="text-sm font-medium text-neutral-700"
          >
            {label}
            {props.required && (
              <span className="ml-1 text-red-500" aria-hidden="true">
                *
              </span>
            )}
          </label>
        )}
        <textarea
          id={textareaId}
          ref={ref}
          rows={rows}
          className={cn(
            "w-full rounded-lg border px-3.5 py-2.5 text-sm text-neutral-900",
            "placeholder:text-neutral-400 resize-y",
            "transition-colors duration-150",
            "focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-0 focus:border-brand-400",
            error
              ? "border-red-400 bg-red-50 focus:ring-red-400"
              : "border-neutral-300 bg-white hover:border-neutral-400",
            "disabled:cursor-not-allowed disabled:bg-neutral-50",
            className
          )}
          aria-invalid={error ? "true" : undefined}
          aria-describedby={
            error
              ? `${textareaId}-error`
              : hint
                ? `${textareaId}-hint`
                : undefined
          }
          {...props}
        />
        {hint && !error && (
          <p id={`${textareaId}-hint`} className="text-xs text-neutral-500">
            {hint}
          </p>
        )}
        {error && (
          <p
            id={`${textareaId}-error`}
            role="alert"
            className="text-xs font-medium text-red-600"
          >
            {error}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
