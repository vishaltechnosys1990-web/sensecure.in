import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Sensecure Integrated Solutions Pvt. Ltd. - Leading Traffic Infrastructure Manufacturer in India",
  description:
    "Premier manufacturer and supplier of traffic signal lights, boom barriers, and commercial displays for government projects across India. ISO certified with 15+ years of experience in Madhya Pradesh.",
  keywords:
    "traffic signals, boom barriers, commercial displays, government projects, traffic infrastructure, India, manufacturing, Sensecure, Madhya Pradesh, Arera Colony",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  )
}
