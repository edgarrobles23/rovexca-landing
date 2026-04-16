import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // SSR mode (default) — required for API routes (/api/lead, /api/trial)
  // Do NOT set output: 'export' — that would break server-side functionality

  // Turbopack (Next.js 16 default) — no webpack config needed
  turbopack: {},

  images: {
    // Add external image domains here if you use next/image with remote URLs
    // remotePatterns: [{ protocol: "https", hostname: "example.com" }],
  },
};

export default nextConfig;
