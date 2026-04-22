const cards = [
  {
    icon: "⏱️",
    label: "Menos carga administrativa",
    desc: "Los médicos que utilizan Rovexca Health logran reducir significativamente el tiempo dedicado a tareas administrativas, permitiéndoles enfocarse más en la atención a sus pacientes.",
    color: "#2563eb",
    bg: "#eff6ff",
    border: "#bfdbfe",
  },
  {
    icon: "📊",
    label: "Mayor control y visibilidad",
    desc: "Centraliza la información de citas, pacientes e ingresos para tener mayor claridad sobre el desempeño de tu consultorio médico.",
    color: "#16a34a",
    bg: "#f0fdf4",
    border: "#bbf7d0",
  },
  {
    icon: "🚀",
    label: "Implementación guiada",
    desc: "Nuestro equipo te acompaña en la configuración inicial para que puedas comenzar a utilizar la plataforma de forma ordenada.",
    color: "#7c3aed",
    bg: "#f5f3ff",
    border: "#ddd6fe",
  },
];

export default function MetricsSection() {
  return (
    <section style={{ background: "#f8fafc", padding: "80px 0" }} id="resultados">
      <div className="container">
        {/* Heading */}
        <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 52px" }}>
          <div className="badge" style={{ marginBottom: 16 }}>Resultados reales</div>
          <h2 className="heading" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", marginBottom: 14 }}>
            Resultados reales de consultorios médicos en México
          </h2>
          <p style={{ fontSize: 16, color: "#6b7280", lineHeight: 1.6 }}>
            Médicos generales, especialistas y clínicas pequeñas ya usan Rovexca Health para gestionar su práctica médica con más eficiencia y menos estrés.
          </p>
        </div>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
          {cards.map(({ icon, label, desc, color, bg, border }) => (
            <div key={label} style={{
              background: "#fff",
              borderRadius: 16,
              padding: "28px 24px",
              border: `1.5px solid ${border}`,
              position: "relative",
              overflow: "hidden",
            }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: color, opacity: 0.6 }} />
              <div style={{
                width: 48, height: 48, borderRadius: 12,
                background: bg, display: "flex", alignItems: "center",
                justifyContent: "center", fontSize: 22, marginBottom: 16,
              }}>
                {icon}
              </div>
              <p style={{ fontWeight: 700, fontSize: 16, color: "#0f172a", marginBottom: 10 }}>{label}</p>
              <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.65 }}>{desc}</p>
            </div>
          ))}
        </div>

        <p style={{ textAlign: "center", marginTop: 24, fontSize: 12, color: "#9ca3af" }}>
          * Basado en datos agregados de consultorios médicos activos en Rovexca Health, México. Los resultados individuales pueden variar según el tamaño y tipo de consultorio.
        </p>
      </div>
    </section>
  );
}
