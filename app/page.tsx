"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { About } from "@/components/sections/About";
import { AIProjects } from "@/components/sections/AIProjects";
import { Contact } from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";
import { Hero } from "@/components/sections/Hero";
import { MERNProjects } from "@/components/sections/MERNProjects";
import { Skills } from "@/components/sections/Skills";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <>
      <Hero />
      <div data-aos="fade-up" data-aos-delay="0">
        <About />
      </div>
      <div data-aos="fade-up" data-aos-delay="50">
        <Skills />
      </div>
      <div data-aos="fade-up" data-aos-delay="100">
        <AIProjects />
      </div>
      <div data-aos="fade-up" data-aos-delay="150">
        <MERNProjects />
      </div>
      <div data-aos="fade-up" data-aos-delay="250">
        <Education />
      </div>
      <div data-aos="fade-up" data-aos-delay="300">
        <Contact />
      </div>
    </>
  );
}