import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { StructuredData } from "@/components/StructuredData";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Sistema de Gestão para Escolas Pequenas | Turma Simples - Automatize Matrículas e Cobranças",
  description: "Sistema completo para escolas de idiomas, cursos técnicos e livres. Automatize matrículas, cobranças PIX/boleto, certificados e comunicação WhatsApp. Reduza inadimplência em 70%. Teste grátis 14 dias.",
  keywords: "sistema gestão escolar pequena, escola idiomas gestão, curso técnico sistema, matrícula digital escola, cobrança recorrente PIX escola, certificado automático curso, WhatsApp escola, gestão curso livre, sistema escola música, curso estética gestão, escola reforço sistema, inadimplência escolar, automação educacional",
  authors: [{ name: "Turma Simples" }],
  creator: "Turma Simples",
  publisher: "Turma Simples",
  robots: "index, follow",
  alternates: {
    canonical: "https://turmasimples.com.br",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32" }
    ],
    apple: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://turmasimples.com.br",
    title: "Sistema de Gestão para Escolas Pequenas | Turma Simples",
    description: "Automatize sua escola de idiomas, curso técnico ou livre. Matrículas digitais, cobranças PIX/boleto automáticas, certificados instantâneos e comunicação WhatsApp. Reduza inadimplência em 70%.",
    siteName: "Turma Simples",
    images: [
      {
        url: "/turma-logo.png",
        width: 1200,
        height: 630,
        alt: "Turma Simples - Sistema de Gestão Escolar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sistema de Gestão para Escolas Pequenas | Turma Simples",
    description: "Automatize matrículas, cobranças e certificados da sua escola. Reduza inadimplência em 70%. Teste grátis 14 dias.",
    images: ["/turma-logo.png"],
  },
  other: {
    "google-site-verification": "pending",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <StructuredData />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <GoogleAnalytics measurementId="AW-798003940" />
        {children}
        <SpeedInsights/>
      </body>
    </html>
  );
}
