const profiles = [
  {
    icon: "🩺",
    title: "Médicos generales",
    desc: "Gestiona tu agenda, lleva el expediente clínico electrónico de cada paciente y controla tus ingresos — todo desde un solo sistema en la nube.",
    keywords: "software para médicos generales",
  },
  {
    icon: "🫀",
    title: "Médicos especialistas",
    desc: "Cardiólogos, pediatras, ginecólogos y más. Rovexca Health se adapta a la forma en que llevas tu consulta, permitiéndote registrar la información clínica de tus pacientes de manera clara y organizada.",
    keywords: "software para especialistas médicos",
  },
  {
    icon: "🏥",
    title: "Consultorios privados",
    desc: "Desde un consultorio unipersonal hasta uno con varios médicos. Administra todo sin depender de asistentes ni de hojas de Excel.",
    keywords: "software para consultorio privado México",
  },
  {
    icon: "🏢",
    title: "Clínicas pequeñas",
    desc: "Coordina múltiples médicos, agendas y expedientes en una sola plataforma. Control total sin la complejidad de un sistema hospitalario.",
    keywords: "sistema para clínicas pequeñas México",
  },
];

export default function WhoIsItForSection() {
  return (
    <section style={{ background: "#fff", padding: "88px 0" }}>
      <div className="container">
        <div style={{ textAlign: "center", maxWidth: 580, margin: "0 auto 56px" }}>
          <div className="badge" style={{ marginBottom: 16 }}>¿Para quién es?</div>
          <h2 className="heading" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", marginBottom: 16 }}>
            Diseñado para médicos en México,
            <br />sin importar el tamaño de tu práctica
          </h2>
          <p style={{ fontSize: 17, color: "#6b7280", lineHeight: 1.65 }}>
            Rovexca Health funciona para cualquier tipo de consultorio médico o clínica privada en México que quiera dejar atrás el papel y el desorden.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
          {profiles.map(({ icon, title, desc }) => (
            <div key={title} className="card" style={{ padding: 28 }}>
              <div style={{
                width: 52, height: 52, borderRadius: 14,
                background: "#eff6ff", border: "1.5px solid #bfdbfe",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 26, marginBottom: 18,
              }}>
                {icon}
              </div>
              <h3 style={{ fontWeight: 700, fontSize: 16, color: "#0f172a", marginBottom: 10 }}>
                {title}
              </h3>
              <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.65 }}>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
