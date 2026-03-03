import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  webpack: (config) => {
    return config; // fallback to webpack build
  },
};

export default nextConfig;