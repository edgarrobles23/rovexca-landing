"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { leadSchema, type LeadFormData } from "@/lib/validations/lead";

const WA = "528110804363";
const WA_MSG = encodeURIComponent("Hola, quiero agendar una demo de Rovexca Health.");

export default function LeadFormSection() {
  const [done, setDone] = useState(false);
  const [err, setErr] = useState("");

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
  });

  const onSubmit = async (data: LeadFormData) => {
    setErr("");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (json.success) setDone(true);
      else setErr(json.message || "Error. Intenta nuevamente.");
    } catch {
      setErr("Error de conexión.");
    }
  };

  const label = (text: string) => (
    <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 6 }}>
      {text}
    </label>
  );

  const errMsg = (msg?: string) =>
    msg ? <p style={{ fontSize: 12, color: "#dc2626", marginTop: 4 }}>{msg}</p> : null;

  return (
    <section style={{ background: "#fff", padding: "88px 0" }} id="demo">
      <div className="container">
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr", gap: 56, alignItems: "start" }}
          className="lg:grid-cols-[1fr_1.15fr]"
        >
          {/* ── Left: value copy ── */}
          <div>
            <div className="badge" style={{ marginBottom: 20 }}>Demo gratuita · Sin compromiso</div>

            <h2 className="heading" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.4rem)", marginBottom: 16, lineHeight: 1.1 }}>
              En 15 minutos te mostramos cómo mejorar tu consultorio
            </h2>
            <p style={{ fontSize: 16, color: "#6b7280", lineHeight: 1.65, marginBottom: 32 }}>
              Una demo personalizada para tu especialidad. Te explicamos cómo Rovexca Health funciona con tu tipo de práctica — sin tecnicismos.
            </p>

            {/* What you get */}
            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 36 }}>
              {[
                { icon: "⚡", title: "Demo en 15 minutos", desc: "Ve el sistema funcionando para tu especialidad." },
                { icon: "🎯", title: "Personalizada para ti", desc: "Sin demo genérica. Tu flujo, tus módulos." },
                { icon: "🚀", title: "Configuración inicial guiada", desc: "Nuestro equipo te acompaña en la configuración para que empieces de forma ordenada." },
                { icon: "💬", title: "Soporte real en español", desc: "Un equipo humano disponible, no un chatbot." },
              ].map(({ icon, title, desc }) => (
                <div key={title} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <span style={{ width: 40, height: 40, borderRadius: 10, background: "#f8fafc", border: "1.5px solid #e5e7eb", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>
                    {icon}
                  </span>
                  <div>
                    <p style={{ fontWeight: 700, fontSize: 14, color: "#0f172a", marginBottom: 2 }}>{title}</p>
                    <p style={{ fontSize: 13, color: "#6b7280" }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social proof */}
            <div style={{ padding: "16px 20px", background: "#f8fafc", borderRadius: 12, border: "1.5px solid #e5e7eb", marginBottom: 24 }}>
              <p style={{ fontSize: 14, color: "#374151", lineHeight: 1.6, fontStyle: "italic", marginBottom: 8 }}>
                &ldquo;Me convenció la demo. En 20 minutos entendí todo. Ese mismo día di de alta mi consultorio.&rdquo;
              </p>
              <p style={{ fontSize: 12, fontWeight: 700, color: "#0f172a" }}>Dr. Roberto Salinas · Cardiólogo, CDMX</p>
            </div>

            {/* WhatsApp */}
            <div>
              <p style={{ fontSize: 13, color: "#9ca3af", marginBottom: 10 }}>¿Prefieres hablar ahora?</p>
              <a
                href={`https://wa.me/${WA}?text=${WA_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-green"
                style={{ fontSize: 14 }}
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Escribir por WhatsApp
              </a>
            </div>
          </div>

          {/* ── Right: form ── */}
          <div style={{
            background: "#fff",
            border: "1.5px solid #e5e7eb",
            borderRadius: 20,
            padding: "36px 32px",
            boxShadow: "0 4px 40px rgba(15,23,42,0.07)",
            position: "sticky",
            top: 88,
          }}>
            {done ? (
              <div style={{ textAlign: "center", padding: "20px 0" }}>
                <div style={{ width: 64, height: 64, borderRadius: 16, background: "#dcfce7", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5">
                    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 style={{ fontWeight: 700, fontSize: 20, color: "#0f172a", marginBottom: 10 }}>¡Listo! Hemos recibido tu solicitud</h3>
                <p style={{ fontSize: 15, color: "#6b7280", lineHeight: 1.6 }}>
                  Te contactaremos en menos de 24 horas para coordinar tu demo. Revisa tu correo — te enviamos una confirmación.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div style={{ marginBottom: 24 }}>
                  <h3 style={{ fontWeight: 700, fontSize: 18, color: "#0f172a", marginBottom: 4 }}>
                    Solicitar demo gratuita
                  </h3>
                  <p style={{ fontSize: 13, color: "#9ca3af" }}>
                    Completa el formulario · Respuesta en &lt;24h
                  </p>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <div>
                    {label("Nombre completo")}
                    <input {...register("nombre")} className="form-input" placeholder="Dr. Juan Pérez" />
                    {errMsg(errors.nombre?.message)}
                  </div>

                  <div>
                    {label("Especialidad")}
                    <input {...register("especialidad")} className="form-input" placeholder="Ej. Cardiología, Pediatría..." />
                    {errMsg(errors.especialidad?.message)}
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                    <div>
                      {label("Teléfono")}
                      <input {...register("telefono")} type="tel" className="form-input" placeholder="55 1234 5678" />
                      {errMsg(errors.telefono?.message)}
                    </div>
                    <div>
                      {label("Correo")}
                      <input {...register("email")} type="email" className="form-input" placeholder="tu@email.com" />
                      {errMsg(errors.email?.message)}
                    </div>
                  </div>

                  <div>
                    {label("Tamaño del consultorio")}
                    <select {...register("tamano")} className="form-input">
                      <option value="">Selecciona una opción</option>
                      <option value="solo">Solo yo</option>
                      <option value="2-5">2–5 médicos</option>
                      <option value="6-10">6–10 médicos</option>
                      <option value="mas-10">Más de 10</option>
                    </select>
                    {errMsg(errors.tamano?.message)}
                  </div>

                  {err && <p style={{ fontSize: 13, color: "#dc2626", textAlign: "center" }}>{err}</p>}

                  {/* CTA + trust */}
                  <div style={{ marginTop: 4 }}>
                    <button
                      type="submit"
                      className="btn-primary"
                      disabled={isSubmitting}
                      style={{ width: "100%", fontSize: 16, padding: "0.9rem", opacity: isSubmitting ? 0.6 : 1, cursor: isSubmitting ? "not-allowed" : "pointer", marginBottom: 12 }}
                    >
                      {isSubmitting ? "Enviando..." : "Agenda mi demo gratis →"}
                    </button>

                    {/* Trust line */}
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
                      {["Sin compromiso", "Configuración inicial guiada", "Sin tarjeta de crédito"].map(t => (
                        <span key={t} style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 12, color: "#6b7280" }}>
                          <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                            <path d="M2 6l3 3 5-5" stroke="#16a34a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
