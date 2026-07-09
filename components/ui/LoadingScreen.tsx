"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { profile } from "@/data/profile";

export function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsVisible(false), 900);
    return () => window.clearTimeout(timer);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.45, delay: 0.55, ease: "easeInOut" }}
      className="pointer-events-none fixed inset-0 z-[100] flex items-center justify-center bg-background"
      aria-hidden="true"
    >
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="flex flex-col items-center gap-4"
      >
        <div className="relative flex h-14 w-14 items-center justify-center">
          <span className="absolute inset-0 rounded-full border border-accent/20" />
          <motion.span
            animate={{ rotate: 360 }}
            transition={{ duration: 1.1, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border-t-2 border-accent"
          />
          <span className="font-mono text-sm font-semibold text-accent">SK</span>
        </div>
        <p className="font-display text-sm tracking-[0.24em] text-muted-foreground uppercase">
          {profile.name}
        </p>
      </motion.div>
    </motion.div>
  );
}
