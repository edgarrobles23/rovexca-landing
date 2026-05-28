import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import TrialButton from "@/components/landing/TrialButton";
import ModulePageFAQ from "@/components/landing/ModulePageFAQ";
import PageBreadcrumb from "@/components/landing/PageBreadcrumb";

const OG_IMAGE = {
  url: "/images/og-image.png",
  alt: "Control de Ingresos para Consultorios — Rovexca Health",
  width: 1200,
  height: 630,
};

export const metadata: Metadata = {
  title: "Control de Ingresos para Consultorios Médicos | Rovexca Health",
  description:
    "Control financiero para consultorios médicos en México. Registra honorarios, cobros pendientes e ingresos. Sin Excel ni cuadernos. Todo en la nube.",
  keywords: [
    "control de ingresos consultorio médico",
    "administración financiera consultorio",
    "control de pagos médicos",
    "sistema administrativo para consultorios",
    "control financiero consultorio México",
    "registro de honorarios médicos",
  ],
  alternates: {
    canonical: "https://www.rovexca.ai/control-ingresos-consultorio",
  },
  openGraph: {
    title: "Control de Ingresos para Consultorios Médicos | Rovexca Health",
    description:
      "Control financiero para consultorios médicos en México. Registra honorarios, cobros pendientes e ingresos. Sin Excel ni cuadernos. Todo en la nube.",
    type: "website",
    locale: "es_MX",
    siteName: "Rovexca Health",
    url: "https://www.rovexca.ai/control-ingresos-consultorio",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Control de Ingresos para Consultorios Médicos | Rovexca Health",
    description:
      "Control financiero para consultorios médicos en México. Registra honorarios, cobros pendientes e ingresos. Sin Excel ni cuadernos. Todo en la nube.",
    images: [OG_IMAGE.url],
  },
};

const benefits = [
  {
    icon: "💰",
    color: "#16a34a",
    bg: "#f0fdf4",
    title: "Registro de honorarios por consulta",
    desc: "Registra el monto cobrado en cada consulta directamente vinculado al paciente y la fecha. Un historial financiero claro y organizado.",
  },
  {
    icon: "⏳",
    color: "#d97706",
    bg: "#fffbeb",
    title: "Control de cobros y pagos pendientes",
    desc: "Identifica de inmediato qué pacientes tienen pagos pendientes y cuánto llevan acumulado. Nunca más un cobro olvidado.",
  },
  {
    icon: "🧾",
    color: "#2563eb",
    bg: "#eff6ff",
    title: "Datos fiscales del paciente organizados",
    desc: "Guarda los datos fiscales de cada paciente una sola vez. Toda la información que necesitas para facturar, siempre disponible y lista para usar. La generación de CFDI está disponible como complemento adicional.",
  },
  {
    icon: "📊",
    color: "#7c3aed",
    bg: "#f5f3ff",
    title: "Visibilidad financiera del consultorio",
    desc: "Consulta el total de ingresos del mes, el histórico por período y el volumen de consultas atendidas. Toda la información en un solo lugar.",
  },
  {
    icon: "👥",
    color: "#0891b2",
    bg: "#ecfeff",
    title: "Control por médico en clínicas",
    desc: "En clínicas con varios médicos, cada uno tiene su propio registro de ingresos. El administrador puede ver la actividad financiera de todo el equipo.",
  },
  {
    icon: "🔗",
    color: "#dc2626",
    bg: "#fef2f2",
    title: "Conectado con la agenda médica",
    desc: "Cada cita atendida puede registrarse como ingreso de forma directa. La información clínica y financiera del consultorio en un solo sistema.",
  },
];

const useCases = [
  {
    title: "Médico que no sabe cuánto generó en el mes",
    desc: "Con Rovexca Billing, el médico tiene visibilidad real de sus ingresos totales, desglosados por consulta y período, sin depender de Excel ni de cálculos manuales.",
  },
  {
    title: "Consultorio con pacientes que pagan a crédito",
    desc: "Registra cobros parciales y lleva el control de pagos pendientes por paciente. Saber quién te debe y cuánto es tan sencillo como buscar el nombre.",
  },
  {
    title: "Administrador de clínica con varios médicos",
    desc: "Gestiona el control de ingresos de todo el equipo desde una sola plataforma. Cada médico ve sus propios números; el administrador tiene la vista general.",
  },
];

const faqs = [
  {
    q: "¿Qué tipo de ingresos puedo registrar en Rovexca Billing?",
    a: "Puedes registrar los honorarios de cada consulta, cobros parciales, pagos completados y cualquier concepto relacionado con la actividad de tu consultorio. Cada registro queda vinculado al paciente y a la fecha de atención.",
  },
  {
    q: "¿Rovexca Billing genera facturas CFDI?",
    a: "La generación de facturas CFDI está disponible como complemento adicional al plan base. El plan incluye el registro y organización de los datos fiscales de tus pacientes, de modo que cuando necesites facturar tengas toda la información lista. Consulta con nuestro equipo para activar la facturación CFDI.",
  },
  {
    q: "¿Puedo ver el historial de pagos de un paciente específico?",
    a: "Sí. Puedes consultar el historial de cobros de cualquier paciente: cuánto ha pagado, cuándo y si tiene algún pago pendiente. Es una de las vistas más útiles para consultorios donde los pacientes tienen cuentas abiertas.",
  },
  {
    q: "¿El control de ingresos funciona para clínicas con varios médicos?",
    a: "Sí. En una clínica con múltiples médicos, cada uno puede tener su propio registro de ingresos. El administrador tiene acceso a la vista financiera de todo el equipo desde una sola cuenta.",
  },
  {
    q: "¿Cómo se relacionan los ingresos con la agenda médica?",
    a: "La agenda y el módulo de control de ingresos están integrados en la misma plataforma. Cuando una cita es atendida, puedes registrar el ingreso correspondiente de forma directa, vinculado al paciente y a la cita de ese día.",
  },
  {
    q: "¿Necesito conocimientos contables para usar Rovexca Billing?",
    a: "No. Rovexca Billing está diseñado para que cualquier médico o administrador de consultorio lo use sin formación contable. El registro de ingresos y el control de cobros son operaciones simples e intuitivas desde el primer día.",
  },
];

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function ControlIngresosConsultorioPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 68 }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
        />
        <PageBreadcrumb items={[
          { name: "Inicio", href: "/" },
          { name: "Control de Ingresos para Consultorios", href: "/control-ingresos-consultorio" },
        ]} />

        {/* ── Hero ──────────────────────────────────────────────────── */}
        <section style={{ background: "#080f1f", padding: "88px 1.5rem 80px", textAlign: "center" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <span style={{
              display: "inline-block", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em",
              textTransform: "uppercase", color: "#fcd34d",
              background: "rgba(217,119,6,0.15)", padding: "6px 16px", borderRadius: 999,
              marginBottom: 28,
            }}>
              Rovexca Billing
            </span>
            <h1 style={{
              fontSize: "clamp(1.9rem, 5vw, 3.1rem)", fontWeight: 800, color: "#fff",
              lineHeight: 1.1, marginBottom: 24, letterSpacing: "-0.025em",
            }}>
              Control de ingresos para
              <br />
              <span style={{ color: "#fcd34d" }}>tu consultorio médico</span>
            </h1>
            <p style={{
              fontSize: "clamp(16px, 2vw, 18px)", color: "rgba(255,255,255,0.65)",
              lineHeight: 1.7, marginBottom: 40, maxWidth: 600, margin: "0 auto 40px",
            }}>
              Registra honorarios, cobros y pagos pendientes por consulta. Toda la información financiera de tu consultorio organizada en un solo lugar — sin hojas de cálculo, sin cuadernos.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
              <TrialButton style={{ fontSize: 15, padding: "0.85rem 2rem" }} />
              <a href="/#demo" className="btn-secondary" style={{ fontSize: 15, padding: "0.85rem 2rem" }}>
                Solicitar demo
              </a>
            </div>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.3)", marginTop: 20 }}>
              Sin tarjeta de crédito · Sin compromiso · Soporte en español
            </p>
          </div>
        </section>

        {/* ── El problema ───────────────────────────────────────────── */}
        <section style={{ background: "#fff", padding: "80px 1.5rem" }}>
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 48, alignItems: "center" }} className="lg:grid-cols-2">
              <div>
                <span className="badge" style={{ marginBottom: 20 }}>El problema</span>
                <h2 className="heading" style={{ fontSize: "clamp(1.5rem, 3vw, 2.1rem)", marginBottom: 20 }}>
                  La mayoría de los médicos
                  <br />no saben cuánto generaron este mes.
                </h2>
                <p style={{ fontSize: 16, color: "#6b7280", lineHeight: 1.7, marginBottom: 24 }}>
                  Excel, cuadernos, notas en el celular o simplemente ningún registro: así llevan las finanzas miles de consultorios médicos en México. Una realidad que genera pérdidas, cobros olvidados y decisiones de negocio sin información real.
                </p>
                <p style={{ fontSize: 16, color: "#6b7280", lineHeight: 1.7 }}>
                  Un médico que no conoce sus ingresos reales no puede planificar, no sabe si le están quedando pagos pendientes y difícilmente puede optimizar su práctica clínica. El control financiero no es lujo; es parte básica de operar un consultorio profesionalmente.
                </p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  { icon: "📉", title: "Sin visibilidad real de ingresos", desc: "El médico no sabe cuánto generó esta semana, este mes o en el último trimestre. Las decisiones se toman sin información financiera concreta." },
                  { icon: "💳", title: "Cobros pendientes sin rastrear", desc: "Pacientes que pagaron a medias o quedaron a deber y nadie lleva el control. Ingresos que se pierden porque no hay sistema para recuperarlos." },
                  { icon: "🗂️", title: "Excel o cuadernos que no escalan", desc: "Los registros manuales se vuelven caóticos a medida que crece la práctica. Sin estructura digital, la información financiera es imposible de auditar." },
                ].map((p) => (
                  <div key={p.title} style={{
                    display: "flex", gap: 16, padding: "20px 22px",
                    background: "#f8fafc", borderRadius: 14,
                    border: "1.5px solid #f1f5f9",
                  }}>
                    <span style={{
                      fontSize: 22, width: 44, height: 44, flexShrink: 0,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb",
                    }}>{p.icon}</span>
                    <div>
                      <p style={{ fontSize: 15, fontWeight: 700, color: "#0f172a", marginBottom: 5 }}>{p.title}</p>
                      <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.6 }}>{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Cómo funciona ─────────────────────────────────────────── */}
        <section style={{ background: "#f8fafc", padding: "80px 1.5rem" }}>
          <div className="container">
            <div style={{ textAlign: "center", maxWidth: 580, margin: "0 auto 56px" }}>
              <span className="badge" style={{ marginBottom: 16 }}>Rovexca Billing</span>
              <h2 className="heading" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", marginBottom: 16 }}>
                El control financiero que
                <br />entiende cómo funciona un consultorio
              </h2>
              <p style={{ fontSize: 17, color: "#6b7280", lineHeight: 1.65 }}>
                No es contabilidad compleja. Es el registro claro y organizado que cualquier médico necesita para operar con control financiero real.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
              {[
                { step: "1", color: "#16a34a", bg: "#f0fdf4", title: "Atiendes la consulta", desc: "Termina la consulta como siempre. Al concluir, registras el pago correspondiente en segundos." },
                { step: "2", color: "#2563eb", bg: "#eff6ff", title: "Registras el ingreso", desc: "Indicas el monto cobrado, si fue pago completo o parcial, y el método de pago. Todo vinculado al paciente." },
                { step: "3", color: "#d97706", bg: "#fffbeb", title: "Control de pendientes automático", desc: "Si el paciente quedó a deber, el sistema lo registra como pendiente. Puedes ver en cualquier momento quién te debe y cuánto." },
                { step: "4", color: "#7c3aed", bg: "#f5f3ff", title: "Tienes visibilidad del negocio", desc: "Ingresos del mes, histórico de pagos y actividad del consultorio. Toda la información financiera en un solo tablero." },
              ].map((s) => (
                <div key={s.step} style={{
                  background: "#fff", borderRadius: 16, padding: "28px 24px",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.05), 0 4px 16px rgba(0,0,0,0.04)",
                  border: "1.5px solid #f1f5f9",
                }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: 10,
                    background: s.bg, color: s.color,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontWeight: 800, fontSize: 18, marginBottom: 18,
                  }}>
                    {s.step}
                  </div>
                  <p style={{ fontWeight: 700, fontSize: 15, color: "#0f172a", marginBottom: 8 }}>{s.title}</p>
                  <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.65 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Beneficios ────────────────────────────────────────────── */}
        <section style={{ background: "#fff", padding: "80px 1.5rem" }}>
          <div className="container">
            <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 52px" }}>
              <span className="badge" style={{ marginBottom: 16 }}>Funcionalidades</span>
              <h2 className="heading" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", marginBottom: 16 }}>
                Todo lo que incluye Rovexca Billing
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
              {benefits.map((b) => (
                <div key={b.title} style={{
                  background: "#f8fafc", borderRadius: 16, padding: "24px 22px",
                  border: "1.5px solid #f1f5f9",
                  display: "flex", gap: 16, alignItems: "flex-start",
                }}>
                  <span style={{
                    fontSize: 22, width: 44, height: 44, flexShrink: 0,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    background: b.bg, borderRadius: 10,
                  }}>{b.icon}</span>
                  <div>
                    <p style={{ fontWeight: 700, fontSize: 15, color: "#0f172a", marginBottom: 6 }}>{b.title}</p>
                    <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.65 }}>{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Casos de uso ──────────────────────────────────────────── */}
        <section style={{ background: "#fffbeb", padding: "80px 1.5rem", borderTop: "1px solid #fde68a" }}>
          <div className="container">
            <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 52px" }}>
              <span style={{
                display: "inline-block", fontSize: 12, fontWeight: 700, letterSpacing: "0.08em",
                textTransform: "uppercase", color: "#d97706",
                background: "#fef3c7", padding: "5px 14px", borderRadius: 999,
                marginBottom: 16,
              }}>
                Casos de uso
              </span>
              <h2 className="heading" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", marginBottom: 16 }}>
                Para consultorios que quieren
                <br />operar con control financiero real
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
              {useCases.map((u) => (
                <div key={u.title} style={{
                  background: "#fff", borderRadius: 16, padding: "28px 24px",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.05), 0 4px 16px rgba(217,119,6,0.06)",
                  border: "1.5px solid #fde68a",
                }}>
                  <div style={{
                    width: 10, height: 10, borderRadius: "50%",
                    background: "#d97706", marginBottom: 18,
                  }} />
                  <p style={{ fontWeight: 700, fontSize: 16, color: "#0f172a", marginBottom: 10 }}>{u.title}</p>
                  <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.7 }}>{u.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Diferenciadores ───────────────────────────────────────── */}
        <section style={{ background: "#0f172a", padding: "80px 1.5rem" }}>
          <div className="container">
            <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 52px" }}>
              <span style={{
                display: "inline-block", fontSize: 12, fontWeight: 700, letterSpacing: "0.08em",
                textTransform: "uppercase", color: "#fcd34d",
                background: "rgba(217,119,6,0.2)", padding: "5px 14px", borderRadius: 999,
                marginBottom: 16,
              }}>
                Por qué Rovexca Billing
              </span>
              <h2 style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", fontWeight: 800, color: "#fff", lineHeight: 1.15, marginBottom: 16 }}>
                No es software de contabilidad.
                <br />
                <span style={{ color: "#fcd34d" }}>Es control financiero para médicos.</span>
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 20, maxWidth: 900, margin: "0 auto" }}>
              {[
                { icon: "🔗", title: "Conectado con la agenda y el expediente", desc: "Los ingresos se vinculan directamente a las consultas de tu agenda. No hay datos duplicados ni registros huérfanos." },
                { icon: "☁️", title: "En la nube, sin instalar nada", desc: "Accede a tu control financiero desde cualquier dispositivo. Sin servidores, sin actualizaciones manuales." },
                { icon: "🎯", title: "Diseñado para consultorios, no para contadores", desc: "La interfaz es sencilla e intuitiva. Registras un ingreso en segundos, sin terminología contable ni formularios complejos." },
                { icon: "👁️", title: "Visibilidad real, decisiones mejores", desc: "Saber cuánto generas, cuánto cobras y cuánto te deben es el primer paso para crecer tu práctica médica con información real." },
              ].map((d) => (
                <div key={d.title} style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1.5px solid rgba(255,255,255,0.08)",
                  borderRadius: 14, padding: "24px 22px",
                }}>
                  <span style={{ fontSize: 24, display: "block", marginBottom: 14 }}>{d.icon}</span>
                  <p style={{ fontWeight: 700, fontSize: 15, color: "#fff", marginBottom: 8 }}>{d.title}</p>
                  <p style={{ fontSize: 14, color: "#94a3b8", lineHeight: 1.65 }}>{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── También en Rovexca Health ─────────────────────────────── */}
        <section style={{ background: "#fff", padding: "48px 1.5rem", borderTop: "1px solid #f1f5f9" }}>
          <div className="container">
            <p style={{
              fontSize: 12, fontWeight: 700, color: "#9ca3af",
              textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 16,
            }}>
              Completa tu operación con Rovexca Health
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              {[
                { href: "/agenda-medica-digital", icon: "📅", title: "Agenda Médica Digital", sub: "Recordatorios automáticos por WhatsApp" },
                { href: "/expediente-clinico-electronico", icon: "📋", title: "Expediente Clínico Electrónico", sub: "Historial completo de cada paciente" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  style={{
                    display: "flex", alignItems: "center", gap: 12,
                    background: "#f8fafc", border: "1.5px solid #e5e7eb",
                    borderRadius: 14, padding: "16px 20px",
                    textDecoration: "none", flex: "1 1 260px",
                  }}
                >
                  <span style={{ fontSize: 22, flexShrink: 0 }}>{link.icon}</span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontSize: 14, fontWeight: 700, color: "#0f172a", marginBottom: 2 }}>{link.title}</p>
                    <p style={{ fontSize: 12, color: "#6b7280" }}>{link.sub}</p>
                  </div>
                  <span style={{ color: "#9ca3af", fontSize: 16, flexShrink: 0 }}>→</span>
                </a>
              ))}
            </div>
            <p style={{ fontSize: 13, color: "#9ca3af", marginTop: 20 }}>
              📖{" "}
              <a href="/blog/facturacion-cfdi-4-0-medicos-mexico" style={{ color: "#d97706", fontWeight: 600, textDecoration: "none" }}>
                Artículo relacionado: Facturación CFDI 4.0 para médicos en México
              </a>
            </p>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────────── */}
        <section style={{ background: "#f8fafc", padding: "80px 1.5rem" }}>
          <div className="container">
            <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 48px" }}>
              <span className="badge" style={{ marginBottom: 16 }}>Preguntas frecuentes</span>
              <h2 className="heading" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.1rem)", marginBottom: 16 }}>
                Dudas sobre el control de ingresos
                <br />para consultorios
              </h2>
            </div>
            <div style={{ maxWidth: 760, margin: "0 auto" }}>
              <ModulePageFAQ items={faqs} />
            </div>
          </div>
        </section>

        {/* ── CTA Final ─────────────────────────────────────────────── */}
        <section style={{ background: "#fff", padding: "80px 1.5rem", textAlign: "center" }}>
          <div style={{ maxWidth: 560, margin: "0 auto" }}>
            <h2 className="heading" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2rem)", marginBottom: 16 }}>
              ¿Listo para saber exactamente
              <br />
              <span style={{ color: "#d97706" }}>cuánto genera tu consultorio?</span>
            </h2>
            <p style={{ fontSize: 16, color: "#6b7280", lineHeight: 1.7, marginBottom: 32 }}>
              Prueba Rovexca Billing gratis durante 15 días. Empieza a registrar ingresos desde el primer día. Sin tarjeta de crédito. Sin compromiso.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
              <TrialButton style={{ fontSize: 15, padding: "0.85rem 2rem" }} />
              <a href="/#demo" className="btn-secondary" style={{ fontSize: 15 }}>
                Solicitar demo <ArrowRight size={15} style={{ display: "inline", verticalAlign: "middle" }} />
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
