// Developed by Stiner.dev
// Professional Web Developer
// April 22, 2025
// Contact: https://stiner.dev

import type React from "react"
import "./globals.css"
import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import ScrollToTop from "@/components/scroll-to-top"
import ClientLayout from "@/components/client-layout"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "Mosaic Psychotherapy",
  description: "Virtual evidence-based therapy for adults across California",
  generator: 'Stiner.dev'
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-white`}>
        <ClientLayout>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            {children}
            <ScrollToTop />
          </ThemeProvider>
        </ClientLayout>
      </body>
    </html>
  )
}