export interface Testimonial {
  name: string;
  service: "mariage" | "grossesse" | "famille";
  quote: string;
}

/**
 * À compléter avec les avis réels de Mélanie (Google, Facebook, retours clients).
 * Laissé volontairement court pour l'instant — remplacer par de vrais témoignages
 * avant la mise en production.
 */
export const testimonials: Testimonial[] = [
  {
    name: "Témoignage à venir",
    service: "mariage",
    quote:
      "Les premiers témoignages clients seront ajoutés ici prochainement.",
  },
];
