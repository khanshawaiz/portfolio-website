"use client";

import { mernProjects, mernProjectsContent } from "@/data/mernProjects";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { cn } from "@/lib/cn";

export function MERNProjects() {
  return (
    <section
      id="mern-projects"
      aria-labelledby="mern-projects-heading"
      className="relative scroll-mt-24 py-24 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(96,165,250,0.06),transparent_58%)]"
      />

      <Container className="relative">
        <SectionHeader
          eyebrow={mernProjectsContent.eyebrow}
          title={mernProjectsContent.title}
          description={mernProjectsContent.description}
          headingId="mern-projects-heading"
          className="mb-14"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {mernProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              githubUrl={project.githubUrl}
              liveDemoUrl={project.liveDemoUrl}
              coverImage={project.coverImage}
              screenshots={project.screenshots}
              demoVideo={project.demoVideo}
              featured={project.featured}
              className={cn(
                project.featured && "md:col-span-2",
              )}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
