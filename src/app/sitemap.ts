import type { MetadataRoute } from "next";

const BASE_URL = "https://www.rovexca.ai";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/acerca-de`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    // -- Módulos --
    {
      url: `${BASE_URL}/agenda-medica-digital`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/expediente-clinico-electronico`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/control-ingresos-consultorio`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // -- Módulos futuros (agregar cuando existan las páginas) --
    // { url: `${BASE_URL}/seguimiento-pacientes-cronicos`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    // { url: `${BASE_URL}/programacion-cirugia`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    // -- Blog --
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog/reducir-inasistencias-consultorios-whatsapp`,
      lastModified: new Date("2026-05-28"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/blog/facturacion-cfdi-4-0-medicos-mexico`,
      lastModified: new Date("2026-05-28"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/blog/software-medico-vs-excel-consultorios`,
      lastModified: new Date("2026-05-28"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
