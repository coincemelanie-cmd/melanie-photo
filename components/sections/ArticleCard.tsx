import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";
import type { BlogPost } from "@/types/blog";
import { Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ArticleCardProps {
  post: BlogPost;
}

export function ArticleCard({ post }: ArticleCardProps) {
  return (
    <article className="group flex h-full flex-col">
      <Link
        href={`/blog/${post.slug}`}
        className="flex h-full flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white transition-all duration-150 hover:border-neutral-300 hover:shadow-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
      >
        {post.image && (
          <div className="relative aspect-[1200/630] w-full overflow-hidden">
            <Image
              src={post.image}
              alt={post.imageAlt ?? post.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(min-width: 1024px) 33vw, 100vw"
            />
          </div>
        )}

        <div className="flex flex-1 flex-col p-6">
          <div className="mb-4 flex items-center gap-2">
            <Badge variant="brand">{post.category}</Badge>
          </div>

          <h2 className="line-clamp-2 flex-1 font-serif text-lg font-semibold leading-snug text-neutral-900 transition-colors group-hover:text-brand-600">
            {post.title}
          </h2>

          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-neutral-600">
            {post.description}
          </p>

          <div className="mt-5 flex items-center justify-between border-t border-neutral-100 pt-4 text-xs text-neutral-400">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" aria-hidden="true" />
              {post.readingTime} min
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
