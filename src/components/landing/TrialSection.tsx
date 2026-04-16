"use client";

import Script from "next/script";
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import TrialModal from "./TrialModal";

const benefits = [
  {
    icon: "⚡",
    title: "Acceso inmediato",
    desc: "Tu consultorio configurado en horas. Sin instalaciones ni técnicos.",
    color: "#2563eb",
    bg: "#eff6ff",
    border: "#bfdbfe",
  },
  {
    icon: "📦",
    title: "Todos los módulos incluidos",
    desc: "Agenda, expedientes, billing e insights. Sin límites durante los 15 días.",
    color: "#16a34a",
    bg: "#f0fdf4",
    border: "#bbf7d0",
  },
  {
    icon: "🎯",
    title: "Soporte dedicado",
    desc: "Un equipo humano te acompaña durante toda la prueba, en español.",
    color: "#7c3aed",
    bg: "#f5f3ff",
    border: "#ddd6fe",
  },
  {
    icon: "🔒",
    title: "Sin tarjeta de crédito",
    desc: "Solo los datos de tu clínica. Sin compromisos ni cargos automáticos.",
    color: "#d97706",
    bg: "#fffbeb",
    border: "#fde68a",
  },
];

export default function TrialSection() {
  const [modalOpen, setModalOpen] = useState(false);

  // Listen for custom event fired by Navbar or any other CTA outside this section
  useEffect(() => {
    const fn = () => setModalOpen(true);
    window.addEventListener("rovexca:open-trial", fn);
    return () => window.removeEventListener("rovexca:open-trial", fn);
  }, []);

  return (
    <>
      {/* Load Turnstile with explicit render — no widget appears until we call turnstile.render() */}
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="lazyOnload"
      />

      <section style={{ background: "#f0f7ff", padding: "88px 0", borderTop: "1px solid #dbeafe" }} id="trial">
        <div className="container">

          {/* ── Heading ── */}
          <div style={{ textAlign: "center", maxWidth: 620, margin: "0 auto 56px" }}>
            <div
              className="badge"
              style={{ marginBottom: 16, background: "#dbeafe", color: "#1d4ed8", border: "1px solid #bfdbfe" }}
            >
              Prueba gratuita · 15 días · Sin tarjeta de crédito
            </div>
            <h2 className="heading" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", marginBottom: 16 }}>
              Prueba Rovexca Health
              <span style={{ color: "#2563eb" }}> gratis por 15 días</span>
            </h2>
            <p style={{ fontSize: 17, color: "#6b7280", lineHeight: 1.65 }}>
              Configura tu consultorio hoy y accede a todos los módulos sin costo.
              Sin fricción, sin sorpresas.
            </p>
          </div>

          {/* ── Benefit cards ── */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 16,
            marginBottom: 52,
          }}>
            {benefits.map(({ icon, title, desc, color, bg, border }) => (
              <div key={title} style={{
                background: "#fff",
                border: `1.5px solid ${border}`,
                borderRadius: 16, padding: "22px 20px",
                position: "relative", overflow: "hidden",
              }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: color, opacity: 0.5 }} />
                <span style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  width: 40, height: 40, borderRadius: 10,
                  background: bg, fontSize: 18, marginBottom: 12,
                }}>
                  {icon}
                </span>
                <p style={{ fontWeight: 700, fontSize: 14, color: "#0f172a", marginBottom: 4 }}>{title}</p>
                <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.55 }}>{desc}</p>
              </div>
            ))}
          </div>

          {/* ── CTAs ── */}
          <div style={{ textAlign: "center" }}>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginBottom: 16 }}>
              <button
                onClick={() => setModalOpen(true)}
                className="btn-primary"
                style={{ fontSize: 16, padding: "0.875rem 2rem" }}
              >
                Prueba gratis 15 días
                <ArrowRight size={16} />
              </button>
              <a href="#demo" className="btn-secondary" style={{ fontSize: 16, padding: "0.875rem 2rem" }}>
                Solicitar demo
              </a>
            </div>

            <p style={{ fontSize: 14, color: "#9ca3af" }}>
              Prueba por tu cuenta o agenda una demo guiada con nuestro equipo.
            </p>

            {/* Trust strip */}
            <div style={{ display: "flex", justifyContent: "center", gap: 24, flexWrap: "wrap", marginTop: 24 }}>
              {["Sin contrato", "Cancela cuando quieras", "Soporte en español", "+500 consultorios activos"].map((t) => (
                <span key={t} style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 13, color: "#6b7280" }}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l3 3 5-5" stroke="#16a34a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {t}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      <TrialModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
