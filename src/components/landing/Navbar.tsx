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

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: scrolled ? "rgba(255,255,255,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #e5e7eb" : "1px solid transparent",
        transition: "all 0.25s ease",
      }}
    >
      <div className="container" style={{ height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
          <span style={{
            width: 32, height: 32,
            borderRadius: 8,
            background: "#2563eb",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8.5L6.5 12L13 4" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span style={{ fontWeight: 700, fontSize: 17, color: "#0f172a", letterSpacing: "-0.02em" }}>
            Rovexca <span style={{ color: "#2563eb" }}>Health</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: 32 }} className="hidden md:flex">
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
        <div className="hidden md:flex" style={{ alignItems: "center", gap: 10 }}>
          <a
            href="https://app.rovexca.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: 14, fontWeight: 500, color: "#6b7280",
              textDecoration: "none", padding: "0.5rem 1rem",
              transition: "color 0.15s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#0f172a")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#6b7280")}
          >
            Iniciar sesión
          </a>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent("rovexca:open-trial"))}
            className="btn-primary"
            style={{ fontSize: 14, padding: "0.5rem 1.25rem" }}
          >
            Prueba gratis
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          style={{ background: "none", border: "none", cursor: "pointer", padding: 8 }}
          aria-label="Menú"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#374151" strokeWidth="2">
            {open
              ? <><path d="M5 5l10 10M15 5L5 15" strokeLinecap="round" /></>
              : <><path d="M3 6h14M3 10h14M3 14h14" strokeLinecap="round" /></>
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{
          background: "#fff",
          borderTop: "1px solid #e5e7eb",
          padding: "1rem 1.5rem",
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}>
          {links.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}
              style={{ fontSize: 15, fontWeight: 500, color: "#374151", textDecoration: "none" }}>
              {l.label}
            </a>
          ))}
          <a
            href="https://app.rovexca.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: 15, fontWeight: 500, color: "#6b7280", textDecoration: "none" }}
            onClick={() => setOpen(false)}
          >
            Iniciar sesión
          </a>
          <button
            onClick={() => {
              setOpen(false);
              window.dispatchEvent(new CustomEvent("rovexca:open-trial"));
            }}
            className="btn-primary"
            style={{ textAlign: "center", width: "100%" }}
          >
            Prueba gratis 15 días
          </button>
        </div>
      )}
    </header>
  );
}
