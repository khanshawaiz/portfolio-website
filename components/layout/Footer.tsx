"use client";

import { useState } from "react";
import { navLinks, siteConfig } from "@/data/site";
import { profile } from "@/data/profile";
import { socialLinks } from "@/data/social";
import { Container } from "@/components/ui/Container";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export function Footer() {
  const shouldReduceMotion = useReducedMotion();
  const currentYear = new Date().getFullYear();
  const [showCopyToast, setShowCopyToast] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setShowCopyToast(true);
      setTimeout(() => setShowCopyToast(false), 2000);
    } catch (err) {
      console.error("Failed to copy email: ", err);
    }
  };

  return (
    <motion.footer
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] as const }}
      className="relative border-t border-border/70 bg-surface-muted/40"
    >
      {/* Gradient top border */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      
      <Container className="py-14 sm:py-16">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <p className="font-display text-lg font-semibold text-foreground">
              {profile.name}
            </p>
            <p className="mt-3 max-w-sm text-sm leading-7 text-muted-foreground">
              {profile.heroTagline}
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
              <span className="inline-flex h-2 w-2 rounded-full bg-accent" />
              <span>{profile.location}</span>
              <span className="text-border/50">•</span>
              <span className="text-accent">{profile.availability}</span>
            </div>
          </div>

          <div>
            <p className="font-mono text-xs tracking-[0.18em] text-accent uppercase">
              Navigation
            </p>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs tracking-[0.18em] text-accent uppercase">
              Connect
            </p>
            <div className="relative">
              <ul className="mt-4 flex gap-4">
                {socialLinks.map((link) => {
                  const isEmail = link.label === "Email";

                  return (
                    <li key={link.label}>
                      {isEmail ? (
                        <motion.button
                          onClick={handleCopyEmail}
                          className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/50 bg-surface-elevated text-muted-foreground transition-colors hover:border-accent/50"
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          aria-label="Copy email address"
                        >
                          {getIcon(link.label)}
                        </motion.button>
                      ) : (
                        <motion.a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/50 bg-surface-elevated text-muted-foreground transition-colors hover:border-accent/50"
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          aria-label={link.label}
                        >
                          {getIcon(link.label)}
                        </motion.a>
                      )}
                    </li>
                  );
                })}
              </ul>
              <AnimatePresence>
                {showCopyToast && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute -top-8 left-1/2 -translate-x-1/2 rounded-md bg-accent px-3 py-1 text-xs font-medium text-accent-foreground shadow-lg"
                  >
                    Email copied!
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border/70 pt-6 text-sm text-muted-foreground">
          <p>
            © {currentYear} {siteConfig.author}. All rights reserved.
          </p>
        </div>
      </Container>
    </motion.footer>
  );
}

function getIcon(label: string) {
  switch (label) {
    case "GitHub":
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-5 w-5 group-hover:text-accent transition-colors"
          fill="currentColor"
        >
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      );
    case "LinkedIn":
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-5 w-5 group-hover:text-accent transition-colors"
          fill="currentColor"
        >
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      );
    case "Email":
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-5 w-5 group-hover:text-accent transition-colors"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      );
    default:
      return null;
  }
}
