import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/mysite",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
