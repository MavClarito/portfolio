"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { motion, type Variants, AnimatePresence, useScroll, useTransform } from "framer-motion";
import {
  SiPython,
  SiCplusplus,
  SiJavascript,
  SiGit,
  SiReact,
  SiNodedotjs,
} from "react-icons/si";
import { FaLinkedin, FaGithub, FaDownload, FaDiscord, FaEnvelope, FaPhone } from "react-icons/fa";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import ParticleBackground from "./ParticleBackground";
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

export default function HeroSection() {
  const techs = [
    { name: 'Python', icon: SiPython, color: '#3776AB' },
    { name: 'C++', icon: SiCplusplus, color: '#00599C' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', iconColor: '#000' },
    { name: 'Git', icon: SiGit, color: '#F05032' },
    { name: 'React', icon: SiReact, color: '#61DAFB', iconColor: '#000' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  ];

  /* ---------------- Academic State ---------------- */
  const [activeYear, setActiveYear] = useState<string | null>(null);
  const [modal, setModal] = useState<{ title: string; img: string; description: string; date: string } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      let current: string | null = null;
      const threshold = window.innerHeight * 0.45;

      for (const entry of academicData) {
        const el = document.getElementById(entry.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= threshold) {
            current = entry.id;
          }
        }
      }

      setActiveYear(current);
    };

    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  const scrollToYear = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - window.innerHeight * 0.2;
    window.scrollTo({ top: y, behavior: "smooth" });
    setActiveYear(id);
  };

  /* ---------------- Projects State ---------------- */
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress: academicScroll } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const sidebarY = useTransform(academicScroll, [0, 1], [-40, 40]);

  const [activeIdx, setActiveIdx] = useState(0);
  const total = projects.length;

  const go = (dir: 1 | -1) => {
    setActiveIdx((prev) => (prev + dir + total) % total);
  };

  const project = projects[activeIdx];

  return (
    <div className="bg-[#07070b] relative font-outfit text-white overflow-hidden w-full">
      <ParticleBackground />

      {/* ======================= HERO SECTION ======================= */}
      <section id="Introduction" className="min-h-screen flex flex-col justify-center relative py-24">
        {/* Subtle global dark gradient */}
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background: "radial-gradient(circle at 10% 20%, rgba(10, 20, 60, 0.5) 0%, transparent 60%)",
          }}
        />

        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col gap-6 mt-10">
          {/* Card 1: Profile */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="bg-[#12121e]/80 backdrop-blur-3xl border border-white/[0.05] shadow-2xl rounded-[2.5rem] p-6 md:p-10 flex flex-col md:flex-row gap-8 items-center"
          >
            {/* Image */}
            <motion.div variants={item} className="shrink-0 w-full md:w-auto flex justify-center">
              <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-[2rem] overflow-hidden bg-[#1a1a24] border border-white/5 shadow-inner">
                <Image
                  src="/images/profile.png"
                  alt="Vincent Maverick Clarito"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </motion.div>

            {/* Content */}
            <div className="flex flex-col flex-1 text-center md:text-left w-full">
              <motion.div variants={item} className="flex justify-center md:justify-start mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-[#1a1a24]">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse"></span>
                  <span className="text-[10px] md:text-xs font-semibold tracking-widest text-emerald-400 uppercase">
                    Available for work
                  </span>
                </div>
              </motion.div>

              <motion.h1
                variants={item}
                className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-2"
              >
                Vincent Maverick Clarito
              </motion.h1>
              <motion.p
                variants={item}
                className="text-lg md:text-xl text-gray-400 mb-8 font-medium"
              >
                Computer Engineer
              </motion.p>

              <motion.div variants={item} className="flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-4">
                <a
                  href="/Clarito, Vincent Maverick - Resume.pdf"
                  download
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-transform hover:scale-105 active:scale-95 whitespace-nowrap"
                >
                  <FaDownload size={14} /> Resume
                </a>
                <button
                  onClick={() => scrollToSection("Contact")}
                  className="inline-flex items-center justify-center px-6 py-3.5 bg-[#1e1e2d] text-white rounded-full font-bold hover:bg-[#2a2a3d] transition-transform hover:scale-105 active:scale-95 whitespace-nowrap"
                >
                  Let's Talk
                </button>

                <div className="hidden md:block w-px h-8 bg-white/10 mx-2"></div>

                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/MavClarito"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1e1e2d] hover:bg-[#2a2a3d] transition-transform hover:scale-105 active:scale-95 text-gray-300 hover:text-white"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a
                    href="https://linkedin.com/in/vincent-maverick-clarito-engr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1e1e2d] hover:bg-[#2a2a3d] transition-transform hover:scale-105 active:scale-95 text-gray-300 hover:text-white"
                  >
                    <FaLinkedin size={20} />
                  </a>
                  <a
                    href="https://discord.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1e1e2d] hover:bg-[#2a2a3d] transition-transform hover:scale-105 active:scale-95 text-gray-300 hover:text-white"
                  >
                    <FaDiscord size={20} />
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Card 2: Overview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-[#12121e]/80 backdrop-blur-3xl border border-white/[0.05] shadow-2xl rounded-[2.5rem] p-8 md:p-12 flex flex-col gap-8"
          >
            <div className="inline-flex self-start px-4 py-1.5 rounded-full border border-white/[0.08] bg-[#1a1a24]">
              <span className="text-[10px] md:text-xs font-semibold tracking-widest text-gray-300 uppercase">
                Overview
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-[40px] font-bold leading-tight md:leading-[1.25] text-white">
              Turning ideas into intelligent systems, I design{" "}
              <span className="text-[#00bfff]">hardware-software solutions</span> that{" "}
              <span className="text-[#a78bfa]">scale.</span>
            </h2>

            <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-4xl">
              My work blends embedded systems, web development, and AI-driven innovation to create technology that works smarter and faster. Producing robust digital content from early concept through to final delivery, ensuring every project balances technical performance with premium aesthetics.
            </p>

            <div className="mt-2">
              <h3 className="text-sm font-semibold tracking-wider text-gray-500 uppercase mb-4">Core Tech Stack</h3>
              <div className="flex flex-wrap gap-4">
                {techs.map(({ name, icon: Icon, color, iconColor }) => (
                  <div
                    key={name}
                    className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full transition-transform hover:-translate-y-1"
                    style={{ backgroundColor: color, boxShadow: `0 4px 20px 0 ${color}40` }}
                    title={name}
                  >
                    <Icon color={iconColor || "#fff"} size={22} />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ======================= ACADEMIC SECTION ======================= */}
      <section id="Academic-Journey" className="py-20 md:py-28 relative" ref={sectionRef}>
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background: "radial-gradient(circle at 10% 80%, rgba(10, 20, 60, 0.5) 0%, transparent 60%)",
          }}
        />

        <div className="w-full max-w-6xl mx-auto px-6 md:px-10 lg:px-16 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight mb-14"
          >
            My Academic Journey
          </motion.h2>

          <div className="flex flex-col md:flex-row gap-10 lg:gap-16">
            <motion.div
              style={{ y: sidebarY }}
              className="hidden md:flex flex-col gap-2 sticky top-36 self-start min-w-[150px] shrink-0"
            >
              {academicData.map(({ id, year, label }) => {
                const isActive = activeYear === id;
                return (
                  <button
                    key={id}
                    onClick={() => scrollToYear(id)}
                    className="flex items-center gap-3 py-2.5 text-left group cursor-pointer"
                  >
                    <div
                      className="h-1.5 shrink-0 rounded-full transition-all duration-300"
                      style={{
                        width: isActive ? 24 : 12,
                        backgroundColor: isActive ? "#fff" : "rgba(255,255,255,0.2)",
                      }}
                    />
                    <div className="flex flex-col leading-tight">
                      <span
                        className="text-sm font-bold transition-colors duration-250"
                        style={{ color: isActive ? "#fff" : "rgba(255,255,255,0.4)" }}
                      >
                        {year}
                      </span>
                      <span
                        className="text-[11px] font-medium transition-colors duration-250 mt-0.5"
                        style={{ color: isActive ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.3)" }}
                      >
                        {label}
                      </span>
                    </div>
                  </button>
                );
              })}
            </motion.div>

            <div className="flex-1 min-w-0 pr-4 md:pr-10">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-14 p-4 md:p-6 bg-[#12121e]/80 backdrop-blur-xl border border-white/[0.05] rounded-[2rem] shadow-2xl"
              >
                <a
                  href="https://www.google.com/maps/place/Technological+Institute+of+the+Philippines+-+Quezon+City/@14.6255364,121.0588501,17z/data=!4m10!1m2!2m1!1stip+qc!3m6!1s0x3397b796aecb8763:0xaa026ea7350f82e7!8m2!3d14.6257638!4d121.0617218!15sCgZ0aXAgcWOSAQNpdXTgAQA!16s%2Fg%2F11xcs9xd5?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D"
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

              <div className="flex md:hidden gap-2 flex-wrap mb-8">
                {academicData.map(({ id, year, label }) => {
                  const isActive = activeYear === id;
                  return (
                    <button
                      key={id}
                      onClick={() => scrollToYear(id)}
                      className="text-xs px-4 py-2 rounded-full font-bold transition-all duration-200"
                      style={{
                        backgroundColor: isActive ? "#fff" : "#1a1a24",
                        color: isActive ? "#000" : "rgba(255,255,255,0.6)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      {year} · {label}
                    </button>
                  );
                })}
              </div>

              <div className="flex flex-col space-y-12">
                {academicData.map((entry, index) => (
                  <motion.div
                    key={entry.id}
                    id={entry.id}
                    initial={{ opacity: 0, x: 18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.06 }}
                    viewport={{ once: true, margin: "-60px" }}
                    className="relative pl-8 pb-12 last:pb-0"
                    style={{ borderLeft: "2px solid rgba(255,255,255,0.05)" }}
                  >
                    <div
                      className="absolute -left-[9px] top-6 w-4 h-4 rounded-full transition-all duration-300 bg-[#07070b] flex items-center justify-center border border-white/20"
                    >
                      <div className="w-2 h-2 rounded-full"
                        style={{
                          backgroundColor: activeYear === entry.id ? "#fff" : "rgba(255,255,255,0.3)",
                          boxShadow: activeYear === entry.id ? "0 0 10px rgba(255,255,255,0.8)" : "none",
                        }}
                      />
                    </div>

                    <div className="bg-[#12121e]/80 backdrop-blur-xl border border-white/[0.05] rounded-[2rem] p-6 md:p-8 shadow-xl">
                      <p className="text-xs font-bold tracking-widest uppercase mb-2 text-gray-500">
                        {entry.period}
                      </p>
                      <h3 className="font-extrabold text-2xl mb-3 text-white">
                        {entry.title}
                      </h3>
                      <p className="text-base leading-[1.8] mb-6 text-gray-400">
                        {entry.description}
                      </p>
                      <ul className="flex flex-wrap gap-2">
                        {entry.highlights.map((h) => (
                          <li
                            key={h}
                            className="text-white bg-white/10 border border-white/20 text-xs px-4 py-2 rounded-full font-semibold transition-colors duration-200 cursor-default"
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
                  className="fixed inset-0 bg-[#07070b]/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 lg:p-10"
                  onClick={() => setModal(null)}
                >
                  <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    className="relative max-w-4xl w-full bg-[#12121e] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl max-h-[90vh] flex flex-col"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="relative w-full h-[40vh] md:h-[50vh] shrink-0 bg-black">
                      <Image
                        src={`/images/${modal.img}`}
                        alt={modal.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 800px"
                        className="object-contain"
                      />
                    </div>
                    <div className="p-8 md:p-10 bg-[#12121e] overflow-y-auto custom-scrollbar">
                      <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4">{modal.title}</h3>
                      <p className="text-gray-400 text-sm md:text-lg leading-relaxed">{modal.description}</p>
                    </div>
                    <button
                      onClick={() => setModal(null)}
                      className="absolute top-4 right-4 bg-black/60 hover:bg-white hover:text-black text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-md border border-white/10 z-10"
                    >
                      &times;
                    </button>
                  </motion.div>
                </div>
              )}
              <div className="mt-20">
                <motion.h2
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-2xl md:text-4xl font-extrabold mb-10 text-white"
                >
                  Achievements
                </motion.h2>
                <div className="grid grid-cols-1 gap-6 pb-20">
                  {[
                    {
                      title: "Dean's List Awardee",
                      img: "DEANS.jpg",
                      description: "Awarded to students who have achieved academic excellence by maintaining GPA.",
                      date: "2022-2023"
                    },
                    {
                      title: "Dean's List Awardee",
                      img: "Deans2023-2024.jpg",
                      description: "Awarded to students who have achieved academic excellence by maintaining GPA.",
                      date: "2023-2024"
                    },
                    {
                      title: "Robotics Competition Champion",
                      img: "CHAMP.png",
                      description: "Secured First Place overall. Designed, built, and programmed an autonomous robot that outperformed all other entries in navigating complex obstacle courses.",
                      date: "2024"
                    },
                    {
                      title: "T.I.P. Gawad Awardee",
                      img: "GAWADPIC.jpg",
                      description: "The highest institutional honor given to outstanding students who exemplify holistic excellence—combining stellar academic performance with strong leadership and impactful community involvement.",
                      date: "2024"
                    },
                    {
                      title: "Volunteer Academic Tutor",
                      img: "MENTOR.jpg",
                      description: "Served as a mentor for junior students in core programming fundamentals and advanced topics. Focused on breaking down complex subjects into approachable concepts to help peers succeed.",
                      date: "2024"
                    },
                  ].map((ach, i) => (
                    <motion.div
                      key={i}
                      onClick={() => setModal(ach)}
                      className="group relative flex flex-col sm:flex-row items-center gap-6 bg-[#12121e]/80 backdrop-blur-xl border border-white/[0.05] rounded-[2.5rem] p-5 hover:bg-[#1a1a24] transition-all duration-300 cursor-pointer w-full shadow-lg overflow-hidden"
                      initial={{ opacity: 0, x: 18 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.5, delay: i * 0.06 }}
                      viewport={{ once: true, margin: "-60px" }}
                    >
                      <div className="relative w-full sm:w-[160px] h-[200px] sm:h-[160px] shrink-0 rounded-[2rem] overflow-hidden bg-black border border-white/5">
                        <Image
                          src={`/images/${ach.img}`}
                          alt={ach.title}
                          fill
                          sizes="(max-width: 640px) 100vw, 160px"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      <div className="flex flex-col justify-center flex-1 py-1 w-full text-left md:pr-4">
                        <span className="text-gray-400 text-xs font-bold tracking-widest uppercase mb-2 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                          {ach.date}
                        </span>
                        <h3 className="text-xl md:text-2xl font-extrabold text-white mb-2 leading-snug group-hover:text-[#00bfff] transition-colors duration-300">
                          {ach.title}
                        </h3>
                        <p className="text-sm md:text-base leading-relaxed text-gray-400 line-clamp-3">
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

      {/* ======================= PROJECTS SECTION ======================= */}
      <section id="Projects" className="py-20 md:py-28 relative min-h-screen flex flex-col justify-center">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background: "radial-gradient(circle at 90% 50%, rgba(10, 20, 60, 0.5) 0%, transparent 50%)",
          }}
        />

        {/* Same max-w-5xl container as HeroSection */}
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between mb-4 gap-4">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              Selected Projects
            </h2>
            <div className="flex items-center gap-4">
              <button
                onClick={() => go(-1)}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1a1a24] border border-white/[0.08] text-white hover:bg-[#2a2a3d] transition-transform active:scale-95 hover:scale-105 shadow-lg"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => go(1)}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1a1a24] border border-white/[0.08] text-white hover:bg-[#2a2a3d] transition-transform active:scale-95 hover:scale-105 shadow-lg"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div className="relative w-full overflow-hidden rounded-[2.5rem] bg-[#12121e]/80 backdrop-blur-3xl border border-white/[0.05] shadow-2xl p-6 md:p-10 min-h-[500px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.02, filter: "blur(4px)" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="flex flex-col md:flex-row gap-10 items-center w-full"
              >
                {/* Image side */}
                <div className="w-full md:w-1/2 flex justify-center">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden bg-[#07070b] border border-white/5 shadow-inner group"
                  >
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    ) : project.emoji ? (
                      <div className="w-full h-full flex items-center justify-center text-8xl">
                        {project.emoji}
                      </div>
                    ) : null}

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-[#07070b]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                      <div className="bg-white text-black px-6 py-3 rounded-full font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-xl">
                        Visit Website <ExternalLink size={16} />
                      </div>
                    </div>
                  </a>
                </div>

                {/* Info side */}
                <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
                  <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/[0.08] bg-[#1a1a24] mb-6 shadow-inner">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00bfff] shadow-[0_0_8px_rgba(0,191,255,0.8)]"></span>
                    <span className="text-[10px] md:text-xs font-semibold tracking-widest text-white uppercase">
                      Project {activeIdx + 1} of {total}
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-8">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mt-auto">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-bold px-4 py-2 rounded-full bg-[#1a1a24] text-gray-300 border border-white/[0.08] hover:bg-white hover:text-black transition-colors shadow-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center items-center gap-3 mt-4">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                className="rounded-full transition-all duration-300 cursor-pointer"
                style={{
                  width: i === activeIdx ? 40 : 10,
                  height: 10,
                  backgroundColor: i === activeIdx ? "#fff" : "rgba(255,255,255,0.15)",
                  boxShadow: i === activeIdx ? "0 0 10px rgba(255,255,255,0.5)" : "none"
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ======================= FOOTER ======================= */}
      <footer id="Contact" className="relative py-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center">
          {/* Contact Info */}
          <p className="text-sm flex flex-col md:flex-row items-center gap-3 md:gap-5" style={{ color: "rgba(255,255,255,0.6)" }}>
            <span className="flex items-center gap-1">
              <FaPhone className="text-[#00bfff]" />
              <a href="tel:(+63)9924369757" className="underline hover:text-[#00bfff] transition-colors duration-200">(+63)992-436-9757</a>
            </span>
            <span className="flex items-center gap-1">
              <FaEnvelope className="text-[#00bfff]" />
              <a href="mailto:vincentmaverick.clarito@gmail.com" className="underline hover:text-[#00bfff] transition-colors duration-200">vincentmaverick.clarito@gmail.com</a>
            </span>
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-3 md:mt-0">
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
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-xs text-center mt-6 text-[#00bfff] opacity-70 font-roboto tracking-wide">
          &copy; {new Date().getFullYear()} Vincent Maverick Clarito. Built with Next.js and Tailwind CSS.
        </p>
      </footer>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');
        .font-outfit {
          font-family: 'Outfit', sans-serif;
        }
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.2); }
        footer a:hover {
          text-decoration: none;
        }
      `}</style>
    </div>
  );
}