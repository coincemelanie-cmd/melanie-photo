import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import {
  Camera,
  Images,
  Heart,
  BookOpen,
  Mail,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Page introuvable",
  robots: { index: false },
};

const shortcuts = [
  {
    label: "Voir le portfolio",
    description: "Mariages, grossesses, naissances, familles",
    href: "/portfolio",
    icon: Images,
  },
  {
    label: "Découvrir les prestations",
    description: "Les formules et le déroulé des séances",
    href: "/prestations",
    icon: Heart,
  },
  {
    label: "Lire le blog",
    description: "Conseils et coulisses de photographe",
    href: "/blog",
    icon: BookOpen,
  },
  {
    label: "Me contacter",
    description: "Une question, un projet à raconter",
    href: "/contact",
    icon: Mail,
  },
];

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-4 py-20 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-50">
        <Camera className="h-7 w-7 text-brand-600" aria-hidden="true" />
      </div>

      <p className="mt-6 font-serif text-7xl font-semibold text-brand-200">
        404
      </p>
      <h1 className="mt-4 font-serif text-2xl font-semibold text-neutral-950 sm:text-3xl">
        Oups, cette page est hors cadre
      </h1>
      <p className="mt-3 max-w-md text-neutral-600 leading-relaxed">
        Même les meilleurs photographes loupent parfois un cadrage. Cette
        page a changé d'adresse ou n'a jamais existé, mais tout le reste du
        site est bien net et vous attend juste en dessous.
      </p>

      <div className="mt-10 w-full max-w-2xl">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {shortcuts.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex items-start gap-4 rounded-xl border border-neutral-200 bg-white p-5 text-left transition-colors hover:border-brand-300 hover:bg-brand-50/40"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-50 text-neutral-500 transition-colors group-hover:bg-brand-100 group-hover:text-brand-600">
                <item.icon className="h-4.5 w-4.5" aria-hidden="true" />
              </div>
              <div>
                <p className="flex items-center gap-1 text-sm font-semibold text-neutral-900">
                  {item.label}
                  <ArrowRight
                    className="h-3.5 w-3.5 text-neutral-400 transition-transform group-hover:translate-x-0.5 group-hover:text-brand-500"
                    aria-hidden="true"
                  />
                </p>
                <p className="mt-1 text-xs text-neutral-500">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <Button href="/">Retour à l'accueil</Button>
      </div>
    </div>
  );
}
