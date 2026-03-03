import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      resolveAlias: {},
      rules: {},
    },
  },
  webpack: (config) => {
    return config; // fallback to webpack build
  },
};

export default nextConfig;