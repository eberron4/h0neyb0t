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
          className="text-2xl md:text-3xl text-foreground font-sans font-medium mb-8 max-w-xl mx-auto"
        >
          Where Web3, Blockchain Security and Cybersecurity meet. Now with a dash of AI!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="flex gap-4 justify-center"
        >
          <Link
            href="/projects"
            className="px-8 py-4 border border-accent text-accent font-mono text-base font-semibold hover:bg-accent/10 transition-all hover:shadow-[0_0_15px_rgba(0,212,170,0.3)]"
          >
            view projects
          </Link>
          <Link
            href="/blog"
            className="px-8 py-4 border border-foreground/50 text-foreground font-mono text-base font-semibold hover:border-foreground/70 transition-all"
          >
            read blog
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
