"use client";

const openTrial = () => window.dispatchEvent(new CustomEvent("rovexca:open-trial"));

const benefits = [
  "Incluye hasta 3 usuarios",
  "Agenda inteligente con recordatorios por WhatsApp (integración incluida)",
  "Expediente clínico digital",
  "Control de ingresos en tiempo real",
  "Soporte en español",
];

function Check() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0 }}>
      <circle cx="9" cy="9" r="9" fill="#dcfce7" />
      <path d="M5 9l3 3 5-5" stroke="#16a34a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function PricingSection() {
  return (
    <section style={{ background: "#f8fafc", padding: "96px 1.5rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h2 style={{
            fontWeight: 800, fontSize: "clamp(26px, 4vw, 38px)",
            color: "#0f172a", letterSpacing: "-0.025em",
            lineHeight: 1.15, marginBottom: 12,
          }}>
            Un precio simple para hacer crecer<br />tu consultorio
          </h2>
          <p style={{ fontSize: 17, color: "#6b7280", maxWidth: 480, margin: "0 auto" }}>
            Todo lo que necesitas para gestionar tu clínica sin complicaciones
          </p>
        </div>

        {/* SEO intro */}
        <p style={{ textAlign: "center", fontSize: 15, color: "#6b7280", maxWidth: 520, margin: "0 auto 40px" }}>
          Una solución accesible para digitalizar tu consultorio médico. Sin contratos anuales, sin costos ocultos y con soporte real en español.
        </p>

        {/* Card */}
        <div style={{
          maxWidth: 460, margin: "0 auto",
          background: "#fff",
          borderRadius: 24,
          border: "2px solid #2563eb",
          boxShadow: "0 20px 60px rgba(37,99,235,0.10), 0 4px 16px rgba(15,23,42,0.06)",
          overflow: "hidden",
        }}>

          {/* Badge */}
          <div style={{
            background: "#2563eb",
            padding: "10px 24px",
            display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
          }}>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M8 1l1.8 3.6L14 5.5l-3 2.9.7 4.1L8 10.4l-3.7 2.1.7-4.1-3-2.9 4.2-.9L8 1z" fill="#fff" />
            </svg>
            <span style={{ fontSize: 12, fontWeight: 700, color: "#fff", letterSpacing: "0.06em", textTransform: "uppercase" }}>
              Todo lo esencial incluido
            </span>
          </div>

          <div style={{ padding: "36px 36px 32px" }}>

            {/* Plan name */}
            <p style={{ fontSize: 13, fontWeight: 700, color: "#2563eb", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 8 }}>
              Rovexca Health
            </p>

            {/* Launch label */}
            <p style={{ fontSize: 12, fontWeight: 600, color: "#16a34a", marginBottom: 6, display: "flex", alignItems: "center", gap: 5 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#16a34a", display: "inline-block" }} />
              Precio exclusivo para nuevos consultorios
            </p>

            {/* Crossed price */}
            <p style={{ fontSize: 15, color: "#9ca3af", textDecoration: "line-through", marginBottom: 4 }}>
              $999 MXN / mes
            </p>

            {/* Current price */}
            <div style={{ display: "flex", alignItems: "flex-end", gap: 4, marginBottom: 4 }}>
              <span style={{ fontSize: 52, fontWeight: 900, color: "#0f172a", letterSpacing: "-0.03em", lineHeight: 1 }}>
                $599
              </span>
              <div style={{ paddingBottom: 6 }}>
                <span style={{ fontSize: 16, fontWeight: 600, color: "#6b7280" }}>MXN</span>
                <span style={{ fontSize: 14, color: "#9ca3af" }}> / mes</span>
              </div>
            </div>

            {/* Urgency + future price */}
            <p style={{ fontSize: 13, color: "#2563eb", fontWeight: 600, marginBottom: 4 }}>
              Oferta exclusiva para los primeros 50 consultorios
            </p>
            <p style={{ fontSize: 12, color: "#9ca3af", marginBottom: 28 }}>
              Sin contrato · Cancela cuando quieras · Precio regular $999 MXN / mes
            </p>

            {/* Divider */}
            <div style={{ height: 1, background: "#f1f5f9", marginBottom: 24 }} />

            {/* Benefits */}
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 14, marginBottom: 32 }}>
              {benefits.map((b) => (
                <li key={b} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <Check />
                  <span style={{ fontSize: 15, color: "#374151" }}>{b}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <button
              onClick={openTrial}
              className="btn-primary"
              style={{ width: "100%", fontSize: 16, padding: "0.9rem" }}
            >
              Prueba gratis 15 días — sin tarjeta
            </button>

            <p style={{ textAlign: "center", fontSize: 12, color: "#9ca3af", marginTop: 14 }}>
              Sin tarjeta de crédito · Acceso inmediato · Soporte incluido
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
