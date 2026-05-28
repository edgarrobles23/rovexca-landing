import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import PageBreadcrumb from "@/components/landing/PageBreadcrumb";
import { blogPosts, formatDate } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Blog de Rovexca Health — Recursos para consultorios médicos en México",
  description:
    "Artículos sobre gestión de consultorios, agenda médica digital, expediente clínico y administración financiera para médicos en México.",
  keywords: [
    "blog consultorio médico México",
    "recursos para médicos",
    "gestión de consultorios",
    "agenda médica digital",
    "administración consultorio",
  ],
  alternates: {
    canonical: "https://www.rovexca.ai/blog",
  },
  openGraph: {
    title: "Blog de Rovexca Health — Recursos para consultorios médicos en México",
    description:
      "Artículos sobre gestión de consultorios, agenda médica digital, expediente clínico y administración financiera para médicos en México.",
    type: "website",
    locale: "es_MX",
    siteName: "Rovexca Health",
    url: "https://www.rovexca.ai/blog",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Blog de Rovexca Health" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog de Rovexca Health — Recursos para consultorios médicos en México",
    description:
      "Artículos sobre gestión de consultorios, agenda médica digital, expediente clínico y administración financiera para médicos en México.",
    images: ["/images/og-image.png"],
  },
};

export default function BlogIndexPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 68 }}>
        <PageBreadcrumb items={[
          { name: "Inicio", href: "/" },
          { name: "Blog", href: "/blog" },
        ]} />

        {/* ── Hero ──────────────────────────────────────────────────── */}
        <section style={{ background: "#080f1f", padding: "72px 1.5rem 64px", textAlign: "center" }}>
          <div style={{ maxWidth: 640, margin: "0 auto" }}>
            <span style={{
              display: "inline-block", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em",
              textTransform: "uppercase", color: "#60a5fa",
              background: "rgba(96,165,250,0.12)", padding: "6px 16px", borderRadius: 999,
              marginBottom: 24,
            }}>
              Blog
            </span>
            <h1 style={{
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 800, color: "#fff",
              lineHeight: 1.15, marginBottom: 20, letterSpacing: "-0.025em",
            }}>
              Recursos para consultorios
              <br />
              <span style={{ color: "#60a5fa" }}>médicos en México</span>
            </h1>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,0.6)", lineHeight: 1.7 }}>
              Guías prácticas sobre gestión, agenda, expediente clínico y administración para médicos que quieren operar con más control y menos esfuerzo.
            </p>
          </div>
        </section>

        {/* ── Artículos ─────────────────────────────────────────────── */}
        <section style={{ background: "#f8fafc", padding: "72px 1.5rem" }}>
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 24 }}>
              {blogPosts.map((post) => (
                <a
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="card"
                  style={{
                    display: "flex", flexDirection: "column",
                    background: "#fff", borderRadius: 18,
                    textDecoration: "none",
                    overflow: "hidden",
                  }}
                >
                  {/* Card header */}
                  <div style={{ padding: "24px 24px 0" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
                      <span style={{
                        fontSize: 11, fontWeight: 700, color: post.categoryColor,
                        background: post.categoryBg, padding: "4px 10px",
                        borderRadius: 999, textTransform: "uppercase", letterSpacing: "0.06em",
                      }}>
                        {post.category}
                      </span>
                      <span style={{ fontSize: 12, color: "#9ca3af" }}>
                        {post.readTime} min de lectura
                      </span>
                    </div>
                    <h2 style={{
                      fontSize: 17, fontWeight: 700, color: "#0f172a",
                      lineHeight: 1.35, marginBottom: 12,
                    }}>
                      {post.title}
                    </h2>
                    <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.65 }}>
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Card footer */}
                  <div style={{
                    marginTop: "auto", padding: "20px 24px",
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    borderTop: "1px solid #f1f5f9",
                  }}>
                    <span style={{ fontSize: 12, color: "#9ca3af" }}>
                      {formatDate(post.publishedAt)}
                    </span>
                    <span style={{ fontSize: 13, fontWeight: 600, color: "#2563eb" }}>
                      Leer artículo →
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────── */}
        <section style={{ background: "#fff", padding: "64px 1.5rem", textAlign: "center" }}>
          <div style={{ maxWidth: 520, margin: "0 auto" }}>
            <h2 className="heading" style={{ fontSize: "clamp(1.4rem, 3vw, 1.875rem)", marginBottom: 14 }}>
              ¿Listo para poner en práctica lo que aprendiste?
            </h2>
            <p style={{ fontSize: 16, color: "#6b7280", lineHeight: 1.7, marginBottom: 28 }}>
              Rovexca Health te ayuda a digitalizar y automatizar la operación de tu consultorio desde el primer día.
            </p>
            <a href="/#demo" className="btn-primary" style={{ fontSize: 15 }}>
              Solicitar demo gratuita →
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
