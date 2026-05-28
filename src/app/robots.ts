import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Bloquear rutas internas y de API — no tienen valor SEO y no deben indexarse
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://www.rovexca.ai/sitemap.xml",
  };
}
