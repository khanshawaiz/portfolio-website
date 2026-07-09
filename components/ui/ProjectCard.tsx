"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./Button";
import { SkillTag } from "./SkillTag";
import { cn } from "@/lib/cn";

type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  coverImage?: string;
  screenshots?: string[];
  demoVideo?: string;
  featured?: boolean;
  className?: string;
};

export function ProjectCard({
  title,
  description,
  technologies,
  githubUrl,
  liveDemoUrl,
  coverImage,
  screenshots,
  demoVideo,
  featured = false,
  className,
}: ProjectCardProps) {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const hasAssets = coverImage || (screenshots && screenshots.length > 0) || demoVideo;
  const galleryImages = screenshots && screenshots.length > 0 ? screenshots : coverImage ? [coverImage] : [];

  useEffect(() => {
    if (!isGalleryOpen) {
      return undefined;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsGalleryOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isGalleryOpen]);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "group relative rounded-[1.75rem] border bg-surface-elevated/75 p-6 backdrop-blur-sm transition-all duration-300 hover:border-accent/30 sm:p-7",
        featured && "border-accent/25 bg-[linear-gradient(145deg,rgba(45,212,191,0.06),rgba(96,165,250,0.03))]",
        className,
      )}
    >
      {featured && (
        <span className="absolute -top-3 right-6 inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-[10px] tracking-[0.16em] text-accent uppercase shadow-[0_0_12px_rgba(45,212,191,0.25)]">
          Featured
        </span>
      )}

      {hasAssets && (
        <div className="mb-6 overflow-hidden rounded-2xl border border-border/60 bg-background/50">
          {demoVideo ? (
            <video
              src={demoVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-full object-cover"
            />
          ) : coverImage ? (
            <button
              type="button"
              onClick={() => {
                if (galleryImages.length > 0) {
                  setActiveImageIndex(0);
                  setIsGalleryOpen(true);
                }
              }}
              className="group relative block w-full overflow-hidden"
              aria-label={`Open screenshots for ${title}`}
            >
              <div className="relative aspect-video w-full">
                <img
                  src={coverImage}
                  alt={title}
                  loading="eager"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {galleryImages.length > 1 && (
                  <span className="absolute bottom-3 left-3 rounded-full border border-white/25 bg-black/50 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur-sm">
                    View Gallery
                  </span>
                )}
              </div>
            </button>
          ) : screenshots && screenshots.length > 0 ? (
            <button
              type="button"
              onClick={() => {
                setActiveImageIndex(0);
                setIsGalleryOpen(true);
              }}
              className="group relative block w-full overflow-hidden"
              aria-label={`Open screenshots for ${title}`}
            >
              <div className="relative aspect-video w-full">
                <img
                  src={screenshots[0]}
                  alt={`${title} screenshot`}
                  loading="eager"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </button>
          ) : null}
        </div>
      )}

      <h3 className="font-display text-xl font-semibold text-foreground">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-muted-foreground">
        {description}
      </p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <li key={tech}>
            <SkillTag label={tech} />
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-3">
        {galleryImages.length > 0 && (
          <button
            type="button"
            onClick={() => {
              setActiveImageIndex(0);
              setIsGalleryOpen(true);
            }}
            className="inline-flex items-center justify-center rounded-full border border-border/70 bg-background/80 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent/40 hover:text-accent"
          >
            View Screenshots
          </button>
        )}
        {liveDemoUrl && (
          <Button
            href={liveDemoUrl}
            variant="primary"
            size="sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </Button>
        )}
        {githubUrl && (
          <Button
            href={githubUrl}
            variant="secondary"
            size="sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Button>
        )}
      </div>

      {isGalleryOpen && galleryImages.length > 0 && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          onClick={() => setIsGalleryOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl rounded-[1.75rem] border border-white/10 bg-surface-elevated/95 p-3 shadow-2xl sm:p-4"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsGalleryOpen(false)}
              className="absolute right-3 top-3 z-10 rounded-full border border-white/15 bg-black/50 p-2 text-sm text-white/90 transition-colors hover:bg-black/70"
              aria-label="Close screenshots"
            >
              ✕
            </button>

            <div className="overflow-hidden rounded-[1.25rem] border border-border/60 bg-background/50">
              <div className="relative aspect-[16/10] w-full">
                <img
                  src={galleryImages[activeImageIndex]}
                  alt={`${title} screenshot ${activeImageIndex + 1}`}
                  loading="eager"
                  decoding="async"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>

            {galleryImages.length > 1 && (
              <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
                {galleryImages.map((image, index) => (
                  <button
                    key={`${image}-${index}`}
                    type="button"
                    onClick={() => setActiveImageIndex(index)}
                    className={cn(
                      "relative h-16 w-24 shrink-0 overflow-hidden rounded-lg border transition-all",
                      activeImageIndex === index
                        ? "border-accent shadow-[0_0_0_1px_rgba(45,212,191,0.35)]"
                        : "border-border/60 hover:border-accent/40",
                    )}
                  >
                    <img src={image} alt={`${title} thumbnail ${index + 1}`} loading="lazy" decoding="async" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </motion.article>
  );
}
