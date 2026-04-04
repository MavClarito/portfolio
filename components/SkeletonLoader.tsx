import { motion } from "framer-motion";

export default function SkeletonLoader() {
  return (
    <div className="fixed inset-0 z-[9999] bg-black overflow-hidden flex flex-col justify-center px-6 md:px-10 lg:px-16" aria-hidden="true">
      <div className="flex flex-col md:flex-row md:items-center gap-16 md:gap-24 w-full h-full max-w-none mx-auto animate-pulse">
        {/* Profile Image Skeleton */}
        <div className="shrink-0 flex justify-center md:flex-1 md:max-w-[550px]">
          <div className="relative inline-block w-[280px] sm:w-[350px] md:w-[450px] lg:w-[520px] h-[400px] md:h-[660px]">
            <div className="absolute inset-0 bg-white/5 rounded-2xl" />
            <div className="absolute bottom-0 left-0 w-full h-32 md:h-48 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none" />
            {/* Shimmer effect overlay */}
            <motion.div
              animate={{ x: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            />
          </div>
        </div>

        {/* Text Content Skeleton */}
        <div className="flex flex-col gap-6 text-center md:text-left md:flex-1 w-full max-w-[800px]">
          <div>
            {/* "Hello, I am" */}
            <div className="flex gap-4 justify-center md:justify-start mb-3">
              <div className="w-[180px] md:w-[250px] h-12 md:h-16 bg-white/10 rounded-md" />
              <div className="w-[120px] md:w-[160px] h-12 md:h-16 bg-white/10 rounded-md" />
            </div>
            {/* "Maverick Clarito |" */}
            <div className="flex gap-4 justify-center md:justify-start mb-5">
              <div className="w-[300px] md:w-[450px] h-14 md:h-20 bg-[#00bfff]/20 rounded-md" />
            </div>
            {/* "Computer Engineer" */}
            <div className="w-[180px] h-7 bg-white/5 rounded-md mx-auto md:mx-0" />
          </div>

          <div className="space-y-4 max-w-[700px] mx-auto md:mx-0 w-full mt-2">
            <div className="w-full h-4 bg-white/5 rounded-md" />
            <div className="w-11/12 h-4 bg-white/5 rounded-md" />
            <div className="w-4/5 h-4 bg-white/5 rounded-md" />
          </div>

          <div className="flex flex-wrap items-center gap-3 justify-center md:justify-start mt-4">
            <div className="w-[140px] h-[46px] bg-white/10 rounded-sm" />
            <div className="w-[170px] h-[46px] bg-[#00bfff]/20 rounded-full" />
            <div className="w-10 h-10 bg-[#0A66C2]/50 rounded-full" />
            <div className="w-10 h-10 bg-[#333]/50 rounded-full" />
          </div>

          {/* Tech Stack */}
          <div className="flex flex-col gap-4 mt-6 items-center md:items-start">
            <div className="w-[120px] h-6 bg-[#00bfff]/20 rounded-md" />
            <div className="flex flex-wrap gap-4">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="w-12 h-12 bg-white/5 rounded-full" />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right Navigation Skeleton Pattern */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 flex items-center gap-3">
        <div className="w-[70px] h-3 bg-white/10 rounded-sm" />
        <div className="w-[10px] h-[10px] rounded-full bg-[#00bfff]/50" />
      </div>

      {/* Bottom Scroll Indicator Skeleton */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-12 h-3 bg-white/10 rounded-sm" />
        <div className="w-px h-7 bg-white/20 rounded-full" />
      </div>
    </div>
  );
}
