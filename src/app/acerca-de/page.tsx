import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import PageBreadcrumb from "@/components/landing/PageBreadcrumb";

const OG_IMAGE = {
  url: "/images/og-image.png",
  alt: "Rovexca Health — Automatización médica inteligente en México",
  width: 1200,
  height: 630,
};

export const metadata: Metadata = {
  title: "Acerca de Rovexca Health — Automatización médica inteligente en México",
  description:
    "Conoce la plataforma que automatiza la operación de consultorios médicos en México. Agenda, expediente clínico e ingresos en un solo sistema.",
  keywords: [
    "acerca de Rovexca Health",
    "automatización consultorio médico México",
    "plataforma médica en la nube",
    "software médico WhatsApp",
    "misión Rovexca Health",
  ],
  alternates: {
    canonical: "https://www.rovexca.ai/acerca-de",
  },
  openGraph: {
    title: "Acerca de Rovexca Health — Automatización médica inteligente en México",
    description:
      "Conoce la plataforma que automatiza la operación de consultorios médicos en México. Agenda, expediente clínico e ingresos en un solo sistema.",
    type: "website",
    locale: "es_MX",
    siteName: "Rovexca Health",
    url: "https://www.rovexca.ai/acerca-de",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Acerca de Rovexca Health — Automatización médica inteligente en México",
    description:
      "Conoce la plataforma que automatiza la operación de consultorios médicos en México. Agenda, expediente clínico e ingresos en un solo sistema.",
    images: [OG_IMAGE.url],
  },
};

const problems = [
  {
    icon: "📞",
    title: "Llamadas interminables",
    desc: "Las recepcionistas pasan horas confirmando citas por teléfono, una tarea que debería ser automática.",
  },
  {
    icon: "❌",
    title: "Cancelaciones de última hora",
    desc: "Sin recordatorios oportunos, los pacientes olvidan o cancelan tarde, generando huecos en la agenda.",
  },
  {
    icon: "🗂️",
    title: "Expedientes dispersos",
    desc: "Notas en papel, archivos en Word y hojas de cálculo que hacen imposible el seguimiento real del paciente.",
  },
  {
    icon: "📉",
    title: "Sin visibilidad de ingresos",
    desc: "El médico no sabe cuánto generó, cuánto le deben ni qué pacientes no han regresado.",
  },
  {
    icon: "🔄",
    title: "Pacientes crónicos sin seguimiento",
    desc: "Los pacientes con padecimientos de largo plazo se pierden entre citas sin un sistema que los monitoree.",
  },
  {
    icon: "⏱️",
    title: "Tiempo en administración, no en medicina",
    desc: "El equipo dedica horas a tareas repetitivas que restan tiempo a lo que realmente importa: la atención médica.",
  },
];

const differentiators = [
  {
    color: "#2563eb",
    bg: "#eff6ff",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a9.87 9.87 0 00-5.031 1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26C.001 5.45 4.436 1.016 9.888 1.016c2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
      </svg>
    ),
    title: "Automatización por WhatsApp",
    desc: "Confirmaciones, recordatorios, cancelaciones y reagendamientos sin intervención humana. El canal que tus pacientes ya usan.",
  },
  {
    color: "#7c3aed",
    bg: "#f5f3ff",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10H12V2z" /><path d="M21.17 8H12V2.83" /><path d="M12 12l-7.07 7.07" />
      </svg>
    ),
    title: "Inteligencia artificial aplicada",
    desc: "IA integrada para automatizar flujos operativos, generar sugerencias de agenda y detectar patrones de asistencia.",
  },
  {
    color: "#059669",
    bg: "#ecfdf5",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Plataforma moderna y en la nube",
    desc: "Sin instalaciones. Sin servidores propios. Accede desde cualquier dispositivo, en cualquier lugar, desde el primer día.",
  },
  {
    color: "#0891b2",
    bg: "#ecfeff",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Indicadores y reportes en tiempo real",
    desc: "Tasa de asistencia, ingresos, pacientes activos e inactivos. Toda la operación del consultorio visible en un solo tablero.",
  },
  {
    color: "#d97706",
    bg: "#fffbeb",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: "Experiencia centrada en el paciente",
    desc: "Comunicación fluida, recordatorios precisos y seguimiento continuo para que el paciente sienta que su salud importa.",
  },
  {
    color: "#dc2626",
    bg: "#fef2f2",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
    title: "Operación centralizada",
    desc: "Agenda, expediente, ingresos, WhatsApp y seguimiento en un solo sistema. Sin saltar entre apps ni perder información.",
  },
];

export default function AcercaDePage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 68 }}>
        <PageBreadcrumb items={[
          { name: "Inicio", href: "/" },
          { name: "Acerca de Rovexca Health", href: "/acerca-de" },
        ]} />

        {/* ── Hero ─────────────────────────────────────────────────── */}
        <section style={{ background: "#080f1f", padding: "88px 1.5rem 80px", textAlign: "center" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <span style={{
              display: "inline-block", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em",
              textTransform: "uppercase", color: "#60a5fa",
              background: "rgba(96,165,250,0.12)", padding: "6px 16px", borderRadius: 999,
              marginBottom: 28,
            }}>
              Acerca de Rovexca Health
            </span>
            <h1 style={{
              fontSize: "clamp(2rem, 5vw, 3.25rem)", fontWeight: 800, color: "#fff",
              lineHeight: 1.1, marginBottom: 24, letterSpacing: "-0.025em",
            }}>
              Transformando la operación médica<br />
              <span style={{ color: "#60a5fa" }}>con automatización inteligente.</span>
            </h1>
            <p style={{ fontSize: "clamp(16px, 2vw, 19px)", color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: 40, maxWidth: 620, margin: "0 auto 40px" }}>
              Rovexca Health es la plataforma SaaS diseñada para consultorios médicos y clínicas en México que quieren crecer sin aumentar la carga operativa.
            </p>
            <a
              href="/#demo"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "linear-gradient(135deg, #497cff 0%, #0053db 100%)",
                color: "#fff", fontWeight: 600, fontSize: 15,
                padding: "0.85rem 2rem", borderRadius: 12,
                textDecoration: "none",
                boxShadow: "0 4px 24px rgba(37,99,235,0.4)",
              }}
            >
              Solicitar demo
              <ArrowRight size={16} />
            </a>
          </div>
        </section>

        {/* ── Misión y Visión ───────────────────────────────────────── */}
        <section style={{ background: "#f7f9fb", padding: "80px 1.5rem" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 32 }}>
              {/* Misión */}
              <div style={{
                background: "#fff", borderRadius: 20, padding: "40px 36px",
                boxShadow: "0 1px 3px rgba(0,0,0,0.06), 0 8px 32px rgba(0,23,75,0.06)",
                borderTop: "4px solid #2563eb",
              }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 14, background: "#eff6ff",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 20, fontSize: 22,
                }}>
                  🎯
                </div>
                <h2 style={{ fontSize: 22, fontWeight: 800, color: "#00174b", marginBottom: 14 }}>
                  Nuestra misión
                </h2>
                <p style={{ fontSize: 16, color: "#4b5563", lineHeight: 1.75 }}>
                  Hacer que cada consultorio y clínica en México opere con la misma eficiencia que los mejores sistemas de salud del mundo — sin complejidad, sin grandes equipos de IT y sin meses de implementación.
                </p>
                <p style={{ fontSize: 16, color: "#4b5563", lineHeight: 1.75, marginTop: 14 }}>
                  Creemos que un médico debe enfocarse en sus pacientes, no en tareas administrativas repetitivas que una plataforma inteligente puede manejar por él.
                </p>
              </div>

              {/* Visión */}
              <div style={{
                background: "#fff", borderRadius: 20, padding: "40px 36px",
                boxShadow: "0 1px 3px rgba(0,0,0,0.06), 0 8px 32px rgba(0,23,75,0.06)",
                borderTop: "4px solid #7c3aed",
              }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 14, background: "#f5f3ff",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 20, fontSize: 22,
                }}>
                  🚀
                </div>
                <h2 style={{ fontSize: 22, fontWeight: 800, color: "#00174b", marginBottom: 14 }}>
                  Nuestra visión
                </h2>
                <p style={{ fontSize: 16, color: "#4b5563", lineHeight: 1.75 }}>
                  Ser la plataforma líder de automatización médica en Latinoamérica — el sistema operativo de los consultorios del futuro: completamente digital, impulsado por IA y centrado en la experiencia del paciente.
                </p>
                <p style={{ fontSize: 16, color: "#4b5563", lineHeight: 1.75, marginTop: 14 }}>
                  Un futuro donde ningún médico pierda tiempo en llamadas, papeles o procesos manuales que ya pueden ser automáticos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Problema ─────────────────────────────────────────────── */}
        <section style={{ background: "#fff", padding: "80px 1.5rem" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <span style={{
                display: "inline-block", fontSize: 12, fontWeight: 700, letterSpacing: "0.08em",
                textTransform: "uppercase", color: "#dc2626",
                background: "#fef2f2", padding: "5px 14px", borderRadius: 999,
                marginBottom: 16,
              }}>
                El problema
              </span>
              <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.25rem)", fontWeight: 800, color: "#0f172a", lineHeight: 1.15, marginBottom: 14 }}>
                La operación médica está rota.
              </h2>
              <p style={{ fontSize: 17, color: "#6b7280", lineHeight: 1.65, maxWidth: 540, margin: "0 auto" }}>
                La mayoría de los consultorios en México siguen operando con procesos manuales que consumen tiempo, generan errores y afectan la experiencia del paciente.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
              {problems.map((p) => (
                <div
                  key={p.title}
                  style={{
                    background: "#f8fafc", borderRadius: 16, padding: "28px 24px",
                    border: "1.5px solid #f1f5f9",
                    display: "flex", gap: 16, alignItems: "flex-start",
                  }}
                >
                  <span style={{
                    fontSize: 26, flexShrink: 0,
                    width: 48, height: 48, display: "flex", alignItems: "center", justifyContent: "center",
                    background: "#fff", borderRadius: 12, border: "1.5px solid #e5e7eb",
                  }}>
                    {p.icon}
                  </span>
                  <div>
                    <h3 style={{ fontSize: 15, fontWeight: 700, color: "#0f172a", marginBottom: 6 }}>{p.title}</h3>
                    <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.65 }}>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Diferenciadores ───────────────────────────────────────── */}
        <section style={{ background: "#f0f7ff", padding: "80px 1.5rem", borderTop: "1px solid #dbeafe" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <span style={{
                display: "inline-block", fontSize: 12, fontWeight: 700, letterSpacing: "0.08em",
                textTransform: "uppercase", color: "#2563eb",
                background: "#dbeafe", padding: "5px 14px", borderRadius: 999,
                marginBottom: 16,
              }}>
                Por qué Rovexca Health
              </span>
              <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.25rem)", fontWeight: 800, color: "#0f172a", lineHeight: 1.15, marginBottom: 14 }}>
                Lo que nos hace diferentes.
              </h2>
              <p style={{ fontSize: 17, color: "#6b7280", lineHeight: 1.65, maxWidth: 520, margin: "0 auto" }}>
                No somos solo un sistema de agenda. Somos la plataforma operativa completa para el consultorio médico moderno.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
              {differentiators.map((d) => (
                <div
                  key={d.title}
                  style={{
                    background: "#fff", borderRadius: 16, padding: "28px 24px",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.05), 0 4px 16px rgba(0,23,75,0.05)",
                    border: "1.5px solid #e8f0fe",
                  }}
                >
                  <div style={{
                    width: 44, height: 44, borderRadius: 12, background: d.bg,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: d.color, marginBottom: 16, flexShrink: 0,
                  }}>
                    {d.icon}
                  </div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: "#0f172a", marginBottom: 8 }}>{d.title}</h3>
                  <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.65 }}>{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Confianza ─────────────────────────────────────────────── */}
        <section style={{ background: "#00174b", padding: "80px 1.5rem", textAlign: "center" }}>
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <div style={{
              width: 56, height: 56, borderRadius: 16, background: "rgba(96,165,250,0.15)",
              display: "flex", alignItems: "center", justifyContent: "center",
              margin: "0 auto 28px", fontSize: 26,
            }}>
              🏥
            </div>
            <h2 style={{
              fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", fontWeight: 800, color: "#fff",
              lineHeight: 1.2, marginBottom: 20,
            }}>
              Diseñado para consultorios y clínicas<br />
              <span style={{ color: "#60a5fa" }}>que quieren crecer sin más carga operativa.</span>
            </h2>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,0.6)", lineHeight: 1.75, marginBottom: 16 }}>
              Rovexca Health no es un software genérico adaptado para salud. Es una plataforma construida desde cero pensando en el flujo real de un consultorio médico: la relación con el paciente, los tiempos de agenda, los procesos repetitivos y la necesidad de información clara para tomar mejores decisiones.
            </p>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,0.6)", lineHeight: 1.75 }}>
              Médicos de todo México confían en Rovexca Health para operar con más control, menos estrés y mejores resultados — desde el primer día.
            </p>

            {/* Stats */}
            <div style={{ display: "flex", justifyContent: "center", gap: 48, marginTop: 48, flexWrap: "wrap" }}>
              {[
                { val: "+500", label: "consultorios activos" },
                { val: "96%", label: "tasa de asistencia promedio" },
                { val: "-3h", label: "menos trabajo administrativo al día" },
              ].map((s) => (
                <div key={s.label} style={{ textAlign: "center" }}>
                  <p style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1 }}>{s.val}</p>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", marginTop: 6, fontWeight: 500 }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA Final ─────────────────────────────────────────────── */}
        <section style={{ background: "#f7f9fb", padding: "80px 1.5rem", textAlign: "center" }}>
          <div style={{ maxWidth: 560, margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(1.5rem, 3.5vw, 2rem)", fontWeight: 800, color: "#0f172a", marginBottom: 16, lineHeight: 1.2 }}>
              ¿Listo para transformar tu consultorio?
            </h2>
            <p style={{ fontSize: 16, color: "#6b7280", lineHeight: 1.7, marginBottom: 32 }}>
              Únete a cientos de médicos que ya automatizaron su operación con Rovexca Health. Sin contrato, sin instalación y con soporte en español desde el primer día.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
              <a
                href="/#demo"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "linear-gradient(135deg, #497cff 0%, #0053db 100%)",
                  color: "#fff", fontWeight: 600, fontSize: 15,
                  padding: "0.85rem 2rem", borderRadius: 12,
                  textDecoration: "none",
                  boxShadow: "0 4px 20px rgba(37,99,235,0.3)",
                }}
              >
                Solicitar demo
                <ArrowRight size={16} />
              </a>
              <a
                href="https://app.rovexca.ai"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "#fff", color: "#374151", fontWeight: 600, fontSize: 15,
                  padding: "0.85rem 2rem", borderRadius: 12,
                  textDecoration: "none", border: "1.5px solid #e5e7eb",
                }}
              >
                Iniciar sesión
              </a>
            </div>
            <p style={{ fontSize: 13, color: "#9ca3af", marginTop: 20 }}>
              Sin tarjeta de crédito · Sin compromiso · Soporte en español
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}