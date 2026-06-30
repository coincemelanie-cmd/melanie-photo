import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Conditions Générales d'Utilisation",
  description: "Conditions générales d'utilisation du site melanie-photo.fr.",
  robots: { index: false },
  alternates: { canonical: "/cgu" },
};

export default function CGUPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "CGU" }]} className="mb-8" />

        <h1 className="font-serif text-3xl font-semibold text-neutral-950 mb-10">
          Conditions générales d'utilisation
        </h1>

        <div className="prose-blog space-y-8 text-sm">
          <section>
            <h2>Objet</h2>
            <p>
              Les présentes CGU régissent l'utilisation du site{" "}
              {siteConfig.url}, édité par {siteConfig.author.name}.
              L'utilisation du site implique l'acceptation pleine et entière
              des présentes conditions.
            </p>
          </section>

          <section>
            <h2>Accès au site</h2>
            <p>
              Le site est accessible gratuitement à tout utilisateur disposant
              d'un accès à internet. Tous les coûts liés à l'accès au site
              (matériel, connexion internet) sont à la charge de
              l'utilisateur.
            </p>
          </section>

          <section>
            <h2>Propriété intellectuelle</h2>
            <p>
              L'ensemble des contenus du site (photographies, textes, mise en
              page) est protégé par le droit d'auteur. Toute reproduction,
              même partielle, est soumise à autorisation préalable.
            </p>
          </section>

          <section>
            <h2>Modification des CGU</h2>
            <p>
              {siteConfig.author.name} se réserve le droit de modifier les
              présentes CGU à tout moment, sans préavis.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
