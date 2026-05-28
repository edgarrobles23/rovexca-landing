import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import PageBreadcrumb from "@/components/landing/PageBreadcrumb";
import { formatDate } from "@/lib/blog-posts";

const POST = {
  slug: "reducir-inasistencias-consultorios-whatsapp",
  title: "Cómo reducir inasistencias en consultorios médicos con recordatorios por WhatsApp",
  description:
    "Aprende cómo los recordatorios automáticos por WhatsApp pueden reducir las inasistencias y mejorar la organización de la agenda en tu consultorio médico.",
  publishedAt: "2026-05-28",
  readTime: 6,
  category: "Agenda médica",
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
    "reducir inasistencias consultorio",
    "recordatorios citas médicas WhatsApp",
    "inasistencias consultorios México",
    "confirmación de citas WhatsApp",
    "agenda médica digital recordatorios",
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
      <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#2563eb", flexShrink: 0, marginTop: 8 }} />
      <span style={{ fontSize: 16, color: "#374151", lineHeight: 1.75 }}>{children}</span>
    </li>
  );
}

function InlineCTA({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <div style={{
      background: "#eff6ff", border: "1.5px solid #bfdbfe",
      borderRadius: 14, padding: "20px 24px", margin: "32px 0",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      gap: 16, flexWrap: "wrap",
    }}>
      <p style={{ fontSize: 15, color: "#1e40af", fontWeight: 600, margin: 0, lineHeight: 1.5 }}>{children}</p>
      <a href={href} className="btn-primary" style={{ fontSize: 14, flexShrink: 0 }}>
        Ver más →
      </a>
    </div>
  );
}

export default function InasistenciasArticlePage() {
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
          { name: "Reducir inasistencias", href: `/blog/${POST.slug}` },
        ]} />

        {/* ── Hero ──────────────────────────────────────────────────── */}
        <section style={{ background: "#080f1f", padding: "64px 1.5rem 56px" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <span style={{
                fontSize: 11, fontWeight: 700, color: "#60a5fa",
                background: "rgba(37,99,235,0.2)", padding: "4px 12px",
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
                  ["El costo real de las inasistencias", "#costo-inasistencias"],
                  ["Por qué los pacientes faltan a su cita", "#por-que-faltan"],
                  ["Cuándo y cómo enviar recordatorios efectivos", "#cuando-recordatorios"],
                  ["Por qué WhatsApp funciona mejor que el teléfono", "#whatsapp-vs-llamada"],
                  ["Cómo automatizar los recordatorios", "#automatizar-recordatorios"],
                ].map(([label, href]) => (
                  <li key={href}>
                    <a href={href} style={{ fontSize: 14, color: "#2563eb", textDecoration: "none", fontWeight: 500 }}>
                      {label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <p style={p}>
              Una cita no atendida no es solo un inconveniente: es un hueco en tu agenda que otro paciente podría haber ocupado, un ingreso que no llega y tiempo del médico mal aprovechado. Para muchos consultorios, las inasistencias son un problema silencioso que afecta la rentabilidad mes a mes.
            </p>
            <p style={p}>
              La buena noticia es que gran parte de las inasistencias tienen una causa simple y una solución accesible. Este artículo explica cómo funcionan los recordatorios de cita por WhatsApp y por qué son una de las herramientas más efectivas para mejorar la asistencia en cualquier tipo de consultorio.
            </p>

            <h2 id="costo-inasistencias" style={h2}>El costo real de las inasistencias en un consultorio médico</h2>
            <p style={p}>
              Cada médico tiene un valor de tiempo diferente. Pero el cálculo es siempre el mismo: si un paciente no llega a su cita, ese tiempo quedó bloqueado en tu agenda y no se pudo asignar a nadie más.
            </p>
            <p style={p}>
              Considera un consultorio que atiende 20 pacientes a la semana. Si el 10% no llega sin avisar, eso son 2 citas perdidas por semana, u 8 al mes. Dependiendo del tipo de consulta y especialidad, el impacto en los ingresos puede ser significativo.
            </p>
            <p style={p}>
              Además del impacto económico, las inasistencias afectan la agenda de otras formas: el médico o la recepcionista pierden tiempo intentando contactar al paciente, los espacios vacíos en la agenda son difíciles de llenar a último momento, y la percepción de eficiencia del consultorio se ve afectada.
            </p>

            <h2 id="por-que-faltan" style={h2}>Las razones más frecuentes por las que los pacientes no llegan</h2>
            <p style={p}>
              Antes de buscar soluciones, vale la pena entender por qué sucede. En la mayoría de los casos, las inasistencias no son por descuido del paciente, sino por falta de comunicación:
            </p>
            <ul style={ul}>
              <Li><strong>Se les olvidó.</strong> Es la razón más común. La cita fue agendada días o semanas atrás y nadie la recordó. Sin un recordatorio cercano a la fecha, es fácil que salga de la mente.</Li>
              <Li><strong>No supieron cómo avisar que no podían ir.</strong> Tuvieron un imprevisto, pero no tenían forma sencilla de cancelar o reagendar. En lugar de llamar y esperar, simplemente no llegaron.</Li>
              <Li><strong>La cita fue agendada con mucha anticipación.</strong> Cuanto más tiempo pasa entre el agendamiento y la cita, mayor es la probabilidad de que el paciente la olvide o sus circunstancias cambien.</Li>
              <Li><strong>No recibieron confirmación.</strong> Algunos pacientes no están seguros de si la cita quedó confirmada. Sin una comunicación clara, la duda se resuelve con la ausencia.</Li>
            </ul>

            <h2 id="cuando-recordatorios" style={h2}>Cuándo y cómo enviar recordatorios de cita efectivos</h2>
            <p style={p}>
              El momento del recordatorio importa tanto como el contenido. Un recordatorio demasiado anticipado llega cuando el paciente todavía no lo procesa. Uno demasiado cercano a la cita ya no da tiempo de actuar si hay un problema.
            </p>
            <h3 style={h3}>La secuencia que funciona mejor</h3>
            <ul style={ul}>
              <Li><strong>48 horas antes:</strong> Primer recordatorio con fecha, hora, dirección del consultorio y nombre del médico. Permite al paciente reorganizar su agenda si lo necesita.</Li>
              <Li><strong>24 horas antes:</strong> Recordatorio de confirmación. En este punto puedes pedir al paciente que confirme su asistencia con una respuesta simple.</Li>
              <Li><strong>Día de la cita (opcional):</strong> Para consultas por la tarde, un recordatorio matutino puede ser útil en ciertos casos.</Li>
            </ul>
            <h3 style={h3}>Qué debe incluir el mensaje</h3>
            <ul style={ul}>
              <Li>Nombre del paciente (personalizado, no genérico)</Li>
              <Li>Día y hora exacta de la cita</Li>
              <Li>Nombre del médico y/o nombre del consultorio</Li>
              <Li>Dirección o indicaciones de acceso si es necesario</Li>
              <Li>Instrucción clara: cómo confirmar o cómo cancelar/reagendar si no puede asistir</Li>
            </ul>

            <h2 id="whatsapp-vs-llamada" style={h2}>Por qué WhatsApp funciona mejor que el teléfono para recordatorios</h2>
            <p style={p}>
              Durante años, el estándar en consultorios fue llamar por teléfono para confirmar citas. Eso ya no es lo más eficiente. WhatsApp ha cambiado la forma en que las personas se comunican en México, y los consultorios que aprovechan este canal tienen ventajas claras:
            </p>
            <ul style={ul}>
              <Li><strong>Mayor tasa de apertura.</strong> Los mensajes de WhatsApp se leen mucho más que los correos electrónicos. La mayoría de los usuarios los revisa en minutos.</Li>
              <Li><strong>No interrumpe.</strong> A diferencia de una llamada, el paciente puede leer el recordatorio cuando le convenga y responder sin presión.</Li>
              <Li><strong>Permite respuesta directa.</strong> El paciente puede confirmar, preguntar o cancelar con una respuesta al mismo mensaje. Es más probable que lo haga que si tiene que marcar un número.</Li>
              <Li><strong>Es el canal que ya usan.</strong> No requiere que el paciente instale ninguna app nueva ni que aprenda a usar algo diferente.</Li>
              <Li><strong>Se puede automatizar.</strong> A diferencia de las llamadas, los mensajes de WhatsApp pueden enviarse automáticamente desde una plataforma de agenda, sin intervención humana.</Li>
            </ul>

            <InlineCTA href="/agenda-medica-digital">
              Rovexca Agenda envía recordatorios automáticos por WhatsApp antes de cada cita. Tu equipo no tiene que hacer nada — el sistema gestiona las confirmaciones por ti.
            </InlineCTA>

            <h2 id="automatizar-recordatorios" style={h2}>Cómo automatizar los recordatorios de cita en tu consultorio</h2>
            <p style={p}>
              La automatización de recordatorios no es una herramienta exclusiva de hospitales o grandes clínicas. Hoy existen plataformas de agenda médica que incluyen esta funcionalidad desde el primer día, a un costo accesible para cualquier consultorio.
            </p>
            <p style={p}>
              El flujo es simple: una vez configurado, el sistema envía automáticamente los recordatorios en los tiempos definidos, sin que la recepcionista ni el médico tengan que hacer nada. Si el paciente responde para cancelar, la cita se actualiza en la agenda.
            </p>
            <p style={p}>
              Esto libera tiempo del equipo administrativo para tareas que sí requieren intervención humana, reduce los errores de omisión (olvidar llamar a algún paciente) y mejora la experiencia del paciente, que recibe una comunicación profesional y puntual.
            </p>
            <p style={p}>
              El resultado directo es una agenda más llena, menos huecos imprevistos y mayor predictibilidad en los ingresos del mes. Para los ingresos del consultorio, menos inasistencias significa también menor variabilidad en la facturación mensual.
            </p>

            {/* CTA final */}
            <div style={{
              background: "#0f172a", borderRadius: 16,
              padding: "32px 28px", marginTop: 48, textAlign: "center",
            }}>
              <p style={{ fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 10, lineHeight: 1.3 }}>
                Mejora la organización de tus citas con Rovexca Agenda
              </p>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", marginBottom: 24, lineHeight: 1.65 }}>
                Recordatorios automáticos por WhatsApp, confirmación de asistencia y agenda actualizada en tiempo real.
              </p>
              <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
                <a href="/agenda-medica-digital" className="btn-primary" style={{ fontSize: 15 }}>
                  Ver agenda médica digital →
                </a>
                <a href="/control-ingresos-consultorio" className="btn-secondary" style={{ fontSize: 15 }}>
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
