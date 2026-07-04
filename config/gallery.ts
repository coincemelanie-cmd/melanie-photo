import type { GalleryImage } from "@/types/gallery";

/**
 * Galerie portfolio. Photos triées depuis la médiathèque complète de
 * l'ancien site (fichiers watermarqués "Mélanie Photography" — donc bien
 * son travail), en gardant les versions en plus haute résolution disponibles
 * et en recadrant celles dont le filigrane restait visible. Les visuels de
 * démo du thème WordPress, les images générées par IA et les visuels
 * marketing d'imprimantes trouvés dans le dossier source ont été écartés.
 * Pour ajouter une photo : déposer le fichier dans
 * public/images/portfolio/{categorie}/ (nom de fichier descriptif en
 * minuscules avec tirets, sans accents) puis ajouter une entrée ici.
 */
export const galleryImages: GalleryImage[] = [
  // Mariage
  {
    src: "/images/portfolio/mariage/photographe-mariage-couple-champs.jpg",
    alt: "Photographe mariage : couple de mariés dans un champ",
    category: "mariage",
  },
  {
    src: "/images/portfolio/mariage/photographe-mariage-2cv-vintage.jpg",
    alt: "Photographe mariage : marié au volant d'une 2CV vintage",
    category: "mariage",
  },
  {
    src: "/images/portfolio/mariage/photographe-mariage-salle-reception-doree.jpg",
    alt: "Photographe mariage : cortège dans une salle de réception dorée",
    category: "mariage",
  },
  {
    src: "/images/portfolio/mariage/photographe-mariage-collioure-robe-rose.jpg",
    alt: "Photographe mariage à Collioure : mariée en robe rose face à la baie",
    category: "mariage",
  },
  {
    src: "/images/portfolio/mariage/photographe-mariage-marie-bouquet-plage.jpg",
    alt: "Photographe mariage : marié avec bouquet et ombrelle sur la plage",
    category: "mariage",
  },
  {
    src: "/images/portfolio/mariage/photographe-mariage-plage-ils-se-disent-oui.jpg",
    alt: "Photographe mariage : couple sur la plage devant le panneau \"Ils se disent oui\"",
    category: "mariage",
  },
  {
    src: "/images/portfolio/mariage/photographe-mariage-portrait-couple-arbre.jpg",
    alt: "Photographe mariage : portrait des mariés adossés à un arbre",
    category: "mariage",
  },
  {
    src: "/images/portfolio/mariage/photobooth-mariage-gwendoline-dimitri.jpg",
    alt: "Photobooth animé lors du mariage de Gwendoline et Dimitri",
    category: "mariage",
  },
  {
    src: "/images/portfolio/mariage/photographe-mariage-detail-robe-dentelle.jpg",
    alt: "Photographe mariage : détail du dos d'une robe de mariée en dentelle",
    category: "mariage",
  },
  {
    src: "/images/portfolio/mariage/photographe-mariage-robe-mariee-dune.jpg",
    alt: "Photographe mariage : mariée souriante sur un chemin de dune",
    category: "mariage",
  },
  {
    src: "/images/portfolio/mariage/photographe-mariage-groupe-plage-complicite.jpg",
    alt: "Photographe mariage : moment de complicité entre les invités sur la plage",
    category: "mariage",
  },
  {
    src: "/images/portfolio/mariage/photographe-mariage-couple-vignes.jpg",
    alt: "Photographe mariage : couple enlacé au milieu des vignes",
    category: "mariage",
  },
  {
    src: "/images/portfolio/mariage/portrait-mariage-baiser-noir-blanc.jpg",
    alt: "Portrait de mariage en noir et blanc : baiser des mariés",
    category: "mariage",
  },
  {
    src: "/images/portfolio/mariage/sortie-mariage-confettis.jpg",
    alt: "Sortie de mairie des mariés sous les confettis",
    category: "mariage",
  },
  {
    src: "/images/portfolio/mariage/mariage-buffet-cocktail-dinatoire.jpg",
    alt: "Buffet cocktail dînatoire dressé pour une réception de mariage",
    category: "mariage",
  },
  {
    src: "/images/portfolio/mariage/portrait-mariee-petales-fleurs.jpg",
    alt: "Portrait de mariée souriante sous une pluie de pétales de fleurs",
    category: "mariage",
  },
  {
    src: "/images/portfolio/mariage/reception-mariage-domaine-belric-nuit.jpg",
    alt: "Réception de mariage illuminée de nuit au Domaine de Belric",
    category: "mariage",
  },
  {
    src: "/images/portfolio/mariage/reception-mariage-clos-des-lys-jardin.jpg",
    alt: "Réception de mariage dans le jardin du Clos des Lys",
    category: "mariage",
  },
  // Grossesse
  {
    src: "/images/portfolio/grossesse/photographe-grossesse-studio-denim.jpg",
    alt: "Photographe grossesse en studio, future maman en chemise en jean",
    category: "grossesse",
  },
  {
    src: "/images/portfolio/grossesse/photographe-grossesse-couple-complicite.jpg",
    alt: "Photographe grossesse : moment de complicité en couple",
    category: "grossesse",
  },
  {
    src: "/images/portfolio/grossesse/photographe-grossesse-etude-noir-blanc.jpg",
    alt: "Photographe grossesse : étude en noir et blanc du ventre arrondi",
    category: "grossesse",
  },
  // Naissance — pas encore de vraie photo disponible, en attente de nouvelles séances
  {
    src: "/images/portfolio/naissance/01.jpg",
    alt: "Photo de naissance à venir",
    category: "naissance",
    placeholder: true,
  },
  {
    src: "/images/portfolio/naissance/02.jpg",
    alt: "Photo de naissance à venir",
    category: "naissance",
    placeholder: true,
  },
  // Famille
  {
    src: "/images/portfolio/famille/photographe-famille-fratrie-plage.jpg",
    alt: "Photographe famille : fratrie réunie sur la plage",
    category: "famille",
  },
  {
    src: "/images/portfolio/famille/photographe-famille-complicite-maman-enfants.jpg",
    alt: "Photographe famille : complicité entre une maman et ses enfants au bord de l'eau",
    category: "famille",
  },
];
