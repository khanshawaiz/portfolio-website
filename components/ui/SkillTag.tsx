import { cn } from "@/lib/cn";

type SkillTagProps = {
  label: string;
  className?: string;
};

export function SkillTag({ label, className }: SkillTagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-background/70 px-3 py-1.5 font-mono text-xs text-foreground transition-colors duration-300 hover:border-accent/35",
        className,
      )}
    >
      {label}
    </span>
  );
}
