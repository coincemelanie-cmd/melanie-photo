export interface Testimonial {
  name: string;
  service: "mariage" | "grossesse" | "naissance" | "famille";
  quote: string;
}

/**
 * Avis clients réels, repris de la fiche Google Business Profile de Mélanie
 * (avec son accord). Ne pas paraphraser ou inventer de nouveaux témoignages ici :
 * n'ajouter que des avis authentiques, fournis par Mélanie.
 */
export const testimonials: Testimonial[] = [
  {
    name: "Clémentine",
    service: "mariage",
    quote:
      "Une photographe calme, douce, patiente. Elle a su être très présente lors de notre mariage en étant très discrète. Elle est très professionnelle mais aussi très agréable, rigolote, avenante.",
  },
  {
    name: "Laetitia",
    service: "mariage",
    quote:
      "Super photographe très présente et rassurante, nous recommandons les yeux fermés. Un super travail, avec un prix très abordable.",
  },
  {
    name: "Déborah",
    service: "mariage",
    quote:
      "Merci pour votre professionnalisme Mélanie, tout était parfait, vous avez grandement contribué à la réussite de notre mariage.",
  },
  {
    name: "Julie",
    service: "famille",
    quote:
      "Très bonne séance avec Mélanie. Nous avons bien rigolé et au final nous avons de magnifiques photos et de beaux souvenirs.",
  },
];
