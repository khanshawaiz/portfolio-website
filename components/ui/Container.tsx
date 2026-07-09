import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "footer" | "main" | "nav";
  id?: string;
};

export function Container({
  children,
  className,
  as: Component = "div",
  id,
}: ContainerProps) {
  return (
    <Component
      id={id}
      className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8", className)}
    >
      {children}
    </Component>
  );
}
