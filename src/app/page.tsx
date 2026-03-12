import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import ScrollReveal from "@/components/ScrollReveal";
import { getProjects, getBlogPosts } from "@/lib/mdx";
import Link from "next/link";

export default function Home() {
  const projects = getProjects().slice(0, 4);
  const posts = getBlogPosts().slice(0, 3);

  return (
    <main>
      <Hero />

      {/* Featured Projects */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <ScrollReveal>
          <h2 className="font-mono text-2xl text-accent mb-8">&gt;_ featured projects</h2>
        </ScrollReveal>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <ScrollReveal key={project.slug} delay={i * 0.1}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal delay={0.3}>
          <Link
            href="/projects"
            className="inline-block mt-8 font-mono text-sm text-accent/60 hover:text-accent transition-colors"
          >
            view all →
          </Link>
        </ScrollReveal>
      </section>

      {/* Latest Posts */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <ScrollReveal>
          <h2 className="font-mono text-2xl text-accent mb-8">&gt;_ latest posts</h2>
        </ScrollReveal>
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
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal delay={0.3}>
          <Link
            href="/blog"
            className="inline-block mt-8 font-mono text-sm text-accent/60 hover:text-accent transition-colors"
          >
            all posts →
          </Link>
        </ScrollReveal>
      </section>
    </main>
  );
}
