"use client";

import { motion } from "framer-motion";
import { educationContent, educationEntries } from "@/data/education";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/cn";

export function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="relative scroll-mt-24 py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <SectionHeader
          eyebrow={educationContent.eyebrow}
          title={educationContent.title}
          description={educationContent.description}
          headingId="education-heading"
          className="mb-14"
        />

        <div className="relative mx-auto max-w-4xl">
          <div
            aria-hidden="true"
            className="absolute top-0 bottom-0 left-4 w-px bg-gradient-to-b from-accent/50 via-border to-transparent sm:left-8"
          />

          <ol className="space-y-8">
            {educationEntries.map((entry, index) => (
              <Reveal
                key={entry.id}
                as="li"
                delay={0.1 + index * 0.12}
                className="relative pl-12 sm:pl-20"
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute left-2.5 top-6 flex h-3 w-3 rounded-full border-2 border-background sm:left-[1.625rem]",
                    index === 0
                      ? "bg-accent shadow-[0_0_16px_rgba(45,212,191,0.65)]"
                      : "bg-accent-secondary/80",
                  )}
                />

                <motion.article
                  whileHover={{ y: -2 }}
                  className="rounded-[1.5rem] border border-border/70 bg-surface-elevated/90 p-5 shadow-[0_10px_30px_-18px_rgba(15,23,42,0.2)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/35 hover:shadow-[0_18px_36px_-20px_rgba(5,150,105,0.25)] sm:p-7"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="font-mono text-xs tracking-[0.18em] text-accent uppercase">
                        {entry.period}
                      </p>
                      <h3 className="mt-3 font-display text-xl font-semibold text-foreground">
                        {entry.degree}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-muted-foreground">
                        {entry.institution}
                      </p>
                    </div>

                    <span className="inline-flex h-10 min-w-10 items-center justify-center rounded-full border border-border bg-background/70 px-3 font-mono text-xs text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {entry.details.length > 0 ? (
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {entry.details.map((detail) => (
                        <motion.li
                          key={detail}
                          whileHover={{ scale: 1.05, y: -1 }}
                          className="rounded-full border border-border/60 bg-background/60 px-3 py-1.5 text-xs text-muted-foreground transition-all duration-200 hover:border-accent/30 hover:bg-accent/5"
                        >
                          {detail}
                        </motion.li>
                      ))}
                    </ul>
                  ) : null}
                </motion.article>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
