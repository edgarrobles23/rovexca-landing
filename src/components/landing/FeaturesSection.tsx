import Image from "next/image";
import { ArrowRight } from "lucide-react";

function Bullet({ text }: { text: string }) {
  return (
    <li style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
      <span style={{ width: 18, height: 18, borderRadius: "50%", background: "#dbeafe", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
        <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
          <path d="M2 5.5L4 7.5L8 3" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span style={{ fontSize: 15, color: "#374151", lineHeight: 1.5 }}>{text}</span>
    </li>
  );
}

function AgendaVisual() {
  return (
    <div style={{ background: "#f8fafc", border: "1.5px solid #e5e7eb", borderRadius: 18, overflow: "hidden" }}>
      <div style={{ padding: "14px 20px", borderBottom: "1px solid #e5e7eb", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <p style={{ fontWeight: 700, fontSize: 13, color: "#0f172a" }}>Agenda · Miércoles 13</p>
        <span style={{ fontSize: 11, fontWeight: 700, color: "#16a34a", background: "#dcfce7", padding: "3px 10px", borderRadius: 999 }}>12 confirmadas ✓</span>
      </div>
      <div style={{ padding: "12px 20px" }}>
        {[
          { t: "09:00", name: "María González", tipo: "Seguimiento", status: "Confirmada", sc: "#dcfce7", st: "#16a34a" },
          { t: "10:30", name: "Carlos Mendoza", tipo: "Primera vez", status: "Recordatorio enviado", sc: "#dbeafe", st: "#2563eb" },
          { t: "12:00", name: "Ana Pérez", tipo: "Consulta gral.", status: "Confirmada", sc: "#dcfce7", st: "#16a34a" },
          { t: "15:00", name: "Luis Ramírez", tipo: "Urgencia", status: "En lista de espera", sc: "#fef9c3", st: "#92400e" },
        ].map((a, i) => (
          <div key={a.name} style={{
            display: "flex", alignItems: "center", gap: 12,
            padding: "10px 0",
            borderBottom: i < 3 ? "1px solid #f1f5f9" : "none",
          }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: "#9ca3af", width: 36, flexShrink: 0 }}>{a.t}</p>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ fontSize: 13, fontWeight: 600, color: "#0f172a" }}>{a.name}</p>
              <p style={{ fontSize: 11, color: "#9ca3af" }}>{a.tipo}</p>
            </div>
            <span style={{ fontSize: 10, fontWeight: 700, padding: "3px 9px", borderRadius: 999, background: a.sc, color: a.st, flexShrink: 0 }}>{a.status}</span>
          </div>
        ))}
      </div>
      <div style={{ padding: "12px 20px", background: "#eff6ff", borderTop: "1px solid #dbeafe" }}>
        <p style={{ fontSize: 12, color: "#1e40af", fontWeight: 600 }}>
          ↑ Tasa de asistencia este mes: <strong>96%</strong> — promedio nacional: 72%
        </p>
      </div>
    </div>
  );
}

function BillingVisual() {
  return (
    <div style={{ background: "#f8fafc", border: "1.5px solid #e5e7eb", borderRadius: 18, overflow: "hidden" }}>
      <div style={{ padding: "14px 20px", borderBottom: "1px solid #e5e7eb", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <p style={{ fontWeight: 700, fontSize: 13, color: "#0f172a" }}>Ingresos · Abril 2025</p>
        <span style={{ fontSize: 11, fontWeight: 700, color: "#16a34a", background: "#dcfce7", padding: "3px 10px", borderRadius: 999 }}>↑ +23% vs marzo</span>
      </div>
      <div style={{ padding: 20 }}>
        {/* Big number */}
        <p style={{ fontSize: 36, fontWeight: 800, color: "#0f172a", letterSpacing: "-0.03em", marginBottom: 4 }}>$64,200</p>
        <p style={{ fontSize: 13, color: "#9ca3af", marginBottom: 20 }}>ingresos totales del mes</p>

        {/* Bars */}
        <div style={{ display: "flex", alignItems: "flex-end", gap: 6, height: 52, marginBottom: 16 }}>
          {[45, 62, 38, 80, 55, 95, 72, 88, 60, 78, 90, 100].map((h, i) => (
            <div key={i} style={{ flex: 1, borderRadius: 4, height: `${h}%`, background: i === 11 ? "#2563eb" : i > 7 ? "#bfdbfe" : "#e5e7eb" }} />
          ))}
        </div>

        {/* Mini stats */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
          {[
            { l: "Consultas", v: "148", c: "#2563eb" },
            { l: "Facturas CFDI", v: "38", c: "#16a34a" },
            { l: "Cobros online", v: "92%", c: "#7c3aed" },
          ].map(s => (
            <div key={s.l} style={{ background: "#fff", borderRadius: 10, padding: "8px 10px", border: "1px solid #f1f5f9", textAlign: "center" }}>
              <p style={{ fontSize: 9, color: "#9ca3af", marginBottom: 3 }}>{s.l}</p>
              <p style={{ fontSize: 16, fontWeight: 800, color: s.c }}>{s.v}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ClinicalVisual() {
  return (
    <div style={{ position: "relative" }}>
      <div style={{
        borderRadius: 20,
        overflow: "hidden",
        boxShadow: "0 16px 48px rgba(15,23,42,0.12)",
        aspectRatio: "4/3",
        position: "relative",
      }}>
        <Image
          src="/images/doctor-tablet.png"
          alt="Médico revisando expediente digital en Rovexca Health"
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(15,23,42,0.7) 0%, transparent 50%)" }} />

        {/* Badges bottom */}
        <div style={{ position: "absolute", bottom: 16, left: 16, right: 16, display: "flex", gap: 8, flexWrap: "wrap" }}>
          <div style={{ background: "rgba(22,163,74,0.95)", borderRadius: 10, padding: "7px 12px", display: "flex", alignItems: "center", gap: 6 }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
              <path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
            <span style={{ fontSize: 11, fontWeight: 700, color: "#fff" }}>Información centralizada</span>
          </div>
          <div style={{ background: "rgba(37,99,235,0.9)", borderRadius: 10, padding: "7px 12px", display: "flex", alignItems: "center", gap: 5 }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
              <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <span style={{ fontSize: 11, fontWeight: 700, color: "#fff" }}>Acceso controlado</span>
          </div>
          <div style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)", borderRadius: 10, padding: "7px 12px", border: "1px solid rgba(255,255,255,0.2)" }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: "#fff" }}>Historial completo</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    tag: "📅  Agenda inteligente",
    tagColor: "#2563eb",
    tagBg: "#eff6ff",
    title: "Llena tu agenda. Elimina los no-shows.",
    sub: "Tu tiempo vale dinero. Cada cita perdida es ingreso que no entra.",
    bullets: [
      "Recordatorios automáticos por WhatsApp y correo electrónico",
      "Confirmación con un clic para el paciente",
      "Sincronización con Google Calendar",
      "Vista multi-médico si tienes equipo",
    ],
    cta: "Ver Rovexca Agenda",
    visual: <AgendaVisual />,
    imgLeft: false,
  },
  {
    tag: "💳  Control financiero",
    tagColor: "#16a34a",
    tagBg: "#f0fdf4",
    title: "Conoce exactamente cuánto entra en tu consultorio.",
    sub: "Sin orden no hay crecimiento. Con Rovexca Billing tienes tu información financiera siempre organizada.",
    bullets: [
      "Registro de ingresos y honorarios por consulta",
      "Control de cobros y pagos pendientes",
      "Información financiera organizada para seguimiento",
      "Datos fiscales del paciente para facilitar tu facturación",
    ],
    cta: "Ver Rovexca Billing",
    visual: <BillingVisual />,
    imgLeft: true,
  },
  {
    tag: "📋  Expediente clínico",
    tagColor: "#7c3aed",
    tagBg: "#f5f3ff",
    title: "Expediente clínico digital en una sola plataforma.",
    sub: "Todo el historial de tus pacientes organizado, centralizado y accesible cuando lo necesitas.",
    bullets: [
      "Notas de consulta organizadas por fecha y paciente",
      "Adjuntos: estudios, imágenes, recetas digitales",
      "Historial completo accesible en segundos",
      "Información disponible desde cualquier dispositivo",
    ],
    cta: "Ver Rovexca Clinical",
    visual: <ClinicalVisual />,
    imgLeft: false,
  },
];

export default function FeaturesSection() {
  return (
    <section style={{ background: "#fff", padding: "88px 0" }} id="beneficios">
      <div className="container">
        {/* Heading */}
        <div style={{ textAlign: "center", maxWidth: 580, margin: "0 auto 80px" }}>
          <div className="badge" style={{ marginBottom: 16 }}>La solución</div>
          <h2 className="heading" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", marginBottom: 16 }}>
            Todo lo que necesitas
            <br />para que tu consultorio funcione solo
          </h2>
          <p style={{ fontSize: 17, color: "#6b7280", lineHeight: 1.6 }}>
            Sin curva de aprendizaje. Sin configuración complicada. Sin necesitar un ingeniero.
          </p>
        </div>

        {/* Feature rows */}
        <div style={{ display: "flex", flexDirection: "column", gap: 100 }}>
          {features.map(({ tag, tagColor, tagBg, title, sub, bullets, cta, visual, imgLeft }) => (
            <div
              key={title}
              style={{ display: "grid", gridTemplateColumns: "1fr", gap: 52, alignItems: "center" }}
              className="lg:grid-cols-2"
            >
              {/* Visual */}
              <div style={{ order: imgLeft ? 1 : 2 }} className="lg:order-none">
                {visual}
              </div>

              {/* Copy */}
              <div style={{ order: imgLeft ? 2 : 1 }} className="lg:order-none">
                <span style={{ display: "inline-block", fontSize: 13, fontWeight: 700, color: tagColor, background: tagBg, padding: "5px 14px", borderRadius: 999, marginBottom: 20 }}>
                  {tag}
                </span>
                <h3 className="heading" style={{ fontSize: "clamp(1.4rem, 3vw, 1.875rem)", marginBottom: 10 }}>
                  {title}
                </h3>
                <p style={{ fontSize: 16, color: "#6b7280", lineHeight: 1.6, marginBottom: 24 }}>
                  {sub}
                </p>
                <ul style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
                  {bullets.map(b => <Bullet key={b} text={b} />)}
                </ul>
                <a href="#demo" className="btn-primary" style={{ fontSize: 14 }}>
                  {cta} <ArrowRight size={15} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
