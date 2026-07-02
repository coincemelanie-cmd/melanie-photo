import type { GalleryImage } from "@/types/gallery";

/**
 * Galerie portfolio. Les photos mariage et grossesse sont reprises de
 * l'ancien site melanie-photo.fr (fichiers watermarqués "Mélanie
 * Photography" — donc bien son travail, pas des visuels de démo du thème).
 * La catégorie famille n'a pas encore de vraie photo disponible (déjà "en
 * construction" sur l'ancien site) : elle reste en placeholder en attendant
 * de nouvelles séances.
 * Pour ajouter une photo : déposer le fichier dans
 * public/images/portfolio/{categorie}/ puis ajouter une entrée ici avec
 * `placeholder: false` (ou en l'omettant).
 */
export const galleryImages: GalleryImage[] = [
  // Mariage
  {
    src: "/images/portfolio/mariage/01-annick-philippe.jpg",
    alt: "Mariage d'Annick et Philippe",
    category: "mariage",
  },
  {
    src: "/images/portfolio/mariage/02-annick-philippe.jpg",
    alt: "Mariage d'Annick et Philippe",
    category: "mariage",
  },
  {
    src: "/images/portfolio/mariage/03-delphine-nabil.jpg",
    alt: "Mariage de Delphine et Nabil",
    category: "mariage",
  },
  {
    src: "/images/portfolio/mariage/04-delphine-nabil.jpg",
    alt: "Mariage de Delphine et Nabil",
    category: "mariage",
  },
  {
    src: "/images/portfolio/mariage/05-delphine-nabil.jpg",
    alt: "Mariage de Delphine et Nabil",
    category: "mariage",
  },
  {
    src: "/images/portfolio/mariage/06-plage.jpg",
    alt: "Séance couple en bord de mer",
    category: "mariage",
  },
  {
    src: "/images/portfolio/mariage/07-couple.jpg",
    alt: "Photo de couple de mariés",
    category: "mariage",
  },
  {
    src: "/images/portfolio/mariage/08-couple.jpg",
    alt: "Photo de couple de mariés",
    category: "mariage",
  },
  {
    src: "/images/portfolio/mariage/09-robe-dentelle.jpg",
    alt: "Détail de robe de mariée en dentelle",
    category: "mariage",
  },
  {
    src: "/images/portfolio/mariage/10-julie-benjamin.jpg",
    alt: "Mariage de Julie et Benjamin",
    category: "mariage",
  },
  {
    src: "/images/portfolio/mariage/11-social.jpg",
    alt: "Instant de mariage",
    category: "mariage",
  },
  {
    src: "/images/portfolio/mariage/12-social.jpg",
    alt: "Instant de mariage",
    category: "mariage",
  },
  {
    src: "/images/portfolio/mariage/13-social.jpg",
    alt: "Instant de mariage",
    category: "mariage",
  },
  {
    src: "/images/portfolio/mariage/14-social.jpg",
    alt: "Instant de mariage",
    category: "mariage",
  },
  {
    src: "/images/portfolio/mariage/15-social.jpg",
    alt: "Instant de mariage",
    category: "mariage",
  },
  {
    src: "/images/portfolio/mariage/16-mariage.jpg",
    alt: "Photo de mariage",
    category: "mariage",
  },
  {
    src: "/images/portfolio/mariage/17-domaine-belric.jpg",
    alt: "Réception de mariage illuminée au Domaine de Belric",
    category: "mariage",
  },
  {
    src: "/images/portfolio/mariage/18-clos-des-lys.jpg",
    alt: "Réception de mariage au Clos des Lys",
    category: "mariage",
  },
  // Grossesse
  {
    src: "/images/portfolio/grossesse/01-grossesse.jpg",
    alt: "Séance photo grossesse en studio",
    category: "grossesse",
  },
  {
    src: "/images/portfolio/grossesse/02-couple-grossesse.jpg",
    alt: "Séance grossesse en couple",
    category: "grossesse",
  },
  {
    src: "/images/portfolio/grossesse/03-grossesse-nb.jpg",
    alt: "Séance grossesse en noir et blanc",
    category: "grossesse",
  },
  // Famille — pas encore de vraie photo disponible, en attente de nouvelles séances
  {
    src: "/images/portfolio/famille/01.jpg",
    alt: "Photo de famille à venir",
    category: "famille",
    placeholder: true,
  },
  {
    src: "/images/portfolio/famille/02.jpg",
    alt: "Photo de famille à venir",
    category: "famille",
    placeholder: true,
  },
];
