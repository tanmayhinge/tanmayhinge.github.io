"use client"

import { useEffect, useRef } from "react"

interface SplineViewerProps {
  url: string
}

export default function SplineViewer({ url }: SplineViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Only run in browser
    if (typeof window === "undefined") return

    // Check if the script is already loaded
    const scriptExists = document.querySelector('script[src*="@splinetool/viewer"]')

    if (!scriptExists) {
      // Load the script dynamically
      const script = document.createElement("script")
      script.type = "module"
      script.src = "https://unpkg.com/@splinetool/viewer@1.9.82/build/spline-viewer.js"
      script.async = true
      document.head.appendChild(script)

      script.onload = () => {
        insertSplineViewer()
      }
    } else {
      insertSplineViewer()
    }

    function insertSplineViewer() {
      if (containerRef.current) {
        // Clear container first
        containerRef.current.innerHTML = ""

        // Create and append the spline-viewer element
        const splineViewer = document.createElement("spline-viewer")
        splineViewer.setAttribute("url", url)

        containerRef.current.appendChild(splineViewer)

        // Auto-focus the Spline viewer
        setTimeout(() => {
          splineViewer.click()

          // Dispatch a mousemove event to trigger cursor-following animations
          const moveEvent = new MouseEvent("mousemove", {
            bubbles: true,
            cancelable: true,
            view: window,
            clientX: window.innerWidth / 2,
            clientY: window.innerHeight / 2,
          })
          splineViewer.dispatchEvent(moveEvent)
        }, 1000)
      }
    }

    return () => {
      // Cleanup if needed
      if (containerRef.current) {
        containerRef.current.innerHTML = ""
      }
    }
  }, [url])

  return <div ref={containerRef} className="w-full h-full" />
}

