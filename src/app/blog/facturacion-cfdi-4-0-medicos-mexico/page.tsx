import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import PageBreadcrumb from "@/components/landing/PageBreadcrumb";
import { formatDate } from "@/lib/blog-posts";

const POST = {
  slug: "facturacion-cfdi-4-0-medicos-mexico",
  title: "Facturación CFDI 4.0 para médicos en México: guía práctica para consultorios",
  description:
    "Guía práctica para médicos en México sobre cómo organizar la información del consultorio para facturar con CFDI 4.0: qué datos necesitas y buenas prácticas.",
  publishedAt: "2026-05-28",
  readTime: 7,
  category: "Administración",
};

const blogPostingSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: POST.title,
  description: POST.description,
  image: "https://www.rovexca.ai/images/og-image.png",
  author: { "@type": "Organization", name: "Rovexca Health", url: "https://www.rovexca.ai" },
  publisher: {
    "@type": "Organization",
    name: "Rovexca Health",
    logo: { "@type": "ImageObject", url: "https://www.rovexca.ai/images/logo.png" },
  },
  datePublished: POST.publishedAt,
  dateModified: POST.publishedAt,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `https://www.rovexca.ai/blog/${POST.slug}`,
  },
  url: `https://www.rovexca.ai/blog/${POST.slug}`,
};

export const metadata: Metadata = {
  title: `${POST.title} | Rovexca Health`,
  description: POST.description,
  keywords: [
    "CFDI 4.0 médicos México",
    "facturación médica México",
    "cómo facturar honorarios médicos",
    "CFDI consultorios",
    "organizar información fiscal consultorio",
  ],
  alternates: { canonical: `https://www.rovexca.ai/blog/${POST.slug}` },
  openGraph: {
    title: POST.title,
    description: POST.description,
    type: "article",
    locale: "es_MX",
    siteName: "Rovexca Health",
    url: `https://www.rovexca.ai/blog/${POST.slug}`,
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: POST.title }],
    publishedTime: POST.publishedAt,
  },
  twitter: {
    card: "summary_large_image",
    title: POST.title,
    description: POST.description,
    images: ["/images/og-image.png"],
  },
};

// Shared prose styles to keep JSX readable
const p: React.CSSProperties = { fontSize: 16, color: "#374151", lineHeight: 1.8, marginBottom: 20 };
const h2: React.CSSProperties = { fontSize: "clamp(1.2rem, 2.5vw, 1.4rem)", fontWeight: 700, color: "#0f172a", lineHeight: 1.25, marginBottom: 14, marginTop: 44 };
const h3: React.CSSProperties = { fontSize: "1.05rem", fontWeight: 700, color: "#0f172a", lineHeight: 1.3, marginBottom: 10, marginTop: 28 };
const ul: React.CSSProperties = { listStyle: "none", padding: 0, margin: "0 0 20px", display: "flex", flexDirection: "column", gap: 10 };

function Li({ children }: { children: React.ReactNode }) {
  return (
    <li style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
      <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#2563eb", flexShrink: 0, marginTop: 8 }} />
      <span style={{ fontSize: 16, color: "#374151", lineHeight: 1.75 }}>{children}</span>
    </li>
  );
}

function InlineCTA({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <div style={{
      background: "#eff6ff", border: "1.5px solid #bfdbfe",
      borderRadius: 14, padding: "20px 24px", margin: "32px 0",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      gap: 16, flexWrap: "wrap",
    }}>
      <p style={{ fontSize: 15, color: "#1e40af", fontWeight: 600, margin: 0, lineHeight: 1.5 }}>{children}</p>
      <a href={href} className="btn-primary" style={{ fontSize: 14, flexShrink: 0 }}>
        Ver más →
      </a>
    </div>
  );
}

export default function CFDIArticlePage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 68 }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
        />
        <PageBreadcrumb items={[
          { name: "Inicio", href: "/" },
          { name: "Blog", href: "/blog" },
          { name: "CFDI 4.0 para médicos", href: `/blog/${POST.slug}` },
        ]} />

        {/* ── Hero ──────────────────────────────────────────────────── */}
        <section style={{ background: "#080f1f", padding: "64px 1.5rem 56px" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <span style={{
                fontSize: 11, fontWeight: 700, color: "#d97706",
                background: "rgba(217,119,6,0.15)", padding: "4px 12px",
                borderRadius: 999, textTransform: "uppercase", letterSpacing: "0.06em",
              }}>
                {POST.category}
              </span>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.35)" }}>
                {POST.readTime} min de lectura · {formatDate(POST.publishedAt)}
              </span>
            </div>
            <h1 style={{
              fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 800, color: "#fff",
              lineHeight: 1.15, letterSpacing: "-0.02em",
            }}>
              {POST.title}
            </h1>
          </div>
        </section>

        {/* ── Artículo ──────────────────────────────────────────────── */}
        <article style={{ background: "#fff", padding: "56px 1.5rem 80px" }}>
          <div style={{ maxWidth: 720, margin: "0 auto" }}>

            {/* Tabla de contenido */}
            <nav style={{
              background: "#f8fafc", border: "1.5px solid #e5e7eb",
              borderRadius: 14, padding: "20px 24px", marginBottom: 40,
            }}>
              <p style={{ fontSize: 12, fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 12 }}>
                Contenido del artículo
              </p>
              <ol style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                {[
                  ["¿Qué cambió con CFDI 4.0?", "#que-cambio"],
                  ["Información del paciente que necesitas", "#informacion-paciente"],
                  ["Conceptos más usados al facturar", "#conceptos-facturacion"],
                  ["Errores frecuentes al facturar honorarios", "#errores-frecuentes"],
                  ["Cómo organizar la información de tu consultorio", "#como-organizar"],
                ].map(([label, href]) => (
                  <li key={href}>
                    <a href={href} style={{ fontSize: 14, color: "#2563eb", textDecoration: "none", fontWeight: 500 }}>
                      {label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <p style={p}>
              El CFDI 4.0 es la versión vigente del Comprobante Fiscal Digital por Internet en México. Desde su implementación obligatoria, todos los contribuyentes que emiten facturas electrónicas — incluyendo los médicos que ofrecen recibos fiscales a sus pacientes — deben cumplir con nuevos requisitos de información.
            </p>
            <p style={p}>
              Para muchos consultorios, el proceso de facturación sigue siendo manual, tardado y propenso a errores. No porque sea complicado en sí mismo, sino porque la información del paciente no está organizada cuando se necesita. Esta guía explica qué necesitas saber y cómo simplificar el proceso.
            </p>

            <h2 id="que-cambio" style={h2}>¿Qué cambió con CFDI 4.0 para los profesionales de la salud?</h2>
            <p style={p}>
              La versión 4.0 del CFDI, vigente desde principios de 2022, introdujo cambios importantes para todos los emisores de facturas en México. Los más relevantes para los médicos son:
            </p>
            <ul style={ul}>
              <Li><strong>Nombre y domicilio fiscal del receptor son obligatorios.</strong> Ya no basta con el RFC del paciente; ahora también se requiere su régimen fiscal y código postal de domicilio fiscal tal como aparecen en el SAT.</Li>
              <Li><strong>Validación más estricta del receptor.</strong> Los datos del paciente deben coincidir exactamente con lo registrado ante el SAT, de lo contrario la factura puede ser rechazada o generar problemas al receptor.</Li>
              <Li><strong>Uso del CFDI debe ser el correcto.</strong> El médico debe indicar para qué usará el receptor esa factura. En consultas médicas, el código más común es D07 (Médicos, dentistas y hospitales), pero puede variar según el tipo de servicio y el régimen del paciente.</Li>
            </ul>
            <p style={p}>
              Estos cambios no complican el proceso de facturación en sí, pero sí hacen más importante contar con los datos del paciente completos y correctos antes de emitir la factura.
            </p>

            <h2 id="informacion-paciente" style={h2}>Información del paciente que necesitas para facturar</h2>
            <p style={p}>
              Antes de poder emitir un CFDI por honorarios médicos, necesitas que el paciente te proporcione los siguientes datos exactamente como los tiene registrados ante el SAT:
            </p>
            <ul style={ul}>
              <Li><strong>RFC completo</strong> — 13 caracteres para personas físicas, 12 para personas morales.</Li>
              <Li><strong>Nombre o razón social</strong> — tal como aparece en la constancia de situación fiscal del SAT.</Li>
              <Li><strong>Régimen fiscal</strong> — el régimen bajo el cual tributa el receptor (por ejemplo: 605 - Sueldos y Salarios, 612 - Personas Físicas con Actividades Empresariales).</Li>
              <Li><strong>Código postal del domicilio fiscal</strong> — no la dirección completa, solo el C.P. registrado ante el SAT.</Li>
              <Li><strong>Uso del CFDI</strong> — indicado por el receptor (en honorarios médicos suele ser D07 para deducción de gastos médicos).</Li>
            </ul>
            <p style={p}>
              El error más común es pedir estos datos en el mostrador, anotarlos en un papel y luego no encontrarlos cuando llega el momento de facturar. La solución es registrarlos en un sistema desde la primera visita del paciente.
            </p>

            <h2 id="conceptos-facturacion" style={h2}>Conceptos más usados en facturas de honorarios médicos</h2>
            <p style={p}>
              Para emitir correctamente el CFDI, también necesitas definir los conceptos a facturar. El SAT tiene un catálogo de claves de productos y servicios. Las más frecuentes en consultorios médicos son:
            </p>
            <ul style={ul}>
              <Li><strong>85101600</strong> — Servicios médicos de medicina general (consultas de médico general).</Li>
              <Li><strong>85101500</strong> — Servicios de medicina especializada.</Li>
              <Li><strong>85131501</strong> — Servicios de laboratorio clínico (si aplica).</Li>
            </ul>
            <p style={p}>
              La unidad de medida para servicios suele ser E48 (Unidad de servicio). Consulta siempre con tu contador o PAC autorizado para confirmar las claves correctas según tu especialidad y tipo de servicio.
            </p>

            <h2 id="errores-frecuentes" style={h2}>Errores frecuentes al facturar honorarios médicos</h2>
            <p style={p}>
              Basándonos en las situaciones más comunes que enfrentan los consultorios, estos son los errores que más retrasan o complican el proceso de facturación:
            </p>
            <ul style={ul}>
              <Li><strong>No tener los datos fiscales del paciente al momento de la consulta.</strong> El paciente los trae en la siguiente visita o los envía días después, lo que retrasa la emisión y puede causar problemas si ya pasó el período fiscal.</Li>
              <Li><strong>Registrar el RFC de forma incorrecta.</strong> Un solo carácter equivocado invalida la factura. Es importante pedir la constancia de situación fiscal directamente, no copiar de memoria.</Li>
              <Li><strong>Usar el uso de CFDI incorrecto.</strong> El receptor puede rechazar la factura o no poder deducirla si el uso no corresponde a lo que espera.</Li>
              <Li><strong>No llevar un registro de facturas emitidas por consulta.</strong> Sin un registro claro, es difícil conciliar ingresos con facturas emitidas al final del mes.</Li>
              <Li><strong>Emitir fuera del período correspondiente.</strong> El CFDI debe emitirse en el período fiscal en que se prestó el servicio.</Li>
            </ul>

            <h2 id="como-organizar" style={h2}>Cómo organizar la información de tu consultorio para facilitar la facturación</h2>
            <p style={p}>
              El proceso de facturación se vuelve ágil cuando la información ya está organizada antes de que llegue el momento de facturar. Estas son las prácticas que marcan la diferencia:
            </p>
            <h3 style={h3}>1. Captura los datos fiscales del paciente en su primera visita</h3>
            <p style={p}>
              Desde el registro del paciente, incluye un campo para los datos fiscales. Si el paciente los tiene en ese momento, perfecto. Si no, puedes pedírselos en la siguiente consulta. Lo importante es que queden guardados en su expediente para futuras facturas.
            </p>
            <h3 style={h3}>2. Lleva un registro de ingresos por consulta</h3>
            <p style={p}>
              Registrar cuánto cobró, a qué paciente y en qué fecha te permite saber qué consultas deben tener factura al final del período. Sin este registro, es fácil perder el control de las facturas pendientes.
            </p>
            <h3 style={h3}>3. Separa a los pacientes que requieren factura</h3>
            <p style={p}>
              No todos los pacientes solicitan factura. Identificar cuáles sí te permite priorizar la captura de sus datos fiscales y evitar sorpresas a fin de mes.
            </p>

            <InlineCTA href="/control-ingresos-consultorio">
              Rovexca Health te ayuda a registrar los ingresos de tu consultorio y los datos de tus pacientes en un solo lugar, con la información siempre lista para cuando necesites facturar.
            </InlineCTA>

            <p style={p}>
              Organizar la información de tu consultorio no solo facilita la facturación: también te da visibilidad sobre los ingresos reales, las consultas atendidas y los pagos pendientes de cada mes. Eso es más control con menos esfuerzo.
            </p>
            <p style={p}>
              La facturación CFDI 4.0 no tiene que ser un dolor de cabeza si tienes los datos correctos disponibles cuando los necesitas. La clave está en capturarlos desde el primer contacto con el paciente y guardarlos en un lugar accesible.
            </p>

            {/* CTA final */}
            <div style={{
              background: "#0f172a", borderRadius: 16,
              padding: "32px 28px", marginTop: 48, textAlign: "center",
            }}>
              <p style={{ fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 10, lineHeight: 1.3 }}>
                Organiza los ingresos de tu consultorio con Rovexca Health
              </p>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", marginBottom: 24, lineHeight: 1.65 }}>
                Registra honorarios, cobros y datos de pacientes en un solo sistema. Toda la información lista cuando la necesitas.
              </p>
              <a href="/control-ingresos-consultorio" className="btn-primary" style={{ fontSize: 15 }}>
                Ver control de ingresos →
              </a>
            </div>

          </div>
        </article>

      </main>
      <Footer />
    </>
  );
}
