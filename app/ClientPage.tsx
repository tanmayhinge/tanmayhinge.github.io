"use client"

import { useState } from "react"
import MainSection from "@/components/MainSection"
import Link from "next/link"
import { ArrowRight, X } from "lucide-react"
import dynamic from "next/dynamic"

// Import SplineBackground with no SSR
const SplineBackground = dynamic(() => import("@/components/SplineBackground"), {
  ssr: false,
})

export default function ClientPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <div className="min-h-screen bg-transparent text-white relative">
      {/* Main content with lowest z-index */}
      <div className="relative z-[1]">
        <MainSection />
      </div>

      {/* Spline Background with middle z-index */}
      <div className="fixed inset-0 z-[50]">
        <SplineBackground />
      </div>

      {/* Navigation with highest z-index */}
      <nav className="fixed top-0 left-0 right-0 z-[100] py-4 sm:py-8">
        <div className="w-full px-4 sm:px-6 flex justify-between items-center">
          {/* Logo at extreme left */}
          <div className="z-[200]">
            <Link href="/" className="text-xl sm:text-2xl font-medium" style={{ pointerEvents: "auto" }}>
              Tanmay Hinge
            </Link>
          </div>

          {/* Center navigation links (desktop only) */}
          <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center gap-8 z-[200]">
            <Link href="#work" className="hover:text-gray-300" style={{ pointerEvents: "auto" }}>
              Work
            </Link>
            <Link href="#about" className="hover:text-gray-300" style={{ pointerEvents: "auto" }}>
              About
            </Link>
            <Link href="#contact" className="hover:text-gray-300" style={{ pointerEvents: "auto" }}>
              Contact
            </Link>
          </div>

          {/* Right section - Button and mobile menu toggle */}
          <div className="z-[200]">
            {/* Mobile menu button (only visible on small screens) */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden w-8 h-8 flex flex-col justify-center gap-1.5"
              style={{ pointerEvents: "auto" }}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <>
                  <span className="w-full h-0.5 bg-white"></span>
                  <span className="w-full h-0.5 bg-white"></span>
                </>
              )}
            </button>

            {/* Let's collaborate button (desktop only) */}
            <Link
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 border border-white px-4 py-2 hover:bg-white hover:text-black transition-colors bg-black bg-opacity-70"
              style={{ pointerEvents: "auto" }}
            >
              Let's collaborate <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Mobile menu (only visible when open) */}
        {mobileMenuOpen && (
          <div
            className="md:hidden fixed inset-0 bg-black bg-opacity-95 z-[150] pt-20 px-4"
            style={{ pointerEvents: "auto" }}
          >
            <div className="flex flex-col items-center gap-8 text-xl">
              <Link href="#work" className="hover:text-gray-300" onClick={() => setMobileMenuOpen(false)}>
                Work
              </Link>
              <Link href="#about" className="hover:text-gray-300" onClick={() => setMobileMenuOpen(false)}>
                About
              </Link>
              <Link href="#contact" className="hover:text-gray-300" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 border border-white px-4 py-2 mt-4 hover:bg-white hover:text-black transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Let's collaborate <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  )
}

