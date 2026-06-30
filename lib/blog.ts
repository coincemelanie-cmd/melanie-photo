import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import type { BlogPost, BlogPostWithContent } from "@/types/blog";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((filename) => {
    const filePath = path.join(BLOG_DIR, filename);
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(raw);
    const slug = filename.replace(/\.mdx$/, "");
    const rt = readingTime(content);

    return {
      slug,
      title: data.title ?? "",
      description: data.description ?? "",
      date: data.date ?? "",
      author: data.author ?? "Mélanie",
      category: data.category ?? "Conseils séance",
      tags: data.tags ?? [],
      readingTime: Math.ceil(rt.minutes),
      featured: data.featured ?? false,
      image: data.image,
      imageAlt: data.imageAlt,
    } satisfies BlogPost;
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPostWithContent | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const rt = readingTime(content);

  return {
    slug,
    title: data.title ?? "",
    description: data.description ?? "",
    date: data.date ?? "",
    author: data.author ?? "Mélanie",
    category: data.category ?? "Conseils séance",
    tags: data.tags ?? [],
    readingTime: Math.ceil(rt.minutes),
    featured: data.featured ?? false,
    image: data.image,
    imageAlt: data.imageAlt,
    content,
  };
}

export function getPostsByCategory(category: string): BlogPost[] {
  return getAllPosts().filter((p) => p.category === category);
}

export function getRelatedPosts(
  currentSlug: string,
  category: string,
  limit = 3
): BlogPost[] {
  return getAllPosts()
    .filter((p) => p.slug !== currentSlug && p.category === category)
    .slice(0, limit);
}
