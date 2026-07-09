"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { resume, socialLinks } from "@/data/social";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20"
      aria-labelledby="hero-heading"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute top-20 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-accent-secondary/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(45,212,191,0.08),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(8,11,18,0.35))]" />
      </div>

      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)]">
          <div className="max-w-3xl">
            <motion.p
              custom={0.05}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-surface-elevated px-4 py-2 font-mono text-xs tracking-[0.18em] text-accent uppercase"
            >
              <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_rgba(45,212,191,0.8)]" />
              {profile.availability}
            </motion.p>

            <motion.h1
              id="hero-heading"
              custom={0.12}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="font-display text-4xl leading-[1.05] font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            >
              {profile.name}
              <span className="mt-3 block bg-gradient-to-r from-accent via-accent-secondary to-foreground bg-clip-text text-transparent">
                {profile.title}
              </span>
            </motion.h1>

            <motion.p
              custom={0.2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground"
            >
              {profile.heroTagline}
            </motion.p>

            <motion.p
              custom={0.28}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground/90"
            >
              {profile.summary}
            </motion.p>

            <motion.div
              custom={0.36}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Button href="#ai-projects" size="lg">
                View AI Projects
              </Button>
              <Button href="#mern-projects" variant="secondary" size="lg">
                View MERN Projects
              </Button>
              <Button href={resume.path} variant="secondary" size="lg" download={resume.filename}>
                Download CV
              </Button>
            </motion.div>

            <motion.div
              custom={0.44}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-10 flex flex-wrap gap-3"
            >
              {socialLinks.map((link) => {
                const isEmail = link.label === "Email";

                return (
                  <a
                    key={link.label}
                    href={isEmail ? `mailto:${link.username}` : link.href}
                    target={isEmail ? undefined : "_blank"}
                    rel={isEmail ? undefined : "noopener noreferrer"}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated px-4 py-2 text-sm text-muted-foreground transition-all duration-300 hover:border-accent/35 hover:text-foreground"
                  >
                    <span className="font-medium text-foreground">{link.label}</span>
                    <span className="font-mono text-xs">{link.username}</span>
                  </a>
                );
              })}
            </motion.div>
          </div>

          <motion.aside
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
            aria-label="Profile highlights"
          >
            <div className="rounded-[2rem] border border-border bg-surface-elevated/80 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-sm sm:p-8">
              <p className="font-mono text-xs tracking-[0.24em] text-accent uppercase">
                Focus Areas
              </p>
              <ul className="mt-6 space-y-4">
                {[
                  "AI / RAG systems with LangChain, Ollama, and vector databases",
                  "MERN stack applications with secure authentication and REST APIs",
                  "PostgreSQL + pgvector and ChromaDB semantic search pipelines",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-6 text-muted-foreground"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <Stat label="Location" value={profile.location} />
                <Stat label="Education" value="Bachelor of Science in Computer Science" />
                <Stat label="Phone" value={profile.phone} />
                <Stat label="Email" value={profile.email} />
              </div>
            </div>
          </motion.aside>
        </div>
      </Container>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border/80 bg-background/50 px-4 py-3">
      <p className="text-xs tracking-[0.16em] text-muted-foreground uppercase">
        {label}
      </p>
      <p className="mt-2 text-sm leading-6 text-foreground">{value}</p>
    </div>
  );
}
