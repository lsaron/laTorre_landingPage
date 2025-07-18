"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function ProjectsHero() {
  const [shouldAnimate, setShouldAnimate] = useState(false)

  // Start animation after page loader finishes
  useEffect(() => {
    // Wait for the page loader to finish (2.5s) plus a small buffer
    const timer = setTimeout(() => {
      setShouldAnimate(true)
    }, 3000) // 3 seconds to ensure loader is completely done

    return () => clearTimeout(timer)
  }, [])

  // Split text into individual letters
  const splitText = (text: string) => {
    return text.split("").map((char, index) => (
      <motion.span
        key={index}
        initial={{
          rotateY: -90,
          opacity: 0,
        }}
        animate={
          shouldAnimate
            ? {
                rotateY: 0,
                opacity: 1,
              }
            : {
                rotateY: -90,
                opacity: 0,
              }
        }
        transition={{
          duration: 1.3, // 1300ms duration
          ease: "easeOut",
          delay: shouldAnimate ? index * 0.045 : 0, // 45ms per letter
        }}
        className="inline-block"
        style={{
          lineHeight: "1em",
          transformOrigin: "0 0",
          backfaceVisibility: "hidden",
        }}
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ))
  }

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/placeholder.svg?height=1080&width=1920&text=Projects+Video+Poster"
        >
          <source src="/path/to/your/projects-video.mp4" type="video/mp4" />
          <source src="/path/to/your/projects-video.webm" type="video/webm" />
          {/* Fallback for browsers that don't support video */}
        </video>

        {/* Fallback background for when video doesn't load */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black" />
      </div>

      {/* Translucent black overlay for better text readability */}
      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
        <div className="max-w-2xl">
          <div className="relative inline-block pt-1 pr-1 pb-3 overflow-hidden">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              <span className="inline-block">{splitText("Nuestros")}</span>
              <br />
              <span className="inline-block text-[#f9dc5c]">{splitText("Proyectos")}</span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}
