"use client";

const openTrial = () => window.dispatchEvent(new CustomEvent("rovexca:open-trial"));

const capabilities = [
  {
    icon: "🏥",
    title: "Programación de cirugías",
    desc: "Organiza y da seguimiento a procedimientos quirúrgicos coordinando fechas con hospitales y manteniendo visibilidad del estado de cada caso.",
    color: "#0891b2",
    bg: "#ecfeff",
    border: "#a5f3fc",
  },
  {
    icon: "🔄",
    title: "Seguimiento de pacientes crónicos",
    desc: "Mantén control continuo sobre pacientes con enfermedades crónicas, registrando evolución, citas y seguimiento clínico desde una sola plataforma.",
    color: "#059669",
    bg: "#ecfdf5",
    border: "#a7f3d0",
  },
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
            Rovexca Health va más allá de agendar citas. Soporta flujos clínicos complejos para que puedas gestionar cada tipo de paciente desde una sola plataforma.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24, maxWidth: 900, margin: "0 auto 48px" }}>
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

        <div style={{ textAlign: "center" }}>
          <button onClick={openTrial} className="btn-primary" style={{ fontSize: 15, padding: "0.8rem 2rem" }}>
            Prueba gratis 15 días — sin tarjeta
          </button>
        </div>
      </div>
    </section>
  );
}
