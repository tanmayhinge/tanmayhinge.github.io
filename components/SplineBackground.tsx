"use client"

import dynamic from "next/dynamic"
import { useEffect, useRef } from "react"

// Import SplineViewer with no SSR
const SplineViewer = dynamic(() => import("./SplineViewer"), {
  ssr: false,
})

export default function SplineBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    // Function to handle mouse movement and determine when to enable/disable pointer events
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      // Get the element directly under the cursor (ignoring pointer-events)
      const elementsFromPoint = document.elementsFromPoint(e.clientX, e.clientY)

      // Check if any UI element is under the cursor
      const isOverUIElement = elementsFromPoint.some((el) => {
        // Check if the element or its parents have specific classes or attributes
        // that indicate it's a UI element we want to interact with
        return (
          el.tagName === "A" ||
          el.tagName === "BUTTON" ||
          el.tagName === "INPUT" ||
          el.tagName === "TEXTAREA" ||
          el.classList.contains("selectable") ||
          el.getAttribute("role") === "button" ||
          el.hasAttribute("data-interactive")
        )
      })

      // Toggle pointer-events based on what's under the cursor
      if (isOverUIElement) {
        // Disable pointer events on Spline container to allow interaction with UI
        containerRef.current.style.pointerEvents = "none"
      } else {
        // Enable pointer events on Spline container for 3D interaction
        containerRef.current.style.pointerEvents = "auto"
      }
    }

    // Add event listener for mouse movement
    document.addEventListener("mousemove", handleMouseMove)

    // Initial setup - enable pointer events on the Spline container
    if (containerRef.current) {
      containerRef.current.style.pointerEvents = "auto"
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div ref={containerRef} className="w-full h-full">
      <SplineViewer url="https://prod.spline.design/bHrFigCVlaTWdAnl/scene.splinecode" />
    </div>
  )
}

