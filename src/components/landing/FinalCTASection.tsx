"use client";

import { ArrowRight } from "lucide-react";

const openTrial = () => window.dispatchEvent(new CustomEvent("rovexca:open-trial"));

const testimonialSnippets = [
  { init: "RS", name: "Dr. Salinas", role: "Cardiólogo", quote: "+30% ingresos en 3 meses" },
  { init: "PL", name: "Dra. Leal", role: "Pediatra", quote: "Cero no-shows este año" },
  { init: "JM", name: "Dr. Méndez", role: "Medicina Fam.", quote: "Ahorro 3h diarias" },
];

export default function FinalCTASection() {
  return (
    <section style={{ background: "linear-gradient(150deg, #0f172a 0%, #1e3a8a 100%)", padding: "88px 0" }}>
      <div className="container" style={{ textAlign: "center" }}>

        {/* Social proof avatars */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 36, flexWrap: "wrap" }}>
          <div style={{ display: "flex" }}>
            {["#2563eb", "#16a34a", "#7c3aed", "#d97706", "#dc2626"].map((c, i) => (
              <span key={c} style={{
                width: 36, height: 36, borderRadius: "50%",
                background: c, border: "2.5px solid rgba(255,255,255,0.2)",
                marginLeft: i > 0 ? -10 : 0,
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                fontSize: 12, fontWeight: 700, color: "#fff",
              }}>
                {["RS", "PL", "JM", "AG", "MR"][i]}
              </span>
            ))}
          </div>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.75)", fontWeight: 600 }}>
            <strong style={{ color: "#fff" }}>+500 médicos</strong> ya usan Rovexca Health en México
          </p>
        </div>

        {/* Headline */}
        <h2 style={{
          fontWeight: 800,
          fontSize: "clamp(2rem, 5vw, 3rem)",
          color: "#fff",
          letterSpacing: "-0.025em",
          lineHeight: 1.08,
          maxWidth: 700,
          margin: "0 auto 20px",
        }}>
          Tu consultorio puede funcionar mejor.
          <br />
          <span style={{ color: "#60a5fa" }}>Empieza hoy.</span>
        </h2>

        <p style={{ fontSize: 18, color: "rgba(255,255,255,0.6)", lineHeight: 1.65, maxWidth: 500, margin: "0 auto 44px" }}>
          En 15 minutos de demo verás exactamente cuánto tiempo y dinero puedes recuperar.
        </p>

        {/* Buttons */}
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginBottom: 36 }}>
          <button onClick={openTrial} className="btn-primary" style={{ fontSize: 16, padding: "0.9rem 2.25rem" }}>
            Prueba gratis 15 días
            <ArrowRight size={18} />
          </button>
          <a href="#demo" style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            fontSize: 16, padding: "0.9rem 2.25rem",
            borderRadius: "0.75rem",
            border: "1.5px solid rgba(255,255,255,0.3)",
            color: "#fff", background: "transparent",
            fontWeight: 600, textDecoration: "none", whiteSpace: "nowrap",
            transition: "border-color 0.15s, background 0.15s",
          }}>
            Solicitar demo
          </a>
          <a href={`https://wa.me/528110804363?text=${encodeURIComponent("Hola, quiero una demo de Rovexca Health.")}`}
            target="_blank" rel="noopener noreferrer"
            className="btn-green"
            style={{ fontSize: 16, padding: "0.9rem 2.25rem" }}
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Escribir por WhatsApp
          </a>
        </div>

        {/* Trust chips */}
        <div style={{ display: "flex", justifyContent: "center", gap: 24, flexWrap: "wrap", marginBottom: 56 }}>
          {["Sin contrato", "Cancela cuando quieras", "Soporte en español", "Configuración incluida"].map(t => (
            <span key={t} style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 13, color: "rgba(255,255,255,0.45)" }}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6l3 3 5-5" stroke="#4ade80" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {t}
            </span>
          ))}
        </div>

        {/* Mini testimonial row */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 40 }}>
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", marginBottom: 20, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>
            Resultados de médicos activos
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            {testimonialSnippets.map(({ init, name, role, quote }) => (
              <div key={name} style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 12,
                padding: "12px 16px",
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}>
                <span style={{ width: 34, height: 34, borderRadius: 8, background: "#2563eb", color: "#fff", fontSize: 12, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  {init}
                </span>
                <div style={{ textAlign: "left" }}>
                  <p style={{ fontSize: 12, fontWeight: 700, color: "#fff" }}>{name} · <span style={{ fontWeight: 400, color: "rgba(255,255,255,0.5)" }}>{role}</span></p>
                  <p style={{ fontSize: 12, color: "#4ade80", fontWeight: 600 }}>&ldquo;{quote}&rdquo;</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
