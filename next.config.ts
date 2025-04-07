import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  estlint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true
  }
};

export default nextConfig;
