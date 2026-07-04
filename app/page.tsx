import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { AboutTeaser } from "@/components/sections/AboutTeaser";
import { CTA } from "@/components/sections/CTA";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: siteConfig.author.phone,
  email: siteConfig.author.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.author.address,
    addressCountry: "FR",
  },
  areaServed: ["Perpignan", "Narbonne", "Aude", "Pyrénées-Orientales"],
  serviceType: "Photographe Mariage, Grossesse, Naissance et Famille",
  priceRange: "Sur devis",
  sameAs: [siteConfig.social.facebook, siteConfig.social.instagram],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <ServicesOverview />
      <AboutTeaser />
      {/* Section "Ce qu'ils en disent" masquée en attendant de vrais témoignages clients */}
      <CTA />
    </>
  );
}
