import type { Metadata } from "next";
import { ArrowRight, CheckCircle } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import TrialButton from "@/components/landing/TrialButton";
import ModulePageFAQ from "@/components/landing/ModulePageFAQ";
import PageBreadcrumb from "@/components/landing/PageBreadcrumb";

const OG_IMAGE = {
  url: "/images/og-image.png",
  alt: "Agenda Médica Digital — Rovexca Health",
  width: 1200,
  height: 630,
};

export const metadata: Metadata = {
  title: "Agenda Médica Digital para Consultorios en México | Rovexca Health",
  description:
    "Agenda médica digital con recordatorios automáticos por WhatsApp. Reduce inasistencias, confirma citas sin llamadas y gestiona tu consultorio desde la nube.",
  keywords: [
    "agenda médica digital México",
    "agenda para consultorio médico",
    "sistema de citas médicas",
    "recordatorios de citas por WhatsApp",
    "agenda médica en la nube",
    "software de agenda para médicos",
  ],
  alternates: {
    canonical: "https://www.rovexca.ai/agenda-medica-digital",
  },
  openGraph: {
    title: "Agenda Médica Digital para Consultorios en México | Rovexca Health",
    description:
      "Agenda médica digital con recordatorios automáticos por WhatsApp. Reduce inasistencias, confirma citas sin llamadas y gestiona tu consultorio desde la nube.",
    type: "website",
    locale: "es_MX",
    siteName: "Rovexca Health",
    url: "https://www.rovexca.ai/agenda-medica-digital",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agenda Médica Digital para Consultorios en México | Rovexca Health",
    description:
      "Agenda médica digital con recordatorios automáticos por WhatsApp. Reduce inasistencias, confirma citas sin llamadas y gestiona tu consultorio desde la nube.",
    images: [OG_IMAGE.url],
  },
};

const benefits = [
  {
    icon: "💬",
    color: "#16a34a",
    bg: "#f0fdf4",
    title: "Recordatorios automáticos por WhatsApp",
    desc: "El sistema envía recordatorios de cita a tus pacientes por WhatsApp sin que tu equipo tenga que hacer nada. 500 mensajes mensuales incluidos en el plan base.",
  },
  {
    icon: "✅",
    color: "#2563eb",
    bg: "#eff6ff",
    title: "Confirmación de asistencia desde WhatsApp",
    desc: "El paciente confirma, cancela o solicita reagendamiento directamente desde el mensaje de WhatsApp. Sin llamadas. Sin esperas.",
  },
  {
    icon: "📅",
    color: "#7c3aed",
    bg: "#f5f3ff",
    title: "Vista diaria y semanal de citas",
    desc: "Consulta tu agenda con vista diaria o semanal. Visualiza el estado de cada cita: confirmada, pendiente, cancelada o en espera.",
  },
  {
    icon: "👥",
    color: "#0891b2",
    bg: "#ecfeff",
    title: "Gestión multi-médico",
    desc: "Gestiona la agenda de todo el equipo médico desde una sola cuenta. Cada médico tiene su propia vista y sus propios horarios configurados.",
  },
  {
    icon: "🗓️",
    color: "#d97706",
    bg: "#fffbeb",
    title: "Sincronización con Google Calendar",
    desc: "La agenda de Rovexca Health se sincroniza con Google Calendar para que puedas ver tus citas desde cualquier dispositivo donde ya administras tu tiempo.",
  },
  {
    icon: "🔒",
    color: "#dc2626",
    bg: "#fef2f2",
    title: "Bloqueo de horarios no disponibles",
    desc: "Bloquea fácilmente períodos de vacaciones, días de guardia o franjas horarias reservadas. La agenda nunca mostrará esos horarios como disponibles.",
  },
];

const useCases = [
  {
    title: "Médico sin recepcionista",
    desc: "Un médico general que opera solo puede configurar su agenda una vez y dejar que Rovexca Health gestione confirmaciones y recordatorios automáticamente, sin depender de nadie.",
  },
  {
    title: "Clínica con varios médicos",
    desc: "Una clínica con 3 médicos gestiona todas las agendas desde una sola plataforma. Cada médico ve solo sus citas; el administrador tiene visibilidad de todo el equipo.",
  },
  {
    title: "Especialistas de alta demanda",
    desc: "Cardiólogos, ginecólogos o pediatras con listas de espera pueden controlar su capacidad real, bloquear horarios y garantizar que solo se agenden citas que se van a atender.",
  },
];

const faqs = [
  {
    q: "¿Cómo funcionan los recordatorios automáticos por WhatsApp?",
    a: "Rovexca Agenda envía recordatorios de cita a tus pacientes por WhatsApp de forma automática, sin que tu equipo tenga que hacer nada. El paciente recibe el mensaje con la fecha, hora y datos del consultorio, y puede confirmar o cancelar directamente desde el chat. El plan base incluye 500 mensajes de WhatsApp al mes.",
  },
  {
    q: "¿Puedo gestionar la agenda de varios médicos desde una sola cuenta?",
    a: "Sí. Rovexca Agenda permite gestionar múltiples agendas desde una misma plataforma. Cada médico tiene su propia vista de citas y sus horarios configurados de forma independiente, mientras el administrador puede ver la actividad de todo el equipo.",
  },
  {
    q: "¿La agenda médica se sincroniza con Google Calendar?",
    a: "Sí. Rovexca Agenda se sincroniza con Google Calendar para que puedas ver y gestionar tus citas médicas desde cualquier dispositivo donde ya administras tu tiempo personal o profesional.",
  },
  {
    q: "¿Cuántos mensajes de WhatsApp incluye el plan?",
    a: "El plan base de Rovexca Health incluye 500 mensajes de WhatsApp al mes para recordatorios, confirmaciones y comunicación con pacientes. Si tu volumen de citas es mayor, puedes agregar mensajes adicionales.",
  },
  {
    q: "¿Qué pasa cuando un paciente cancela su cita desde WhatsApp?",
    a: "Cuando un paciente cancela desde WhatsApp, la cita se actualiza automáticamente en tu agenda y queda marcada como cancelada. Esto te da visibilidad real del estado de tu agenda en todo momento.",
  },
  {
    q: "¿Necesito instalar algo para usar la agenda médica digital?",
    a: "No. Rovexca Health es 100% en la nube. Accedes desde cualquier navegador web o tu celular, sin instalaciones, sin servidores propios y sin mantenimiento técnico.",
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

export default function AgendaMedicaDigitalPage() {
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
          { name: "Agenda Médica Digital", href: "/agenda-medica-digital" },
        ]} />

        {/* ── Hero ──────────────────────────────────────────────────── */}
        <section style={{ background: "#080f1f", padding: "88px 1.5rem 80px", textAlign: "center" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <span style={{
              display: "inline-block", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em",
              textTransform: "uppercase", color: "#60a5fa",
              background: "rgba(96,165,250,0.12)", padding: "6px 16px", borderRadius: 999,
              marginBottom: 28,
            }}>
              Rovexca Agenda
            </span>
            <h1 style={{
              fontSize: "clamp(1.9rem, 5vw, 3.1rem)", fontWeight: 800, color: "#fff",
              lineHeight: 1.1, marginBottom: 24, letterSpacing: "-0.025em",
            }}>
              Agenda médica digital con recordatorios
              <br />
              <span style={{ color: "#60a5fa" }}>automáticos por WhatsApp</span>
            </h1>
            <p style={{
              fontSize: "clamp(16px, 2vw, 18px)", color: "rgba(255,255,255,0.65)",
              lineHeight: 1.7, marginBottom: 40, maxWidth: 600, margin: "0 auto 40px",
            }}>
              Reduce inasistencias y elimina las llamadas de confirmación. Rovexca Agenda envía recordatorios por WhatsApp, gestiona confirmaciones y mantiene tu consulta siempre llena — sin esfuerzo manual.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
              <TrialButton style={{ fontSize: 15, padding: "0.85rem 2rem" }} />
              <a
                href="/#demo"
                className="btn-secondary"
                style={{ fontSize: 15, padding: "0.85rem 2rem" }}
              >
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
                  Las inasistencias le cuestan caro
                  <br />a tu consultorio.
                </h2>
                <p style={{ fontSize: 16, color: "#6b7280", lineHeight: 1.7, marginBottom: 24 }}>
                  En México, la tasa promedio de inasistencias en consultorios médicos supera el 25%. Eso significa que más de una de cada cuatro citas programadas no se atiende — tiempo perdido, ingresos que no llegan y agenda desorganizada.
                </p>
                <p style={{ fontSize: 16, color: "#6b7280", lineHeight: 1.7 }}>
                  La causa principal: los pacientes olvidan sus citas porque nadie les recordó. La solución no es contratar más personal para llamar; es automatizar los recordatorios desde el canal que tus pacientes ya usan todos los días.
                </p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  { icon: "📞", title: "Llamadas manuales de confirmación", desc: "Tu recepcionista dedica horas a llamar pacientes para confirmar citas que en muchos casos ya no se pueden atender." },
                  { icon: "❌", title: "Cancelaciones de última hora sin aviso", desc: "Sin recordatorios previos, el paciente cancela el día de la cita o simplemente no aparece, sin dar tiempo a llenar ese espacio." },
                  { icon: "📋", title: "Agenda desordenada y difícil de gestionar", desc: "Papel, Excel o WhatsApp personal: sistemas que no escalan, no se sincronizan y no dan visibilidad real del estado de la agenda." },
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

        {/* ── Cómo funciona Rovexca Agenda ─────────────────────────── */}
        <section style={{ background: "#f8fafc", padding: "80px 1.5rem" }}>
          <div className="container">
            <div style={{ textAlign: "center", maxWidth: 580, margin: "0 auto 56px" }}>
              <span className="badge" style={{ marginBottom: 16 }}>Rovexca Agenda</span>
              <h2 className="heading" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", marginBottom: 16 }}>
                Así funciona la agenda médica
                <br />que sí reduce inasistencias
              </h2>
              <p style={{ fontSize: 17, color: "#6b7280", lineHeight: 1.65 }}>
                Configuras tu disponibilidad una vez. Rovexca Agenda hace el resto: confirma, recuerda y actualiza tu agenda en tiempo real.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
              {[
                { step: "1", color: "#2563eb", bg: "#eff6ff", title: "Configuras tu agenda", desc: "Defines tus horarios, duración de citas, días disponibles y cuántos pacientes ves por día. Se hace una vez." },
                { step: "2", color: "#7c3aed", bg: "#f5f3ff", title: "El paciente agenda su cita", desc: "Las citas se registran en la plataforma — por ti, tu recepcionista o a través de los canales que uses." },
                { step: "3", color: "#16a34a", bg: "#f0fdf4", title: "Rovexca envía el recordatorio", desc: "24-48 horas antes, el paciente recibe un mensaje de WhatsApp con su cita. Confirma con un solo toque." },
                { step: "4", color: "#d97706", bg: "#fffbeb", title: "Tu agenda siempre actualizada", desc: "Confirmaciones, cancelaciones y reagendamientos se reflejan en tiempo real en tu vista de agenda." },
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
                Todo lo que incluye la agenda médica
                <br />digital de Rovexca Health
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
        <section style={{ background: "#f0f7ff", padding: "80px 1.5rem", borderTop: "1px solid #dbeafe" }}>
          <div className="container">
            <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 52px" }}>
              <span className="badge" style={{ marginBottom: 16 }}>Casos de uso</span>
              <h2 className="heading" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", marginBottom: 16 }}>
                Para todo tipo de consultorio
                <br />médico en México
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
              {useCases.map((u) => (
                <div key={u.title} style={{
                  background: "#fff", borderRadius: 16, padding: "28px 24px",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.05), 0 4px 16px rgba(37,99,235,0.06)",
                  border: "1.5px solid #e8f0fe",
                }}>
                  <div style={{
                    width: 10, height: 10, borderRadius: "50%",
                    background: "#2563eb", marginBottom: 18,
                  }} />
                  <p style={{ fontWeight: 700, fontSize: 16, color: "#0f172a", marginBottom: 10 }}>{u.title}</p>
                  <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.7 }}>{u.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Por qué Rovexca Agenda ────────────────────────────────── */}
        <section style={{ background: "#0f172a", padding: "80px 1.5rem" }}>
          <div className="container">
            <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 52px" }}>
              <span style={{
                display: "inline-block", fontSize: 12, fontWeight: 700, letterSpacing: "0.08em",
                textTransform: "uppercase", color: "#93c5fd",
                background: "rgba(37,99,235,0.2)", padding: "5px 14px", borderRadius: 999,
                marginBottom: 16,
              }}>
                Por qué Rovexca Agenda
              </span>
              <h2 style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", fontWeight: 800, color: "#fff", lineHeight: 1.15, marginBottom: 16 }}>
                No es solo una agenda.
                <br />
                <span style={{ color: "#93c5fd" }}>Es tu consultorio operando solo.</span>
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 20, maxWidth: 900, margin: "0 auto" }}>
              {[
                { icon: "📱", title: "WhatsApp como canal principal", desc: "Tus pacientes ya usan WhatsApp. Los recordatorios llegan al canal que abren todos los días, no a un correo que ignoran." },
                { icon: "☁️", title: "100% en la nube, sin instalar nada", desc: "Accedes desde cualquier dispositivo. Sin servidores propios. Sin actualizaciones manuales. Sin mantenimiento técnico." },
                { icon: "🔗", title: "Conectada con el expediente y los ingresos", desc: "La agenda no está sola. Cada cita se conecta con el expediente clínico y el control financiero dentro del mismo sistema." },
                { icon: "⚡", title: "Funcionando desde el primer día", desc: "Configuras tu agenda en minutos. No necesitas capacitación técnica ni semanas de implementación." },
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
                { href: "/expediente-clinico-electronico", icon: "📋", title: "Expediente Clínico Electrónico", sub: "Historial completo de cada paciente en la nube" },
                { href: "/control-ingresos-consultorio", icon: "💳", title: "Control de Ingresos", sub: "Honorarios, cobros y pagos pendientes" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  style={{
                    display: "flex", alignItems: "center", gap: 12,
                    background: "#f8fafc", border: "1.5px solid #e5e7eb",
                    borderRadius: 14, padding: "16px 20px",
                    textDecoration: "none", flex: "1 1 260px",
                    transition: "border-color 0.15s",
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
              <a href="/blog/reducir-inasistencias-consultorios-whatsapp" style={{ color: "#2563eb", fontWeight: 600, textDecoration: "none" }}>
                Artículo relacionado: Cómo reducir inasistencias con recordatorios por WhatsApp
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
                Dudas sobre la agenda médica digital
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
              ¿Listo para tener una agenda que
              <br />
              <span style={{ color: "#2563eb" }}>trabaja mientras tú atiendes?</span>
            </h2>
            <p style={{ fontSize: 16, color: "#6b7280", lineHeight: 1.7, marginBottom: 32 }}>
              Prueba Rovexca Agenda gratis durante 15 días. Sin tarjeta de crédito. Sin compromiso. Configuras tu agenda en minutos y los recordatorios empiezan a funcionar de inmediato.
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
