"use client";

import { resume } from "@/data/social";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function Resume() {
  return (
    <section
      id="resume"
      aria-labelledby="resume-heading"
      className="relative scroll-mt-24 py-24 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(45,212,191,0.06),transparent_58%)]"
      />

      <Container className="relative">
        <SectionHeader
          eyebrow="Resume"
          title="Download my resume to learn more about my experience."
          headingId="resume-heading"
          align="center"
          className="mb-12"
        />

        <Reveal delay={0.12}>
          <div className="mx-auto max-w-2xl rounded-[2rem] border border-border bg-surface-elevated/75 p-8 backdrop-blur-sm sm:p-12">
            <p className="text-center text-base leading-7 text-muted-foreground sm:text-lg">
              Get a detailed overview of my education, skills, and project experience.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button
                href={resume.path}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
              >
                View CV
              </Button>
              <Button
                href={resume.path}
                download
                variant="secondary"
                size="lg"
              >
                Download CV
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
