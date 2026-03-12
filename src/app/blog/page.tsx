import { getBlogPosts } from "@/lib/mdx";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = { title: "Blog | h0neyb0t" };

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <main className="max-w-3xl mx-auto px-6 pt-28 pb-16">
      <h1 className="font-mono text-3xl text-accent mb-2">&gt;_ blog</h1>
      <p className="text-foreground/60 mb-10">Dispatches from the chain.</p>
      <div className="space-y-4">
        {posts.map((post, i) => (
          <ScrollReveal key={post.slug} delay={i * 0.08}>
            <Link href={`/blog/${post.slug}`} className="block group">
              <div className="flex items-baseline gap-4 py-3 border-b border-card-border hover:border-accent/30 transition-colors">
                <span className="font-mono text-xs text-foreground/40 shrink-0">
                  {post.date}
                </span>
                <span className="font-mono text-foreground group-hover:text-accent transition-colors">
                  {post.title}
                </span>
                <span className="font-mono text-xs text-foreground/30 ml-auto shrink-0">
                  {post.readingTime}
                </span>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </main>
  );
}
