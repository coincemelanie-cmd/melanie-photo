import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
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
            Saisissez ci-dessous les identifiants qui vous ont été transmis
            pour retrouver la galerie privée de votre séance.
          </p>
        </div>

        <div className="rounded-xl border border-neutral-200 bg-white p-6 sm:p-8">
          <form
            method="post"
            action="https://www.jingoo.com/index.php"
            target="_top"
            className="space-y-4"
            aria-label="Connexion à votre galerie privée"
          >
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="identifiant2"
                className="text-sm font-medium text-neutral-700"
              >
                Identifiant
              </label>
              <input
                id="identifiant2"
                name="login"
                type="text"
                placeholder="Identifiant"
                required
                className="w-full rounded-lg border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-400"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="pass2"
                className="text-sm font-medium text-neutral-700"
              >
                Mot de passe
              </label>
              <input
                id="pass2"
                name="password"
                type="password"
                placeholder="Mot de passe"
                required
                className="w-full rounded-lg border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-400"
              />
            </div>

            <input type="hidden" name="action" value="login" />
            <input
              type="hidden"
              name="idPhotographeAccesModule"
              value="/infos/acces.php/3225645"
            />

            <Button type="submit" fullWidth size="lg">
              Connexion
            </Button>
          </form>
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
