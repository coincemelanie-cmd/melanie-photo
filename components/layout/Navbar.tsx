"use client";

import { cn } from "@/lib/utils";
import { navigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { Menu, X, Camera } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-200",
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-neutral-200 shadow-soft"
          : "bg-white/80 backdrop-blur-sm"
      )}
    >
      <nav
        className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Navigation principale"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-neutral-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-md"
        >
          <Camera className="h-6 w-6 text-brand-600" aria-hidden="true" />
          <span className="font-serif text-lg font-semibold tracking-tight">
            {siteConfig.name}
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex" role="list">
          {navigation.main.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-150",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500",
                    isActive
                      ? "text-brand-600 bg-brand-50"
                      : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA desktop */}
        <div className="hidden lg:block">
          <Button href="/contact" size="sm">
            Demander un devis
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setIsOpen((v) => !v)}
          className={cn(
            "lg:hidden rounded-lg p-2 text-neutral-600 hover:bg-neutral-100",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
          )}
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          "lg:hidden border-t border-neutral-200 bg-white",
          "transition-all duration-200 ease-in-out",
          isOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        )}
        aria-hidden={!isOpen}
      >
        <div className="flex flex-col gap-1 px-4 py-4">
          {navigation.main.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3 py-2.5 rounded-lg text-sm font-medium",
                  isActive
                    ? "text-brand-600 bg-brand-50"
                    : "text-neutral-700 hover:bg-neutral-100"
                )}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="mt-2 pt-2 border-t border-neutral-100">
            <Button href="/contact" fullWidth>
              Demander un devis
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
