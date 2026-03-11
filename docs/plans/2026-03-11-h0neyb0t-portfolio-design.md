# h0neyb0t.com Portfolio Site Design

## Overview

Web3/blockchain portfolio site with a dark hacker aesthetic, full cinematic animations, and a markdown-powered blog. Deployed on Vercel with custom domain h0neyb0t.com (nameservers already pointed to Vercel).

## Tech Stack

- **Framework:** Next.js 14+ (App Router, static export)
- **Styling:** Tailwind CSS with custom dark theme
- **Blog:** MDX files parsed at build time
- **Animations:** Framer Motion (page transitions, scroll reveals), tsParticles (particle background), CSS (glitch/typewriter effects)
- **Fonts:** JetBrains Mono (headings/code), Inter (body)
- **Deployment:** Vercel, custom domain h0neyb0t.com
- **No database, no auth** — purely static

## Site Structure

```
/                      → Hero + featured projects + latest posts
/projects              → All projects grid
/projects/[slug]       → Individual project detail page
/blog                  → All blog posts list
/blog/[slug]           → Individual blog post (MDX)
/about                 → Bio, skills, links
```

## Content Structure

```
/content
  /blog
    *.mdx              → frontmatter: title, date, tags, description
  /projects
    *.mdx              → frontmatter: title, description, tech stack, links, image
```

## Visual Design

### Colors
- Background: near-black (#0a0a0a)
- Primary accent: matrix green (#00ff41) or cyan (#00d4aa)
- Text: light gray/white
- Terminal-inspired UI elements

### Typography
- Headings: JetBrains Mono (monospace)
- Body: Inter (sans-serif)
- Code blocks: JetBrains Mono

### Animations (Full Cinematic)
- **Hero:** Full-viewport tsParticles background (connected nodes, slow drift), glitch/typewriter effect on heading, staggered fade-in for tagline and CTAs, parallax on scroll
- **Projects:** Cards animate in on scroll (staggered slide-up + fade), hover border glow pulse + scale, page transition animation on click
- **Blog:** Terminal-log style list, lines type in on scroll, smooth page transitions
- **About:** Parallax layers, floating tech/skill icons
- **Page transitions:** Fade + slide via Framer Motion AnimatePresence

### UI Elements
- Dark bordered cards with `>_` terminal prompts
- Blinking cursor accents
- Subtle scan-line or grid texture overlay on hero
- Hover glow effects (green/cyan border glow)

## DNS Configuration

### Vercel (website)
Nameservers already set to ns1.vercel-dns.com / ns2.vercel-dns.com. Vercel manages A/CNAME records for the site automatically.

### Microsoft 365 (email) — to add on Vercel
| Type  | Name          | Value                                          |
|-------|---------------|------------------------------------------------|
| MX    | @             | h0neyb0t-com.mail.protection.outlook.com (0)   |
| TXT   | @             | v=spf1 include:spf.protection.outlook.com -all |
| CNAME | autodiscover  | autodiscover.outlook.com                       |
| CNAME | lyncdiscover  | webdir.online.lync.com                         |
| CNAME | msoid         | clientconfig.microsoftonline-p.net             |
| CNAME | sip           | sipdir.online.lync.com                         |
