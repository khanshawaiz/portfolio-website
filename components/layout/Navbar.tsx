"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { navLinks } from "@/data/site";
import { profile } from "@/data/profile";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Navbar() {
  const shouldReduceMotion = useReducedMotion();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);

      // Determine active section based on scroll position
      const sections = navLinks.map(link => link.href.replace('#', ''));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isScrolled
          ? "border-b border-border/70 bg-background/80 backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <Container as="nav" aria-label="Primary" className="flex h-20 items-center justify-between py-4">
        <motion.a
          href="#hero"
          whileHover={shouldReduceMotion ? undefined : { y: -1, scale: 1.01 }}
          whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
          className="group inline-flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <span className="hidden flex-col sm:flex">
            <span className="font-display text-sm font-semibold tracking-tight text-foreground">
              {profile.name}
            </span>
            <span className="text-xs text-muted-foreground">{profile.title}</span>
          </span>
        </motion.a>

        <div className="relative hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <motion.a
                key={link.href}
                href={link.href}
                whileHover={shouldReduceMotion ? undefined : { y: -1, scale: 1.01 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                className={cn(
                  "relative rounded-full px-3 py-2 text-sm transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60",
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-1/2 right-1/2 h-0.5 -translate-x-1/2 rounded-full bg-accent"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.a>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <motion.button
            type="button"
            aria-expanded={isMobileMenuOpen}
            whileHover={shouldReduceMotion ? undefined : { y: -1, scale: 1.01 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={(e) => {
              e.stopPropagation();
              setIsMobileMenuOpen((open) => !open);
            }}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-surface-elevated/90 text-foreground shadow-[0_8px_24px_-16px_rgba(15,23,42,0.2)] transition-all duration-300 hover:border-accent/40 hover:shadow-[0_12px_28px_-16px_rgba(5,150,105,0.25)] lg:hidden"
          >
            {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </motion.button>
        </div>
      </Container>

      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="overflow-hidden border-b border-border/70 bg-background/95 shadow-[0_12px_30px_-20px_rgba(15,23,42,0.24)] backdrop-blur-xl lg:hidden"
        >
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="rounded-xl px-4 py-3 text-sm text-muted-foreground transition-all duration-200 hover:bg-surface-muted hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </Container>
        </div>
      )}
    </header>
  );
}

function MenuIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.75">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.75">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}