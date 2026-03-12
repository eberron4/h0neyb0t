import ScrollReveal from "@/components/ScrollReveal";

export const metadata = { title: "About | h0neyb0t" };

const skills = [
  "Blockchain Security", "Smart Contracts", "Solidity", "Rust", "TypeScript",
  "Application Security", "API Security", "Threat Intelligence",
  "SSDLC", "DeFi", "RWA Tokenization", "Multi-Chain",
  "Foundry", "Hardhat", "React", "Next.js", "Node.js",
  "CometBFT", "AI/ML", "Palo Alto Networks", "PCNSE",
];

const upcoming = [
  { event: "Merkle Meets DC 2026", topic: "Pilots to Balance Sheets: How Institutions Are Actually Adopting Digital Assets in 2026", date: "Mar 20, 2026" },
];

const recent = [
  { event: "Corinium CISO Financial Services", topic: "When Banks Hold the Keys: The New CISO Reality Post-SAB 122 + Confessions of CISOs Panel", date: "Feb 25, 2026" },
  { event: "Digital Fight Club: Cyber", topic: "Winner 🏆", date: "Feb 19, 2026" },
  { event: "Halborn ACCESS at NYSE", topic: "Code Meets Capital: The Rise of Programmable Money", date: "Jan 23, 2026" },
  { event: "The CISO Signal Podcast", topic: "True Cybercrime — Accellion FTA Episode", date: "2025" },
  { event: "The CISO Signal Podcast", topic: "True Cybercrime — Poly Network $610M Hack Episode", date: "2025" },
  { event: "The Phillip Wylie Show", topic: "Season 3 Episode 050", date: "2025" },
  { event: "CISO XC", topic: "Grapevine, TX", date: "Oct 2025" },
  { event: "Dallas Technology Summit", topic: "Speaker", date: "2025" },
  { event: "CISO XC", topic: "Frisco, TX", date: "May 2025" },
];

const certifications = [
  { name: "Certified Crypto Investigator", issuer: "Merkle Science", year: "2025" },
  { name: "Hashgraph Developer", issuer: "The Hashgraph Association", year: "2025" },
  { name: "Avalanche Fundamentals", issuer: "Avalanche", year: "2025" },
  { name: "Foundation Level Threat Intelligence Analyst", issuer: "arcX", year: "2023" },
  { name: "Foundations of Purple Teaming", issuer: "AttackIQ", year: "2022" },
  { name: "Foundations of Operationalizing MITRE ATT&CK", issuer: "AttackIQ", year: "2021" },
  { name: "PrivacyOps Certification", issuer: "Securiti AI", year: "2021" },
  { name: "PCNSE — Palo Alto Networks Certified Security Consultant", issuer: "Palo Alto Networks", year: "" },
  { name: "Blockchain for Business (LFS171x)", issuer: "Linux Foundation", year: "2018" },
];

const affiliations = [
  "Texas Blockchain Council", "OWASP", "ISSA",
  "Cloud Security Alliance", "ASIS International",
];

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 pt-28 pb-16">
      <ScrollReveal>
        <h1 className="font-mono text-3xl text-accent mb-2">&gt;_ about</h1>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="mt-8 space-y-4 text-foreground/80 leading-relaxed">
          <p className="text-lg">
            CISO &amp; Head of Tokenization at{" "}
            <span className="text-accent font-medium">tZERO Group, Inc.</span>{" "}
            — building at the intersection of Web3, blockchain security, and
            cybersecurity. Founder of{" "}
            <span className="text-accent font-medium">h0neyb0t LLC</span>.
          </p>
          <p>
            Currently pursuing a PhD in Cybersecurity with a blockchain security
            focus at Dakota State University. My work spans secure software
            development lifecycles, smart contract security, real-world asset
            tokenization, and threat intelligence across multiple blockchain
            networks.
          </p>
          <p>
            I design and build the tools and infrastructure that secure on-chain
            value — from private permissioned blockchains to multi-chain
            tokenization platforms and AI-powered security monitoring.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.15}>
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

      <ScrollReveal delay={0.2}>
        <h2 className="font-mono text-xl text-accent mt-12 mb-4">&gt;_ upcoming</h2>
        <div className="space-y-3">
          {upcoming.map((s) => (
            <div key={s.event + s.date} className="flex items-start gap-3">
              <span className="font-mono text-accent/50 text-sm mt-0.5">$</span>
              <div>
                <span className="font-mono text-sm text-accent">{s.event}</span>
                <span className="font-mono text-sm text-foreground/40 ml-2">// {s.topic}</span>
                <span className="font-mono text-xs text-foreground/30 ml-2">[{s.date}]</span>
              </div>
            </div>
          ))}
        </div>

        <h2 className="font-mono text-xl text-accent mt-10 mb-4">&gt;_ recent talks</h2>
        <div className="space-y-3">
          {recent.map((s, i) => (
            <div key={s.event + s.topic} className="flex items-start gap-3">
              <span className="font-mono text-accent/50 text-sm mt-0.5">$</span>
              <div>
                <span className="font-mono text-sm text-foreground/90">{s.event}</span>
                <span className="font-mono text-sm text-foreground/40 ml-2">// {s.topic}</span>
                <span className="font-mono text-xs text-foreground/30 ml-2">[{s.date}]</span>
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.25}>
        <h2 className="font-mono text-xl text-accent mt-12 mb-4">&gt;_ certifications</h2>
        <div className="space-y-3">
          {certifications.map((c) => (
            <div key={c.name} className="flex items-start gap-3">
              <span className="font-mono text-accent/50 text-sm mt-0.5">$</span>
              <div>
                <span className="font-mono text-sm text-foreground/90">{c.name}</span>
                <span className="font-mono text-sm text-foreground/40 ml-2">// {c.issuer}</span>
                {c.year && <span className="font-mono text-xs text-foreground/30 ml-2">[{c.year}]</span>}
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.3}>
        <h2 className="font-mono text-xl text-accent mt-12 mb-4">&gt;_ affiliations</h2>
        <div className="flex flex-wrap gap-2">
          {affiliations.map((org) => (
            <span
              key={org}
              className="font-mono text-xs px-3 py-1 border border-foreground/10 text-foreground/50 hover:border-accent/30 hover:text-accent/70 transition-all"
            >
              {org}
            </span>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.35}>
        <h2 className="font-mono text-xl text-accent mt-12 mb-4">&gt;_ links</h2>
        <div className="space-y-3">
          <a
            href="https://www.linkedin.com/in/christopher-russell-5a9b20a7"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 font-mono text-sm text-foreground/60 hover:text-accent transition-colors group"
          >
            <span className="text-accent/50 group-hover:text-accent">&#9656;</span>
            linkedin.com/in/christopher-russell
          </a>
          <a
            href="https://github.com/cr00ster"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 font-mono text-sm text-foreground/60 hover:text-accent transition-colors group"
          >
            <span className="text-accent/50 group-hover:text-accent">&#9656;</span>
            github.com/cr00ster
          </a>
          <a
            href="https://github.com/eberron4"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 font-mono text-sm text-foreground/60 hover:text-accent transition-colors group"
          >
            <span className="text-accent/50 group-hover:text-accent">&#9656;</span>
            github.com/eberron4
          </a>
        </div>
      </ScrollReveal>
    </main>
  );
}
