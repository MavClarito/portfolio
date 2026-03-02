"use client";

import HeroSection from "@/components/HeroSection";
import AcademicJourney from "@/components/AcademicJourney";
import ProjectsSection from "@/components/ProjectsSection";
import Navigation from "@/components/Navigation";
import { useLayoutEffect } from "react";

export default function Home() {
  // ensure we start at the top when the component mounts (avoids preserved scroll position)
  useLayoutEffect(() => {
    // turn off automatic scroll restoration that browsers do on reload
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);


  return (
    <main className="bg-black min-h-screen overflow-x-hidden">
      <Navigation />
      <section id="Introduction">
        <HeroSection />
      </section>
      <section id="Academic-Journey">
        <AcademicJourney />
      </section>
      <section id="Projects">
        <ProjectsSection />
      </section>
    </main>
  );
}
