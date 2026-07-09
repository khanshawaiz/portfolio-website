"use client";

import { useState } from "react";
import { profile } from "@/data/profile";
import { socialLinks } from "@/data/social";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { motion } from "framer-motion";

export function Contact() {
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
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative scroll-mt-24 py-20 sm:py-24 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(96,165,250,0.05),transparent_58%)]"
      />

      <Container className="relative">
        <SectionHeader
          eyebrow="Contact"
          title="Let's connect and build something great together."
          headingId="contact-heading"
          align="center"
          className="mb-12"
        />

        <Reveal delay={0.12}>
          <motion.div
            whileHover={{ y: -2 }}
            className="glass-card mx-auto max-w-2xl rounded-[2rem] p-6 shadow-[0_18px_48px_-24px_rgba(15,23,42,0.3)] sm:p-12"
          >
            <div className="space-y-6">
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="flex flex-wrap items-center justify-between gap-4 rounded-[1.25rem] border border-border/70 bg-background/70 px-5 py-4 shadow-[0_8px_24px_-16px_rgba(15,23,42,0.16)] transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/35"
              >
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs tracking-[0.16em] text-accent uppercase">
                    Email
                  </span>
                  <span className="text-sm text-foreground">
                    {profile.email}
                  </span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleCopyEmail}
                  className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1.5 text-xs font-medium text-accent transition-all duration-200 hover:bg-accent/15"
                  aria-label="Copy email address"
                >
                  {showCopyToast ? "Copied!" : "Copy"}
                </motion.button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.01 }}
                className="flex flex-wrap items-center gap-4 rounded-[1.25rem] border border-border/70 bg-background/70 px-5 py-4 shadow-[0_8px_24px_-16px_rgba(15,23,42,0.16)] transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/35"
              >
                <span className="font-mono text-xs tracking-[0.16em] text-accent uppercase">
                  Location
                </span>
                <span className="text-sm text-foreground">
                  {profile.location}
                </span>
              </motion.div>

              <div className="flex flex-wrap gap-3 pt-4">
                {socialLinks.map((link) => {
                  const isEmail = link.label === "Email";

                  return (
                    <motion.div
                      key={link.label}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        href={isEmail ? `mailto:${link.username}?subject=Portfolio%20Inquiry` : link.href}
                        target={isEmail ? undefined : "_blank"}
                        rel={isEmail ? undefined : "noopener noreferrer"}
                        variant="secondary"
                        size="md"
                      >
                        {link.label}
                      </Button>
                    </motion.div>
                  );
                })}
              </div>

              <div className="pt-2">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=ashawaizkhan365@gmail.com&su=Portfolio%20Inquiry"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-accent"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="currentColor"
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                  Open in Gmail
                </a>
              </div>
            </div>
          </motion.div>
        </Reveal>
      </Container>
    </section>
  );
}
