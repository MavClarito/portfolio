import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // You can add other Next.js options here
  webpack: (config) => {
    return config; // fallback to webpack build if needed
  },
};

export default nextConfig;