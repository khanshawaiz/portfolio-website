import { About } from "@/components/sections/About";
import { AIProjects } from "@/components/sections/AIProjects";
import { Contact } from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";
import { Hero } from "@/components/sections/Hero";
import { MERNProjects } from "@/components/sections/MERNProjects";
import { Resume } from "@/components/sections/Resume";
import { Skills } from "@/components/sections/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <AIProjects />
      <MERNProjects />
      <Resume />
      <Education />
      <Contact />
    </>
  );
}
