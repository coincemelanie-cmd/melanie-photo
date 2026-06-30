import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site melanie-photo.fr.",
  robots: { index: false },
  alternates: { canonical: "/mentions-legales" },
};

export default function MentionsLegalesPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Mentions légales" }]} className="mb-8" />

        <h1 className="font-serif text-3xl font-semibold text-neutral-950 mb-10">
          Mentions légales
        </h1>

        <div className="prose-blog space-y-8 text-sm">
          <section>
            <h2>Éditeur du site</h2>
            <p>
              <strong>{siteConfig.author.name}</strong>
              <br />
              {siteConfig.author.title}
              <br />
              Adresse : {siteConfig.author.address}
              <br />
              SIRET : {siteConfig.author.siret}
              <br />
              Email : {siteConfig.author.email}
              <br />
              Téléphone : {siteConfig.author.phone}
            </p>
          </section>

          <section>
            <h2>Hébergement</h2>
            <p>
              Ce site est hébergé par Vercel Inc., 340 Pine Street, Suite 701,
              San Francisco, California 94104, États-Unis.
            </p>
          </section>

          <section>
            <h2>Propriété intellectuelle</h2>
            <p>
              L'ensemble du contenu de ce site (textes, photographies,
              graphiques, logos) est la propriété exclusive de{" "}
              {siteConfig.author.name}, sauf mention contraire. Toute
              reproduction ou diffusion sans autorisation préalable est
              interdite, en particulier les photographies qui restent la
              propriété de la photographe même après livraison aux clients.
            </p>
          </section>

          <section>
            <h2>Limitation de responsabilité</h2>
            <p>
              Les informations contenues sur ce site sont données à titre
              informatif. {siteConfig.author.name} ne peut être tenu
              responsable des erreurs ou omissions dans ces informations, ni
              des dommages directs ou indirects résultant de leur
              utilisation.
            </p>
          </section>

          <section>
            <h2>Loi applicable</h2>
            <p>
              Le présent site est soumis au droit français. En cas de litige,
              les tribunaux français seront compétents.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
