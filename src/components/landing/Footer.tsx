"use client";

const WA = "528110804363";
const openTrial = () => window.dispatchEvent(new CustomEvent("rovexca:open-trial"));

export default function Footer() {
  return (
    <footer style={{ background: "#080f1f", color: "#fff" }}>
      <div className="container" style={{ padding: "56px 1.5rem 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 40, marginBottom: 48 }}>

          {/* Brand */}
          <div style={{ gridColumn: "span 2" }}>
            <div style={{ marginBottom: 16 }}>
              <img
                src="/images/logo-footer.png"
                alt="Rovexca Health"
                style={{ height: 52, width: "auto", display: "block", objectFit: "contain" }}
              />
            </div>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", lineHeight: 1.7, maxWidth: 280, marginBottom: 20 }}>
              La plataforma de gestión clínica diseñada para médicos que quieren más control y más ingresos.
            </p>
            <a
              href={`https://wa.me/${WA}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "#16a34a", color: "#fff",
                fontSize: 13, fontWeight: 600,
                padding: "8px 16px", borderRadius: 10,
                textDecoration: "none",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
          </div>

          {/* Product links */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 16 }}>
              Producto
            </p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
              {["Rovexca Agenda", "Rovexca Clinical", "Rovexca Billing", "Rovexca Insights"].map((p) => (
                <li key={p}>
                  <a href="#modulos" style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", textDecoration: "none", transition: "color 0.15s" }}>
                    {p}
                  </a>
                </li>
              ))}
              <li>
                <button onClick={openTrial} style={{ fontSize: 14, fontWeight: 600, color: "#60a5fa", background: "none", border: "none", cursor: "pointer", padding: 0, textDecoration: "underline" }}>
                  Prueba gratis 15 días
                </button>
              </li>
            </ul>
          </div>

          {/* Company links */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 16 }}>
              Empresa
            </p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { t: "Acerca de", h: "#" },
                { t: "Contacto", h: "#demo" },
                { t: "Aviso de privacidad", h: "#" },
                { t: "Términos de uso", h: "#" },
              ].map(({ t, h }) => (
                <li key={t}>
                  <a href={h} style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>
                    {t}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://app.rovexca.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: 14, fontWeight: 600,
                    color: "#60a5fa",
                    textDecoration: "none",
                    display: "inline-flex", alignItems: "center", gap: 5,
                  }}
                >
                  Acceder al sistema
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 6h8M6 2l4 4-4 4" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 28, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.25)" }}>
            © {new Date().getFullYear()} Rovexca Health. Todos los derechos reservados.
          </p>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.2)" }}>
            Hecho con precisión clínica en México 🇲🇽
          </p>
        </div>
      </div>
    </footer>
  );
}
