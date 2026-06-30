export type GalleryCategory = "mariage" | "grossesse" | "famille";

export interface GalleryImage {
  src: string;
  alt: string;
  category: GalleryCategory;
  /** true tant que la vraie photo n'a pas été fournie : affiche un placeholder stylisé */
  placeholder?: boolean;
}
