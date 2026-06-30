import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ContactForm } from "@/components/sections/ContactForm";
import { siteConfig } from "@/config/site";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Mélanie Photography pour votre séance mariage, grossesse ou famille à Perpignan, Narbonne ou ailleurs en Occitanie.",
  alternates: { canonical: "/contact" },
};

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.author.email,
    href: `mailto:${siteConfig.author.email}`,
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: siteConfig.author.phone,
    href: `tel:${siteConfig.author.phone.replace(/\s/g, "")}`,
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@melaniephotography661134",
    href: siteConfig.social.instagram,
  },
  {
    icon: MapPin,
    label: "Adresse",
    value: siteConfig.author.address,
    href: undefined,
  },
];

export default function ContactPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Contact" }]} className="mb-8" />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h1 className="font-serif text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl mb-4">
              Parlons de votre projet
            </h1>
            <p className="text-lg text-neutral-600 mb-10 leading-relaxed">
              Que ce soit pour un mariage, une séance grossesse ou une séance
              famille, je réponds personnellement à toutes les demandes.
            </p>

            <ul className="space-y-4" role="list">
              {contactMethods.map(({ icon: Icon, label, value, href }) => (
                <li key={label}>
                  {href ? (
                    <a
                      href={href}
                      {...(href.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="flex items-start gap-4 rounded-xl border border-neutral-200 bg-white p-5 transition-all duration-150 hover:shadow-medium hover:border-neutral-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50">
                        <Icon
                          className="h-5 w-5 text-brand-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <div className="text-xs font-medium uppercase tracking-wider text-neutral-400">
                          {label}
                        </div>
                        <div className="mt-0.5 font-semibold text-neutral-900">
                          {value}
                        </div>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-start gap-4 rounded-xl border border-neutral-200 bg-white p-5">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50">
                        <Icon
                          className="h-5 w-5 text-brand-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <div className="text-xs font-medium uppercase tracking-wider text-neutral-400">
                          {label}
                        </div>
                        <div className="mt-0.5 font-semibold text-neutral-900">
                          {value}
                        </div>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-xl border border-neutral-100 bg-neutral-25 p-5 text-sm text-neutral-600">
              <p>
                <strong className="text-neutral-900">
                  Zone d'intervention :
                </strong>{" "}
                {siteConfig.author.location}, et au-delà selon votre projet.
              </p>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </div>
  );
}
