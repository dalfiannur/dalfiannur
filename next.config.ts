import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
      },
      {
        protocol: "https",
        hostname: "loremflickr.com",
        port: "",
      },
      {
        protocol: 'https',
        hostname: "jsdelivr.net",
      }
    ],
  },
};

export default nextConfig;
