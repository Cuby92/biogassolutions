import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    qualities: [50, 60, 80, 90, 100]
  }
};

export default nextConfig;
