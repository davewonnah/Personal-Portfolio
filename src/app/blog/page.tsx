import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata = {
  title: "Blog | Dave Wonnah",
  description: "Thoughts on software engineering, web development, and technology.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="flex flex-1 flex-col px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto w-full max-w-3xl">
        <div className="mb-12">
          <p className="mb-2 text-sm font-medium tracking-widest uppercase text-accent">
            Blog
          </p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Latest Posts
          </h1>
          <p className="mt-4 text-muted-foreground">
            Thoughts on software engineering, web development, and technology.
          </p>
        </div>

        {posts.length === 0 ? (
          <p className="text-muted-foreground">No posts yet. Check back soon!</p>
        ) : (
          <div className="space-y-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block rounded-2xl border border-border p-6 transition-colors hover:border-accent/30 hover:bg-muted/30"
              >
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <time>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</time>
                    <span>&middot;</span>
                    <span>{post.readingTime}</span>
                  </div>
                  <h2 className="text-xl font-semibold">{post.title}</h2>
                  <p className="text-sm text-muted-foreground">
                    {post.description}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
