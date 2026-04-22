const modules = [
  {
    icon: "📅",
    name: "Rovexca Agenda",
    tagline: "Agenda médica digital sin no-shows",
    body: "Gestiona tu agenda médica con vista diaria y semanal, recordatorios automáticos por WhatsApp y sincronización con Google Calendar. Ideal para médicos que quieren llenar su consulta sin esfuerzo.",
    features: ["Recordatorios automáticos por WhatsApp", "Vista multi-médico", "Bloqueo de horarios"],
    color: "#2563eb",
    bg: "#eff6ff",
  },
  {
    icon: "📋",
    name: "Rovexca Clinical",
    tagline: "Expediente clínico electrónico en la nube",
    body: "Historial completo del paciente, notas de consulta digitales, adjuntos de estudios e imágenes. El expediente clínico electrónico de tu consultorio, organizado y accesible desde cualquier dispositivo.",
    features: ["Notas de consulta digitales", "Adjuntos y estudios", "Plantillas por especialidad"],
    color: "#16a34a",
    bg: "#f0fdf4",
  },
  {
    icon: "💳",
    name: "Rovexca Billing",
    tagline: "Control financiero del consultorio médico",
    body: "Registra ingresos, cobros y honorarios por consulta. Organiza la información financiera de tu consultorio médico en un solo lugar — sin Excel, sin cuadernos.",
    features: ["Registro de ingresos y cobros", "Control de pagos pendientes", "Información para facturación"],
    color: "#d97706",
    bg: "#fffbeb",
  },
  {
    icon: "📊",
    name: "Rovexca Insights",
    tagline: "Métricas clave de tu consultorio",
    body: "Dashboard con métricas clave: citas, ingresos y actividad semanal de tu consultorio médico. Toda la información que necesitas para tomar mejores decisiones de negocio.",
    features: ["Métricas en tiempo real", "Resumen de ingresos", "Actividad del consultorio"],
    color: "#7c3aed",
    bg: "#f5f3ff",
  },
];

export default function ModulesSection() {
  return (
    <section className="section-dark" id="modulos">
      <div className="container">
        {/* Heading */}
        <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 56px" }}>
          <div className="badge" style={{ marginBottom: 16, background: "rgba(37,99,235,0.2)", color: "#93c5fd" }}>
            Módulos
          </div>
          <h2 className="heading" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", marginBottom: 16, color: "#fff" }}>
            Todo lo que tu consultorio médico necesita
            <br />en un solo sistema
          </h2>
          <p style={{ fontSize: 17, color: "#94a3b8", lineHeight: 1.65 }}>
            Agenda médica, expediente clínico electrónico y control financiero — integrados en una sola plataforma en la nube. Empieza con lo que necesitas y activa más módulos sin cambiar de sistema.
          </p>
        </div>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
          {modules.map(({ icon, name, tagline, body, features, color, bg }) => (
            <div
              key={name}
              className="module-card"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1.5px solid rgba(255,255,255,0.08)",
                borderRadius: 16,
                padding: 28,
                transition: "border-color 0.2s, background 0.2s, transform 0.2s",
              }}
            >
              {/* Icon badge */}
              <span style={{
                width: 44, height: 44, borderRadius: 12,
                background: bg + "22",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 22, marginBottom: 18,
              }}>
                {icon}
              </span>

              <p style={{ fontWeight: 700, fontSize: 16, color: "#fff", marginBottom: 4 }}>{name}</p>
              <p style={{ fontSize: 12, fontWeight: 600, color, marginBottom: 14 }}>{tagline}</p>
              <p style={{ fontSize: 14, color: "#94a3b8", lineHeight: 1.65, marginBottom: 18 }}>{body}</p>

              {/* Feature list */}
              <ul style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {features.map((f) => (
                  <li key={f} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: color, flexShrink: 0 }} />
                    <span style={{ fontSize: 13, color: "#cbd5e1" }}>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: 48 }}>
          <a href="#demo" className="btn-primary">
            Quiero ver todos los módulos →
          </a>
        </div>
      </div>
    </section>
  );
}
