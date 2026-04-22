"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  {
    prefix: "-",
    value: 3,
    suffix: "h",
    period: "por día",
    label: "Menos trabajo admin",
    desc: "Los médicos recuperan 3 horas diarias que antes perdían en papeleo y seguimientos manuales.",
    color: "#2563eb",
    bg: "#eff6ff",
    border: "#bfdbfe",
  },
  {
    prefix: "+",
    value: 30,
    suffix: "%",
    period: "en 3 meses",
    label: "Más ingresos",
    desc: "Promedio de incremento de ingresos gracias a mejor retención de pacientes y control financiero.",
    color: "#16a34a",
    bg: "#f0fdf4",
    border: "#bbf7d0",
  },
  {
    prefix: "",
    value: 24,
    suffix: "h",
    period: "para estar activo",
    label: "Onboarding express",
    desc: "Configuramos tu consultorio en menos de 24 horas. Sin instalaciones, sin técnicos, sin complicaciones.",
    color: "#7c3aed",
    bg: "#f5f3ff",
    border: "#ddd6fe",
  },
  {
    prefix: "+",
    value: 500,
    suffix: "",
    period: "médicos activos",
    label: "Confían en Rovexca Health",
    desc: "Consultorios de toda la República ya gestionan su práctica con nuestra plataforma.",
    color: "#d97706",
    bg: "#fffbeb",
    border: "#fde68a",
  },
];

function Counter({ end, duration = 1600 }: { end: number; duration?: number }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const t0 = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - t0) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setVal(Math.round(eased * end));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.4 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{val}</span>;
}

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

        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: 16 }}>
          {stats.map(({ prefix, value, suffix, period, label, desc, color, bg, border }) => (
            <div key={label} style={{
              background: "#fff",
              borderRadius: 16,
              padding: "28px 24px",
              border: `1.5px solid ${border}`,
              position: "relative",
              overflow: "hidden",
            }}>
              {/* Accent top bar */}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: color, opacity: 0.6 }} />

              {/* Number */}
              <div style={{ marginBottom: 4 }}>
                <span style={{ fontSize: "clamp(2.4rem, 4vw, 3rem)", fontWeight: 800, color, letterSpacing: "-0.03em", lineHeight: 1 }}>
                  {prefix}<Counter end={value} />{suffix}
                </span>
              </div>
              <p style={{ fontSize: 12, fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 10 }}>
                {period}
              </p>
              <p style={{ fontWeight: 700, fontSize: 15, color: "#0f172a", marginBottom: 6 }}>{label}</p>
              <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.55 }}>{desc}</p>
            </div>
          ))}
        </div>

        {/* Source note */}
        <p style={{ textAlign: "center", marginTop: 24, fontSize: 12, color: "#9ca3af" }}>
          * Basado en datos agregados de consultorios médicos activos en Rovexca Health, México. Los resultados individuales pueden variar según el tamaño y tipo de consultorio.
        </p>
      </div>
    </section>
  );
}
