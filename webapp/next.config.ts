import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",  // <=== THIS IS CRITICAL. If missing, you get a 404.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;