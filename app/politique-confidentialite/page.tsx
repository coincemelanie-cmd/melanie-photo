import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité et protection des données personnelles du site melanie-photo.fr.",
  robots: { index: false },
  alternates: { canonical: "/politique-confidentialite" },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="pt-24 pb-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[{ label: "Politique de confidentialité" }]}
          className="mb-8"
        />

        <h1 className="font-serif text-3xl font-semibold text-neutral-950 mb-10">
          Politique de confidentialité
        </h1>

        <div className="prose-blog space-y-8 text-sm">
          <section>
            <h2>Données collectées</h2>
            <p>
              Lorsque vous remplissez le formulaire de contact, nous
              collectons votre nom, votre email, votre téléphone et les
              informations relatives à votre projet (prestation souhaitée,
              date, message). Ces données sont utilisées uniquement pour
              répondre à votre demande.
            </p>
          </section>

          <section>
            <h2>Utilisation des données</h2>
            <p>
              Vos données ne sont jamais transmises à des tiers à des fins
              commerciales. Elles sont uniquement utilisées par{" "}
              {siteConfig.author.name} pour échanger avec vous sur votre
              projet photographique.
            </p>
          </section>

          <section>
            <h2>Conservation des données</h2>
            <p>
              Les données collectées via le formulaire de contact sont
              conservées le temps nécessaire au traitement de votre demande,
              puis archivées dans le cadre de la relation commerciale si vous
              devenez cliente ou client.
            </p>
          </section>

          <section>
            <h2>Vos droits</h2>
            <p>
              Conformément au Règlement Général sur la Protection des Données
              (RGPD), vous disposez d'un droit d'accès, de rectification et
              de suppression de vos données personnelles. Pour exercer ces
              droits, contactez {siteConfig.author.email}.
            </p>
          </section>

          <section>
            <h2>Cookies</h2>
            <p>
              Ce site utilise des cookies de mesure d'audience anonymisés
              (Vercel Analytics) qui ne permettent pas d'identifier
              individuellement les visiteurs.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
