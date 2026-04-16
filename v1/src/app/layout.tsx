import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, DM_Sans, Outfit, Nunito_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SiteShell from "@/components/SiteShell";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const dm = DM_Sans({
  variable: "--font-dm",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const nunito = Nunito_Sans({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "iTCS S.A. — Information Technology Consulting & Support",
    template: "%s | iTCS S.A.",
  },
  description:
    "Empresa líder en prestación de servicios de tecnología de la información en Paraguay. Soluciones de infraestructura, ciberseguridad, networking, backup y más.",
  keywords: [
    "iTCS", "tecnología", "Paraguay", "ciberseguridad",
    "infraestructura IT", "Sophos", "Veeam", "HPE",
  ],
  openGraph: {
    type: "website",
    locale: "es_PY",
    siteName: "iTCS S.A.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${jakarta.variable} ${dm.variable} ${outfit.variable} ${nunito.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
