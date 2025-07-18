"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function ServicesHero() {
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
          scale: 4,
          opacity: 0,
        }}
        animate={
          shouldAnimate
            ? {
                scale: 1,
                opacity: 1,
              }
            : {
                scale: 4,
                opacity: 0,
              }
        }
        transition={{
          duration: 0.95, // 950ms duration
          ease: [0.19, 1, 0.22, 1], // easeOutExpo equivalent
          delay: shouldAnimate ? index * 0.07 : 0, // 70ms per letter only when animating
        }}
        className="inline-block"
        style={{
          lineHeight: "1em",
          transformOrigin: "50% 50%",
          backfaceVisibility: "hidden",
        }}
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ))
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
          <source src="/videos/serviciosVideo.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: shouldAnimate ? 0.8 : 3.8, duration: 0.8 }}
            className="text-sm text-amber-200 mb-4 tracking-wider"
          >
            Trabajo en equipo | Integridad | Compromiso
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">{splitText("Servicios")}</h1>
        </div>
      </div>
    </section>
  )
}
