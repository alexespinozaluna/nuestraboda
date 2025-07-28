import type React from "react"
import type { Metadata } from "next"
import ClientLayout from "./ClientLayout"
import "./globals.css" // Import globals.css at the top of the file

export const metadata: Metadata = {
  title: "Nuestra boda - Alex & Yisela • 22 de diciembre de 2025",
  description:
    "Con inmensa alegría, queremos invitarte a compartir uno de los momentos más importantes de nuestras vidas.",
  keywords: "boda, matrimonio, Alex, Yisela, invitación, 22 de diciembre 2025, ceremonia religiosa, ceremonia civil",
  authors: [{ name: "Alex & Yisela" }],
  openGraph: {
    title: "Nuestra boda - Alex & Yisela • 22 de diciembre de 2025",
    description:
      "Con inmensa alegría, queremos invitarte a compartir uno de los momentos más importantes de nuestras vidas.",
    type: "website",
    locale: "es_ES",
    siteName: "Boda Alex & Yisela",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nuestra boda - Alex & Yisela • 22 de diciembre de 2025",
    description:
      "Con inmensa alegría, queremos invitarte a compartir uno de los momentos más importantes de nuestras vidas.",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ClientLayout>{children}</ClientLayout>
}
