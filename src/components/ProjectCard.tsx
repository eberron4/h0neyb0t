"use client";

import Link from "next/link";
import type { ProjectMeta } from "@/lib/mdx";

function Redacted({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\[REDACTED\])/).map((part, i) =>
        part === "[REDACTED]" ? (
          <span key={i} className="bg-red-600/80 text-red-100 px-1 py-0.5 text-xs font-mono tracking-wider">[REDACTED]</span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

export default function ProjectCard({ project }: { project: ProjectMeta }) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <div className="group border border-card-border bg-card-bg p-6 transition-all hover:border-accent/50 hover:shadow-[0_0_20px_rgba(0,212,170,0.15)]">
        <div className="font-mono text-xs text-accent/60 mb-2">&gt;_ project</div>
        <h3 className="font-mono text-lg text-foreground group-hover:text-accent transition-colors mb-2">
          <Redacted text={project.title} />
        </h3>
        <p className="text-sm text-foreground/60 mb-4"><Redacted text={project.description} /></p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="text-xs font-mono px-2 py-1 border border-accent/20 text-accent/70">
              {t}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
