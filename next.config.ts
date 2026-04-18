import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // SSR mode (default) — required for API routes (/api/lead, /api/trial)
  // Do NOT set output: 'export' — that would break server-side functionality

  // Turbopack (Next.js 16 default) — no webpack config needed
  turbopack: {},

  // Bake server-only env vars at build time so Amplify SSR Lambda picks them up.
  // Amplify injects these during `npm run build`; without this, process.env may
  // be undefined inside the Lambda runtime.
  env: {
    BACKEND_URL: process.env.BACKEND_URL ?? "https://app.rovexca.ai",
  },

  images: {
    // Add external image domains here if you use next/image with remote URLs
    // remotePatterns: [{ protocol: "https", hostname: "example.com" }],
  },
};

export default nextConfig;
