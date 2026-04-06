"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { motion, type Variants, AnimatePresence } from "framer-motion";
import {
  SiPython,
  SiCplusplus,
  SiJavascript,
  SiGit,
  SiReact,
  SiNodedotjs,
} from "react-icons/si";
import { FaLinkedin, FaGithub, FaDownload, FaEnvelope, FaPhone } from "react-icons/fa";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import ParticleBackground from "./ParticleBackground";
import DiscordButton from "./DiscordButton";
import { academicData } from "@/lib/academic";
import { projects } from "@/lib/projects";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

// ── Categorical tag colour mapping ──────────────────────────────────────────
// Update your project data in @/lib/projects to use a `categories` field
// (string[]) instead of `tech` so the labels reflect domain rather than language.
// e.g. categories: ["Computer Vision", "Deep Learning", "Robotics"]
const getCategoryStyle = (tag: string) => {
  const k = tag.toLowerCase();
  if (k.includes("vision") || k.includes("cv"))
    return { bg: "rgba(0,191,255,0.13)", color: "#00bfff", border: "rgba(0,191,255,0.35)" };
  if (k.includes("deep") || k.includes("neural") || k.includes("learning"))
    return { bg: "rgba(167,139,250,0.13)", color: "#a78bfa", border: "rgba(167,139,250,0.35)" };
  if (k.includes("robot"))
    return { bg: "rgba(248,113,113,0.13)", color: "#f87171", border: "rgba(248,113,113,0.35)" };
  if (k.includes("git") || k.includes("version") || k.includes("control"))
    return { bg: "rgba(74,222,128,0.13)", color: "#4ade80", border: "rgba(74,222,128,0.35)" };
  if (k.includes("web") || k.includes("react") || k.includes("node") || k.includes("frontend"))
    return { bg: "rgba(52,211,153,0.13)", color: "#34d399", border: "rgba(52,211,153,0.35)" };
  if (k.includes("embed") || k.includes("hardware") || k.includes("iot") || k.includes("firmware"))
    return { bg: "rgba(251,146,60,0.13)", color: "#fb923c", border: "rgba(251,146,60,0.35)" };
  if (k.includes("ai") || k.includes("ml") || k.includes("machine"))
    return { bg: "rgba(167,139,250,0.13)", color: "#a78bfa", border: "rgba(167,139,250,0.35)" };
  if (k.includes("open") || k.includes("source"))
    return { bg: "rgba(251,191,36,0.13)", color: "#fbbf24", border: "rgba(251,191,36,0.35)" };
  return { bg: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.75)", border: "rgba(255,255,255,0.12)" };
};

export default function HeroSection() {
  const techs = [
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "C++", icon: SiCplusplus, color: "#00599C" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", iconColor: "#000" },
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "React", icon: SiReact, color: "#61DAFB", iconColor: "#000" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  ];

  /* ─────────────────────────── Academic state ───────────────────────────── */
  const [modal, setModal] = useState<{ title: string; img: string; description: string; date: string } | null>(null);
  /* ─────────────────────────── Projects state ───────────────────────────── */
  const [activeIdx, setActiveIdx] = useState(0);
  const total = projects.length;
  const go = (dir: 1 | -1) => setActiveIdx((prev) => (prev + dir + total) % total);
  const project = projects[activeIdx];

  /* ═══════════════════════════════ RENDER ═══════════════════════════════ */
  return (
    <div className="bg-[#07070b] relative font-outfit text-white overflow-hidden w-full">
      <ParticleBackground />

      {/* ═══════════════════════ HERO SECTION ═══════════════════════════════ */}
      <section id="Introduction" className="min-h-screen flex flex-col justify-center relative py-20 sm:py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{ background: "radial-gradient(circle at 10% 20%, rgba(10,20,60,0.5) 0%, transparent 60%)" }}
        />

        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col gap-5 sm:gap-6 mt-8 sm:mt-10">

          {/* ── Card 1: Profile ── */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="bg-[#12121e]/80 backdrop-blur-3xl border border-white/[0.05] shadow-2xl rounded-[2rem] sm:rounded-[2.5rem] p-5 sm:p-8 md:p-10 flex flex-col md:flex-row gap-6 md:gap-8 items-center"
          >
            {/* Avatar */}
            <motion.div variants={item} className="shrink-0 w-full md:w-auto flex justify-center">
              <div className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-[1.75rem] md:rounded-[2rem] overflow-hidden bg-[#1a1a24] border border-white/5 shadow-inner">
                <Image src="/images/GAWADPIC.jpg" alt="Vincent Maverick Clarito" fill quality={100} sizes="(max-width: 768px) 100vw, 512px" className="object-cover scale-[1.35] origin-[50%_65%]" priority />
              </div>
            </motion.div>

            {/* Text */}
            <div className="flex flex-col flex-1 text-center md:text-left w-full">
              <motion.div variants={item} className="flex justify-center md:justify-start mb-3 md:mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-[#1a1a24]">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse" />
                  <span className="text-[10px] md:text-xs font-semibold tracking-widest text-emerald-400 uppercase">
                    Available for work
                  </span>
                </div>
              </motion.div>

              <motion.h1 variants={item} className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-2">
                Vincent Maverick Clarito
              </motion.h1>
              <motion.p variants={item} className="text-base md:text-xl text-gray-400 mb-6 md:mb-8 font-medium">
                Computer Engineer
              </motion.p>

              <motion.div variants={item} className="flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-3">
                <a
                  href="/Clarito, Vincent Maverick - Resume.pdf"
                  download
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-transform hover:scale-105 active:scale-95 whitespace-nowrap text-sm"
                >
                  <FaDownload size={13} /> Resume
                </a>
                <a
                  href="https://mail.google.com/mail/?view=cm&amp;to=vincentmaverick.clarito@gmail.com&amp;su=Let%27s%20Talk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#1e1e2d] text-white rounded-full font-bold hover:bg-[#2a2a3d] transition-transform hover:scale-105 active:scale-95 whitespace-nowrap text-sm"
                >
                  <FaEnvelope size={13} /> Let's Talk
                </a>

                <div className="hidden md:block w-px h-8 bg-white/10 mx-1" />

                <div className="flex items-center gap-2">
                  <a
                    href="https://github.com/MavClarito"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-[#1e1e2d] hover:bg-[#2a2a3d] transition-transform hover:scale-105 active:scale-95 text-gray-300 hover:text-white"
                  >
                    <FaGithub size={18} />
                  </a>
                  <a
                    href="https://linkedin.com/in/vincent-maverick-clarito-engr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-[#1e1e2d] hover:bg-[#2a2a3d] transition-transform hover:scale-105 active:scale-95 text-gray-300 hover:text-white"
                  >
                    <FaLinkedin size={18} />
                  </a>
                  <DiscordButton />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* ── Card 2: Overview ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-[#12121e]/80 backdrop-blur-3xl border border-white/[0.05] shadow-2xl rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 md:p-12 flex flex-col gap-6 md:gap-8"
          >
            <div className="inline-flex self-start px-4 py-1.5 rounded-full border border-white/[0.08] bg-[#1a1a24]">
              <span className="text-[10px] md:text-xs font-semibold tracking-widest text-gray-300 uppercase">
                Overview
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[40px] font-bold leading-tight md:leading-[1.25] text-white">
              Turning ideas into intelligent systems, I design{" "}
              <span className="text-[#00bfff]">hardware-software solutions</span> that{" "}
              <span className="text-[#a78bfa]">scale.</span>
            </h2>

            <p className="text-sm md:text-lg text-gray-400 leading-relaxed max-w-4xl">
              My work blends embedded systems, web development, and AI-driven innovation to create
              technology that works smarter and faster. Producing robust digital content from early
              concept through to final delivery, ensuring every project balances technical performance
              with premium aesthetics.
            </p>

            <div className="mt-2">
              <h3 className="text-sm font-semibold tracking-wider text-gray-500 uppercase mb-4">
                Core Tech Stack
              </h3>
              <div className="flex flex-wrap gap-3 md:gap-4">
                {techs.map(({ name, icon: Icon, color, iconColor }) => (
                  <div
                    key={name}
                    className="flex items-center justify-center w-11 h-11 md:w-14 md:h-14 rounded-full transition-transform hover:-translate-y-1"
                    style={{ backgroundColor: color, boxShadow: `0 4px 20px 0 ${color}40` }}
                    title={name}
                  >
                    <Icon color={iconColor || "#fff"} size={20} />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════ ACADEMIC SECTION ════════════════════════════ */}
      {/*  Extra bottom padding on mobile so the fixed bottom bar doesn't overlap content */}
      <section id="Academic-Journey" className="py-20 md:py-28 relative pb-32 md:pb-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{ background: "radial-gradient(circle at 10% 80%, rgba(10,20,60,0.5) 0%, transparent 60%)" }}
        />

        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight mb-10 md:mb-14"
          >
            My Academic Journey
          </motion.h2>

          <div className="flex flex-col md:flex-row gap-10 lg:gap-16">


            {/* ── Main content ─────────────────────────────────────────────── */}
            <div className="w-full">

              {/* School photo */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-10 md:mb-14 p-4 md:p-6 bg-[#12121e]/80 backdrop-blur-xl border border-white/[0.05] rounded-[2rem] shadow-2xl"
              >
                <a
                  href="https://www.google.com/maps/place/Technological+Institute+of+the+Philippines+-+Quezon+City/@14.6255364,121.0588501,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block cursor-pointer overflow-hidden rounded-xl"
                >
                  <Image
                    src="/images/tip-school.jpg"
                    alt="Technological Institute of the Philippines – Quezon City"
                    width={720}
                    height={360}
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                    style={{ maxHeight: 300, objectPosition: "center" }}
                  />
                </a>
                <p className="mt-4 font-bold text-gray-300">
                  Technological Institute of the Philippines – Quezon City
                </p>
              </motion.div>

              {/* Timeline */}
              <div className="flex flex-col space-y-10 sm:space-y-12">
                {academicData.map((entry, index) => (
                  <motion.div
                    key={entry.id}
                    id={entry.id}
                    initial={{ opacity: 0, x: 18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.06 }}
                    viewport={{ once: true, margin: "-60px" }}
                    className="relative pl-7 sm:pl-8 pb-10 last:pb-0"
                    style={{ borderLeft: "2px solid rgba(255,255,255,0.05)" }}
                  >
                    <div className="absolute -left-[9px] top-6 w-4 h-4 rounded-full transition-all duration-300 bg-[#07070b] flex items-center justify-center border border-white/20">
                      <div className="w-2 h-2 rounded-full bg-white opacity-80" />
                    </div>

                    <div className="bg-[#12121e]/80 backdrop-blur-xl border border-white/[0.05] rounded-[1.75rem] md:rounded-[2rem] p-5 md:p-8 shadow-xl">
                      <p className="text-xs font-bold tracking-widest uppercase mb-2 text-gray-500">
                        {entry.period}
                      </p>
                      <h3 className="font-extrabold text-xl md:text-2xl mb-3 text-white">
                        {entry.title}
                      </h3>
                      <p className="text-sm md:text-base leading-[1.8] mb-6 text-gray-400">
                        {entry.description}
                      </p>
                      <ul className="flex flex-wrap gap-2">
                        {entry.highlights.map((h) => (
                          <li
                            key={h}
                            className="text-white bg-white/10 border border-white/20 text-xs px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-semibold"
                          >
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* ── Achievements ────────────────────────────────────────────── */}
              <div id="Achievements" className="mt-20">
                <motion.h2
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-2xl md:text-4xl font-extrabold mb-8 md:mb-10 text-white"
                >
                  Achievements
                </motion.h2>

                <div className="grid grid-cols-1 gap-5 sm:gap-6 pb-20">
                  {[
                    {
                      title: "Dean's List Awardee",
                      img: "DEANS.jpg",
                      description: "Awarded to students who have achieved academic excellence by maintaining GPA.",
                      date: "2022-2023",
                    },
                    {
                      title: "Dean's List Awardee",
                      img: "Deans2023-2024.jpg",
                      description: "Awarded to students who have achieved academic excellence by maintaining GPA.",
                      date: "2023-2024",
                    },
                    {
                      title: "Robotics Competition Champion",
                      img: "CHAMP.png",
                      description: "Secured First Place overall. Designed, built, and programmed an autonomous robot that outperformed all other entries in navigating complex obstacle courses.",
                      date: "2024",
                    },
                    {
                      title: "T.I.P. Gawad Awardee",
                      img: "GAWADPIC.jpg",
                      description: "The highest institutional honor given to outstanding students who exemplify holistic excellence—combining stellar academic performance with strong leadership and impactful community involvement.",
                      date: "2024",
                    },
                    {
                      title: "Volunteer Academic Tutor",
                      img: "MENTOR.jpg",
                      description: "Served as a mentor for junior students in core programming fundamentals and advanced topics. Focused on breaking down complex subjects into approachable concepts to help peers succeed.",
                      date: "2024",
                    },
                  ].map((ach, i) => (
                    <motion.div
                      key={i}
                      onClick={() => setModal(ach)}
                      className="relative flex flex-col sm:flex-row items-center gap-4 sm:gap-6 bg-[#12121e]/80 backdrop-blur-xl border border-white/[0.05] rounded-[2rem] sm:rounded-[2.5rem] p-4 sm:p-5 transition-all duration-300 cursor-pointer w-full shadow-lg overflow-hidden"
                      initial={{ opacity: 0, x: 18 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.06 }}
                      viewport={{ once: true, margin: "-60px" }}
                    >
                      <div className="relative w-full sm:w-[140px] h-[160px] sm:h-[140px] shrink-0 rounded-[1.5rem] overflow-hidden bg-black border border-white/5">
                        <Image
                          src={`/images/${ach.img}`}
                          alt={ach.title}
                          fill
                          sizes="(max-width:640px) 100vw, 160px"
                          className="object-cover transition-transform duration-500"
                        />
                      </div>
                      <div className="flex flex-col justify-center flex-1 py-1 w-full text-left md:pr-4">
                        <span className="text-gray-400 text-xs font-bold tracking-widest uppercase mb-2 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00bfff]" />
                          {ach.date}
                        </span>
                        <h3 className="text-lg md:text-2xl font-extrabold text-white mb-2 leading-snug transition-colors duration-300">
                          {ach.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-gray-400 line-clamp-3">
                          {ach.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Achievement detail modal */}
      <AnimatePresence>
        {modal && (
          <motion.div
            key="achievement-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#07070b]/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 lg:p-10"
            onClick={() => setModal(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="relative max-w-4xl w-full bg-[#12121e] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[40vh] md:h-[50vh] shrink-0 bg-black">
                <Image
                  src={`/images/${modal.img}`}
                  alt={modal.title}
                  fill
                  sizes="(max-width:768px) 100vw, 800px"
                  className="object-contain"
                />
              </div>
              <div className="p-6 md:p-10 bg-[#12121e] overflow-y-auto custom-scrollbar">
                <h3 className="text-xl md:text-3xl font-extrabold text-white mb-4">{modal.title}</h3>
                <p className="text-gray-400 text-sm md:text-lg leading-relaxed">{modal.description}</p>
              </div>
              <button
                onClick={() => setModal(null)}
                className="absolute top-4 right-4 bg-black/60 hover:bg-white hover:text-black text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-md border border-white/10 z-10 text-lg"
              >
                &times;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ═══════════════════════ PROJECTS SECTION ════════════════════════════ */}
      <section id="Projects" className="py-20 md:py-28 relative min-h-screen flex flex-col justify-center">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{ background: "radial-gradient(circle at 90% 50%, rgba(10,20,60,0.5) 0%, transparent 50%)" }}
        />

        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col gap-5 sm:gap-6">

          {/* Header — Prev/Next removed from here, moved to pagination row */}
          <div className="mb-2 sm:mb-4">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              Selected Projects
            </h2>
          </div>

          {/* Project card */}
          <div className="relative w-full overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] bg-[#12121e]/80 backdrop-blur-3xl border border-white/[0.05] shadow-2xl p-5 sm:p-7 md:p-10 min-h-[420px] sm:min-h-[500px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.02, filter: "blur(4px)" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="flex flex-col md:flex-row gap-6 md:gap-10 items-center w-full"
              >
                {/* Image side */}
                <div className="w-full md:w-1/2 flex justify-center">
                  {(() => {
                    const hasLink = project.link && project.link.trim() !== "" && project.link !== "#";
                    return (
                      <a
                        href={hasLink ? project.link : undefined}
                        target={hasLink ? "_blank" : undefined}
                        rel={hasLink ? "noopener noreferrer" : undefined}
                        className={`relative w-full aspect-[4/3] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden bg-[#07070b] border border-white/5 shadow-inner ${hasLink ? "group cursor-pointer" : "cursor-default"}`}
                      >
                        {project.image ? (
                          <img
                            src={project.image}
                            alt={project.title}
                            className={`w-full h-full object-cover transition-transform duration-700 ease-out ${hasLink ? "group-hover:scale-105" : ""}`}
                          />
                        ) : project.emoji ? (
                          <div className="w-full h-full flex items-center justify-center text-6xl sm:text-8xl">
                            {project.emoji}
                          </div>
                        ) : null}
                        {hasLink && (
                          <div className="absolute inset-0 bg-[#07070b]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                            <div className="bg-white text-black px-5 py-2.5 rounded-full font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-xl text-sm">
                              Visit Website <ExternalLink size={14} />
                            </div>
                          </div>
                        )}
                      </a>
                    );
                  })()}
                </div>

                {/* Info side */}
                <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
                  <div className="inline-flex items-center gap-2 sm:gap-3 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/[0.08] bg-[#1a1a24] mb-4 md:mb-6 shadow-inner">
                    <span className="w-2 h-2 rounded-full bg-[#00bfff] shadow-[0_0_8px_rgba(0,191,255,0.8)]" />
                    <span className="text-[10px] md:text-xs font-semibold tracking-widest text-white uppercase">
                      Project {activeIdx + 1} of {total}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 md:mb-6 leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-sm md:text-lg text-gray-400 leading-relaxed mb-5 md:mb-8">
                    {project.description}
                  </p>

                  {/* ── Categorical tags ─────────────────────────────────── */}
                  {/* Uses project.categories if present, otherwise falls back to project.tech */}
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mt-auto">
                    {((project as any).categories ?? project.tech).map((t: string) => {
                      const style = getCategoryStyle(t);
                      return (
                        <span
                          key={t}
                          className="text-[11px] font-bold px-3 py-1.5 rounded-full transition-all duration-200 hover:scale-105 cursor-default"
                          style={{
                            backgroundColor: style.bg,
                            color: style.color,
                            border: `1px solid ${style.border}`,
                          }}
                        >
                          {t}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── Pagination: [Prev] [dots] [Next] ───────────────────────────── */}
          <div className="flex justify-center items-center gap-3 sm:gap-4 mt-1 sm:mt-2">
            <button
              onClick={() => go(-1)}
              aria-label="Previous project"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-[#1a1a24] border border-white/[0.08] text-white hover:bg-[#2a2a3d] transition-all active:scale-95 hover:scale-105 shadow-lg shrink-0"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex items-center gap-2 sm:gap-3">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIdx(i)}
                  aria-label={`Go to project ${i + 1}`}
                  className="rounded-full transition-all duration-300 cursor-pointer"
                  style={{
                    width: i === activeIdx ? 36 : 10,
                    height: 10,
                    backgroundColor: i === activeIdx ? "#fff" : "rgba(255,255,255,0.15)",
                    boxShadow: i === activeIdx ? "0 0 10px rgba(255,255,255,0.5)" : "none",
                  }}
                />
              ))}
            </div>

            <button
              onClick={() => go(1)}
              aria-label="Next project"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-[#1a1a24] border border-white/[0.08] text-white hover:bg-[#2a2a3d] transition-all active:scale-95 hover:scale-105 shadow-lg shrink-0"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ FOOTER ══════════════════════════════════ */}
      <footer id="Contact" className="relative py-10 px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-6 text-center">
          <p className="text-sm flex flex-col sm:flex-row items-center gap-3 sm:gap-5" style={{ color: "rgba(255,255,255,0.6)" }}>
            <span className="flex items-center gap-1.5">
              <FaPhone className="text-[#00bfff]" />
              <a href="tel:(+63)9924369757" className="underline hover:text-[#00bfff] transition-colors duration-200">
                (+63)992-436-9757
              </a>
            </span>
            <span className="flex items-center gap-1.5">
              <FaEnvelope className="text-[#00bfff]" />
              <a href="mailto:vincentmaverick.clarito@gmail.com" className="underline hover:text-[#00bfff] transition-colors duration-200">
                vincentmaverick.clarito@gmail.com
              </a>
            </span>
          </p>

          <div className="flex items-center gap-4 mt-2 md:mt-0">
            <a
              href="https://www.linkedin.com/in/vincent-maverick-clarito-engr"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#0A66C2] hover:scale-110 hover:brightness-110 transition-transform duration-200 z-10"
            >
              <FaLinkedin color="#fff" size={18} />
            </a>
            <a
              href="https://github.com/MavClarito"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#333] hover:scale-110 hover:brightness-110 transition-transform duration-200 z-10"
            >
              <FaGithub color="#fff" size={18} />
            </a>
            <DiscordButton className="p-2 rounded-full bg-[#5865F2] hover:scale-110 hover:brightness-110 transition-transform duration-200 z-10 text-white" iconSize={18} />
          </div>
        </div>

        <p className="text-xs text-center mt-6 text-[#00bfff] opacity-70 tracking-wide">
          &copy; {new Date().getFullYear()} Vincent Maverick Clarito. Built with Next.js and Tailwind CSS.
        </p>
      </footer>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');
        .font-outfit { font-family: 'Outfit', sans-serif; }

        /* Custom scrollbar */
        .custom-scrollbar::-webkit-scrollbar       { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.2); }

        footer a:hover { text-decoration: none; }

        /* Touch / mobile helpers */
        .touch-manipulation { touch-action: manipulation; -webkit-tap-highlight-color: transparent; }

        /* iOS safe-area bottom inset for the floating nav */
        .bottom-safe { padding-bottom: env(safe-area-inset-bottom, 0px); }
        .pb-bottom-safe { padding-bottom: max(12px, env(safe-area-inset-bottom, 12px)); }
      `}</style>
    </div>
  );
}