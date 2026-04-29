"use client";

const openTrial = () => window.dispatchEvent(new CustomEvent("rovexca:open-trial"));

const capabilities = [
  {
    icon: "🏥",
    title: "Coordinación quirúrgica sin llamadas ni intermediarios",
    desc: "Gestiona solicitudes, reprogramaciones y confirmaciones con hospitales desde un flujo digital centralizado.",
    color: "#0891b2",
    bg: "#ecfeff",
    border: "#a5f3fc",
  },
  {
    icon: "🔄",
    title: "Seguimiento automático de pacientes después de la consulta",
    desc: "Rovexca contacta a tus pacientes automáticamente para asegurar continuidad en su tratamiento y evitar abandono.",
    color: "#059669",
    bg: "#ecfdf5",
    border: "#a7f3d0",
  },
];

const steps = [
  {
    num: 1,
    icon: "💬",
    color: "#25d366",
    bg: "#f0fdf4",
    title: "Paciente escribe por WhatsApp",
    desc: "El paciente inicia la conversación desde su celular.",
  },
  {
    num: 2,
    icon: "📅",
    color: "#2563eb",
    bg: "#eff6ff",
    title: "Agenda automáticamente",
    desc: "El paciente elige fecha, hora y motivo. Sin llamadas.",
  },
  {
    num: 3,
    icon: "🔔",
    color: "#7c3aed",
    bg: "#f5f3ff",
    title: "Recibe recordatorio",
    desc: "Enviamos recordatorios automáticos 24h antes y el mismo día.",
  },
  {
    num: 4,
    icon: "✅",
    color: "#d97706",
    bg: "#fffbeb",
    title: "Confirma o reagenda",
    desc: "El paciente confirma, reagenda o cancela desde WhatsApp.",
  },
  {
    num: 5,
    icon: "🏥",
    color: "#059669",
    bg: "#f0fdf4",
    title: "Asiste a consulta",
    desc: "Llega puntual a su cita. Menos inasistencias, más ingresos.",
  },
  {
    num: 6,
    icon: "📋",
    color: "#0891b2",
    bg: "#ecfeff",
    title: "Recibe seguimiento",
    desc: "Automatizamos el seguimiento clínico post-consulta.",
  },
  {
    num: 7,
    icon: "🔄",
    color: "#25d366",
    bg: "#f0fdf4",
    title: "Agenda nuevamente",
    desc: "El paciente se mantiene activo y continúa su tratamiento.",
  },
];

const benefits = [
  { icon: "📈", color: "#16a34a", title: "Menos no-shows", desc: "Más citas confirmadas y atendidas." },
  { icon: "⏱️", color: "#2563eb", title: "Ahorro de tiempo", desc: "Automatiza tareas repetitivas." },
  { icon: "😊", color: "#7c3aed", title: "Mejor experiencia", desc: "Comunicación rápida y profesional." },
  { icon: "💰", color: "#d97706", title: "Más ingresos", desc: "Más pacientes activos y constantes." },
];

export default function ClinicalCapabilitiesSection() {
  return (
    <section style={{ background: "#f8fafc", padding: "88px 0" }}>
      <div className="container">
        <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 52px" }}>
          <div className="badge" style={{ marginBottom: 16 }}>Gestión clínica avanzada</div>
          <h2 className="heading" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", marginBottom: 16 }}>
            Más que una agenda: gestión completa del paciente
          </h2>
          <p style={{ fontSize: 17, color: "#6b7280", lineHeight: 1.65 }}>
            Rovexca Health va más allá de agendar citas. Soporta flujos clínicos complejos para que puedas gestionar cada tipo de paciente desde una sola plataforma. Desde el primer mensaje hasta el seguimiento clínico, Rovexca gestiona cada etapa sin intervención manual.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24, maxWidth: 900, margin: "0 auto 72px" }}>
          {capabilities.map(({ icon, title, desc, color, bg, border }) => (
            <div key={title} style={{
              background: "#fff",
              borderRadius: 20,
              padding: "32px 28px",
              border: `1.5px solid ${border}`,
              boxShadow: "0 4px 20px rgba(15,23,42,0.05)",
            }}>
              <div style={{
                width: 56, height: 56, borderRadius: 16,
                background: bg, border: `1.5px solid ${border}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 28, marginBottom: 20,
              }}>
                {icon}
              </div>
              <h3 style={{ fontWeight: 700, fontSize: 18, color: "#0f172a", marginBottom: 12 }}>
                {title}
              </h3>
              <p style={{ fontSize: 15, color: "#6b7280", lineHeight: 1.7 }}>
                {desc}
              </p>
              <div style={{ marginTop: 20, paddingTop: 20, borderTop: `1px solid ${border}` }}>
                <span style={{ fontSize: 13, fontWeight: 600, color }}>
                  Incluido en Rovexca Health →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Flow section */}
        <div style={{ background: "#fff", borderRadius: 24, border: "1.5px solid #e5e7eb", padding: "48px 32px", boxShadow: "0 4px 24px rgba(15,23,42,0.06)", marginBottom: 48 }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h3 style={{ fontWeight: 800, fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "#0f172a", marginBottom: 12 }}>
              Así funciona en la práctica
            </h3>
            <p style={{ fontSize: 16, color: "#6b7280", maxWidth: 480, margin: "0 auto" }}>
              Rovexca automatiza todo el ciclo del paciente por WhatsApp, para que{" "}
              <strong style={{ color: "#2563eb" }}>no pierdas más citas ni pacientes.</strong>
            </p>
          </div>

          {/* Steps grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: 8, position: "relative", marginBottom: 32 }}>
            {steps.map((step, i) => (
              <div key={step.num} style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "relative" }}>
                {/* Arrow between steps */}
                {i < steps.length - 1 && (
                  <div style={{
                    position: "absolute", right: -6, top: 20,
                    fontSize: 18, color: "#2563eb", zIndex: 1,
                    display: "flex", alignItems: "center",
                  }}>→</div>
                )}

                {/* Number badge */}
                <div style={{
                  width: 28, height: 28, borderRadius: "50%",
                  background: step.color, color: "#fff",
                  fontSize: 12, fontWeight: 800,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 8,
                }}>
                  {step.num}
                </div>

                {/* Icon */}
                <div style={{
                  width: 52, height: 52, borderRadius: 14,
                  background: step.bg,
                  border: `1.5px solid ${step.color}22`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 24, marginBottom: 10,
                }}>
                  {step.icon}
                </div>

                {/* Text */}
                <p style={{ fontSize: 12, fontWeight: 700, color: "#0f172a", textAlign: "center", marginBottom: 4, lineHeight: 1.3 }}>
                  {step.title}
                </p>
                <p style={{ fontSize: 11, color: "#9ca3af", textAlign: "center", lineHeight: 1.4 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Ciclo continuo */}
          <div style={{ textAlign: "center" }}>
            <div style={{
              display: "inline-block",
              background: "#f0fdf4",
              border: "1.5px dashed #86efac",
              borderRadius: 999,
              padding: "8px 24px",
              fontSize: 13,
              fontWeight: 700,
              color: "#16a34a",
            }}>
              🔁 Ciclo continuo que fideliza y hace crecer tu consultorio
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16, marginBottom: 48 }}>
          {benefits.map(({ icon, color, title, desc }) => (
            <div key={title} style={{ background: "#fff", borderRadius: 16, padding: "20px 18px", border: "1.5px solid #e5e7eb", textAlign: "center", boxShadow: "0 2px 8px rgba(15,23,42,0.04)" }}>
              <div style={{ fontSize: 28, marginBottom: 10 }}>{icon}</div>
              <p style={{ fontWeight: 700, fontSize: 14, color: "#0f172a", marginBottom: 4 }}>{title}</p>
              <p style={{ fontSize: 12, color: "#6b7280", lineHeight: 1.5 }}>{desc}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <button onClick={openTrial} className="btn-primary" style={{ fontSize: 15, padding: "0.8rem 2rem" }}>
            Prueba gratis 15 días — sin tarjeta
          </button>
        </div>
      </div>
    </section>
  );
}
