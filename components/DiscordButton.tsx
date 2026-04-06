"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaDiscord } from "react-icons/fa";

interface DiscordButtonProps {
  username?: string;
  className?: string;
  iconSize?: number;
}

export default function DiscordButton({
  username = "soruuuuu._",
  className = "w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-[#5865F2] hover:bg-[#4752c4] transition-transform hover:scale-105 active:scale-95 text-white",
  iconSize = 18,
}: DiscordButtonProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  return (
    <div className="relative inline-block" ref={ref}>
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setOpen((v) => !v);
        }}
        className={className}
        aria-label="Discord username"
      >
        <FaDiscord size={iconSize} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            key="discord-popup"
            initial={{ opacity: 0, y: 8, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.92 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-50 pointer-events-none"
          >
            <div className="bg-[#1e1e2d] border border-white/10 rounded-xl px-4 py-2.5 shadow-xl flex items-center gap-2 whitespace-nowrap">
              <FaDiscord size={14} className="text-[#5865F2] shrink-0" />
              <span className="text-sm font-semibold text-white">{username}</span>
            </div>
            <div className="w-3 h-3 bg-[#1e1e2d] border-r border-b border-white/10 rotate-45 mx-auto -mt-1.5" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
