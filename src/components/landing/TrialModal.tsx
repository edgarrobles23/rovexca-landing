"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { trialSchema, type TrialFormData } from "@/lib/validations/trial";

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

/* ─── Small helpers ──────────────────────────────────────────────── */

function Label({ text, required }: { text: string; required?: boolean }) {
  return (
    <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 6 }}>
      {text}
      {required && <span style={{ color: "#dc2626", marginLeft: 3 }}>*</span>}
    </label>
  );
}

function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null;
  return (
    <p style={{ fontSize: 12, color: "#dc2626", marginTop: 4, display: "flex", alignItems: "center", gap: 4 }}>
      <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
        <circle cx="6" cy="6" r="5" stroke="#dc2626" strokeWidth="1.4" />
        <path d="M6 4v3M6 8.5v.5" stroke="#dc2626" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
      {msg}
    </p>
  );
}

/* ─── Success panel ──────────────────────────────────────────────── */

function SuccessPanel({ onClose }: { onClose: () => void }) {
  return (
    <div style={{ textAlign: "center", padding: "32px 16px 16px" }}>
      <div style={{
        width: 72, height: 72, borderRadius: 20,
        background: "linear-gradient(135deg, #dcfce7, #bbf7d0)",
        display: "flex", alignItems: "center", justifyContent: "center",
        margin: "0 auto 24px",
        boxShadow: "0 4px 20px rgba(22,163,74,0.2)",
      }}>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 6L9 17l-5-5" />
        </svg>
      </div>

      <h3 style={{ fontWeight: 800, fontSize: 21, color: "#0f172a", marginBottom: 10, letterSpacing: "-0.02em" }}>
        ¡Tu prueba ha sido activada!
      </h3>
      <p style={{ fontSize: 15, color: "#6b7280", lineHeight: 1.7, maxWidth: 340, margin: "0 auto 24px" }}>
        Revisa tu correo electrónico. Te enviamos un enlace para establecer tu contraseña y acceder a tu cuenta.
      </p>

      <div style={{
        background: "#f0fdf4", border: "1px solid #bbf7d0",
        borderRadius: 12, padding: "14px 20px", maxWidth: 360, margin: "0 auto 28px",
      }}>
        <p style={{ fontSize: 13, color: "#15803d", fontWeight: 600, lineHeight: 1.6 }}>
          ¿No ves el correo? Revisa la carpeta de spam o contáctanos por WhatsApp y te ayudamos.
        </p>
      </div>

      <button
        onClick={onClose}
        className="btn-primary"
        style={{ fontSize: 15, padding: "0.75rem 2rem" }}
      >
        Cerrar
      </button>
    </div>
  );
}

/* ─── Main modal ─────────────────────────────────────────────────── */

export default function TrialModal({ isOpen, onClose }: Props) {
  const [done, setDone] = useState(false);
  const [apiErr, setApiErr] = useState("");
  const [turnstileErr, setTurnstileErr] = useState(false); // widget-level error
  const [turnstileToken, setTurnstileToken] = useState("");

  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  /* ── Turnstile explicit render ─────────────────────────────────── */

  const renderWidget = useCallback(() => {
    if (!containerRef.current || !SITE_KEY) return;
    const ts = (window as any).turnstile;
    if (!ts) return;

    // Remove previous instance if any
    if (widgetIdRef.current !== null) {
      try { ts.remove(widgetIdRef.current); } catch {}
      widgetIdRef.current = null;
    }
    containerRef.current.innerHTML = "";

    setTurnstileErr(false);
    widgetIdRef.current = ts.render(containerRef.current, {
      sitekey: SITE_KEY,
      callback: (token: string) => { setTurnstileToken(token); setTurnstileErr(false); },
      "expired-callback": () => { setTurnstileToken(""); },
      "error-callback": () => { setTurnstileToken(""); setTurnstileErr(true); },
      theme: "light",
      size: "flexible",
    });
  }, []);

  const removeWidget = useCallback(() => {
    const ts = (window as any).turnstile;
    if (widgetIdRef.current !== null && ts) {
      try { ts.remove(widgetIdRef.current); } catch {}
      widgetIdRef.current = null;
    }
    if (containerRef.current) containerRef.current.innerHTML = "";
    setTurnstileToken("");
  }, []);

  /* ── Modal lifecycle ───────────────────────────────────────────── */

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      removeWidget();
      setApiErr("");
      setDone(false);
      return;
    }

    document.body.style.overflow = "hidden";
    setApiErr("");
    setTurnstileErr(false);

    // Poll until turnstile script is available (lazyOnload may still be loading)
    let attempts = 0;
    let timerId: ReturnType<typeof setTimeout>;

    const tryRender = () => {
      if ((window as any).turnstile) {
        renderWidget();
      } else if (attempts < 15) {
        attempts++;
        timerId = setTimeout(tryRender, 200);
      }
    };

    timerId = setTimeout(tryRender, 80);
    return () => {
      clearTimeout(timerId);
      document.body.style.overflow = "";
    };
  }, [isOpen, renderWidget, removeWidget]);

  /* ── Escape key ────────────────────────────────────────────────── */

  useEffect(() => {
    if (!isOpen) return;
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape") handleClose(); };
    document.addEventListener("keydown", fn);
    return () => document.removeEventListener("keydown", fn);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  /* ── Form ──────────────────────────────────────────────────────── */

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TrialFormData>({ resolver: zodResolver(trialSchema) });

  const onSubmit = async (data: TrialFormData) => {
    setApiErr("");

    if (!turnstileToken) {
      setApiErr("Completa la verificación de seguridad antes de continuar.");
      return;
    }

    const resetTurnstileWidget = () => {
      const ts = (window as any).turnstile;
      if (widgetIdRef.current !== null && ts) {
        try { ts.reset(widgetIdRef.current); } catch { renderWidget(); }
      } else {
        renderWidget();
      }
      setTurnstileToken("");
    };

    try {
      const res = await fetch("/api/trial", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          usersEstimate: Number(data.usersEstimate),
          turnstileToken,
        }),
      });
      const json = await res.json();

      if (json.success) {
        setDone(true);
        reset();
      } else {
        // Detect backend Turnstile validation failure → reset widget and explain clearly
        const msg: string = json.message ?? "";
        const isTurnstileRejection =
          msg.toLowerCase().includes("verificar") ||
          msg.toLowerCase().includes("turnstile") ||
          msg.toLowerCase().includes("seguridad");

        if (isTurnstileRejection) {
          setApiErr("La verificación de seguridad no pudo completarse. Se ha generado un código nuevo — intenta enviar de nuevo.");
          resetTurnstileWidget();
        } else {
          setApiErr(msg || "Ocurrió un error. Intenta nuevamente.");
        }
      }
    } catch {
      setApiErr("Error de conexión. Verifica tu internet e intenta de nuevo.");
      resetTurnstileWidget();
    }
  };

  const handleClose = () => {
    if (isSubmitting) return;
    reset();
    setDone(false);
    setApiErr("");
    onClose();
  };

  /* ── Render ────────────────────────────────────────────────────── */

  if (!isOpen) return null;

  const canSubmit = !isSubmitting && !!turnstileToken;

  return (
    <div
      onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
      role="dialog"
      aria-modal="true"
      aria-label="Activar prueba gratuita"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1000,
        background: "rgba(15, 23, 42, 0.55)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
      }}
    >
      <div style={{
        background: "#fff",
        borderRadius: 20,
        width: "100%",
        maxWidth: 560,
        maxHeight: "92vh",
        overflowY: "auto",
        boxShadow: "0 24px 64px rgba(15,23,42,0.18), 0 4px 16px rgba(15,23,42,0.08)",
        position: "relative",
      }}>

        {/* Close button */}
        <button
          onClick={handleClose}
          aria-label="Cerrar"
          style={{
            position: "absolute", top: 16, right: 16, zIndex: 1,
            width: 32, height: 32, borderRadius: 8,
            background: "#f1f5f9", border: "none", cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "background 0.15s",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "#e2e8f0")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "#f1f5f9")}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round">
            <path d="M1 1l12 12M13 1L1 13" />
          </svg>
        </button>

        <div style={{ padding: "32px 32px 28px" }}>
          {done ? (
            <SuccessPanel onClose={handleClose} />
          ) : (
            <>
              {/* Header */}
              <div style={{ marginBottom: 24, paddingRight: 24 }}>
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  background: "#dbeafe", color: "#1d4ed8",
                  fontSize: 12, fontWeight: 700,
                  padding: "4px 12px", borderRadius: 999,
                  marginBottom: 12, letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}>
                  15 días gratis · Sin tarjeta de crédito
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
                  <img
                    src="/images/isotipo.png"
                    alt=""
                    aria-hidden="true"
                    style={{ height: 26, width: "auto", display: "block", objectFit: "contain", flexShrink: 0 }}
                  />
                  <h2 style={{ fontWeight: 800, fontSize: 20, color: "#0f172a", letterSpacing: "-0.02em", margin: 0 }}>
                    Activa tu prueba gratuita
                  </h2>
                </div>
                <p style={{ fontSize: 13, color: "#9ca3af" }}>
                  Acceso completo a todos los módulos durante 15 días.
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>

                  {/* Nombre */}
                  <div>
                    <Label text="Nombre completo" required />
                    <input {...register("name")} className="form-input" placeholder="Dr. Juan Pérez" autoComplete="name" />
                    <FieldError msg={errors.name?.message} />
                  </div>

                  {/* Correo + Teléfono */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                    <div>
                      <Label text="Correo" required />
                      <input {...register("email")} type="email" className="form-input" placeholder="tu@clinica.com" autoComplete="email" />
                      <FieldError msg={errors.email?.message} />
                    </div>
                    <div>
                      <Label text="Teléfono" required />
                      <input {...register("phone")} type="tel" className="form-input" placeholder="81 1234 5678" autoComplete="tel" />
                      <FieldError msg={errors.phone?.message} />
                    </div>
                  </div>

                  {/* Clínica */}
                  <div>
                    <Label text="Clínica / Consultorio" required />
                    <input {...register("organization")} className="form-input" placeholder="Clínica Santa María" autoComplete="organization" />
                    <FieldError msg={errors.organization?.message} />
                  </div>

                  {/* Ciudad + Especialidad */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                    <div>
                      <Label text="Ciudad" />
                      <input {...register("city")} className="form-input" placeholder="Monterrey" />
                    </div>
                    <div>
                      <Label text="Especialidad" />
                      <input {...register("specialty")} className="form-input" placeholder="Cardiología" />
                    </div>
                  </div>

                  {/* Número de usuarios */}
                  <div>
                    <Label text="Número estimado de usuarios" required />
                    <select {...register("usersEstimate")} className="form-input">
                      <option value="">Selecciona una opción</option>
                      <option value="1">Solo yo (1 médico)</option>
                      <option value="3">2–5 médicos</option>
                      <option value="8">6–10 médicos</option>
                      <option value="15">11–20 médicos</option>
                      <option value="25">Más de 20</option>
                    </select>
                    <FieldError msg={errors.usersEstimate?.message} />
                  </div>

                  {/* Turnstile */}
                  <div>
                    <div ref={containerRef} style={{ minHeight: 65 }} />
                    {turnstileErr && (
                      <p style={{ fontSize: 12, color: "#dc2626", marginTop: 6, display: "flex", alignItems: "center", gap: 5 }}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <circle cx="6" cy="6" r="5" stroke="#dc2626" strokeWidth="1.4" />
                          <path d="M6 4v3M6 8.5v.5" stroke="#dc2626" strokeWidth="1.4" strokeLinecap="round" />
                        </svg>
                        Error al cargar la verificación. Recarga la página e intenta de nuevo.
                      </p>
                    )}
                  </div>

                  {/* Error general */}
                  {apiErr && (
                    <div style={{
                      padding: "10px 14px",
                      background: "#fef2f2",
                      border: "1px solid #fecaca",
                      borderRadius: 10,
                      display: "flex", alignItems: "flex-start", gap: 8,
                    }}>
                      <svg width="15" height="15" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: 1 }}>
                        <circle cx="8" cy="8" r="7" stroke="#dc2626" strokeWidth="1.5" />
                        <path d="M8 5v4M8 10.5v.5" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                      <p style={{ fontSize: 13, color: "#dc2626", lineHeight: 1.5 }}>{apiErr}</p>
                    </div>
                  )}

                  {/* Submit */}
                  <div style={{ marginTop: 4 }}>
                    <button
                      type="submit"
                      className="btn-primary"
                      disabled={!canSubmit}
                      style={{
                        width: "100%", fontSize: 16, padding: "0.875rem",
                        opacity: canSubmit ? 1 : 0.5,
                        cursor: canSubmit ? "pointer" : "not-allowed",
                        marginBottom: 12,
                        position: "relative",
                      }}
                    >
                      {isSubmitting ? (
                        <>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                            style={{ animation: "spin 0.8s linear infinite" }}>
                            <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" opacity="0.25" />
                            <path d="M21 12a9 9 0 00-9-9" strokeLinecap="round" />
                          </svg>
                          Activando tu prueba...
                        </>
                      ) : (
                        "Activar prueba gratis →"
                      )}
                    </button>

                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
                      {["Sin compromiso", "Sin tarjeta", "15 días gratis"].map((t) => (
                        <span key={t} style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 12, color: "#9ca3af" }}>
                          <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                            <path d="M2 6l3 3 5-5" stroke="#16a34a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
