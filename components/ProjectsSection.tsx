"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// placeholder projects with provided descriptions
const projects = [
  {
    id: "algal",
    title: "Deep Learning Algal Bloom Estimator",
    description:
      "Real‑time web app integrating satellite data and deep learning for algal bloom detection.",
    link: "https://algsat-47ca8.web.app/#/",
    gradientStart: "#1e3a8a",
    gradientEnd: "#0a192f",
    emoji: "🌊",
    tech: ["React", "Python", "TensorFlow"],
  },
  {
    id: "honeycomb",
    title: "Geometry & Waggle Dance Analysis",
    description:
      "Analyzed honeycomb structure and bee communication using statistical methods.",
    link: "https://example.com/honeycomb",
    gradientStart: "#3b3b6d",
    gradientEnd: "#0d0d0d",
    emoji: "🐝",
    tech: ["Python", "OpenCV", "HTML", "CSS", "JS"],
  },

  {
    id: "placeholder1",
    title: "Project Placeholder 1",
    description: "Brief description of placeholder project.",
    link: "https://example.com/1",
    gradientStart: "#2c3e50",
    gradientEnd: "#1a252f",
    emoji: "🛠️",
    tech: ["Node.js", "Express"],
  },
];

export default function ProjectsSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  // Sync dot indicator with scroll position
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const onScroll = () => {
      const card = el.querySelector<HTMLElement>("[data-card]");
      if (!card) return;
      const cardW = card.offsetWidth + 20; // width + gap-5 (20px)
      const idx = Math.round(el.scrollLeft / cardW);
      setActiveIdx(Math.min(Math.max(idx, 0), projects.length - 1));
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    // ensure first card centers on mount without touching window scroll
    setTimeout(() => {
      const card = el.children[0] as HTMLElement | undefined;
      if (card) {
        const cardW = card.offsetWidth + 20;
        el.scrollLeft = cardW * 0; // always zero but triggers proper alignment if padding present
      }
    }, 50);
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToCard = (idx: number) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.children[idx] as HTMLElement | undefined;
    if (card) {
      // manually adjust scrollLeft to avoid affecting window position
      const cardW = card.offsetWidth + 20;
      el.scrollTo({ left: idx * cardW, behavior: "smooth" });
    }
  };

  const go = (dir: 1 | -1) => {
    // wrap around so clicking past ends cycles
    const next = (activeIdx + dir + projects.length) % projects.length;
    scrollToCard(next);
  };

  return (
    <section className="bg-black py-20 md:py-28 relative">
      {/* top divider glow */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(0,191,255,0.2), transparent)",
        }}
      />

      {/* stretch section wider and align everything left */}
      <div className="w-full max-w-none mx-auto px-6 md:px-10 lg:px-16">
        {/* Heading + controls */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-10"
        >
          <h2
            className="font-sans font-bold leading-[1.08] retro-heading text-left"
            style={{
              letterSpacing: "-2px",
              color: "#00bfff",
            }}
          >
            Projects
          </h2>
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => go(-1)}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 disabled:opacity-30 cursor-pointer"
              style={{ border: "1px solid rgba(255,255,255,0.18)", color: "rgba(255,255,255,0.6)" }}
              onMouseEnter={(e) => {
                if (activeIdx === 0) return;
                (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(0,191,255,0.5)";
                (e.currentTarget as HTMLButtonElement).style.color = "#00bfff";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.18)";
                (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.6)";
              }}
              aria-label="Previous project"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => go(1)}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 disabled:opacity-30 cursor-pointer"
              style={{ border: "1px solid rgba(255,255,255,0.18)", color: "rgba(255,255,255,0.6)" }}
              onMouseEnter={(e) => {
                if (activeIdx === projects.length - 1) return;
                (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(0,191,255,0.5)";
                (e.currentTarget as HTMLButtonElement).style.color = "#00bfff";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.18)";
                (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.6)";
              }}
              aria-label="Next project"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>

        {/* Carousel track */}
        <div
          ref={trackRef}
          className="flex gap-5 overflow-x-auto scrollbar-hidden snap-x snap-mandatory pb-2 carousel-track"
        >
          {projects.map((project, index) => {
            const diff = Math.abs(index - activeIdx);
            const isActive = diff === 0;
            return (
              <a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="snap-center"
              >
                <motion.div
                  data-card=""
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className={
                    "shrink-0 rounded-xl flex flex-col gap-4 cursor-pointer transition-all duration-300" +
                    (isActive
                      ? ""
                      : diff === 1
                      ? " opacity-50 blur-sm scale-95"
                      : " opacity-30 blur-sm scale-90")
                  }
                  style={{
                    width: "clamp(260px, 50vw, 340px)",
                    padding: "24px",
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
          </a>
          );
        })}
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center items-center gap-2 mt-7">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToCard(i)}
              className="rounded-full transition-all duration-300 cursor-pointer"
              style={{
                width: i === activeIdx ? 22 : 6,
                height: 6,
                backgroundColor:
                  i === activeIdx ? "#00bfff" : "rgba(255,255,255,0.2)",
              }}
              aria-label={`View project ${i + 1}`}
            />
          ))}
        </div>

        {/* Carousel styling */}
        <style jsx>{`
          .carousel-track {
            padding: 0 50vw; /* half viewport to allow centering */
            box-sizing: content-box;
            scroll-padding: 0 50vw; /* ensure snap aligns to center */
          }
          /* hide scrollbar for all browsers */
          .scrollbar-hidden::-webkit-scrollbar { display: none; }
          .scrollbar-hidden { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>
      </div>
    </section>
  );
}
