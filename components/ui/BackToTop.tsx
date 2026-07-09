"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

export function BackToTop() {
  const shouldReduceMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.8 }}
          animate={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
          exit={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: shouldReduceMotion ? 0.01 : 0.2 }}
          onClick={scrollToTop}
          aria-label="Back to top"
          className={cn(
            "fixed bottom-6 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-accent/30 bg-surface-elevated/90 text-accent shadow-[0_16px_40px_-24px_rgba(79,70,229,0.45)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent/10 hover:shadow-[0_20px_44px_-20px_rgba(79,70,229,0.35)] focus:outline-none focus:ring-2 focus:ring-accent/60 focus:ring-offset-2 focus:ring-offset-background sm:bottom-8 sm:right-8",
            "md:bottom-10 md:right-10",
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m18 15-6-6-6 6" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
