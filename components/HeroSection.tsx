"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { useState, useEffect } from "react";
import {
  SiPython,
  SiCplusplus,
  SiJavascript,
  SiGit,
  SiReact,
  SiNodedotjs,
} from "react-icons/si";
import { FaLinkedin, FaGithub, FaArrowRight } from "react-icons/fa";
import ParticleBackground from "./ParticleBackground";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.25 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function HeroSection() {
  const fullText = "Hello, I am Maverick Clarito";
  const [typed, setTyped] = useState("");

  const techs = [
    { name: 'Python', icon: SiPython, color: '#3776AB' },
    { name: 'C++', icon: SiCplusplus, color: '#00599C' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', iconColor: '#000' },
    { name: 'Git', icon: SiGit, color: '#F05032' },
    { name: 'React', icon: SiReact, color: '#61DAFB', iconColor: '#000' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  ];
  const techStackText = "Tech Stack";
  const [typedTech, setTypedTech] = useState("");

  useEffect(() => {
    let idx = 0;
    const timer = setInterval(() => {
      idx += 1;
      setTypedTech(techStackText.substring(0, idx));
      if (idx >= techStackText.length) clearInterval(timer);
    }, 80);
    return () => clearInterval(timer);
  }, []);
  useEffect(() => {
    let idx = 0;
    const timer = setInterval(() => {
      idx += 1;
      setTyped(fullText.substring(0, idx));
      if (idx >= fullText.length) clearInterval(timer);
    }, 80);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center bg-black relative overflow-hidden">
      <ParticleBackground />
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,191,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,191,255,0.04) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div
        className="pointer-events-none absolute -top-48 -left-48 w-[700px] h-[700px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(0,191,255,0.07) 0%, transparent 65%)",
        }}
      />

      <div className="w-full max-w-none mx-auto px-6 md:px-10 lg:px-16 py-16">
        <div className="flex flex-col md:flex-row md:items-center gap-16 md:gap-24">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="shrink-0 flex justify-center md:flex-1 md:max-w-[550px]"
          >
            <div className="relative inline-block">
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(0,191,255,0.18) 0%, transparent 70%)",
                  transform: "scale(1.12)",
                  filter: "blur(20px)",
                }}
              />
              <Image
                src="/images/profile.png"
                alt="Maverick – Computer Engineer"
                width={520}
                height={660}
                className="relative w-[280px] sm:w-[350px] md:w-[450px] lg:w-[520px] h-auto object-cover object-top"
                style={{ height: "auto" }}
                priority
              />
              <div className="absolute bottom-0 left-0 w-full h-32 md:h-48 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-6 text-center md:text-left md:flex-1"
          >
            <motion.div variants={item}>
              <p
                className="text-xs font-roboto tracking-[3px] uppercase mb-3"
                style={{ color: "rgba(0,191,255,0.8)" }}
              ></p>
              <h1
                className="font-sans font-bold leading-[1.08] mb-2 typing-text"
                style={{
                  fontSize: "clamp(2.4rem, 6vw, 5rem)",
                  letterSpacing: "-2px",
                  color: "#8e8e93",
                }}
              >
                {(() => {
                  if (!typed) return null;
                  const parts = typed.split(/(Maverick)/);
                  return parts.map((p, i) =>
                    p === "Maverick" ? (
                      <span key={i} style={{ color: "#00bfff" }}>
                        {p}
                      </span>
                    ) : (
                      <span key={i}>{p}</span>
                    )
                  );
                })()}
                <span className="blinker">|</span>
              </h1>
              <p className="font-sans text-xl sm:text-2xl" style={{ color: "#757575" }}>
                Computer Engineer
              </p>
            </motion.div>

            <motion.p
              variants={item}
              className="text-[15px] leading-[1.75] max-w-[800px] mx-auto md:mx-0"
              style={{ color: "#b3b3b3" }}
            >
              Turning ideas into intelligent systems, I design hardware-software solutions that scale. My work blends embedded systems, web development, and AI-driven innovation to create technology that works smarter and faster.
            </motion.p>

            {/* Buttons + Resume + Social */}
            <motion.div
              variants={item}
              className="flex flex-wrap items-center gap-3 justify-center md:justify-start"
            >
              {/* Get In Touch */}
              <button
                onClick={() => scrollToSection("Contact")}
                className="px-6 py-3 font-roboto font-semibold text-sm tracking-wide flex items-center gap-2 transition-all duration-200"
                style={{
                  border: "1px solid rgba(255,255,255,0.18)",
                  color: "rgba(255,255,255,0.65)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor =
                    "rgba(0,191,255,0.5)";
                  (e.currentTarget as HTMLButtonElement).style.color = "#00bfff";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor =
                    "rgba(255,255,255,0.18)";
                  (e.currentTarget as HTMLButtonElement).style.color =
                    "rgba(255,255,255,0.65)";
                }}
              >
                Get In Touch <FaArrowRight size={12} />
              </button>

              {/* Download Resume */}
              <a
                href="/Clarito, Vincent Maverick - Resume.pdf"
                download
                className="px-5 py-2 font-roboto font-semibold text-sm tracking-wide rounded-full text-black bg-[#00bfff] hover:brightness-110 transition-all duration-200"
              >
                Download Resume
              </a>

              {/* LinkedIn & GitHub */}
              <a
                href="https://linkedin.com/in/vincent-maverick-clarito-engr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0A66C2] hover:brightness-110 transition-all duration-200"
              >
                <FaLinkedin color="#fff" size={18} />
              </a>

              <a
                href="https://github.com/MavClarito"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#333] hover:brightness-110 transition-all duration-200"
              >
                <FaGithub color="#fff" size={18} />
              </a>
            </motion.div>

            {/* Tech Stack*/}
            <motion.div variants={item} className="flex items-center gap-3 justify-center md:justify-start mt-6">
              <h2 className="typing-text text-[#00bfff] text-sm md:text-base">
                {typedTech}
                <span className="blinker">|</span>
              </h2>
            </motion.div>

            {/* Tech badges */}
            <motion.div
              variants={item}
              className="flex flex-wrap gap-4 justify-center md:justify-start mt-4"
            >
              {techs.map(({ name, icon: Icon, color, iconColor }) => (
                <motion.div
                  key={name}
                  whileHover={{ scale: 1.1, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center w-12 h-12 rounded-full shadow-lg transition-colors"
                  style={{ backgroundColor: color }}
                  title={name}
                >
                  <Icon color={iconColor || "#fff"} size={24} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span
          className="text-[10px] font-roboto tracking-[3px] uppercase"
          style={{ color: "rgba(255,255,255,0.25)" }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 1.7, ease: "easeInOut" }}
          className="w-px h-7 rounded-full"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,191,255,0.6), transparent)",
          }}
        />
      </motion.div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
        .typing-text {
          font-family: 'Press Start 2P', monospace;
        }
        .retro-heading {
          font-family: 'Press Start 2P', monospace;
          font-size: clamp(2rem, 5vw, 4.5rem);
        }
        .blinker {
          display: inline-block;
          animation: blink 1s step-start infinite;
          color: #00bfff;
          margin-left: 2px;
        }
        @keyframes blink {
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}