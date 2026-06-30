import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";
import type { BlogPost } from "@/types/blog";
import { Clock } from "lucide-react";
import Link from "next/link";

interface ArticleCardProps {
  post: BlogPost;
}

export function ArticleCard({ post }: ArticleCardProps) {
  return (
    <article className="group flex flex-col h-full">
      <Link
        href={`/blog/${post.slug}`}
        className="flex flex-col h-full rounded-xl border border-neutral-200 bg-white p-6 transition-all duration-150 hover:shadow-medium hover:border-neutral-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
      >
        <div className="flex items-center gap-2 mb-4">
          <Badge variant="brand">{post.category}</Badge>
        </div>

        <h2 className="font-serif text-lg font-semibold text-neutral-900 leading-snug group-hover:text-brand-600 transition-colors line-clamp-2 flex-1">
          {post.title}
        </h2>

        <p className="mt-3 text-sm text-neutral-600 leading-relaxed line-clamp-3">
          {post.description}
        </p>

        <div className="mt-5 flex items-center justify-between text-xs text-neutral-400 border-t border-neutral-100 pt-4">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" aria-hidden="true" />
            {post.readingTime} min
          </span>
        </div>
      </Link>
    </article>
  );
}
