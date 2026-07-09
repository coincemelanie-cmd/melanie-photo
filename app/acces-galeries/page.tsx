import type { Metadata } from "next";
import Script from "next/script";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { siteConfig } from "@/config/site";
import { Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "Accès galeries",
  description:
    "Accédez à vos albums privés Mélanie Photography : saisissez vos identifiants pour retrouver vos photos de mariage, grossesse, naissance ou famille.",
  alternates: { canonical: "/acces-galeries" },
};

export default function AccesGaleriesPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="mx-auto max-w-md px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Accès galeries" }]} className="mb-8" />

        <div className="text-center mb-8">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-50">
            <Lock className="h-5 w-5 text-brand-600" aria-hidden="true" />
          </div>
          <h1 className="font-serif text-3xl font-semibold text-neutral-950 sm:text-4xl">
            Accès aux albums privés
          </h1>
          <p className="mt-4 text-neutral-600 leading-relaxed">
            Connectez-vous avec les identifiants qui vous ont été transmis
            pour retrouver la galerie privée de votre séance.
          </p>
        </div>

        <div className="rounded-xl border border-neutral-200 bg-white p-6 sm:p-8">
          <div id="jingooGallery" />
          <Script
            id="jingoo-gallery-loader"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(i,s,o,g,r,a,m){i['JingooGalleryObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script',"https://www.jingoo.com/api/accesDistant/BGgHYQNRADMJblAkUjoHZgh9VzMGJVw3WzcCaAFoXjFXYA84UWVXOFpnUXcHYQFkVSZWOlRoVjtbbwU+XW4LJQR1B1cDZAArCW5QIlIh.js",'JingooGalleryLoader');`,
            }}
          />
        </div>

        <div className="mt-8 rounded-xl border border-neutral-100 bg-neutral-25 p-5 text-sm text-neutral-600">
          <p>
            Vous n'avez pas reçu vos identifiants ou vous rencontrez un
            problème de connexion ?{" "}
            <a
              href={`mailto:${siteConfig.author.email}`}
              className="text-brand-600 underline underline-offset-2 hover:text-brand-700"
            >
              Contactez-moi par email
            </a>{" "}
            ou par téléphone au{" "}
            <a
              href={`tel:${siteConfig.author.phone.replace(/\s/g, "")}`}
              className="text-brand-600 underline underline-offset-2 hover:text-brand-700"
            >
              {siteConfig.author.phone}
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
