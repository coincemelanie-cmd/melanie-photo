export interface PricingFormula {
  label: string;
  price: string;
  description: string;
  features: string[];
}

export interface Service {
  slug: string;
  category: "mariage" | "grossesse" | "famille";
  title: string;
  shortTitle: string;
  description: string;
  hero: string;
  /** Photo de couverture réelle. Si absente, un placeholder stylisé est affiché. */
  image?: string;
  imageAlt?: string;
  /** Ce qui rend chaque séance unique, l'approche artistique */
  highlights: string[];
  /** Ce qui est inclus dans la prestation */
  includes: string[];
  process: { step: number; title: string; description: string }[];
  pricing: PricingFormula[];
  faq: { question: string; answer: string }[];
  keywords: string[];
}
