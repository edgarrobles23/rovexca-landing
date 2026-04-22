"use client";

import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";

const openTrial = () => window.dispatchEvent(new CustomEvent("rovexca:open-trial"));

function MiniDashboard() {
  return (
    <div style={{
      background: "#fff",
      border: "1.5px solid #e5e7eb",
      borderRadius: 20,
      overflow: "hidden",
      boxShadow: "0 24px 64px rgba(15,23,42,0.12), 0 4px 16px rgba(15,23,42,0.06)",
      width: "100%",
      maxWidth: 460,
    }}>
      {/* Title bar */}
      <div style={{ background: "#0f172a", padding: "12px 20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ width: 24, height: 24, borderRadius: 6, background: "#2563eb", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 6.5L4.5 9L10 3" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span style={{ color: "#fff", fontWeight: 600, fontSize: 13 }}>Rovexca Health</span>
        </div>
        <div style={{ display: "flex", gap: 5 }}>
          {["#ef4444", "#f59e0b", "#22c55e"].map(c => (
            <span key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c, opacity: 0.7 }} />
          ))}
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: 20, background: "#f8fafc" }}>
        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10, marginBottom: 14 }}>
          {[
            { label: "Pacientes", val: "1,284", color: "#2563eb" },
            { label: "Este mes", val: "$52,400", color: "#16a34a" },
            { label: "Pendientes", val: "3", color: "#f59e0b" },
          ].map(s => (
            <div key={s.label} style={{ background: "#fff", borderRadius: 12, padding: "10px 12px", border: "1px solid #f1f5f9" }}>
              <p style={{ fontSize: 10, color: "#9ca3af", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 4 }}>{s.label}</p>
              <p style={{ fontSize: 15, fontWeight: 700, color: s.color }}>{s.val}</p>
            </div>
          ))}
        </div>

        {/* Agenda */}
        <div style={{ background: "#fff", borderRadius: 14, border: "1px solid #f1f5f9", overflow: "hidden", marginBottom: 14 }}>
          <div style={{ padding: "10px 14px", borderBottom: "1px solid #f8fafc", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <p style={{ fontWeight: 700, fontSize: 12, color: "#0f172a" }}>Agenda de hoy</p>
            <span style={{ fontSize: 10, fontWeight: 700, color: "#16a34a", background: "#dcfce7", padding: "2px 8px", borderRadius: 999 }}>12 citas ✓</span>
          </div>
          {[
            { init: "M", name: "María González", hora: "09:00", tag: "Confirmada", tagC: "#dcfce7", tagT: "#16a34a" },
            { init: "C", name: "Carlos Mendoza", hora: "10:30", tag: "En camino", tagC: "#dbeafe", tagT: "#2563eb" },
            { init: "A", name: "Ana Pérez", hora: "12:00", tag: "Confirmada", tagC: "#dcfce7", tagT: "#16a34a" },
          ].map((a, i) => (
            <div key={a.name} style={{ display: "flex", alignItems: "center", gap: 10, padding: "9px 14px", borderBottom: i < 2 ? "1px solid #f8fafc" : "none" }}>
              <span style={{ width: 28, height: 28, borderRadius: 7, background: "#2563eb", color: "#fff", fontSize: 11, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{a.init}</span>
              <p style={{ fontSize: 12, fontWeight: 600, color: "#0f172a", flex: 1 }}>{a.name}</p>
              <div style={{ textAlign: "right", flexShrink: 0 }}>
                <p style={{ fontSize: 12, fontWeight: 700, color: "#0f172a", marginBottom: 2 }}>{a.hora}</p>
                <span style={{ fontSize: 9, fontWeight: 700, padding: "2px 8px", borderRadius: 999, background: a.tagC, color: a.tagT }}>{a.tag}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div style={{ background: "#fff", borderRadius: 14, border: "1px solid #f1f5f9", padding: "12px 14px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: "#0f172a" }}>Ingresos — últimos 7 días</p>
            <span style={{ fontSize: 11, fontWeight: 700, color: "#16a34a", background: "#dcfce7", padding: "2px 8px", borderRadius: 999 }}>↑ +18%</span>
          </div>
          <div style={{ display: "flex", alignItems: "flex-end", gap: 5, height: 38 }}>
            {[30, 52, 38, 72, 55, 88, 65].map((h, i) => (
              <div key={i} style={{ flex: 1, borderRadius: 4, background: i === 5 ? "#2563eb" : "#e5e7eb", height: `${h}%`, transition: "height 0.3s" }} />
            ))}
          </div>
        </div>
      </div>

      {/* Status bar */}
      <div style={{ padding: "9px 20px", background: "#fff", borderTop: "1px solid #f1f5f9", display: "flex", alignItems: "center", gap: 6 }}>
        <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e" }} />
        <span style={{ fontSize: 11, color: "#9ca3af" }}>Sistema activo · Última sincronización hace 2 min</span>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section style={{ background: "#fff", paddingTop: 96, paddingBottom: 88 }}>
      <div className="container">
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr", gap: 56, alignItems: "center" }}
          className="lg:grid-cols-[1fr_1fr]"
        >
          {/* ── Copy ── */}
          <div style={{ maxWidth: 560 }}>
            {/* Social proof badge */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "#f0fdf4", border: "1px solid #bbf7d0",
              borderRadius: 999, padding: "6px 14px", marginBottom: 28,
            }}>
              <div style={{ display: "flex", marginRight: 2 }}>
                {["#2563eb", "#16a34a", "#7c3aed"].map((c, i) => (
                  <span key={c} style={{ width: 20, height: 20, borderRadius: "50%", background: c, border: "2px solid #fff", marginLeft: i > 0 ? -6 : 0, display: "inline-block" }} />
                ))}
              </div>
              <span style={{ fontSize: 13, fontWeight: 600, color: "#15803d" }}>
                +500 médicos ya usan Rovexca Health
              </span>
            </div>

            {/* Headline */}
            <h1 className="heading" style={{ fontSize: "clamp(2.1rem, 4.5vw, 3.1rem)", marginBottom: 20, lineHeight: 1.08 }}>
              Software para consultorios médicos en México.
              <br />
              <span style={{ color: "#2563eb" }}>Menos caos. Más ingresos.</span>
            </h1>

            {/* Subheadline */}
            <p style={{ fontSize: 18, color: "#374151", lineHeight: 1.65, marginBottom: 32, maxWidth: 470 }}>
              Rovexca Health automatiza tu agenda médica, centraliza el expediente clínico electrónico y controla tus ingresos — todo en un sistema en la nube que médicos de toda México usan desde el primer día.
            </p>

            {/* Bullets */}
            <ul style={{ display: "flex", flexDirection: "column", gap: 11, marginBottom: 36 }}>
              {[
                "Agenda médica digital con recordatorios automáticos por WhatsApp",
                "Expediente clínico electrónico organizado y siempre accesible",
                "Control de pacientes e ingresos en tiempo real, sin Excel",
              ].map(t => (
                <li key={t} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                  <CheckCircle style={{ width: 18, height: 18, color: "#16a34a", flexShrink: 0, marginTop: 2 }} strokeWidth={2.5} />
                  <span style={{ fontSize: 15, color: "#374151", lineHeight: 1.5 }}>{t}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 20 }}>
              <button onClick={openTrial} className="btn-primary" style={{ fontSize: 15, padding: "0.8rem 1.75rem" }}>
                Prueba gratis 15 días — sin tarjeta
                <ArrowRight size={16} />
              </button>
              <a href="#demo" className="btn-secondary" style={{ fontSize: 15 }}>
                Solicitar demo
              </a>
            </div>

            <p style={{ fontSize: 13, color: "#9ca3af" }}>
              Sin tarjeta de crédito · Sin compromiso · Soporte en español
            </p>
          </div>

          {/* ── Visual ── */}
          <div className="hidden lg:flex" style={{ justifyContent: "center", alignItems: "center" }}>
            <div style={{ position: "relative", width: "100%", maxWidth: 480 }}>
              <MiniDashboard />

              {/* Doctor photo — floating card */}
              <div style={{
                position: "absolute",
                bottom: -24,
                left: -28,
                width: 148,
                borderRadius: 14,
                overflow: "hidden",
                boxShadow: "0 8px 32px rgba(15,23,42,0.18)",
                border: "3px solid #fff",
              }}>
                <Image
                  src="/images/doctor-tablet.png"
                  alt="Médico usando Rovexca Health"
                  width={148}
                  height={176}
                  style={{ objectFit: "cover", display: "block", width: "100%", height: 176 }}
                />
                <div style={{ background: "#fff", padding: "7px 10px" }}>
                  <p style={{ fontSize: 11, fontWeight: 700, color: "#0f172a", marginBottom: 1 }}>Dra. García</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                    <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#22c55e" }} />
                    <p style={{ fontSize: 9, color: "#9ca3af" }}>Usuaria activa · 2 años</p>
                  </div>
                </div>
              </div>

              {/* ROI pill — floating top right */}
              <div style={{
                position: "absolute",
                top: -18,
                right: -20,
                background: "#fff",
                borderRadius: 12,
                padding: "10px 14px",
                boxShadow: "0 4px 20px rgba(15,23,42,0.1)",
                border: "1.5px solid #e5e7eb",
              }}>
                <p style={{ fontSize: 10, color: "#9ca3af", fontWeight: 600, marginBottom: 2 }}>INGRESOS ESTE MES</p>
                <p style={{ fontSize: 20, fontWeight: 800, color: "#16a34a", letterSpacing: "-0.02em" }}>+$12,400</p>
                <p style={{ fontSize: 10, color: "#6b7280" }}>vs mes anterior ↑ 23%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
