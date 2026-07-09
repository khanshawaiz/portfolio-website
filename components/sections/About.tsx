"use client";

import { motion } from "framer-motion";
import { aboutContent } from "@/data/about";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { slideInLeftVariants } from "@/lib/motion";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative scroll-mt-24 py-20 sm:py-24 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
      />

      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div>
            <SectionHeader
              eyebrow={aboutContent.eyebrow}
              title={aboutContent.title}
              headingId="about-heading"
            />
            <Reveal delay={0.22} className="mt-8">
              <p className="text-base leading-8 text-muted-foreground sm:text-lg">
                {aboutContent.summary}
              </p>
            </Reveal>

            <Reveal delay={0.3} className="mt-10">
              <dl className="grid gap-4 sm:grid-cols-2">
                {aboutContent.details.map((detail) => (
                  <motion.div
                    key={detail.label}
                    whileHover={{ y: -2, scale: 1.01 }}
                    className="overflow-hidden rounded-[1.25rem] border border-border/70 bg-surface-elevated/90 px-4 py-4 shadow-[0_10px_30px_-18px_rgba(15,23,42,0.22)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/35 hover:shadow-[0_14px_32px_-18px_rgba(79,70,229,0.28)]"
                  >
                    <dt className="font-mono text-[11px] tracking-[0.18em] text-accent uppercase">
                      {detail.label}
                    </dt>
                    <dd className="mt-2 text-sm leading-6 text-foreground break-all">
                      <span className="break-words">{detail.value}</span>
                    </dd>
                  </motion.div>
                ))}
              </dl>
            </Reveal>
          </div>

          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -left-6 top-8 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-accent/40 via-border to-transparent lg:block"
            />

            <ol className="space-y-5">
              {aboutContent.highlights.map((highlight, index) => (
                <Reveal
                  key={highlight.title}
                  as="li"
                  delay={0.12 + index * 0.1}
                  variants={slideInLeftVariants}
                  className="group relative rounded-[1.5rem] border border-border/70 bg-surface-elevated/90 p-5 shadow-[0_10px_30px_-18px_rgba(15,23,42,0.2)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/35 hover:shadow-[0_18px_36px_-20px_rgba(79,70,229,0.25)] sm:p-7"
                >
                  <span
                    aria-hidden="true"
                    className="absolute -left-3 top-8 hidden h-6 w-6 items-center justify-center rounded-full border border-accent/30 bg-background font-mono text-[10px] text-accent lg:flex"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="flex items-start gap-4">
                    <motion.span
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-accent/25 bg-accent/10 font-mono text-xs font-semibold text-accent shadow-[0_8px_20px_-12px_rgba(79,70,229,0.35)] transition-transform duration-200"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </motion.span>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-foreground">
                        {highlight.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-[15px]">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}
