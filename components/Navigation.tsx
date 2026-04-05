"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "Introduction", label: "Introduction", emoji: "👤" },
  { id: "Academic-Journey", label: "Academic Journey", emoji: "🎓" },
  { id: "Projects", label: "Projects", emoji: "🛠️" },
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
      className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end gap-3"
      aria-label="Page navigation"
    >
      {sections.map(({ id, label, emoji }) => {
        const isActive = active === id;
        const isHovered = hovered === id;

        return (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            onMouseEnter={() => setHovered(id)}
            onMouseLeave={() => setHovered(null)}
            className="group flex items-center gap-3 cursor-pointer"
            aria-label={`Navigate to ${label}`}
          >
            {/* Label — slides in when active or hovered */}
            <span
              className="text-xs font-sans whitespace-nowrap transition-all duration-200"
              style={{
                opacity: isActive || isHovered ? 1 : 0,
                transform:
                  isActive || isHovered ? "translateX(0)" : "translateX(6px)",
                color: isActive
                  ? "rgba(255,255,255,0.85)"
                  : "rgba(255,255,255,0.45)",
              }}
            >
              {label}
            </span>

            {/* Emoji container */}
            <span
              className="flex items-center justify-center rounded-2xl transition-all duration-300 select-none"
              style={{
                width: isHovered ? 48 : isActive ? 44 : 40,
                height: isHovered ? 48 : isActive ? 44 : 40,
                fontSize: isHovered ? "1.35rem" : isActive ? "1.2rem" : "1rem",

                backgroundColor: isActive
                  ? "rgba(0, 191, 255, 0.12)"
                  : "rgba(255, 255, 255, 0.06)",

                border: isHovered
                  ? "2px solid transparent"
                  : isActive
                    ? "2px solid rgba(0, 191, 255, 0.6)"
                    : "2px solid rgba(255, 255, 255, 0.1)",

                outline: isHovered
                  ? "2px solid rgba(0, 191, 255, 0.55)"
                  : "2px solid transparent",
                outlineOffset: "2px",

                boxShadow: isActive
                  ? "0 0 14px rgba(0, 191, 255, 0.25), inset 0 0 8px rgba(0, 191, 255, 0.08)"
                  : isHovered
                    ? "0 0 18px rgba(0, 191, 255, 0.3)"
                    : "0 2px 8px rgba(0,0,0,0.3)",

                backdropFilter: "blur(8px)",
                transform: isHovered ? "scale(1.08)" : "scale(1)",
              }}
            >
              {emoji}
            </span>
          </button>
        );
      })}
    </nav>
  );
}