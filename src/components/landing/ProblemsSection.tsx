const problems = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /><line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
    iconBg: "#fef2f2",
    title: "Citas que se caen solas",
    subtitle: "Porque nadie las confirma automáticamente",
    stat: "Hasta $8,000/mes perdidos",
    body: "Cada no-show sin recordatorio es dinero que no entra. Sin automatización, dependes de que el paciente se acuerde.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    iconBg: "#fffbeb",
    title: "Expedientes en todos lados",
    subtitle: "Porque usas múltiples sistemas sin integración",
    stat: "20 min buscando por consulta",
    body: "Notas en papel, estudios por WhatsApp, historial en otro sistema. Cuando lo necesitas urgente, no está.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    iconBg: "#f5f3ff",
    title: "No sabes cuánto ganas",
    subtitle: "Porque no tienes visibilidad en tiempo real",
    stat: "Sin datos = sin decisiones",
    body: "¿Cuál es tu ingreso real este mes? ¿Qué días rindes más? Sin números claros, tu consultorio no crece.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    iconBg: "#eff6ff",
    title: "Horas fuera de horario",
    subtitle: "Porque haces tareas que deberían ser automáticas",
    stat: "3 horas/día en admin",
    body: "Facturas, seguimientos manuales, recordatorios. Tiempo tuyo que deberías estar con tu familia — o descansando.",
  },
];

export default function ProblemsSection() {
  return (
    <section style={{ background: "#f8fafc", padding: "80px 0" }}>
      <div className="container">
        {/* Heading */}
        <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 56px" }}>
          <div className="badge" style={{ marginBottom: 16 }}>¿Te suena familiar?</div>
          <h2 className="heading" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", marginBottom: 16 }}>
            El desorden administrativo
            <br />te cuesta dinero. Todos los días.
          </h2>
          <p style={{ fontSize: 17, color: "#6b7280", lineHeight: 1.6, marginBottom: 12 }}>
            La mayoría de los consultorios médicos en México siguen usando Excel, papel o aplicaciones desconectadas para gestionar su práctica. El resultado: citas perdidas, expedientes dispersos y finanzas sin control.
          </p>
          <p style={{ fontSize: 16, color: "#6b7280", lineHeight: 1.6 }}>
            No es solo estrés. Es dinero que se fuga, tiempo que no recuperas y pacientes que no regresan.
          </p>
        </div>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
          {problems.map(({ icon, iconBg, title, subtitle, stat, body }) => (
            <div key={title} className="card" style={{ padding: 28 }}>
              {/* Icon */}
              <span style={{ width: 44, height: 44, borderRadius: 12, background: iconBg, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
                {icon}
              </span>
              {/* Stat pill */}
              <span style={{ display: "inline-block", fontSize: 11, fontWeight: 700, color: "#dc2626", background: "#fef2f2", padding: "3px 10px", borderRadius: 999, marginBottom: 10 }}>
                {stat}
              </span>
              <h3 style={{ fontWeight: 700, fontSize: 16, color: "#0f172a", marginBottom: 4 }}>{title}</h3>
              <p style={{ fontSize: 12, fontWeight: 600, color: "#9ca3af", marginBottom: 10 }}>{subtitle}</p>
              <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.6 }}>{body}</p>
            </div>
          ))}
        </div>

        {/* Automation bridge text */}
        <p style={{ textAlign: "center", fontSize: 15, color: "#6b7280", maxWidth: 520, margin: "32px auto 0", lineHeight: 1.7 }}>
          La mayoría de estos problemas existen porque dependen de procesos manuales.<br />
          <strong style={{ color: "#0f172a" }}>Rovexca los automatiza completamente usando WhatsApp.</strong>
        </p>

        {/* Bridge banner */}
        <div style={{
          marginTop: 36,
          background: "#0f172a",
          borderRadius: 16,
          padding: "24px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 16,
        }}>
          <div>
            <p style={{ fontSize: 17, color: "#fff", fontWeight: 700, marginBottom: 4 }}>
              Rovexca automatiza tu consultorio con WhatsApp, agenda inteligente y seguimiento clínico.
            </p>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.55)" }}>
              Un sistema. Todo resuelto. Desde el primer día.
            </p>
          </div>
          <a href="#demo" className="btn-primary" style={{ flexShrink: 0 }}>
            Ver cómo funciona →
          </a>
        </div>
      </div>
    </section>
  );
}
