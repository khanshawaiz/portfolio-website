"use client";

import { aiProjects, aiProjectsContent } from "@/data/aiProjects";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

export function AIProjects() {
  return (
    <section
      id="ai-projects"
      aria-labelledby="ai-projects-heading"
      className="relative scroll-mt-24 py-20 sm:py-24 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(5,150,105,0.06),transparent_58%)]"
      />

      <Container className="relative">
        <SectionHeader
          eyebrow={aiProjectsContent.eyebrow}
          title={aiProjectsContent.title}
          description={aiProjectsContent.description}
          headingId="ai-projects-heading"
          className="mb-14"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {aiProjects.map((project, index) => (
            <Reveal key={project.id} delay={0.08 + index * 0.1}>
              <ProjectCard
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
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
