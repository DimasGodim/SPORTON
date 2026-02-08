import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // backend local / VPS kamu
      {
        protocol: "https",
        hostname: "be-sporton.agunacourse.com",
        pathname: "/uploads/**",
      },

      // cloudinary
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },

      {
        protocol: "https",
        hostname: "sporton-be-production-29ef.up.railway.app",
        pathname: "/data/**",
      },
    ],
  },
};

export default nextConfig;
