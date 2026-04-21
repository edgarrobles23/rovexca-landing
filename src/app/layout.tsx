import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rovexca Health — Tu consultorio, pero inteligente",
  description:
    "Plataforma de gestión clínica para médicos. Agenda inteligente, expediente digital y control de ingresos. Menos caos, más control.",
  keywords: ["software médico", "gestión consultorio", "expediente digital", "agenda médica"],
  icons: {
    icon: [
      { url: "/images/isotipo.png", type: "image/png", sizes: "any" },
    ],
    shortcut: "/images/isotipo.png",
    apple: "/images/isotipo.png",
  },
  openGraph: {
    title: "Rovexca Health — Tu consultorio, pero inteligente",
    description: "Menos caos, más control. La plataforma hecha para médicos que quieren crecer.",
    type: "website",
    locale: "es_MX",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
