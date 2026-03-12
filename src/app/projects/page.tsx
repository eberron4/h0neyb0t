import { getProjects } from "@/lib/mdx";
import ProjectCard from "@/components/ProjectCard";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = { title: "Projects | h0neyb0t" };

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <main className="max-w-5xl mx-auto px-6 pt-28 pb-16">
      <h1 className="font-mono text-3xl text-accent mb-2">&gt;_ projects</h1>
      <p className="text-foreground/60 mb-10">Creator of</p>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <ScrollReveal key={project.slug} delay={i * 0.1}>
            <ProjectCard project={project} />
          </ScrollReveal>
        ))}
      </div>
    </main>
  );
}
