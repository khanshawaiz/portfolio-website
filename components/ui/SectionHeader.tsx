"use client";

import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  headingId?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  headingId,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <Reveal delay={0}>
        <p className="font-mono text-xs tracking-[0.22em] text-accent uppercase">
          {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          id={headingId}
          className="mt-4 font-display text-3xl leading-tight font-semibold tracking-tight text-foreground sm:text-4xl"
        >
          {title}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={0.16}>
          <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
