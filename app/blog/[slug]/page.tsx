import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Badge } from "@/components/ui/Badge";
import { CTA } from "@/components/sections/CTA";
import { ArticleCard } from "@/components/sections/ArticleCard";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/blog";
import { formatDate } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { Clock, User, Calendar } from "lucide-react";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const related = getRelatedPosts(post.slug, post.category);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    author: {
      "@type": "Person",
      name: post.author,
    },
    datePublished: post.date,
    url: `${siteConfig.url}/blog/${post.slug}`,
    keywords: post.tags.join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="pt-24 pb-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Blog", href: "/blog" },
              {
                label: post.category,
                href: `/blog?categorie=${post.category}`,
              },
              { label: post.title },
            ]}
            className="mb-8"
          />

          {/* Header */}
          <header className="mb-10">
            <Badge variant="brand" className="mb-4">
              {post.category}
            </Badge>
            <h1 className="font-serif text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl leading-tight">
              {post.title}
            </h1>
            <p className="mt-4 text-lg text-neutral-600 leading-relaxed">
              {post.description}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-neutral-500 border-t border-b border-neutral-100 py-4">
              <span className="flex items-center gap-1.5">
                <User className="h-4 w-4" aria-hidden="true" />
                {post.author}
              </span>
              <time dateTime={post.date} className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" aria-hidden="true" />
                {formatDate(post.date)}
              </time>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" aria-hidden="true" />
                {post.readingTime} min de lecture
              </span>
            </div>
          </header>

          {/* Content */}
          <article className="prose-blog">
            <MDXRemote
              source={post.content}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                  rehypePlugins: [rehypeSlug],
                },
              }}
            />
          </article>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="mt-10 flex flex-wrap gap-2" aria-label="Tags">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>

        {/* Related posts */}
        {related.length > 0 && (
          <section
            className="mt-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
            aria-labelledby="related-heading"
          >
            <h2
              id="related-heading"
              className="font-serif text-lg font-bold text-neutral-950 mb-6"
            >
              Articles similaires
            </h2>
            <ul
              className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
              role="list"
            >
              {related.map((p) => (
                <li key={p.slug}>
                  <ArticleCard post={p} />
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>

      <CTA />
    </>
  );
}
