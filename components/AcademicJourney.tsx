"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { academicData } from "@/lib/academic";
import ParticleBackground from "./ParticleBackground";

export default function AcademicJourney() {
  // start with no year active; keeps nav inactive while the school image is visible
  const [activeYear, setActiveYear] = useState<string | null>(null);
  const [modal, setModal] = useState<{ text: string; img: string } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const update = () => {
      let current: string | null = null;
      const threshold = container.clientHeight * 0.45;

      for (const entry of academicData) {
        const el = document.getElementById(entry.id);
        if (el && container) {
          // offsetTop is relative to the closest positioned ancestor (container)
          const relativeTop = el.offsetTop - container.scrollTop;
          if (relativeTop <= threshold) {
            current = entry.id;
          }
        }
      }

      setActiveYear(current);
    };

    container.addEventListener("scroll", update, { passive: true });
    update();
    return () => container.removeEventListener("scroll", update);
  }, []);

  const scrollToYear = (id: string) => {
    const container = containerRef.current;
    if (!container) return;
    const el = container.querySelector<HTMLElement>(`#${id}`);
    if (!el) return;
    const threshold = container.clientHeight * 0.45;
    container.scrollTo({ top: el.offsetTop - threshold, behavior: "smooth" });
    setActiveYear(id); // highlight immediately
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
      <ParticleBackground />
      {/* use full available width rather than a fixed max and keep content left-aligned */}
      <div className="w-full max-w-none mx-auto px-6 md:px-10 lg:px-16">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-sans font-bold leading-[1.08] mb-14 retro-heading"
          style={{
            letterSpacing: "-2px",
            color: "#8e8e93",
          }}
        >
          My <span style={{ color: "#00bfff" }}>Academic</span> Journey
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-10 lg:gap-16">
          {/* LEFT: sticky year nav */}
          <div className="hidden md:flex flex-col gap-1 sticky top-28 self-start min-w-[150px] shrink-0">
            {academicData.map(({ id, year, label }) => {
              const isActive = activeYear === id;
              return (
                <button
                  key={id}
                  onClick={() => scrollToYear(id)}
                  className="flex items-center gap-3 py-2.5 text-left group cursor-pointer"
                >
                  <div
                    className="h-px shrink-0 rounded-full transition-all duration-300"
                    style={{
                      width: isActive ? 20 : 10,
                      backgroundColor: isActive
                        ? "#00bfff"
                        : "rgba(255,255,255,0.18)",
                    }}
                  />
                  <div className="flex flex-col leading-tight">
                    <span
                      className="text-sm font-sans font-semibold transition-colors duration-250"
                      style={{ color: isActive ? "#00bfff" : "rgba(255,255,255,0.35)" }}
                    >
                      {year}
                    </span>
                    <span
                      className="text-[11px] font-sans transition-colors duration-250 mt-0.5"
                      style={{
                        color: isActive
                          ? "rgba(0,191,255,0.65)"
                          : "rgba(255,255,255,0.2)",
                      }}
                    >
                      {label}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* RIGHT: content */}
          {/* make this section independently scrollable */}
          <div
            ref={containerRef}
            className="flex-1 min-w-0 max-h-[60vh] max-w-[1200px] overflow-y-auto relative custom-scrollbar pr-10"
          >
            {/* School image */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-14"
            >
              <a
                href="https://www.google.com/maps/place/Technological+Institute+of+the+Philippines+-+Quezon+City/@14.6255364,121.0588501,17z/data=!4m10!1m2!2m1!1stip+qc!3m6!1s0x3397b796aecb8763:0xaa026ea7350f82e7!8m2!3d14.6257638!4d121.0617218!15sCgZ0aXAgcWOSAQNpdXTgAQA!16s%2Fg%2F11xcs9xd5?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="block cursor-pointer"
              >
                <Image
                  src="/images/tip.jpg"
                  alt="Technological Institute of the Philippines – Quezon City"
                  width={720}
                  height={360}
                  className="w-full h-auto rounded-lg object-cover"
                  style={{ maxHeight: 400, objectPosition: "center" }}
                />
              </a>
              <p
                className="mt-3 text-sm"
                style={{ color: "#757575" }}
              >
                Technological Institute of the Philippines – Quezon City
              </p>
            </motion.div>

            {/* Mobile year nav */}
            <div className="flex md:hidden gap-2 flex-wrap mb-8">
              {academicData.map(({ id, year, label }) => {
                const isActive = activeYear === id;
                return (
                  <button
                    key={id}
                    onClick={() => scrollToYear(id)}
                    className="text-xs px-3 py-1.5 rounded-full font-roboto transition-all duration-200"
                    style={{
                      backgroundColor: isActive
                        ? "rgba(0,191,255,0.12)"
                        : "rgba(255,255,255,0.04)",
                      border: `1px solid ${isActive ? "rgba(0,191,255,0.35)" : "rgba(255,255,255,0.1)"}`,
                      color: isActive ? "#00bfff" : "rgba(255,255,255,0.4)",
                    }}
                  >
                    {year} · {label}
                  </button>
                );
              })}
            </div>

            {/* Year timeline entries */}
            <div className="flex flex-col space-y-16">
              {academicData.map((entry, index) => (
                <motion.div
                  key={entry.id}
                  id={entry.id}
                  initial={{ opacity: 0, x: 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  viewport={{ once: true, margin: "-60px" }}
                  className="relative pl-7 pb-12 last:pb-0"
                  style={{ borderLeft: "1px solid rgba(255,255,255,0.07)" }}
                >
                  {/* Timeline dot */}
                  <div
                    className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full transition-all duration-300"
                    style={{
                      border: `2px solid ${activeYear === entry.id ? "#00bfff" : "rgba(255,255,255,0.2)"}`,
                      backgroundColor:
                        activeYear === entry.id ? "#00bfff" : "#000",
                      boxShadow:
                        activeYear === entry.id
                          ? "0 0 8px rgba(0,191,255,0.5)"
                          : "none",
                    }}
                  />

                  {/* Content */}
                  <div>
                    <p
                      className="text-xs font-roboto tracking-widest uppercase mb-1.5"
                      style={{ color: "rgba(0,191,255,0.75)" }}
                    >
                      {entry.period}
                    </p>
                    <h3
                      className="font-sans font-bold text-xl mb-3"
                      style={{ color: "rgba(255,255,255,0.88)" }}
                    >
                      {entry.title}
                    </h3>
                    <p
                      className="text-[15px] leading-[1.75] mb-8 max-w-[800px]"
                      style={{ color: "#b3b3b3" }}
                    >
                      {entry.description}
                    </p>
                    <ul className="flex flex-wrap gap-4">
                      {entry.highlights.map((h) => (
                        <li
                          key={h}
                          className="text-xs px-3 py-1.5 rounded-full font-sans transition-colors duration-200 cursor-default hover:bg-blue-500 hover:text-white"
                          style={{
                            border: "1px solid rgba(0,191,255,0.2)",
                            color: "rgba(0,191,255,0.8)",
                            backgroundColor: "rgba(0,191,255,0.05)",
                          }}
                        >
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Achievements subsection */}
            {modal && (
              <div
                className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
                onClick={() => setModal(null)}
              >
                <div className="relative max-w-3xl w-full">
                  <Image
                    src={`/images/${modal.img}`}
                    alt={modal.text}
                    width={800}
                    height={600}
                    className="w-full h-auto rounded-lg shadow-2xl"
                  />
                  <button
                    onClick={() => setModal(null)}
                    className="absolute top-2 right-2 text-white text-xl"
                  >
                    &times;
                  </button>
                </div>
              </div>
            )}
            <div className="mt-20">
              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="font-sans font-bold leading-[1.08] mb-10 retro-heading text-left"
                style={{ color: "#8e8e93" }}
              >
                Achievements
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { text: "Dean's List (2022)", img: "DEANS.jpg" },
                  { text: "First Place Robotics Competition", img: "CHAMP.png" },
                  { text: "T.I.P. Gawad Awardee", img: "GAWADPIC.jpg" },
                  { text: "Volunteer tutor", img: "MENTOR.jpg" },
                ].map((ach, i) => (
                  <motion.div
                    key={i}
                    onClick={() => setModal(ach)}
                    className="flex items-center gap-6 bg-[#0a0a0a] p-6 rounded-lg hover:bg-[#1a1a1a] transition-colors cursor-pointer w-full shadow-md"
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    viewport={{ once: true }}
                  >
                    <Image
                      src={`/images/${ach.img}`}
                      alt={ach.text}
                      width={100}
                      height={100}
                      className="w-24 h-24 object-contain rounded transition-transform duration-200"
                    />
                    <p className="text-base font-medium transition-colors duration-200" style={{ color: "#b3b3b3" }}>
                      {ach.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* scrollbar styling for the scrollable panel */}
      <style jsx>{` 
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #000;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #000, #00bfff);
          border-radius: 4px;
        }
        /* Firefox */
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #00bfff #000;
        }
      `}</style>
    </section>
  );
}
