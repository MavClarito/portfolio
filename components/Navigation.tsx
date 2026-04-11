"use client";

import { useEffect, useState } from "react";
import { FaUserAlt, FaGraduationCap } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa6";

const sections = [
  { id: "Introduction", label: "Introduction", icon: FaUserAlt, color: "#00bfff" },
  { id: "Academic-Journey", label: "Academic Journey", icon: FaGraduationCap, color: "#a78bfa" },
  { id: "Projects", label: "Projects", icon: FaLaptopCode, color: "#34d399" },
];

export default function Navigation() {
  const [active, setActive] = useState("Introduction");
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const update = () => {
      const midY = window.scrollY + window.innerHeight * 0.4;
      let current = sections[0].id;
      for (const { id } of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= midY) current = id;
      }
      setActive(current);
    };

    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="fixed z-[999] flex md:flex-col items-center md:items-end gap-2 sm:gap-3 
                 bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 md:bottom-auto md:left-auto md:right-6 md:top-1/2 md:-translate-y-1/2 md:translate-x-0
                 bg-[#12121e]/90 md:bg-transparent backdrop-blur-3xl md:backdrop-blur-none 
                 px-4 sm:px-6 py-3 md:p-0 rounded-full md:rounded-none border border-white/[0.08] md:border-none shadow-[0_8px_30px_rgba(0,0,0,0.5)] md:shadow-none"
      aria-label="Page navigation"
    >
      {sections.map(({ id, label, icon: Icon, color }) => {
        const isActive = active === id;
        const isHovered = hovered === id;

        return (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            onMouseEnter={() => setHovered(id)}
            onMouseLeave={() => setHovered(null)}
            className="group flex flex-col md:flex-row items-center gap-1.5 md:gap-3 cursor-pointer relative"
            aria-label={`Navigate to ${label}`}
          >
            {/* Label — visible on desktop next to icon, hidden on mobile */}
            <span
              className="hidden md:block text-xs font-sans whitespace-nowrap transition-all duration-200"
              style={{
                opacity: isActive || isHovered ? 1 : 0,
                transform: isActive || isHovered ? "translateX(0)" : "translateX(6px)",
                color: isActive ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.45)",
              }}
            >
              {label}
            </span>

            {/* Icon container */}
            <span
              className="flex items-center justify-center rounded-2xl transition-all duration-300 select-none"
              style={{
                width: isHovered ? 48 : isActive ? 44 : 40,
                height: isHovered ? 48 : isActive ? 44 : 40,

                backgroundColor: isActive
                  ? `${color}20`
                  : "rgba(255, 255, 255, 0.04)",

                border: isHovered
                  ? "2px solid transparent"
                  : isActive
                    ? `2px solid ${color}90`
                    : "2px solid rgba(255, 255, 255, 0.08)",

                outline: isHovered
                  ? `2px solid ${color}80`
                  : "2px solid transparent",
                outlineOffset: "2px",

                boxShadow: isActive
                  ? `0 0 14px ${color}40, inset 0 0 8px ${color}15`
                  : isHovered
                    ? `0 0 18px ${color}50`
                    : "0 2px 8px rgba(0,0,0,0.3)",

                backdropFilter: "blur(8px)",
                transform: isHovered ? "scale(1.08)" : "scale(1)",
              }}
            >
              <Icon size={isHovered ? 20 : isActive ? 18 : 16} color={isActive || isHovered ? color : "rgba(255,255,255,0.6)"} className="transition-all duration-300" />
            </span>

            {/* Small indicator label for mobile only */}
            <span
              className="md:hidden text-[9px] font-bold tracking-wider transition-all duration-200 mt-1"
              style={{
                color: isActive ? color : "rgba(255,255,255,0.4)",
                opacity: isActive ? 1 : 0.6
              }}
            >
              {label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}