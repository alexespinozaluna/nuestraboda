"use client"

import type React from "react"
import { Parisienne, Merriweather } from "next/font/google" // Importar las nuevas fuentes
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

// Definir la fuente Parisienne para títulos y nombres
const parisienne = Parisienne({
  subsets: ["latin"],
  weight: "400", // Parisienne solo tiene un peso
})

// Definir la fuente Merriweather para el texto general
const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"], // Pesos comunes para Merriweather
})

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' fontSize='90'>💒</text></svg>"
        />
        <style jsx global>{`
          :root {
            --font-parisienne: ${parisienne.style.fontFamily};
            --font-merriweather: ${merriweather.style.fontFamily};
          }
          body {
            font-family: var(--font-merriweather);
          }
          h1, h2, h3 {
            font-family: var(--font-parisienne);
          }
        `}</style>
      </head>
      <body className={merriweather.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
