# h0neyb0t.com Portfolio Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a cinematic dark-themed Web3 portfolio site with blog, deployed on Vercel at h0neyb0t.com.

**Architecture:** Next.js App Router with static generation. MDX content files for blog posts and projects parsed at build time. Framer Motion for page transitions and scroll animations. tsParticles for hero background. Tailwind CSS for all styling with a custom dark theme.

**Tech Stack:** Next.js 14+, Tailwind CSS, Framer Motion, tsParticles, next-mdx-remote, gray-matter, Node 24

---

### Task 1: Scaffold Next.js Project

**Files:**
- Create: `package.json`, `next.config.ts`, `tsconfig.json`, `tailwind.config.ts`, `postcss.config.js`, `.gitignore`
- Create: `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/globals.css`

**Step 1: Create Next.js app with Tailwind**

Run:
```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm
```

Select defaults when prompted. This scaffolds into the current directory.

**Step 2: Install animation and MDX dependencies**

Run:
```bash
npm install framer-motion @tsparticles/react @tsparticles/slim @tsparticles/engine next-mdx-remote gray-matter reading-time
```

**Step 3: Install Google Fonts (JetBrains Mono, Inter)**

These come from `next/font/google` — no install needed. Will configure in layout.

**Step 4: Verify dev server starts**

Run: `npm run dev`
Expected: Next.js dev server starts on http://localhost:3000

**Step 5: Commit**

```bash
git add -A
git commit -m "chore: scaffold Next.js project with deps"
```

---

### Task 2: Configure Tailwind Dark Theme and Global Styles

**Files:**
- Modify: `tailwind.config.ts`
- Modify: `src/app/globals.css`
- Modify: `src/app/layout.tsx`

**Step 1: Configure Tailwind theme**

Replace `tailwind.config.ts` with custom dark theme config:

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        foreground: "#e0e0e0",
        accent: "#00d4aa",
        "accent-green": "#00ff41",
        "card-border": "#1a1a2e",
        "card-bg": "#0f0f1a",
      },
      fontFamily: {
        mono: ["var(--font-jetbrains)", "monospace"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      animation: {
        "blink": "blink 1s step-end infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px rgba(0, 212, 170, 0.3)" },
          "100%": { boxShadow: "0 0 20px rgba(0, 212, 170, 0.6)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
```

**Step 2: Set up global CSS**

Replace `src/app/globals.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply bg-background text-foreground;
  }
}

/* Scanline overlay effect */
.scanline-overlay {
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(0, 212, 170, 0.03) 2px,
    rgba(0, 212, 170, 0.03) 4px
  );
  pointer-events: none;
}

/* Glitch text effect */
@keyframes glitch {
  0% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
  100% { transform: translate(0); }
}

.glitch-text {
  animation: glitch 0.3s ease-in-out;
}
```

**Step 3: Configure layout with fonts**

Replace `src/app/layout.tsx`:

```tsx
import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "h0neyb0t",
  description: "Web3 & Blockchain Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jetbrains.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
```

**Step 4: Verify styling works**

Run: `npm run dev`
Expected: Page loads with dark background (#0a0a0a), Inter font for body text.

**Step 5: Commit**

```bash
git add -A
git commit -m "feat: configure Tailwind dark theme and global styles"
```

---

### Task 3: Build Particle Background Component

**Files:**
- Create: `src/components/ParticleBackground.tsx`

**Step 1: Create particle background component**

```tsx
"use client";

import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";

export default function ParticleBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: false,
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        particles: {
          color: { value: "#00d4aa" },
          links: {
            color: "#00d4aa",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.8,
            direction: "none",
            outModes: { default: "bounce" },
          },
          number: {
            density: { enable: true },
            value: 60,
          },
          opacity: { value: 0.3 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
      }}
      className="absolute inset-0 -z-10"
    />
  );
}
```

**Step 2: Verify it renders**

Import into `src/app/page.tsx` temporarily:

```tsx
import ParticleBackground from "@/components/ParticleBackground";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <ParticleBackground />
      <h1 className="text-4xl font-mono text-accent pt-20 text-center">h0neyb0t</h1>
    </div>
  );
}
```

Run: `npm run dev`
Expected: Particle network animating behind "h0neyb0t" text.

**Step 3: Commit**

```bash
git add -A
git commit -m "feat: add particle background component"
```

---

### Task 4: Build Typewriter Component

**Files:**
- Create: `src/components/Typewriter.tsx`

**Step 1: Create typewriter effect component**

```tsx
"use client";

import { useState, useEffect } from "react";

interface TypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  onComplete?: () => void;
}

export default function Typewriter({
  text,
  speed = 50,
  delay = 0,
  className = "",
  onComplete,
}: TypewriterProps) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    if (displayed.length >= text.length) {
      onComplete?.();
      return;
    }
    const timer = setTimeout(() => {
      setDisplayed(text.slice(0, displayed.length + 1));
    }, speed);
    return () => clearTimeout(timer);
  }, [displayed, started, text, speed, onComplete]);

  return (
    <span className={className}>
      {displayed}
      <span className="animate-blink text-accent">_</span>
    </span>
  );
}
```

**Step 2: Commit**

```bash
git add -A
git commit -m "feat: add typewriter animation component"
```

---

### Task 5: Build ScrollReveal Component

**Files:**
- Create: `src/components/ScrollReveal.tsx`

**Step 1: Create scroll-triggered animation wrapper**

```tsx
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}

const directionOffsets = {
  up: { y: 40 },
  down: { y: -40 },
  left: { x: 40 },
  right: { x: -40 },
};

export default function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, ...directionOffsets[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
```

**Step 2: Commit**

```bash
git add -A
git commit -m "feat: add scroll reveal animation component"
```

---

### Task 6: Build Navigation Component

**Files:**
- Create: `src/components/Navbar.tsx`

**Step 1: Create sticky navbar**

```tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-card-border bg-background/80 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-mono text-accent text-lg hover:text-accent-green transition-colors">
          &gt;_ h0neyb0t
        </Link>
        <div className="flex gap-6">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`font-mono text-sm transition-colors ${
                pathname === href
                  ? "text-accent"
                  : "text-foreground/60 hover:text-foreground"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
```

**Step 2: Add Navbar to layout**

Modify `src/app/layout.tsx` — add `<Navbar />` inside `<body>` above `{children}`.

**Step 3: Commit**

```bash
git add -A
git commit -m "feat: add navigation bar component"
```

---

### Task 7: Build Hero Section

**Files:**
- Create: `src/components/Hero.tsx`
- Modify: `src/app/page.tsx`

**Step 1: Create hero section**

```tsx
"use client";

import ParticleBackground from "./ParticleBackground";
import Typewriter from "./Typewriter";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      <div className="scanline-overlay absolute inset-0" />
      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl md:text-7xl font-mono font-bold mb-4">
          <Typewriter text="h0neyb0t" speed={100} />
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-xl text-foreground/70 font-sans mb-8 max-w-lg mx-auto"
        >
          Web3 builder. Smart contract security. Blockchain infrastructure.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="flex gap-4 justify-center"
        >
          <Link
            href="/projects"
            className="px-6 py-3 border border-accent text-accent font-mono text-sm hover:bg-accent/10 transition-all hover:shadow-[0_0_15px_rgba(0,212,170,0.3)]"
          >
            view projects
          </Link>
          <Link
            href="/blog"
            className="px-6 py-3 border border-foreground/20 text-foreground/70 font-mono text-sm hover:border-foreground/40 transition-all"
          >
            read blog
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
```

**Step 2: Update home page**

Replace `src/app/page.tsx`:

```tsx
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
    </main>
  );
}
```

**Step 3: Verify hero renders with particles + typewriter**

Run: `npm run dev`
Expected: Full-screen hero with particle background, typewriter heading, staggered fade-in tagline and buttons.

**Step 4: Commit**

```bash
git add -A
git commit -m "feat: add hero section with particles and typewriter"
```

---

### Task 8: Build MDX Content Infrastructure

**Files:**
- Create: `src/lib/mdx.ts`
- Create: `content/blog/hello-web3.mdx`
- Create: `content/projects/t0kenizer-factory.mdx`

**Step 1: Create MDX utility library**

```ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const contentDir = path.join(process.cwd(), "content");

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  readingTime: string;
}

export interface ProjectMeta {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  image?: string;
}

export function getBlogPosts(): PostMeta[] {
  const dir = path.join(contentDir, "blog");
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));
  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(dir, file), "utf-8");
      const { data, content } = matter(raw);
      return {
        slug: file.replace(/\.mdx$/, ""),
        title: data.title,
        date: data.date,
        description: data.description,
        tags: data.tags || [],
        readingTime: readingTime(content).text,
      } as PostMeta;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPost(slug: string) {
  const file = path.join(contentDir, "blog", `${slug}.mdx`);
  const raw = fs.readFileSync(file, "utf-8");
  const { data, content } = matter(raw);
  return {
    meta: {
      slug,
      title: data.title,
      date: data.date,
      description: data.description,
      tags: data.tags || [],
      readingTime: readingTime(content).text,
    } as PostMeta,
    content,
  };
}

export function getProjects(): ProjectMeta[] {
  const dir = path.join(contentDir, "projects");
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));
  return files.map((file) => {
    const raw = fs.readFileSync(path.join(dir, file), "utf-8");
    const { data } = matter(raw);
    return {
      slug: file.replace(/\.mdx$/, ""),
      title: data.title,
      description: data.description,
      tech: data.tech || [],
      github: data.github,
      live: data.live,
      image: data.image,
    } as ProjectMeta;
  });
}

export function getProject(slug: string) {
  const file = path.join(contentDir, "projects", `${slug}.mdx`);
  const raw = fs.readFileSync(file, "utf-8");
  const { data, content } = matter(raw);
  return {
    meta: {
      slug,
      title: data.title,
      description: data.description,
      tech: data.tech || [],
      github: data.github,
      live: data.live,
      image: data.image,
    } as ProjectMeta,
    content,
  };
}
```

**Step 2: Create sample blog post**

Create `content/blog/hello-web3.mdx`:

```mdx
---
title: "Building in Web3"
date: "2026-03-11"
description: "First post — why I build on-chain and what's coming next."
tags: ["web3", "blockchain", "intro"]
---

## Hello, World

This is the first post on h0neyb0t. More to come on smart contract security, tokenization, and the future of decentralized infrastructure.

Stay tuned.
```

**Step 3: Create sample project**

Create `content/projects/t0kenizer-factory.mdx`:

```mdx
---
title: "t0kenizer Factory"
description: "Multi-chain RWA token engine with ERC-20 security analysis, automated contract scanning, and Foundry integration."
tech: ["TypeScript", "Solidity", "Foundry", "ERC-20"]
github: "https://github.com/eberron4/h0neyb0t"
---

## Overview

A comprehensive toolkit for analyzing and deploying ERC-20 tokens across multiple chains. Includes automated security scanning, contract compilation, and simulation capabilities.

### Features

- ERC-20 security detectors
- Foundry wrapper for compilation
- Session-based simulation engine
- CLI and API server interfaces
```

**Step 4: Commit**

```bash
git add -A
git commit -m "feat: add MDX content infrastructure and sample content"
```

---

### Task 9: Build Project Card and Projects Page

**Files:**
- Create: `src/components/ProjectCard.tsx`
- Create: `src/app/projects/page.tsx`
- Create: `src/app/projects/[slug]/page.tsx`

**Step 1: Create project card component**

```tsx
"use client";

import Link from "next/link";
import type { ProjectMeta } from "@/lib/mdx";

export default function ProjectCard({ project }: { project: ProjectMeta }) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <div className="group border border-card-border bg-card-bg p-6 transition-all hover:border-accent/50 hover:shadow-[0_0_20px_rgba(0,212,170,0.15)]">
        <div className="font-mono text-xs text-accent/60 mb-2">&gt;_ project</div>
        <h3 className="font-mono text-lg text-foreground group-hover:text-accent transition-colors mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-foreground/60 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs font-mono px-2 py-1 border border-accent/20 text-accent/70"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
```

**Step 2: Create projects listing page**

`src/app/projects/page.tsx`:

```tsx
import { getProjects } from "@/lib/mdx";
import ProjectCard from "@/components/ProjectCard";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = { title: "Projects | h0neyb0t" };

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <main className="max-w-5xl mx-auto px-6 pt-28 pb-16">
      <h1 className="font-mono text-3xl text-accent mb-2">&gt;_ projects</h1>
      <p className="text-foreground/60 mb-10">Things I&apos;ve built.</p>
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
```

**Step 3: Create project detail page**

`src/app/projects/[slug]/page.tsx`:

```tsx
import { getProject, getProjects } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return getProjects().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  try {
    const { meta } = getProject(params.slug);
    return { title: `${meta.title} | h0neyb0t` };
  } catch {
    return { title: "Not Found | h0neyb0t" };
  }
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  let post;
  try {
    post = getProject(params.slug);
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
```

**Step 4: Verify projects page renders**

Run: `npm run dev`, navigate to http://localhost:3000/projects
Expected: Project card grid with t0kenizer-factory card.

**Step 5: Commit**

```bash
git add -A
git commit -m "feat: add projects page and project detail view"
```

---

### Task 10: Build Blog Listing and Post Pages

**Files:**
- Create: `src/app/blog/page.tsx`
- Create: `src/app/blog/[slug]/page.tsx`

**Step 1: Create blog listing page (terminal-log style)**

`src/app/blog/page.tsx`:

```tsx
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
```

**Step 2: Create blog post page**

`src/app/blog/[slug]/page.tsx`:

```tsx
import { getBlogPost, getBlogPosts } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return getBlogPosts().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  try {
    const { meta } = getBlogPost(params.slug);
    return { title: `${meta.title} | h0neyb0t` };
  } catch {
    return { title: "Not Found | h0neyb0t" };
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  let post;
  try {
    post = getBlogPost(params.slug);
  } catch {
    notFound();
  }

  return (
    <main className="max-w-3xl mx-auto px-6 pt-28 pb-16">
      <div className="font-mono text-xs text-foreground/40 mb-2">{post.meta.date}</div>
      <h1 className="font-mono text-3xl text-accent mb-2">{post.meta.title}</h1>
      <div className="flex gap-2 mb-2">
        {post.meta.tags.map((tag) => (
          <span key={tag} className="text-xs font-mono text-accent/60">#{tag}</span>
        ))}
      </div>
      <p className="text-xs text-foreground/40 mb-8 font-mono">{post.meta.readingTime}</p>
      <article className="prose prose-invert prose-headings:font-mono prose-headings:text-accent prose-a:text-accent max-w-none">
        <MDXRemote source={post.content} />
      </article>
    </main>
  );
}
```

**Step 3: Verify blog pages render**

Run: `npm run dev`, navigate to http://localhost:3000/blog
Expected: Blog listing with terminal-log style entries. Click into post to see rendered MDX.

**Step 4: Commit**

```bash
git add -A
git commit -m "feat: add blog listing and post detail pages"
```

---

### Task 11: Build About Page

**Files:**
- Create: `src/app/about/page.tsx`

**Step 1: Create about page**

```tsx
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = { title: "About | h0neyb0t" };

const skills = [
  "Solidity", "TypeScript", "Rust", "ERC-20", "DeFi",
  "Foundry", "Hardhat", "React", "Next.js", "Node.js",
];

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 pt-28 pb-16">
      <ScrollReveal>
        <h1 className="font-mono text-3xl text-accent mb-2">&gt;_ about</h1>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="mt-8 space-y-4 text-foreground/80">
          <p>
            Builder focused on Web3 infrastructure, smart contract security, and
            tokenization. I design and audit systems that move value on-chain.
          </p>
          <p>
            Currently working on tools for ERC-20 analysis, RWA tokenization,
            and blockchain security automation.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <h2 className="font-mono text-xl text-accent mt-12 mb-4">&gt;_ skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="font-mono text-sm px-3 py-1 border border-accent/20 text-accent/80 hover:border-accent/50 hover:text-accent transition-all"
            >
              {skill}
            </span>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.3}>
        <h2 className="font-mono text-xl text-accent mt-12 mb-4">&gt;_ links</h2>
        <div className="space-y-2">
          <a
            href="https://github.com/eberron4"
            target="_blank"
            rel="noopener noreferrer"
            className="block font-mono text-sm text-foreground/60 hover:text-accent transition-colors"
          >
            github.com/eberron4
          </a>
        </div>
      </ScrollReveal>
    </main>
  );
}
```

**Step 2: Commit**

```bash
git add -A
git commit -m "feat: add about page"
```

---

### Task 12: Add Featured Sections to Home Page

**Files:**
- Modify: `src/app/page.tsx`

**Step 1: Add featured projects and latest posts to home page**

```tsx
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
```

**Step 2: Verify complete home page**

Run: `npm run dev`
Expected: Hero → featured projects → latest posts, all with scroll animations.

**Step 3: Commit**

```bash
git add -A
git commit -m "feat: add featured projects and latest posts to home page"
```

---

### Task 13: Add Page Transitions

**Files:**
- Create: `src/components/PageTransition.tsx`
- Modify: `src/app/layout.tsx`

**Step 1: Create page transition wrapper**

```tsx
"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
```

**Step 2: Wrap children in layout**

Modify `src/app/layout.tsx` — wrap `{children}` with `<PageTransition>`.

**Step 3: Verify page transitions work**

Navigate between pages. Expect smooth fade+slide on each route change.

**Step 4: Commit**

```bash
git add -A
git commit -m "feat: add page transitions with Framer Motion"
```

---

### Task 14: Add Tailwind Typography Plugin for MDX Prose

**Step 1: Install typography plugin**

Run: `npm install @tailwindcss/typography`

**Step 2: Add to Tailwind config**

Add `require("@tailwindcss/typography")` to plugins array in `tailwind.config.ts`.

**Step 3: Verify blog post prose styling**

Navigate to a blog post. MDX content should have proper heading sizes, paragraph spacing, code styling.

**Step 4: Commit**

```bash
git add -A
git commit -m "feat: add Tailwind typography plugin for MDX prose"
```

---

### Task 15: Build and Deploy to Vercel

**Step 1: Verify production build**

Run: `npm run build`
Expected: Build completes with no errors. All pages statically generated.

**Step 2: Push to GitHub**

Run:
```bash
git push origin main
```

**Step 3: Connect to Vercel**

Run:
```bash
npx vercel --yes
```

Follow prompts to link to the Eberron4/h0neyb0t repo.

**Step 4: Add custom domain on Vercel**

Run:
```bash
npx vercel domains add h0neyb0t.com
```

**Step 5: Add Microsoft 365 DNS records on Vercel**

In Vercel dashboard → Project → Settings → Domains → h0neyb0t.com → DNS Records, add:
- MX: `@` → `h0neyb0t-com.mail.protection.outlook.com` (priority 0)
- TXT: `@` → `v=spf1 include:spf.protection.outlook.com -all`
- CNAME: `autodiscover` → `autodiscover.outlook.com`
- CNAME: `lyncdiscover` → `webdir.online.lync.com`
- CNAME: `msoid` → `clientconfig.microsoftonline-p.net`
- CNAME: `sip` → `sipdir.online.lync.com`

**Step 6: Verify site is live**

Visit https://h0neyb0t.com
Expected: Portfolio site loads with SSL, particles, animations.

**Step 7: Commit any Vercel config**

```bash
git add -A
git commit -m "chore: add Vercel configuration"
git push origin main
```
