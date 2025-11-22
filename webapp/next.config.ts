import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",  // <=== THIS IS MANDATORY FOR GITHUB PAGES
  images: {
    unoptimized: true, // <=== THIS IS MANDATORY TO PREVENT BUILD ERRORS
  },
};

export default nextConfig;