import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import PageBreadcrumb from "@/components/landing/PageBreadcrumb";
import { formatDate } from "@/lib/blog-posts";

const POST = {
  slug: "software-medico-vs-excel-consultorios",
  title: "Software médico vs Excel: ventajas para administrar un consultorio",
  description:
    "Comparativa entre Excel y software médico para consultorios: agenda, expediente clínico e ingresos. Cuándo tiene sentido dar el salto al software especializado.",
  publishedAt: "2026-05-28",
  readTime: 8,
  category: "Gestión",
};

const blogPostingSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: POST.title,
  description: POST.description,
  image: "https://www.rovexca.ai/images/og-image.png",
  author: { "@type": "Organization", name: "Rovexca Health", url: "https://www.rovexca.ai" },
  publisher: {
    "@type": "Organization",
    name: "Rovexca Health",
    logo: { "@type": "ImageObject", url: "https://www.rovexca.ai/images/logo.png" },
  },
  datePublished: POST.publishedAt,
  dateModified: POST.publishedAt,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `https://www.rovexca.ai/blog/${POST.slug}`,
  },
  url: `https://www.rovexca.ai/blog/${POST.slug}`,
};

export const metadata: Metadata = {
  title: `${POST.title} | Rovexca Health`,
  description: POST.description,
  keywords: [
    "software médico vs Excel",
    "software para consultorio médico México",
    "administrar consultorio digital",
    "gestión consultorio médico",
    "dejar Excel consultorio médico",
  ],
  alternates: { canonical: `https://www.rovexca.ai/blog/${POST.slug}` },
  openGraph: {
    title: POST.title,
    description: POST.description,
    type: "article",
    locale: "es_MX",
    siteName: "Rovexca Health",
    url: `https://www.rovexca.ai/blog/${POST.slug}`,
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: POST.title }],
    publishedTime: POST.publishedAt,
  },
  twitter: {
    card: "summary_large_image",
    title: POST.title,
    description: POST.description,
    images: ["/images/og-image.png"],
  },
};

const p: React.CSSProperties = { fontSize: 16, color: "#374151", lineHeight: 1.8, marginBottom: 20 };
const h2: React.CSSProperties = { fontSize: "clamp(1.2rem, 2.5vw, 1.4rem)", fontWeight: 700, color: "#0f172a", lineHeight: 1.25, marginBottom: 14, marginTop: 44 };
const h3: React.CSSProperties = { fontSize: "1.05rem", fontWeight: 700, color: "#0f172a", lineHeight: 1.3, marginBottom: 10, marginTop: 28 };
const ul: React.CSSProperties = { listStyle: "none", padding: 0, margin: "0 0 20px", display: "flex", flexDirection: "column", gap: 10 };

function Li({ children }: { children: React.ReactNode }) {
  return (
    <li style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
      <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#7c3aed", flexShrink: 0, marginTop: 8 }} />
      <span style={{ fontSize: 16, color: "#374151", lineHeight: 1.75 }}>{children}</span>
    </li>
  );
}

function CompareRow({ area, excel, software }: { area: string; excel: string; software: string }) {
  return (
    <div style={{
      display: "grid", gridTemplateColumns: "1fr 1fr 1fr",
      gap: 0, borderBottom: "1px solid #f1f5f9",
    }}>
      <div style={{ padding: "14px 16px", background: "#f8fafc", borderRight: "1px solid #f1f5f9" }}>
        <p style={{ fontSize: 13, fontWeight: 700, color: "#0f172a", margin: 0 }}>{area}</p>
      </div>
      <div style={{ padding: "14px 16px", borderRight: "1px solid #f1f5f9" }}>
        <p style={{ fontSize: 13, color: "#6b7280", margin: 0, lineHeight: 1.5 }}>{excel}</p>
      </div>
      <div style={{ padding: "14px 16px" }}>
        <p style={{ fontSize: 13, color: "#16a34a", fontWeight: 600, margin: 0, lineHeight: 1.5 }}>{software}</p>
      </div>
    </div>
  );
}

function InlineCTA({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <div style={{
      background: "#f5f3ff", border: "1.5px solid #e9d5ff",
      borderRadius: 14, padding: "20px 24px", margin: "32px 0",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      gap: 16, flexWrap: "wrap",
    }}>
      <p style={{ fontSize: 15, color: "#6d28d9", fontWeight: 600, margin: 0, lineHeight: 1.5 }}>{children}</p>
      <a href={href} className="btn-primary" style={{ fontSize: 14, flexShrink: 0 }}>
        Ver más →
      </a>
    </div>
  );
}

export default function SoftwareVsExcelPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 68 }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
        />
        <PageBreadcrumb items={[
          { name: "Inicio", href: "/" },
          { name: "Blog", href: "/blog" },
          { name: "Software médico vs Excel", href: `/blog/${POST.slug}` },
        ]} />

        {/* ── Hero ──────────────────────────────────────────────────── */}
        <section style={{ background: "#080f1f", padding: "64px 1.5rem 56px" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <span style={{
                fontSize: 11, fontWeight: 700, color: "#c4b5fd",
                background: "rgba(124,58,237,0.2)", padding: "4px 12px",
                borderRadius: 999, textTransform: "uppercase", letterSpacing: "0.06em",
              }}>
                {POST.category}
              </span>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.35)" }}>
                {POST.readTime} min de lectura · {formatDate(POST.publishedAt)}
              </span>
            </div>
            <h1 style={{
              fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 800, color: "#fff",
              lineHeight: 1.15, letterSpacing: "-0.02em",
            }}>
              {POST.title}
            </h1>
          </div>
        </section>

        {/* ── Artículo ──────────────────────────────────────────────── */}
        <article style={{ background: "#fff", padding: "56px 1.5rem 80px" }}>
          <div style={{ maxWidth: 720, margin: "0 auto" }}>

            {/* Tabla de contenido */}
            <nav style={{
              background: "#f8fafc", border: "1.5px solid #e5e7eb",
              borderRadius: 14, padding: "20px 24px", marginBottom: 40,
            }}>
              <p style={{ fontSize: 12, fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 12 }}>
                Contenido del artículo
              </p>
              <ol style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                {[
                  ["Por qué los médicos empiezan con Excel", "#excel-al-inicio"],
                  ["Las señales de que Excel ya no alcanza", "#senales-limite"],
                  ["Comparativa área por área", "#comparativa"],
                  ["¿Cuándo vale la pena dar el salto?", "#cuando-cambiar"],
                  ["El cambio no tiene que ser complicado", "#como-empezar"],
                ].map(([label, href]) => (
                  <li key={href}>
                    <a href={href} style={{ fontSize: 14, color: "#7c3aed", textDecoration: "none", fontWeight: 500 }}>
                      {label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <p style={p}>
              La mayoría de los médicos que abren su primer consultorio empiezan con Excel. Es una herramienta conocida, está disponible en cualquier computadora y al inicio parece más que suficiente. Un archivo para la agenda, otro para los pacientes, otro para los ingresos del mes.
            </p>
            <p style={p}>
              Este enfoque funciona. Hasta que deja de funcionar. Y cuando ese momento llega, el problema no es solo de comodidad: es que el Excel empieza a costar tiempo, generar errores y hacer más difícil lo que debería ser simple.
            </p>

            <h2 id="excel-al-inicio" style={h2}>Por qué los médicos empiezan con Excel (y tiene sentido)</h2>
            <p style={p}>
              No hay nada malo en empezar con Excel. Para un médico que está comenzando, tiene sentido:
            </p>
            <ul style={ul}>
              <Li>Es gratuito y ya está instalado en la mayoría de las computadoras.</Li>
              <Li>Todos saben usarlo, al menos de forma básica.</Li>
              <Li>Para 5 o 10 pacientes a la semana, una hoja de cálculo es suficiente.</Li>
              <Li>Se puede personalizar para cualquier necesidad sin aprender nada nuevo.</Li>
            </ul>
            <p style={p}>
              El problema no es que Excel sea una mala herramienta. El problema es que no fue diseñado para gestionar consultorios médicos. Y cuando el volumen crece, esa limitación se hace evidente.
            </p>

            <h2 id="senales-limite" style={h2}>Las señales de que Excel ya no alcanza para tu consultorio</h2>
            <p style={p}>
              Hay momentos concretos en que el Excel deja de ser una solución y se convierte en un obstáculo. Estas son las señales más comunes:
            </p>
            <ul style={ul}>
              <Li><strong>La agenda no se actualiza sola.</strong> Cuando un paciente cancela o reagenda, alguien tiene que acordarse de cambiar el archivo. Si se olvida, hay dobles reservaciones o huecos que nadie ve.</Li>
              <Li><strong>No hay recordatorios automáticos.</strong> Para enviar un recordatorio de cita, alguien tiene que hacerlo manualmente — ya sea llamar o enviar un mensaje uno por uno.</Li>
              <Li><strong>El expediente del paciente está en otro lado.</strong> Las notas de consulta, los estudios y el historial están en archivos separados, sin vinculación con la agenda ni con los cobros.</Li>
              <Li><strong>No sabes cuánto generaste este mes sin hacer cálculos.</strong> El control de ingresos en Excel es manual: sumar columnas, buscar pagos pendientes, conciliar cobros. Cualquier celda editada por error cambia todo.</Li>
              <Li><strong>Hay más de una persona trabajando en el consultorio.</strong> Cuando la recepcionista, el médico y el administrador necesitan acceder al mismo archivo, la coordinación se vuelve caótica. Versiones distintas, cambios que se pisan.</Li>
              <Li><strong>No puedes acceder desde el celular.</strong> En guardia o fuera del consultorio, el archivo de Excel no está disponible en tiempo real.</Li>
            </ul>

            <InlineCTA href="/agenda-medica-digital">
              La agenda médica digital de Rovexca Health gestiona recordatorios, confirmaciones y cancelaciones automáticamente. Sin archivos, sin llamadas manuales.
            </InlineCTA>

            <h2 id="comparativa" style={h2}>Software médico vs Excel: comparativa área por área</h2>
            <p style={{ ...p, marginBottom: 24 }}>
              Esta tabla resume las diferencias más importantes entre operar un consultorio con Excel y hacerlo con un software médico especializado:
            </p>

            {/* Comparison table */}
            <div style={{
              border: "1.5px solid #e5e7eb", borderRadius: 14,
              overflow: "hidden", marginBottom: 32,
            }}>
              {/* Header */}
              <div style={{
                display: "grid", gridTemplateColumns: "1fr 1fr 1fr",
                background: "#0f172a",
              }}>
                <div style={{ padding: "12px 16px" }}>
                  <p style={{ fontSize: 12, fontWeight: 700, color: "rgba(255,255,255,0.5)", margin: 0, textTransform: "uppercase", letterSpacing: "0.06em" }}>Área</p>
                </div>
                <div style={{ padding: "12px 16px", borderLeft: "1px solid rgba(255,255,255,0.08)" }}>
                  <p style={{ fontSize: 12, fontWeight: 700, color: "rgba(255,255,255,0.5)", margin: 0, textTransform: "uppercase", letterSpacing: "0.06em" }}>Excel</p>
                </div>
                <div style={{ padding: "12px 16px", borderLeft: "1px solid rgba(255,255,255,0.08)" }}>
                  <p style={{ fontSize: 12, fontWeight: 700, color: "#86efac", margin: 0, textTransform: "uppercase", letterSpacing: "0.06em" }}>Software médico</p>
                </div>
              </div>

              <CompareRow
                area="Agenda de citas"
                excel="Lista manual. Sin recordatorios. Actualizaciones en cada dispositivo por separado."
                software="Vista digital con estado de cada cita. Recordatorios automáticos por WhatsApp."
              />
              <CompareRow
                area="Expediente clínico"
                excel="Notas en Word o archivos separados sin vinculación con la agenda."
                software="Historial completo del paciente vinculado a cada consulta. Accesible desde cualquier dispositivo."
              />
              <CompareRow
                area="Control de ingresos"
                excel="Suma manual de cobros. Propenso a errores. Difícil de conciliar al final del mes."
                software="Registro por consulta. Cobros pendientes visibles. Información financiera organizada."
              />
              <CompareRow
                area="Trabajo en equipo"
                excel="Un archivo compartido. Versiones distintas. Cambios que se pisan entre usuarios."
                software="Todos en la misma plataforma en tiempo real. Acceso controlado por rol."
              />
              <CompareRow
                area="Acceso remoto"
                excel="Solo desde la computadora donde está guardado (a menos de usar OneDrive/Google Drive)."
                software="Disponible desde cualquier navegador, celular o tablet. 100% en la nube."
              />
              <div style={{
                display: "grid", gridTemplateColumns: "1fr 1fr 1fr",
              }}>
                <div style={{ padding: "14px 16px", background: "#f8fafc", borderRight: "1px solid #f1f5f9" }}>
                  <p style={{ fontSize: 13, fontWeight: 700, color: "#0f172a", margin: 0 }}>Seguimiento de pacientes</p>
                </div>
                <div style={{ padding: "14px 16px", borderRight: "1px solid #f1f5f9" }}>
                  <p style={{ fontSize: 13, color: "#6b7280", margin: 0, lineHeight: 1.5 }}>Sin estructura. Requiere buscar en múltiples archivos.</p>
                </div>
                <div style={{ padding: "14px 16px" }}>
                  <p style={{ fontSize: 13, color: "#16a34a", fontWeight: 600, margin: 0, lineHeight: 1.5 }}>Historial completo, estado de seguimiento y próximas citas en un solo lugar.</p>
                </div>
              </div>
            </div>

            <h2 id="cuando-cambiar" style={h2}>¿Cuándo vale la pena dar el salto a software médico?</h2>
            <p style={p}>
              No hay una respuesta única, pero hay situaciones donde el cambio se vuelve prioritario:
            </p>
            <ul style={ul}>
              <Li>Cuando las inasistencias empiezan a afectar los ingresos de forma notable y no tienes un sistema para prevenirlas.</Li>
              <Li>Cuando el equipo crece: una recepcionista, un segundo médico, o un administrador que necesita acceso a la información.</Li>
              <Li>Cuando pierdes tiempo buscando información de pacientes en distintos archivos antes de cada consulta.</Li>
              <Li>Cuando al final del mes no tienes claridad sobre cuánto generaste, cuánto te deben y qué pacientes deben regresar.</Li>
              <Li>Cuando el tiempo que dedicas a tareas administrativas empieza a afectar la calidad de la atención médica.</Li>
            </ul>
            <p style={p}>
              En muchos casos, el costo de un software médico es menor que el ingreso que se pierde por una sola cita no atendida por semana. Dicho de otra forma: la inversión se paga sola si ayuda a mantener la agenda más llena.
            </p>

            <h2 id="como-empezar" style={h2}>El cambio no tiene que ser complicado</h2>
            <p style={p}>
              Uno de los mitos más comunes sobre el software médico es que implementarlo es costoso, tardado o requiere soporte técnico especializado. Eso era verdad hace diez años, con sistemas instalados en servidores locales.
            </p>
            <p style={p}>
              Hoy los sistemas modernos son 100% en la nube. Se accede desde el navegador, sin instalación, sin servidores propios y sin mantenimiento técnico. La configuración inicial toma minutos, no semanas.
            </p>
            <p style={p}>
              El proceso es simple: creas tu cuenta, configuras tu disponibilidad, empiezas a registrar pacientes y citas. En el mismo sistema puedes llevar el expediente clínico y el control de ingresos. Sin cambiar de app ni duplicar información.
            </p>

            <InlineCTA href="/expediente-clinico-electronico">
              Rovexca Clinical centraliza el historial completo de cada paciente. Notas de consulta, estudios y seguimiento — todo en la nube, accesible desde cualquier dispositivo.
            </InlineCTA>

            {/* CTA final */}
            <div style={{
              background: "#0f172a", borderRadius: 16,
              padding: "32px 28px", marginTop: 48, textAlign: "center",
            }}>
              <p style={{ fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 10, lineHeight: 1.3 }}>
                Centraliza la operación de tu consultorio con Rovexca Health
              </p>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", marginBottom: 24, lineHeight: 1.65 }}>
                Agenda médica digital, expediente clínico electrónico y control de ingresos en una sola plataforma en la nube.
              </p>
              <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
                <a href="/agenda-medica-digital" className="btn-primary" style={{ fontSize: 14 }}>
                  Agenda médica →
                </a>
                <a href="/expediente-clinico-electronico" className="btn-secondary" style={{ fontSize: 14 }}>
                  Expediente clínico
                </a>
                <a href="/control-ingresos-consultorio" className="btn-secondary" style={{ fontSize: 14 }}>
                  Control de ingresos
                </a>
              </div>
            </div>

          </div>
        </article>

      </main>
      <Footer />
    </>
  );
}
