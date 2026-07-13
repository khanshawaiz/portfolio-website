"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

type SkillTagProps = {
  label: string;
  className?: string;
};

export function SkillTag({ label, className }: SkillTagProps) {
  return (
    <motion.span
      whileHover={{ scale: 1.05, y: -1, boxShadow: "0 4px 14px rgba(16, 185, 129, 0.25)" }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "inline-flex items-center rounded-full border border-border/70 bg-background/85 px-3 py-1.5 font-mono text-xs text-foreground backdrop-blur-sm transition-all duration-200 hover:border-accent/40 hover:bg-accent/8 hover:shadow-sm",
        className,
      )}
    >
      {label}
    </motion.span>
  );
}
