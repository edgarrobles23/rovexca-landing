import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import TrialButton from "@/components/landing/TrialButton";
import ModulePageFAQ from "@/components/landing/ModulePageFAQ";
import PageBreadcrumb from "@/components/landing/PageBreadcrumb";

const OG_IMAGE = {
  url: "/images/og-image.png",
  alt: "Expediente Clínico Electrónico — Rovexca Health",
  width: 1200,
  height: 630,
};

export const metadata: Metadata = {
  title: "Expediente Clínico Electrónico en la Nube | Rovexca Health México",
  description:
    "Expediente clínico electrónico para consultorios médicos en México. Historial del paciente, notas de consulta y estudios accesibles desde cualquier dispositivo.",
  keywords: [
    "expediente clínico electrónico México",
    "expediente médico digital",
    "software de expediente clínico",
    "historial clínico digital",
    "expediente clínico en la nube",
    "sistema de expediente médico",
  ],
  alternates: {
    canonical: "https://www.rovexca.ai/expediente-clinico-electronico",
  },
  openGraph: {
    title: "Expediente Clínico Electrónico en la Nube | Rovexca Health México",
    description:
      "Expediente clínico electrónico para consultorios médicos en México. Historial del paciente, notas de consulta y estudios accesibles desde cualquier dispositivo.",
    type: "website",
    locale: "es_MX",
    siteName: "Rovexca Health",
    url: "https://www.rovexca.ai/expediente-clinico-electronico",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Expediente Clínico Electrónico en la Nube | Rovexca Health México",
    description:
      "Expediente clínico electrónico para consultorios médicos en México. Historial del paciente, notas de consulta y estudios accesibles desde cualquier dispositivo.",
    images: [OG_IMAGE.url],
  },
};

const benefits = [
  {
    icon: "📝",
    color: "#7c3aed",
    bg: "#f5f3ff",
    title: "Notas de consulta digitales",
    desc: "Registra las notas de cada consulta de forma digital, organizadas por paciente y fecha. Accede al historial completo en segundos desde cualquier dispositivo.",
  },
  {
    icon: "📋",
    color: "#2563eb",
    bg: "#eff6ff",
    title: "Historial clínico completo del paciente",
    desc: "Cada consulta, seguimiento y procedimiento queda registrado en el expediente del paciente. Una línea de tiempo clínica clara y organizada.",
  },
  {
    icon: "🖼️",
    color: "#0891b2",
    bg: "#ecfeff",
    title: "Adjuntos de estudios e imágenes",
    desc: "Adjunta resultados de laboratorio, imágenes de diagnóstico y cualquier archivo relevante directamente al expediente del paciente.",
  },
  {
    icon: "📱",
    color: "#16a34a",
    bg: "#f0fdf4",
    title: "Acceso desde cualquier dispositivo",
    desc: "Consulta el expediente desde tu computadora en el consultorio o desde tu celular en guardia. La información está disponible donde la necesitas.",
  },
  {
    icon: "📄",
    color: "#d97706",
    bg: "#fffbeb",
    title: "Plantillas por especialidad",
    desc: "Configura plantillas de consulta adaptadas a tu especialidad médica para agilizar el registro de cada consulta sin partir de cero.",
  },
  {
    icon: "🔐",
    color: "#dc2626",
    bg: "#fef2f2",
    title: "Acceso controlado por usuario",
    desc: "Define qué miembro de tu equipo puede ver o editar el expediente de cada paciente. La información clínica solo la ve quien debe verla.",
  },
];

const useCases = [
  {
    title: "Médico general o familiar",
    desc: "Registra la evolución de cada paciente en consulta, adjunta estudios de laboratorio y mantiene el historial organizado sin carpetas físicas ni archivos dispersos.",
  },
  {
    title: "Especialista con plantillas propias",
    desc: "Un cardiólogo, endocrinólogo o ginecólogo configura sus plantillas de consulta específicas por especialidad y reduce el tiempo de registro por consulta.",
  },
  {
    title: "Clínica con equipo médico",
    desc: "Cada médico accede a sus propios expedientes. El administrador tiene visibilidad de la actividad clínica sin comprometer la privacidad de los pacientes.",
  },
];

const faqs = [
  {
    q: "¿Qué información puedo registrar en el expediente clínico electrónico?",
    a: "Puedes registrar notas de consulta, historial médico del paciente, diagnósticos, motivo de consulta, plan de tratamiento, y adjuntar estudios de laboratorio, imágenes de diagnóstico y cualquier archivo relevante. Todo queda organizado por paciente y fecha.",
  },
  {
    q: "¿Desde qué dispositivos puedo acceder al expediente clínico?",
    a: "Rovexca Clinical es 100% en la nube. Puedes acceder desde cualquier navegador web en tu computadora, tablet o celular. No requiere instalación ni configuración adicional.",
  },
  {
    q: "¿El expediente clínico electrónico funciona para cualquier especialidad médica?",
    a: "Sí. Rovexca Clinical es flexible y permite configurar plantillas de consulta personalizadas por especialidad. Funciona para médicos generales, pediatras, cardiólogos, ginecólogos, endocrinólogos y cualquier especialidad médica.",
  },
  {
    q: "¿Puedo adjuntar estudios e imágenes al expediente del paciente?",
    a: "Sí. Puedes adjuntar archivos de laboratorio, imágenes de diagnóstico, recetas digitales y cualquier documento relevante directamente al expediente clínico del paciente, vinculados a la fecha de consulta correspondiente.",
  },
  {
    q: "¿El expediente clínico electrónico es seguro?",
    a: "Sí. El acceso al expediente está controlado por usuario y contraseña. Solo los miembros de tu equipo con los permisos correspondientes pueden ver o editar la información clínica de los pacientes.",
  },
  {
    q: "¿Rovexca Clinical reemplaza el expediente en papel?",
    a: "Sí. Rovexca Clinical está diseñado para que dejes de llevar expedientes en papel, carpetas físicas o notas en documentos de texto. Toda la información clínica queda centralizada y accesible digitalmente desde el primer día.",
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

export default function ExpedienteClinicoElectronicoPage() {
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
          { name: "Expediente Clínico Electrónico", href: "/expediente-clinico-electronico" },
        ]} />

        {/* ── Hero ──────────────────────────────────────────────────── */}
        <section style={{ background: "#080f1f", padding: "88px 1.5rem 80px", textAlign: "center" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <span style={{
              display: "inline-block", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em",
              textTransform: "uppercase", color: "#c4b5fd",
              background: "rgba(124,58,237,0.15)", padding: "6px 16px", borderRadius: 999,
              marginBottom: 28,
            }}>
              Rovexca Clinical
            </span>
            <h1 style={{
              fontSize: "clamp(1.9rem, 5vw, 3.1rem)", fontWeight: 800, color: "#fff",
              lineHeight: 1.1, marginBottom: 24, letterSpacing: "-0.025em",
            }}>
              Expediente clínico electrónico
              <br />
              <span style={{ color: "#c4b5fd" }}>para tu consultorio médico</span>
            </h1>
            <p style={{
              fontSize: "clamp(16px, 2vw, 18px)", color: "rgba(255,255,255,0.65)",
              lineHeight: 1.7, marginBottom: 40, maxWidth: 600, margin: "0 auto 40px",
            }}>
              Olvídate del papel y los archivos dispersos. Rovexca Clinical centraliza el historial completo de cada paciente — notas, estudios e imágenes — accesible desde cualquier dispositivo, en segundos.
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
                  El expediente en papel es
                  <br />un problema costoso.
                </h2>
                <p style={{ fontSize: 16, color: "#6b7280", lineHeight: 1.7, marginBottom: 24 }}>
                  Notas en papel, archivos en Word, carpetas físicas y hojas de cálculo: la realidad de miles de consultorios médicos en México. Una forma de trabajar que genera errores, consume tiempo y hace imposible el seguimiento real del paciente.
                </p>
                <p style={{ fontSize: 16, color: "#6b7280", lineHeight: 1.7 }}>
                  Cuando un paciente regresa después de meses, ¿cuánto tiempo pierdes buscando su historial? ¿Y si necesitas ver el expediente desde casa o desde el hospital? La información clínica debe estar donde tú estés.
                </p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  { icon: "🗂️", title: "Expedientes en papel y carpetas físicas", desc: "Buscar el expediente de un paciente puede tomar minutos u horas. Si está mal archivado o se extravía, el historial se pierde." },
                  { icon: "💻", title: "Notas en Word o WhatsApp personal", desc: "Archivos sin estructura, sin respaldo en la nube y sin acceso desde múltiples dispositivos. Información clínica expuesta a pérdida." },
                  { icon: "🔍", title: "Sin historial accesible de consultas anteriores", desc: "Sin un expediente centralizado, el médico depende de la memoria del paciente para reconstruir su historial clínico en cada consulta." },
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
              <span className="badge" style={{ marginBottom: 16 }}>Rovexca Clinical</span>
              <h2 className="heading" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", marginBottom: 16 }}>
                El expediente clínico que
                <br />centraliza toda la información del paciente
              </h2>
              <p style={{ fontSize: 17, color: "#6b7280", lineHeight: 1.65 }}>
                Desde la primera consulta hasta el seguimiento más reciente, todo el historial del paciente en un solo lugar.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
              {[
                { step: "1", color: "#7c3aed", bg: "#f5f3ff", title: "Buscas al paciente", desc: "En segundos encuentras el expediente por nombre. Todo el historial clínico disponible de inmediato." },
                { step: "2", color: "#2563eb", bg: "#eff6ff", title: "Registras la consulta", desc: "Llenas la nota de consulta con los campos que configuraste para tu especialidad. Rápido, estructurado, sin perder tiempo." },
                { step: "3", color: "#0891b2", bg: "#ecfeff", title: "Adjuntas estudios si los hay", desc: "Subes laboratorios, imágenes o cualquier archivo relevante directamente al expediente de esa consulta." },
                { step: "4", color: "#16a34a", bg: "#f0fdf4", title: "Queda todo guardado y accesible", desc: "El historial se actualiza en tiempo real. En la próxima consulta, todo el contexto clínico está disponible desde el primer segundo." },
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
                Todo lo que incluye Rovexca Clinical
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
        <section style={{ background: "#f5f3ff", padding: "80px 1.5rem", borderTop: "1px solid #e9d5ff" }}>
          <div className="container">
            <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 52px" }}>
              <span style={{
                display: "inline-block", fontSize: 12, fontWeight: 700, letterSpacing: "0.08em",
                textTransform: "uppercase", color: "#7c3aed",
                background: "#ede9fe", padding: "5px 14px", borderRadius: 999,
                marginBottom: 16,
              }}>
                Casos de uso
              </span>
              <h2 className="heading" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", marginBottom: 16 }}>
                Para médicos que quieren dejar
                <br />el papel atrás
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
              {useCases.map((u) => (
                <div key={u.title} style={{
                  background: "#fff", borderRadius: 16, padding: "28px 24px",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.05), 0 4px 16px rgba(124,58,237,0.06)",
                  border: "1.5px solid #ede9fe",
                }}>
                  <div style={{
                    width: 10, height: 10, borderRadius: "50%",
                    background: "#7c3aed", marginBottom: 18,
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
                textTransform: "uppercase", color: "#c4b5fd",
                background: "rgba(124,58,237,0.2)", padding: "5px 14px", borderRadius: 999,
                marginBottom: 16,
              }}>
                Por qué Rovexca Clinical
              </span>
              <h2 style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", fontWeight: 800, color: "#fff", lineHeight: 1.15, marginBottom: 16 }}>
                El expediente no está solo.
                <br />
                <span style={{ color: "#c4b5fd" }}>Está conectado con toda la operación.</span>
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 20, maxWidth: 900, margin: "0 auto" }}>
              {[
                { icon: "🔗", title: "Conectado con la agenda y los ingresos", desc: "Cada consulta agendada genera automáticamente su registro en el expediente. La operación clínica y administrativa en un solo sistema." },
                { icon: "☁️", title: "En la nube, sin instalaciones", desc: "Accedes desde cualquier dispositivo con conexión a internet. Sin servidores propios, sin backups manuales, sin pérdida de información." },
                { icon: "🔐", title: "Acceso controlado por roles", desc: "Define qué miembro de tu equipo puede ver, registrar o modificar información clínica. Privacidad del paciente garantizada." },
                { icon: "⚡", title: "Funcionando desde el primer día", desc: "Crea los expedientes de tus pacientes desde el primer día de uso. No requiere migración compleja ni capacitación técnica prolongada." },
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
              <a href="/blog/software-medico-vs-excel-consultorios" style={{ color: "#7c3aed", fontWeight: 600, textDecoration: "none" }}>
                Artículo relacionado: Software médico vs Excel para administrar un consultorio
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
                Dudas sobre el expediente clínico
                <br />electrónico
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
              ¿Listo para dejar el papel atrás
              <br />
              <span style={{ color: "#7c3aed" }}>y tener el historial de tus pacientes siempre a la mano?</span>
            </h2>
            <p style={{ fontSize: 16, color: "#6b7280", lineHeight: 1.7, marginBottom: 32 }}>
              Prueba Rovexca Clinical gratis durante 15 días. Crea expedientes digitales desde el primer día. Sin tarjeta de crédito. Sin compromiso.
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
