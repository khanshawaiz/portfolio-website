"use client";

import { motion, useReducedMotion } from "framer-motion";
import { profile } from "@/data/profile";
import { resume, socialLinks } from "@/data/social";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0.01 : 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
    }),
  };

  const floatAnimation = {
    animate: {
      y: shouldReduceMotion ? 0 : [0, -20, 0],
      transition: {
        duration: shouldReduceMotion ? 0.01 : 6,
        repeat: shouldReduceMotion ? 0 : Infinity,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20"
      aria-labelledby="hero-heading"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          {...floatAnimation.animate}
          className="absolute top-20 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-accent/15 blur-3xl"
        />
        <motion.div
          {...floatAnimation.animate}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-accent-secondary/15 blur-3xl"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(91,95,239,0.1),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_100%_100%,rgba(232,163,61,0.08),transparent)]" />
      </div>

      <Container className="relative">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)] lg:gap-14">
          <div className="max-w-3xl">
            <motion.p
              custom={0.05}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-surface-elevated/85 px-4 py-2 font-mono text-xs tracking-[0.18em] text-accent uppercase shadow-[0_10px_30px_-18px_rgba(79,70,229,0.35)] backdrop-blur-sm"
            >
              <motion.span
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.7, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-2 w-2 rounded-full bg-accent shadow-lg shadow-accent/50"
              />
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
              className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-[1.06rem]"
            >
              {profile.heroTagline}
            </motion.p>

            <motion.p
              custom={0.28}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground/90 sm:text-[1rem]"
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
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button href="#ai-projects" size="lg">
                  View AI Projects
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button href="#mern-projects" variant="secondary" size="lg">
                  View MERN Projects
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button href={resume.path} variant="secondary" size="lg" download={resume.filename}>
                  Download CV
                </Button>
              </motion.div>
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
                    className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-surface-elevated/90 px-4 py-2 text-sm text-muted-foreground shadow-[0_8px_24px_-16px_rgba(15,23,42,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/35 hover:text-foreground hover:shadow-[0_12px_28px_-16px_rgba(79,70,229,0.25)]"
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
            <div className="glass-card rounded-[2rem] p-5 shadow-[0_18px_48px_-24px_rgba(15,23,42,0.3)] sm:p-8">
              <p className="font-mono text-xs tracking-[0.24em] text-accent uppercase">
                Focus Areas
              </p>
              <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-accent shadow-lg shadow-accent/50" />
              <ul className="mt-6 space-y-4">
                {[
                  "AI / RAG systems with LangChain, Ollama, and vector databases",
                  "MERN stack applications with secure authentication and REST APIs",
                  "PostgreSQL + pgvector and ChromaDB semantic search pipelines",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-6 text-muted-foreground sm:text-[15px]"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8 grid gap-3 sm:grid-cols-2 sm:[grid-auto-rows:1fr]">
                <div className="h-full">
                  <Stat label="Location" value={profile.location} />
                </div>
                <div className="h-full">
                  <Stat label="Education" value="Bachelor of Science in Computer Science" />
                </div>
                <div className="h-full">
                  <Stat label="Phone" value={profile.phone} />
                </div>
                <div className="h-full">
                  <Stat label="Email" value={profile.email} />
                </div>
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
    <motion.div
      whileHover={{ y: -2, scale: 1.02 }}
      className="flex h-full flex-col rounded-[1.2rem] border border-border/70 bg-background/70 px-4 py-3 shadow-[0_8px_22px_-16px_rgba(15,23,42,0.18)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/35 hover:shadow-[0_12px_28px_-16px_rgba(79,70,229,0.24)]"
    >
      <p className="text-xs tracking-[0.16em] text-muted-foreground uppercase">
        {label}
      </p>
      <p className="mt-2 text-sm leading-6 text-foreground break-words [overflow-wrap:anywhere]">{value}</p>
    </motion.div>
  );
}
