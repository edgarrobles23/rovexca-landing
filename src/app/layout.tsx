import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rovexca Health — Software para Consultorios Médicos en México",
  description:
    "Software para consultorios médicos en México. Agenda médica digital, expediente clínico electrónico y control de ingresos en la nube. Prueba gratis 15 días, sin tarjeta.",
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
    icon: [
      { url: "/images/isotipo.png", type: "image/png", sizes: "any" },
    ],
    shortcut: "/images/isotipo.png",
    apple: "/images/isotipo.png",
  },
  openGraph: {
    title: "Rovexca Health — Software para Consultorios Médicos en México",
    description: "Agenda médica digital, expediente clínico electrónico y control de ingresos. Prueba gratis 15 días.",
    type: "website",
    locale: "es_MX",
    siteName: "Rovexca Health",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
