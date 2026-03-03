"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "@/lib/projects";

export default function ProjectsSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const total = projects.length;

  // Scroll to center active card
  const scrollToCard = (idx: number) => {
    const el = trackRef.current;
    if (!el) return;

    const card = el.children[idx] as HTMLElement;
    if (!card) return;

    const elCenter = el.offsetWidth / 2;
    const cardCenter = card.offsetWidth / 2;

    const left = card.offsetLeft - elCenter + cardCenter;
    el.scrollTo({ left, behavior: "smooth" });
    setActiveIdx(idx);
  };

  // Navigate left/right with wrap-around
  const go = (dir: 1 | -1) => {
    const next = (activeIdx + dir + total) % total;
    scrollToCard(next);
  };

  // Center first card on mount
  useEffect(() => {
    scrollToCard(0);
  }, []);

  return (
    <section className="bg-black py-20 md:py-28 relative">
      {/* top glow */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(0,191,255,0.2), transparent)",
        }}
      />

      <div className="w-full max-w-none mx-auto px-6 md:px-10 lg:px-16">
        {/* Heading + controls */}
        <div className="flex items-end justify-between mb-10">
          <h2
            className="font-sans font-bold leading-[1.08] retro-heading text-left"
            style={{ letterSpacing: "-2px", color: "#00bfff" }}
          >
            Projects
          </h2>
          <div className="flex items-center gap-4 relative -left-2">
            {/* Previous Button */}
            <button
              onClick={() => go(-1)}
              className="w-12 h-12 flex items-center justify-center rounded-full border border-transparent hover:border-[#00bfff] hover:bg-[#00bfff] hover:text-black transition-all duration-200 active:scale-95"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Next Button */}
            <button
              onClick={() => go(1)}
              className="w-12 h-12 flex items-center justify-center rounded-full border border-transparent hover:border-[#00bfff] hover:bg-[#00bfff] hover:text-black transition-all duration-200 active:scale-95"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={trackRef}
          className="flex gap-5 overflow-x-auto scrollbar-hidden snap-x snap-mandatory pb-2"
          style={{ scrollPadding: "0 50vw" }}
        >
          {projects.map((project, index) => {
            let posClass = "";
            if (index === activeIdx) posClass = "opacity-100 scale-100 blur-0";
            else if (index === (activeIdx + 1) % total)
              posClass = "opacity-50 scale-95 blur-sm";
            else if (index === (activeIdx - 1 + total) % total)
              posClass = "opacity-50 scale-95 blur-sm";
            else posClass = "opacity-30 scale-90 blur-sm";

            return (
              <motion.a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="snap-center shrink-0 relative group"
              >
                {/* Pop-up Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-max max-w-xs p-3 rounded-lg bg-[#00bfff] text-black text-[13px] font-roboto shadow-lg opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 z-50 pointer-events-none">
                  Click me to visit the website
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-3 h-3 bg-[#00bfff] rotate-45 mt-[-5px]"></div>
                </div>

                <motion.div
                  data-card=""
                  whileHover={{ y: -5 }}
                  className={`rounded-xl flex flex-col gap-4 cursor-pointer transition-all duration-300 ${posClass}`}
                  style={{
                    width: "clamp(260px, 50vw, 340px)",
                    padding: 24,
                    background: `linear-gradient(135deg, ${project.gradientStart} 0%, ${project.gradientEnd} 100%), #0d0d0d`,
                    border: "1px solid rgba(255,255,255,0.07)",
                    minHeight: 280,
                  }}
                >
                  <div className="text-4xl">{project.emoji}</div>
                  <div className="flex-1">
                    <h3
                      className="font-sans font-bold text-lg mb-2 leading-tight"
                      style={{ color: "rgba(255,255,255,0.9)" }}
                    >
                      {project.title}
                    </h3>
                    <p
                      className="text-[14px] leading-[1.7]"
                      style={{ color: "#b3b3b3" }}
                    >
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] px-2.5 py-1 rounded-full font-roboto"
                        style={{
                          backgroundColor: "rgba(0,191,255,0.07)",
                          color: "rgba(0,191,255,0.8)",
                          border: "1px solid rgba(0,191,255,0.15)",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.a>
            );
          })}
        </div>

        {/* Dots */}
        <div className="flex justify-center items-center gap-2 mt-7">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToCard(i)}
              className="rounded-full transition-all duration-300 cursor-pointer"
              style={{
                width: i === activeIdx ? 22 : 6,
                height: 6,
                backgroundColor: i === activeIdx ? "#00bfff" : "rgba(255,255,255,0.2)",
              }}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hidden::-webkit-scrollbar { display: none; }
        .scrollbar-hidden { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}