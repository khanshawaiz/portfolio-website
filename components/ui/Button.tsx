import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "relative isolate overflow-hidden rounded-full bg-gradient-to-r from-accent via-accent to-accent-hover text-accent-foreground shadow-[0_10px_30px_-12px_rgba(79,70,229,0.45)] hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-16px_rgba(79,70,229,0.55)] active:translate-y-0 active:shadow-[0_8px_18px_-10px_rgba(79,70,229,0.4)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.28),transparent_45%)] before:opacity-90 before:transition before:duration-300",
  secondary:
    "border border-border/70 bg-surface-elevated/90 text-foreground shadow-[0_8px_24px_-16px_rgba(15,23,42,0.2)] backdrop-blur-sm hover:border-accent/40 hover:bg-surface-muted hover:shadow-[0_14px_30px_-16px_rgba(79,70,229,0.28)] hover:-translate-y-0.5 active:translate-y-0 active:shadow-sm",
  ghost:
    "text-muted-foreground hover:text-foreground hover:bg-surface-muted/90 hover:shadow-sm hover:-translate-y-0.5 active:translate-y-0",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

type SharedProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
  download?: boolean | string;
};

type ButtonProps = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type LinkButtonProps = SharedProps & AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  download,
  ...props
}: ButtonProps | LinkButtonProps) {
  const shouldReduceMotion = useReducedMotion();
  const classes = cn(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
    variantStyles[variant],
    sizeStyles[size],
    className,
  );

  if (href) {
    return (
      <motion.div
        whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.01 }}
        whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] as const }}
      >
        <a href={href} className={classes} download={download} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
          {children}
        </a>
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.01 }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] as const }}
    >
      <button type="button" className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
        {children}
      </button>
    </motion.div>
  );
}
