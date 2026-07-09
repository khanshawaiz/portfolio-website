"use client";

import { skillCategories, skillsContent } from "@/data/skills";
import { SkillCategoryIcon } from "@/components/icons/SkillCategoryIcon";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SkillTag } from "@/components/ui/SkillTag";
import { scaleInVariants } from "@/lib/motion";
import { cn } from "@/lib/cn";

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="relative scroll-mt-24 py-24 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(45,212,191,0.06),transparent_58%)]"
      />

      <Container className="relative">
        <SectionHeader
          eyebrow={skillsContent.eyebrow}
          title={skillsContent.title}
          description={skillsContent.description}
          headingId="skills-heading"
          className="mb-14"
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-12">
          {skillCategories.map((category, index) => (
            <Reveal
              key={category.id}
              delay={0.08 + index * 0.06}
              variants={scaleInVariants}
              className={cn(
                "rounded-[1.75rem] border bg-surface-elevated/75 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-accent/30 sm:p-7",
                category.featured
                  ? "border-accent/25 bg-[linear-gradient(145deg,rgba(45,212,191,0.08),rgba(96,165,250,0.04))] md:col-span-2 xl:col-span-7 xl:row-span-2"
                  : "border-border xl:col-span-5",
                category.id === "tools" && "xl:col-span-5",
                category.id === "cms" && "xl:col-span-5",
              )}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span
                    className={cn(
                      "flex h-11 w-11 items-center justify-center rounded-2xl border",
                      category.featured
                        ? "border-accent/30 bg-accent/10 text-accent"
                        : "border-border bg-background/70 text-accent-secondary",
                    )}
                  >
                    <SkillCategoryIcon name={category.icon} />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {category.title}
                    </h3>
                    {category.featured ? (
                      <p className="mt-1 font-mono text-[11px] tracking-[0.16em] text-accent uppercase">
                        Primary Focus
                      </p>
                    ) : null}
                  </div>
                </div>
                <span className="font-mono text-xs text-muted-foreground">
                  {String(category.skills.length).padStart(2, "0")}
                </span>
              </div>

              <ul className="mt-6 flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <li key={skill}>
                    <SkillTag
                      label={skill}
                      className={
                        category.featured
                          ? "border-accent/20 bg-background/80"
                          : undefined
                      }
                    />
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
