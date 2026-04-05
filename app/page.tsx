"use client";

import HeroSection from "@/components/HeroSection";
import Navigation from "@/components/Navigation";
import { useLayoutEffect, useState } from "react";
import SkeletonLoader from "@/components/SkeletonLoader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  // ensure we start at the top when the component mounts (avoids preserved scroll position)
  useLayoutEffect(() => {
    // turn off automatic scroll restoration that browsers do on reload
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);

    // Hide skeleton after initial load delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <main className="bg-black min-h-screen">
        <SkeletonLoader />
      </main>
    );
  }

  return (
    <main className="bg-black min-h-screen overflow-x-hidden animate-in fade-in duration-1000">
      <Navigation />
      <HeroSection />
    </main>
  );
}
