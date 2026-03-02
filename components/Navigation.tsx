"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "Introduction", label: "Introduction" },
  { id: "Academic-Journey", label: "Academic Journey" },
  { id: "Projects", label: "Projects" },
];

export default function Navigation() {
  const [active, setActive] = useState("Introduction");

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
      className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end gap-5"
      aria-label="Page navigation"
    >
      {sections.map(({ id, label }) => {
        const isActive = active === id;
        return (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className="group flex items-center gap-3 cursor-pointer"
            aria-label={`Navigate to ${label}`}
          >
            <span
              className="text-xs font-sans whitespace-nowrap transition-all duration-200"
              style={{
                opacity: isActive ? 1 : 0,
                transform: isActive ? "translateX(0)" : "translateX(4px)",
                color: "rgba(255,255,255,0.5)",
              }}
            >
              {label}
            </span>
            <span
              className="rounded-full block transition-all duration-300"
              style={{
                width: isActive ? 10 : 6,
                height: isActive ? 10 : 6,
                backgroundColor: isActive ? "#00bfff" : "rgba(255,255,255,0.25)",
                boxShadow: isActive ? "0 0 8px rgba(0,191,255,0.5)" : "none",
              }}
            />
          </button>
        );
      })}
    </nav>
  );
}
