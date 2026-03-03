"use client";

import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black relative overflow-hidden py-10 mt-20">
      {/* Subtle top glow */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(0,191,255,0.2), transparent)",
        }}
      />

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
            className="p-2 rounded-full bg-[#0A66C2] hover:scale-110 hover:brightness-110 transition-transform duration-200"
          >
            <FaLinkedin color="#fff" size={18} />
          </a>
          <a
            href="https://github.com/MavClarito"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-[#333] hover:scale-110 hover:brightness-110 transition-transform duration-200"
          >
            <FaGithub color="#fff" size={18} />
          </a>
        </div>
      </div>

      {/* Footer Note */}
      <p className="text-xs text-center mt-6 text-[#00bfff] opacity-70 font-roboto tracking-wide">
        &copy; {new Date().getFullYear()} Vincent Maverick Clarito. Built with Next.js and Tailwind CSS.
      </p>

      <style jsx>{`
        footer a:hover {
          text-decoration: none;
        }
      `}</style>
    </footer>
  );
}