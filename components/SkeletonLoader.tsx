"use client";

import { motion } from "framer-motion";

/* Reusable shimmer bar */
function Shimmer({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <div className={`relative overflow-hidden rounded-md ${className}`} style={style}>
      <div className="absolute inset-0 bg-white/5" />
      <motion.div
        animate={{ x: ["-100%", "150%"] }}
        transition={{ repeat: Infinity, duration: 1.6, ease: "linear" }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />
    </div>
  );
}

/* Circular shimmer */
function ShimmerCircle({ size = 40 }: { size?: number }) {
  return (
    <div
      className="relative overflow-hidden rounded-full shrink-0"
      style={{ width: size, height: size }}
    >
      <div className="absolute inset-0 bg-white/5" />
      <motion.div
        animate={{ x: ["-100%", "150%"] }}
        transition={{ repeat: Infinity, duration: 1.6, ease: "linear" }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />
    </div>
  );
}

export default function SkeletonLoader() {
  return (
    <div
      className="fixed inset-0 z-[9999] overflow-y-auto font-outfit text-white"
      style={{ backgroundColor: "#07070b" }}
      aria-hidden="true"
    >
      {/* ── Radial gradient overlay — matches HeroSection opacity-40 ── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(circle at 10% 20%, rgba(10, 20, 60, 0.5) 0%, transparent 60%)",
        }}
      />

      {/* ── Subtle particle-like dot grid to hint at ParticleBackground ── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(0,191,255,0.8) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* ── Centered column — same max-w-5xl as HeroSection ── */}
      <div className="relative z-10 flex flex-col items-center gap-5 px-4 sm:px-6 py-10 w-full max-w-5xl mx-auto mt-10">

        {/* ── Card 1: Profile — bg-[#12121e]/80 backdrop-blur-3xl border border-white/[0.05] shadow-2xl rounded-[2.5rem] ── */}
        <div
          className="w-full rounded-[2.5rem] p-6 md:p-10 flex flex-col md:flex-row gap-8 items-center backdrop-blur-3xl border border-white/[0.05] shadow-2xl"
          style={{ backgroundColor: "rgba(18, 18, 30, 0.80)" }}
        >
          {/* Profile photo — same sizing as HeroSection: w-56 h-56 md:w-64 md:h-64 rounded-[2rem] */}
          <div className="shrink-0 flex justify-center w-full md:w-auto">
            <div
              className="relative overflow-hidden rounded-[2rem] border border-white/5 shadow-inner"
              style={{ width: 224, height: 224 }}
            >
              <div className="absolute inset-0 bg-[#1a1a24]" />
              <motion.div
                animate={{ x: ["-100%", "150%"] }}
                transition={{ repeat: Infinity, duration: 1.6, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              />
            </div>
          </div>

          {/* Right text column */}
          <div className="flex flex-col flex-1 gap-4 items-center md:items-start text-center md:text-left">
            {/* "AVAILABLE FOR WORK" badge */}
            <Shimmer className="w-36 h-6 rounded-full" />

            {/* Name — large, matches text-4xl md:text-6xl */}
            <div className="flex flex-col gap-2 w-full">
              <Shimmer className="w-72 md:w-[420px] h-10 md:h-14" />
              <Shimmer className="w-48 md:w-[280px] h-10 md:h-14" />
            </div>

            {/* "Computer Engineer" subtitle */}
            <Shimmer className="w-40 h-5" />

            {/* Buttons + social icons */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mt-2">
              {/* Resume */}
              <Shimmer className="w-32 h-12 rounded-full" />
              {/* Let's Talk */}
              <Shimmer className="w-32 h-12 rounded-full" style={{ backgroundColor: "rgba(30,30,45,0.8)" }} />
              {/* Divider hint */}
              <div className="hidden md:block w-px h-8 bg-white/10 mx-2" />
              {/* Social icons */}
              <ShimmerCircle size={48} />
              <ShimmerCircle size={48} />
              <ShimmerCircle size={48} />
            </div>
          </div>
        </div>

        {/* ── Card 2: Overview ── */}
        <div
          className="w-full rounded-[2.5rem] p-6 md:p-10 flex flex-col gap-5 backdrop-blur-3xl border border-white/[0.05] shadow-2xl"
          style={{ backgroundColor: "rgba(18, 18, 30, 0.80)" }}
        >
          {/* "OVERVIEW" badge */}
          <Shimmer className="w-24 h-6 rounded-full" />

          {/* Headline — 2 lines, matches text-4xl md:text-5xl font-extrabold */}
          <div className="flex flex-col gap-3">
            <Shimmer className="w-full h-9 md:h-11" />
            <div className="flex gap-3 flex-wrap">
              {/* Blue accent word */}
              <Shimmer
                className="w-56 h-9 md:h-11"
                style={{ backgroundColor: "rgba(0,191,255,0.1)" }}
              />
              <Shimmer className="w-16 h-9 md:h-11" />
              {/* Purple accent word */}
              <Shimmer
                className="w-24 h-9 md:h-11"
                style={{ backgroundColor: "rgba(168,85,247,0.1)" }}
              />
            </div>
          </div>

          {/* Body paragraph */}
          <div className="flex flex-col gap-2 mt-1">
            <Shimmer className="w-full h-3.5" />
            <Shimmer className="w-11/12 h-3.5" />
            <Shimmer className="w-4/5 h-3.5" />
          </div>

          {/* "CORE TECH STACK" label + 6 icons */}
          <div className="flex flex-col gap-3 mt-2">
            <Shimmer className="w-32 h-3.5" />
            <div className="flex flex-wrap gap-3">
              {[...Array(6)].map((_, i) => (
                <ShimmerCircle key={i} size={48} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Right nav skeleton — matches new Navigation.tsx emoji containers ── */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col items-end gap-3 z-20">
        {/* Active item */}
        <div className="flex items-center gap-3">
          <Shimmer className="w-20 h-3" />
          <div
            className="relative overflow-hidden rounded-2xl shrink-0 border"
            style={{
              width: 44,
              height: 44,
              backgroundColor: "rgba(0,191,255,0.1)",
              borderColor: "rgba(0,191,255,0.3)",
            }}
          >
            <motion.div
              animate={{ x: ["-100%", "150%"] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            />
          </div>
        </div>

        {/* Idle items */}
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center gap-3">
            <div
              className="relative overflow-hidden rounded-2xl shrink-0 border border-white/10"
              style={{ width: 40, height: 40, backgroundColor: "rgba(255,255,255,0.04)" }}
            >
              <motion.div
                animate={{ x: ["-100%", "150%"] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.6,
                  ease: "linear",
                  delay: i * 0.2,
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              />
            </div>
          </div>
        ))}
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');
        .font-outfit { font-family: 'Outfit', sans-serif; }
      `}</style>
    </div>
  );
}