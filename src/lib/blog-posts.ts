export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  categoryColor: string;
  categoryBg: string;
  readTime: number;
  publishedAt: string;
  excerpt: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "reducir-inasistencias-consultorios-whatsapp",
    title: "Cómo reducir inasistencias en consultorios médicos con recordatorios por WhatsApp",
    description:
      "Aprende cómo los recordatorios automáticos por WhatsApp pueden reducir las inasistencias y mejorar la organización de la agenda en tu consultorio médico.",
    category: "Agenda médica",
    categoryColor: "#2563eb",
    categoryBg: "#eff6ff",
    readTime: 6,
    publishedAt: "2026-05-28",
    excerpt:
      "Una cita no atendida es ingreso perdido y tiempo mal aprovechado. Gran parte de las inasistencias se pueden prevenir con una estrategia simple de recordatorios por WhatsApp.",
  },
  {
    slug: "facturacion-cfdi-4-0-medicos-mexico",
    title: "Facturación CFDI 4.0 para médicos en México: guía práctica para consultorios",
    description:
      "Guía práctica para médicos en México sobre cómo organizar la información del consultorio para facturar con CFDI 4.0: qué datos necesitas y buenas prácticas.",
    category: "Administración",
    categoryColor: "#d97706",
    categoryBg: "#fffbeb",
    readTime: 7,
    publishedAt: "2026-05-28",
    excerpt:
      "El CFDI 4.0 trajo nuevos requisitos para todos los emisores de facturas en México. Saber qué información necesitas y cómo organizarla puede marcar la diferencia entre un proceso ágil y horas perdidas cada mes.",
  },
  {
    slug: "software-medico-vs-excel-consultorios",
    title: "Software médico vs Excel: ventajas para administrar un consultorio",
    description:
      "Comparativa entre Excel y software médico para consultorios: agenda, expediente clínico e ingresos. Cuándo tiene sentido dar el salto al software especializado.",
    category: "Gestión",
    categoryColor: "#7c3aed",
    categoryBg: "#f5f3ff",
    readTime: 8,
    publishedAt: "2026-05-28",
    excerpt:
      "La mayoría de los médicos empiezan con Excel. Funciona al inicio, pero a medida que la práctica crece, las hojas de cálculo se convierten en un obstáculo silencioso.",
  },
];

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("es-MX", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
