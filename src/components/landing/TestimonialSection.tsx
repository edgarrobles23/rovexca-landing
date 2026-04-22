const testimonials = [
  {
    quote: "Desde que implementé Rovexca Health recuperé casi 2 horas diarias. Mis ingresos subieron un 30% en el primer trimestre. Antes usaba Excel para todo. Hoy simplemente funciona.",
    name: "Dr. Roberto Salinas",
    role: "Cardiólogo · Ciudad de México",
    initials: "RS",
    stars: 5,
    highlight: true,
  },
  {
    quote: "El módulo de agenda transformó mi relación con los pacientes. Cero no-shows. Mis recordatorios ahora van solos y los pacientes llegan puntuales.",
    name: "Dra. Patricia Leal",
    role: "Pediatra · Monterrey",
    initials: "PL",
    stars: 5,
    highlight: false,
  },
  {
    quote: "Rovexca Clinical es increíble. El expediente digital cumple la norma desde el primer día. Soporte respondió en menos de 1 hora cuando lo necesité.",
    name: "Dr. Jorge Méndez",
    role: "Medicina Familiar · Guadalajara",
    initials: "JM",
    stars: 5,
    highlight: false,
  },
];

function Stars({ n }: { n: number }) {
  return (
    <div style={{ display: "flex", gap: 2, marginBottom: 16 }}>
      {Array.from({ length: n }).map((_, i) => (
        <svg key={i} width="15" height="15" viewBox="0 0 24 24" fill="#f59e0b">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialSection() {
  return (
    <section className="section" id="testimonios">
      <div className="container">
        {/* Heading */}
        <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 56px" }}>
          <div className="badge" style={{ marginBottom: 16 }}>Testimonios</div>
          <h2 className="heading" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", marginBottom: 16 }}>
            Médicos que ya lo transformaron
          </h2>
          <p style={{ fontSize: 17, color: "#6b7280", lineHeight: 1.65 }}>
            Más de 500 médicos en México ya gestionan su consultorio con Rovexca Health — desde consultorios privados hasta clínicas pequeñas. Aquí lo que dicen.
          </p>
        </div>

        {/* Main testimonial */}
        <div style={{
          background: "#eff6ff",
          border: "1.5px solid #bfdbfe",
          borderRadius: 20,
          padding: "40px 40px",
          marginBottom: 20,
          position: "relative",
          overflow: "hidden",
        }}>
          <span style={{
            position: "absolute", top: 16, right: 24,
            fontSize: 120, fontWeight: 800, color: "#bfdbfe",
            lineHeight: 1, userSelect: "none", pointerEvents: "none",
          }}>&ldquo;</span>

          <div style={{ display: "flex", gap: 28, alignItems: "flex-start", flexWrap: "wrap" }}>
            <div style={{
              width: 72, height: 72, borderRadius: 16,
              background: "#2563eb", color: "#fff",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontWeight: 800, fontSize: 22, flexShrink: 0,
            }}>
              {testimonials[0].initials}
            </div>
            <div style={{ flex: 1, minWidth: 260 }}>
              <Stars n={testimonials[0].stars} />
              <p style={{ fontSize: 18, color: "#1e40af", lineHeight: 1.7, fontStyle: "italic", marginBottom: 20 }}>
                &ldquo;{testimonials[0].quote}&rdquo;
              </p>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
                <div>
                  <p style={{ fontWeight: 700, fontSize: 15, color: "#0f172a" }}>{testimonials[0].name}</p>
                  <p style={{ fontSize: 13, color: "#6b7280" }}>{testimonials[0].role}</p>
                </div>
                <span style={{ background: "#dcfce7", color: "#16a34a", fontSize: 12, fontWeight: 700, padding: "4px 14px", borderRadius: 999 }}>
                  Usuario verificado ✓
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
          {testimonials.slice(1).map(({ quote, name, role, initials, stars }) => (
            <div key={name} className="card" style={{ padding: 28 }}>
              <Stars n={stars} />
              <p style={{ fontSize: 15, color: "#374151", lineHeight: 1.7, marginBottom: 20 }}>
                &ldquo;{quote}&rdquo;
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{
                  width: 38, height: 38, borderRadius: 10,
                  background: "#2563eb", color: "#fff",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontWeight: 800, fontSize: 13, flexShrink: 0,
                }}>
                  {initials}
                </span>
                <div>
                  <p style={{ fontWeight: 700, fontSize: 14, color: "#0f172a" }}>{name}</p>
                  <p style={{ fontSize: 12, color: "#9ca3af" }}>{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
