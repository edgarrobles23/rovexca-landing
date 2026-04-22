"use client";

import { useState } from "react";

const faqs = [
  {
    q: "¿Qué es un software para consultorios médicos?",
    a: "Es un sistema digital que permite a los médicos gestionar su práctica clínica desde una sola plataforma: agenda de citas, expediente clínico electrónico, control de ingresos y administración de pacientes. Rovexca Health es un software para consultorios médicos en México diseñado para que cualquier médico lo use desde el primer día, sin necesitar conocimientos técnicos.",
  },
  {
    q: "¿Qué incluye el expediente clínico electrónico de Rovexca Health?",
    a: "Rovexca Clinical incluye notas de consulta digitales organizadas por paciente y fecha, adjuntos de estudios e imágenes médicas, historial completo de consultas y plantillas personalizables por especialidad. Todo accesible desde cualquier dispositivo con conexión a internet.",
  },
  {
    q: "¿Funciona para clínicas pequeñas con varios médicos?",
    a: "Sí. Rovexca Health está diseñado tanto para consultorios unipersonales como para clínicas pequeñas con múltiples médicos. Puedes gestionar agendas, expedientes e ingresos de todo el equipo desde una sola cuenta, con acceso controlado por usuario.",
  },
  {
    q: "¿Necesito instalar algo para usar Rovexca Health?",
    a: "No. Rovexca Health es un software médico 100% en la nube. No requiere instalaciones, servidores propios ni mantenimiento técnico. Solo necesitas un navegador web o tu celular para acceder desde cualquier lugar.",
  },
  {
    q: "¿Puedo usar Rovexca Health si ya tengo pacientes registrados en otro sistema?",
    a: "Sí. Es posible migrar la información de tus pacientes desde otros sistemas. El tiempo y alcance del proceso dependerán de la estructura y volumen de los datos. Nuestro equipo puede ayudarte a evaluar el mejor enfoque, orientarte y, en caso necesario, ofrecer apoyo en la migración.",
  },
  {
    q: "¿Cuánto cuesta el software para consultorio médico?",
    a: "Rovexca Health tiene un precio de $599 MXN al mes durante el período de lanzamiento, con acceso completo a todos los módulos: agenda médica digital, expediente clínico electrónico y control de ingresos. Sin contratos anuales ni costos ocultos. Puedes cancelar cuando quieras.",
  },
];

function Item({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{
      border: "1.5px solid #e5e7eb",
      borderRadius: 14,
      overflow: "hidden",
      transition: "border-color 0.15s",
    }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%", textAlign: "left",
          padding: "20px 24px",
          background: open ? "#f8fafc" : "#fff",
          border: "none", cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16,
          transition: "background 0.15s",
        }}
      >
        <span style={{ fontWeight: 700, fontSize: 15, color: "#0f172a", lineHeight: 1.4 }}>{q}</span>
        <span style={{
          width: 28, height: 28, borderRadius: 8,
          background: open ? "#2563eb" : "#f1f5f9",
          display: "flex", alignItems: "center", justifyContent: "center",
          flexShrink: 0, transition: "background 0.15s",
        }}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
            style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>
            <path d="M2 4l4 4 4-4" stroke={open ? "#fff" : "#6b7280"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>
      {open && (
        <div style={{ padding: "0 24px 20px", background: "#f8fafc" }}>
          <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.7 }}>{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQSection() {
  return (
    <section style={{ background: "#f8fafc", padding: "88px 0" }}>
      <div className="container">
        <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 52px" }}>
          <div className="badge" style={{ marginBottom: 16 }}>Preguntas frecuentes</div>
          <h2 className="heading" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", marginBottom: 16 }}>
            Todo lo que quieres saber
            <br />sobre Rovexca Health
          </h2>
          <p style={{ fontSize: 16, color: "#6b7280", lineHeight: 1.65 }}>
            Resolvemos las dudas más comunes sobre nuestro software para consultorios médicos en México.
          </p>
        </div>

        <div style={{ maxWidth: 760, margin: "0 auto", display: "flex", flexDirection: "column", gap: 12 }}>
          {faqs.map(({ q, a }) => (
            <Item key={q} q={q} a={a} />
          ))}
        </div>
      </div>
    </section>
  );
}
