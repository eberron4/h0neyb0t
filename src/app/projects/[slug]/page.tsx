import { getProject, getProjects } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return getProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  try {
    const { meta } = getProject(slug);
    return { title: `${meta.title} | h0neyb0t` };
  } catch {
    return { title: "Not Found | h0neyb0t" };
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  let post;
  try {
    post = getProject(slug);
  } catch {
    notFound();
  }

  return (
    <main className="max-w-3xl mx-auto px-6 pt-28 pb-16">
      <div className="font-mono text-xs text-accent/60 mb-2">&gt;_ project</div>
      <h1 className="font-mono text-3xl text-accent mb-4">{post.meta.title}</h1>
      <div className="flex flex-wrap gap-2 mb-8">
        {post.meta.tech.map((t) => (
          <span key={t} className="text-xs font-mono px-2 py-1 border border-accent/20 text-accent/70">
            {t}
          </span>
        ))}
      </div>
      {post.meta.github && (
        <a
          href={post.meta.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-mono text-accent hover:text-accent-green transition-colors mb-8 inline-block"
        >
          [GitHub →]
        </a>
      )}
      <article className="prose prose-invert prose-headings:font-mono prose-headings:text-accent prose-a:text-accent max-w-none">
        <MDXRemote source={post.content} />
      </article>
    </main>
  );
}
