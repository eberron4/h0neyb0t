import { getBlogPost, getBlogPosts } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return getBlogPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  try {
    const { meta } = getBlogPost(slug);
    return { title: `${meta.title} | h0neyb0t` };
  } catch {
    return { title: "Not Found | h0neyb0t" };
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let post;
  try {
    post = getBlogPost(slug);
  } catch {
    notFound();
  }

  return (
    <main className="max-w-3xl mx-auto px-6 pt-28 pb-16">
      <div className="font-mono text-xs text-foreground/40 mb-2">
        {post.meta.date}
      </div>
      <h1 className="font-mono text-3xl text-accent mb-2">
        {post.meta.title}
      </h1>
      <div className="flex gap-2 mb-2">
        {post.meta.tags.map((tag) => (
          <span key={tag} className="text-xs font-mono text-accent/60">
            #{tag}
          </span>
        ))}
      </div>
      <p className="text-xs text-foreground/40 mb-8 font-mono">
        {post.meta.readingTime}
      </p>
      <article className="prose prose-invert prose-headings:font-mono prose-headings:text-accent prose-a:text-accent max-w-none">
        <MDXRemote source={post.content} />
      </article>
    </main>
  );
}
