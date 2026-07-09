"use client";

import { profile } from "@/data/profile";
import { socialLinks } from "@/data/social";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative scroll-mt-24 py-24 sm:py-28"
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
          <div className="mx-auto max-w-2xl rounded-[2rem] border border-border bg-surface-elevated/75 p-8 backdrop-blur-sm sm:p-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4 rounded-2xl border border-border/60 bg-background/50 px-5 py-4">
                <span className="font-mono text-xs tracking-[0.16em] text-accent uppercase">
                  Email
                </span>
                <span className="text-sm text-foreground">
                  {profile.email}
                </span>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-border/60 bg-background/50 px-5 py-4">
                <span className="font-mono text-xs tracking-[0.16em] text-accent uppercase">
                  Location
                </span>
                <span className="text-sm text-foreground">
                  {profile.location}
                </span>
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                {socialLinks.map((link) => {
                  const isEmail = link.label === "Email";

                  return (
                    <Button
                      key={link.label}
                      href={isEmail ? `mailto:${link.username}` : link.href}
                      target={isEmail ? undefined : "_blank"}
                      rel={isEmail ? undefined : "noopener noreferrer"}
                      variant="secondary"
                      size="md"
                    >
                      {link.label}
                    </Button>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
