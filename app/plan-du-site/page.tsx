import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { services } from "@/config/services";
import { getAllPosts } from "@/lib/blog";
import { navigation } from "@/config/navigation";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Plan du site",
  description: "Retrouvez toutes les pages du site melanie-photo.fr.",
  alternates: { canonical: "/plan-du-site" },
};

export default function PlanDuSitePage() {
  const posts = getAllPosts();

  return (
    <div className="pt-24 pb-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Plan du site" }]} className="mb-8" />

        <h1 className="font-serif text-3xl font-semibold text-neutral-950 mb-10">
          Plan du site
        </h1>

        <div className="space-y-10 text-sm">
          <section>
            <h2 className="font-serif text-lg font-semibold text-neutral-900 mb-3">
              Pages principales
            </h2>
            <ul className="space-y-2" role="list">
              {navigation.footer.pages.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-brand-600 hover:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-lg font-semibold text-neutral-900 mb-3">
              Prestations
            </h2>
            <ul className="space-y-2" role="list">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/prestations/${s.slug}`}
                    className="text-brand-600 hover:underline"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-lg font-semibold text-neutral-900 mb-3">
              Articles du blog
            </h2>
            <ul className="space-y-2" role="list">
              {posts.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/blog/${p.slug}`}
                    className="text-brand-600 hover:underline"
                  >
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-lg font-semibold text-neutral-900 mb-3">
              Légal
            </h2>
            <ul className="space-y-2" role="list">
              {navigation.footer.legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-brand-600 hover:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
