"use client"

import MainSection from "@/components/MainSection"
import dynamic from "next/dynamic"

// Import SplineBackground with no SSR
const SplineBackground = dynamic(() => import("@/components/SplineBackground"), {
  ssr: false,
})

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Main content with lowest z-index */}
      <div className="relative z-[1]">
        <MainSection />
      </div>

      {/* Spline Background with middle z-index */}
      <div className="fixed inset-0 z-[50]">
        <SplineBackground />
      </div>
    </div>
  )
}

