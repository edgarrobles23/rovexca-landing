"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const links = [
  { label: "Módulos", href: "#modulos" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Agenda demo", href: "#demo" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const fn = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);

  const openTrial = () => {
    setOpen(false);
    window.dispatchEvent(new CustomEvent("rovexca:open-trial"));
  };

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      background: scrolled || open ? "rgba(255,255,255,0.97)" : "transparent",
      backdropFilter: scrolled || open ? "blur(12px)" : "none",
      borderBottom: scrolled || open ? "1px solid #e5e7eb" : "1px solid transparent",
      transition: "background 0.25s ease, border-color 0.25s ease",
    }}>
      {/* ── Main bar ─────────────────────────────────────────────── */}
      <div style={{
        maxWidth: 1200, margin: "0 auto", padding: "0 1.5rem",
        height: 68, display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>

        {/* Logo */}
        <Link
          href="/"
          style={{
            display: "flex", alignItems: "center", flexShrink: 0,
            textDecoration: "none",
            transition: "opacity 0.15s ease, transform 0.15s ease",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.opacity = "0.85";
            (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1.02)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
            (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)";
          }}
        >
          <img
            src="/images/logo.png"
            alt="Rovexca Health"
            style={{ height: "clamp(32px, 5vw, 50px)", width: "auto", display: "block" }}
          />
        </Link>

        {/* Desktop nav — hidden on mobile via media query class */}
        <nav className="desktop-nav" style={{ alignItems: "center", gap: 32 }}>
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              style={{ fontSize: 14, fontWeight: 500, color: "#6b7280", textDecoration: "none", transition: "color 0.15s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#0f172a")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#6b7280")}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="desktop-nav" style={{ alignItems: "center", gap: 10 }}>
          <a
            href="https://app.rovexca.ai"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: 14, fontWeight: 500, color: "#6b7280", textDecoration: "none", padding: "0.5rem 1rem", transition: "color 0.15s" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#0f172a")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#6b7280")}
          >
            Iniciar sesión
          </a>
          <button onClick={openTrial} className="btn-primary" style={{ fontSize: 14, padding: "0.5rem 1.25rem" }}>
            Prueba gratis
          </button>
        </div>

        {/* Hamburger — only on mobile */}
        <button
          className="mobile-menu-btn"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          style={{ background: "none", border: "none", cursor: "pointer", padding: 8, flexShrink: 0 }}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="#374151" strokeWidth="2" strokeLinecap="round">
            {open
              ? <><line x1="5" y1="5" x2="17" y2="17" /><line x1="17" y1="5" x2="5" y2="17" /></>
              : <><line x1="3" y1="7" x2="19" y2="7" /><line x1="3" y1="11" x2="19" y2="11" /><line x1="3" y1="15" x2="19" y2="15" /></>
            }
          </svg>
        </button>
      </div>

      {/* ── Mobile dropdown menu ──────────────────────────────────── */}
      {open && (
        <div style={{
          background: "#fff",
          borderTop: "1px solid #f1f5f9",
          padding: "0.5rem 1.5rem 1.5rem",
        }}>
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                display: "block", padding: "0.875rem 0",
                fontSize: 16, fontWeight: 500, color: "#374151",
                textDecoration: "none", borderBottom: "1px solid #f1f5f9",
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#2563eb")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#374151")}
            >
              {l.label}
            </a>
          ))}

          <a
            href="https://app.rovexca.ai"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            style={{
              display: "block", padding: "0.875rem 0",
              fontSize: 16, fontWeight: 500, color: "#6b7280",
              textDecoration: "none", borderBottom: "1px solid #f1f5f9",
            }}
          >
            Iniciar sesión
          </a>

          <button
            onClick={openTrial}
            className="btn-primary"
            style={{ width: "100%", marginTop: "1rem", textAlign: "center", fontSize: 15 }}
          >
            Prueba gratis 15 días →
          </button>
        </div>
      )}
    </header>
  );
}
