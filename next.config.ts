import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "armor-x.com" },
      { protocol: "https", hostname: "encrypted-tbn0.gstatic.com" },
      { protocol: "https", hostname: "hips.hearstapps.com" },
      { protocol: "https", hostname: "product.hstatic.net" },
      { protocol: "https", hostname: "uagvietnam.com" },
      { protocol: "https", hostname: "antuan.vn" },
    ],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;
