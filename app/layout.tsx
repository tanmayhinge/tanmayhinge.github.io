import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import Navbar from "@/components/Navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Tanmay Hinge - Creative Software Developer",
  description: "I design and build immersive digital experiences using design and code. 3D, 2D, Apps, Web, Games, VR"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}



import './globals.css'