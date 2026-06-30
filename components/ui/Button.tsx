import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  fullWidth?: boolean;
}

type ButtonAsButton = BaseProps &
  ComponentPropsWithoutRef<"button"> & { href?: undefined };

type ButtonAsLink = BaseProps & { href: string; external?: boolean } & Omit<
    ComponentPropsWithoutRef<typeof Link>,
    "href"
  >;

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-600 text-white hover:bg-brand-700 focus-visible:ring-brand-500 shadow-soft hover:shadow-medium",
  secondary:
    "bg-neutral-950 text-white hover:bg-neutral-800 focus-visible:ring-neutral-500",
  ghost:
    "text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 focus-visible:ring-neutral-400",
  outline:
    "border border-neutral-300 text-neutral-700 hover:bg-neutral-50 hover:border-neutral-400 focus-visible:ring-neutral-400",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-3.5 py-2 text-sm gap-1.5",
  md: "px-5 py-2.5 text-sm gap-2",
  lg: "px-6 py-3 text-base gap-2",
};

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    loading = false,
    fullWidth = false,
    className,
    children,
    ...rest
  } = props;

  const classes = cn(
    "inline-flex items-center justify-center font-medium rounded-lg",
    "transition-all duration-150 ease-in-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    sizes[size],
    fullWidth && "w-full",
    className
  );

  if ("href" in rest && rest.href !== undefined) {
    const { href, external, ...linkRest } = rest as ButtonAsLink;
    return (
      <Link
        href={href}
        className={classes}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        {...linkRest}
      >
        {children}
      </Link>
    );
  }

  const { ...buttonRest } = rest as ButtonAsButton;
  return (
    <button className={classes} disabled={loading} {...buttonRest}>
      {loading && (
        <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
      )}
      {children}
    </button>
  );
}
