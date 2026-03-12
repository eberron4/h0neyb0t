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
