import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GlobalTrialModal from "@/components/landing/GlobalTrialModal";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const BASE_URL = "https://www.rovexca.ai";

// og:image temporal — reemplazar por /images/og-image.png (1200×630 px) cuando esté disponible
const OG_IMAGE = {
  url: "/images/og-image.png",
  alt: "Rovexca Health — Software para Consultorios Médicos en México",
  width: 1200,
  height: 630,
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "Rovexca Health — Software para Consultorios Médicos en México",
  description:
    "Software para consultorios médicos en México. Automatiza citas por WhatsApp, expediente clínico digital y control de ingresos. Prueba gratis 15 días.",
  keywords: [
    "software para consultorios médicos",
    "software médico México",
    "agenda médica digital",
    "expediente clínico electrónico",
    "sistema para consultorios",
    "software para médicos",
    "gestión de consultorio médico",
    "expediente digital médico",
    "control de pacientes",
    "software médico en la nube",
  ],
  icons: {
    icon: [{ url: "/images/isotipo.png", type: "image/png", sizes: "any" }],
    shortcut: "/images/isotipo.png",
    apple: "/images/isotipo.png",
  },
  openGraph: {
    title: "Rovexca Health — Software para Consultorios Médicos en México",
    description:
      "Software para consultorios médicos en México. Automatiza citas por WhatsApp, expediente clínico digital y control de ingresos. Prueba gratis 15 días.",
    type: "website",
    locale: "es_MX",
    siteName: "Rovexca Health",
    url: BASE_URL,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rovexca Health — Software para Consultorios Médicos en México",
    description:
      "Software para consultorios médicos en México. Automatiza citas por WhatsApp, expediente clínico digital y control de ingresos. Prueba gratis 15 días.",
    images: [OG_IMAGE.url],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Rovexca Health",
  url: "https://www.rovexca.ai",
  logo: "https://www.rovexca.ai/images/logo.png",
  description: "Software SaaS para consultorios médicos en México",
  areaServed: "MX",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    availableLanguage: "Spanish",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={inter.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <GoogleAnalytics />
        {children}
        <GlobalTrialModal />
      </body>
    </html>
  );
}
