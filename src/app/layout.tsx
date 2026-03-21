import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Optimizamos la carga de la fuente a nivel de servidor
const inter = Inter({ subsets: ["latin"], display: 'swap' });

// Metadatos para SEO y cuando compartas tu link en LinkedIn
export const metadata: Metadata = {
  title: "Rubén Simón | Software Engineer",
  description: "Portafolio profesional de Rubén. Ingeniero de Software especializado en desarrollo web y arquitectura de sistemas.",
  openGraph: {
    title: "Tu Nombre | Software Engineer",
    description: "Ingeniero de Software especializado en desarrollo web y arquitectura de sistemas.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-zinc-200 antialiased`}>
        {children}
      </body>
    </html>
  );
}