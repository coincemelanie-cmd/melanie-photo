import type { GalleryImage } from "@/types/gallery";

/**
 * Galerie portfolio. En attendant les vraies photos (sauvegarde du site actuel
 * + nouvelles photos à fournir), chaque entrée est marquée `placeholder: true`
 * et affiche un encart stylisé plutôt qu'une image cassée.
 * Pour activer une vraie photo : déposer le fichier dans
 * public/images/portfolio/{categorie}/, renseigner `src` et retirer `placeholder`.
 */
export const galleryImages: GalleryImage[] = [
  // Mariage
  {
    src: "/images/portfolio/mariage/01.jpg",
    alt: "Photo de mariage 1",
    category: "mariage",
    placeholder: true,
  },
  {
    src: "/images/portfolio/mariage/02.jpg",
    alt: "Photo de mariage 2",
    category: "mariage",
    placeholder: true,
  },
  {
    src: "/images/portfolio/mariage/03.jpg",
    alt: "Photo de mariage 3",
    category: "mariage",
    placeholder: true,
  },
  {
    src: "/images/portfolio/mariage/04.jpg",
    alt: "Photo de mariage 4",
    category: "mariage",
    placeholder: true,
  },
  {
    src: "/images/portfolio/mariage/05.jpg",
    alt: "Photo de mariage 5",
    category: "mariage",
    placeholder: true,
  },
  {
    src: "/images/portfolio/mariage/06.jpg",
    alt: "Photo de mariage 6",
    category: "mariage",
    placeholder: true,
  },
  // Grossesse
  {
    src: "/images/portfolio/grossesse/01.jpg",
    alt: "Photo de grossesse 1",
    category: "grossesse",
    placeholder: true,
  },
  {
    src: "/images/portfolio/grossesse/02.jpg",
    alt: "Photo de grossesse 2",
    category: "grossesse",
    placeholder: true,
  },
  {
    src: "/images/portfolio/grossesse/03.jpg",
    alt: "Photo de grossesse 3",
    category: "grossesse",
    placeholder: true,
  },
  {
    src: "/images/portfolio/grossesse/04.jpg",
    alt: "Photo de grossesse 4",
    category: "grossesse",
    placeholder: true,
  },
  // Famille
  {
    src: "/images/portfolio/famille/01.jpg",
    alt: "Photo de famille 1",
    category: "famille",
    placeholder: true,
  },
  {
    src: "/images/portfolio/famille/02.jpg",
    alt: "Photo de famille 2",
    category: "famille",
    placeholder: true,
  },
  {
    src: "/images/portfolio/famille/03.jpg",
    alt: "Photo de famille 3",
    category: "famille",
    placeholder: true,
  },
  {
    src: "/images/portfolio/famille/04.jpg",
    alt: "Photo de famille 4",
    category: "famille",
    placeholder: true,
  },
];
