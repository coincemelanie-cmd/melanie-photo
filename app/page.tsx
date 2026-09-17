import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { AboutTeaser } from "@/components/sections/AboutTeaser";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.seoTitle}`,
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
    streetAddress: siteConfig.author.addressParts.streetAddress,
    addressLocality: siteConfig.author.addressParts.addressLocality,
    postalCode: siteConfig.author.addressParts.postalCode,
    addressRegion: siteConfig.author.addressParts.addressRegion,
    addressCountry: "FR",
  },
  areaServed: ["Perpignan", "Narbonne", "Aude", "Pyrénées-Orientales"],
  serviceType: "Photographe Mariage, Grossesse, Naissance et Famille",
  priceRange: "Sur devis",
  sameAs: [siteConfig.social.facebook, siteConfig.social.instagram],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.7",
    reviewCount: "13",
  },
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
      <Testimonials />
      <CTA />
    </>
  );
}
