"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { defaultViewport, fadeUpVariants } from "@/lib/motion";
import { cn } from "@/lib/cn";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  variants?: Variants;
  as?: "div" | "li" | "article" | "span";
};

export function Reveal({
  children,
  className,
  delay = 0,
  variants = fadeUpVariants,
  as = "div",
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const Component = as;

  if (shouldReduceMotion) {
    return <Component className={cn(className)}>{children}</Component>;
  }

  const MotionComponent = motion[as];

  return (
    <MotionComponent
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={variants}
      className={cn(className)}
    >
      {children}
    </MotionComponent>
  );
}
