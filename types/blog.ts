export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  readingTime: number;
  featured?: boolean;
  image?: string;
  imageAlt?: string;
}

export interface BlogPostWithContent extends BlogPost {
  content: string;
}

export const blogCategories = [
  "Mariage",
  "Grossesse",
  "Naissance",
  "Famille",
  "Conseils séance",
  "Coulisses",
] as const;

export type BlogCategory = (typeof blogCategories)[number];
