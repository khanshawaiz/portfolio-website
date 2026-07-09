import { navLinks, siteConfig } from "@/data/site";
import { profile } from "@/data/profile";
import { socialLinks } from "@/data/social";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/70 bg-surface-muted/40">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <p className="font-display text-lg font-semibold text-foreground">
              {profile.name}
            </p>
            <p className="mt-3 max-w-sm text-sm leading-7 text-muted-foreground">
              {profile.heroTagline}
            </p>
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
            <ul className="mt-4 space-y-2">
              {socialLinks.map((link) => {
                const isEmail = link.label === "Email";

                return (
                  <li key={link.label}>
                    {isEmail ? (
                      <span className="text-sm text-muted-foreground transition-colors">
                        {link.label}
                      </span>
                    ) : (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border/70 pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} {siteConfig.author}. All rights reserved.
          </p>
          <p className="font-mono text-xs">
            Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion
          </p>
        </div>
      </Container>
    </footer>
  );
}
